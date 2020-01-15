<template>
  <q-toolbar class="bg-primary text-white" style="overflow: hidden">
    <!--    Toolbar image   -->
    <q-avatar>
      <img src="/images/crest.png" style="width: 100% !important;" />
    </q-avatar>

    <!--    Toolbar searchbox    -->
    <q-input
      dark
      dense
      standout
      v-model="text"
      input-class="text-right"
      class="q-ml-md"
    >
      <template v-slot:append style="float: right">
        <!--        Change the icon depending on if anything has been typed in the searchbox    -->
        <q-icon v-if="text === ''" name="search"></q-icon>
        <q-icon
          v-else
          name="clear"
          class="cursor-pointer"
          @click="text = ''"
        ></q-icon>
      </template>
    </q-input>
  </q-toolbar>
</template>

<script>
export default {
  name: "TopNavBar",
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style scoped>
.q-avatar {
  width: 35%;
  height: 100%;
  border-radius: 0%;
}
.q-ml-md {
  margin-left: 50%;
}
</style>
