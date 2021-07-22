const $checkboxs = document.querySelectorAll(".checkbox");


function marcar(e){
  
  const checked = JSON.parse(e.target.ariaChecked);
  
  if(checked){
    e.target.ariaChecked = "false"
    
  }else{
    e.target.ariaChecked = "true"
  }
  
  
}

$checkboxs.forEach(chk=>chk.addEventListener('click',marcar))

