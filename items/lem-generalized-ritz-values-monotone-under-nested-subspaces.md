---
id: lem-generalized-ritz-values-monotone-under-nested-subspaces
kind: lemma
title: "Generalized Ritz values obey min-max bounds and are monotone under trial-space inclusion"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-b-inner-product-and-dual-norm-for-definite-pencil
  - thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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

Let $A=A^*\in\mathbb C^{n\times n}$ and $B=B^*>0$. Write the generalized
eigenvalues of $(A,B)$ in increasing order
$\lambda_1\le\cdots\le\lambda_n$. For a subspace $S$ with a full-column-rank
$B$-orthonormal basis matrix $Q_S$, let
$\theta_1(S)\le\cdots\le\theta_{\dim S}(S)$ be the eigenvalues of
$Q_S^*AQ_S$. These values are independent of the chosen $B$-orthonormal basis.
Then, for $1\le j\le\dim S$,
$$\lambda_j\le\theta_j(S).$$
If $S\subseteq T$ and $j\le\dim S$, then
$$\theta_j(T)\le\theta_j(S).$$

## Facts & Assumptions

**Given:** A Hermitian matrix $A$, a Hermitian positive-definite matrix $B$,
and full-column-rank $B$-orthonormal basis matrices for the stated subspaces.

[F1] [[def-b-inner-product-and-dual-norm-for-definite-pencil]]: $\langle x,y\rangle_B=y^*Bx$ and $\|x\|_B^2=x^*Bx$.

[F2] [[thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis]]: a Hermitian-definite pair $(A,B)$ has real generalized eigenvalues and a $B$-orthonormal eigenbasis.

## Proof

**Proof technique:** direct.

1.1 For $Q_S$, the compression $H_S=Q_S^*AQ_S$ is Hermitian. Diagonalize it with an orthonormal eigenbasis $z_1,\ldots,z_s$ and ordered eigenvalues $\theta_1(S)\le\cdots\le\theta_s(S)$; the vectors $Q_Sz_i$ are B-orthonormal and every Rayleigh quotient on $S$ is their weighted average. Any j-dimensional $W\subseteq S$ intersects $\operatorname{span}(Q_Sz_j,\ldots,Q_Sz_s)$ nontrivially by dimension count, so its maximum quotient is at least $\theta_j(S)$; equality is attained on $\operatorname{span}(Q_Sz_1,\ldots,Q_Sz_j)$. This proves the min-max formula, and a unitary change between B-orthonormal bases conjugates the compression, proving basis invariance. [F1, F2, algebra]

2.1 Let $u_1,\ldots,u_n$ be the ambient B-orthonormal generalized eigenbasis from [F2], ordered by $\lambda_i$. Any j-dimensional $W\subseteq S$ intersects $\operatorname{span}(u_j,\ldots,u_n)$ nontrivially, again by dimension count. The quotient of a nonzero vector in that span is a weighted average of $\lambda_j,\ldots,\lambda_n$ and is at least $\lambda_j$; the min-max formula from step 1.1 gives $\theta_j(S)\ge\lambda_j$. [F1, F2, step 1.1, algebra]

3.1 If $S\subseteq T$, every j-dimensional subspace considered for $\theta_j(S)$ is also available for $\theta_j(T)$. The minimum over the larger family therefore cannot be greater, so $\theta_j(T)\le\theta_j(S)$. [step 1.1, algebra] ∎
