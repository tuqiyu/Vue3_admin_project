import { localCache } from '@/utils/cache'

export type ThemeMode = 'light' | 'dark'

const THEME_KEY = 'theme-mode'

export function getThemeMode(): ThemeMode {
  return (localCache.getCache(THEME_KEY) as ThemeMode) || 'light'
}

export function setThemeMode(mode: ThemeMode) {
  localCache.setCache(THEME_KEY, mode)
  document.documentElement.setAttribute('data-theme', mode)
}

export function toggleThemeMode() {
  const next = getThemeMode() === 'light' ? 'dark' : 'light'
  setThemeMode(next)
  return next
}
