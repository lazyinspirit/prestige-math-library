---
id: def-local-response-surface-model
kind: definition
title: "Local response-surface models"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 19, §§19.1–19.5"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Definition

Fix an integer $k\ge1$ and a declared factor region $\mathcal R\subseteq\mathbb R^k$. A **response-surface model** on $\mathcal R$ is a specified polynomial $m:\mathcal R\to\mathbb R$ used as a local approximation to the mean response as the $k$ factors vary over $\mathcal R$. The region is part of the model contract. This definition does not assert that the physical response is polynomial, that the approximation is adequate, or that it remains valid outside $\mathcal R$.

A **second-order response-surface model** has the form
$$m(x)=\beta_0+x^{\mathsf T}\beta+x^{\mathsf T}Bx,$$
where $\beta_0\in\mathbb R$, $\beta\in\mathbb R^k$, and $B\in\mathbb R^{k\times k}$ is symmetric. Coordinates may be coded by a declared affine rescaling of the physical factor settings; all points and regions in a calculation use the same coding.

## Remarks

The stationary-point and eigenvalue classification is proved in [[thm-second-order-response-surface-stationary-point-and-classification]].
