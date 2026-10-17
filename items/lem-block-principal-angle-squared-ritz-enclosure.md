---
id: lem-block-principal-angle-squared-ritz-enclosure
kind: lemma
title: "A principal-angle bound encloses the largest selected generalized Ritz value across a spectral gap"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-b-inner-product-and-dual-norm-for-definite-pencil
  - thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis
  - lem-generalized-ritz-values-monotone-under-nested-subspaces
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§13.1 and 13.6"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "Andrew Knyazev, Recent implementations, applications, and extensions of LOBPCG, §1"
      url: "https://arxiv.org/pdf/1708.08354"
---

## Statement

Let $A=A^*\in\mathbb C^{n\times n}$, $B=B^*>0$, and
$\lambda_1\le\cdots\le\lambda_n$ be the generalized eigenvalues of $(A,B)$.
Fix $1\le q<n$ with the strict gap $\lambda_q<\lambda_{q+1}$ and let
$U=\operatorname{span}\{u_1,\ldots,u_q\}$ be the corresponding sum of the
first $q$ eigenspaces, with $(u_i)$ $B$-orthonormal. For a $q$-dimensional
trial subspace $S$ with $B$-orthonormal basis $Q$, define
$$P_Ux=\sum_{i=1}^q u_i(u_i^*Bx),\qquad \sin\vartheta=\sup_{\substack{x\in S\\\|x\|_B=1}}\|(I-P_U)x\|_B.$$
Let $\theta_1(S)\le\cdots\le\theta_q(S)$ be the generalized Ritz values
from [[lem-generalized-ritz-values-monotone-under-nested-subspaces]]. Then
$$\lambda_j\le\theta_j(S)\quad(1\le j\le q),\qquad \theta_q(S)\le\lambda_q+(\lambda_n-\lambda_q)\sin^2\vartheta.$$
The strict gap identifies $U$ uniquely; the estimate is a subspace enclosure,
not an iteration convergence rate.

## Facts & Assumptions

**Given:** A Hermitian-definite pair $(A,B)$, its ordered generalized
eigenvalues and $B$-orthonormal eigenbasis, the strict gap at $q$, and a
$q$-dimensional $B$-orthonormal trial basis $Q$ spanning $S$.

[F1] [[def-b-inner-product-and-dual-norm-for-definite-pencil]]: $\langle x,y\rangle_B=y^*Bx$ and $\|x\|_B^2=x^*Bx$.

[F2] [[thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis]]: $A$ and $B$ have a $B$-orthonormal generalized eigenbasis with real eigenvalues.

[L1] [[lem-generalized-ritz-values-monotone-under-nested-subspaces]]: each selected Ritz value is at least the corresponding ambient generalized eigenvalue, and Ritz values decrease when the trial subspace is enlarged.

## Proof

**Proof technique:** direct.

1.1 By [F2], write a B-unit vector $x\in S$ as $x=u+e$ with $u=P_Ux\in U$ and $e=(I-P_U)x\in U^{\perp_B}$. In the B-orthonormal generalized eigenbasis, if $x=\sum_i a_i u_i$, then $x^*Bx=\sum_i|a_i|^2$ and $x^*Ax=\sum_i\lambda_i|a_i|^2$. Thus $u^*Au\le\lambda_q u^*Bu$ and $e^*Ae\le\lambda_n e^*Be$; the cross terms vanish since $u_i^*Au_j=\lambda_j u_i^*Bu_j=0$ for $i\le q<j$. Therefore $x^*Ax/x^*Bx\le\lambda_q\|u\|_B^2+\lambda_n\|e\|_B^2=\lambda_q+(\lambda_n-\lambda_q)\|e\|_B^2$, which is at most the stated angle bound. [given, F1, F2, algebra]

2.1 Diagonalizing the finite Hermitian compression shows that $\theta_q(S)$ is the maximum Rayleigh quotient on $S$, so step 1.1 gives its upper bound. The lower bounds $\lambda_j\le\theta_j(S)$ are [L1]. The strict gap isolates the first q eigenspaces, so their sum is unique; no step asserts an iteration rate. [given, F2, L1, step 1.1, algebra] ∎
