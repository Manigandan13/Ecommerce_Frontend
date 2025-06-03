const initialState = {
 loading: false,
 success: false,
 message: '',
 error: null,
};

export const contactReducer = (state = initialState, action) => {
 switch (action.type) {
     case 'CONTACT_REQUEST':
         return { ...state, loading: true, success: false, error: null };
     case 'CONTACT_SUCCESS':
         return { ...state, loading: false, success: true, message: action.payload };
     case 'CONTACT_FAILURE':
         return { ...state, loading: false, error: action.payload };
     default:
         return state;
 }
};
