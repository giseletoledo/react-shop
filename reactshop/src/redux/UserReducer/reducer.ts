interface User{
    name: string;
    email: string;
}

interface UserState{
    user: User | null;
}

const initialState: UserState = {
    user: null,
}

//Reducer - guarda o estado, manipula e altera

interface UserAction {
    type: string;
    payload: User
}

export function userReducer(state = initialState, action: UserAction) {
    
}