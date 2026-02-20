@echo off
echo Starting Smart Transit AI Services...

echo Starting Server (Backend)...
start "Smart Transit Server" cmd /k "cd server && npm install && npm run dev"

echo Starting Client (Frontend)...
start "Smart Transit Client" cmd /k "cd client && npm install && npm run dev"

echo Starting ML Service (Python)...
start "Smart Transit ML Service" cmd /k "cd ml-service && python -m pip install -r requirements.txt && python -m uvicorn app.main:app --reload --port 8000"

echo All services attempt to start in new windows.
echo NOTE: Ensure you have a local MongoDB instance running on port 27017, or update the MONGO_URI in server/.env
pause
