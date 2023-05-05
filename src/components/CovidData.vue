<script setup lang="ts">
import { computed, onMounted, onUpdated, ref, watch } from "vue";
import { getDateString } from "../utils.ts";
import { getDataByDate } from "../api.ts";
interface IProps {
  selectedDate: Date | null;
}
const props = defineProps<IProps>();
const loading = ref<boolean>(false);
const dateString = computed(() =>
  props.selectedDate ? getDateString(props.selectedDate) : null
);

const selectedLocalDate = computed(() => {
  return props.selectedDate
    ? `Here is the data for ${dateString.value}`
    : "You haven't chosen a date yet please choose one";
});

onUpdated(() => {
  loading.value = true;
  if (dateString.value) {
    getDataByDate(dateString.value);
  }
});

const count = ref(0);
</script>

<template>
  <v-text-field>{{ selectedLocalDate }}</v-text-field>

  <v-card class="mx-auto" height="100%">
    <v-card-title> test </v-card-title>
    <v-card-item> item </v-card-item>
    <v-card-actions>
      <v-btn variant="outlined" @click="count++">count is {{ count }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
