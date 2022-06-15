const setalert = (msg, type='danger')=>{
  return  `<p class="alert alert-${type} d-flex justify-content-between" >${msg}<button class="btn-close" data-bs-dismiss="alert"></button> </p>`
}
const numcheck = (num)=>{

   let pattern = /[0-9]{1,3}/;

   return pattern.test(num);
}

