---
id: thm-gapped-response-projector-lipschitz-certificate
kind: theorem
title: A common separating resolvent contour certifies a Lipschitz response map
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, lem-spectral-gap-persistence-and-uniform-resolvent-bound, thm-block-projector-frechet-derivative-and-bound, def-matrix-product-and-identity-matrix, def-complex-line-integral-over-a-rectifiable-path, prop-linearity-of-complex-line-integrals, thm-existence-of-complex-line-integrals-on-rectifiable-paths, def-operator-norm-on-a-finite-dimensional-inner-product-space, def-frobenius-matrix-norm, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Tosio Kato, Perturbation Theory for Linear Operators, 2nd ed., Chapter II §1.3–§1.4
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §3.2
      url: https://arxiv.org/pdf/2004.09088
verification:
  precheck: pending
---

## Statement

Let $K\subseteq U$ be a set of Hermitian inputs and suppose $F:K\to\mathbb H_n$ is
$L_F$-Lipschitz in Frobenius norm. Assume that for some Hermitian $H_0$ with
occupied gap $g>0$, every $F(X)$ lies in the open operator-norm ball of radius
$g/4$ about $H_0$. Use the common circle $\Gamma$ of
[[lem-spectral-gap-persistence-and-uniform-resolvent-bound]], with
$R=(\lambda_r(H_0)+\lambda_{r+1}(H_0))/2-\lambda_1(H_0)$. Then
$$\|\Phi(X)-\Phi(Y)\|_F\le q\|X-Y\|_F,\qquad q:=\frac{16R}{g^2}L_F.$$
Thus $q<1$ is a checkable contraction certificate when also $\Phi(K)\subseteq K$;
a positive gap by itself does not establish that inequality.

## Facts & Assumptions
**Given:** A set $K\subseteq U$, a map $F:K\to\mathbb H_n$, a Lipschitz constant $L_F\ge0$, and a Hermitian reference matrix $H_0$ with gap $g>0$ such that $\|F(X)-H_0\|_{op}<g/4$ for every $X\in K$.

[F1] The occupied projector $\Phi(X)$ is the rank-$r$ spectral projector of $F(X)$ ([[def-self-consistent-projector-response-map]]).

[F2] The same contour separates all matrices in the stated ball and has resolvent bound $4/g$ ([[lem-spectral-gap-persistence-and-uniform-resolvent-bound]]).

[F3] The block projector equals its contour integral and its derivative uses the same uniform resolvent bound ([[thm-block-projector-frechet-derivative-and-bound]]).

[F4] The operator norm is bounded by the Frobenius norm; both norms are defined on finite matrices ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[def-frobenius-matrix-norm]], [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F5] The contour line integral exists for continuous integrands, is linear, and satisfies the triangle inequality ([[def-complex-line-integral-over-a-rectifiable-path]], [[thm-existence-of-complex-line-integrals-on-rectifiable-paths]], [[prop-linearity-of-complex-line-integrals]]).

[L1] A strict gap makes the rank-$r$ occupied projector unique ([[lem-gapped-projector-map-well-defined]]).

## Proof


1.1 For $X,Y\in K$, set $H_X=F(X)$ and $H_Y=F(Y)$. By [F1] and [F3], the common-contour formula and inverse identity give, pointwise on $\Gamma$, $R_{H_X}(z)-R_{H_Y}(z)=R_{H_X}(z)(H_X-H_Y)R_{H_Y}(z).$ Integrating entrywise and using [F5] yields $\Phi(X)-\Phi(Y)=\frac1{2\pi i}\int_\Gamma R_{H_X}(z)(H_X-H_Y)R_{H_Y}(z)\,dz.$ [F1, F2, F3, F5, L1, given, algebra]

2.1 Each resolvent in step 1.1 has operator norm at most $4/g$ by [F2]. For matrices $A,X$, writing $X$ by columns gives $\|AX\|_F^2\le\|A\|_{op}^2\|X\|_F^2$; applying this to adjoints and using [F4] gives $\|AXB\|_F\le\|A\|_{op}\|X\|_F\|B\|_{op}$. Thus the Frobenius norm of the integrand in step 1.1 is at most $(4/g)^2\|F(X)-F(Y)\|_F$. The contour has length $2\pi R$, so [F5]'s line-integral triangle inequality gives $\|\Phi(X)-\Phi(Y)\|_F\le R(4/g)^2\|F(X)-F(Y)\|_F.$ [step 1.1, F2, F4, F5, algebra]

3.1 Substituting $\|F(X)-F(Y)\|_F\le L_F\|X-Y\|_F$ into step 2.1 gives the stated factor $q=16RL_F/g^2$. If $q<1$ and $\Phi(K)\subseteq K$, this is exactly the contraction condition on $K$. [step 2.1, given, algebra] ∎
