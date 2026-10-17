---
id: ex-na-square-root-endpoint-breaks-romberg-order
kind: example
title: "The square-root endpoint does not have Romberg's even-power order"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature-examples
dependency_level: 5
deps: [alg-na-romberg-trapezoid-table, thm-na-romberg-even-power-cancellation, def-composite-trapezoidal-rule, thm-composite-trapezoidal-rule-error-bound, thm-ftc-second-part, thm-additivity-over-subintervals, def-higher-derivatives-and-smoothness, lem-derivative-of-a-power, thm-chain-rule]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None. The estimates use finite sums and elementary inequalities.
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.3"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 228–235, trapezoidal expansion and Romberg integration."

    - title: "NIST Digital Library of Mathematical Functions, §3.5(iii), Romberg Integration"
      url: "https://dlmf.nist.gov/3.5"
      locator: "Full-text section §3.5(iii), equations 3.5.9–3.5.12 on the finite even-power expansion and Romberg recurrence."
---

## Example

For $f(x)=\sqrt{x}$ on $[0,1]$, let $T_N$ be the composite trapezoidal value with mesh $h=1/N$, and let $R_{1,1}=(4T_{2N}-T_N)/3$ be the first Romberg extrapolate. For every integer $N\ge1$,
$$\frac{8\sqrt2-11}{144}h^{3/2}\le \int_0^1f(x)\,dx-R_{1,1}(f).$$
The coefficient is positive, so this error is not $O(h^2)$ as $N\to\infty$.

## Facts & Assumptions

**Given:** $N\ge1$, $h=1/N$, and $f(x)=\sqrt{x}$ on $[0,1]$.

[A1] $N$ is a positive integer and $h=1/N$.

[F1] [[def-composite-trapezoidal-rule]]: $T_N$ is the sum of panel trapezoids on the uniform mesh; its individual panel values add to $T_N$.

[F2] [[thm-composite-trapezoidal-rule-error-bound]]: on a panel of width $h$ where $f\in C^2$, the absolute difference between its integral and its trapezoid is at most $h^3\sup|f''|/12$.

[F3] [[alg-na-romberg-trapezoid-table]]: $R_{1,1}=T_{2N}+(T_{2N}-T_N)/3=(4T_{2N}-T_N)/3$.

[F4] [[thm-ftc-second-part]] and [[lem-derivative-of-a-power]]: $\int_0^1\sqrt{x}\,dx=2/3$ by the antiderivative $2x^{3/2}/3$.

[F5] [[thm-additivity-over-subintervals]]: the integral and the sum of panel trapezoids decompose over the uniform mesh.

[F6] [[def-higher-derivatives-and-smoothness]], [[lem-derivative-of-a-power]], and [[thm-chain-rule]]: on each closed panel with endpoints $ih$ and $(i+1)h$, for $i\ge1$, $f\in C^2$ and $f''(x)=-1/(4x^{3/2})$.

[F7] [[thm-na-romberg-even-power-cancellation]]: the cancellation conclusion requires the finite even-power expansion hypothesis stated there; it does not assert second-order accuracy for an endpoint-singular input without that expansion.

## Proof

1.1 On the first panel, $T$ equals $h\sqrt h/2=h^{3/2}/2$, while the integral equals $2h^{3/2}/3$ by [F4]; hence the first-panel excess of integral over trapezoid is $h^{3/2}/6$. For every panel, the chord joining endpoint values lies below $\sqrt{x}$: for $u,v\ge0$ and $0\le\lambda\le1$, the square of $(1-\lambda)\sqrt u+\lambda\sqrt v$ is at most $(1-\lambda)u+\lambda v$, since the difference is $\lambda(1-\lambda)(\sqrt u-\sqrt v)^2$. Thus each panel integral is at least its trapezoid and $e_N:=2/3-T_N\ge h^{3/2}/6$. [given, A1, F1, F4, F5, algebra]

2.1 For panels indexed by $i=1,\ldots,N-1$, [F2] and [F6] bound each nonnegative panel excess by $h^3/(48(ih)^{3/2})=h^{3/2}/(48i^{3/2})$. Since $x^{-3/2}$ decreases, $\sum_{i=1}^{N-1}i^{-3/2}\le1+\int_1^\infty x^{-3/2}dx=3$. Adding the first-panel excess $h^{3/2}/6$ gives $e_N\le(1/6+3/48)h^{3/2}=11h^{3/2}/48$. Hence $h^{3/2}/6\le e_N\le11h^{3/2}/48.$ [given, A1, F2, F5, F6, step 1.1, algebra]

3.1 The function is not $C^1$ at $0$, because its right difference quotient is $\sqrt{x}/x=1/\sqrt{x}$ and is unbounded as $x\downarrow0$; in particular it does not meet the smoothness assumptions behind the finite even-power expansion used for [F7]. Nevertheless the first table step [F3] is defined. Writing $e_{2N}=2/3-T_{2N}$ and using the preceding bounds at mesh $h/2$ and $h$ gives $\int_0^1f-R_{1,1}=\frac{4e_{2N}-e_N}{3}\ge\frac{4(h/2)^{3/2}/6-11h^{3/2}/48}{3}=\frac{8\sqrt2-11}{144}h^{3/2}.$ The constant is positive since $(8\sqrt2)^2=128>121=11^2$. Dividing by $h^2$ makes the lower bound grow as a positive constant times $h^{-1/2}$, so the error cannot be $O(h^2)$. This illustrates why [F7] cannot be applied without its expansion hypothesis. [given, F3, F7, step 2.1, algebra] ∎
