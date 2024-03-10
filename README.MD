Good day!

this is an assessment backend project developed by Obetta Augustine

the task:
An Application programming interface (API) service written in Javascript (NodeJs/ExpressJs)
that enables the client:
(i) Create Todos
(ii) Read Todos
(iii) Update Todos
(iv) Delete Todos
The Client is the TodoMVC which will be specified below. Please note that the Client must
be authenticated with JWT and all API endpoints must contain a middleware that validates
the Client. MongoDB should be used as the Database.

To use this api for your service, you will have to generate a jwt token that will be included in the header in every request you make

url: https://todoapis-4fs2.onrender.com/api/v1/auth/register
body: {
    "email":"augustineebukaa98@gmail.com",
    "password":"Henrus984"
}

response: {
    "user": {
        "email": "augustineebukaa98@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWVjMjcxZWM2NmNkMWM4MjJkNzExNmUiLCJlbWFpbCI6ImF1Z3VzdGluZWVidWthYTk4QGdtYWlsLmNvbSIsImlhdCI6MTcwOTk3NTMyNywiZXhwIjoxNzEwMzIwOTI3fQ.TCKxJRTc28_b91wbqdsZX9mDQ_bPOoeGAuTDAvsKzPg"
}

then you use the token in your service
to check the endpoint usable on the api, check out my postman collection
