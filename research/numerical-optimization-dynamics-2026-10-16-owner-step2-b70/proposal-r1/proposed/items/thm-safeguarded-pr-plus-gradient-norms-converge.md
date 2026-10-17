---
id: thm-safeguarded-pr-plus-gradient-norms-converge
kind: theorem
title: "Safeguarded PR+ converges in gradient norm under strong Wolfe"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-nonlinear-conjugate-gradient-methods
  - lem-safeguarded-pr-plus-uniform-angle
  - def-wolfe-and-strong-wolfe-conditions
  - cor-uniform-descent-angle-implies-gradient-vanishing
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3 §3.2, Theorem 3.2, and Chapter 5 §5.2, printed pp. 37–40 and 122–131; the exact safeguard theorem here is proved locally."
    - title: "Jean Charles Gilbert and Jorge Nocedal, Global Convergence Properties of Conjugate Gradient Methods for Optimization, SIAM Journal on Optimization 2(1), 21–42 (1992), DOI 10.1137/0802003"
      url: "https://who.rocq.inria.fr/Jean-Charles.Gilbert/preprint/06%2Bcg-convergence.pdf"
      locator: "§2, Theorem 2.1, and §4, printed pp. 23–34: Zoutendijk summability and nonnegative PR-type recurrences; the angle safeguard here is proved locally."
---

## Statement

Let $D,f,x_0,L_0,N,L$ satisfy the hypotheses of [[cor-uniform-descent-angle-implies-gradient-vanishing]]. Consider an infinite sequence following the PR+ coefficient recurrence and
candidate-or-restart direction selection of
[[alg-nonlinear-conjugate-gradient-methods]], with its fixed $\sigma,C>0$,
$d_0=-g_0$, every gradient nonzero, feasible updates
$x_{k+1}=x_k+t_kd_k$, and every $t_k$ a strong Wolfe step with
$0<c_1<c_2<1/2$. Then
$$ \|\nabla f(x_k)\|_2\longrightarrow0. $$
This claim concerns the infinite recurrence with successful updates at every
index, not an infinite execution of the finite-$K$ algorithm. Raw PR+ without the stated safeguard is not covered.

## Facts & Assumptions

**Given:** The smoothness and lower-bound hypotheses of [[cor-uniform-descent-angle-implies-gradient-vanishing]], an infinite successful safeguarded PR+ recurrence sequence, and $0<c_1<c_2<1/2$.

[F1] [[lem-safeguarded-pr-plus-uniform-angle]]: every nonzero safeguarded PR+ direction is descending and has $\cos\theta_k\ge\min\{1,\sigma/C\}>0$.

[F2] [[cor-uniform-descent-angle-implies-gradient-vanishing]]: under the stated lower-bound and Lipschitz-gradient hypotheses, Wolfe steps and a uniform positive descent-angle bound imply $\|\nabla f(x_k)\|_2\to0$.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 Set $\delta_{\rm PR}=\min\{1,\sigma/C\}>0$. By [F1], every search direction has descent-angle cosine at least $\delta_{\rm PR}$, including a direction reset to $-g_k$. [given, F1, algebra]

2.1 Strong Wolfe implies Wolfe by [[def-wolfe-and-strong-wolfe-conditions]]. All hypotheses of [F2] therefore hold with this $\delta_{\rm PR}$, and [F2] gives $\|\nabla f(x_k)\|_2\to0$. [given, F2, step 1.1] ∎
