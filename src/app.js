import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#app',
        
        data: {
            exchangeRates: '',
            toConvert: 0,
            selectedCurrency: null,
            convertedCurrency: 0
        },

        mounted: function() {
            this.fetchExchangeRates();
        },

        computed: {
            convertCurrency: function() {
                return this.convertedCurrency = this.toConvert * this.selectedCurrency;
            }
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