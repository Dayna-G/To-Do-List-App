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

};