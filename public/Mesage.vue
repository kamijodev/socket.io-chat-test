<template>
  <li>{{userName + ': ' + text}}</li>
</template>

<script>
export default {
  name: 'Message',
  props: {
    userName: String,
    text: String,
  }
}
</script>