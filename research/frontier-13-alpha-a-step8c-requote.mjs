#!/usr/bin/env node
// Re-point the two consumer contract quotes at the repaired Statement. The
// `quote` field records the EXACT cited source clause, so binding G in
// thm-counting-lemma-for-a-fixed-graph's Statement moves it; nothing else in
// either consumer's contract changes.
import fs from "node:fs";

const src = fs.readFileSync("items/thm-counting-lemma-for-a-fixed-graph.md", "utf8");
const statement = /## Statement\n\n([\s\S]*?)\n\n## /.exec(src)[1];

const P = "research/frontier-13-batch-4.proof-contracts.json";
const c = JSON.parse(fs.readFileSync(P, "utf8"));
let n = 0;
for (const id of ["thm-graph-removal-lemma", "thm-induced-counting-lemma-for-regular-pairs"])
  for (const cit of c.contracts[id].citations)
    if (cit.source === "thm-counting-lemma-for-a-fixed-graph") { cit.quote = statement; n++; }
fs.writeFileSync(P, JSON.stringify(c, null, 1) + "\n");
console.log(`requoted ${n} citation(s) against the repaired Statement (${statement.length} chars)`);
