import { strIncludes } from './ponyfills'

export function excludeRules(ruleName: string): boolean {
    const userAgent: string = navigator.userAgent?.toLowerCase();

    if (ruleName == 'detectNotificationPermissions') {
        if (strIncludes(userAgent, 'samsungbrowser') || strIncludes(userAgent, 'heytapbrowser')) {
            return true;
        }
    }

    if (ruleName == 'detectVmFromMemoryScreenDimensions') {
        const tvUserAgentRegex = /smart[- ]?tv|apple\s?tv|googletv|android tv|opera tv|dtvnetbrowser|sonycebrowser|bravia 4k|netflix|pov_tv-hdmi-200bt|dlnadoc\/|hbbtv|tv\s?safari|roku\/dvp|nsz-gs7\/gx70|crkey|aftm|aftt|gtv100|nintendobrowser|playstation/i;

        if (tvUserAgentRegex.test(userAgent)) {
            console.log('tvUserAgentRegex true');
            return true;
        }
    }

    return false;
}