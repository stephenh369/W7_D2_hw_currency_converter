import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#app',
        
        data: {
            exchangeRates: '',
            eurosToConvert: 0,
            selectedCurrencyFromEuros: null,
            convertedEuros: 0,
            
            toConvert: 0,
            selectedBaseCurrency: null,
            selectedCurrency: null,
            convertedCurrency: 0
        },

        mounted: function() {
            this.fetchExchangeRates();
        },

        computed: {
            
            convertFromEuros: function() {
                return this.convertedEuros = this.eurosToConvert * this.selectedCurrencyFromEuros;
            },
            
            convertCrossCurrency: function() {
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
           },
           
        }

    });

});