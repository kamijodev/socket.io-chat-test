import Vue from "vue";
import Client from "./Client";

document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        el: "#app",
        template: "<Client/>",
        components: { Client }
    })
});
