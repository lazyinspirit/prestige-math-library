---
id: ex-beta-min-below-lasso-threshold-loses-support
kind: example
title: A coefficient below the orthonormal Lasso threshold is set to zero
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [lem-orthonormal-lasso-soft-thresholding]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, §3.4.1"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, §2.3"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Example

For the one-dimensional fixed design $n=p=1$, $X=[1]$, response $y=\beta^*=1/4$, and Lasso penalty $\lambda=1/2$, the true support is $\{1\}$ but the unique Lasso minimizer is $0$. This is a deterministic example with no observation noise; it asserts no random-design probability result.

## Example references

[The Elements of Statistical Learning, §3.4.1](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Rigollet and Hütter, §2.3](https://arxiv.org/pdf/2310.19244v1)

## Facts & Assumptions

**Given:** $n=p=1$, $X=[1]$, $y=\beta^*=1/4$, no noise, and $\lambda=1/2$.

[F1] The orthonormal-design Lasso minimizer is soft-thresholding at $n\lambda$ ([[lem-orthonormal-lasso-soft-thresholding]]).

## Verification

1.1 Here $X^{\mathsf T}X=1$, $n\lambda=1/2$, and $|X^{\mathsf T}y|=1/4<1/2$. Therefore $S_{1/2}(1/4)=0$ by [F1]. [F1, given, algebra]

2.1 The true coefficient is nonzero, so its support is $\{1\}$, whereas the estimated coefficient is zero and its support is empty. Thus this choice of penalty misses the support when the coefficient is below the threshold. [step 1.1, given, algebra] ∎
