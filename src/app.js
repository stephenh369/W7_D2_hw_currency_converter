import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#app',
        
        data: {
            exchangeRates: '',
            toConvert: 0,
            selectedBaseCurrency: null,
            selectedCurrency: null,
            convertedCurrency: 0
        },

        mounted: function() {
            this.fetchExchangeRates();
        },

        computed: {
            convertCurrency: function() {
                this.exchangeRates.base = this.selectedBaseCurrency
                const amount = this.toConvert / this.exchangeRates.base;
                return this.convertedCurrency = amount * this.selectedCurrency;
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