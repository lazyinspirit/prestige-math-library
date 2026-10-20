---
id: def-binary-logistic-log-likelihood-and-l1-penalty
kind: definition
title: Binary logistic log-likelihood and L1-penalized objective
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-binary-logistic-and-multiclass-softmax-models]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Stanford CS229 Spring 2022 lecture notes"
      url: "https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf"
---

## Definition

Fix a finite design with rows $x_i^T\in\mathbb R^q$, $1\le i\le n$, where $n\ge1$ and $q\ge1$. Use either an intercept design, in which the first coordinate of every row is $1$ and $\beta=(\beta_0,\theta)\in\mathbb R\times\mathbb R^{q-1}$, or a no-intercept design, in which no coordinate is reserved as an intercept, the intercept coefficient is fixed at zero, and $\beta\in\mathbb R^q$. Let $y_i\in\{0,1\}$ and assume the responses are conditionally independent given the design, with binary logistic probabilities $p_i=\sigma(x_i^T\beta)$ for finite coefficients. In either design convention, the log-likelihood is
$$
\ell(\beta)=\sum_{i=1}^n\left[y_i x_i^T\beta-\log\!\left(1+e^{x_i^T\beta}\right)\right].
$$
For $\lambda>0$, the L1 objective to minimize in the intercept design is $-\ell(\beta)+\lambda\|\theta\|_1$, so the intercept is unpenalized; in the no-intercept design it is $-\ell(\beta)+\lambda\|\beta\|_1$, so every coefficient is penalized. Here $\|\theta\|_1=\sum_{j=1}^{q-1}|\theta_j|$ and $\|\beta\|_1=\sum_{j=1}^{q}|\beta_j|$, with an empty sum equal to zero. These are objective definitions and assert no optimizer existence.

## Definition references

[[def-binary-logistic-and-multiclass-softmax-models]]

[Hastie, Tibshirani, and Friedman, ESL, §§4.4.1 and 4.4.4, equations (4.20) and (4.31)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §2.1](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)
