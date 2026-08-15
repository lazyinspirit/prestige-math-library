#!/usr/bin/env node
// Append adjudications to the working decisions file. Reads a JSON array of
// {id, models, outcome, defect_type, note} on stdin; `models` is "T", "D" or
// "TD" naming which lane's rejection this decision closes.
import fs from "node:fs";
const P = "research/frontier-13-alpha-a-step8-decisions.json";
const MODEL = { T: "gpt-5.6-terra", D: "deepseek-v4-pro" };
const cur = fs.existsSync(P) ? JSON.parse(fs.readFileSync(P, "utf8")) : {};
const add = JSON.parse(fs.readFileSync(0, "utf8"));
for (const d of add) {
  cur[d.id] ??= {};
  for (const ch of d.models) cur[d.id][MODEL[ch]] = { outcome: d.outcome, defect_type: d.defect_type, note: d.note };
}
fs.writeFileSync(P, JSON.stringify(cur, null, 1));
const rows = Object.values(cur).reduce((n, v) => n + Object.keys(v).length, 0);
console.log(`decisions: ${Object.keys(cur).length} items, ${rows} rows`);
