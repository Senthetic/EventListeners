$(function() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        let foodItem = $(this).find("#shopping-list-entry").val();
        let cartItemNode = `<li>
        <span class="shopping-item">${foodItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
      $('.shopping-list').prepend(cartItemNode);

        console.log(foodItem);

    })
    $('.shopping-list').on("click", '.shopping-item-toggle',function() {
       let itemTextNode = $(this).parent().parent().find("span.shopping-item");
       console.log(itemTextNode.constructor);
        if(itemTextNode.hasClass("shopping-item__checked")){
            $(itemTextNode).removeClass("shopping-item__checked");
        }
        else{
            $(itemTextNode).addClass("shopping-item__checked");
        }
    })
    $('.shopping-list').on("click", '.shopping-item-delete',function(){
      let item = $(this).parent().parent();
      item.remove();

    })
})