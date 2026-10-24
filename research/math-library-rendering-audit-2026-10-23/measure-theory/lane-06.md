# Measure Theory rendering audit — lane 06

Reviewed all 103 assigned items from their frozen Markdown snapshots and local HTML. Individually opened all 134 assigned revision-2 screenshot tiles at original resolution, including 31 overlapping continuation tiles. Per-item source, snapshot, HTML, and per-tile SHA-256 values are recorded in [lane-06.json](lane-06.json).

## Confirmed rendering defects

- Raw inline math is visible in uppercase technique banners: [cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm.md](snapshots/cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm.md:38), [ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one.md](snapshots/ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one.md:46), [fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r.md](snapshots/fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r.md:41), [lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities.md](snapshots/lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities.md:57), and [thm-equality-case-in-minkowski-inequality.md](snapshots/thm-equality-case-in-minkowski-inequality.md:50). The banner treatment is intended; its embedded formulas need math rendering or removal.
- **Consumer finding:** the local tile for [cex-equal-iterated-integrals-do-not-imply-l-one-integrability.md](snapshots/cex-equal-iterated-integrals-do-not-imply-l-one-integrability.md:51) shows its linked reference title with the plain-ASCII formula `(x^2-y^2)/(x^2+y^2)^2`. The referenced title is context only; it is outside this lane's assignment and is not separately flagged.

## Diagram candidate

- **Editorial candidate, not a confirmed defect:** `cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure`, frozen source lines 29 and 39. A number-line sequence diagram could show supports `[n,n+1]` moving right for successive `n`, each with measure 1, while any fixed `x` eventually lies outside them and `f_n(x)` becomes 0. This directly illustrates the source's contrast between pointwise convergence and failure of convergence in measure.

## Other observations

- Math rendering is generally sound in the reviewed local tiles. No TikZ or existing diagrams appeared in this lane, so there were no existing diagram claims to inspect. No Scratch content was observed.
- The continuation tiles overlap at their expected capture offsets; their image-frame boundaries are not clipping defects.
- Cross-reference links render as blocks as expected. No production route or live website was checked.
