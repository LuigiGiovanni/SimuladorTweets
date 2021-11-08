
export const tweetReducer = (state = [], action ) => {
   
    switch (action.type) {
        case 'add':
            return [ ...state, action.payload  ]
        case 'delete': 
            return state.filter( tweet => ( tweet.id !== action.payload ))
    
        default:
            return state;
    }

}
