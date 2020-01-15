<template>
  <page-section classes="background-class">
    <q-card-section>
      <q-card bordered>
        <div class="row">
          <div class="col-12">
            <div class="text-h4 " style="padding: 10px">
              <!--          Card Title        -->
              <p>Meet your local team</p>
            </div>
          </div>
        </div>
        <div class="q-pa-md">
          <div class="row ">
            <!--          Loop through all the officers     -->
            <div
              class="col-3"
              v-for="officer in beat.officers"
              :key="officer.name"
            >
              <officer-card :officer="officer"></officer-card>
            </div>
          </div>
        </div>
      </q-card>
    </q-card-section>
  </page-section>
</template>

<script>
import PageSection from "../structual/PageSection";
import OfficerCard from "../cards/OfficerCard";
import { mapGetters } from "vuex";

export default {
  name: "OfficerSection",
  components: {
    PageSection,
    OfficerCard
  },
  computed: {
    ...mapGetters({
      beat: "getBeat"
    })
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/quasar.variables.scss";

.background-class {
  background-color: $primary;
  height: 100%;
  border-radius: 0px;
}

.text-h4 {
  color: $secondary;
}
.col {
  background-color: $secondary;
}
</style>
