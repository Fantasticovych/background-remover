# Background Remover

 A stylish and fast service for **removing backgrounds from photos**.  
Frontend built with **React**, backend built with **FastAPI**, using **Rembg** for image processing.

---

## Features

- Upload photos via the interface.
- Preview the original image.
- Remove the background and view the result.
- Download the processed image.
- Check the backend status via `/health`.

---

## Technologies

### Frontend

- React + Hooks
- CSS glassmorphism + blurred background video
- Modern and user-friendly UI/UX

### Backend

- Python 3.11+
- FastAPI
- rembg (for background removal)
- Pillow (for image processing)
- CORS middleware for frontend integration
- Uvicorn (ASGI server)

---

## How to launch a project
### Backend (FastAPI)
 ```bash
git clone <URL_REPOSITORY>
cd background-remover
cd backend
# Creating a virtual environment
python -m venv env

# Activation (Windows)
source env/Scripts/activate

# Installing dependencies
pip install fastapi uvicorn rembg pillow
```
Starting the server:
```bash
python -m uvicorn api.main:app --reload
```

### Frontend (React)

Go to the frontend folder:

```cd frontend```


Set up the dependencies:

```npm install```


Run locally:

```npm run dev```

Make sure the API in App.jsx points to the backend
