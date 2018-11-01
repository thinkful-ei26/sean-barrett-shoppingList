'use strict';

function main() {
  // console.log('DOM finished');

  $('#js-shopping-list-form').submit(function(e) {
    const formInput = $(e.target).find('input').val();
    e.preventDefault();
    $('.shopping-list').append(`
      <li>
        <span class="shopping-item">${formInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `);

    $(e.target).find('input').val('');
    // trying to clear the submission
  });

  $('ul').on('click', '.shopping-item-toggle', function(e) {
    //console.log($(e.target));
    $(e.target).closest('button').closest('div').siblings('span').toggleClass('shopping-item__checked');
  });
  $('ul').on('click', '.shopping-item-delete', function(e) {
    $(e.currentTarget).closest('div').closest('li').remove(); 
  });
}




$(main());