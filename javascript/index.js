var correctCards = 0;
$(init);

function init() {
  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css({
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  });

  // Reset the game
  correctCards = 0;

  // Create the pile of shuffled cards
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var terms = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
}

function handleCardDrop(event, ui) {
  var slotNumber = $(this).data('number');
  var cardNumber = ui.draggable.data('number');

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if (slotNumber == cardNumber) {
    ui.draggable.addClass('correct');
    $(this).droppable('disable');
    ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
    ui.draggable.draggable('option', 'revert', false);
    correctCards++;
  }

  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if (correctCards == 2) {
    Swal.fire(
      'Parabéns!',
      'Você conseguiu.',
      'success'
    )
  }
}
function dragStart(e) {
  dragSrcEl = this;
};

function dragEnter(e) {
  this.classList.add('drag-over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  return false;
}

function dragDrop(e) {
  if(this.classList.contains('droppable-one')){
    if(dragSrcEl.classList.contains('drag-item--one')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }else if(this.classList.contains('droppable-two')){
    if(dragSrcEl.classList.contains('drag-item--two')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }else if(this.classList.contains('droppable-three')){
    if(dragSrcEl.classList.contains('drag-item--three')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }else if(this.classList.contains('droppable-four')){
    if(dragSrcEl.classList.contains('drag-item--four')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }else if(this.classList.contains('droppable-five')){
    if(dragSrcEl.classList.contains('drag-item--five')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }else if(this.classList.contains('droppable-six')){
    if(dragSrcEl.classList.contains('drag-item--six')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }else if(this.classList.contains('droppable-seven')){
    if(dragSrcEl.classList.contains('drag-item--seven')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }else if(this.classList.contains('droppable-eight')){
    if(dragSrcEl.classList.contains('drag-item--eight')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }else if(this.classList.contains('droppable-nine')){
    if(dragSrcEl.classList.contains('drag-item--nine')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }else if(this.classList.contains('droppable-ten')){
    if(dragSrcEl.classList.contains('drag-item--ten')){
      this.appendChild(dragSrcEl);
      correctCards++;
    }
  }
  var slotNumber = $(this).data('number');
  var cardNumber = ui.draggable.data('number');

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if (slotNumber == cardNumber) {
    ui.draggable.addClass('correct');
    $(this).droppable('disable');
    ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
    ui.draggable.draggable('option', 'revert', false);
    correctCards++;
  }

  if (correctCards == 10) {
    swal(
      'Parabéns',
      'Você conseguiu concluir o nível 1!',
      'success'
    )
  }
  return false;
}

function dragEnd(e) {
  var listItems = document.querySelectorAll('.drag-container');
  [].forEach.call(listItems, function (item) {
    item.classList.remove('drag-over');
  });
}

function touchStart(e) {
  e.preventDefault();
  this.classList.add('drag-item--touchmove');
}

var scrollDelay = 0;
var scrollDirection = 1;
function pageScroll(a, b) {
  window.scrollBy(0, scrollDirection); // horizontal and vertical scroll increments
  scrollDelay = setTimeout(pageScroll, 5); // scrolls every 100 milliseconds

  if (a > window.innerHeight - b) { scrollDirection = 1; }
  if (a < 0 + b) { scrollDirection = -1 * scrollDirection; }
}

var x = 1;
function touchMove(e) {
  var touchLocation = e.targetTouches[0],
    w = this.offsetWidth,
    h = this.offsetHeight;

  lastMove = e;
  touchEl = this;
  this.style.width = w + 'px';
  this.style.height = h + 'px';
  this.style.position = 'fixed';
  this.style.left = touchLocation.clientX - w / 2 + 'px';
  this.style.top = touchLocation.clientY - h / 2 + 'px';

  if (touchLocation.clientY > window.innerHeight - h || touchLocation.clientY < 0 + h) {
    if (x === 1) {
      x = 0;
      pageScroll(touchLocation.clientY, h);
    }
  } else {
    clearTimeout(scrollDelay);
    x = 1;
  }
}

function touchEnd(e) {
  var box1 = this.getBoundingClientRect(),
    x1 = box1.left,
    y1 = box1.top,
    h1 = this.offsetHeight,
    w1 = this.offsetWidth,
    b1 = y1 + h1,
    r1 = x1 + w1;

  var targets = document.querySelectorAll('.drag-container');
  [].forEach.call(targets, function (target) {
    var box2 = target.getBoundingClientRect(),
      x2 = box2.left,
      y2 = box2.top,
      h2 = target.offsetHeight,
      w2 = target.offsetWidth,
      b2 = y2 + h2,
      r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      return false;
    } else {
      if (target.classList.contains('droppable-one')){
        if(touchEl.classList.contains('drag-item--one')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }else if(target.classList.contains('droppable-two')){
        if(touchEl.classList.contains('drag-item--two')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }else if(target.classList.contains('droppable-three')){
        if(touchEl.classList.contains('drag-item--three')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }else if(target.classList.contains('droppable-four')){
        if(touchEl.classList.contains('drag-item--four')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }else if(target.classList.contains('droppable-five')){
        if(touchEl.classList.contains('drag-item--five')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }else if(target.classList.contains('droppable-six')){
        if(touchEl.classList.contains('drag-item--six')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }else if(target.classList.contains('droppable-seven')){
        if(touchEl.classList.contains('drag-item--seven')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }else if(target.classList.contains('droppable-eight')){
        if(touchEl.classList.contains('drag-item--eight')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }else if(target.classList.contains('droppable-nine')){
        if(touchEl.classList.contains('drag-item--nine')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }else if(target.classList.contains('droppable-ten')){
        if(touchEl.classList.contains('drag-item--ten')){
          target.appendChild(touchEl);
          correctCards++;
        }
      }
      if (correctCards == 10) {
        swal(
          'Parabéns',
          'Você conseguiu concluir o nível 2!',
          'success'
        )
      }
    }
  });

  this.removeAttribute('style');
  this.classList.remove('drag-item--touchmove');
  clearTimeout(scrollDelay);
  x = 1;
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragend', dragEnd, false);
  el.addEventListener('touchstart', touchStart, false);
  el.addEventListener('touchmove', touchMove, false);
  el.addEventListener('touchend', touchEnd, false);
}

function addTargetEvents(target) {
  target.addEventListener('dragover', dragOver, false);
  target.addEventListener('dragenter', dragEnter, false);
  target.addEventListener('dragleave', dragLeave, false);
  target.addEventListener('drop', dragDrop, false);
}

var targets = document.querySelectorAll('.drag-container');
[].forEach.call(targets, function (target) {
  addTargetEvents(target);
});

var listItems = document.querySelectorAll('.drag-item');
[].forEach.call(listItems, function (item) {
  addEventsDragAndDrop(item);
});