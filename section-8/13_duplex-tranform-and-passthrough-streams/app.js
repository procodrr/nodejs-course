import fs from "fs";

import { Readable, Writable, Duplex, Transform, PassThrough } from "stream";

const readStream = fs.createReadStream(
  "C:\\Users\\anura\\OneDrive\\Desktop\\streams.mp4",
  {
    highWaterMark: 1 * 1024 * 1024,
  }
);
const writeStream = fs.createWriteStream("streams.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

readStream.pipe(writeStream);
