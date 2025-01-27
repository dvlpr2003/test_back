import express from "express";
import cors from "cors";
import 'dotenv/config';
import connetDB from "./config/mongodb.js";
import bankAccRouter from "./routes/bankAccRoute.js";
import adminAccRouter from "./routes/adminAccRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { createCanvas, loadImage } from '@napi-rs/canvas';
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connetDB();

app.use(express.json());
app.use(
  cors({
    origin: "https://test-front-delta-murex.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use('/api/bankAcc', bankAccRouter);
app.use('/api/admin', adminAccRouter);
app.use('/api/order', orderRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Utility Functions
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

// Main API Route to Generate Image with Text
app.get("/api/genImage/get-image-with-date", async (req, res) => {
  try {
    const { branchName, imageName } = req.query;

    // Validation
    if (!imageName) {
      return res.status(400).send("Image name is required.");
    }

    const imagePath = path.join(__dirname, "images", imageName);

    if (!fs.existsSync(imagePath)) {
      return res.status(404).send("Image not found.");
    }

    console.log(`Processing Image: ${imageName}`);
    console.log(`Branch Name: ${branchName}`);

    // Load Image and Initialize Canvas
    const image = await loadImage(imagePath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    // Add text to the canvas based on image type
    switch (imageName) {
      case "for seal authorized.png":
      case "for seal branch manager.png":
        if (branchName) {
          ctx.font = "bold 40px Arial";
          ctx.fillStyle = "black";
          ctx.textAlign = "right";
          ctx.fillText(`${branchName} Branch`, canvas.width - 20, canvas.height - 20); // Adjust placement
        }
        break;

      case "ROUND SEAL.png":
      case "SIGNATURE VERIFIED ROUND SEAL.png":
        if (branchName) {
          const radius = 145; // Radius for text placement
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const text = branchName;
          const fontSize = 35;
          ctx.font = `${fontSize}px Arial`;
          ctx.fillStyle = "black";

          const maxCharWidth = Math.max(...text.split("").map((char) => ctx.measureText(char).width));
          const charSpacingAngle = maxCharWidth / radius;

          let currentAngle = Math.PI; // Start angle
          for (let i = text.length - 1; i >= 0; i--) {
            const char = text[i];
            const charWidth = ctx.measureText(char).width;
            const x = centerX + radius * Math.cos(currentAngle);
            const y = centerY + radius * Math.sin(currentAngle);

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(currentAngle - Math.PI / 2);
            ctx.fillText(char, 0, 0);
            ctx.restore();

            currentAngle -= (charWidth + 5) / radius; // Adjust spacing
          }
        }
        break;

      default:
        // Default case: Add Date
        const formattedDate = formatDate(new Date());
        ctx.font = "55px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(formattedDate, canvas.width / 2, canvas.height / 2 + 20);

        if (branchName) {
          ctx.font = "bold 45px Arial";
          ctx.fillText(`${branchName} Branch`, canvas.width / 2, 108);
        }
    }

    // Send the final image
    res.set("Content-Type", "image/png");
    canvas.pngStream().pipe(res);
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).send("Failed to generate image");
  }
});

// Serve static files (images directory)
app.use("/images", express.static(path.join(__dirname, "images")));

// Start the server
app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
