export type AppleColorTheme = 'light' | 'dark' | 'hc-light' | 'hc-dark'

// Standard Colors
// 'systemBlue' | 'systemGreen' | 'systemRed' | 'systemOrange' | 'systemYellow' | 'systemIndigo' | 'systemPurple' | 'systemPink' | 'systemTeal'
type StandardColor = 'Blue' |
    'Green' |
    'Indigo' |
    'Orange' |
    'Pink' |
    'Purple' |
    'Red' |
    'Teal' |
    'Yellow'

type CssVarStandardColor = `system${Capitalize<StandardColor>}`

// Gray Colors
// 'systemGray' | 'systemGray2' | 'systemGray3' | 'systemGray4' | 'systemGray5' | 'systemGray6'
type GrayColor = 'Gray' |
    'Gray2' |
    'Gray3' |
    'Gray4' |
    'Gray5' |
    'Gray6'

type CssVarGrayColor = `system${Capitalize<GrayColor>}`

// 下面 2 個，是 Fill Background 共同的字眼
type Level23 = 'secondary' | 'tertiary'
type Level234 = Level23 | 'quaternary'

// 'systemBackground' | 'secondarySystemBackground' | 'tertiarySystemBackground'
type CssVarBackgroundColor = `${'system' | `${Level23}System`}Background`
// 'systemGroupedBackground' | 'secondarySystemGroupedBackground' | 'tertiarySystemGroupedBackground'
type CssVarGroupedBackgroundColor = `${'system' | `${Level23}System`}GroupedBackground`
// 'systemFill' | 'secondarySystemFill' | 'tertiarySystemFill' | 'quaternarySystemFill'
type CssVarFillColor = 'systemFill' |`${Level234}SystemFill`

// Label Colors
// 'label' | 'secondaryLabel' | 'tertiaryLabel' | 'quaternaryLabel'
type CssVarLabelColor = `${Level234}Label` | 'label'
// lightText darkText
type CssVarLightDarkColor = 'lightText' | 'darkText'

// OtherColor
// 'separator' | 'opaqueSeparator' | 'link' | 'placeholderText'
type CssVarOtherColor = 'separator' | 'opaqueSeparator' | 'link' | 'placeholderText'

export type CssVarName = CssVarStandardColor |
    CssVarGrayColor |
    CssVarBackgroundColor |
    CssVarGroupedBackgroundColor |
    CssVarFillColor |
    CssVarLabelColor |
    CssVarLightDarkColor |
    CssVarOtherColor


export function setTheme(theme?: AppleColorTheme): void

/** 回傳 `var(--name)`，例如 el.style.background = cssVar('systemGroupedBackground') */
export function cssVar(name: CssVarName): string
