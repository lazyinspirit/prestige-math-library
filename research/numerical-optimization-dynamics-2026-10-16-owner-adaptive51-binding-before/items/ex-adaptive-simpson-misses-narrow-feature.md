---
id: ex-adaptive-simpson-misses-narrow-feature
kind: example
title: The Simpson indicator misses a feature between its sample nodes
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-adaptive-simpson-with-finite-depth-and-panel-cap
  - def-adaptive-simpson-refinement-indicator
  - thm-algebra-of-continuous-functions
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-monotonicity-of-the-integral
  - alg-composite-simpson-rule
  - thm-additivity-over-subintervals
  - lem-integral-elementary-bounds
justified_by: []
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.7
      url: https://fncbook.com/adaptive/
      locator: §5.7.2, an adaptive Simpson result whose true error exceeds the requested tolerance.
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.2
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
      locator: Printed pp. 7–8; Simpson formula used in the exact witness.
---

## Example

On $[0,1]$, let
$$f(x)=\prod_{r=0}^{4}(x-r/4)^2.$$
The root indicator is zero, so for every $\tau>0$ the call to
[[alg-adaptive-simpson-with-finite-depth-and-panel-cap]] with $D=0$ and
$P=1$ accepts its root panel and returns estimate $0$. Choose
$\tau=C/32$; for this tolerance the true error is strictly greater than
$\tau$.

## Facts & Assumptions

**Given:** The polynomial $f$ above, the exact-real Simpson algorithm, and
the adaptive call with $D=0$, $P=1$, and
$\tau=C/32$, where
$$C=\left(\frac18\frac1{16}\frac5{16}\frac9{16}\frac{13}{16}\right)^2>0.$$

[F1] [[alg-adaptive-simpson-with-finite-depth-and-panel-cap]]: the root call
returns the refined Simpson value with `accepted` status when its indicator
does not exceed $\tau$.

[F2] [[def-adaptive-simpson-refinement-indicator]]: the root indicator is
$|S_1-S_0|/15$ using the parent and its two child Simpson values.

[F3] [[thm-algebra-of-continuous-functions]]: every polynomial is continuous.

[F4] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: a continuous
real function on $[0,1]$ is Riemann integrable.

[F5] [[thm-monotonicity-of-the-integral]]: if integrable functions satisfy
$g\le f$ pointwise on the interval, then $\int g\le\int f$.

[F6] [[alg-composite-simpson-rule]]: for an even grid, the Simpson value is
the stated weighted sum of its endpoint, midpoint and quarter-grid values.

[F7] [[thm-additivity-over-subintervals]]: for bounded integrable $f$ and
$a<c<b$, $\int_a^b f=\int_a^c f+\int_c^b f$; applying this twice splits
the integral over the three adjacent intervals used below.

[F8] [[lem-integral-elementary-bounds]]: the constant function $C$ on an
interval of length $1/16$ has integral $C/16$.

## Verification

1.1 Every parent and child sample node is in $\{0,1/4,1/2,3/4,1\}$. Each node makes one factor of $f$ zero, so [F6] gives $S_0=S_1=0$ and [F2] gives indicator $0$. [given, F2, F6, algebra]

2.1 Since $0\le\tau$, [F1] accepts immediately, before the depth cap is relevant, and returns $S_1=0$. [given, F1, step 1.1, algebra]

3.1 On $[1/8,3/16]$, the five absolute factors are at least $1/8,1/16,5/16,9/16,13/16$, respectively, so $f\ge C$ there. Since $f$ is a product of squares, $f\ge0$ on all of $[0,1]$; each factor has absolute value at most $1$ there, so $f\le1$ and is bounded. By [F3]–[F4], its restrictions to the three adjacent intervals determined by $1/8$ and $3/16$ are integrable. Monotonicity [F5] and the constant integral [F8] give $\int_{1/8}^{3/16}f\ge C/16$; monotonicity [F5] gives nonnegative integrals on the two outer intervals. Applying the two-piece identity [F7] twice therefore yields $\int_0^1f\ge C/16=2\tau$. Step 2.1 gives returned estimate $0$, so the returned error satisfies $|\int_0^1f-0|\ge2\tau>\tau$, despite the accepted status. [given, F3, F4, F5, F7, F8, step 2.1, algebra] ∎

