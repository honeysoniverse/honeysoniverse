


document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();
    getWeather();
}, false);


//Initialise Weather object
const weather = new Weather(input);

//Initialise UI Object
const ui = new UI;

//Get weather on dom load



//document.getElementById('form-control').addEventListener('click',getWeather)

function getWeather(){
    const input = document.getElementById('input').value;
    const weather = new Weather(input);
    

weather.getWeather()

.then(togglevis())
.then(results => {ui.paint(results)})

.catch(err => console.log(err));

}


