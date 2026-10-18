---
id: lem-square-root-kalman-schur-perturbation-bound
kind: lemma
title: "Innovation, gain, and posterior errors follow from joint covariance perturbations"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4, §4.3, equations (4.27)–(4.29), innovation and Schur-complement update"
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§3.2, innovation factor and triangular solve for the gain"
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "Chapter 3, §§3.3.1 and 3.5.2, measurement update and gain/estimate caveat"
verification:
  precheck: pending
---

## Statement

Let $S=S^T\in\mathbb R^{p\times p}$ satisfy
$x^TSx\ge\mu\|x\|_2^2$ for all $x\in\mathbb R^p$, with $\mu>0$.
Let $B\in\mathbb R^{n\times p}$, $D=D^T\in\mathbb R^{n\times n}$, and
let symmetric $E_S$ and matrices $E_B,E_D$ satisfy
$$\|E_S\|_F\le e_S<\mu,\qquad \|E_B\|_F\le e_B,\qquad \|E_D\|_F\le e_D.$$
Put $\widehat S=S+E_S$, $\widehat B=B+E_B$,
$\widehat D=D+E_D$, $\Phi=D-BS^{-1}B^T$, and
$\widehat\Phi=\widehat D-\widehat B\widehat S^{-1}\widehat B^T$.
If $b\ge\|B\|_2$, define $\beta=(\mu-e_S)^{-1}$. Then
$\widehat S\succeq(\mu-e_S)I\succ0$ and
$$\|\widehat S^{-1}\|_2\le\beta,\qquad \|\widehat S^{-1}-S^{-1}\|_2\le\mu^{-1}\beta e_S,$$
$$\|\widehat B\widehat S^{-1}-BS^{-1}\|_2 \le e_B\beta+b\mu^{-1}\beta e_S,$$
and
$$\|\widehat\Phi-\Phi\|_2 \le e_D+2b e_B\beta+b^2\mu^{-1}\beta e_S+e_B^2\beta.$$

## Facts & Assumptions

**Given:** The symmetric matrices, the lower bound $\mu$, the perturbation
bounds, and the finite-dimensional real operator and Frobenius norms.

[F1] The operator norm is the maximum Euclidean stretch of a unit vector.
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[F2] Compatible operator norms are submultiplicative.
[[cor-operator-norm-submultiplicative-and-t-star-t-identity]]

[F3] The operator norm is the largest singular value and is at most the
Frobenius norm. [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For every $x$, [F3] and Cauchy–Schwarz give $$x^T\widehat Sx=x^TSx+x^TE_Sx \ge(\mu-e_S)\|x\|_2^2.$$ Thus $\widehat S$ is positive definite. Also $\|S^{-1}\|_2\le\mu^{-1}$ and $\|\widehat S^{-1}\|_2\le(\mu-e_S)^{-1}=\beta$: if $y=Sx$ (or $y=\widehat Sx$), then $\|x\|_2\|y\|_2\ge x^Ty$ and the corresponding quadratic lower bound gives the stated inverse estimate. [F1, F3, given, algebra]

1.2 The resolvent identity is $$\widehat S^{-1}-S^{-1}=-S^{-1}E_S\widehat S^{-1}.$$ Using [F2] and step 1.1 gives $\|\widehat S^{-1}-S^{-1}\|_2\le\mu^{-1}e_S\beta$. [F2, step 1.1, algebra]

2.1 Splitting the gain difference yields $$\widehat B\widehat S^{-1}-BS^{-1} =E_B\widehat S^{-1}+B(\widehat S^{-1}-S^{-1}).$$ The operator norm is bounded by the Frobenius norm for $E_B$, so [F2] and steps 1.1–1.2 imply the displayed gain bound. [F2, F3, step 1.1, step 1.2, algebra]

2.2 Expanding the Schur difference gives $$\widehat\Phi-\Phi=E_D-E_B\widehat S^{-1}B^T -B\widehat S^{-1}E_B^T -B(\widehat S^{-1}-S^{-1})B^T -E_B\widehat S^{-1}E_B^T.$$ Apply the triangle inequality, [F2], the Frobenius-to-operator bound [F3], and the inverse estimates of steps 1.1–1.2. The five terms are bounded by $e_D$, $e_B\beta b$, $b\beta e_B$, $b^2\mu^{-1}\beta e_S$, and $e_B^2\beta$, respectively, which proves the stated posterior bound. [F2, F3, step 1.1, step 1.2, algebra] ∎

