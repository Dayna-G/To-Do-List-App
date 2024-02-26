function newItem(){
     //Adding new item to the list 
        let li = $('<li></li>');
        let inputValue = $('#input').val();
        li.append(inputValue);
    
    
    
        if ($('#input').val() === "") {
            alert ( "You must write something");
        }else{
            let list = $('#list'); 
            list.append(li);  
        }

    // Crossing out item in list 
        li.on("dblclick", function(){
            li.toggleClass("strike");
        });
    
    // Adding the "X" button
        let crossOutButton = $("<crossOutButton></crossOutButton>");
        $(crossOutButton).append("X");
        li.append(crossOutButton);

    
};