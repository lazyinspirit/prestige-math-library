# Quantum Computing rendering review — lane 02

## Scope and method

Reviewed all 57 assigned frozen snapshots, titles, and complete ItemBody renders alongside the matching local HTML. Opened all 87 receipt-listed PNG tiles individually at original resolution. Snapshot, HTML, and tile SHA-256 digests match the assignment and receipts. This review covers local frozen previews only. The receipts report 2,553 KaTeX expressions, zero TikZ items, and zero diagram failures; no source-authored TikZ or tikzcd markup was present.

## Confirmed rendering defects

1. `lem-qc-rz-epsilon-region-equivalence`, Facts & Assumptions line 50: the resolved operator-norm title displays `max_{||v||=1} ||Tv||` literally, including underscores and braces. See `screenshots/lem-qc-rz-epsilon-region-equivalence--01.png`.
2. `thm-qc-solovay-kitaev-error-and-resource-bound`, Facts & Assumptions line 63: the same resolved title displays the formula literally. See `screenshots/thm-qc-solovay-kitaev-error-and-resource-bound--01.png`.
3. `thm-qc-trace-norm-rank-one-formula`, Facts & Assumptions line 64: the linked singular-values title displays `T^*T` literally instead of typesetting the adjoint formula. See `screenshots/thm-qc-trace-norm-rank-one-formula--01.png`.

In both cases, typeset the title formula with supported inline delimiters or use a prose display title, then inspect the local render.

## Diagram candidates

These are editorial candidates, not rendering defects. Each candidate has exact source lines and a concrete diagram specification in `lane-02.json`.

1. `def-qc-circuit-to-graph-resource-encoding`, lines 26–55: show wire-by-round vertices, transport edges, matching/CZ edges, input/output boundary order, and the round measurement sweep; annotate one frame recurrence.
2. `lem-qc-measurement-pattern-for-cz`, lines 25–35: show the specified four-vertex pattern, measured input vertices, branch operator, and outcome correction implementing CZ.
3. `lem-qc-tqc-toric-cycle-quotient`, lines 28–51: show primal and dual fundamental torus cycles, winding cuts, and the two mod-2 coordinates after quotienting face boundaries.

## Coverage

`lane-02.json` records all 57 assigned items, status, title/body/render coverage, snapshot and HTML digests, and every tile path/hash with an original-resolution view attestation. Three items are marked `render-defect`; the other 54 are `clean`. No item, library, or application files were changed.
