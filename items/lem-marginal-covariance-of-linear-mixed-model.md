---
id: lem-marginal-covariance-of-linear-mixed-model
kind: lemma
title: "Marginal covariance of the linear mixed model"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-linear-mixed-model
  - def-moments-variance-and-covariance
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-covariance-bilinearity-and-symmetry
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
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
    - title: "Fan Li, STA610 Lecture 6: Linear Mixed-Effects Models, PDF pp. 8–9"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.4.1"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

For the moment model $Y=X\beta+Zb+\varepsilon$ of [[def-linear-mixed-model]], the marginal covariance is
$$\operatorname{Cov}(Y)=V:=ZGZ^T+R.$$
This identity uses only the stated means, covariances, and independence; it does not require Gaussianity.

## Facts & Assumptions

**Given:** The finite-dimensional linear mixed model and its finite second moments.

[F1] $Y=X\beta+Zb+\varepsilon$, $\mathbb E b=\mathbb E\varepsilon=0$, $\operatorname{Cov}(b)=G$, $\operatorname{Cov}(\varepsilon)=R$, and $b$ and $\varepsilon$ are independent. [[def-linear-mixed-model]].

[F2] Covariance is bilinear in finite linear combinations of square-integrable real random variables. [[thm-covariance-bilinearity-and-symmetry]].

[F3] Measurable coordinate functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]].

[F4] Expectations of products of independent integrable real random variables factor. [[thm-factorization-of-expectations-for-independent-variables]].

[F5] Expectation is linear on finite sums of integrable real random variables. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

## Proof

**Given:** A fixed $\beta$, finite matrices $X,Z$, and random vectors $b,\varepsilon$ satisfying [F1].

1.1 Since $\mathbb E b=\mathbb E\varepsilon=0$, linearity [F5] gives $\mathbb E Y=X\beta$ and $Y-\mathbb E Y=Zb+\varepsilon$. [F1, F5, algebra]

2.1 By [F2], each covariance entry of $Zb+\varepsilon$ is the sum of the entries from $Zb$ and $\varepsilon$ and the two cross-covariance entries. The first two matrices are $ZGZ^T$ and $R$ by [F1] and finite matrix multiplication. [F1, F2, step 1.1, algebra]

3.1 For each coordinate pair $b_k,\varepsilon_\ell$, [F3] gives independence and [F4] gives $\mathbb E[b_k\varepsilon_\ell]=\mathbb E[b_k]\mathbb E[\varepsilon_\ell]=0$. Both means vanish by [F1], so every cross-covariance entry is zero. The remaining covariance matrix is therefore $ZGZ^T+R$. [F1, F2, F3, F4, step 2.1, algebra] ∎