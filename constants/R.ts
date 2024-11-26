import { Colours } from './Colours'
import { DirectUrls } from './DirectUrls'
import { GlobalEntityKeys } from './GlobalEntityKeys'
import { HttpStatusCodes } from './HttpStatusCodes'
import { LocalKeys } from './LocalKeys'
import { MaxMinLimits } from './MaxMinLimits'
import { NetworkMethods } from './NetworkMethods'
import { Titles } from './Titles'
import { Urls } from './Urls'

class Constants {
    readonly title = new Titles()
    readonly globalEntityKey = new GlobalEntityKeys()
    readonly localKey = new LocalKeys()
    readonly maxMinLimit = new MaxMinLimits()
    readonly colour = new Colours()
    readonly url = new Urls()
    readonly directUrl = new DirectUrls()
    readonly httpStatusCode = new HttpStatusCodes()
    readonly networkMethod = new NetworkMethods()
}
export const R = new Constants()