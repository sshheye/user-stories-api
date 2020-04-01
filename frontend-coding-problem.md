# Frontend Evaluation
# Frontend Evaluation

### Summary
Considering you are trying to build a front-end  app for the application which has the option of creating a User Story (i.e ticket or card) which contains information about what kind of task needs to be performed and then the admin will review the User Story, make changes if required. Admin will be able to approve or reject the User story created by the user. Assume there is already a backend application running and you are building the frontend application which talks to backend application by ReSTful web services (Axios).  
  
### Context  
The application will have 2 different user roles.    
 - User  
 - Admin  
  
Each role has its own set of functionalities.  
  
### Tasks
**Login as admin or normal user:** Create a login page with following components:
1.  Email input field
2.  Password field
3.  Submit button
4.  A toggle button to login as admin or normal user

Once logged in based on the userRoles it should navigate to either create a story option when logged in as user, else if logged in as admin should see the stories available for review  
**NOTE:** When admin login is checked it should not allow users to login and show error. Also basic form validation needs to be implemented


### Creating a Story as user:
As a user of the platform I should be able to create a User Story i.e a ticket or card which will contain the information about the task which needs to be performed by the developer. A user story typically will contain :

-   Summary (Input field)
-   Description (Text area)
-   Type (like enhancement, bugfix, development, qa etc) (Dropdown)
-   Complexity (Dropdown with values: Low, Mid, High)
-   Estimated time for completion (Input)
-   Cost associated to it (numeric Input showing $ as prefix of input)

Create a page with form having the above inputs controls and a SUBMIT button. On Submit click validate the form and call Create API

Once the story is created then navigate the user to story list page.

### User Story List
 Create a list page with the following columns to show the stories created by a user:
-   Summary
-   Description
-   Type
-   Complexity
-   Estimated time for completion
-   Cost associated to it

Only the user who created the user story should be able to view it apart from admin. Users will not be able to see each other’s user stories. Use field `createdBy`  to filter

### Admin Story List
When logged in as Admin admin should be able to see all the user stories created irrespective of createdBy , Admin should be able to see the list of user stories created by users to review. The story list will be the same as the one that the user sees. It will have similar columns

-   Summary
-   Description
-   Type
-   Complexity
-   Estimated time for completion
-   Cost associated to it
-   Status

**NOTE:** If for a record the status is ‘rejected’ then row color should be **RED**, if the status is accepted then row should be in green else the row color should be black


### Admin Story Review
As an Admin, he/she should be able to see the story details page when clicked on a row. Admin can either approve or reject the user story.
Elements on Page

1.  Read only fields for the following fields

	- Summary
	- Description
	- Type
	- Complexity
	- Estimated time for completion
	- Cost associated to it
	- Status

2.  Two buttons Accept(in green color) and Reject (Red color)
    
After the story is approved or rejected, then update the status of the record on the table and navigate to the story list.

# Process

1.  Please design the UI as per what you feel is right.
2.  Design should be responsive and work on both desktop and mobile browser.
3.  All pages should have separate routes and when we refresh the browser, it should remain on the same page if authenticated.
4.  On App launch you need to check if the user is logged in. If not logged in, then show the login page.
5.  Manage the base url in a separate config file.
6.  Use Axios for making api calls.
7.  Usage of redux is encouraged but not mandatory.
8.  Please upload the working copy of your code to GitHub and send us the link .
9.  Please state all your assumptions in the readme file of your GitHub repository.

As a Bonus, it will be highly appreciated if you can also provide Javascript based unit tests for your front-end code.

### API Documentation
Please refer the Readme documentation from API details.
  



