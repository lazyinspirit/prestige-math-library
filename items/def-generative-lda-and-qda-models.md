---
id: def-generative-lda-and-qda-models
kind: definition
title: Gaussian LDA and QDA model contracts
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-multivariate-normal-law, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
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

Assume the Axiom of Choice. Let $d\ge1$ and $K\ge2$ be finite integers, let the class label be $Y\in\{1,\ldots,K\}$, and let $X\in\mathbb R^d$. Choose class priors $\pi_k>0$ with $\sum_{k=1}^K\pi_k=1$, means $\mu_k\in\mathbb R^d$, and real symmetric positive-definite covariance matrices $\Sigma_k\in\mathbb R^{d\times d}$. The Gaussian generative model has $\Pr(Y=k)=\pi_k$ and conditional laws $X\mid Y=k\sim N_d(\mu_k,\Sigma_k)$. The LDA subfamily imposes one common covariance matrix, $\Sigma_k=\Sigma$ for every $k$; the QDA subfamily permits the covariance matrices to differ by class.

## Definition references

[[def-multivariate-normal-law]]

[[def-axiom-of-choice]]

[Hastie, Tibshirani, and Friedman, ESL, §4.3, equations (4.7)–(4.12)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §4.1](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)
