<template>
  <v-row justify="center" align="center" class="ma-5">
    <v-col cols="8" md="6">
      <v-form @submit.prevent="onSubmit">
        <v-card flat min-width="200" class="text-center">
          <v-card-subtitle class="subtitle-2 primary--text">
            Log Into Your Account
          </v-card-subtitle>
          <v-row justify="center" align="center" class="mt-1">
            <v-col cols="10">
              <v-text-field
                v-model="email"
                label="email"
                required
                outlined
                placeholder="email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                required
                outlined
                placeholder="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
              <v-btn
                block
                x-large
                class="primary text-uppercase font-weight-bold my-4"
                @click="onLogin"
              >
                {{ title }}
              </v-btn>
            </v-col>
          </v-row>
          <v-card-text>
            <nuxt-link to="/signup" class="text-decoration-none grey--text">
              You don't have an account?
              <span class="light-blue--text text--lighten-2">
                Create Account
              </span>
            </nuxt-link>
          </v-card-text>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
export default {

  data: () => ({
    email: 'example@gmail.com',
    password: 'Test12345',
    status: null,
    showPassword: false,
    title: 'login',
  }),

  methods: {
    async onLogin() {
      try {
        const user = await this.$strapi.login({ identifier: this.email, password: this.password })
        console.log(user)
        this.$router.push('/')
      } catch (e) {
        this.error = e
    }
  },
}
}
</script>
