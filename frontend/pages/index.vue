<template>
  <v-row justify="center" align="center" class="ma-5">
    <v-col cols="6" class="text-center">
      <v-card height="200" class="orange text-center">
        <v-card-actions>
          <v-btn outlined>Inventory Management</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="6" class="text-center">
      <v-card height="200" class="orange text-center">
        <v-card-actions>
          <v-btn outlined>Add New Product</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="6" class="text-center">
      <v-card height="200" class="orange text-center">
        <v-card-actions>
          <v-btn outlined>Suppliers</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="6" class="text-center">
      <v-card height="200" class="orange text-center">
        <v-card-actions>
          <v-btn outlined>Annual Report</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  computed: {
    user () {
      return this.$strapi.user
    }
  },
  methods: {
      logout () {
        this.$strapi.logout()
        this.$router.push('/login')

      }
  }
}
</script>