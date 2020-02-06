var $toDoList = []

$("#btn").on("click", function(evnt) {
    let toDo = $("#input").val();
    
    if (toDo) {
        var $newItem = $( `<button>X</button>
        <p>${toDo}</p>
        <hr>`);
    }
    $("#to-dos").append($newItem)
    $("#input").val("")

})
$("#to-dos").on("click", "button", function (evt) {
    $(this).
    $(this).remove()
})
