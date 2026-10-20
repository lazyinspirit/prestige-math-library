---
id: ex-separated-logistic-sample-has-unattained-supremum
kind: example
title: A strictly separated two-point sample has an unattained logistic likelihood supremum
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - thm-complete-separation-precludes-finite-logistic-mle
  - def-binary-logistic-log-likelihood-and-l1-penalty
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
---

## Example

Take two one-dimensional observations $(x_1,y_1)=(-1,0)$ and $(x_2,y_2)=(1,1)$ with an intercept in the design. The augmented rows are $(1,-1)$ and $(1,1)$, and the vector $(0,1)$ strictly separates them. Along coefficients $\beta(t)=(0,t)$ with $t>0$, the log-likelihood is $-2\log(1+e^{-t})$, which tends to zero while remaining negative for every finite $t$. The sample therefore has an unattained supremum at zero.

## Example references

[[thm-complete-separation-precludes-finite-logistic-mle]]

[[def-binary-logistic-log-likelihood-and-l1-penalty]]

[Hastie, Tibshirani, and Friedman, ESL, §4.4.5 and Exercise 4.5](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** The two observations and the unpenalized binary logistic model with an intercept.

[F1] The log-likelihood is $\sum_i[y_i\eta_i-\log(1+e^{\eta_i})]$, where $\eta_i=x_i^T\beta$. [[def-binary-logistic-log-likelihood-and-l1-penalty]]

[F2] Strict separation of this finite design implies a zero supremum that no finite coefficient attains. [[thm-complete-separation-precludes-finite-logistic-mle]]

## Verification

1.1 For $v=(0,1)$, the signed margins are $(2y_1-1)(1,-1)^Tv=(-1)(-1)=1$ and $(2y_2-1)(1,1)^Tv=(1)(1)=1$. Hence the sample is strictly separated. [given, construct, algebra]

2.1 With $\beta(t)=(0,t)$, the two predictors are $-t$ and $t$. By [F1], the two log-likelihood terms are each $-\log(1+e^{-t})$, so $\ell(\beta(t))=-2\log(1+e^{-t})\to0$. Every finite coefficient has likelihood strictly below zero by [F2]; hence this is an unattained supremum. [F1, F2, step 1.1, algebra] ∎
