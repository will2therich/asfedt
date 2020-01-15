<template>
  <page-section classes="background-class">
    <q-card-section>
      <q-card bordered>
        <div class="row">
          <div class="col-12">
            <div class="text-h4 " style="padding: 10px">
              <p>Our Policing Priorities in your area</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-3"
            v-for="priority in beat.priorities"
            :key="priority.name"
          >
            <priorities-card :priority="priority"></priorities-card>
          </div>
        </div>
      </q-card>
    </q-card-section>
  </page-section>
</template>

<script>
import PageSection from "../structual/PageSection";
import PrioritiesCard from "../cards/PrioritiesCard";
import { mapGetters } from "vuex";

export default {
  name: "OfficerSection",
  components: {
    PageSection,
    PrioritiesCard
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
  background-color: $secondary;
  height: 100%;
  border-radius: 0px;

  .q-card__section {
  }
}

.text-h4 {
  color: $secondary;
}
.col {
  background-color: $secondary;
}
</style>
