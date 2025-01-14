<template>
    <div>
       <PageHeader heading="Your Friends"/> 
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
      <div class="mt-4">
        <Button
            :variant="'solid'"
            :ref_for="true"
            theme="blue"
            size="sm"
            label="+ Add Expence"
            :loading="false"
            :loadingText="null"
            :disabled="false"
            :route="'/new-expense'"  
            @click="addExpense"
        >
            + Add Expence 
        </Button>
        <h1>{{ count }}</h1>
        <Rating
            size="md"
            label="Rating"
            v-if="count===1"
            v-model="rateing"

        />
        <h1>{{rateing}}</h1>
</div>
    </div>
  </template>
  
  <script setup>
  import { computed ,ref } from "vue";
  import { createListResource,Avatar ,Button ,Rating } from "frappe-ui";
  import { sessionUser } from "../data/session";
  import PageHeader from "../componants/common/PageHeader.vue";
  import { inject } from "vue";
  
  
  const FriendResource = createListResource({
    doctype: "Friend Mapping",
    fields: ["b as friend","b.full_name as full_name","b.user_image as user_image"], 
    filters:{
        "a":sessionUser() //current user 
    },
    orderBy: "b",
    auto: true,
  })
  
  const friends = inject(friends)
  
const count = ref(0);
const rateing=ref(0)
function addExpense() {
    if (count.value === 1) {
        count.value = 0;
    } else if (count.value === 0) {
        count.value = 1;  
    }
}

 
  </script>
  