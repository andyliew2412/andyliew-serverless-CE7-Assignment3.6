**Module 3 : Assignment 3.6**
Create a serverless node application and deploy to AWS Services (API Gateway, AWS cloudFormation, AWS Lambda and AWS DynamoDB)
Refer to below steps & tools required for Serverless Setup

This assignment will be done in a MacOS environment.

1) Create a Serverless Account:
    - Sign up at Serverless.com.

2) Set Up a GitHub Repository:
    - Create a new GitHub repository.
    - Clone it to your local computer (MacOS).
  
3) Create and Deploy a Serverless App on AWS:
    - Add the AWS-node-http-api-project folder to the cloned Git repository.
    - Navigate into the AWS-node-http-api-project folder.
    - Open and edit the serverless.yml file:
      - Add your organization (org) and app name at the top.
      - Change the service name (include your name in the service name).
      - Comment out the line: profile: serverless.
      - Change the TableName to include your name.
    - Add the package.json & package-lock.json files to the project folder  

4) Check and Install Serverless Locally:
    - Verify Installation
          serverless --version
    - If not installed, run:
      -     npm install serverless -g

