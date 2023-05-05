<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <v-text-field>{{ msg }}</v-text-field>

  <v-card class="mx-auto" >
    <v-card-title> test </v-card-title>
    <v-card-item> item </v-card-item>
    <v-card-actions>

    <v-btn variant="outlined" @click="count++">count is {{ count }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
