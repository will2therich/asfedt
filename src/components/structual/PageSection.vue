<template>
  <q-card :class="classes">
    <slot></slot>
  </q-card>
</template>

<script>
export default {
  name: "PageSection",
  props: {
    classes: {
      default: "",
      type: String
    }
  }
};
</script>

<style scoped></style>
