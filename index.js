document.querySelector('button').addEventListener("click",()=>{
  
    const place= document.getElementById('location').value;
  
  function updateTemp(data){
    const element = document.getElementById('weatherInfo');
    element.innerHTML= `Today's Temperature: ${data.current.temp_c}`;
  }  

  const prom= fetch(`https://api.weatherapi.com/v1/current.json?key=4473aaa56b86417eb55175214263008&q=${place}&aqi=yes`);

  prom
  .then((responce)=>{
    return responce.json();
  })
  .then((data)=>{
   updateTemp(data);
  })

})
