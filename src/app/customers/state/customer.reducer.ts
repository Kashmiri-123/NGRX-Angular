const initialState = {
    customers: [
        {
            name: "Steppehen",
            phone: "9887675643",
            address: "Olivia",
            membership: "Platinum",
            id: 1
        }
    ],
    loading: false,
    loaded: true
}


export function customerReducer(state = initialState, action:any){
    switch(action.type){
        case "LOAD_CUSTOMERS": {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }
        default: {
            return state;
        }
    }
}