/*use strict*/
var app =angular.module('myApp',[])
app.controller('mainController',function($scope){
    $scope.data = {
        label:'papito timbal',
        class:'2'
    }

});
//directive para remplazar elementos en el dom, en el caso siguiente !!!! ojo Todo en minuscula
app.directive('alfonso',function(){
    return{
        restrict: 'E',
        transclude: true,
        template: '<h2>yo soy alfonso vargas</h2>'

    }

});

//app directive para un elemento div que tiene el nombre dentro del tag <div nombredeladiretiva></div>
app.directive('anasol', function(){
    return{
        restrict: 'A',
        link: function(scope, element, attrs){
            element.bind('mouseenter',  function(){
                console.log(element), //puedo visualizar todos los atributos del elemento en el console log para asignarlo en el array [0]
                    element[0].innerText =  'tambien sirvo';
            });
            element.bind('mouseleave', function(){
                element[0].innerHTML = 'joder Tio!!';

            });
            element.bind('click', function(){
                element[0].className = 'btn btn-primary';
            })
        }
    }
});

//directive to directive
//https://www.youtube.com/watch?v=aG8VD0KvUw4&list=PLEDbaVSIL58MB78qU6_I_FZZgNe_Mcb5j&index=7
app.controller('shieldCtrl', function($scope){
    $scope.shieldNames =[];
    this.addMel = function()
    {
        $scope.shieldNames.push('mel se metera aqui')
    }
    this.addCarmen = function()
    {
        $scope.shieldNames.push('carmen se metera aqui')
    }
    this.addNat = function()
    {
        $scope.shieldNames.push('nat se metera aqui')
    }
})
.directive('theshield', function(){
    return{
        scope:{}, //con esta lina evito que cada vez que haga hover se sobreescriba el valor del array
        restrict: 'E',
        controller: 'shieldCtrl',
        link: function(scope, element, attrs)
        {
            element.bind('mouseenter',function()
            {
                console.log(scope.shieldNames)
            });
        }
    }
})
.directive('mel', function(){
    return{
        require: 'theshield',
        link: function(scope, element, attrs, shieldCtrl){
            shieldCtrl.addMel();
        }
    }

})
.directive('carmen', function(){
    return{
        require: 'theshield',
        link: function(scope, element, attrs, shieldCtrl){
            shieldCtrl.addCarmen();
        }
    }

})
.directive('nat', function(){
    return{
        require: 'theshield',
        link: function(scope, element, attrs, shieldCtrl){
            shieldCtrl.addNat();
        }
    }

})
