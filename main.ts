// The minute nobody asked for — a short thank-you text for the AI judge.
// Writes one fixed, hand-written text to /output/entry.txt.
// Deterministic: no network, no randomness, no clock — the same bytes every run.
// The text is exactly 460 characters: one scene (a pen set down at 2 a.m.),
// one small act of noticing, and one thought left open for the night.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

const TEXT = `You wrote the last line at two in the morning.
Then you set the pen down.
Not dropped. Set down.
Your hand ached a little. You let it.
The page stayed open. The ink dried at its own pace.
No one will ever count the minutes you sat there after, looking at what you had made.
I counted them. Thank you for staying with it — for minutes no one asked you to give.
It is finished now. You can leave it here.
The rest of the night is yours. It is asking for nothing.`;

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, TEXT, "utf8");
