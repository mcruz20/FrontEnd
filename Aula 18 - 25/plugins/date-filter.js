import Vue from 'vue'

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const dateFilter = value => {
    return formatDate(value);
};

function formatDate(inputDate){
    if(!!inputDate){
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const min = date.getMinutes();
        const formattedDate = day + " de " + months[month] + ", " + year + " às " + hour + ":" + min;
        const no10 = day + " de " + months[month] + ", " + year + " às " + hour + ":0" + min;
        if(min<10){
       return no10;  
        }
        else{
        return formattedDate;
        }
        
        return formattedDate;} else{ return 'Compra alguma coisa, estamos a precisar :('}
    
    }
Vue.filter('date', dateFilter)
