<script setup lang="ts">
import { defineEmits, ref, watch } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { MAX_DATE, MIN_DATE } from "../utils.ts";

interface IProps {
  initialDate: Date | null;
}
const maxDate = MAX_DATE;
const minDate = MIN_DATE;
const props = withDefaults(defineProps<IProps>(), {
  initialDate: null,
});

const emit = defineEmits(["onDataChange"]);
const startDate = ref(new Date(minDate));
const selectedDate = ref<Date | null>(props.initialDate);

const onDateSelected = (date: Date) => {
  selectedDate.value = date;
  emit("onDataChange", date);
};
watch(selectedDate, onDateSelected);
</script>
<template>
  <VueDatePicker
    v-model="selectedDate"
    :enable-time-picker="false"
    :max-date="maxDate"
    :min-date="minDate"
    :start-date="startDate"
  ></VueDatePicker>
</template>
