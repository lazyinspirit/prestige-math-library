# PDE rendering audit — lane 03

Reviewed all 95 assigned items and all 179 receipt-listed screenshot tiles individually at original resolution. Every current item hash matches `assignment-03.json`; each frozen snapshot is byte-identical to its source, all frozen HTML and PNG tile hashes match their manifests. Per-item and per-tile SHA-256 values, original dimensions, complete coverage and diagram checks are recorded in `lane-03.json`.

Confirmed rendering findings: 5. Three involve unrendered title or technique text, one includes a broken accent escape, and one proof ending displays a raw LaTeX command. No mathematical error or TikZ rendering failure was found. Three optional, source-supported diagram candidates are listed below.

## Confirmed findings

### `lem-w-one-p-is-reflexive`

- Section: title; source line 4.
- Kind: Raw math in title.
- The title tile shows `W^{1,p}(Omega)` and `1<p<infinity` as literal TeX-like text. The item body renders those expressions as math.
- Screenshot: `screenshots/lem-w-one-p-is-reflexive--01.png` (SHA-256 in `lane-03.json`).
- Repair: typeset as `$W^{1,p}(\Omega)$ is reflexive for $1<p<\infty$`.

### `lem-w-one-p-is-reflexive`

- Section: Proof technique; source line 50.
- Kind: Raw inline math in technique banner.
- The original tile prints the dollar delimiters and TeX command literally (`$W^{1,p}(\OMEGA)$`); following proof formulas render correctly.
- Screenshot: `screenshots/lem-w-one-p-is-reflexive--02.png`.
- Repair: use plain prose (“the first-order Sobolev space” and “Lp spaces”) or render inline math before applying the technique-banner style.

### `lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution`

- Section: Proof technique; source line 49.
- Kind: Raw inline math in technique banner.
- `$p=1$`, `$u^*$`, and `\Omega` appear literally in the original-resolution banner.
- Screenshot: `screenshots/lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution--02.png`.
- Repair: replace the math fragments with prose (“at exponent one”, “the continuous representative”, “the domain”) or render inline math in the banner.

### `thm-higher-order-rellich-kondrachov`

- Section: Proof technique; source line 70.
- Kind: Raw math and accent escape in technique banner.
- The banner exposes `$L^p$` and `Arzel\`a` literally instead of rendering the math and accent.
- Screenshot: `screenshots/thm-higher-order-rellich-kondrachov--03.png`.
- Repair: use “Lp convergence” and the Unicode spelling “Arzelà–Ascoli”, or enable math rendering for the banner.

### `thm-zero-weak-gradient-implies-componentwise-constancy`

- Section: Proof; source line 152.
- Kind: Raw LaTeX command at proof end.
- The final tile shows literal `\square` after the final proof tags.
- Screenshot: `screenshots/thm-zero-weak-gradient-implies-componentwise-constancy--04.png`.
- Repair: replace it with the QED glyph `∎` or a supported math-delimited square.

## Optional diagram candidates

These are editorial aids, not mathematical defects.

- `thm-domain-of-dependence-and-local-uniqueness`, lines 38–44: draw a 1+1 dimensional space-time cross-section of the backward cone with apex `(x0,t0)`, edges `x=x0±c(t0-t)`, base interval `[x0-ct0,x0+ct0]`, source equality `f=g` on the cone, and equal displacement and velocity data on the base. The displayed conclusion is equality of the solutions on that cone. Evidence: the item’s original tile is listed in `lane-03.json`.
- `cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control`, lines 46–60 and 68: show the arcs `x=±y^alpha`, the cusp domain, and the test layer `0<y<delta` where `u_delta=1`, tapering to zero by `2delta`; mark the two boundary arc pieces whose trace measure is at least `2delta`. Evidence: both original tiles and hashes are listed in `lane-03.json`.
- `cex-c-infinity-up-to-boundary-density-is-domain-sensitive`, lines 38–45: draw the unit disc slit along the positive real radius and label the branch limits on the two slit lips by `0` and `2pi`; indicate that ambient-smooth restrictions have matching one-sided values. Evidence: both original tiles and hashes are listed in `lane-03.json`.

## Diagram and clipping checks

All 95 frozen bodies and rendered tiles were checked for TikZ/TikZ-CD source, rendered diagrams and high-likelihood missing diagrams. No intentional TikZ fence, nonzero receipt TikZ count, or diagram failure occurs in this lane. The three candidates above are based on explicit geometric domains and maps already in the assigned statements.

Several long inline expressions reach the edge of the fixed-width screenshots. The standalone HTML contains the full expressions, and the local CSS does not clip overflow on `main` or `body`; this was not classified as clipping. All 84 adjacent-tile overlaps are pixel-identical. No build, test, gate, live site, or network access was used.
