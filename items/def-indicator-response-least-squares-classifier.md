---
id: def-indicator-response-least-squares-classifier
kind: definition
title: Indicator-response least-squares classification
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-linear-score-classifier]
justified_by: [lem-indicator-response-least-squares-minimum-norm-fit]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
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

## Definition

Let $n,q\ge1$ and $K\ge2$ be finite integers. For a fixed design matrix $X\in\mathbb R^{n\times q}$ and labels $y_i\in\{1,\ldots,K\}$, form the indicator response matrix $Y\in\mathbb R^{n\times K}$ by $Y_{ik}=1$ when $y_i=k$ and $Y_{ik}=0$ otherwise. For a coefficient matrix $B\in\mathbb R^{q\times K}$, set $L(B)=(2n)^{-1}\|Y-XB\|_F^2$, where $\|A\|_F^2$ is the sum of squares of all entries of $A$. Let $B_*$ be the least-squares minimizer with smallest Frobenius norm. For a new row vector $x^T\in\mathbb R^{1\times q}$, the indicator-response classifier assigns scores $(x^TB_*)_k$ and predicts the smallest class index attaining their maximum. An intercept, if used, is one of the columns of $X$; no rank assumption is imposed on $X$.

## Definition references

[[def-linear-score-classifier]]

[[lem-indicator-response-least-squares-minimum-norm-fit]]

[Hastie, Tibshirani, and Friedman, ESL, §4.2, equations (4.3)–(4.6)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §§1.2 and 2.1](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)
