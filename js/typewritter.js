


function typeWriter(i, text) {
    if (i < text.length) {
      if (text.charAt(i) == '/') {
        t_t.innerHTML += "<br>";
      }
      else {
        t_t.innerHTML += text.charAt(i);
      }
      i++;
      setTimeout(() => { typeWriter(i, text) }, 0);
    }
    else {
        
    }
  }

