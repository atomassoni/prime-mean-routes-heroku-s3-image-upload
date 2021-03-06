## Synopsis

This is a simple example using the MEAN stack and routes to upload images to Amazon's S3 file hosting service. It assumes the project will be hosted on localhost or Heroku.

## Installation

This assumes you are using node.js, and MongoDB. Run npm install from the command line inside the folder.

### References
- [ng-file-upload](https://github.com/danialfarid/ng-file-upload/blob/master/README.md) -
I've just used some examples of things you can do with ng-file-upload, there's also an S3 tutorial on there.

- [NukaPunk/mean-multer-ngf](https://github.com/NukaPunk/mean-multer-ngf) - Some of the code in this is from here.

### Configuring Amazon
To get file uploads to work, you have to generate two keys on Amazon. This is my write-up of how I configured S3. 
- [Amazon S3 Setup](https://docs.google.com/document/d/1ksMWwm0hxe6UWmH0fEqVsS6fr8UxBwIFvEVPvVoE4og)

### Setting environment variables locally

You will need to create a file called .env if you haven't already and place it in the top level of your folder along with .gitignore. Cut and paste the following into .env and put your own values after the equal sign. Remember, this is just for localhost. You will need to set these variables again on Heroku. Your keys and bucket name will probably be the same, but you probably want to have a remote database, which you can set here, if you want. Any reference in the project to process.env will refer to these constants.

AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXXX  
AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  
MONGODB_URI=mongodb://localhost:27017/db  
S3_BUCKET_NAME=your-bucket-name  

Once you have set up your Amazon account correctly and created a .env file with the proper values, file uploading should work.
