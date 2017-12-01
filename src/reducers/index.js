const initialState = {
    angular: 0, 
    react: 0,
    vue: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_ANGULAR':
            console.log('Vote Angular!');
            return Object.assign({}, state, {
                angular: state.angular + 1
            })
        case 'VOTE_REACT':
            console.log('Vote React!');
            return Object.assign({}, state, {
                react: state.react + 1
            })
        case 'VOTE_VUE':
            console.log('Vote Vue!');
            return Object.assign({}, state, {
                vue: state.vue + 1
            })
        default: 
            return state
    }
}