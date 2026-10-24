---
id: alg-gaussian-mixture-robust-mean-classifier
kind: algorithm
title: Class-weighted mean classifier
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 0
deps: []
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
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Theorems 5 and 21"
      url: "https://arxiv.org/pdf/1804.11285v2"
---

## Definition

Input: an integer $n\ge1$, an integer $d\ge1$, and an ordered labeled sample $((x_1,y_1),\ldots,(x_n,y_n))$ with $x_i\in\mathbb R^d$ and $y_i\in\{-1,+1\}$. Compute
$$w=\frac1n\sum_{i=1}^n y_i x_i.$$
Output the vector $w$ and the binary linear classifier $f_w:\mathbb R^d\to\{-1,+1\}$ defined by $f_w(x)=+1$ when $\langle w,x\rangle\ge0$ and $f_w(x)=-1$ when $\langle w,x\rangle<0$. The zero-score tie is assigned to $+1$.

## Definition references

[Schmidt et al., class-weighted sample mean in Theorem 5 and normalized direction in Theorem 21](https://arxiv.org/pdf/1804.11285v2).
