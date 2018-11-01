'use strict';

function main() {
  // console.log('DOM finished');

  $('#js-shopping-list-form').submit(function(e) {
    console.log($(e.target));
    e.preventDefault();
    $('.shopping-list').append(`
      <li>
        <span class="shopping-item">apples</span>
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

    // e.target().find('input').reset();
    // trying to clear the submission
  });
}

$(main());