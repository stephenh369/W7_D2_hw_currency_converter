import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#app',
        
        data: {
            exchangeRates: '',
            eurosToConvert: 0,
            currencyToConvert: 0,
            selectedCurrencyFromEuros: null,
            selectedCurrencyToEuros: null,
            convertedEuros: 0,
            convertedToEuros: 0,
            
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
                this.convertedEuros = this.eurosToConvert * this.selectedCurrencyFromEuros;
                return this.convertedEuros = this.convertedEuros.toFixed(2);
            },

            convertToEuros: function() {
                this.convertedToEuros = this.currencyToConvert / this.selectedCurrencyToEuros;
                return this.convertedToEuros = this.convertedToEuros.toFixed(2);
            },
            
            convertCrossCurrency: function() {
                this.exchangeRates.base = this.selectedBaseCurrency
                const amount = this.toConvert / this.exchangeRates.base;
                this.convertedCurrency = amount * this.selectedCurrency;
                return this.convertedCurrency = this.convertedCurrency.toFixed(2);
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