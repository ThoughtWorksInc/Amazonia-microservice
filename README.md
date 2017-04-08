# Things

## Frontend

* Shows weather and events 

## Backends

* Weather service
  - Takes location and return weather info

  GET /weather/<location> (e.g. /weather/london)

  Response:
  {
    "location": "London",
    "temperature": 25,
    "forecast": "Sunny" 
  }

* Events service
  - Takes location and date and return events

  GET /events/<location>?at=<date> (e.g. /events/london?at=2017-04-08)

  Response:
  [
    {
      "id": 123
      "location": "142 Somewhere, London",
      "when": "2017-04-08T14:30",
      "what": "Some meetup with code"
      "link": "http://localhost:2302/events/123"
    },
    {
      ...
    },
    ...
  ]
