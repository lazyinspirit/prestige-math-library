#!/usr/bin/env node
// Deterministic frame-by-frame capture of an explainer page to an MP4.
//
// The page must expose `window.__film = { duration, seek(t) }` under `?film=1`
// and draw every frame as a pure function of `t` — no wall clock, no
// randomness. That is what makes this reproducible: the same page and the same
// fps always produce byte-comparable frames, and a re-render after an edit
// differs only where the edit did.
//
//   RENDER_MODULES=/path/with/node_modules \
//     node explainer/render-video.mjs \
//       --page explainer/authoring-and-repair.html \
//       --out ~/Downloads/authoring-and-repair.mp4
//
// puppeteer and ffmpeg-static are NOT dependencies of this repository — this
// directory ships no package.json and the serving path installs nothing. Point
// --modules (or $RENDER_MODULES) at any directory where they are installed.
//
// Options
//   --page <file|url>     the page to film                (required)
//   --out <file.mp4>      where to write                  (required)
//   --fps <n>             frame rate, default 30
//   --width/--height      frame size, default 1920x1080
//   --crf <n>             x264 quality, default 18 (lower = better)
//   --stills <t,t,…>      write PNGs at these seconds instead of a video
//   --modules <dir>       where puppeteer / ffmpeg-static live
//
// Output is H.264 High / yuv420p in MP4 with +faststart and a silent AAC
// track: the profile X accepts without re-encoding surprises.
import { createRequire } from "node:module";
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname, isAbsolute, join } from "node:path";
import { pathToFileURL } from "node:url";

const argv = process.argv.slice(2);
const arg = (name, dflt) => {
  const i = argv.indexOf("--" + name);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : dflt;
};
const page = arg("page");
const out = arg("out");
const fps = Number(arg("fps", 30));
const width = Number(arg("width", 1920));
const height = Number(arg("height", 1080));
const crf = String(arg("crf", 18));
const stills = arg("stills", null);
const modules = arg("modules", process.env.RENDER_MODULES || process.cwd());

if (!page || (!out && !stills)) {
  console.error("usage: render-video.mjs --page <file> --out <file.mp4> [--fps 30] [--stills 0,12,30]");
  process.exit(2);
}
const req = createRequire(join(resolve(modules), "package.json"));
let puppeteer, ffmpegPath;
try {
  puppeteer = req("puppeteer");
  ffmpegPath = req("ffmpeg-static");
} catch (e) {
  console.error("cannot resolve puppeteer / ffmpeg-static from " + resolve(modules));
  console.error("install them there, or pass --modules <dir>: " + e.message);
  process.exit(2);
}

const url = /^https?:/.test(page) ? page + (page.includes("?") ? "&" : "?") + "film=1"
  : pathToFileURL(resolve(page)).href + "?film=1";
const outPath = out ? (isAbsolute(out) ? out : resolve(out)) : null;

const browser = await puppeteer.launch({
  headless: "shell",
  args: [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--force-device-scale-factor=1",
    "--font-render-hinting=none",
    "--disable-lcd-text",           // grayscale AA: no colour fringes after H.264 chroma subsampling
    "--hide-scrollbars",
  ],
  defaultViewport: { width, height, deviceScaleFactor: 1 },
});
const tab = await browser.newPage();
tab.on("pageerror", (e) => console.error("page error:", e.message));
await tab.goto(url, { waitUntil: "load" });
await tab.waitForFunction("window.__film && window.__film.duration > 0", { timeout: 15000 });
// let the font stack settle before the first paint is captured
await tab.evaluate(() => document.fonts.ready);
const duration = await tab.evaluate(() => window.__film.duration);
console.log("page " + url);
console.log("duration " + duration.toFixed(2) + "s at " + fps + " fps → " + Math.round(duration * fps) + " frames");

const shoot = async (t) => {
  await tab.evaluate((x) => window.__film.seek(x), t);
  return tab.screenshot({ type: "png", captureBeyondViewport: false, optimizeForSpeed: true });
};

if (stills) {
  const dir = outPath ? dirname(outPath) : process.cwd();
  mkdirSync(dir, { recursive: true });
  for (const s of stills.split(",")) {
    const t = Number(s.trim());
    const buf = await shoot(t);
    const f = join(dir, "still-" + String(t).replace(".", "_") + "s.png");
    writeFileSync(f, buf);
    console.log("wrote " + f);
  }
  await browser.close();
  process.exit(0);
}

mkdirSync(dirname(outPath), { recursive: true });
const ff = spawn(ffmpegPath, [
  "-y",
  "-f", "image2pipe", "-framerate", String(fps), "-i", "pipe:0",
  "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100",
  "-c:v", "libx264", "-profile:v", "high", "-level", "4.0",
  "-preset", "slow", "-crf", crf, "-pix_fmt", "yuv420p",
  "-r", String(fps), "-g", String(fps * 2),
  "-c:a", "aac", "-b:a", "128k", "-shortest",
  "-movflags", "+faststart",
  outPath,
], { stdio: ["pipe", "inherit", "pipe"] });
let ffErr = "";
ff.stderr.on("data", (d) => { ffErr += d.toString(); });
const done = new Promise((res, rej) => {
  ff.on("close", (code) => (code === 0 ? res() : rej(new Error("ffmpeg exit " + code + "\n" + ffErr.slice(-3000)))));
});

const total = Math.round(duration * fps);
const t0 = Date.now();
for (let i = 0; i < total; i++) {
  const buf = await shoot(i / fps);
  if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
  if (i % 60 === 0 || i === total - 1) {
    const el = (Date.now() - t0) / 1000;
    const pct = ((i + 1) / total * 100).toFixed(1);
    process.stdout.write("  frame " + (i + 1) + "/" + total + "  " + pct + "%  " +
      el.toFixed(0) + "s elapsed, ~" + (el / (i + 1) * (total - i - 1)).toFixed(0) + "s left\n");
  }
}
ff.stdin.end();
await done;
await browser.close();
console.log("wrote " + outPath);
