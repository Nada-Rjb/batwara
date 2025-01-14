import { createListResource} from "frappe-ui";
import { sessionUser } from "../data/session";





export function getFriendListResource () {
    return createListResource({
    doctype: "Friend Mapping",
    fields: ["b as friend","b.full_name as full_name","b.user_image as user_image"], 
    filters:{
        "a":sessionUser() //current user 
    },
    orderBy: "b",
    auto: true,
    cache: "Friend-list"
  })
}
  


