var blurbList = ["love to develop.", "am scared of the ocean.", "am a doer.", "play guitar, sometimes passably.", "am an embarrassed singer.", "learned coding on my own.", "was a champion fencer.", "tutor writing and philosophy.", "coach children.", "laugh when it's inappropriate.",
"took Latin in college.", "speak a little Japanese.", "broke my arm during NCAA championships.", "still use my St. Johns Law umbrella from admitted students day.", "play Fortnite, and try not to tell any kids.", "married my highschool sweetheart.", "make a great breakfast sandwich.", 
"have traveled the world - and seen a LOT of convention centers.", "think you should visit Budapest if you can.", "like iced coffee, even in winter.", "like my coffee.", "gave a best man speech with two minutes warning.", "think Mulan is the best Disney movie, but Moana has the best music.",
"was captain of my college Fencing team."
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 150 - Math.random() * 75;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  var typewriter = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = shuffle(blurbList)
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], toRotate, period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap";
      document.body.appendChild(css);
  };

$(document).on('turbolinks:load', typewriter); // Turbolinks 5