<template>
    <div>
      <h2 class="font-bold text-gray-900">Your Friends</h2>
      <div v-if="friends.length">
        <ol class="fex space-y-3 mt-4">
          <li class = "flex items-center space-x-4" v-for="friend in friends" :key="friend">
                <Avatar
                :shape="'circle'"
                :ref_for="true"
                :url= "friend.user_image"
                :label=friend.full_name
                />
                <div>
                    {{ friend.full_name }}
                </div>
                
            
          </li>
        </ol>
      </div>
      <div v-else>              
        <p>No friends found.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { createListResource,Avatar } from "frappe-ui";
  import { sessionUser } from "../data/session";
  
  
  const FriendResource = createListResource({
    doctype: "Friend Mapping",
    fields: ["b as friend","b.full_name as full_name","b.user_image as user_image"], 
    filters:{
        "a":sessionUser() //current user 
    },
    orderBy: "b",
    auto: true,
  })
  
  const friends = computed(() => {
        return FriendResource.list.data || [];
    
   
})


 
  </script>
  