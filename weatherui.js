class UI{
    constructor(){
        this.city = document.getElementById('city');
        this.country = document.getElementById('country');
        this.date = document.getElementById('date');
        this.temp = document.getElementById('temp');
        this.hum = document.getElementById('hum');
        this.pre = document.getElementById('pre');
        this.feels = document.getElementById('feels');
        this.rain = document.getElementById('rain');
        this.vis = document.getElementById('vis');
        this.wind = document.getElementById('wind');
        this.dew = document.getElementById('dew');
        this.sky = document.getElementById('sky');
        this.icon = document.getElementById('icon');
        



    }
    
    paint(weather){
        
        this.city.textContent = weather.city.name;
        this.country.textContent = weather.city.country;
        this.date.textContent = weather.list[0].dt_txt;
        this.temp.textContent = Math.floor(weather.list[0].main.temp-273.5) + `\xB0` + 'C';
        
        
        const ico = weather.list[0].weather[0].icon;
       this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${ico}@2x.png`);
        this.hum.textContent = 'Humidity: ' + weather.list[0].main.humidity + ' %';
        this.sky.textContent = weather.list[0].weather[0].description;
        this.wind.textContent = 'Wind: '+ weather.list[1].wind.speed + ' m/s';
        this.feels.textContent = 'Feels like ' + Math.floor(weather.list[0].main.feels_like-273.5) + `\xB0` + 'C';
        this.vis.textContent = 'Visibility: ' + weather.list[0].visibility/1000 + ' Kms';
        this.pre.textContent = 'Pressure: ' + weather.list[0].main.pressure + ' hPa';
        
        if(weather.list[0].sys.pod === "n"){
             document.querySelector('.container').style.opacity = "0";
            setTimeout(() => {
            document.querySelector('.container').style.opacity = "1"
            }, 200); 
            setTimeout( ()=> document.querySelector('.container').style.backgroundImage =  "linear-gradient(to bottom,#7e7e7e, #707070, #1f1f1f)",100);
            document.getElementById('main-heading').style.color = "#f4f4f4";
               } else{
            document.querySelector('.container').style.opacity = "0";
            setTimeout(() => {
            document.querySelector('.container').style.opacity = "1"
            }, 200); 
            setTimeout( ()=> document.querySelector('.container').style.backgroundImage =  "linear-gradient(to bottom,#a7efff, #ffd08c, #6f0000)",100);
            document.getElementById('main-heading').style.color = "rgb(148, 148, 148)";

        }
    }

}

function togglevis(){
    document.querySelector('.output-middle').style.visibility = "visible";
    document.querySelector('.city-info').style.visibility="visible";
    }

    function toggletran(){
        setInterval( ()=> document.querySelector('.output').style.transform = "translateY(20px)", 500
        );
        setInterval( ()=> document.querySelector('.output').style.opacity = "1", 500
        );
    }