<script setup lang="ts">
import { computed, onUpdated, ref } from "vue";
import { getDateString, prepareDataForTable } from "../utils.ts";
import { getDataByDate } from "../api.ts";
import { ITableData } from "../types.ts";
import LoadingSpinner from "./LoadingSpinner.vue";
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
  if (dateString.value) {
    loading.value = true;
    getDataByDate(dateString.value)
      .then((res) => {
        if (res) {
          const preparedData = prepareDataForTable(res);
          items.value = [preparedData];
        }
      })
      .finally(() => {
        loading.value = false;
      });
  }
});

const headers = ref([
  { text: "", group: "Cases", value: "cases" },
  // { text: 'Negative', group: 'Tests', value: 'negativeTests' },
  // { text: 'Pending', group: null, value: 'pendingTests' },
  { text: "currently", group: "Hospitalized", value: "hospitalized" },
  { text: "in ICU", group: null, value: "inIcu" },
  { text: "on Ventilator", group: null, value: "onVentilator" },
  { text: "recovered", group: "Outcomes", value: "recovered" },
  { text: "death", group: null, value: "death" },
  { text: "positive + negative", group: "Total test results", value: "tests" },
]);
const items = ref<ITableData[]>([] as ITableData[]);
const options = {
  pagination: false,
};
</script>

<template>
  <v-text-field>{{ selectedLocalDate }}</v-text-field>

  <v-card class="mx-auto">
    <v-card-title> Table with Grouped Columns </v-card-title>
    <LoadingSpinner v-if="loading" />
    <v-data-table
      v-else
      :headers="headers"
      :items="items"
      :options="options"
      class="elevation-1"
    >
      <template #headers="{ headers }">
        <tr>
          <th
            v-for="header in headers[0]"
            :key="header.key"
            v-text="header.group"
            :class="header.group ? 'border-b-0 border-left' : 'border-b-0'"
          ></th>
        </tr>
        <tr class="font-weight-bold text-caption row-height-30">
          <th
            v-for="header in headers[0]"
            :key="header.key"
            v-text="header.text"
            :class="header.group ? 'border-left' : ''"
          ></th>
        </tr>
      </template>
      <template #bottom />
    </v-data-table>
  </v-card>
</template>

<style scoped>
.v-data-table .row-height-30 th {
  height: 18px !important;
}
.border-left {
  border-left: 1px solid rgb(0, 0, 0, 0.12);
}
</style>
