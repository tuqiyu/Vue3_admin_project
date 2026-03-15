import { createI18n } from 'vue-i18n'
import { localCache } from '@/utils/cache'
import { messages } from './messages'

const DEFAULT_LOCALE = 'zh-CN'

export function getLocale() {
  return localCache.getCache('locale') || DEFAULT_LOCALE
}

export const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages,
})
