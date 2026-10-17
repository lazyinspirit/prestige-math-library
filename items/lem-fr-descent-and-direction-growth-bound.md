---
id: lem-fr-descent-and-direction-growth-bound
kind: lemma
title: "Fletcher–Reeves descent and direction-growth bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-nonlinear-conjugate-gradient-methods
  - def-wolfe-and-strong-wolfe-conditions
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 5 §5.2, Lemma 5.6, printed pp. 125–126: normalized FR directional-derivative recurrence under strong Wolfe curvature."
    - title: "Jean Charles Gilbert and Jorge Nocedal, Global Convergence Properties of Conjugate Gradient Methods for Optimization, SIAM Journal on Optimization 2(1), 21–42 (1992), DOI 10.1137/0802003"
      url: "https://who.rocq.inria.fr/Jean-Charles.Gilbert/preprint/06%2Bcg-convergence.pdf"
      locator: "§3, Lemma 3.1, printed pp. 25–26: sufficient descent bounds for Fletcher–Reeves under strong Wolfe conditions."
---

## Statement

Let $g_k=\nabla f(x_k)\ne0$ and let the Fletcher–Reeves directions be
$$ d_0=-g_0,\qquad d_k=-g_k+\beta_{k-1}d_{k-1},\qquad \beta_{k-1}=\frac{\|g_k\|_2^2}{\|g_{k-1}\|_2^2}\quad(k\ge1). $$
Suppose every accepted step along $d_{k-1}$ satisfies the strong Wolfe curvature inequality with constant $0<c_2<1/2$. Define
$$ q_k=-\frac{g_k^Td_k}{\|g_k\|_2^2},\qquad \delta=\frac{1-2c_2}{1-c_2},\qquad C_3=\frac{1+c_2}{1-c_2},\qquad S_k=\sum_{j=0}^k\frac1{\|g_j\|_2^2}. $$
Then, for every $k$,
$$ \delta\le q_k\le\frac1{1-c_2},\qquad \|d_k\|_2^2\le C_3\|g_k\|_2^4S_k. $$
In particular every direction is strictly descending, and its normalized directional derivative has a uniform positive lower bound.

## Facts & Assumptions

**Given:** The nonzero gradients, Fletcher–Reeves recurrence, and strong Wolfe curvature hypotheses in the Statement.

[F1] [[alg-nonlinear-conjugate-gradient-methods]]: FR uses $d_0=-g_0$, $d_k=-g_k+\beta_{k-1}d_{k-1}$, and $\beta_{k-1}=\|g_k\|_2^2/\|g_{k-1}\|_2^2$.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: a strong Wolfe step along $d_{k-1}$ satisfies $|g_k^Td_{k-1}|\le c_2|g_{k-1}^Td_{k-1}|$, with $0<c_2<1/2$.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 From $d_0=-g_0$, we have $q_0=1$. [given, F1, algebra]

1.2 For $k\ge1$, the recurrence and the definition of $\beta_{k-1}$ give $q_k=1-\frac{g_k^Td_{k-1}}{\|g_{k-1}\|_2^2}.$ [F1, algebra]

2.1 If $0<q_{k-1}\le(1-c_2)^{-1}$, then [F2] and step 1.2 imply $1-c_2q_{k-1}\le q_k\le1+c_2q_{k-1}.$ Induction from step 1.1 gives $q_k\le\sum_{j=0}^kc_2^j\le(1-c_2)^{-1}$, and then $q_k\ge1-c_2/(1-c_2)=\delta>0$. [given, F2, step 1.1, step 1.2, induction, algebra]

3.1 Expanding $d_k=-g_k+\beta_{k-1}d_{k-1}$, applying [F2], and using step 2.1 yields $\|d_k\|_2^2\le\|g_k\|_2^2+2\beta_{k-1}|g_k^Td_{k-1}|+\beta_{k-1}^2\|d_{k-1}\|_2^2 \le C_3\|g_k\|_2^2+\frac{\|g_k\|_2^4}{\|g_{k-1}\|_2^4}\|d_{k-1}\|_2^2,$ because $|g_k^Td_{k-1}|\le c_2q_{k-1}\|g_{k-1}\|_2^2$ and $q_{k-1}\le(1-c_2)^{-1}$. [F1, F2, step 2.1, algebra]

4.1 For $k=0$, $\|d_0\|_2^2=\|g_0\|_2^2\le C_3\|g_0\|_2^4S_0$. If the claimed bound holds at $k-1$, step 3.1 gives $\|d_k\|_2^2\le C_3\|g_k\|_2^2+C_3\|g_k\|_2^4S_{k-1} =C_3\|g_k\|_2^4S_k.$ Thus induction proves the direction-growth bound. [step 3.1, induction, algebra] ∎

## Remarks

The first bound is on $-g_k^Td_k/\|g_k\|_2^2$, not on the cosine of the angle. It does not by itself give a uniform angle bound.
