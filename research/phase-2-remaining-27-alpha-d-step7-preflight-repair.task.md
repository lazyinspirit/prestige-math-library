# Step 7 preflight repair — group d

Run: `phase-2-remaining-27`. Batches: 7, 8, 6.

## Why this dispatch exists

The Step-7 preflight battery holds on the failures below. Each is a record or a structure left stale by the Step-7 repairs: the mathematics is settled and licensed (all 700 rejections adjudicated; `step7-guard` reports every edit licensed).

## Owned failures

### `cex-finite-quadratic-variation-does-not-imply-finite-total-variation`

- proof-contract: ERROR citation-quote-mismatch [cex-finite-quadratic-variation-does-not-imply-finite-total-variation]: F1 quote does not occur in cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation's Statement

### `cex-symmetric-need-not-be-self-adjoint`

- fwdcheck: [forward-undeclared] items/cex-symmetric-need-not-be-self-adjoint.md: wikilink [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] points forward to schwartz-space-and-the-plancherel-theorem (#288.091); declare it in forward_refs so it is marked as a forward referenc

### `cor-exponential-brownian-martingale`

- proof-contract: ERROR citation-duplicate [cor-exponential-brownian-martingale]: F3 -> lem-normal-density-has-total-mass-one is repeated

### `cor-vector-levy-characterization`

- proof-contract: ERROR citation-duplicate [cor-vector-levy-characterization]: F3 -> thm-levy-characterization-of-brownian-motion is repeated

### `ex-expected-exit-time-from-an-interval-via-ito-formula`

- proof-contract: ERROR citation-duplicate [ex-expected-exit-time-from-an-interval-via-ito-formula]: F2 -> lem-schwartz-cutoffs-from-the-standard-smooth-step is repeated
- proof-contract: ERROR citation-duplicate [ex-expected-exit-time-from-an-interval-via-ito-formula]: F3 -> thm-two-sided-exit-probability-for-brownian-motion is repeated

### `ex-logarithm-of-geometric-brownian-motion`

- boundary-audit [degenerate]: the row credits step 4.1, which does not occur in the proof
- boundary-audit [empty]: the row credits step 4.1, which does not occur in the proof
- boundary-audit [endpoints]: the row credits step 4.1, which does not occur in the proof
- boundary-audit [nonempty-choice]: the row credits step 4.1, which does not occur in the proof
- boundary-audit [one]: the row credits step 4.1, which does not occur in the proof
- boundary-audit [zero]: the row credits step 4.1, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [ex-logarithm-of-geometric-brownian-motion]: degenerate names missing step 4.1
- proof-contract: ERROR boundary-evidence-step-missing [ex-logarithm-of-geometric-brownian-motion]: empty names missing step 4.1
- proof-contract: ERROR boundary-evidence-step-missing [ex-logarithm-of-geometric-brownian-motion]: endpoints names missing step 4.1
- proof-contract: ERROR boundary-evidence-step-missing [ex-logarithm-of-geometric-brownian-motion]: nonempty-choice names missing step 4.1
- proof-contract: ERROR boundary-evidence-step-missing [ex-logarithm-of-geometric-brownian-motion]: one names missing step 4.1
- proof-contract: ERROR boundary-evidence-step-missing [ex-logarithm-of-geometric-brownian-motion]: zero names missing step 4.1

### `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t`

- proof-contract: ERROR citation-duplicate [lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t]: F1 -> def-continuous-time-adapted-process-and-martingale is repeated

### `lem-second-resolvent-identity-for-closed-operator-perturbations`

- risk-report: ERROR risk-review-missing [lem-second-resolvent-identity-for-closed-operator-perturbations]: lem-second-resolvent-identity-for-closed-operator-perturbations is high risk and lacks a complete Alpha risk_review

### `thm-brownian-markov-property`

- boundary-audit [degenerate]: the row credits step 6.1, which does not occur in the proof
- boundary-audit [nonempty-choice]: the row credits step 6.1, which does not occur in the proof
- boundary-audit [one]: the row credits step 6.1, which does not occur in the proof
- boundary-audit [zero]: the row credits step 6.1, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [thm-brownian-markov-property]: degenerate names missing step 6.1
- proof-contract: ERROR boundary-evidence-step-missing [thm-brownian-markov-property]: nonempty-choice names missing step 6.1
- proof-contract: ERROR boundary-evidence-step-missing [thm-brownian-markov-property]: one names missing step 6.1
- proof-contract: ERROR boundary-evidence-step-missing [thm-brownian-markov-property]: zero names missing step 6.1

### `thm-brownian-paths-are-nowhere-differentiable`

- proof-contract: ERROR citation-duplicate [thm-brownian-paths-are-nowhere-differentiable]: F2 -> def-derivative is repeated
- proof-contract: ERROR citation-duplicate [thm-brownian-paths-are-nowhere-differentiable]: F2 -> def-one-sided-derivatives-of-real-functions is repeated

### `thm-density-of-elementary-predictable-processes-in-predictable-l2`

- proof-contract: ERROR citation-quote-mismatch [thm-density-of-elementary-predictable-processes-in-predictable-l2]: F1 quote does not occur in def-elementary-predictable-brownian-integrand's Definition
- proof-contract: ERROR citation-quote-mismatch [thm-density-of-elementary-predictable-processes-in-predictable-l2]: F1 quote does not occur in def-ito-integral-of-an-elementary-predictable-process's Definition
- proof-contract: ERROR citation-quote-mismatch [thm-density-of-elementary-predictable-processes-in-predictable-l2]: F3 quote does not occur in def-progressively-measurable-and-predictable-process's Definition

### `thm-self-adjointness-range-criterion`

- proof-contract: ERROR step-entry-inputs [thm-self-adjointness-range-criterion]: derivations step-1-3 needs stated inputs

## Your job

- Work only these items; write only inside your own group.
- Re-read each item, its proof contract, its cited clauses and its source locators before deciding anything.
- Fix each failure at its cause:
  - `proof-contract` / `finite-smoke`: refresh the contract entry (`node tools/regen-contract-entries.mjs research/<batch>.proof-contracts.json <id>`), then fix any genuine inconsistency between the item's Facts, its proof steps and that entry — the item text if the text is wrong.
  - `risk-report`: after reading the item, record a specific complete `risk_review` in its batch contract about the current text.
  - `boundary-audit`: repair the contradicted row against the current proof, or record `reviewed: {upheld: true, by, reason}` with a concrete item-specific reason (>= 40 characters) when the detector is a false positive.
  - `depcheck` `b-leaf-content`: the supplier lives only on a B/examples page, which must be a leaf. Home the supplier on its companion A page too (multi-home is legal: add it to that page's item list in the owning batch manifest and the plan), or re-point the consumer to a legal supplier. Never drop a load-bearing dependency.
  - `depcheck` / `fwdcheck` cycles: break the cycle at the edge that is not load-bearing, after checking which citation carries the argument; record the reason in the item's Remarks.
  - `fwdcheck` `forward-undeclared`: cite an earlier supplier, or declare the forward reference in `forward_refs`. A cycle must be broken, not declared.
- After any item edit: `node tools/tsx-run.mjs tools/precheck.mts <file>`, refresh its contract entry, and record a content repair in the defect ledger with exact pre/post `itemHashGuard` digests.
- Never approve or re-issue an item you could not verify; report the blocker.
- Do not edit shared files beyond the owning batch manifest/contract, the sanctioned plan tool, the defect ledger, and your report.

## Report

Write `research/phase-2-remaining-27-alpha-d-step7-preflight-repair.md`: per item the failure, the cause, the repair (or why the detector is a false positive), the tools/hashes used, and any blocker.
