import fs from "node:fs";
const stamped = {
  "def-regular-and-t3-spaces": "a8cert2-001",
  "ex-contractive-sequence-fixed-point": "a8cert-002",
  "fs-consecutive-differences-null-implies-cauchy": "a8cert-003",
  "lem-radial-normalisation-is-continuous": "a8cert-004",
  "thm-radial-straight-line-map-on-punctured-rn": "a8cert-005",
};
for (const [id, lane] of Object.entries(stamped)) {
  const p = `items/${id}.md`;
  let t = fs.readFileSync(p, "utf8");
  if (/^  verified:/m.test(t)) { console.log("already stamped", id); continue; }
  const block = `  verified:\n    model: claude-sonnet-5\n    verdict: certify\n    date: 2026-08-06\n    scope: published-audit\n    delegated_by: owner\n`;
  const next = t.replace(/^(verification:\n(?:  (?!verified:)\S.*\n(?:    .*\n)*)*)/m, (m) => m + block);
  if (next === t) { console.log("FAILED to stamp", id); continue; }
  fs.writeFileSync(p, next);
  console.log("stamped", id, "by", lane);
}
