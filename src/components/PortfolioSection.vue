<template>
  <div class="text-center">
    <h1><slot></slot></h1>
    <v-card v-for="(item, index) in sectionItems" :key="index" class="ma-2">
      <v-card-title class="justify-center">
        {{ item.title }}
      </v-card-title>
      <v-card-text>
        {{ item.text }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    sectionItems: {
      type: Array,
      required: true
    }
  },
}
</script>