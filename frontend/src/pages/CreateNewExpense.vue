<template>
    <div>
        <PageHeader heading="New Expense">
        <template #actions >
            <Button> Save </Button>
        </template>  
    </PageHeader>   
    </div>
    <div class="space-y-4">
    <FormControl
        :type="'text'"
        size="sm"
        variant="subtle"
        placeholder="Pizza"
        label="Description"
    />
    <FormControl
        :type="'number'"
        size="sm"
        variant="subtle"
        placeholder="0.00"
        label="Amount"
    />
    <FormControl
        :type="'date'"
        :ref_for="true"
        size="sm"
        variant="subtle"
        placeholder="Placeholder"
        :disabled="false"
        label="Expense Date"
        v-model="inputValue"
  />
    <div class="pt-4 text-gray-900 font-semibold text-xl">
        Paid by <Button variant="outline"> You </Button> and split 
        <Dropdown
      :options="[
        {
          label: 'Equally',
          onClick: () => {
            splitMethod = 'Equally'
          },
        },
        {
          label: 'Manually',
          onClick: () => {
            splitMethod = 'Manually'
          },
        },
      ]"
      :button="{
        label: splitMethod,
        variant: 'outline',
      }"
    />
    </div>
    <div>
    <h3 class="mb-2">Split With:</h3>
    <Autocomplete
      placeholder="Select Friends"
      :options="friendAutocompleteOptions"
      multiple="true"
      v-model="selectedFriends" 
    />
    

</div>
    </div>
  </template>

  <script setup>
  import PageHeader from "../componants/common/PageHeader.vue";
  import { createListResource,Avatar ,Button ,Rating ,FormControl,Dropdown, Autocomplete } from "frappe-ui";
  import { ref, inject, computed  } from "vue"
  import { sessionUser } from "@/data/session"

  const friends = inject('friends');
  const splitMethod = ref ("Equally")
  const selectedFriends = ref([{
  label: 'Me',
  value: sessionUser()
}]);

  const friendAutocompleteOptions = computed(() => {
  const options = friends.value.map(f => ({ label: f.full_name, value: f.friend }));
  options.push({
    label: 'Me',
    value: sessionUser()
  });
  return options;
});


</script>


  