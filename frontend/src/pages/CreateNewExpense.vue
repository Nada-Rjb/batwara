<template>
  <div>
    <PageHeader heading="New Expense">
      <template #actions>
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
              // handle click
            }
          }
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    };
  }
};
</script>

<style scoped>
/* Add your CSS here */
</style>