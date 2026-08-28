# frontier-22 — Alpha group `c` Step 6b adjudication

Date: Friday, August 28, 2026.
Dispatch: `6b-c`
Owned batches: `4`, `9`

## Coverage

- Reopened `research/frontier-22-step6-scope-{4,9}.json`, both reader reports and findings JSON, both refuter reports, both owned batch contracts, the live item carriers, and the cited dependency items needed to verify the routed claims.
- Re-ran `node tools/risk-report.mjs` on `research/frontier-22-batch-{4,9}.proof-contracts.json` without `--require-reviewed`, then completed item-specific `risk_review` records for every HIGH or CRITICAL item in those two contracts.
- Where the bull-free split-set route and the blockade power-law route were mathematically uncertain, rechecked them against the primary source papers cited in the item frontmatter: Chudnovsky-Safra, *The Erdős-Hajnal conjecture for bull-free graphs*, and Chudnovsky-Scott-Seymour-Spirkl, *Erdős-Hajnal for graphs with no 5-hole*.

## Routed decisions

### Batch 4

- `17` touched carriers decided: `9` `accepted_repair`, `8` `amended_repair`.
- `9` refuter findings decided: all `confirmed_fatal`.
- The live fatal repairs were:
  `def-graph-spectrum-spectral-radius-and-cospectrality`,
  `def-split-set-in-a-bull-free-graph`,
  `thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module`,
  `thm-composite-bull-free-graphs-have-a-nontrivial-module`,
  `cor-prime-bull-free-graphs-are-basic`,
  `thm-bull-free-graphs-are-two-narrow`,
  `cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter`,
  `ex-the-five-cycle-is-not-one-narrow`,
  `fs-two-narrow-implies-one-narrow`.

### Batch 9

- `11` touched carriers decided: `5` `accepted_repair`, `6` `amended_repair`.
- `3` refuter findings decided: all `confirmed_nonfatal`.
- The live nonfatal repairs were the missing monotonicity citations in
  `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations`
  (steps `1.3` and `1.4`) and
  `thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades` (step `1.1`).

## Additional gate defects from risk review

- `gate:frontier-22-S6-c-gate-thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs`
  — `confirmed_nonfatal`.
  Step `2.1` had used real-power inversion with no monotonicity source. I repaired it by citing the derivative formula for `x^beta`, positivity of real powers, and the derivative-sign monotonicity theorem.
- `gate:frontier-22-S6-c-gate-fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity`
  — `confirmed_nonfatal`.
  The contract still marked the false statement as having no `iff-forward` or `iff-reverse` branch. I repaired those stale boundary rows to record the actual `P_3` witness that refutes the forward implication.

## Risk-review completion

- Applied `28` complete `risk_review` records across `research/frontier-22-batch-4.proof-contracts.json` and `research/frontier-22-batch-9.proof-contracts.json`.
- The reviews were mathematical reads, not stamps. Two of them produced the extra gate repairs above; the remaining high-risk items were rechecked and kept on the current bytes.

## Verification

- `node tools/tsx-run.mjs tools/reflow.mts <12 changed items>`
  Result: two items reflowed (`thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations`, `thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades`); the others were already canonical.
- `node tools/tsx-run.mjs tools/precheck.mts <10 changed proof-bearing items>`
  Result: `10 checked, 0 failing`.
- `node tools/rendercheck.mjs <12 changed items>`
  Result: `OK — 12 file(s)`.
- `node tools/proof-contract.mjs research/frontier-22-batch-4.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 46/46 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-22-batch-9.proof-contracts.json --strict`
  Result: `0 error(s), 1 warning(s), 19/19 item(s) checked`.
  The remaining warning is the nonfatal `shotgun-bracket` notice on
  `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations`.
- `node tools/citation-fidelity.mjs research/frontier-22-batch-{4,9}.proof-contracts.json --items-dir items`
  Result: no quote-not-found rows and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-22-batch-{4,9}.proof-contracts.json --items-dir items`
  Result: after the `fs-positive-second-laplacian...` worksheet repair, the remaining candidates were heuristic only. I re-read the batch-4 `empty`/`zero` candidates and the batch-9 `empty` candidates against the written hypotheses and did not confirm another live defect.
- `node tools/risk-report.mjs research/frontier-22-batch-4.proof-contracts.json --require-reviewed --json`
  Result: `ok: true`.
- `node tools/risk-report.mjs research/frontier-22-batch-9.proof-contracts.json --require-reviewed`
  Result: `0 error(s)`.
- `node tools/defect-ledger.mjs append --file /tmp/frontier-22-alpha-c-ledger-rows.json`
  Result: appended `42` frontier-22 rows and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/defect-ledger.mjs validate --run frontier-22`
  Result: `42 defect row(s) checked, 0 error(s)`.
- `node tools/step6-scope.mjs stamp --run frontier-22 --group c`
  Result: stamped `42` current carrier hashes.
- `node tools/step6-scope.mjs check --run frontier-22 --phase adjudicate --batch 4`
  Result: `63 item(s) routed, 26 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-22 --phase adjudicate --batch 9`
  Result: `26 item(s) routed, 14 adjudication obligation(s), 0 error(s)`.

## Current run state

- Group `c`'s scoped adjudication remains mathematically clean on current disk.
- The current repository-scoped Step-6 gate repair reclassifies the two batch-4 touched carriers above as `amended_repair`, because their current contract fingerprints no longer match the raw post-reader snapshot.
