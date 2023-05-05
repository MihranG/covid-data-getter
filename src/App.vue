<script setup lang="ts" >
import CovidData from './components/CovidData.vue'
import {getDataByMonth} from "./api";
import {EMonths} from "./types";
import {onMounted, ref} from "vue";
import DatePicker from "./components/DatePicker.vue";

onMounted(()=>{
  console.log('onMounted')
  getDataByMonth(EMonths.January)

})

const selectedData = ref(null)

function onDataSelected(data: any) {
  selectedData.value = data
}
</script>

<template>
  <v-app >
    <v-container fluid>
      <v-layout >
        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Navigation drawer">
              <date-picker/>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar title="Application bar"></v-app-bar>

        <v-main style="min-height: 300px;">
          <v-container>
            <v-row justify="center" no-gutters>
              <v-col cols="6">
                <CovidData msg="Vite + Vue" />
              </v-col>

            </v-row>
          </v-container>

        </v-main>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style scoped>

</style>
