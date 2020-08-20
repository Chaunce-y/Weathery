# Project Overview

## Project Name

Weathery

## Project Description

This app will allow the user to look up the previous and future weather forecast for any city, from 5 days in the past to 10 days in the future. It will also provide weather forcasts in some cities down to the minute.

## API and Data Sample

api.openweathermap.org/data/2.5/weather?q=Manhattan,ny,us&APPID=****************

Data Sample:

{
    "coord": {
        "lon": -73.97,
        "lat": 40.78
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 294.56,
        "feels_like": 294.45,
        "temp_min": 292.59,
        "temp_max": 296.15,
        "pressure": 1014,
        "humidity": 68
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.6,
        "deg": 0
    },
    "rain": {
        "1h": 0.64
    },
    "clouds": {
        "all": 75
    },
    "dt": 1597843797,
    "sys": {
        "type": 1,
        "id": 5141,
        "country": "US",
        "sunrise": 1597831839,
        "sunset": 1597880907
    },
    "timezone": -14400,
    "id": 5125771,
    "name": "Manhattan",
    "cod": 200
}

## [Wireframe](../master/Weathery%20Wireframe.pdf)

## MVP/PostMVP  

### MVP 

- Find and use external api 
- Render data on page 
- Allow user to search cities
- Display main search results as well as 7 day forecast 
- Have list of filters (display 5 day past or 7 day future) and result display options (F/C conversion)
- Style Page

### PostMVP  

- Add second API
- Use local storage to save user location
- add feature that uses user's location to find information

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 17| Project Approval | Incomplete
|August 18| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 19| Initial Clickable Model  | Incomplete
|August 20| MVP | Incomplete
|August 21| Presentations | Incomplete

## [Priority Matrix](../master/Priority%20Matrix.pdf)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Building Core Application Structure | H | 5hrs | | |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet



## Change Log
  
