---
id: def-invertible-matrix-and-general-linear-group
kind: definition
title: 'Invertible matrices and the general linear group $\operatorname{GL}_n(F)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-product-and-identity-matrix, cor-square-matrices-form-a-ring]
justified_by: [cor-general-linear-group-is-a-group]
aliases: []
landmark: true
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-invertible-matrix-and-general-linear-group.json
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Definition 3.80'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'S. Schiavone, MIT 18.700 Day 9, Definition 33'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Definition

A matrix $A\in M_n(F)$ is **invertible** when there is a matrix $B\in M_n(F)$
such that

$$AB=I_n=BA.$$

Such a $B$ is unique and is denoted $A^{-1}$. The **general linear set** is

$$\operatorname{GL}_n(F):=\{A\in M_n(F):A\text{ is invertible}\}.$$

It is the set of units of the ring $M_n(F)$. Under matrix multiplication,
$\operatorname{GL}_n(F)$ is a group, including the trivial group $\operatorname{GL}_0(F)$. For $n=0$,
the unique empty matrix is $I_0$ and is its own inverse.

## Definition references

[[cor-general-linear-group-is-a-group]]

