import React, { useState } from 'react';
import'./weather.css';
import { WeatherIcons } from '../components/ApiRequest'

const Weather = ({city, country, temperature, description, wind, clouds, pressure, humidity, sunset, icon}) => {

const [changeWea, SetChangeWea] = useState (true);



    return(
      <div className='Fondo'>
        <h1 className='Title'>WEATHER</h1>
          <div className="Card">
            <h1 className='City'>{city}, {country}</h1>
            <div className='Degrees'>
                <img className='Icon' src={WeatherIcons[icon]} alt="" />
                {
                    changeWea?
                    <h2 className='Temp'>{`${Math.floor(temperature)}°C`} <span className='Des'> | {description}</span></h2>
                    :
                    <h2 className='Temp1'>{`${Math.floor(temperature * 9/5 + 32)}°F`} <span className='Des1'> | {description}</span></h2>
                }
                
                <div className='Change'>
                    <button onClick= {()=> SetChangeWea(!changeWea)}>
                        °C / °F
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <br />
            <p>Weather Info</p>

            <div className='Sunset' >
                <img src='/icons/temp.svg' alt="" />
                <br />
                <span className='des'>{sunset}</span>    
            </div>
            
            <div className='Wind'>
                <img src='/icons/wind.svg' alt="" />
                <br />
                <span className='des'>Wind {wind} m/s</span>    
            </div> 
            
            <br />

            <div className='Pressure'> 
                <img src='/icons/pressure.svg' alt="" />
                <br />
                <span className='des'>Pressure {pressure}</span>    
            </div> 

            <br />
            
            <div className='Humidity'> 
                <img src='/icons/humidity.svg' alt="" />
                <br />
                <span className='des'>Humidity {humidity}%</span>    
            </div> 
            <br/>                       
        </div>
      </div>
    )
}

export default Weather;