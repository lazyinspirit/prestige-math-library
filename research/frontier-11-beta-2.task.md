# frontier-11, batch 2

You are **Beta-frontier-11-2**. Your writable artifacts are the four
`research/frontier-11-batch-2.*` files named in the brief above.

## Your pages

- **A** `the-fundamental-theorems-of-calculus` (order 239, real-analysis) — "The Fundamental Theorems of Calculus"
  - **B** `the-fundamental-theorems-of-calculus-examples` (order 240)
  - requires: `bounded-variation-and-riemann-stieltjes`
- **A** `arc-length-and-rectifiable-curves` (order 181, real-analysis) — "Arc Length and Rectifiable Curves"
  - **B** `arc-length-and-rectifiable-curves-examples` (order 182)
  - requires: `bounded-variation-and-riemann-stieltjes`, `rn-as-a-normed-space`

## Prose scaffold sections to read

- `research/plan-realanalysis-pages.md`
- `research/plan-r-specific-pages.md`
- `research/plan-complex-analysis-track.md` (arc length is referenced there for the contour-integration track)

## Batch note

The two pairs share the prerequisite `bounded-variation-and-riemann-stieltjes`,
which is why they are one batch: read it once, cite it from both.

**Order 239** is cited by name from `line-integrals-and-the-gradient-theorem`
(241), so the statements must be usable as-is. The library already publishes
`properties-of-the-integral-and-the-working-ftc` (order 161) — **open it first
and scaffold around what it owns.** This page is the theorems in full: the first
FTC (the integral of a continuous integrand is differentiable with derivative the
integrand, and the weaker a.e./continuity-point form), the second FTC for a
Riemann-integrable derivative, integration by parts and substitution stated as
consequences with their exact hypotheses, and the Riemann–Stieltjes versions the
prerequisite makes available. The B page is where the hypotheses earn their keep:
a derivative that exists everywhere but is not Riemann integrable (Volterra's
function is the standard citation — if you cannot build it in scope, say so
explicitly rather than gesturing at it), an indefinite integral that is
differentiable nowhere it should not be, and the discontinuous-integrand case.

**Order 181** blocks `pi-the-equivalent-characterizations` (183) and
`contour-integration` (307). Define a path in `R^n`, the length as the supremum
of inscribed polygon lengths over partitions, and prove rectifiability is exactly
bounded variation componentwise — that is the bridge to the shared prerequisite
and it must be a theorem, not a remark. Then: additivity over subdivision,
invariance under reparametrisation, lower semicontinuity, the `\int |gamma'|`
formula for continuously differentiable paths **with the hypotheses stated
exactly**, and arc-length parametrisation. The B page needs a continuous
non-rectifiable curve (the graph of `x sin(1/x)` on `[0,1]`, or a Koch-type
construction) and a rectifiable curve that is not continuously differentiable.
