# Step 7 preflight repair — group e

Run: `phase-2-remaining-27`. Batches: 14, 15, 3.

## Why this dispatch exists

The Step-7 preflight battery holds on the failures below. Each is a record or a structure left stale by the Step-7 repairs: the mathematics is settled and licensed (all 700 rejections adjudicated; `step7-guard` reports every edit licensed).

## Owned failures

### `cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold`

- proof-contract: ERROR citation-quote-mismatch [cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold]: L1 quote does not occur in def-countable-base-banach-manifold-and-smooth-map's Definition
- proof-contract: ERROR citation-quote-mismatch [cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold]: L1 quote does not occur in def-split-banach-submanifold's Definition

### `def-absolute-value-and-singular-values-of-a-compact-operator`

- boundary-audit [iff-forward]: the item's own text states a biconditional (\bif and only if\b)
- boundary-audit [iff-reverse]: the item's own text states a biconditional (\bif and only if\b)

### `def-dependent-multiple-choice-finite-level-tree`

- boundary-audit [iff-forward]: the item's own text states a biconditional (\bexactly when\b)

### `lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal`

- proof-contract: ERROR citation-quote-mismatch [lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]: A1 quote does not occur in thm-hilbert-adjoint-properties's Statement

### `lem-orthogonal-complement-of-an-eigenspace-is-invariant`

- proof-contract: ERROR citation-quote-mismatch [lem-orthogonal-complement-of-an-eigenspace-is-invariant]: A1 quote does not occur in thm-hilbert-adjoint-properties's Statement

### `lem-uniform-null-g-delta-capture-functions`

- finite-smoke: ERROR smoke-assertion-mismatch [lem-uniform-null-g-delta-capture-functions]: binary-shift-disjoint-cylinder-independence's assertion excerpt is not present in lem-uniform-null-g-delta-capture-functions

### `prop-the-index-of-a-fredholm-map-is-locally-constant`

- proof-contract: ERROR citation-quote-mismatch [prop-the-index-of-a-fredholm-map-is-locally-constant]: L5 quote does not occur in def-countable-base-banach-manifold-and-smooth-map's Definition

### `thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold`

- proof-contract: ERROR citation-quote-mismatch [thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold]: L3 quote does not occur in def-split-banach-submanifold's Definition

### `thm-strongly-compact-relative-consistency-normal-moore`

- risk-report: ERROR risk-review-missing [thm-strongly-compact-relative-consistency-normal-moore]: thm-strongly-compact-relative-consistency-normal-moore is high risk and lacks a complete Alpha risk_review

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

Write `research/phase-2-remaining-27-alpha-e-step7-preflight-repair.md`: per item the failure, the cause, the repair (or why the detector is a false positive), the tools/hashes used, and any blocker.
