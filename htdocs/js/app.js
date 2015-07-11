angular.module('jangStudy',[])
.controller('MainCtrl', function () {
    var vm = this;
    var count = 1;
    vm.cookies = []; 
    vm.money = 0;
    vm.cooking_message = '追加!';
    vm.alert_message = '';
    vm.create_count = 1;

    vm.cooking = function () {
        for (var i = 0; i < vm.create_count; i++) {
            if (vm.cookies.length < 10) {
                if(count %5 == 0){
                     vm.cookies.push({
                         id: count++,
                         rarity: true
                     });
                } else {
                     vm.cookies.push({
                        id: count++,
                        rarity: false
                     });
                }
            } else {
             vm.cooking_message = 'もう追加できませんぬ';
            }
        }
    };
    vm.sellcooking = function (is_rarity, object_len) {
        if(is_rarity) {
            vm.money+=500;
        } else {
            vm.money+=100;
        }
        vm.cookies.splice(object_len,1);
    };
    vm.item_double = function () {
        if(vm.money < 500) {
            vm.alert_message = '金が...ないんだ';      
        } else {
            vm.money -= 500;
            vm.create_count++;
        }

    };
});
