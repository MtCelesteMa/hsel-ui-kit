function duplicate_cards() {
  var card_html = document.getElementsByClassName('card-base')[0].innerHTML;
  var cards = document.getElementsByClassName('card-base');
  for (i = 0; i < cards.length; i++) {
    cards[i].innerHTML = card_html;
  }
}

window.onload = duplicate_cards;
