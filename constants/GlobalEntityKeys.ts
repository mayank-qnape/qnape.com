import ver from '../package.json'

export class GlobalEntityKeys {
    readonly uInfo = 'qnape_info'
    readonly sessionAuthToken = 'qnape_ses_tok'
    readonly sessionTraceId = 'qnape_ses_trace'
    readonly activeUserFrom = 'qnape_act_usr'

    readonly loggedInUserObj = `loggedInUserObj`

    readonly version = ver.version

    readonly env_type = process.env.REACT_APP_ENV
    readonly ui_base_url = process.env.REACT_APP_UI_BASE
    readonly api_base_url = process.env.REACT_APP_API_ENDPOINT
    readonly enc_key = process.env.REACT_APP_LOCAL_STORAGE_KEY

    readonly processState = 'processState'
}