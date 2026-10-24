---
id: def-jacobian-matrix-and-gradient
kind: definition
title: "The Jacobian matrix of partial derivatives and the gradient in the scalar-valued case"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-directional-and-partial-derivatives, def-euclidean-inner-product, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-jacobian-matrix-and-gradient.json
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

If every partial derivative $\partial_jf_i(a)$ of $f:U\to\mathbb R^n$ exists, the **Jacobian matrix** is $Jf(a)=(\partial_jf_i(a))_{i<n,j<m}$. For scalar-valued $f$, its **gradient** is

$$\nabla f(a):=(\partial_0f(a),\ldots,\partial_{m-1}f(a))\in\mathbb R^m,$$

with coordinates understood in the standard basis (The standard list $e : n \to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \ne i$ is an ordered basis of $F^{n}$; hence $\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\varnothing$ and dimension $0$). The partial derivatives are those of Directional derivatives and partial derivatives of a map $U\subseteq\mathbb{R}^m\to\mathbb{R}^n$.

## Definition references

[[lem-standard-basis-of-f-n]]

[[def-directional-and-partial-derivatives]]

