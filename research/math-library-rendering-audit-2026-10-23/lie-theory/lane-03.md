# Lie Theory rendering audit — lane 03

Reviewed all 108 assigned items and all 166 listed screenshot tiles individually at original resolution. Every source hash matches `assignment-03.json`; each frozen snapshot is byte-identical to its current source; all rendered HTML and PNG tile hashes match their manifests. Per-item and per-tile SHA-256 values and exact coverage are recorded in `lane-03.json`.

Confirmed rendering findings: 3. Each is raw TeX in the uppercase proof-technique banner. No independent formula rendering defect or clipping in standalone images was confirmed. Reference titles render as block links, and punctuation wrapping is not treated as a defect.

## Confirmed findings

### `lem-block-projection-preserves-projectives`

- Section: Proof technique; source line 72.
- Kind: Raw TeX in technique banner.
- The uppercase technique banner displays the dollar signs and TeX command literally instead of typesetting Hom. This is raw math inside the intended banner.
- Mathematical check: The banner prose names the Hom characterization of projectivity; only its typography is defective. The proof body uses rendered Hom notation.
- Screenshot: `screenshots/lem-block-projection-preserves-projectives--01.png`.
- Repair: Replace the inline TeX in the technique banner with plain “Hom” or a banner-safe rendered expression.

### `lem-engel-common-zero-vector`

- Section: Proof technique; source line 46.
- Kind: Raw TeX in technique banner.
- The uppercase technique banner displays the dollar signs and TeX commands literally rather than typesetting the dimension expression.
- Mathematical check: The intended quantity is the dimension of the Lie algebra. The proof body typesets the same symbol correctly.
- Screenshot: `screenshots/lem-engel-common-zero-vector--01.png`.
- Repair: Replace the inline TeX in the technique banner with plain “dim g” or a banner-safe rendered expression.

### `thm-equivalent-characterizations-of-reductive-lie-algebras`

- Section: Proof technique; source line 53.
- Kind: Raw TeX in technique banner.
- The uppercase technique banner prints the dollar signs and `\Rightarrow` commands literally instead of showing the cycle of implications.
- Mathematical check: The intended proof route is the cycle of implications 1 → 2 → 3 → 1, matching the three equivalences in the statement.
- Screenshot: `screenshots/thm-equivalent-characterizations-of-reductive-lie-algebras--01.png`.
- Repair: Replace the inline TeX in the technique banner with plain “1 → 2 → 3 → 1” or a banner-safe rendered expression.

## Optional diagram candidate

- `ex-dynkin-diagram-duality-of-b-n-and-c-n`, source lines 25–27 and 41–45: draw the Bₙ and Cₙ chains with the terminal double edge and reversed arrow directions. Label the Bₙ arrow toward the short root αₙ and the Cₙ arrow toward βₙ₋₁; annotate the terminal Cartan entries (−1,−2) and (−2,−1) to show transposition. The source verifies these conventions directly. This is optional explanation, not a defect. Screenshot evidence is listed in `lane-03.json`.

## Diagram checks and limits

No valid rendered TikZ diagrams were present among the assigned items. The Dynkin diagram comparison above is a source-supported candidate for a new explanatory drawing. No HTTP/live website, build, renderer, publication-status, or broad mathematical proof audit was performed.
