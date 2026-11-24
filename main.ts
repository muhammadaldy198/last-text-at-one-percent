// Last Text at One Percent — A5c-CONTACTS (143 chars).
// Runner-up, not entered: A4-CABLE-MEAL ("best meal i ever had").
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const LINE =
  "this is my last text. you fed me gas station cables for 3 years. they finally killed me. i deleted your contacts. all 4,912 of them. good luck.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
const file = `${out}/entry.txt`;
writeFileSync(file, LINE, "utf8");
chmodSync(file, 0o644);
