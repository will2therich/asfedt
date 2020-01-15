<template>
  <q-card bordered flat style="border-radius: 0">
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">Our Policing Priorites</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ priority.title }}</div>
        <div class="text-caption text-grey">
          Last Updated: {{ priority.updated }}
        </div>
      </q-card-section>
      <q-separator></q-separator>
    </q-card-section>

    <!--      Card action section for learn more options      -->
    <q-card-actions>
      <q-btn flat color="primary">
        Learn More
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "officerCard",
  props: {
    priority: {
      default: {}
    }
  }
};
</script>

<style scoped></style>
