export const setCoordinates = position => {
  return {
    type: 'SET_COORDINATES',
    payload: {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    },
  };
};
export const addLocation = location => {
  return {
    type: 'ADD_LOCATION',
    payload: location,
  };
};
export const addImage = image => {
  return {
    type: 'ADD_IMAGE',
    payload: image,
  };
};