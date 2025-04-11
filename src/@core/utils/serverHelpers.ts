// Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { SystemMode } from '@core/types'
import themeConfig from '@configs/themeConfig'

export const getSettingsFromCookie = (): Settings => {
  if (typeof document === 'undefined') return {} // กัน server-side call

  const cookies = document.cookie.split('; ')
  const cookie = cookies.find(cookie => cookie.startsWith(themeConfig.settingsCookieName))

  if (cookie) {
    const cookieValue = cookie.split('=')[1]
    try {
      return JSON.parse(decodeURIComponent(cookieValue) || '{}')
    } catch (e) {
      console.error('Invalid cookie JSON', e)
      return {}
    }
  }

  return {}
}

export const getMode = (): SystemMode => {
  const settingsCookie = getSettingsFromCookie()

  return (settingsCookie.mode || themeConfig.mode) as SystemMode
}

export const getSystemMode = (): SystemMode => {
  if (typeof document === 'undefined') return 'light'

  const mode = getMode()

  const cookies = document.cookie.split('; ')
  const colorPrefCookie = cookies.reduce((acc, cookie) => {
    const [key, value] = cookie.split('=')
    if (key === 'colorPref') return value
    return acc
  }, 'light') as SystemMode

  return mode === ('system' as SystemMode) ? colorPrefCookie : mode
}

export const getServerMode = (): SystemMode => {
  const mode = getMode()
  const systemMode = getSystemMode()

  return mode === ('system' as SystemMode) ? systemMode : mode
}

export const getSkin = (): string => {
  const settingsCookie = getSettingsFromCookie()

  return settingsCookie.skin || 'default'
}
