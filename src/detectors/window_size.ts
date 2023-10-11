import { BotKind, ComponentDict, DetectorResponse, State, BrowserKind } from '../types'
import { getDocumentFocus, getBrowserKind } from '../utils/browser'

export function detectWindowSize({ windowSize }: ComponentDict): DetectorResponse {
  if (windowSize.state !== State.Success) return false
  const { outerWidth, outerHeight } = windowSize.value
  // When a page is opened in a new tab without focusing it right away, the window outer size is 0x0
  if (!getDocumentFocus()) return

  if (getBrowserKind() == BrowserKind.Safari) {
    const userAgent = navigator.userAgent?.toLowerCase()
    const listExcluded = ['iphone; cpu iphone os 10', 'iphone; cpu iphone os 11', 'iphone; cpu iphone os 12'
                        , 'ipad; cpu os 10', 'ipad; cpu os 11', 'ipad; cpu os 12'];
    const checkInclude = listExcluded.some(function (keyword) {
      return userAgent.includes(keyword);
    });
    
    if(checkInclude){
      return
    }
  }

  if (outerWidth === 0 && outerHeight === 0) return BotKind.HeadlessChrome
}
