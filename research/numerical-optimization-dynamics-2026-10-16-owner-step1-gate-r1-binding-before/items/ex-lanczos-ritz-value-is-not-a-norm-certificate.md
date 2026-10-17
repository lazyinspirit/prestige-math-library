---
id: ex-lanczos-ritz-value-is-not-a-norm-certificate
kind: example
title: "A Lanczos Ritz value can miss the operator norm"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
axiom_base: "No additional axiom; exact finite-dimensional real arithmetic."
deps:
  - def-krylov-subspace-of-a-matrix-and-start-vector
  - thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases
  - alg-pdhg-primal-dual-hybrid-gradient
  - def-induced-matrix-p-norm
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 6"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
---

## Statement

Let $K=\operatorname{diag}(1,2)$ and start exact symmetric Lanczos at the unit
vector $b=e_1=(1,0)^T$. Every Krylov space is $K_m(K,b)=\operatorname{span}\{e_1\}$,
so its only Ritz value is $1$, while the induced Euclidean operator norm is
$\|K\|_2=2$. The Ritz value from this start does not certify the PDHG upper
step-size bound.

## Facts & Assumptions

**Given:** The symmetric matrix $K$, start vector $b$, and definitions of Krylov space, Ritz value and induced matrix norm.

[A1] The matrix is symmetric, the start vector is $e_1$, and arithmetic is exact.


[F1] [[def-krylov-subspace-of-a-matrix-and-start-vector]]: $K_m(K,b)=\operatorname{span}\{b,Kb,\ldots,K^{m-1}b\}$.

[F2] [[thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases]]: if the starting vector has zero projection onto the top eigenspace, the largest Ritz value stays at most the next eigenvalue; no convergence to the top eigenvalue is asserted.

[F3] [[alg-pdhg-primal-dual-hybrid-gradient]]: PDHG requires a certified upper bound satisfying $\tau\sigma\|K\|_2^2<1$.

[F4] [[def-induced-matrix-p-norm]]: $\|K\|_2=\sup_{\|x\|_2\le1}\|Kx\|_2$.

## Proof


1.1 Since $Kb=e_1=b$, every power $K^j b=b$. Thus the spanning set in [F1] is always the single nonzero vector $e_1$, and the Rayleigh quotient on this one-dimensional subspace is $e_1^TKe_1/(e_1^Te_1)=1$. Exact Lanczos terminates after one vector with Ritz value $1$. [A1, F1, given, algebra]

2.1 For $x=(x_1,x_2)$, $\|Kx\|_2^2=x_1^2+4x_2^2\le4(x_1^2+x_2^2)$, with equality at $e_2$, so [F4] gives $\|K\|_2=2$. The top eigenspace is $\operatorname{span}\{e_2\}$ and $Pb=0$; [F2] identifies exactly this degenerate branch and supplies no top-eigenvalue convergence bound. Therefore the Ritz value $1$ is not the norm upper bound $2$ required by [F3]. [A1, F2, F3, F4, step 1.1, algebra] ∎
