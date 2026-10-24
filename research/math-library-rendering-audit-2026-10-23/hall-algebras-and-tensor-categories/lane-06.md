# Hall Algebras and Tensor Categories visual audit — lane 06

## Scope and coverage

Reviewed all 25 assigned frozen titles and full item bodies. For every item, the current source SHA256 matched the assignment; the frozen snapshot was byte-identical to source; and captured HTML matched its assignment hash. Individually opened all 57 assigned screenshot tiles with the image viewer at original resolution. Every tile SHA256 matched its capture receipt. The JSON ledger records exact source, snapshot, HTML, receipt, and tile hashes and the complete item-level coverage: [lane-06.json](lane-06.json).

## Confirmed rendering findings

- **Confirmed:** `cex-untwisted-motivic-integration-fails-for-one-arrow-quiver`, source lines 42–44 — The fenced `tikzcd` quiver appears as literal `1 \arrow[r] & 2` source in tile --01. The surrounding prose fixes the intended orientation as 1→2. See [tile --01](screenshots/cex-untwisted-motivic-integration-fails-for-one-arrow-quiver--01.png).
- **Confirmed:** `def-monoidal-weak-two-category`, source lines 48–54 — The associator pentagon appears in a red “diagram failed to render” box in tile --01. The source is intended to show the standard five associator maps. Its edge routing and endpoints should be checked again after repairing the diagram syntax; the failed image does not establish a mathematical map error. See [tile --01](screenshots/def-monoidal-weak-two-category--01.png).
- **Confirmed:** `def-relative-open-closed-surface-normal-form`, source lines 66–80 — The normal-word `tikzcd` appears as raw matrix source in tile --02. The written chain is typed as input intervals → open-cycle tensor factors → `C^{⊗r}` → closed multiplication → window operators → genus handle operator → `C^{⊗n}`, but there is no rendered diagram to check visually. See [tile --02](screenshots/def-relative-open-closed-surface-normal-form--02.png).
- **Confirmed:** `lem-balancing-and-hopf-link-character-identity`, source lines 69–76 — The trace-square `tikzcd` appears as raw source at the bottom of tile --02. Its stated maps have compatible domains and codomains: `End(X⊗Z) → End(X) → End(1)` and `End(X⊗Z) → End(1)`. See [tile --02](screenshots/lem-balancing-and-hopf-link-character-identity--02.png).

The reported KaTeX failure on the unassigned neighboring item `def-frobenius-object-and-knowledgeable-sewing-data` was also opened tile-by-tile as requested. Both original tiles visibly show substantial raw TeX interleaved with red KaTeX parse-error prose, beginning in the colored operations/equations in --01 and continuing through map signatures, trace/Cardy text, and homomorphism prose in --02. Its explanatory `tikzcd` is also raw source in --02. This is a confirmed visual failure, not metadata-only evidence; the item is listed separately from lane coverage in the JSON ledger.

## Existing diagram review and candidate

The only successfully rendered assigned TikZ diagram is in `prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb`, source lines 36–52. The original tile shows the outer cup and cap, one closed loop labeled `δ_a`, and the remaining cup-cap diagram, consistent with the stated top-to-bottom composition and `U_i² = δ_a U_i`. I found no sign or index mismatch. The weak monoidal pentagon, normal-word chain, and trace square could not be visually checked as diagrams because they respectively failed or displayed source text; their source-level domains, codomains, and intended maps are recorded in the JSON ledger.

One optional diagram candidate is supported by `thm-finite-quiver-hall-wall-crossing`, source lines 30–40. A two-panel abstract schematic could show the decreasing-phase semistable factors for `Z_-` and `Z_+`, their equal completed Hall products, and Euler/skew integration to a common quantum-torus unit whose conjugation gives the same automorphism. This is only a pedagogical candidate: the theorem allows arbitrary charges, so the schematic should use abstract rays and should not invent a numerical wall path. The source-rendered proof tiles [--01](screenshots/thm-finite-quiver-hall-wall-crossing--01.png) and [--02](screenshots/thm-finite-quiver-hall-wall-crossing--02.png) contain no diagram.

## Other observations and limits

CSS uppercase `TECHNIQUE` banners are expected. Wikilinks intentionally render as separate block lines; those breaks and adjacent punctuation were not counted as defects. The screenshot tiles contain no confirmed item-content clipping when viewed individually at original resolution. Long-page tile boundaries were treated as capture boundaries where the next tile continued the same content. Outside the diagram-source cases above, no separate raw formula/caret/underscore rendering defect was confirmed.

No HTTP/live website check, tests, build, native app, item edit, publication-status change, or publication action was performed.
