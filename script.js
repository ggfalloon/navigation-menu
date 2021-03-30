$(document).ready(function () {

    // Display dropdown menu when inventory is clicked
    $("#droplink").on("click", function () {
        $(".drop-content").css("display", "block");
    });

    // When a menu item is clicked, dropdown is hidden

    $(".drop-content").on("click", function () {
        $(".drop-content").css("display", "none");
    })

});


