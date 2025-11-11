import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            const newState = [...state]
                .map(item => ({...item})) // создаем новые объекты
                .sort((a, b) => {
                    switch (action.payload) {
                        case 'up':
                            return a.name.localeCompare(b.name)

                        case 'down':
                            return b.name.localeCompare(a.name)

                        default:
                            return 0
                    }
                })
            return newState
        }
        case 'check': {

            return state.filter((state) => state.age >= action.payload)
        }
        default:
            return state
    }
}
