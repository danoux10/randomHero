let valueSpin = Math.ceil(Math.random()*3600);
function spinning(wheelId){
  const wheel = document.getElementById(wheelId);
  wheel.style.transform = 'rotate('+ valueSpin + 'deg)';
  valueSpin += Math.ceil(Math.random()*3600);
}