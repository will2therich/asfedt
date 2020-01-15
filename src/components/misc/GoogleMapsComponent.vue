<template>
  <GmapMap
    :center="{ lat: locationLatitude(), lng: locationLontitude() }"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 250px"
  >
    <GmapMarker
      :position="{ lat: locationLatitude(), lng: locationLontitude() }"
      :clickable="true"
      :draggable="true"
      @click="center = { lat: locationLatitude(), lng: locationLontitude() }"
    ></GmapMarker>
  </GmapMap>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "GoogleMapsComponent",
  computed: {
    ...mapGetters({
      location: "getLocation"
    })
  },
  data() {
    return {
      marker: {}
    };
  },
  methods: {
    locationLatitude() {
      return parseFloat(this.location.split(",")[0].trim());
    },
    locationLontitude() {
      return parseFloat(this.location.split(",")[1].trim());
    }
  }
};
</script>

<style scoped></style>
