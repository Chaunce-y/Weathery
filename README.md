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

### Wireframe

Wireframe Link - https://wireframe.cc/pro/pp/0eb427357366804

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to search cities
- Display main search results as well as 7 day forecast 
- Have list of filters (display 5 day past or 7 day future) and result display options (F/C conversion)

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

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

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Building Core Application Structure | H | 5hrs | | |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
