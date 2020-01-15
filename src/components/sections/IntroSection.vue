<template>
  <page-section classes="background-class">
    <q-card-section>
      <q-card bordered class="bg-white">
        <div class="row">
          <div class="col-12">
            <div class="text-h4 " style="padding: 10px">
              {{ beat.name }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-card-section>
              <p>{{ beat.introText }}</p>
            </q-card-section>
          </div>
          <div class="col">
            <q-card-section>
              <google-maps-component></google-maps-component>
            </q-card-section>
          </div>
        </div>
      </q-card>
    </q-card-section>
  </page-section>
</template>

<script>
import PageSection from "../structual/PageSection";
import GoogleMapsComponent from "../misc/GoogleMapsComponent";
import { mapGetters } from "vuex";

export default {
  name: "IntroSection",
  components: {
    PageSection,
    GoogleMapsComponent
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
  background: url("/images/portishead.jpg") no-repeat fixed center;
  height: 400px;
  border-radius: 0px;

  .q-card__section {
  }
}

.text-h4 {
  width: 100px;
  color: $secondary;
}
</style>
