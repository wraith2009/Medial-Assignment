import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';

// Define __dirname in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Media Assignment");
});

app.get('/api/generate-image', async (req, res) => {
  const { avatar, title, description, media, username} = req.query;
  const truncateDescription = (description, maxLength = 50) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };


const htmlContent = `
  <html>
    <body style="font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0; height: 630px; width: 1200px; overflow: hidden;">
      <div style="position: relative; background-color: #13181d; color: white; height: 630px; width: 1200px; box-sizing: border-box;">
        <div style="height: 60%; width: 100%;">
          <img src="${media}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div>
          <h1 style=" font-size: 32px; font-weight: bold;">${title}</h1>
          <p style="font-size: 24px; color: #9bb7b8;">${truncateDescription(description)}</p>
        </div>
      </div>
    </body>
  </html>
`;


  // Ensure the public directory exists
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to the desired image size
  await page.setViewport({ width: 1200, height: 630 });

  await page.setContent(htmlContent);

  const screenshotPath = path.join(publicDir, 'og-image.png');
  await page.screenshot({ path: screenshotPath });

  await browser.close();

  res.json({ imageUrl: `http://localhost:4000/og-image.png` });
});

export { app };