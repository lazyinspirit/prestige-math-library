import fs from "node:fs";
const ids = ["fs-consecutive-differences-null-implies-cauchy","ex-contractive-sequence-fixed-point",
  "def-regular-and-t3-spaces","thm-radial-straight-line-map-on-punctured-rn",
  "lem-radial-normalisation-is-continuous"];
for (const id of ids) {
  const p = `items/${id}.md`;
  let t = fs.readFileSync(p, "utf8");
  const before = t;
  t = t.replace(/^  judge:\n(?:    .*\n)+/m, "");
  t = t.replace(/^  audited: .*\n/m, "");
  if (t === before) { console.log("NO CHANGE", id); continue; }
  fs.writeFileSync(p, t);
  console.log("stripped", id);
}
