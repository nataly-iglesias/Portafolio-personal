let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #666a87;'>|</span>",
});
 
// Animación: Maquina de escribir
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #666a87;">Estudiante de ingeniería de software.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
