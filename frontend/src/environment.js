let IS_PROD = true;

const server = IS_PROD
    ? "https://zoom-backend-j49h.onrender.com"   //backend
    : "http://localhost:800"       //frontend
      


export default server;