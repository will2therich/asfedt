<template>
  <q-card class="bg">
    <div class="q-pa-md">
      <q-card-section>
        <div class="row">
          <div class="col">
            Copyright &copy; {{ new Date().getFullYear() }} Avon and Somerset
            Police. All Rights Reserved.
          </div>
          <div class="col">
            Useful Links

            <ul>
              <li class="link">
                Privacy Policy
              </li>
              <li class="link">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style scoped>
.link {
  text-decoration: underline;
  color: steelblue;
  cursor: pointer;
}
.bg {
  background-color: #cfd8dc;
}
</style>
