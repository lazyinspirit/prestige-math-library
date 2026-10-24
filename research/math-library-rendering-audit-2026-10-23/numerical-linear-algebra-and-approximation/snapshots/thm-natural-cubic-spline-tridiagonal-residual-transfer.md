---
id: thm-natural-cubic-spline-tridiagonal-residual-transfer
kind: theorem
title: A natural-spline tridiagonal residual bounds the spline value error
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - lem-natural-cubic-spline-second-derivative-perturbation
  - thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter IV,
        pp. 42–45
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $x_1<\cdots<x_r$, $r\ge3$, and let $s$ be the natural cubic
interpolant of nodal values $y_i$. Write $h_i=x_{i+1}-x_i$ and
$H=\max_i h_i$. Let $A$ be the $(r-2)\times(r-2)$ interior coefficient
matrix in the system of
[[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]], and
let $b$ be its right-hand side. Put
$$\delta=\min_{2\le i\le r-1}(h_{i-1}+h_i)>0.$$
For any proposed nodal second derivatives
$\widehat M_1=\widehat M_r=0$, let $\widehat m$ be their interior vector,
let $\rho=A\widehat m-b$ be the exact residual, and let $\widehat s$ be
the piecewise cubic given by the natural piece formula with these second
derivatives and the same values $y_i$. Then, on the knot hull,
$$\|\widehat s-s\|_{L^\infty([x_1,x_r])}\le \frac{H^2}{8\delta}\|\rho\|_\infty.$$
This is a residual-to-function transfer statement; it does not assert that
a particular floating-point solver returns a residual certificate.

## Facts & Assumptions

**Given:** The distinct knots and data, the natural interpolant, and an arbitrary proposed interior second-derivative vector with zero endpoint values.

[F1] [[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]]: the exact interior vector $m$ solves $Am=b$, where row $i$ has diagonal $2(h_{i-1}+h_i)$ and adjacent entries $h_{i-1},h_i$; its spline pieces use the stated cubic formula.

[F2] [[lem-natural-cubic-spline-second-derivative-perturbation]]: if the endpoint second derivatives agree, a nodal second-derivative discrepancy bounded by $E$ changes the natural cubic pieces on the knot hull by at most $H^2E/8$ in the maximum norm.

[A1] $r\ge3$, all $h_i>0$, and $\rho$ is the exact algebraic residual $A\widehat m-b$.

## Proof

1.1 Let $e=\widehat m-m$, so $Ae=\rho$ by [F1] and the definition of $\rho$. Choose an index $i$ at which $|e_i|=\|e\|_\infty$, and put $S_i=h_{i-1}+h_i$. The diagonal entry in row $i$ is $2S_i$, while the sum $R_i$ of the absolute off-diagonal entries is at most $S_i$ because an endpoint row omits the coefficient multiplying the fixed zero endpoint second derivative (and when $r=3$ there are no off-diagonal entries). The reverse triangle inequality and $|e_j|\le\|e\|_\infty$ give $|\rho_i|\ge(2S_i-R_i)\|e\|_\infty\ge S_i\|e\|_\infty\ge\delta\|e\|_\infty$. Hence $\|e\|_\infty\le\|\rho\|_\infty/\delta$. [A1, F1, algebra, choose]

2.1 Apply [F2] with $E=\max_i|\widehat M_i-M_i|=\|e\|_\infty$, since both endpoint perturbations are zero. Step 1.1 then yields $\|\widehat s-s\|_\infty\le H^2\|e\|_\infty/8\le H^2\|\rho\|_\infty/(8\delta)$, as claimed. [A1, F2, step 1.1, algebra] ∎
