import { getBrowserEngineKind, getBrowserKind, isAndroid, isDesktopSafari, isChromium86OrNewer } from '../utils/browser'

export interface BrowserInfoPayload {
    browserEngineKind: string,
    browserKind: string,
    isAndroid: boolean,
    isDesktopSafari: boolean,
    isChromium86OrNewer: boolean,
}

export default function getBrowserInfo(): BrowserInfoPayload {
    return {
        browserEngineKind: getBrowserEngineKind(),
        browserKind: getBrowserKind(),
        isAndroid: isAndroid(),
        isDesktopSafari: isDesktopSafari(),
        isChromium86OrNewer: isChromium86OrNewer(),
    }
}