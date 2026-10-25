# Measure Theory rendering review — lane 10

## Scope and coverage

Reviewed all 102 assigned frozen snapshots and local HTML previews. Opened all 127 assigned PNG tiles individually at original resolution. Snapshot, HTML, and PNG SHA256 values match the assignment and screenshot metadata. Per-item and per-tile coverage is in [lane-10.json](lane-10.json).

The capture metadata reports zero KaTeX errors, zero TikZ renderings, and zero diagram failures. No Scratch labels appeared. The assigned captures contain no standalone embedded images, so there were no image assets whose intrinsic clipping could be assessed. No existing diagram mathematics appeared in this lane. Viewport screenshot boundaries were not treated as standalone-image clipping defects. Reference links render as blocks by design; ordinary wrapping around them was not reported.

## Confirmed rendering defects

Technique banners expose their source text literally, including ASCII math and TeX delimiters. The uppercase banner styling is intentional; the math inside these five banners is still raw:

- `cex-l-one-not-subset-l-two-on-the-line`, snapshot line 34: `Use the power-function family $x^{-a}$ near $0$ with $1/2\le a<1$.`
- `ex-finite-counting-measure-on-n-points-recovers-rn-p-norms`, line 51: the technique contains `$p$-norms` and `\mathbb R^n`.
- `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere`, line 38: the technique contains `$L^1$` and `$[0,1]$`.
- `prop-semifinite-measures-make-l-q-representatives-unique`, line 47: the technique contains `$L^q$`.
- `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`, line 49: the technique contains powers, exponents, and `$\mu(X)$`.

These titles are displayed literally with untypeset mathematical notation:

- `ex-region-under-x-squared-has-measure-one-third`, line 4: `x maps to x^2 on [0,1]` appears as plain title text rather than a formula.
- `ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi`, line 4: `e^{ix} dlambda` and `2pi` are raw ASCII notation.
- `thm-cardinality-bound-for-generated-sigma-algebras`, line 4: `|E|^aleph-zero` is raw ASCII notation.
- `lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals`, line 4: `C_0(X)` is shown with a literal underscore.
- `lem-countable-intersections-of-club-subsets-of-omega-one-are-club`, line 4: `omega_1` is shown with a literal underscore.
- `prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces`, line 4: `L^1` is shown with a literal caret.

`def-dirac-measure`, snapshot line 36, says “is proved in A Dirac set function is a probability measure.” The reference title is hard-coded into the sentence as prose, so the rendered definition reads as a malformed citation/title leak.

## Diagram candidates

`ex-region-under-x-squared-has-measure-one-third`, snapshot lines 23–25 and 39–41, supports a simple editorial area diagram. Draw axes for `x` and `t`, the curve `t=x^2` on `[0,1]`, and shade `R={(x,t):0≤t<x^2}` below it. Label the interval endpoints and the area/integral identity `λ₂(R)=∫₀¹x²dx=1/3`. This illustrates the source’s product-measure-to-integral step; it is optional and no error is asserted.

`thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes`, lines 74 and 76–78, supports an optional two-dimensional schematic: show one open set `U`, dyadic grids at successively finer generations, selected maximal half-open cubes `Q_x⊆U`, and labels indicating that intersecting dyadic cubes are nested, while distinct maximal cubes are disjoint and their union is `U`. Keep the drawing schematic for a general open set; the proof remains textual and does not rely on the picture.

## Remaining checks

The titles and full ItemBody renders have no other confirmed raw math, KaTeX/TeX, reference-title, or Scratch defects. No TikZ or existing diagram math needed review. This review concerns frozen local previews only and makes no production-route or publication-status claim.
