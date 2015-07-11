angular.module('cookiesMaker', [
    'cookiesStorage'
]).factory('cookieMaker', function (cookies, cookie_count, rarity) {

    return function () {
        var is_succeeded = getRandomInt(1,5) != 1;
        console.log(is_succeeded);

        if(!is_succeeded) {
             cookies.push({
                 id: cookie_count.value++,
                 rarity: rarity[0]
             });
        }
        else if(cookie_count.value %5 == 0){
             cookies.push({
                 id: cookie_count.value++,
                 rarity: rarity[1]
             });
        } else {
             cookies.push({
                 id: cookie_count.value++,
                 rarity: rarity[2]
             });
        }
    }
});

function getRandomInt(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}