---
id: thm-complete-separation-precludes-finite-logistic-mle
kind: theorem
title: Complete separation gives an unattained logistic likelihood supremum
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-binary-logistic-and-multiclass-softmax-models
  - def-binary-logistic-log-likelihood-and-l1-penalty
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Stanford CS229 Spring 2022 lecture notes"
      url: "https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf"
---

## Statement

Let $n,q\ge1$ be finite, let $x_i\in\mathbb R^q$ be a fixed design row with an intercept coordinate when one is used, and let $y_i\in\{0,1\}$. Suppose the unpenalized binary logistic log-likelihood is $\ell(\beta)=\sum_i[y_i x_i^T\beta-\log(1+e^{x_i^T\beta})]$. If there is a vector $v\in\mathbb R^q$ such that $(2y_i-1)x_i^Tv>0$ for every $i$, then $\sup_{\beta\in\mathbb R^q}\ell(\beta)=0$, and no finite coefficient vector attains this supremum.

## Statement references

[[def-binary-logistic-and-multiclass-softmax-models]]

[[def-binary-logistic-log-likelihood-and-l1-penalty]]

[Hastie, Tibshirani, and Friedman, ESL, §4.4.5 and Exercise 4.5](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** A finite fixed binary logistic data set with $n\ge1$, $y_i\in\{0,1\}$, the unpenalized log-likelihood, and a strict separating vector $v$ satisfying the signed-margin inequalities in the Statement.

[F1] The log-likelihood is the sum of the Bernoulli terms $y_i\eta_i-\log(1+e^{\eta_i})$ with $\eta_i=x_i^T\beta$. [[def-binary-logistic-log-likelihood-and-l1-penalty]]

[F2] At every finite coefficient vector, the binary conditional probability is strictly between zero and one. [[def-binary-logistic-and-multiclass-softmax-models]]

## Proof

1.1 Put $\beta(t)=tv$ for $t>0$. If $y_i=1$, the separation condition gives $a_i=x_i^Tv>0$ and the $i$th log-likelihood term is $-\log(1+e^{-ta_i})\to0$. If $y_i=0$, the condition gives $a_i=x_i^Tv<0$ and the term is $-\log(1+e^{ta_i})\to0$. Since the sample is finite, $\ell(\beta(t))\to0$, so the supremum is at least zero. [F1, given, construct, algebra]

2.1 For any finite $\beta$, each $\eta_i$ is finite and [F2] gives $0<p_i<1$. The observed Bernoulli log-probability is $\log p_i<0$ when $y_i=1$ and $\log(1-p_i)<0$ when $y_i=0$. As $n\ge1$, $\ell(\beta)<0$ for every finite $\beta$. Thus the supremum is at most zero and is attained by no finite coefficient vector; step 1.1 shows that it equals zero. [F2, given, step 1.1, algebra] ∎
