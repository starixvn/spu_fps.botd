import { BotKind, BrowserKind, ComponentDict, DetectorResponse, State } from '../types'
import { getBrowserKind } from '../utils/browser'
import { excludeRules } from '../utils/excludeRules'

export function detectNotificationPermissions({ notificationPermissions }: ComponentDict): DetectorResponse {
  if(excludeRules('detectNotificationPermissions'))
    return false;

  const browserKind = getBrowserKind()
  if (browserKind !== BrowserKind.Chrome) return false

  if (notificationPermissions.state === State.Success && notificationPermissions.value) {
    return BotKind.HeadlessChrome
  }
}