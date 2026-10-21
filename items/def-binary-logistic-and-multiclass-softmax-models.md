---
id: def-binary-logistic-and-multiclass-softmax-models
kind: definition
title: Binary logistic and multiclass softmax conditional models
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-linear-score-classifier]
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

For $d\ge1$, define the sigmoid $\sigma(t)=(1+e^{-t})^{-1}$. A binary logistic conditional model on $x\in\mathbb R^d$ has finite coefficients $\beta_0\in\mathbb R$, $\beta\in\mathbb R^d$ and specifies $\Pr(Y=1\mid x)=\sigma(\beta_0+x^T\beta)$ and $\Pr(Y=0\mid x)=1-\sigma(\beta_0+x^T\beta)$ for $Y\in\{0,1\}$. Its classifier predicts $1$ when $\beta_0+x^T\beta>0$ and predicts $0$ when $\beta_0+x^T\beta\le0$. A multiclass softmax conditional model has finite ordered labels $1,\ldots,K$ with $K\ge2$, affine logits $\eta_k(x)=a_k+x^Tw_k$ for $a_k\in\mathbb R$ and $w_k\in\mathbb R^d$, and probabilities $\Pr(Y=k\mid x)=e^{\eta_k(x)}/\sum_{j=1}^K e^{\eta_j(x)}$; its classifier chooses the smallest index attaining the largest logit. These models specify conditional label probabilities and impose no distributional assumption on the feature vector $X$, in particular no Gaussian feature law.

## Definition references

[[def-linear-score-classifier]]

[Hastie, Tibshirani, and Friedman, ESL, §§4.4 and 4.4.5](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §§2.1 and 3.2.3](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)
