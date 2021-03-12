# Paid to Scale

Website: [https://paidtoscale.com/](https://paidtoscale.com/)  
Author: Reptarsrage  
Date: 03/12/2021  

## Local development
- API
  1. Add `NODE_USER` and `NODE_PASSWORD` environment variables for the smtp server. These are you G-mail email and a generated Google App Password. 
  2. Run `yarn install` to install dependencies.
  3. Run `yarn start` to start Express server using nodemon.
- Client
  1. Change the form submit base urls ro point at the local API endpoint (http://localhost:3030 by default).
  2. Run using vscode Live Server.

## Deployment

- Client
  1. Run `yarn build` to generate deployable assets in the `dist` folder.
  2. FTP transfer everything in `dist` to `public_html`.
- API
  1. FTP transfer all source code to `api`.
  2. Ensure `public_html/api/.htaccess` exists.
  3. Head over to the CPanel Node.js section and ensure service is started.

## Notes

- Website consists of various html files compiled with [Parcel](https://parceljs.org/)
- API is a NodeJs server running [Express](https://expressjs.com/)