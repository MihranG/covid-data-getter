<template>
  <v-datetime-picker v-model="selectedDate" @input="onDateSelected"></v-datetime-picker>
</template>
<script setup lang="ts">
import {defineEmits, onMounted, ref} from 'vue'

interface IProps {
    initialDate: Date
}
const props = withDefaults(defineProps<IProps>(), {
    initialDate: new Date()
})
const { emit } = defineEmits(['onDataChange'])

const selectedDate = ref<Date>(props.initialDate)

onMounted(()=>{
    console.log('datePicker')
})
const onDateSelected = (date: Date) => {
  selectedDate.value = date
  emit('onDataChange', date)
}
</script>
