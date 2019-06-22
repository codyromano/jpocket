# jpocket

## Getting started

Create your own Twilio SMS messaging service and add your own credentials:
```
cp credentials.example.json credentials.json
```
Run the deploy script to create `.zip` for Lambda:
```
npm run build
```
Upload the `.zip` to Lambda using the AWS Web UI and use a Cloud Watch rule to make it execute on a set schedule.

## Wishlist

[] Implement aws-cli to progammatically update Lambda code as part of `npm run build`