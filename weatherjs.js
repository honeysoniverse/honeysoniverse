class Weather{
    constructor(city) {
        this.apiKey = '53f311d869c05c242c722ce469f2fa5c'
        this.city = city;
        

    }

   // fetch weather from api
        async getWeather(){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}`);
            const responseData = await response.json();
            console.log(responseData)
            return responseData;
            




    }
//change location
changeLocation(city){
    this.city = city;}

}
