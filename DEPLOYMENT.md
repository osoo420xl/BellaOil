# BellaOil Deployment Guide

## Deploying to Render

### Frontend Deployment (React App)

1. **Create a new Static Site on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Static Site"
   - Connect your GitHub repository: `https://github.com/osoo420xl/BellaOil`

2. **Configure the Static Site settings:**
   - **Name**: `bellaoil-frontend`
   - **Build Command**: `cd frontend && yarn install && yarn build`
   - **Publish Directory**: `frontend/build`
   - **Environment**: Production

3. **Environment Variables** (if needed):
   - Add any environment variables your app needs

### Backend Deployment (Optional - if you want to deploy the Python backend)

1. **Create a new Web Service on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `https://github.com/osoo420xl/BellaOil`

2. **Configure the Web Service settings:**
   - **Name**: `bellaoil-backend`
   - **Build Command**: `cd backend && pip install -r requirements.txt`
   - **Start Command**: `cd backend && python server.py`
   - **Environment**: Python 3

### Important Notes

- ✅ **Build folder is correctly ignored** by `.gitignore`
- ✅ **Package.json has correct build script**: `yarn build`
- ✅ **Craco is configured** for Tailwind CSS
- ✅ **All dependencies are included** in package.json

### After Deployment

1. Your site will be available at: `https://your-app-name.onrender.com`
2. Render will automatically rebuild when you push changes to GitHub
3. You can set up a custom domain in Render's dashboard

### Troubleshooting

- If build fails, check the build logs in Render dashboard
- Make sure all dependencies are in `package.json`
- Verify that the build command works locally: `cd frontend && yarn build` 