---
id: lem-score-means-as-threshold-rate-areas
kind: lemma
title: "Class-conditional mean risk scores are areas under threshold rates"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-group-risk-score-and-calibration
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Jon Kleinberg, Sendhil Mullainathan, and Manish Raghavan, Inherent Trade-Offs in the Fair Determination of Risk Scores, arXiv:1609.05807v2 (2016), §§1.1–2"
      url: "https://arxiv.org/pdf/1609.05807v2"
    - title: "Applied Statistics: From Data to Decisions, MS&E 125, Fairness in Algorithmic Decision-Making, section ‘The impossibility: you cannot satisfy them all’"
      url: "https://stanford-mse-125.github.io/book/lec20-fairness.html"
---

## Statement

Fix a group $t\in\{1,2\}$ with a finite joint law $\Pr_t$ for a binary outcome $Y\in\{0,1\}$ and a score $S$ taking finitely many values in $[0,1]$, and assume $\Pr_t(Y=1)>0$ and $\Pr_t(Y=0)>0$. For each threshold $u\in[0,1]$, define the true-positive rate $\operatorname{TPR}_t(u)=\Pr_t(S\ge u\mid Y=1)$ and the false-positive rate $\operatorname{FPR}_t(u)=\Pr_t(S\ge u\mid Y=0)$. These are finite step functions and
$$
\mathbb E_t[S\mid Y=1]=\int_0^1\operatorname{TPR}_t(u)\,du,\qquad \mathbb E_t[S\mid Y=0]=\int_0^1\operatorname{FPR}_t(u)\,du.
$$
The integrals are ordinary Riemann integrals of the finite step functions.

## Statement references

[[def-group-risk-score-and-calibration]]: provides the finite group-conditional law and the finite $[0,1]$-valued score used in this statement.

[Kleinberg, Mullainathan, and Raghavan, complete 23-page paper](https://arxiv.org/pdf/1609.05807v2): §§1.1–2 define groupwise positive/negative score means and use these class-conditioned score distributions in Theorem 1.1.

## Facts & Assumptions

**Given:** A group $t\in\{1,2\}$ in the finite-bin risk-score model. Write its distinct score values as $s_1,\ldots,s_m$; conditional on $Y=1$ let their probabilities be $w_j^+$, and conditional on $Y=0$ let them be $w_j^-$. Prove that each class-conditional mean score is the area under its corresponding threshold rate.

[F1] [[def-group-risk-score-and-calibration]]: the feature, outcome, bin, and score variables have a finite joint law in each group, and each score value lies in $[0,1]$.

## Proof

1.1 For each $j$, the threshold indicator is $\mathbf1_{[0,s_j]}(u)$. Hence $\operatorname{TPR}_t(u)=\sum_{j=1}^m w_j^+\mathbf1_{[0,s_j]}(u)$. Integrating this finite sum term by term gives $\int_0^1\operatorname{TPR}_t(u)\,du=\sum_{j=1}^m w_j^+s_j=\mathbb E_t[S\mid Y=1]$. [given, F1, algebra]

2.1 The same indicator calculation gives $\operatorname{FPR}_t(u)=\sum_{j=1}^m w_j^-\mathbf1_{[0,s_j]}(u)$ and $\int_0^1\operatorname{FPR}_t(u)\,du=\sum_{j=1}^m w_j^-s_j=\mathbb E_t[S\mid Y=0]$. [given, F1, algebra] ∎

## Remarks

The identity uses only finite support; no interchange theorem or choice principle is needed.
