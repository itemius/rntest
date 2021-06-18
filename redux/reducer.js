const initialState = {
    coordinates: {lat: '', lng: ''},
    clickedLocations: [],
    images: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COORDINATES':
        return {
          ...state,
          coordinates: action.payload,
        };
      case 'ADD_LOCATION':
        return {
          ...state,
          clickedLocations: [...state.clickedLocations, action.payload],
        };
      case 'ADD_IMAGE':
        return {
          ...state,
          images: [...state.images, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  