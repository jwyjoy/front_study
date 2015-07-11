angular.module('jangStudy',[
        'cookiesMaker',
        'cookiesStorage',
        'money',
        'item_list',
        'cookiesSaler',
        'itemManager' ])
.controller('MainCtrl', function (cookieMaker, cookies, cookie_count, rarity, money, sales, item_name, item_rank, item_price, cookie_saler, item_sell) {
    var vm = this;


    vm.cooking_message = '追加!';
    vm.alert_message = '';
    vm.item_name = item_name[0];

    vm.cookies = cookies;
    vm.money = money.value;
    vm.item_rank = item_rank.value;

    vm.cooking = function () {
        if(!cookieMaker()) {
            vm.cooking_message = 'もう追加できませんぬ';   
        }
    };

    vm.sellcooking = function (raritys, index) {
        cookie_saler(raritys, index);
        vm.money = money.value;
    };

    vm.use_item = function () {
       
        if(!item_sell()) {
            vm.alert_message = 'おぬし！金を持ってないんじゃ！';
        }
        vm.item_name = item_name[item_rank.value];
        vm.money = money.value;
        vm.item_rank = item_rank.value;
    };

});
