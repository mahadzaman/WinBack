/* Init Smooth Scrollbar for Side Menu */
var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector("#side-menu"));

$(function () {
    // document ready function...

    /* add checked classes on load to settings toggle row */
    $(".toggle-wrapper input[type='checkbox']").each(function () {
        let checkbox = $(this);
        checkboxCheck(checkbox);
    });

    /* slide toggle checkbox click event */
    $("body").on("click", ".toggle-wrapper input[type='checkbox']", function () {
        let checkbox = $(this);
        checkboxCheck(checkbox);
    });
});

/* Checkbox condtions to be used in multiple events */
/* adding "checked" class to apply styling to whole row  */
function checkboxCheck(ele) {
    if (ele.is(":checked")) ele.closest(".setting-row").addClass("checked");
    else ele.closest(".setting-row").removeClass("checked");
}
