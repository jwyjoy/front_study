angular.module('itemManager', [
    'item_list', 'money'
]).factory('item_sell', function (money, item_rank, item_price) {

    return function () {
        if(money.value < item_price[item_rank.value]) {
            return false;
        } else {
            money.value -= item_price[item_rank.value];
            item_rank.value++;
            return true;
        }
    }
});
