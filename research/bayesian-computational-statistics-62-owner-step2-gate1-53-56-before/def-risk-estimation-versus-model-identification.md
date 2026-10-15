---
id: def-risk-estimation-versus-model-identification
kind: definition
title: "Risk estimation versus model identification"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-cross-validation-split-and-risk-target
justified_by: []
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §§2.2–2.4, 6.1, and 7.1"
      url: "https://arxiv.org/pdf/0907.4728"
    - title: "Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani, An Introduction to Statistical Learning, 7th printing, Chapter 5"
      url: "https://www.statlearning.com/s/ISLR-Seventh-Printing.pdf"
---

## Definition

Let $(\mathcal Z,\mathcal F)$ be an observation space, let $M$ be a nonempty finite set of candidate labels, and for each $m\in M$ let $P_m$ be a probability law on $(\mathcal Z,\mathcal F)$. For each $m\in M$ and training size $k\ge1$, let $A_{m,k}:\mathcal Z^k\to(\mathcal H,\mathcal G)$ be a measurable learning rule into a common measurable predictor space. For a data law $P$ and loss $L$ satisfying the measurability and integrability hypotheses of [[def-cross-validation-split-and-risk-target]], write

$$R_{m,k}(P):=\mathbb E_{P^{\otimes(k+1)}}\!\left[L\bigl(A_{m,k}(Z_1,\ldots,Z_k),Z_{k+1}\bigr)\right]$$

for its risk at training size $k$; when $P$ is fixed, write $R_{m,k}$. A **risk-minimizing selector** chooses a label minimizing the specified risk criterion, such as $R_{m,k}$ or its cross-validation estimate; a fixed ordering of $M$ may be used to resolve ties. This objective compares expected predictive loss.

For each $n\ge1$, a data-based selector is a measurable map $\widehat m_n:\mathcal Z^n\to M$, where $M$ has its discrete sigma-algebra. A **true model label** at sample size $n$ is a specified $m_0\in M$ when the observations are IID with law $P_{m_0}$. The selector sequence $(\widehat m_n)$ is **model-consistent at $m_0$** when $P_{m_0}^{\otimes n}(\widehat m_n=m_0)\to1$ as $n\to\infty$. This identification objective is distinct from minimizing predictive risk: risk minimization alone does not assert that the family is identifiable, that one candidate is true, or that the minimum-risk label is the true label. The distinction between risk estimation/model selection for prediction and model identification follows [[def-cross-validation-split-and-risk-target]]'s risk target and the source treatments cited below.
