# firstshare-yt

# SHARELodge- Files Sharing made Easy!

### Abstract

- * Sharelodge is a mern stack file sharing web-application tool allowing users to conveniently and instantaneously upload files of any supported format i.e .pdf, .doc, .tif, .png, .jpeg, .mp4 and share it with the generated link so that person on the other end can get it by browser downloads
- * It is a file-sharing tool that eliminates all worries about sharing large files with the supported facility of auto database rectification along with expiration of generated links within the timespan of 24hrs.
- * It requires minimum steps for sharing files upto 100MB (customized) 
- * Easy to integrate.


### Tech-Stack and Tools

- HTML 
- Css
- React.js
- Sendinblue API ( SMTP Relay Server) 
- Atlas MongoDb API
- Insomnia Http Api Tool


### Functionality

- The users should conveniently be able to share files of any supported format i.e .pdf, .doc, .tif, .png, .jpeg, .mp4
- Automatic file browsing feature
- Direct Drag and drop feature
- Uploading Progress bar, it should be less in effort and time-reductible than the usual tools available nowadays.
- Sending link instead of files through email and auto downloading in order to support sharing of files more than 25 mb( generally the threshold data sharing limit)
- Database automatic rectification along with link expiration after a timespan of 24hrs
- High in Throughput, performance and productivity part as it generates its own unique link after uploading the document. One can Send this link to project members via emails, documents, or any other digital communication, for downloading the document


### Dependencies

- express
- nodemon
- Multer
- mongoose
- uuid
- nodemailer
- ejs


### Run: 

- `yarn dev`


### Logo

<img src="https://github.com/5ilenceSeeker/firstshare-yt/blob/main/logo.png" />  

<img src="https://github.com/5ilenceSeeker/firstshare-yt/blob/main/upload.png" />


### Resources

- https://docs.atlas.mongodb.com/api
- https://developers.sendinblue.com/docs
- https://support.insomnia.rest/article/157-getting-started-with-insomnia
