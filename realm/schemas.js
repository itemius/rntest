export const IMAGE_SCHEMA = 'Image';

export const ImageSchema = {
    name: IMAGE_SCHEMA,
    primaryKey: 'imgID',
    properties: {
      imgID: "int",
      lat: "double",
      lng: "double",
      date: "date",
      uri: "string"
    }
};