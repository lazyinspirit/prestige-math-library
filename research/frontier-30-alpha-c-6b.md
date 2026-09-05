# Frontier-30 Alpha c Step 6b

Run: `frontier-30`  
Group: `c`  
Date: Friday, September 4, 2026

## Scope

Owned batches: `3`, `5`, and `6`.

Routed obligations on current disk:

- Batch `3`: `10` touched items and `10` refuter findings.
- Batch `5`: `3` touched items and `2` refuter findings.
- Batch `6`: `13` touched items and `1` refuter finding.

There were no routed page obligations and no routed reader-findings obligations
for this group.

## Adjudication

Decision mix on current disk:

- `6` touched obligations close as `accepted_repair`.
- `20` touched obligations close as `amended_repair`.
- `9` refuter findings are `confirmed_fatal`.
- `4` refuter findings are `confirmed_nonfatal`.

Confirmed and repaired refuter findings:

- Batch `3`: repaired the jump-plus-continuous split so it now accounts for
  both one-sided jumps, narrowed the mini-Vitali item to the null-remainder
  form actually proved, repaired both general monotone differentiability routes
  to use the repaired nondecreasing split theorem, repaired the continuous
  rising-sun theorem by proving measurability of the Dini-derivative bad sets,
  narrowed the right-continuous AC/jump/singular decomposition statement to the
  nondecreasing normalized form the proof actually gives, repaired the strict
  singular-function example by broadening the term-by-term differentiation
  theorem to nondecreasing summands, repaired the strict Newton-Leibniz false
  statement to use a genuinely strictly increasing witness, repaired the pure
  jump example's strict-increase argument, and repaired the Vitali proof's
  finite-termination and least-later-intersection steps.
- Batch `5`: repaired the frequency-law statement so the ratio is asserted only
  where `a_n>0`, and repaired the threshold subsequence argument by shifting the
  levels to `a_1 + m^2`.
- Batch `6`: repaired the `L^p` Fejer theorem's periodization step by moving
  the cutoff support strictly inside `(0,1)` and replacing the false
  exactly-one-translate claim with the correct at-most-one-translate argument.

## Risk Review

Completed `risk_review: {status: complete, reviewer: alpha-6b-c, notes: ...}`
on every current high/critical item owned by this group:

- Batch `3`: `12` items.
- Batch `5`: `5` items.
- Batch `6`: `7` items.

The final `--require-reviewed` rerun passed on all three owned contracts.

## Focused Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the `16` directly edited item
  files: pass.
- `node tools/tsx-run.mjs tools/precheck.mts` on the `15` edited proof-bearing
  items: pass, `15 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs` refreshed the changed contract rows in
  batches `3`, `5`, and `6`, including the post-fix dependent row
  `cor-second-borel-cantelli-lemma-under-pairwise-independence`.
- `node tools/proof-contract.mjs research/frontier-30-batch-{3,5,6}.proof-contracts.json --strict`:
  all three clean, with `27/27`, `22/22`, and `14/14` item(s) checked.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-5.proof-contracts.json --items-dir items --fail-on-missing-quote`:
  clean.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-6.proof-contracts.json --items-dir items --fail-on-missing-quote`:
  clean.
- `node tools/boundary-audit.mjs research/frontier-30-batch-3.proof-contracts.json --items-dir items --fail-on-contradicted`:
  advisory clusters only, no contradicted dispositions.
- `node tools/boundary-audit.mjs research/frontier-30-batch-5.proof-contracts.json --items-dir items --fail-on-contradicted`:
  candidate empty-family contradictions only. I reread all eight candidates and
  confirmed they are not real defects because each item already excludes the
  empty branch by its `n>=1` or infinite-sequence hypothesis.
- `node tools/boundary-audit.mjs research/frontier-30-batch-6.proof-contracts.json --items-dir items --fail-on-contradicted`:
  candidate zero/empty contradictions only. I reread all seven candidates and
  confirmed they are not real defects because the denominators are excluded by
  the live hypotheses (`t>0`, `r>=1/2`, `2m+1>=1`, `1+r>0`) or because the item
  is not family-parameterized.
- `node tools/risk-report.mjs research/frontier-30-batch-{3,5,6}.proof-contracts.json --require-reviewed`:
  all three clean.
- `node tools/defect-ledger.mjs validate --run frontier-30`: clean.
- `node tools/step6-scope.mjs check --run frontier-30 --phase adjudicate --batch {3,5,6}`:
  all three clean.
- `git diff --check -- ...`: clean.

Artifacts written:

- `research/frontier-30-alpha-c-6b.md`
- `research/frontier-30-alpha-c-6b-decisions.json`

## Blockers

None.

## Gate repair - `step6-routing-adjudicate`

- Reproduced the live stale-touched queue on the current tree and confirmed four touched-decision drifts: `ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one`, `ex-jump-and-continuous-parts-of-x-plus-rational-jumps`, `cex-fejer-means-need-not-converge-uniformly-for-discontinuous-data`, and `thm-gibbs-overshoot-at-a-piecewise-c-one-jump`.
- Re-read the current items against `research/frontier-30-reader-3.md` and `research/frontier-30-reader-6.md` and found no new mathematical defect. I retagged the four touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-30-S6-c-gate-3-1`, `frontier-30-S6-c-gate-3-2`, `frontier-30-S6-c-gate-6-1`, and `frontier-30-S6-c-gate-6-2` via `research/frontier-30-alpha-c-6b-gate-ledger-rows.json`.
- Focused reruns: batch `3` -> `33 item(s) routed, 20 adjudication obligation(s), 0 error(s)`; batch `6` -> `16 item(s) routed, 14 adjudication obligation(s), 0 error(s)`.
