# Numerical Linear Algebra and Approximation visual audit — lane 06

## Scope and coverage

Reviewed all 100 assigned frozen titles and complete ItemBodies. Opened all 131 receipt-listed screenshot tiles individually through the image viewer at original resolution. Frozen snapshots match their assigned source hashes and bytes; rendered HTML and every image match their assignment/receipt hashes. The JSON ledger records item-level coverage, hashes, tile paths, diagnostics and findings: [lane-06.json](lane-06.json).

## Confirmed rendering findings

- **Confirmed:** `cor-matern-mesh-ratio-conditioning-bound`, snapshot line 4 — the title displays `h^{-2s}` as literal raw notation (caret and braces) rather than a typeset exponent. The body formula is typeset. See [screenshot](screenshots/cor-matern-mesh-ratio-conditioning-bound--01.png).

## Diagram review

Receipts report zero TikZ diagrams across the lane, so there were no existing diagram labels, maps, domains, signs, orientations, indices or combinatorics to validate. Two source-supported optional candidates are recorded in the JSON: a recursive Galerkin V/W-cycle flow for `alg-finite-galerkin-v-cycle` (snapshot lines 37–48), and a triangle-history DAG split/flip update for `alg-randomized-history-dag-point-location` (snapshot lines 34–36). These are pedagogical candidates; no mathematical diagram error is confirmed.

## Other observations and limits

`thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound` is covered through the preview-only malformed-frontmatter fallback. Its exact frozen title/body were reviewed; this is recovered body-preview coverage, not successful canonical parsing or native loader coverage. No suspected clipping remained after checking original tiles with their neighboring overlap context. No HTTP/live website check, build, test, item edit or publication action was performed.
