export class HttpStatusCodes {
    //Success
    readonly success = 200;
    readonly $200 = 200;
    readonly created = 201;
    readonly $201 = 201;
    readonly updated = 202;
    readonly $202 = 202;
    readonly deleted = 210;
    readonly $210 = 210;

    //Client Error
    readonly badRequest = 400;
    readonly unauthenticated = 401;
    readonly invalidToken = 402;
    readonly unauthorized = 403;
    readonly notFound = 404;
    readonly mthdNotAllowed = 405;
    readonly notAcceptable = 406;
    readonly conflictData = 409;
    readonly gone = 410;
    readonly unprocessable = 422;
    readonly planExpired = 423;
    readonly failedDependency = 424;
    readonly upgradeRequired = 426;
    readonly msgLimitExceed = 428;
    readonly limitExceed = 429;

    //Server Error
    readonly serverErr = 500;
    readonly notImplemented = 501;
    readonly serverUnavail = 503;
    readonly failure = 510;
}