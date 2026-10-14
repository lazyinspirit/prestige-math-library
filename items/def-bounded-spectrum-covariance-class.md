---
id: def-bounded-spectrum-covariance-class
kind: definition
title: Bounded-spectrum covariance class
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-covariance-matrix-of-a-random-vector
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, §3.2"
      url: "https://arxiv.org/pdf/1506.00691"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
dependency_level: 1
---

## Definition

For $M>0$ and $p\ge1$, define
$$\mathcal F_p(M):=\{\Sigma\in\mathbb R^{p\times p}: \Sigma=\Sigma^T,\ \Sigma\succeq0,\ \|\Sigma\|_{\rm op}\le M\}.$$
For positive semidefinite $\Sigma$, the operator norm is its largest
eigenvalue, so this is the bounded-spectrum covariance class.

