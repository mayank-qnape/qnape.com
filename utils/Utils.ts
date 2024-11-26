import { R } from '@/constants/R'

export const onImageError = (e: Event, imgUrl: string) => {
    const target = e.target as HTMLImageElement
    if (target && imgUrl) target.src = imgUrl
}

export const showConsole = <T>(type: 'log' | 'error' | 'warn', tag: string, payload: T) => {
    if (R?.globalEntityKey?.env_type !== R?.localKey?.production) {
        switch (type) {
            case 'log':
                console.log(`🟢 [${tag}]: 🛬 `, payload)
                break
            case 'error':
                console.error(`🔴 [${tag}]: 🚨 `, payload)
                break
            case 'warn':
                console.warn(`🟡 [${tag}]: 🤕 `, payload)
                break
            default:
                console.warn(`Unknown log type: [${type}]`)
        }
    }
}