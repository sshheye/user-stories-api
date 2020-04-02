# Backend Evaluation

### Summary
Consider you are trying to build a backend server for an application that has the option of creating a User Story (i.e Ticket or Card). The App contains all the information of the stories(i.e. Ticket or Card) created by the users. The Admin will review the User Story and make changes if required. The Admin will also be able to approve or reject the User story created by the user.

Please assume that there is already a frontend application running and you are building only the REST-API based backend server application.
  
### Context
The application will have 2 different user roles.    
 - User  
 - Admin  
  
Each role has its own set of functionalities.  You can define your own attributes for the User that you feel is right.
  
## APIs 
### Signup
As a user, I should be able to singup in the platform using the signup endpoint. The details required are
    
    Firstname
    Lastname
    Email
    Password

* Email id format validation needs to be done in signup API 

### Authentication
As a user/admin I should be able to login with my email and password. On successful login, I should get the user object as a response containing the below given details.

    id: 1
    role: "User/Admin"
    token: "<JWT TOKEN>"
    firstname: AAAAA
    lastname: BBBBBB 

**Note:** Feel free to add any additional details if needed.

* Email id format validation needs to be done in login API

### Create Story:
As a user of the platform I should be able to create a user story (i.e Ticket or Card) which will contain the information about the task which needs to be performed by the developer. A user story typically will contain : 
 
-   Summary
-   Description
-   Type (like enhancement, bugfix, development, qa)
-   Complexity (Low, Mid, High)
-   Estimated time for completion
-   Cost

**Note:** Feel free to define any additional attributes to store any other information if needed.

1. Validations on `Type` and `Complexity` is needed 
2. JWT token based authentication is needed

### Story List:
As a user, I should be able to get all the stories create by me. In case of admin, I should be able to see all the stories created by all the users in the system.
The response should have the following details.
-   Id
-   Summary
-   Description
-   Type (like enhancement, bugfix, development, qa)
-   Complexity (Low, Mid, High)
-   Estimated time for completion
-   Cost
-   Status (Default value is "NEW")

1. Only the user who creates the user story should be able to view it apart from admin. Users should not be able to access the stories created by other users 
2. JWT token based authentication is needed

### Edit stories as Admin:
As an Admin, I should be able to review the user stories created by the user. 
- The Admin will have the permission to make modifications to the user story. 
- Admin can either approve or reject the user story. 


1. Only the User who creates the user story should be able to view it apart from admin. Users will not be able to see each other’s user stories. 
2. JWT token based authentication is needed

### End Points
Rest APIs have to be developed to support the below mentioned tasks.
- Signup
- Authentication
- Creating the user story
- API to fetch all the stories
- API to edit the story details and status (Only by Admin)

### Expectations

1. Design the database as per what you feel is right. Please use any Relational database. 
2. Usage of Typescript and typeorm will be encouraged (but not mandatory).
3. We care quality of code, unit tests carries additional weightage.
4. Bonus points for API doc built with Swagger. 
5. Upload the working copy of your code in GitHub and send us the link . 
6. State all your assumptions in the readme file of your GitHub repository.
  



