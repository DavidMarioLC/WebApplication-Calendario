const $checkboxs = document.querySelectorAll(".checkbox");


function marcar(e){
  console.log(e.currentTarget)
  const checked = JSON.parse(e.currentTarget.ariaChecked);
  
  if(checked){
    e.currentTarget.ariaChecked= "false"
    
  }else{
    
    e.currentTarget.ariaChecked= "true"
  }
  
  
}

$checkboxs.forEach(chk=>chk.addEventListener('click',marcar))

