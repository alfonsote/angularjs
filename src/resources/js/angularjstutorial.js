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
})