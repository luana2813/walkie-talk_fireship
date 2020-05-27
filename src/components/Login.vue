<template>
  <aside>
    <h3>Sign in Anonymously</h3>
    <button @click="auth.signInAnonymously()">Sign in</button>
  </aside>
</template>

<script>
import { auth } from '../firebase'
export default {
  name: 'Login',
  data() {
    return {
      auth
    }
  }
}
</script>