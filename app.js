const user_form = document.getElementById('user_form');
const check = document.querySelector('input[name=submit-btn]')
const name = document.querySelector('input[name=name]')
const age = document.querySelector('input[name=age]')
const gender = document.querySelectorAll('input[name=gender]')
const output = document.querySelector('p')


user_form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let gender_name;
  gender.forEach(item=> {
    if(item.checked)
    {
        gender_name=item.value;
    }
  })
  if( name.value=='' || age.value=='' || gender_name=='' )
  {
    output.innerHTML= setalert('Sob gulo Field fillup korun')
  }
  else if(numcheck(age.value)==false)
  {
    
   return output.innerHTML= `<p class="alert alert-success d-flex justify-content-between" >Please Enter a Valid Number <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
  }
  else{
    output.innerHTML= setalert('sob gulo ghor purun hoyeche', 'success');
  }



  const agechecking = ()=>{
    if(gender_name=='male')
  {
    if(age.value>=21)
    {
        output.innerHTML= `<p class="alert alert-success d-flex justify-content-between" >${name.value} Bhaiya, Apni biyer jonne upojukto, Druto Bibaho bondhon e aboddho hon<button class="btn-close" data-bs-dismiss="alert"></button></p>`;
         
    }
    else{
        output.innerHTML= ` <p class="alert alert-danger d-flex justify-content-between" >${name.value} Bhaiya, Apni biyer jonne upojukto non, ${21-age.value} bochor opekkha korun <button class="btn-close" data-bs-dismiss="alert"></button> </p>`;
       
    }
  }
    else if(gender_name=='female')
        
    {
        if(age.value>=18)
        {
            output.innerHTML= `<p class="alert alert-success d-flex justify-content-between" >${name.value} Apuuuuuu, Apni biyer jonne upojukto, Druto Bibaho bondhon e aboddho hon<button class="btn-close" data-bs-dismiss="alert"></button> </p>`;
        }
        else{
            output.innerHTML= ` <p class="alert alert-danger d-flex justify-content-between" >${name.value}Apuuuuuu, Apni biyer jonne upojukto non, ${18-age.value} bochor opekkha korun <button class="btn-close" data-bs-dismiss="alert"></button> </p>`;
        }
    }
  }
  agechecking();

});
 