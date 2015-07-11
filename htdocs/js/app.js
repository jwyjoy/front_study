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