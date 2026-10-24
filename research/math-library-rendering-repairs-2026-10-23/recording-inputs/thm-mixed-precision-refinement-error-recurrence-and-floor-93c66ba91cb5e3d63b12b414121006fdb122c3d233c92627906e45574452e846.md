---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-mixed-precision-refinement-error-recurrence-and-floor.json
  precheck: pass
id: thm-mixed-precision-refinement-error-recurrence-and-floor
kind: theorem
title: "Mixed-precision refinement has an error recurrence and a finite precision floor"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-bounded-mixed-precision-iterative-refinement
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
    - title: "Higham and Mary, Mixed Precision Algorithms in Numerical Linear Algebra"
      url: https://eprints.maths.manchester.ac.uk/2841/1/paper_eprint.pdf
---

## Statement

Let $A$ be nonsingular, $Ax_*=b$, $\widehat A$ nonsingular, and $e_k=x_*-x_k$. Suppose the successful refinement algorithm has $\widehat r_k=Ae_k+\delta_{r,k}$ with $\|\delta_{r,k}\|_2\le\eta_r(\|A\|_2\|x_k\|_2+\|b\|_2)+\xi_r$ and combined solve/update residual-equivalent error $\|\delta_{w,k}\|_2\le\eta_w\|\widehat r_k\|_2+\xi_w$. Set
$$\rho_0=\xi_r+\eta_r(\|A\|_2\|x_*\|_2+\|b\|_2),$$
$$q=\|I-\widehat A^{-1}A\|_2+\|\widehat A^{-1}\|_2((1+\eta_w)\eta_r+\eta_w)\|A\|_2,$$
$$\eta=\|\widehat A^{-1}\|_2((1+\eta_w)\rho_0+\xi_w).$$
Then $e_{k+1}=(I-\widehat A^{-1}A)e_k-\widehat A^{-1}(\delta_{r,k}+\delta_{w,k})$. If $q<1$ then $\|e_k\|_2\le q^k\|e_0\|_2+\eta(1-q^k)/(1-q)$ for every executed $k\le N$. The precision floor is $\eta/(1-q)$; this is conditional and does not promise exact termination.

## Facts & Assumptions
**Given:** residual and combined solve/update certificates at distinct precisions $u_r$, $u_f$, and $u_w$.

[F1] [[alg-bounded-mixed-precision-iterative-refinement]]: residual, factorization, and update precisions are distinct; the algorithm represents solve/update error by $\delta_w$ and fails inconclusively on missing certificates.

[F2] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized|Induced matrix norms are compatible with matrix-vector multiplication, submultiplicative, and satisfy $\|I\| = 1$]]: the induced norm is compatible with matrix-vector products.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: the finite-dimensional spectral norm is the operator norm used in the estimates.

## Proof

1.1 By the residual-equivalent update certificate, $e_{k+1}=e_k-\widehat A^{-1}(\widehat r_k+\delta_{w,k})$. Substituting $\widehat r_k=Ae_k+\delta_{r,k}$ gives the exact recurrence. [given, F1, algebra]

2.1 Since $\|x_k\|_2\le\|x_*\|_2+\|e_k\|_2$, the residual certificate yields $\|\delta_{r,k}\|_2\le\eta_r\|A\|_2\|e_k\|_2+\rho_0$ and $\|\widehat r_k\|_2\le (1+\eta_r)\|A\|_2\|e_k\|_2+\rho_0$. Therefore $\|\delta_{w,k}\|_2\le\eta_w(1+\eta_r)\|A\|_2\|e_k\|_2+\eta_w\rho_0+\xi_w$. [step 1.1, F1, F2, F3, algebra]

3.1 Apply compatibility and the triangle inequality to the recurrence. The error coefficient is $q$ because $\eta_r+\eta_w(1+\eta_r)=(1+\eta_w)\eta_r+\eta_w$; the additive term is $\eta$. Thus $\|e_{k+1}\|_2\le q\|e_k\|_2+\eta$. [step 1.1, step 2.1, F2, algebra]

4.1 If $q<1$, induction gives $\|e_k\|_2\le q^k\|e_0\|_2+\eta\sum_{j=0}^{k-1}q^j$. The finite geometric sum is $(1-q^k)/(1-q)$, proving the assertion. [step 3.1, induction, algebra] ∎