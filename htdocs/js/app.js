angular.module('cookiesStorage', [])
.value('cookies',[])
.value('cookie_count', {value :1})
.value('rarity', ['failed', 'rarity', 'normal']);

angular.module('money', [])
.value('money', {value : 0})
.value('sales',[50,500,100]);

angular.module('item_list', [])
.value('item_name', ['500円', '1000円', '完了'])
.value('item_price', [500, 1000, 0])
.value('item_rank', {value : 0});

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

function getRandomInt(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

angular.module('jangStudy',['cookiesMaker', 'cookiesStorage', 'money', 'item_list', 'cookiesSaler'])
.controller('MainCtrl', function (cookieMaker, cookies, cookie_count, rarity, money, sales, item_name, item_rank, item_price, cookie_saler) {
    var vm = this;


    vm.cooking_message = '追加!';
    vm.alert_message = '';
    vm.item_name = item_name[0];

    vm.cookies = cookies;
    vm.money = money.value;
    vm.item_rank = item_rank.value;

    vm.cooking = function () {
        for (var i = 0; i < item_rank.value+1; i++) {

            if (cookies.length < 10) {
                cookieMaker();
            } else {
                vm.cooking_message = 'もう追加できませんぬ';
            }
        }
    };

    vm.sellcooking = function (raritys, index) {
        cookie_saler(raritys, index);
        vm.money = money.value;
    };

    vm.use_item = function () {
        if(money.value < item_price[item_rank.value]) {
            vm.alert_message = '金が...ないんだ';      
        } else {
            money.value -= item_price[item_rank.value];
            item_rank.value++;
            vm.item_name = item_name[item_rank.value];
        }
        vm.money = money.value;
        vm.item_rank = item_rank.value;
    };

});