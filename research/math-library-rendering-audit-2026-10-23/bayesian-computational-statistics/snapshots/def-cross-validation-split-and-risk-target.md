---
id: def-cross-validation-split-and-risk-target
kind: definition
title: "Cross-validation splits and training-size risk targets"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-statistic-and-estimator
  - def-loss-function-and-risk
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §§2–8, author version arXiv:0907.4728"
      url: "https://arxiv.org/pdf/0907.4728"
    - title: "Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani, An Introduction to Statistical Learning, 7th printing, Chapter 5 §§5.1.1–5.1.4"
      url: "https://www.statlearning.com/s/ISLR-Seventh-Printing.pdf"
    - title: "Yoshua Bengio and Yves Grandvalet, No Unbiased Estimator of the Variance of K-Fold Cross-Validation, JMLR 5 (2004), §§2–3"
      url: "https://jmlr.org/papers/volume5/grandvalet04a/grandvalet04a.pdf"
---

## Definition

Let $(\mathcal Z,\mathcal F)$ be a measurable sample space with probability law $P$. For each training size $k\ge1$, a learning rule is a measurable map $A_k:\mathcal Z^k\to(\mathcal H,\mathcal G)$, where $(\mathcal H,\mathcal G)$ is a measurable predictor space. This is a statistic in the sense of [[def-statistic-and-estimator]]. Let $L:\mathcal H\times\mathcal Z\to\mathbb R$ be jointly measurable and assume $L(A_k(Z_1,\ldots,Z_k),Z_{k+1})$ is integrable under $P^{\otimes(k+1)}$ for every size used. The convention that risk is expected loss agrees with [[def-loss-function-and-risk]] for nonnegative losses; the integrable real-valued case is used here as well. The product law is the joint law of independent observations by [[thm-independent-random-elements-have-product-joint-law]].

The **risk at training size $k$** is

$$R_k:=\mathbb E_{P^{\otimes(k+1)}}\!\left[L\bigl(A_k(Z_1,\ldots,Z_k),Z_{k+1}\bigr)\right],$$

where $Z_{k+1}$ is independent of the training sample. A **split** of $[n]:=\{1,\ldots,n\}$ is a pair $(T,V)$ of disjoint nonempty sets with $T\cup V=[n]$; $T$ is the training index set and $V$ is the validation index set. For a fixed partition $I_1,\ldots,I_K$ of $[n]$ into nonempty folds with $K\ge2$, the equal-observation-weight cross-validation score is

$$\widehat R_{CV}:=\frac1n\sum_{j=1}^K\sum_{i\in I_j}L\bigl(A_{n-|I_j|}(Z_{I_j^c}),Z_i\bigr),$$

where each training tuple $Z_{I_j^c}$ is ordered by increasing index and $I_j^c=[n]\setminus I_j$. The risk corresponding to this design is the weighted training-size target $\sum_{j=1}^K(|I_j|/n)R_{n-|I_j|}$. For equal folds of size $m$, this target is $R_{n-m}$; it is not automatically $R_n$, the risk after training on all $n$ observations.
