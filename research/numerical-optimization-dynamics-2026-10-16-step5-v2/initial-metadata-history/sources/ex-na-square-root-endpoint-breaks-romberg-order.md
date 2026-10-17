---
id: ex-na-square-root-endpoint-breaks-romberg-order
kind: example
title: "The square-root endpoint does not have Romberg's even-power order"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature-examples
dependency_level: 5
deps: [alg-na-romberg-trapezoid-table, thm-na-romberg-even-power-cancellation, def-composite-trapezoidal-rule, thm-composite-trapezoidal-rule-error-bound, thm-ftc-second-part, thm-additivity-over-subintervals, def-higher-derivatives-and-smoothness, lem-derivative-of-a-power, thm-chain-rule, def-rational-power, lem-rational-power-laws, lem-rational-power-monotone, lem-power-monotone, thm-nth-roots-exist, thm-real-power-continuity-and-derivatives, thm-real-power-agrees-with-rational-exponent, cor-differentiable-implies-continuous, thm-substitution, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, lem-truncated-integrals-of-rational-powers, thm-monotonicity-of-the-integral, lem-of-inverse-positive]
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

For $f(x)=\sqrt{x}$ on $[0,1]$, let $T_N$ be the composite trapezoidal value with mesh $h=1/N$, and set $S_N:=T_{2N}+(T_{2N}-T_N)/3=(4T_{2N}-T_N)/3$, the first-column Richardson value formed from the $N$- and $2N$-panel levels. For $N=2^k$ with $k\in\mathbb N$, this is $R_{k+1,1}$ of [[alg-na-romberg-trapezoid-table]] whenever its level cap $L$ satisfies $L\ge k+1$. For every integer $N\ge1$,
$$\frac{8\sqrt2-11}{144}h^{3/2}\le \int_0^1f(x)\,dx-S_N.$$
The coefficient is positive, so this error is not $O(h^2)$ as $N\to\infty$.

## Facts & Assumptions

**Given:** $N\ge1$, $h=1/N$, and $f(x)=\sqrt{x}$ on $[0,1]$.

[A1] $N$ is a positive integer and $h=1/N$.

[F1] [[def-composite-trapezoidal-rule]]: $T_N$ is the sum of panel trapezoids on the uniform mesh; its individual panel values add to $T_N$.

[F2] [[thm-composite-trapezoidal-rule-error-bound]]: on a panel of width $h$ where $f\in C^2$, the absolute difference between its integral and its trapezoid is at most $h^3\sup|f''|/12$.

[F3] [[alg-na-romberg-trapezoid-table]]: its first-column recurrence is $T_{2N}+(T_{2N}-T_N)/3$ when applied to the adjacent $N$- and $2N$-panel levels; for dyadic $N$ this is the corresponding table entry.

[F4] [[thm-nth-roots-exist]], [[def-rational-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-real-power-agrees-with-rational-exponent]], [[cor-differentiable-implies-continuous]], and [[lem-power-monotone]]: $\sqrt{x}$ is the nonnegative square root, is differentiable and hence continuous on $(0,\infty)$, and is continuous at $0$ by $0\le x<\varepsilon^2\Rightarrow0\le\sqrt{x}<\varepsilon$.

[F5] [[thm-substitution]], [[lem-derivative-of-a-power]], and [[thm-ftc-second-part]]: for $u\in(0,1]$, substituting $x=t^2$ on $[0,\sqrt u]$ gives $\int_0^u\sqrt{x}\,dx=\int_0^{\sqrt u}2t^2\,dt=2u\sqrt u/3$.

[F6] [[thm-additivity-over-subintervals]]: the integral and the sum of panel trapezoids decompose over the uniform mesh.

[F7] [[thm-real-power-continuity-and-derivatives]], [[thm-real-power-agrees-with-rational-exponent]], [[thm-algebra-of-derivatives]], and [[thm-algebra-of-continuous-functions]]: on each closed panel with endpoints $ih$ and $(i+1)h$, for $i\ge1$, $f\in C^2$ and $f''(x)=-1/(4x\sqrt{x})$; the displayed derivative formulas are continuous there because the root is positive and continuous and the denominator does not vanish.

[F8] [[thm-na-romberg-even-power-cancellation]]: the cancellation conclusion requires the finite even-power expansion hypothesis stated there; it does not assert second-order accuracy for an endpoint-singular input without that expansion.

## Proof

1.1 Continuity from [F4] permits the substitution [F5] on $[0,1]$ and on the first panel $[0,h]$. Thus $\int_0^1\sqrt{x}\,dx=2/3$ and the first-panel integral is $2h\sqrt h/3$, while its trapezoid is $h\sqrt h/2$; its excess is therefore $h\sqrt h/6=h^{3/2}/6$. For every panel, the chord joining endpoint values lies below $\sqrt{x}$: for $u,v\ge0$ and $0\le\lambda\le1$, the square of $(1-\lambda)\sqrt u+\lambda\sqrt v$ is at most $(1-\lambda)u+\lambda v$, since the difference is $\lambda(1-\lambda)(\sqrt u-\sqrt v)^2$. Thus each panel integral is at least its trapezoid and $e_N:=2/3-T_N\ge h^{3/2}/6$. [given, A1, F1, F4, F5, F6, algebra]

2.1 For panels indexed by $i=1,\ldots,N-1$, [F2] and [F7] bound each nonnegative panel excess by $h^3/(48ih\sqrt{ih})=h^{3/2}/(48i^{3/2})$, using the rational-power laws in [[lem-rational-power-laws]]. The finite sum satisfies $\sum_{i=1}^{N-1}i^{-3/2}\le3$: for $N=1$ it is empty; for $N=2$ it is $1$; and for $N\ge3$, if $i-1\le x\le i$ then $x^{3/2}\le i^{3/2}$ by [[lem-rational-power-monotone]]. If $x<i$, inverse order [[lem-of-inverse-positive]] gives $x^{-3/2}>i^{-3/2}$, and if $x=i$ equality holds. Integral monotonicity [[thm-monotonicity-of-the-integral]] gives $i^{-3/2}\le\int_{i-1}^{i}x^{-3/2}\,dx$ for $2\le i\le N-1$. Summing and using [[lem-truncated-integrals-of-rational-powers]] yields $\sum_{i=1}^{N-1}i^{-3/2}\le1+\int_1^{N-1}x^{-3/2}\,dx\le3$. Adding the first-panel excess $h^{3/2}/6$ gives $e_N\le(1/6+3/48)h^{3/2}=11h^{3/2}/48$. Hence $h^{3/2}/6\le e_N\le11h^{3/2}/48.$ [given, A1, F2, F6, F7, step 1.1, algebra]

3.1 The function is not $C^1$ at $0$, because its right difference quotient is $\sqrt{x}/x=1/\sqrt{x}$ and is unbounded as $x\downarrow0$; in particular it does not meet the smoothness assumptions behind the finite even-power expansion used for [F8]. Nevertheless the one-step value $S_N$ is defined. Writing $e_{2N}=2/3-T_{2N}$ and using the preceding bounds at mesh $h/2$ and $h$ gives $\int_0^1f-S_N=\frac{4e_{2N}-e_N}{3}\ge\frac{4(h/2)^{3/2}/6-11h^{3/2}/48}{3}=\frac{8\sqrt2-11}{144}h^{3/2}.$ The constant is positive since $(8\sqrt2)^2=128>121=11^2$. Dividing by $h^2$ makes the lower bound grow as a positive constant times $h^{-1/2}$, so the error cannot be $O(h^2)$. This illustrates why [F8] cannot be applied without its expansion hypothesis. [given, F3, F8, step 2.1, algebra] ∎
