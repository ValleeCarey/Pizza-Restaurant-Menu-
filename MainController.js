app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    }, {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ],

  $scope.mains = [
    {
      name: 'Jackfruit BBQ Empanada',
      description: 'Healthy vegan fruit served to perfection',
      price: 5.95
    },
    {
      name: 'Shrimp Bolognese',
      description: 'Served fresh hot with jamaican spices',
      price: 10.95
    },
    {
      name: 'Scallops n Cajun Rice',
      description: 'Scallops served with fresh cajun rice',
      price: 12.95 
    }
  ],
   $scope.extras = [
    {
      name: 'Ice Cream',
      description: 'Healthy vegan cool refreshing Ice Cream ',
      price: 2.95
    },
    {
      name: 'Dark Chocolate',
      description: 'imported from France hot dark choclate ',
      price: 3.95
    },
    {
      name: 'French Fries',
      description: 'Crispy golden crinkle cut fries',
      price: 6.95 
    }
  ];

}]);
