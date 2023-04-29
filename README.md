# Demo application

# References
- Pug: https://pugjs.org/api/getting-started.html
- Express: https://expressjs.com/en/starter/hello-world.html
- nvm: https://github.com/nvm-sh/nvm

# Deploy
## Dinamic Site
gcloud functions deploy my-web-app --gen2 --region=us-central1 --runtime=nodejs16 --source=. --entry-point=web --trigger-http

## Static Site

Copy static files into your bucket

**Keep it up**