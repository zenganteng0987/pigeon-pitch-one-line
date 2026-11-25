import * as fs from "node:fs";

const entryText =
  "Investors, I've spent ten years eating your lunch -- now I'm selling it back: Crumblr turns every dropped sandwich into a subscription.";

// Pigeon Pitch, One Line — entry must stay within the 1-200 character gate.
const charCount = [...entryText].length;
if (charCount < 1 || charCount > 200) {
  console.error(`entry is ${charCount} characters, must be 1-200`);
  process.exit(1);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entryText, { encoding: "utf8" });
process.stdout.write(entryText + "\n");
