function formInput(){
    let input = $("#input");

   $("#submit").on("click", function(event){
        event.preventDefault();

       if(input.val() !== ""){

       $(".container").append(`<div id="addItem">
                        <label id = "inputUser">${input.val()}</label>
                        <button type="submit" id="addCheck">Check</button>
                        <button type="submit" id="addDelete">Delete</button>
        </div>`);
       }
       input.val("");
    });
}

function checkButton(){
    
    $(".container").on("click","#addCheck", function(event){
        event.preventDefault();
        
        $(event.target).siblings("label").toggleClass("check");
        
    })


}

function deleteButton(){
    
    $(".container").on("click","#addDelete", function(event){
        event.preventDefault();
        
        $(event.target).parent().remove();
    })


}

function init (){

    formInput();
    checkButton();
    deleteButton();

}

init();