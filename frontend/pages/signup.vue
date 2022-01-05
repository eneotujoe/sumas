<template>
  <v-row justify="center" align="center" class="ma-5">
    <v-col cols="10" md="6">
      <v-form v-if="!isAuthenticated" @submit.prevent="onSubmit">
        <v-card flat min-width="200" class="text-center">
          <v-card-subtitle class="subtitle-2 primary--text">
            Create Account
          </v-card-subtitle>
          <v-row justify="center" align="center" class="mt-1">
            <v-col cols="10">
              <v-text-field
                v-model="credentials.username"
                :error-messages="usernameErrors"
                label="Username"
                required
                filled
                outlined
                placeholder="username"
                @input="$v.username.$touch()"
                @blur="$v.username.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="credentials.email"
                :error-messages="emailErrors"
                label="Email"
                required
                filled
                outlined
                placeholder="email address"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="credentials.password"
                :type="showPassword ? 'text' : 'password'"
                :error-messages="passwordErrors"
                label="Password"
                required
                filled
                outlined
                placeholder="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                @click:append="showPassword = !showPassword"
              />
              <v-card-action>
                <div v-if="submitting">logging in ....</div>
                <v-btn
                  block
                  large
                  elevation="10"
                  class="primary text-uppercase font-weight-bold my-4"
                  @click="handleSignup"
                >
                  {{ title }}
                </v-btn>
              </v-card-action>
            </v-col>
          </v-row>
          <v-card-text>
            <nuxt-link to="/login" class="text-decoration-none grey--text">
              Already have an account?
              <span class="light-blue--text text--lighten-2">Login</span>
            </nuxt-link>
          </v-card-text>
        </v-card>
      </v-form>
      <div v-else>
        You are logged in!
        <button type="button" @click="onLogout">Logout</button>
      </div>
      <div v-if="error">{{ error }} style="color: red;"</div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  
  data: () => ({
    isAuthenticated: false,
    submitting: false,
    error: null,
    successfulData: null,
    credentials: {
      username: '',
      email: '',
      password: '',
    },
    status: null,
    showPassword: false,
    title: 'Sign Up',
  }),

  methods: {
 
    async handleSignup() {
      try {
        await this.$strapi.register({ email: this.credentials.email, username: this.credentials.username, password: this.credentials.password })
        this.$router.push('/')
      } catch (e) {
        this.error = e
      }
    },
  
  },
}
</script>
