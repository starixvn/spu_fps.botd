import { isAndroid } from './browser'

export function excludeRules(ruleName: string): boolean {

    if (ruleName == 'detectNotificationPermissions' && isAndroid()) {
        return true;
    }

    return false;
}