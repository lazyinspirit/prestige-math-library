#!/usr/bin/env node
// Freeze the adjudication-time item hash for every rejected id, BEFORE any
// confirmed-fatal repair. The ledger row must carry the pre-edit hash: that is
// what step8-guard compares the post-edit tree against.
import fs from "node:fs";
import { itemContentHash } from "../tools/item-hash.mjs";

const rej = JSON.parse(fs.readFileSync("research/frontier-13-rejections.json", "utf8"));
const out = {};
for (const id of [...rej.both, ...rej.split]) {
  const p = `items/${id}.md`;
  out[id] = fs.existsSync(p) ? itemContentHash(fs.readFileSync(p, "utf8")) : null;
}
fs.writeFileSync("research/frontier-13-alpha-a-step8-prehashes.json", JSON.stringify(out, null, 1));
console.log("frozen", Object.keys(out).length, "missing", Object.values(out).filter((v) => !v).length);
