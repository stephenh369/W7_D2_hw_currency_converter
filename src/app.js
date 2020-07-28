import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#app',
        
        data: {
            exchangeRates: ''
        },

        mounted: function() {
            this.fetchExchangeRates();
        },

        methods: {
           fetchExchangeRates: function() {
            fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json())
            .then(data => this.exchangeRates = data);
           } 
        }

    });

});