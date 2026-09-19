# Step 7 preflight repair — group b

Run: `phase-2-remaining-27`. Batches: 9, 10, 4.

## Why this dispatch exists

The Step-7 preflight battery holds on the failures below. Each is a record or a structure left stale by the Step-7 repairs: the mathematics is settled and licensed (all 700 rejections adjudicated; `step7-guard` reports every edit licensed).

## Owned failures

### `def-gelfand-transform`

- risk-report: ERROR risk-review-missing [def-gelfand-transform]: def-gelfand-transform is high risk and lacks a complete Alpha risk_review

### `ex-chern-classes-of-a-sum-of-universal-complex-lines`

- boundary-audit [degenerate]: the row credits step 5.1, which does not occur in the proof
- boundary-audit [empty]: the row credits step 5.1, which does not occur in the proof
- boundary-audit [one]: the row credits step 5.1, which does not occur in the proof
- boundary-audit [zero]: the row credits step 5.1, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [ex-chern-classes-of-a-sum-of-universal-complex-lines]: degenerate names missing step 5.1
- proof-contract: ERROR boundary-evidence-step-missing [ex-chern-classes-of-a-sum-of-universal-complex-lines]: empty names missing step 5.1
- proof-contract: ERROR boundary-evidence-step-missing [ex-chern-classes-of-a-sum-of-universal-complex-lines]: one names missing step 5.1
- proof-contract: ERROR boundary-evidence-step-missing [ex-chern-classes-of-a-sum-of-universal-complex-lines]: zero names missing step 5.1

### `ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree`

- boundary-audit [one]: the row credits step 1.2, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree]: one names missing step 1.2

### `lem-c-star-spectral-radius-equals-norm-for-normal-elements`

- proof-contract: ERROR citation-quote-mismatch [lem-c-star-spectral-radius-equals-norm-for-normal-elements]: L2 quote does not occur in def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra's Definition

### `lem-closed-ideal-quotient-is-a-banach-algebra`

- proof-contract: ERROR citation-quote-mismatch [lem-closed-ideal-quotient-is-a-banach-algebra]: L4 quote does not occur in lem-neumann-series's Statement

### `lem-contour-integral-commutes-with-bounded-linear-maps`

- risk-report: ERROR risk-review-missing [lem-contour-integral-commutes-with-bounded-linear-maps]: lem-contour-integral-commutes-with-bounded-linear-maps is high risk and lacks a complete Alpha risk_review

### `lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three`

- boundary-audit [nonempty-choice]: the row credits step 3.1, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three]: nonempty-choice names missing step 3.1

### `lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations`

- fwdcheck: [forward-undeclared] items/lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations.md: wikilink [[cor-singular-cohomology-is-homotopy-invariant]] points forward to singular-cochains-mayer-vietoris-and-smooth-singular-comparison (#473); declare it in f

### `lem-pi-three-so-three-generated-by-the-quaternion-double-cover`

- boundary-audit [iff-reverse]: the row credits step 1.8, which does not occur in the proof
- boundary-audit [zero]: the row credits step 1.8, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [lem-pi-three-so-three-generated-by-the-quaternion-double-cover]: iff-reverse names missing step 1.8
- proof-contract: ERROR boundary-evidence-step-missing [lem-pi-three-so-three-generated-by-the-quaternion-double-cover]: zero names missing step 1.8

### `lem-relations-among-the-five-spectral-parts`

- proof-contract: ERROR citation-quote-mismatch [lem-relations-among-the-five-spectral-parts]: L2 quote does not occur in def-approximate-point-and-compression-spectrum's Definition

### `thm-commutative-gelfand-duality`

- boundary-audit [empty]: the row credits step 1.4, which does not occur in the proof
- proof-contract: ERROR boundary-evidence-step-missing [thm-commutative-gelfand-duality]: empty names missing step 1.4

### `thm-gelfand-transform-is-a-contractive-unital-homomorphism`

- proof-contract: ERROR citation-quote-mismatch [thm-gelfand-transform-is-a-contractive-unital-homomorphism]: L2 quote does not occur in def-gelfand-transform's Definition

### `thm-kernel-of-the-gelfand-transform-is-the-radical`

- proof-contract: ERROR citation-quote-mismatch [thm-kernel-of-the-gelfand-transform-is-the-radical]: L1 quote does not occur in def-gelfand-transform's Definition

### `thm-maximal-ideal-space-is-compact-hausdorff`

- proof-contract: ERROR citation-quote-mismatch [thm-maximal-ideal-space-is-compact-hausdorff]: L2 quote does not occur in def-character-and-maximal-ideal-space's Definition

### `thm-naturality-and-edge-maps-of-the-ahss`

- proof-contract: ERROR citation-uses [thm-naturality-and-edge-maps-of-the-ahss]: F1 -> thm-cellular-approximation-for-maps-of-cw-pairs needs every proof step that cites F1

### `thm-stone-duality`

- proof-contract: ERROR citation-quote-mismatch [thm-stone-duality]: L2 quote does not occur in def-stone-space-and-clopen-algebra's Definition

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

Write `research/phase-2-remaining-27-alpha-b-step7-preflight-repair.md`: per item the failure, the cause, the repair (or why the detector is a false positive), the tools/hashes used, and any blocker.
