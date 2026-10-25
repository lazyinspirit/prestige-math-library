# Lane 06 rendering audit

## Scope and result

Reviewed all 32 assigned published items and all 62 receipt-listed PNG tiles. Each title and complete ItemBody was checked in its frozen snapshot and byte-compared with the current source. Each assigned local HTML file and each screenshot hash matched its assignment or receipt. All 62 tiles were opened individually with `tools.view_image` at original resolution. No live website or network was used, and no item, application, or publication status was edited.

The receipts report zero KaTeX errors, zero existing TikZ diagrams, and zero diagram failures. No visible clipping or missing rendered math was confirmed. Exact item hashes, receipt observations, capture positions, and per-tile viewing attestations are recorded in [lane-06.json](lane-06.json).

## Coverage

- `cex-first-row-padding-before-the-partition-threshold-is-undefined` — 2 tiles
- `cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test` — 2 tiles
- `cor-no-removable-cycle-length-strip-forces-a-character-zero` — 2 tiles
- `def-character-polynomial-in-cycle-counts` — 2 tiles
- `def-finite-generation-and-generation-degree-of-an-fi-module` — 1 tile
- `def-hall-inner-product-on-symmetric-functions` — 1 tile
- `def-kronecker-coefficient-and-internal-tensor-product` — 1 tile
- `def-plancherel-measure-on-partitions` — 1 tile
- `def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram` — 1 tile
- `def-weight-of-a-characteristic-zero-fi-module` — 1 tile
- `ex-empty-and-singleton-rsk-boundaries` — 2 tiles
- `ex-murnaghan-nakayama-for-shape-five-four-four` — 2 tiles
- `ex-rsk-for-involutions` — 2 tiles
- `ex-specht-modules-of-s3` — 3 tiles
- `lem-a-partition-is-determined-by-its-multiset-of-node-contents` — 2 tiles
- `lem-character-value-on-a-full-cycle-is-supported-on-hooks` — 2 tiles
- `lem-field-antisymmetrizer-image-and-dominance` — 2 tiles
- `lem-hermite-leading-terms-for-normalized-shifted-characters` — 2 tiles
- `lem-jucys-murphy-local-relations` — 2 tiles
- `lem-polytabloid-covariance-and-column-sign` — 2 tiles
- `lem-schur-weyl-length-cutoff-by-column-antisymmetrization` — 3 tiles
- `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero` — 1 tile
- `lem-virtual-weyl-combinations-detect-q-schur-block-separation` — 2 tiles
- `prop-plancherel-expectations-of-shifted-character-observables` — 2 tiles
- `prop-sign-twist-corresponds-to-the-omega-involution` — 2 tiles
- `thm-brion-formula-for-reduced-kronecker-coefficients` — 2 tiles
- `thm-elementary-and-complete-families-freely-generate-the-stable-ring` — 3 tiles
- `thm-hook-length-formula` — 2 tiles
- `thm-monomial-symmetric-functions-form-the-integral-stable-basis` — 1 tile
- `thm-plancherel-young-diagrams-converge-to-the-limit-shape` — 2 tiles
- `thm-schur-weyl-decomposition-with-length-cutoff` — 5 tiles
- `thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center` — 2 tiles

## Diagram candidate

**`ex-murnaghan-nakayama-for-shape-five-four-four`, source lines 41–43 and 63–65.** Consider a Young diagram of shape $(5,4,4)$ highlighting the two legal removable 5-rim hooks and their complements $(3,3,2)$ and $(5,3)$, with heights 2 and 1 and signs $+$ and $-$. Also highlight the unique 7-rim hook, leaving $(3,3)$ with height 2 and sign $+$. Those are the core geometric relations in this worked example; the proof should remain independent of the drawing.

Other assigned items already express their relevant structure directly in formulas, tableau arrays, or algebraic maps; I found no other missing diagram that rose above an optional illustration.

## Limits

This is a local rendering and mathematical-presentation review of the assigned frozen artifacts, not a live-site inspection or a full independent proof audit.
