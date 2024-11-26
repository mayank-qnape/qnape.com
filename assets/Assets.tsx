export const assetKey = {
    siteTextLogo: 'siteTextLogo'
} as const

type AssetKey = keyof typeof assetKey

export const getAsset = (key: AssetKey): string | null => {
    switch (key) {
        case assetKey.siteTextLogo: return ''
    }
    return null
}
