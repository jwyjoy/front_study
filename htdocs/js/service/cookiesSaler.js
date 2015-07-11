angular.module('cookiesSaler', [
    'money','cookiesStorage'
]).factory('cookie_saler', function (cookies, money, sales, rarity) {
     return function (raritys, index) {
        switch (raritys) {
            case rarity[0]:
            money.value += sales[0];
            break;
            
            case rarity[1]:
            money.value += sales[1];
            break;

            case rarity[2]:
            money.value += sales[2];
            break;
        }
        cookies.splice(index,1);
    }
});