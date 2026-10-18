---
id: thm-gapped-response-projector-lipschitz-certificate
kind: theorem
title: A common separating resolvent contour certifies a Lipschitz response map
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, lem-spectral-gap-persistence-and-uniform-resolvent-bound, thm-block-projector-frechet-derivative-and-bound, def-operator-norm-on-a-finite-dimensional-inner-product-space, def-frobenius-matrix-norm, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, cor-vector-valued-ftc-and-lipschitz-bound]
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

[F3] On the open operator-norm ball of radius $g/4$ about $H_0$, the occupied block projector $\Pi_r$ is real Frechet $C^1$ and $\|D\Pi_r(H)[E]\|_F\le(16R/g^2)\|E\|_F$ for every Hermitian $E$ ([[thm-block-projector-frechet-derivative-and-bound]]).

[F4] The operator norm is bounded by the Frobenius norm; both norms are defined on finite matrices ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[def-frobenius-matrix-norm]], [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F5] A continuous path $h:[0,1]\to\mathbb R^m$ that is differentiable on $(0,1)$ with $\|h'(t)\|_2\le M$ satisfies $\|h(1)-h(0)\|_2\le M$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[L1] A strict gap makes the rank-$r$ occupied projector unique ([[lem-gapped-projector-map-well-defined]]).

## Proof

1.1 For $X,Y\in K$, set $H_X=F(X)$, $H_Y=F(Y)$, $\Delta=H_X-H_Y$, and $H(t)=(1-t)H_Y+tH_X$. For $0\le t\le1$, the operator-norm triangle inequality gives $\|H(t)-H_0\|_{op}\le(1-t)\|H_Y-H_0\|_{op}+t\|H_X-H_0\|_{op}<g/4$. Thus the whole matrix segment lies in the open ball of [F3], even when $K$ is not convex. By [F2] and [L1] its occupied projector is well-defined, and by [F1] the path $h(t)=\Pi_r(H(t))$ has endpoints $h(0)=\Phi(Y)$ and $h(1)=\Phi(X)$. [given, F1, F2, F3, L1, algebra]

2.1 The path $h$ is continuous on $[0,1]$ by [F3]. At each $t\in(0,1)$, the Frechet expansion in the direction $\Delta$ gives $h(t+s)-h(t)=sD\Pi_r(H(t))[\Delta]+o(|s|)$, so $h'(t)=D\Pi_r(H(t))[\Delta]$; if $\Delta=0$, the path is constant and this identity still holds. By [F3], $\|h'(t)\|_F\le(16R/g^2)\|F(X)-F(Y)\|_F$. Listing the real and imaginary parts of all matrix entries identifies the Frobenius norm with the Euclidean norm on $\mathbb R^{2n^2}$ by [F4], so [F5] applies to this path with precisely that bound. [step 1.1, F3, F4, F5, algebra]

3.1 By [F5] and the endpoint identities from step 1.1, $\|\Phi(X)-\Phi(Y)\|_F\le(16R/g^2)\|F(X)-F(Y)\|_F\le(16RL_F/g^2)\|X-Y\|_F$. This is the asserted estimate with $q=16RL_F/g^2$. If $q<1$ and $\Phi(K)\subseteq K$, it is exactly the contraction condition on $K$. [step 1.1, step 2.1, F5, given, algebra] ∎
