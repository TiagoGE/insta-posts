InstaBytes Project
InstaBytes is a web application with both a backend and frontend that allows users to upload images and get image descriptions generated by Gemini AI. The backend is an API deployed to Google Cloud, and the frontend is just a user interface for interacting with the API to show the images and descriptions.

Features
Image Upload: Users can upload images.
Image Description: Image descriptions are generated by Gemini AI.
Frontend & Backend: The project consists of a frontend that interacts with a backend API.

Backend
The backend is a RESTful API built using [Node.js/Express] and deployed to Google Cloud. It handles image uploads and communicates with Gemini AI to generate descriptions for the images.

API Endpoint
The backend API is deployed to Google Cloud and can be accessed at the following URL:

https://backend-api-246822425102.us-west1.run.app/posts

How It Works
  
  1. Upload an Image:
Use Postman or another API tool to send a POST request to:
https://backend-api-246822425102.us-west1.run.app/posts/upload
In the request body, include the image URL with the key url.

  2. Generate Description:
Once the image is uploaded, copy the generated image ID.
Send a PUT request to:
https://backend-api-246822425102.us-west1.run.app/posts/upload/_id
Replace _id with the image ID you just copied.
Optionally, add an "alt" value to provide alt text for when the image is not loaded.

  3. View the Image and Description:
If the frontend is running locally, open your browser and go to http://localhost:8000 to view the image and its description.
Alternatively, you can view the new document directly via the API at:
https://backend-insta-bytes-246822425102.northamerica-northeast1.run.app/posts
If you want to see a specific image, you can browse the following URL, replacing _id with the image ID:
https://backend-insta-bytes-246822425102.northamerica-northeast1.run.app/_id.png

To test the API locally or interact with it, follow these steps:

INTERACT WITH CLOUD
1. Download only the frontend folder.

Frontend
The frontend is user interface that allows users to interact with the backend API, displays the images and descriptions generated by Gemini AI.
Running the Frontend
In the project root, navigate to the frontend folder.
Install dependencies:
'npm install'
Go to ".env" file:
Uncomment the line 1: # API_URL = https://backend-api-246822425102.us-west1.run.app/posts/posts
And comment the line 2: API_URL = http://localhost:3000/posts
Run frontend:
npm run dev
Open your web browser and navigate to http://localhost:8000 to interact with the frontend.


LOCALLY
1. Create an API key from google gemini.
2. Create a cluster in MongoDB Atlas and connect.
3. Clone the repository or download it.

In the project root, navigate to the backend folder.
Install dependencies:
'npm install'
Create a ".env" file and add the API_KEY generated from gemini and DB_CONNECTION from MongoDB Atlas
Save changes.
Run the server:
'npm run dev'

Frontend
The frontend is user interface that allows users to interact with the backend API, displays the images and descriptions generated by Gemini AI.
Running the Frontend
In the project root, navigate to the frontend folder.
Install dependencies:
'npm install'
Run frontend:
npm run dev
Open your web browser and navigate to http://localhost:8000 to interact with the frontend.

Technologies Used
Backend: Node.js, Express, Gemini AI, MongoDB Atlas
Deployment: Google Cloud Run
