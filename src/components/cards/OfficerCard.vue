<template>
  <q-card style="text-align: center; border-radius: 0" flat>
    <q-img
      v-if="officer.image !== ''"
      :src="'/images/officers/' + officer.image + '.jpg '"
    >
      <div class="absolute-bottom">
        <div class="text-h6">{{ officer.name }}</div>
        <div class="text-subtitle2">{{ officer.role }}</div>
      </div>
    </q-img>
    <q-img v-else src="/images/officers/officer-profile.jpg">
      <div class="absolute-bottom">
        <div class="text-h6">{{ officer.name }}</div>
        <div class="text-subtitle2">{{ officer.role }}</div>
      </div>
    </q-img>
  </q-card>
</template>

<script>
export default {
  name: "officerCard",
  props: {
    officer: {
      default: {}
    }
  }
};
</script>

<style scoped>
.q-img {
  max-height: 400px;
  max-width: 400px;
  padding: 5px;
  border-radius: 10px;
}
</style>
