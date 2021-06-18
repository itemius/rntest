import Realm from "realm";
import ImageSchema from "./schemas";

const realm = await Realm.open({
    path: "myrealm",
    schema: [ImageSchema],
  });