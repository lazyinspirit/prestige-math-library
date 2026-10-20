---
id: ex-orthonormal-lasso-soft-thresholding
kind: example
title: An orthonormal design makes the Lasso threshold visible coordinate by coordinate
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [lem-orthonormal-lasso-soft-thresholding, thm-ols-and-ridge-solutions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, §3.4.1"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, §2.3"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Example

Let $n=p=2$, $X=I_2$, $y=(3,-1)^{\mathsf T}$, and use Lasso penalty $\lambda=1/2$. Under the empirical loss $\|y-X\beta\|_2^2/(2n)$, the unique Lasso minimizer is $(2,0)^{\mathsf T}$ because the threshold is $n\lambda=1$. OLS is $(3,-1)^{\mathsf T}$, and ridge with parameter $1$ is $(3/2,-1/2)^{\mathsf T}$.

## Example references

[The Elements of Statistical Learning, §3.4.1](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Rigollet and Hütter, §2.3](https://arxiv.org/pdf/2310.19244v1)

## Facts & Assumptions

**Given:** $n=p=2$, $X=I_2$, $y=(3,-1)^{\mathsf T}$, Lasso penalty $1/2$, and ridge parameter $1$.

[F1] On an orthonormal design, the Lasso minimizer is coordinatewise soft-thresholding at $n\lambda$ ([[lem-orthonormal-lasso-soft-thresholding]]).

[F2] OLS and ridge have the formulas stated in [[thm-ols-and-ridge-solutions]].

## Verification

1.1 Since $X^{\mathsf T}X=I_2$, OLS gives $X^{\mathsf T}y=(3,-1)^{\mathsf T}$, and the ridge formula with parameter $1$ gives $(I_2+I_2)^{-1}y=(3/2,-1/2)^{\mathsf T}$. [F2, given, algebra]

2.1 The Lasso threshold is $n\lambda=2(1/2)=1$. Applying [F1] gives $S_1(3)=2$ and $S_1(-1)=0$, hence $(2,0)^{\mathsf T}$. The equality case $|y_2|=n\lambda$ is assigned zero by the stated soft-threshold formula. [F1, given, algebra] ∎
