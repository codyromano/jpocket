# jpocket

## Getting started

Create your own Twilio SMS messaging service and add your own credentials:
```
cp credentials.example.json credentials.json
```
Run the deploy script to create `.zip` for Lambda:
```
npm run deploy
```
Upload the `.zip` to Lambda and use a Cloud Watch rule to make it execute on a set schedule.