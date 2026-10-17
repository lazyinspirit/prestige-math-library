---
id: thm-fr-and-raw-prplus-exact-line-search-match-linear-cg
kind: theorem
title: "FR and unrestarted PR+ match linear CG on SPD quadratics"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-nonlinear-conjugate-gradient-methods
  - def-conjugate-gradient-recurrence
  - thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate
  - prop-conjugate-gradient-denominators-are-positive-before-convergence
  - def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - def-wolfe-and-strong-wolfe-conditions
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
      locator: "Chapter 5 §§5.1–5.2, printed pp. 102–107 and 121–124: linear CG recurrence, exact minimization, FR and PR formulas, and exact-quadratic relation."
    - title: "Jean Charles Gilbert and Jorge Nocedal, Global Convergence Properties of Conjugate Gradient Methods for Optimization, SIAM Journal on Optimization 2(1), 21–42 (1992), DOI 10.1137/0802003"
      url: "https://who.rocq.inria.fr/Jean-Charles.Gilbert/preprint/06%2Bcg-convergence.pdf"
      locator: "§1, printed pp. 21–22: nonlinear CG recurrence convention and reduction to linear CG for a strictly convex quadratic with exact one-dimensional minimization."
---

## Statement

Let $A\in\mathbb R^{n\times n}$ be symmetric positive definite, $b\in\mathbb R^n$, and
$$ f(x)=\tfrac12x^TAx-b^Tx,\qquad x\in\mathbb R^n. $$
In exact arithmetic, run the FR recurrence of [[alg-nonlinear-conjugate-gradient-methods]] with exact line minimization. Its iterates, residuals $r_k=b-Ax_k$, and directions coincide with the linear conjugate-gradient recurrence of [[def-conjugate-gradient-recurrence]] until the common zero-residual exit. The unrestarted raw PR+ recurrence has the same exact-line-search sequence; the safeguarded PR+ implementation has this equivalence only on runs where its safeguard does not restart. No such equivalence is asserted for non-SPD quadratics, inexact line searches, or finite-precision arithmetic.

## Facts & Assumptions

**Given:** The SPD quadratic, initial point, exact-arithmetic recurrence, and exact-line-search conditions in the Statement.

[F1] [[alg-nonlinear-conjugate-gradient-methods]]: the initial direction is $d_0=-g_0$.

[F5] [[alg-nonlinear-conjugate-gradient-methods]]: later directions use $d_k=-g_k+\beta_{k-1}d_{k-1}$; FR uses $\beta_{k-1}=\|g_k\|_2^2/\|g_{k-1}\|_2^2$ and raw PR+ uses $\max\{0,g_k^T(g_k-g_{k-1})/\|g_{k-1}\|_2^2\}$ before any safeguard reset.

[F2] [[def-conjugate-gradient-recurrence]]: linear CG uses $r_0=b-Ax_0$, $p_0=r_0$, $\alpha_k=(r_k^Tr_k)/(p_k^TAp_k)$, $r_{k+1}=r_k-\alpha_kAp_k$, $\beta_k=(r_{k+1}^Tr_{k+1})/(r_k^Tr_k)$, and $p_{k+1}=r_{k+1}+\beta_kp_k$.

[F3] [[thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate]]: in exact-arithmetic CG for Hermitian positive-definite $A$, distinct residuals are orthogonal.

[F4] [[prop-conjugate-gradient-denominators-are-positive-before-convergence]]: if $r_k\ne0$, then $p_k\ne0$ and $p_k^TAp_k>0$.

[F6] [[def-wolfe-and-strong-wolfe-conditions]]: strong Wolfe requires Armijo decrease and an absolute directional-derivative bound, with $0<c_1<c_2<1/2$.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 Differentiating the given quadratic gives $g_k=Ax_k-b=-r_k$. If $r_0=0$, both procedures are already at the common zero-residual exit. Otherwise, $d_0=-g_0=r_0=p_0\ne0$. [given, F1, algebra]

1.2 Assume inductively that the directions agree through index $k-1$, where $k\ge1$ and the run has not terminated. The preceding accepted step exactly minimizes the SPD quadratic along the common direction $d_{k-1}=p_{k-1}$. The derivative of its restricted quadratic vanishes at that positive minimizer, so $g_k^Td_{k-1}=0$ and therefore $r_k^Td_{k-1}=0$. [given, induction, algebra]

2.1 For the FR recurrence, $d_k=r_k+\beta_{k-1}d_{k-1}$ and $\beta_{k-1}=\|r_k\|_2^2/\|r_{k-1}\|_2^2$. For the raw PR+ recurrence, [F3] gives $r_k^Tr_{k-1}=0$, so $\beta_{k-1}^{\rm PR+} =\max\!\left\{0,\frac{r_k^T(r_k-r_{k-1})}{\|r_{k-1}\|_2^2}\right\} =\frac{\|r_k\|_2^2}{\|r_{k-1}\|_2^2} =\beta_{k-1}^{\rm FR}.$ Thus either unrestarted direction equals $r_k+\beta_{k-1}p_{k-1}$, the linear-CG direction, closing the induction step. A safeguarded PR+ direction also agrees whenever its safeguard does not restart. [F3, F5, step 1.2, induction, algebra]

3.1 For $k=0$, step 1.1 gives $d_k=p_k\ne0$; for $k\ge1$, step 2.1 gives the same equality. Then [F4] gives $p_k^TAp_k>0$. The restriction of $f$ to $x_k+td_k$ is $f(x_k+td_k)=f(x_k)+t\,g_k^Td_k+\tfrac12t^2d_k^TAd_k.$ Its unique minimizer is $t_k=-g_k^Td_k/(d_k^TAd_k)>0$. For $k=0$, $r_0^Td_0=\|r_0\|_2^2$ by step 1.1. For $k\ge1$, step 1.2 and the recurrence give $r_k^Td_k=\|r_k\|_2^2$. Therefore this is $t_k=\frac{r_k^Tr_k}{p_k^TAp_k}=\alpha_k$ from [F2]. At this minimizer, $\phi'(t_k)=g_k^Td_k+t_kd_k^TAd_k=0$, so the strong curvature test holds. Also
$\phi(t_k)=\phi(0)+\tfrac12t_k g_k^Td_k\le\phi(0)+c_1t_k g_k^Td_k$
because $t_k g_k^Td_k<0$ and $c_1<1/2$. Thus [F6] and the exact-model branch accept this step; the same calculation applies at every preceding common minimizer invoked in step 1.2, starting with step 1.1, so the induction uses actual accepted steps. Hence the next iterates and residuals agree. [given, F2, F4, F6, step 1.1, step 1.2, step 2.1, algebra]

4.1 After the common step, $r_{k+1}=b-Ax_{k+1}$ is the CG residual and $g_{k+1}=-r_{k+1}$ by step 1.1. If $r_{k+1}=0$, both methods stop at the common exit. Otherwise the FR coefficient equals $\|r_{k+1}\|_2^2/\|r_k\|_2^2$, and the raw PR+ coefficient again equals it by [F3] and [F5]. Thus the next direction also agrees; induction continues until zero residual. [F2, F3, F5, step 1.1, step 3.1, induction] ∎
