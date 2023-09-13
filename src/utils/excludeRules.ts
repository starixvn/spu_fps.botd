// import { strIncludes } from './ponyfills'
import { isAndroid } from './browser'

export function excludeRules(ruleName: string): boolean {

    if (ruleName == 'detectNotificationPermissions' && isAndroid()) {
        return true;
    }
    
    //     const userAgent: string = navigator.userAgent?.toLowerCase();
    //     const browserKeywords = [
    //         'samsungbrowser',
    //         'heytapbrowser',
    //         'puffin',
    //         'redmi',
    //         '; m',       // Xiaomi
    //         '; rmx',     // Realme
    //         '; alp-al',  // Huawei
    //         '; sm',      // Samsung
    //         '; yal-al',  // Honor
    //         '; col-al',  // Honor
    //         '; cph',     // Oppo
    //         'maxthon',
    //         'vivo',
    //         'coc_coc_browser'
    //     ];

    //     for (const keyword of browserKeywords) {
    //         if (strIncludes(userAgent, keyword)) {
    //             return true;
    //         }
    //     }

    return false;
}