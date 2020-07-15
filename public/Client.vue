<template>
  <div id="client">
    <label for="name">name</label>
    <input v-model="userName" type="text" autocomplete="off">
    <label>message</label>
    <input v-model="message" type="text" autocomplete="off">
    <button @click="sendMessage">送信</button>
    <ul id="list">
      <message v-for="(mes, key) in messages" :userName="mes.userName" :text="mes.text" :key="key" />
    </ul>
  </div>
</template>
<script>
  import Message from './Mesage';

  export default {
    components: {
      'message': Message
    },
    data() {
      return {
        userName: '',
        message: '',
        messages: [],
        socket: null,
      }
    },
    created() {
      this.socket = io.connect();
      this.socket.on('server_message', (data) => {
        this.messages.push({
          userName: data.name,
          text: data.message,
        })
      });
    },
    methods: {
      sendMessage() {
        this.messages.push({
          userName: this.userName,
          text: this.message,
        })
        this.socket.emit('send', {
          name: this.userName,
          message: this.message,
        });
        this.message = '';
      }
    }
  }
</script>