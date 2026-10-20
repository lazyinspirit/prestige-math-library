---
id: def-mahalanobis-pseudometric
kind: definition
title: "Mahalanobis pseudometric induced by a positive-semidefinite matrix"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [thm-of-square-roots]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Kilian Q. Weinberger and Lawrence K. Saul, Distance Metric Learning for Large Margin Nearest Neighbor Classification, JMLR 10 (2009), 207–244"
      url: "https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf"
    - title: "Aurélien Bellet, Amaury Habrard, and Marc Sebban, A Survey on Metric Learning for Feature Vectors and Structured Data, arXiv:1306.6709v4 (2014)"
      url: "https://arxiv.org/pdf/1306.6709"
aliases: []
landmark: false
---

## Definition

Fix an integer $d\ge1$. A real matrix $M\in\mathbb R^{d\times d}$ is positive semidefinite, written $M\succeq0$, when it is symmetric and $v^{T}Mv\ge0$ for every $v\in\mathbb R^d$. For $x,x'\in\mathbb R^d$, define the squared Mahalanobis distance and its nonnegative square root by

$$q_M(x,x') := (x-x')^{T}M(x-x'),\qquad d_M(x,x') := \sqrt{q_M(x,x')}.$$

The square root is defined because $q_M(x,x')\ge0$. A pseudometric is a nonnegative symmetric function that vanishes on the diagonal and satisfies the triangle inequality, but may assign distance zero to distinct points. The function $d_M$ is called the Mahalanobis pseudometric associated with $M$; $q_M=d_M^2$ is its squared-distance form. The theorem on this page proves the pseudometric properties and the equivalent linear-feature representation.

## Definition references

[[thm-of-square-roots|Existence and uniqueness of nonnegative square roots]]

[Weinberger and Saul, §2.1, printed pp. 209–210](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)

[Bellet, Habrard, and Sebban, Mahalanobis distance and interpretation, printed pp. 10–11](https://arxiv.org/pdf/1306.6709)
