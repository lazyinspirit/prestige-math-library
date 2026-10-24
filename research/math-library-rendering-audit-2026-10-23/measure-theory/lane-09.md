# Measure Theory rendering audit — lane 09

Read-only review of the frozen lane-09 snapshots and local HTML renderings. I inspected all 102 assigned items and each of their 128 PNG tiles individually at original resolution. Exact item and tile hashes, including each viewed tile, are recorded in `lane-09.json`.

## Findings

### Confirmed rendering defects

| Item | Source line | Visible result |
| --- | ---: | --- |
| `cor-c-one-change-of-variables-for-l-one-functions` | 4 | The title's `C^1` and `L^1` display as literal carets instead of typeset notation. |
| `cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence` | 4 | The title's `L^1(mu)` displays literally. |
| `def-complex-lp-and-euclidean-test-function-conventions` | 4 | The title uses literal `Lp`; the exponent is not typeset. |
| `def-total-variation-of-a-signed-or-complex-measure` | 4 | The title uses literal `|nu|(E)` instead of typeset variation notation. |
| `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces` | 4 | The title uses literal `Lp`; the exponent is not typeset. |
| `cor-ell-p-duality-by-counting-measure` | 41 | The uppercase technique banner visibly prints raw TeX delimiters and commands such as `$\ell^p$` and `$\mathbb N$`. |
| `lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures` | 44 | The uppercase technique banner visibly prints raw TeX for `\nu(E)=\Lambda([\mathbf 1_E])`. |
| `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces` | 52 | The uppercase technique banner visibly prints raw `$p=1$` and `$1<p<\infty$`. |

All are presentation defects; I found no mathematical error from the visual review. The title cases should be reviewed as title-field math formatting, and the three technique strings should be formatted as prose or converted to a supported math form. The uppercase technique banner itself is intended.

### Diagram candidates (editorial)

These are source-supported opportunities, not confirmed errors. No existing TikZ diagrams were present in this lane.

| Item and source lines | Diagram kind and content to draw/check | Classification |
| --- | --- | --- |
| `ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube`, lines 31–37, 55–59 | Affine image schematic: the half-open unit square under `T(x,y)=(2x+y,x+3y)` maps to a parallelogram with determinant/area 5; the unit cube under the upper triangular `U` maps to a parallelepiped with determinant/volume 24; the singular `S(x,y)=(x,x)` collapses the square into the diagonal line segment. Keep the half-open domain labels and indicate that the last image is null. | Editorial candidate; not a correctness issue. |
| `ex-doubling-dyadic-preimage-computation`, lines 26, 34–38 | Circle/interval schematic with the two doubling branches `[0,1/2)` and `[1/2,1)`, and the preimage pieces `[0,1/4)` and `[1/2,3/4)` of `[0,1/2)`. Mark the forward image `[0,1)` of `[0,1/2)` separately to show why forward-image measure differs from inverse-image preservation. | Editorial candidate; not a correctness issue. |

## Coverage and checks

- Source snapshot and local HTML hashes matched the assignment for all 102 items; all 128 screenshot hashes matched their screenshot manifests.
- Each of the 128 PNGs is recorded as individually viewed at original resolution. No collage or resized surrogate was used.
- Screenshot metadata reports zero KaTeX errors, zero diagram failures, and zero TikZ diagrams across the lane. The local HTML contains no standalone `<img>` tags; I saw no clipping that should be classified as an image defect.
- No Scratch/debug/TODO text was found in the assigned snapshots or HTML. Supplier-title links render as block links as expected; I found no reference-title leak.
- No defects were assigned to ordinary line wrapping, the intended uppercase technique labels, source-authored IDs, or link-block rendering.

The JSON companion is the per-item/per-tile evidence inventory and contains the exact paths, SHA-256 hashes, source and HTML verification results, screenshot metadata, and finding classifications.
