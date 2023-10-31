


function typeWriter(i, text) {
    if (i < text.length) {
      if (text.charAt(i) == '/') {
        t_t.innerHTML += "<br>";
      }
      else {
        t_t.innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(() => { typeWriter(i, text) }, 31);
    }
    else {
        blinker(0);
    }
  }

function blinker(b) {
    if (b) {
        s_w.style.visibility = "hidden";
        setTimeout(() => { blinker(0) }, 800);

    }
    else {
        s_w.style.visibility = "visible";
        setTimeout(() => { blinker(1) }, 800);
    }
}

