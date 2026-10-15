---
id: thm-known-covariance-gls-is-blue
kind: theorem
title: "Known-covariance GLS is BLUE"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-linear-mixed-model
  - lem-marginal-covariance-of-linear-mixed-model
  - def-fixed-design-linear-regression-model
  - def-known-covariance-generalized-least-squares-estimator
  - thm-gauss-markov-for-fixed-design-regression
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-covariance-bilinearity-and-symmetry
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 2: Two Solutions—GLS and Cluster-Robust Standard Errors, PDF pp. 1–2"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lecture2_GLS_and_ClusterRobustSE.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.5.1"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

Let the linear mixed model have fixed design $X\in\mathbb R^{n\times p}$ of full column rank and known marginal covariance $V=\operatorname{Cov}(Y)\succ0$. Then
$$\widehat\beta_{\mathrm{GLS}}=(X^TV^{-1}X)^{-1}X^TV^{-1}Y$$
is unbiased for $\beta$, has covariance $(X^TV^{-1}X)^{-1}$, and is BLUE: for every linear unbiased estimator $\widetilde\beta$ and every $c\in\mathbb R^p$,
$$\operatorname{Var}(c^T\widehat\beta_{\mathrm{GLS}})\le \operatorname{Var}(c^T\widetilde\beta).$$
Only the fixed-design mean and covariance are used; Gaussianity is not assumed.

## Facts & Assumptions

**Given:** The fixed-design mixed model, full-column-rank $X$, known $V\succ0$, and the estimator defined in [[def-known-covariance-generalized-least-squares-estimator]].

[F1] The fixed-design mean is $\mathbb E_\beta Y=X\beta$. [[def-fixed-design-linear-regression-model]].

[F2] The marginal covariance in the moment model is $V=ZGZ^T+R=\operatorname{Cov}(Y)$. [[lem-marginal-covariance-of-linear-mixed-model]].

[F3] A positive-definite $V$ has a Cholesky factorization $V=LL^T$ with $L$ invertible. [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]].

[F4] In a full-rank fixed-design model with covariance $\sigma^2 I$ for $\sigma^2>0$, OLS is unbiased and BLUE for every estimable contrast, without Gaussianity. [[thm-gauss-markov-for-fixed-design-regression]].

[F5] Covariance is bilinear in finite linear combinations. [[thm-covariance-bilinearity-and-symmetry]].

[F6] Expectation is linear on finite sums of integrable random variables. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F7] Finite-dimensional linear maps are continuous and preserve Borel measurability of random vectors. [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[thm-continuous-preimages-of-borel-sets-are-borel]].

[A1] $X$ has full column rank, and $V$ is the same known symmetric positive-definite covariance under each $P_\beta$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Choose $L$ from [F3] and set $\widetilde Y=L^{-1}Y$ and $\widetilde X=L^{-1}X$. The transformed response is Borel by [F7]. Linearity [F6] and [F1] give $\mathbb E_\beta\widetilde Y=\widetilde X\beta$, and covariance bilinearity [F5] with [F2] gives $\operatorname{Cov}_\beta(\widetilde Y)=L^{-1}V L^{-T}=I_n$. Since $L$ is invertible, $\widetilde X$ has full column rank. [A1, F1, F2, F3, F5, F6, F7, algebra]

2.1 OLS on the transformed model is $(\widetilde X^T\widetilde X)^{-1}\widetilde X^T\widetilde Y =(X^TV^{-1}X)^{-1}X^TV^{-1}Y =\widehat\beta_{\mathrm{GLS}},$ because $L^{-T}L^{-1}=V^{-1}$. The transformed model meets every hypothesis of [F4], so this estimator is unbiased and each of its linear contrasts has minimum variance among linear unbiased contrasts. [A1, F3, F4, step 1.1, algebra]

2.2 Put $C=(X^TV^{-1}X)^{-1}$ and $A=CX^TV^{-1}$. Then $AX=I_p$, so linearity [F6] and [F1] give $\mathbb E_\beta[A Y]=\beta$. By [F5] and [F2], $\operatorname{Cov}_\beta(A Y)=A V A^T =CX^TV^{-1}V V^{-1}XC =C.$ Here $C$ is symmetric because $X^TV^{-1}X$ is symmetric positive definite. [F1, F2, F5, F6, step 1.1, algebra]

3.1 Let $\widetilde\beta$ be any linear unbiased estimator. For each $c$, $c^T\widetilde\beta$ is a linear unbiased estimator of $c^T\beta$ in the transformed model of step 1.1. By [F4] and step 2.1 its variance is at least that of $c^T\widehat\beta_{\mathrm{GLS}}$. This holds for every $c\in\mathbb R^p$, so the covariance difference is positive semidefinite and GLS is BLUE. [F4, step 1.1, step 2.1, step 2.2] ∎