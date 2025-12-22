import sharp from "sharp";
import path from "path";
import fs from "fs";

const inputPath = path.resolve("public/anhnen.jpg");
const outputPath = path.resolve("public/og-cover.jpg");

async function generateOG() {
  // đảm bảo thư mục tồn tại
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  await sharp(inputPath)
    .resize(630, 1200, {
      fit: "cover",       // crop đúng tỉ lệ OG
      position: "center", // lấy trung tâm ảnh
    })
    .jpeg({
      quality: 75,        // 70–80 là đẹp
      mozjpeg: true,
    })
    .toFile(outputPath);

  console.log("✅ OG image generated:", outputPath);
}

generateOG().catch(console.error);
