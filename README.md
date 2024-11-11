# DMONEY_API_TESTING_AUTOMATION_WITH_POSTMAN

## Technology and Tool used

- Postman
- Newman

## Scenario of this project

- Admin creates an agent, a Merchant and random 2 customers
- Deposit some money from SYSTEM account to the agent
- Agent checks balance after deposit
- Agent deposit to any of 1 customer
- The customer checks balance
- Agent check balance after deposit to customer
- Then withdraw any amount from the agent with Customer 1
- And send money to the  customer 2 from customer 1
- Customer will check balance after sending money
- Make payment to Merchant from Customer 2
- Check customer 2 and Merchant balance after payment
- Cancel transaction as Admin

## How to run this project

- clone this project
- hit following commands

``` npm i ```
``` npm run test:dev``` or 
``` npm run test:qa```

## prerequisites
**You must have nodejs installed in your system**


## API Documents
https://documenter.getpostman.com/view/23406180/2s83KW9PHq


## Output
**Run on QA Environment:**
![image](https://github.com/user-attachments/assets/ac173c33-983d-461d-b5e1-5206a1799142)

**Run on Dev Environment:**
![image](https://github.com/user-attachments/assets/c0232a94-2575-45bc-95c9-e836053d7450)


![image](https://github.com/user-attachments/assets/e9c17c4b-ab6b-4804-97b5-dfc3d92d3310)


![Newman_Requests](https://user-images.githubusercontent.com/54511128/192147515-c8ec9e1b-1483-4d14-b80f-08144d970439.png)
