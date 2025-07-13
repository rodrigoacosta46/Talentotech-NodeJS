import { dirname, join } from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename), "..");

export {__dirname, join};