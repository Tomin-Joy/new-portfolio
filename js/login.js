function spanner() {
  for (let index = 0; index < 260; index++) {
    login_section.insertBefore(
      document.createElement("span"),
      login_section.children[0]
    );
  }
  nForm.onsubmit = (e) => {
    e.preventDefault();
    let txt = `Hi, ${nField.value} // I am tomin joy a full stack web developer // Welcome to my digital
    world. As a versatile professional, I wear multiple hats with equal enthusiasm. From web and app
    development to design, and with a strong passion for cybersecurity, I thrive at the intersection of
    creativity and security. Join me on this journey as we embark on a visually stunning, technically sound,
    and fortified adventure through the digital landscape.`;
    login_section.style.display = "none";
    t_s.style.display = "flex";
    typeWriter(0, txt);
  };
}

function loginGuest() {
    let txt = `Hello mate, // I am tomin joy a full stack web developer // Welcome to my digital
    world. As a versatile professional, I wear multiple hats with equal enthusiasm. From web and app
    development to design, and with a strong passion for cybersecurity, I thrive at the intersection of
    creativity and security. Join me on this journey as we embark on a visually stunning, technically sound,
    and fortified adventure through the digital landscape.`;
    login_section.style.display = "none";
    t_s.style.display = "flex";
    typeWriter(0, txt);
}
