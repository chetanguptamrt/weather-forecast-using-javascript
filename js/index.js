async function getapi(city="delhi") {
    var f = "https://api.openweathermap.org/data/2.5/weather?q="+city.trim()+"&appid=4a35ee10d83e688815c20ed70ce28bdf"
    
    const response = await fetch(f);    
    var data = await response.json();
    console.log(data);

    if(data.cod==200){
        $("#content-no").hide();
        $("#content").show();
        document.getElementById("result-1").innerHTML=data.name+","+data.sys.country;
        document.getElementById("result-2").innerHTML=data.weather[0].description;
        document.getElementById("result-3").src="http://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
        document.getElementById("result-4").innerHTML=Math.round(((data.main.temp-273.15)*1.8)+32)+"°K";
        document.getElementById("result-5").innerHTML=Math.round(data.main.temp-273.15)+"°C";
        document.getElementById("result-6").innerHTML="Longitude - "+data.coord.lon+", Latitude - "+data.coord.lat;
        document.getElementById("result-7").innerHTML="Humidity - "+data.main.humidity+"%, Wind Speed - "+data.wind.speed+"km/h";
    }
    else{
        $("#content").hide();
        $("#content-no").show();
    }
}
$(document).ready(function(){
    $("#serachCity").on("submit",function(event){
        event.preventDefault();
        
        getapi($("#search").val());
    });
});
