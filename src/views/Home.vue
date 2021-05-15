<template>
  <div class="flex flex-col items-center">
    <h2>Time Tracking</h2>
    <VueTailwindPicker
      :theme="{
        background: 'white',
        text: 'text-gray-700',
        border: 'border-gray-200',
        currentColor: 'text-gray-200',
        navigation: {
          background: 'bg-gray-100',
          hover: 'hover:bg-gray-200',
          focus: 'bg-gray-200',
        },
        picker: {
          rounded: 'rounded-full',
          selected: {
            background: 'bg-red-500',
            border: 'border-red-500',
            hover: 'hover:border-red-500',
          },
          holiday: 'text-red-400',
          weekend: 'text-green-400',
          event: 'bg-indigo-500',
        },
        event: {
          border: 'border-gray-200',
        },
      }"
      @change="(v) => (checkin = v)"
    >
      <input type="text" v-model="checkin" />
    </VueTailwindPicker>
    <TimeEntryList></TimeEntryList>
  </div>
</template>

<script>
import VueTailwindPicker from "vue-tailwind-picker";
import TimeEntryList from "@/components/TimeEntryList";
export default {
  name: "Home",
  components: { VueTailwindPicker, TimeEntryList },
  data() {
    return {
      checkin: "",
    };
  },
};
</script>
