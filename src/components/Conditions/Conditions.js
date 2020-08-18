import React from 'react';
import classes from './Conditions.module.css'

// let iconcode = ['weather'][0]['icon'];
// let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

// $('#wicon').attr('src', iconurl);

const conditions = (props) => {
   return (
       <div className={classes.Container}>

           <div className={classes.Row}>

            <div className={classes.Wrapper}>
                {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
                {props.loading && <div className={classes.Loader} />}
                {props.responseObj.cod === 200 ?
                    <div>
                        <p><strong>{props.responseObj.name}</strong></p>
                        <p>It is currently <strong>{Math.round(props.responseObj.main.temp)}</strong> degrees out with {props.responseObj.weather[0].description}.</p>
                        <p> The current temperature feels like <strong>{props.responseObj.main.feels_like}</strong> degrees. </p>
                        <p> The pressure is <strong>{props.responseObj.main.pressure}</strong> and the humidity is <strong>{props.responseObj.main.humidity}</strong> </p>
                        <p> The wind speed is <strong>{props.responseObj.wind.speed}</strong> km/h. </p>
                        <p> Sun rise is at {props.responseObj.sys.sunrise} and sun set is at {props.responseObj.sys.sunset}. </p>
                    </div>
                : null
                }
            </div>
                
            <div className={classes.Wrapper}>
                <figure>

                <img src='http://openweathermap.org/img/w/" + {props.responseObj.weather[0].icon} + ".png' alt='Icon depicting current weather.'/>
                
                </figure>
            </div>

        </div>

       </div>
   )
}

export default conditions;