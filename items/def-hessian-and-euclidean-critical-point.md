---
id: def-hessian-and-euclidean-critical-point
kind: definition
title: "The Hessian matrix and critical points of a scalar field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ck-and-multi-index-notation-in-several-variables, def-jacobian-matrix-and-gradient, def-matrix-space]
justified_by: []
aliases: []
landmark: true
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-hessian-and-euclidean-critical-point.json
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Analysis, Convexity, and Optimization"
      url: "https://www.math.columbia.edu/department/pinkham/Optimizationbook.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^m$ be open and let $f:U\to\mathbb R$ have second partial derivatives. Its **Hessian** at $a\in U$ is the matrix $H_f(a)=(\partial_i\partial_j f(a))_{i,j<m}$ in the matrix space of The vector space $M_{m \times n}(F) := F^{\,m \times n}$ of $m$ by $n$ matrices over a field, with entrywise operations, using the multi-index notation of $C^k$ maps and multi-index derivative notation in Euclidean space. A point $a$ is **critical** when its gradient $\nabla f(a)$ is zero, with the gradient convention of The Jacobian matrix of partial derivatives and the gradient in the scalar-valued case.

## Definition references

[[def-matrix-space]]

[[def-ck-and-multi-index-notation-in-several-variables]]

[[def-jacobian-matrix-and-gradient]]

