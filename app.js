var state = {
    items:[]
}

function addItem(state,item) {
    state.items.push(item);
}

function deleteItem(state,item){
    state.items.splice(item,1);
}

function renderList(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return "<li>" + "<span class = 'shopping-item'>" + item + "</span>" + "<div class = 'shopping-item-controls'>" + "<button class = 'shopping-item-toggle'>"+ "<span class = 'button-label'>" + "check" + "</span>" + "</button>" + "<button class = 'shopping-item-delete'>" + "<span class = 'button-label'>" + "delete" + "</span>" + "</button>" + "</div>" + "</li>";
    });
    element.empty(); // emptys old userdata stored in state
    element.append(itemsHTML);
}
$("#js-shopping-list-form").on("submit", function(event){
    event.preventDefault();
    var shoppingListEntry = $("#shopping-list-entry");
    addItem(state, shoppingListEntry.val());
    shoppingListEntry.val(""); //remove user input on submit
    renderList(state, $(".shopping-list"));
});
$(".shopping-list").on("click",".shopping-item-toggle",function(event){
    $(this).closest("li").toggleClass("shopping-item__checked"); 
    //make event listener items has to be an array of objects then check if item is checked 
});
$(".shopping-list").on("click",".shopping-item-delete",function(event){
    deleteItem(state,$(this).closest("li").val());
    renderList(state, $(".shopping-list")); //remove from state 
});