<template>
  <div class="mx-4 my-2">
    <router-view />
  </div>
</template>

<script setup>
import { computed, provide } from "vue"; 
import { getFriendListResource } from "@/data/friends.js"

const FriendList = getFriendListResource();
const friends = computed(() => {
  return FriendList.list.data || [];
});

provide("friends", friends); 
</script>

<style scoped>
.track {
  appearance: none;
  background: #000;
  height: var(--trackHeight);
  border-radius: 999px;
}
</style>