#!/usr/bin/env node
// wave5-a8r3-write-adjudications.mjs — the six A8 round-3 adjudication rows.
//
// Kept so the ledger append is reproducible rather than hand-typed, and so the
// `item_sha256` values are COMPUTED by the same function the gate compares them
// against instead of copied from the dispatch prompt.
//
// WHY THAT MATTERS HERE. The dispatch printed an `item <prefix>` for each
// rejection taken from research/audit/wave5-judge.jsonl. That field is
// judge.mts's normalisation — the whole file with only the `judge:` SUB-BLOCK
// removed. The adjudication ledger's `item_sha256` is consumed by
// tools/step8-guard.mjs, which compares shortHash(row.item_sha256) against a
// touchlog baseline hash, and touchlog uses tools/item-hash.mjs — the whole file
// with the ENTIRE `verification:` block removed. The two disagree whenever an
// item carries a precheck/audited/verified stamp, which is all six of these.
// Copying the printed prefix would have written a hash step8-guard can never
// match, so a later fatal repair on any of these items would read as an
// unlicensed edit. All 108 pre-existing rows use the item-hash.mjs value; these
// six do too.

import { appendFileSync, readFileSync } from "node:fs";
import { itemContentHash } from "../../tools/item-hash.mjs";

const LEDGER = "research/audit/wave5-judge-adjudications.jsonl";
const at = "2026-08-06T00:00:00.000Z";

const rows = [
  // 1. Fourth false positive on this pairing. fs-rationals-complete is a
  //    false-STATEMENT item: its `## Refutation` builds s_n = k_n/10^n (1.1),
  //    proves s_n^2 <= 2 < (s_n + 10^-n)^2 (1.1), proves Cauchy (2.1) and proves
  //    no rational limit (3.1, 4.1). Every clause of [L1] is literally there.
  {
    id: "cex-cauchy-rationals-no-rational-limit",
    model: "deepseek-v4-pro",
    context_sha256: "1bdc1c0c6d6fbaafe6c6f9185740b744d6b34ded768b8fe1caff38ea84b6502b",
    outcome: "false_positive",
  },
  // 2. The binomial identity is field distributivity, not a citation of
  //    lem-power-monotone (which supplies [L3]'s OTHER clause, a < b iff
  //    a^2 < b^2, exactly). Ambient ordered-field arithmetic is [L1], co-cited
  //    at step 2.2. Fact-fidelity looseness; the identity is true.
  {
    id: "cex-strictly-decreasing-gaps-no-limit",
    model: "deepseek-v4-pro",
    context_sha256: "2d42909c16d01ee615a8c6a9d76ee02fd23edf05499e37ae286258f884371382",
    outcome: "confirmed_nonfatal",
  },
  // 3. TWICE-TOUCHED. lem-of-abs-value states the strict form only, so the
  //    judge is right about the letter. But it also states -|x| <= x <= |x|
  //    verbatim, and step 1.2 uses only the forward direction, which is the
  //    two-link chain -M <= -|x_k| <= x_k <= |x_k| <= M. Nonfatal, and my
  //    round-2 stopping condition is a third distinct FATAL, which this is not.
  {
    id: "cor-monotone-converges-iff-bounded",
    model: "deepseek-v4-pro",
    context_sha256: "d79f1c274a4a1949654f1531f64342a0967c7fdf9fe8491a0972e497811cc509",
    outcome: "confirmed_nonfatal",
  },
  // 4. |t| = t for t >= 0 is the first branch of def-abs-value and appears
  //    verbatim as [L1] INSIDE the cited lem-of-abs-value's own fact list. The
  //    fidelity gap is that [L6] cites the lemma rather than the definition.
  {
    id: "ex-nested-intervals-single-point",
    model: "deepseek-v4-pro",
    context_sha256: "2de5ec88e71376bd802b253aa13e7846c0adaa461f9f046170367f35fd59d6b9",
    outcome: "confirmed_nonfatal",
  },
  // 5. First-time rejection. Three of [L5]'s four clauses are verbatim in the
  //    two co-cited items. The fourth, |t| = 1 forces t = +-1, is one case split
  //    on def-abs-value's |t| in {t, -t} — and step 4.1 already co-cites [L9]
  //    trichotomy, which is exactly the split. True and licensed.
  {
    id: "ex-two-subsequential-limits",
    model: "deepseek-v4-pro",
    context_sha256: "31582302297d7ece02009ff5eca44388aeea07e89649cd8f6e8048ecea2d4b33",
    outcome: "confirmed_nonfatal",
  },
  // 6. Remark prose, read with a numbered step's suspicion. The Remark does NOT
  //    assert a converse the library lacks: Cauchy => convergent IS in the
  //    library as thm-cauchy-criterion-via-lub and is named in the same
  //    parenthetical, where it does all the work. lem-convergent-implies-cauchy
  //    sits in the subject slot doing none. Mis-slotted name, true claim.
  {
    id: "lem-cauchy-sequence-bounded",
    model: "claude-sonnet-5",
    context_sha256: "ad5e1adb0f26d5ed855592cc6d7497ae7badf23482844bce8cb89e2a066a535b",
    outcome: "confirmed_nonfatal",
  },
];

let out = "";
for (const row of rows) {
  const item_sha256 = itemContentHash(readFileSync(`items/${row.id}.md`, "utf8"));
  out += JSON.stringify({ ...row, item_sha256, at }) + "\n";
  console.log(`${row.outcome.padEnd(18)} ${row.id}  item=${item_sha256.slice(0, 12)}`);
}
appendFileSync(LEDGER, out);
console.log(`\nappended ${rows.length} row(s) to ${LEDGER} — 0 confirmed_fatal, 0 items edited`);
