s = "";
input = document.querySelectorAll('button');
result = document.querySelector('#result');
input.forEach(i => i.addEventListener('click', (e) => {
  if (e.target.innerHTML === ' del') {
    if (s == "Invalid syntax") {
      s = "";
    }
    else {
      s = s.substring(0, s.length - 1);
    }
  }
  else if (e.target.innerHTML == ' =') {
    try {
      s = eval(s).toString();
    }
    catch (err) {
      s = "Invalid syntax";
    }

  }
    
  else if (s.length !== 0 && ['+','-','/','*'].includes(s[s.length-1]) && ['+','-','/','*'].includes(e.target.innerHTML))
    s = s.substring(0, s.length - 1)+e.target.innerHTML;
  
  else {
    s = s + e.target.innerHTML;
  }
  result.innerHTML = s;
}));

//only for delete button

