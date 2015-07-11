angular.module('jangStudy',[])
.controller('MainCtrl', function () {
    var vm = this;
    var count = 1;
    var succeeded = ['failed', 'rarity', 'normal'];
    vm.cookies = []; 
    vm.money = 0;
    vm.cooking_message = '追加!';
    vm.alert_message = '';
    vm.create_count = 1;
    vm.item_name = 'item1(¥500)';

    vm.cooking = function () {
        for (var i = 0; i < vm.create_count; i++) {
            if (vm.cookies.length < 10) {

                var is_succeeded = getRandomInt(1,5) != 1;
                console.log(is_succeeded);
                if(!is_succeeded) {
                     vm.cookies.push({
                         id: count++,
                         rarity: succeeded[0]
                     });
                }
                else if(count %5 == 0){
                     vm.cookies.push({
                         id: count++,
                         rarity: succeeded[1]
                     });
                } else {
                     vm.cookies.push({
                         id: count++,
                         rarity: succeeded[2]
                     });
                }

            } else {
             vm.cooking_message = 'もう追加できませんぬ';
            }
        }
    };
    vm.sellcooking = function (is_rarity, object_len) {
        switch (is_rarity) {
            case succeeded[0]:
            vm.money+=50;
            break;
            
            case succeeded[1]:
            vm.money+=500;
            break;

            case succeeded[2]:
            vm.money+=100;
            break;
        }
        vm.cookies.splice(object_len,1);
    };
    vm.item_double = function () {
        if(vm.money < 500 * vm.create_count) {
            vm.alert_message = '金が...ないんだ';      
        } else {
            vm.money -= 500 * vm.create_count ;
            vm.create_count++;
            vm.item_name = 'item2(¥1000)';
        }
    };
});

function getRandomInt(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}