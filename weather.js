const url = "http://api.weatherapi.com/v1/current.json?key=7382f1d8664a46cd8e945122240602&q=";
const url1= "http://api.weatherapi.com/v1/forecast.json?key=7382f1d8664a46cd8e945122240602&q=";
let btn=document.querySelector(".btn");
let middle2=document.querySelector(".middle2")
let cont= document.querySelector(".container");
let tempdata = document.querySelector(".tempdata");
let mintemp= document.querySelector(".mintemp");
let mintemp1= document.querySelector(".mintemp1");
let mintemp2= document.querySelector(".mintemp2");
let minhum=document.querySelector(".minhum");
let minhum1=document.querySelector(".minhum1");
let minhum2=document.querySelector(".minhum2");
let minspeed= document.querySelector(".minspeed");
let minspeed1= document.querySelector(".minspeed1");
let minspeed2= document.querySelector(".minspeed2");
let mm =document.querySelector(".middle");
let mintempp=document.querySelector(".mintempp");
let mintemp11=document.querySelector(".mintemp11"); 
let mintemp22 =  document.querySelector(".mintemp22");
let minhumm =document.querySelector(".minhumm");
let minhum11 =document.querySelector(".minhum11");
let minhum22 =document.querySelector(".minhum22");
let minspeedd = document.querySelector(".minspeedd");
let minspeed11 =document.querySelector(".minspeed11");
let minspeed22 = document.querySelector(".minspeed22");

function solver(ans) {
    let p = url.concat(ans);
    fetch(p)

        .then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
             /*let q= document.createElement("div");  
             cont.appendChild(q);       
             console.log(q.innerText);
             q.classList.add("hh");*/
            let c= result.current.temp_c;
            let f= result.current.temp_f;
            let s=result.current.uv;
            let t=result.current.pressure_in;
            let cc=result.current.pressure_mb;
            let speed1= result.current.gust_kph;
            let speed2=result.current.vis_km;
            let speed3=result.current.gust_mph;
            let hum=result.current.humidity;

            mintemp.append(c);
            mintemp1.append(f);
            mintemp2.append(s);
           
            minhum.append(hum);
            minhum1.append(t);
            minhum2.append(cc);
            minspeed.append(speed1);
            minspeed1.append(speed2);
            minspeed2.append(speed3); 
       });

}
function solver1(ans1){
   let s= url1.concat(ans1);
   console.log(s);
   fetch(s)
   .then((response)=>{
      return response.json();
   }).then((data)=>{
        
    let a=data.forecast.forecastday[0].day.mintemp_c;
    let b=data.forecast.forecastday[1].day.mintemp_c;
    let c=data.forecast.forecastday[2].day.mintemp_c;
    let d=data.forecast.forecastday[0].day.maxtemp_c;
    let e=data.forecast.forecastday[1].day.maxtemp_c;
    let f=data.forecast.forecastday[2].day.maxtemp_c;
    let g=data.forecast.forecastday[0].day.avghumidity;
    let h=data.forecast.forecastday[1].day.avghumidity;
    let i=data.forecast.forecastday[2].day.avghumidity;
    console.log(a,b,c,d,e,f,g,h,i);
          mintempp.append(a);
          mintemp11.append(b);
          mintemp22.append(c);
          minhumm.append(d);
          minhum11.append(e);
          minhum22.append(f);
          minspeedd.append(g);
          minspeed11.append(h);
          minspeed22.append(i);
   })

}
let search = document.querySelector("#s");
search.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        let ans1=search.value;
        let ans = search.value;
        solver(ans);
        ans1+="&days=4";
        console.log(ans);
        solver1(ans1);
    }
})
search.addEventListener('keydown', (event) => {
    if (event.keyCode===8) {
        mintemp.innerText="";
        mintemp1.innerText="";
        mintemp2.innerText="";
        minhum.innerText="";
        minhum1.innerText="";
        minhum2.innerText="";
        minspeed.innerText="";
        minspeed1.innerText="";
        minspeed2.innerText="";
        mintemp11.innerText=""; 
        minspeedd.innerText="";
        minspeed11.innerText="";
        mintemp22.innerText="";
        minhumm.innerText="";
        minhum11.innerText="";
        minhum22.innerText="";
        mintempp.innerText="";
        minspeed22.innerText="";
    }

});
btn.addEventListener("click",(event)=>{
    if(middle2.style.display==="none"){
    middle2.style.display="flex";
    }
    else middle2.style.display="none";
})


