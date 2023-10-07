# Almabetter - Capstone project ( 2nd ) - BookMyShow

This is a backend capston project given by almabetter in this project we created bookmyshow website this project have vary simple UI and this website is very easy to use ( userfriendly )  and also a work in any devices ( Responsiveness ) .
 


## Deployment Links

click on the line to see the project 

Frontend on Vercel.com
 - https://ge

Backend on cyclic.sh

 - https://pear-alligator-wear.cyclic.app/api/booking


## Installation

If you want to work on this project clone this repo 
bash
 git clone https://github.com/


open this project on you local IDE  and in the terminal do this commands one by one 
 - for Frotend
bash
cd frontend

npm install

npm start

 - for backend 
 bash
cd backend

npm install

npm start 
 
 This will start you frontend part in http://localhost:3000 and backend part running in http://localhost:8080 

    
## How to use
 
Click on this link for using the website
 - https://getbookmyshow.netlify.app
 1) First select movie you like 
 2) select time schedule 
 3) select seats
 4) click on Book show button the confirmation pop window will open close this and see right side on the screen the previous movie ticket will show 
 


## Tech Stack

*Frontend:* React js, 

*backend:* Node js, Express js , 

*database:* Mongodb

This is a MERN stack project  


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Note : your mongodb clustur connect key 

`API_KEY`

 MONGOURI : mongodb+srv://user_name:<password>@cluster0.adfedxd.mongodb.net/<database_name>?retryWrites=true&w=majority



## API Documentation

#### Base URL
https://pear-alligator-wear.cyclic.app/api

#### Booking
get  the booking

```http
  GET /booking
```
Returns a list of last booking stored in the database in JSON format.

```http
  post /booking
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `movie` | `string` | **Required**. your selected movie |
| `slots ` | `string` | **Required**. your selected time|
| `Seats ` | `number` | **Required**. no of seats you have seleacted|

Returns the newly created booking in JSON format


## Support

For support, **email**
- rohitkumarok202@gmail.com

or connect on **linkedin**

- Rohit kumar :- https://www.linkedin.com/in/rohit-kumar-a16605210/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bue7x8RtAQs%2B4C0liGYzPfw%3D%3D

## project Author

- [@Rohit kumar]( https://github.com/rohitqwert )