<script setup lang="ts">
import CovidData from "./components/CovidData.vue";
import { ref } from "vue";
import DatePicker from "./components/DatePicker.vue";

const selectedDate = ref<Date | null>(null);
function onDataSelected(data: Date) {
  selectedDate.value = data;
}
</script>

<template>
  <v-app>
    <v-container fluid>
      <v-layout class="app_layout">
        <v-navigation-drawer width="500" class="pa-5">
          <v-list>
            <v-list-item
              title="Choose a date between Apr 2020 and March 2021"
            />
          </v-list>
          <v-row>
            <date-picker
              @on-data-change="onDataSelected"
              :initial-date="selectedDate"
            />
          </v-row>
        </v-navigation-drawer>
        <v-app-bar title="Content"></v-app-bar>
        <v-main style="min-height: 300px">
          <v-container>
            <v-row justify="center" no-gutters>
              <v-col cols="6">
                <CovidData v-if="selectedDate" :selected-date="selectedDate" />
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style scoped>
.app_layout {
  min-height: 600px;
}
</style>
