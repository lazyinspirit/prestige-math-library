# Scheme Theory rendering audit — lane 10

Reviewed all 109 assigned frozen item bodies and all 242 receipt-listed screenshot tiles individually at original resolution. Exact item, snapshot, local HTML, and tile coverage with SHA256 hashes, image dimensions, and per-tile view attestations are recorded in `lane-10.json`.

All 109 snapshot hashes and all 109 matching local HTML hashes match the frozen assignment. All 242 receipt-listed PNG hashes match their screenshot receipts. Every tile was opened individually at original resolution; no coverage gaps remain. The complete title and item body were checked against each frozen snapshot and matching local render. No item, library, or app files were changed.

No confirmed title, mathematical, LaTeX/TikZ, renderer, or clipping defect was found. No high-likelihood missing diagram is recommended. The two source-authored commutative squares in `def-formally-unramified-morphism` (lines 37–44) and `def-simplicial-horn-and-kan-fibration` (lines 39–45) already display their objects and maps directly; rewriting these arrays as TikZ would be optional styling, not a missing mathematical aid. Detailed source-line checks are in `lane-10.json`.

## Findings

None.

## Diagram checks

- `def-formally-unramified-morphism`, snapshot lines 37–44: the square shows $T_0\to X$, $T\to S$, vertical maps $i$ and $f$, and the surrounding statement specifies a square-zero thickening and compatibility over $S$.
- `def-simplicial-horn-and-kan-fibration`, snapshot lines 39–45: the lifting square shows $\Lambda^k[n]\to X$ over $\Delta[n]\to Y$, with the allowed $n,k$ and diagonal lift specified in the text.

Both existing displays are mathematically sufficient; no diagram repair is indicated.
