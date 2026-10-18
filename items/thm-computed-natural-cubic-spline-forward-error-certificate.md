---
id: thm-computed-natural-cubic-spline-forward-error-certificate
kind: theorem
title: A computed natural-cubic reconstruction has a forward-error certificate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate
  - thm-natural-tridiagonal-cholesky-solve-residual-certificate
  - thm-natural-cubic-spline-tridiagonal-residual-transfer
  - thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter IV, pp. 42–45
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Brian LeMesurier, Introduction to Numerical Methods and Analysis with Python, Chapter 3.4
      url: https://lemesurierb.people.charleston.edu/introduction-to-numerical-methods-and-analysis-python/docs/main/piecewise-polynomial-approximation-and-splines.html
---

## Statement

Let $r\ge2$ and use the stored knots and values and the algorithm of
[[alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate]]. Let
$s$ be the exact natural cubic interpolant of those data, supplied by
[[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]]. On a
successful call, let $\widehat M$ be the returned second-derivative vector,
put $\widehat m=(\widehat M_2,\ldots,\widehat M_{r-1})$, and let
$\widehat s$ be the piecewise cubic reconstruction defined by the algorithm
from $\widehat M$, evaluated exactly. For $r\ge3$, the success output is
$\operatorname{success}(\widehat M,C,\alpha,\beta,B)$. The algorithm
computes $H$, $\delta$, and $Q=\|\widehat m\|_\infty$ internally when
forming $B$; these are not separate returned fields. The returned certificate
fields satisfy
$$
\|\widehat s-s\|_{L^\infty([x_1,x_r])}\le B=\frac{H^2}{8\delta}\left(C+\alpha\|\widehat m\|_\infty+\beta\right).
$$
Here $\alpha$ and $\beta$ account for the differences between the exact
natural-cubic system assembled from the stored input data and the rounded
matrix and right-hand side used by the factorization. If those systems are
exactly the same, then $\alpha=\beta=0$ and $B=H^2C/(8\delta)$. For $r=2$,
both the natural interpolant and the algorithm-defined reconstruction are
the straight line, and $B=0$.

The algorithm-defined reconstruction interpolates the stored data, but for $r\ge3$
it need not be $C^1$ at its knots and is not asserted to be an exact natural
spline. The bound excludes floating-point error from evaluating the cubic
pieces and makes no unconditional arithmetic-success or general
natural-spline fourth-order claim.

## Facts & Assumptions

**Given:** Strictly increasing stored knots and finite stored values, $r\ge2$,
and a successful algorithm call including its exact rational certificate.

[F1] [[alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate]] defines the exact canonical system $Am=b$, the stored matrix $T$ and right-hand side $f$ used by the rounded solve, and the discrepancies $\alpha=\max_k\sum_j|A_{kj}-T_{kj}|$ and $\beta=\max_k|b_k-f_k|$. On a successful $r\ge3$ call it returns $\widehat M,C,\alpha,\beta,B$ and computes $H$, $\delta$, and $Q=\|\widehat m\|_\infty$ internally to form $B=H^2(C+\alpha Q+\beta)/(8\delta)$.

[F2] [[thm-natural-tridiagonal-cholesky-solve-residual-certificate]] gives $\|T\widehat m-f\|_\infty\le C$ on a full successful call.

[F3] [[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]]: for $r\ge3$, the exact natural interpolant's interior second derivatives solve $Am=b$; for $r=2$ it is the straight line.

[F4] [[thm-natural-cubic-spline-tridiagonal-residual-transfer]]: if $\rho=A\widehat m-b$ is the exact residual for the interior natural-cubic system and the endpoint second derivatives agree at zero, then the piecewise cubic reconstruction differs from the exact natural interpolant on the knot hull by at most $H^2\|\rho\|_\infty/(8\delta)$.

[A1] The data knots are exact stored real numbers with $x_1<\cdots<x_r$; for $r\ge3$, each $h_i>0$ and $\delta>0$.

## Proof

1.1 Suppose $r\ge3$. Let $\widehat M$ be the returned vector and $\widehat m=(\widehat M_2,\ldots,\widehat M_{r-1})$ its interior subvector. By [F2] and the exact identity $A\widehat m-b=(T\widehat m-f)+(A-T)\widehat m+(f-b)$, each row satisfies $|(A\widehat m-b)_k|\le |(T\widehat m-f)_k|+\sum_j|A_{kj}-T_{kj}|\,|\widehat m_j|+|f_k-b_k|\le C+\alpha\|\widehat m\|_\infty+\beta$. Taking the maximum proves $\|A\widehat m-b\|_\infty\le C+\alpha\|\widehat m\|_\infty+\beta$; these exact discrepancies account for all rounded system assembly. [A1, F1, F2, algebra]

2.1 The returned endpoint second derivatives and those of $s$ are both zero. Apply [F4] to the exact residual from step 1.1 and the original widths. It gives $\|\widehat s-s\|_{L^\infty([x_1,x_r])}\le(H^2/(8\delta))\|A\widehat m-b\|_\infty\le(H^2/(8\delta))(C+\alpha\|\widehat m\|_\infty+\beta)=B$. The transfer theorem applies to any proposed interior derivatives with zero endpoint values; it does not require the algorithm-defined pieces to join with matching first derivatives. [A1, F1, F4, step 1.1, algebra]

3.1 If $r=2$, the algorithm returns zero endpoint second derivatives and its associated reconstruction is the exact straight-line piece. By [F3] this is also $s$, and the algorithm defines $B=0$, so the stated bound holds with equality. [A1, F1, F3, algebra] ∎
