app.directive('borderOnHover', function() {
    return {
        link: function(scope, element, attr) {
            element.on('mouseenter', function() {
                element.css({
                    border: '2px solid black'
                });
            });

            element.on('mouseleave', function() {
                element.css({
                    border: '1px solid black'
                });
            });

        }
    };
});