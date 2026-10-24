---
id: ex-adaptive-simpson-leading-error-cancellation
kind: example
title: Cancellation of the leading Simpson error coefficient
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-composite-simpson-rule
  - def-adaptive-simpson-refinement-indicator
  - thm-simpson-richardson-error-estimator-asymptotic
  - def-higher-derivatives-and-smoothness
  - thm-ftc-second-part
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
  - thm-algebra-of-continuous-functions
  - thm-continuous-on-a-rectangle-is-riemann-integrable
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
      locator: §5.7.1, the assumptions behind the /15 Richardson indicator.
    - title: L. Ridgway Scott, Numerical Analysis, 2nd ed., Chapter 13, §13.2
      url: https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf
      locator: Printed pp. 222–227; Peano kernel error representation.
---

## Example

For $f(x)=x^6-5x^4$ on $[0,1]$, the leading coefficient
$-(1/180)\int_0^1 f^{(4)}$ in
[[thm-simpson-richardson-error-estimator-asymptotic]] vanishes, but the
one-level indicator and the refined Simpson error are nonzero. In fact, the
indicator is $21/5$ times the true refined error in this exact example.

## Facts & Assumptions

**Given:** The polynomial $f(x)=x^6-5x^4$ on $[0,1]$, the exact integral,
and composite Simpson grids with $n=2$ and $n=4$.

[F1] [[alg-composite-simpson-rule]]: on an even uniform grid,
$Q_S=(h/3)\sum_{j<n/2}(f(x_{2j})+4f(x_{2j+1})+f(x_{2j+2}))$.

[F2] [[def-adaptive-simpson-refinement-indicator]]:
$\eta=|Q_{n=4}-Q_{n=2}|/15$ for this parent and its two-half refinement.

[F3] [[thm-simpson-richardson-error-estimator-asymptotic]]: the leading
coefficient is $-(1/180)\int_0^1 f^{(4)}$.

[F4] [[lem-derivative-of-a-power]] and
[[thm-algebra-of-derivatives]]: polynomial powers differentiate by the power
rule, and derivatives distribute over finite sums and scalar multiples.

[F5] [[thm-algebra-of-continuous-functions]]: polynomial functions are
continuous; the power and derivative rules show the derivatives used here are
also polynomial functions.

[F6] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: continuous
polynomials on $[0,1]$ are Riemann integrable.

[F7] [[thm-ftc-second-part]]: integrating a continuous derivative gives the
endpoint difference of its antiderivative.

[F8] [[def-higher-derivatives-and-smoothness]]: $C^4$ means the derivatives
through order four are continuous on the closed interval.

The polynomial is $C^4$ on
$[0,1]$.

## Verification

1.1 By [F4] and [F5], $f^{(4)}(x)=360x^2-120$ and this derivative is continuous. An antiderivative is $120x^3-120x$, so [F6]–[F7] give $\int_0^1 f^{(4)}(x)\,dx=0$. Hence $f\in C^4([0,1])$ by [F8], and the leading coefficient in [F3] is zero. [given, F3, F4, F5, F6, F7, F8, algebra]

1.2 By [F4]–[F5], $x^7/7-x^5$ has derivative $f$ and $f$ is continuous, so [F6]–[F7] give the exact integral $1/7-1=-6/7$. Also $f(0)=0$, $f(1/2)=-19/64$, and $f(1)=-4$; substitution in [F1] gives $Q_{n=2}=-83/96$. The quarter-point values are $f(1/4)=-79/4096$ and $f(3/4)=-5751/4096$, so [F1] also gives $Q_{n=4}=\frac1{12}\left(4\left(-\frac{79}{4096}\right)+2\left(-\frac{19}{64}\right)+4\left(-\frac{5751}{4096}\right)-4\right)=-\frac{5267}{6144}.$ Thus the refined error is $-6/7-Q_{n=4}=5/43008$, and the coarse error is $-6/7-Q_{n=2}=5/672$. [given, F1, F4, F5, F6, F7, algebra]

2.1 From [F2], $\eta=|Q_{n=4}-Q_{n=2}|/15=1/2048$. Hence $\eta/(5/43008)=21/5$. The nonzero refined error and zero leading coefficient show why the asymptotic /15 relation supplies no relative finite-level guarantee in the cancelled case. [given, F2, step 1.1, step 1.2, algebra] ∎

