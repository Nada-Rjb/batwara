<template>
    <div>
      <h2 class="font-bold text-gray-900">Your Friends</h2>
      <div v-if="friends.length">
        <ol>
          <li v-for="friend in friends" :key="friend">
            {{ friend.a }}
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
  import { createListResource } from "frappe-ui";
  import { sessionUser } from "../data/session";
  
  
  const FriendResource = createListResource({
    doctype: "Friend Mapping",
    field: ["*"], 
    auto: true,
  });
  

  const friends = computed(() => {
    return FriendResource.list.data});
  
  // Debugging logs
  console.log(FriendResource.list); // Inspect the resource list
  console.log(FriendResource);
  </script>
  