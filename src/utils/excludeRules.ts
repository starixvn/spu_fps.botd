import { strIncludes } from './ponyfills'

export function excludeRules(ruleName: string): boolean {
    const userAgent: string = navigator.userAgent?.toLowerCase();

    if (ruleName == 'detectNotificationPermissions') {
        if(strIncludes(userAgent, 'samsungbrowser') || strIncludes(userAgent, 'heytapbrowser')){
            return true;
        }
    }

    return false;
}