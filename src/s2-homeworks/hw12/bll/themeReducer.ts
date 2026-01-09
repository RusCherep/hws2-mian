export type ThemeState = {
    themeId: number
}

export type ThemeAction = {
    type: string,
    id: number
}

const initState: ThemeState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeAction): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {themeId: action.id}
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeAction => ({type: 'SET_THEME_ID', id}) // fix any
