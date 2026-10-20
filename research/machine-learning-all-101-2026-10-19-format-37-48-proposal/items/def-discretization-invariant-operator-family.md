---
id: def-discretization-invariant-operator-family
kind: definition
title: "Discretization-invariant operator family"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-banach-space, def-metric-compactness]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Definition 4, §3.1"
---

## Definition

Let $A$ and $U$ be spaces of functions on bounded domains $D$ and $D'$. A family of finite-dimensional maps $(G_n)_{n\ge1}$ is a **discretization-invariant approximation** of an operator $G:A\to U$ if each $G_n$ accepts input samples from a discretization of $D$, returns values that can be queried at arbitrary points of $D'$, and approximates $G$ as the input discretization is refined. In the compact-uniform version, for every compact $K\subset A$,
$$\sup_{a\in K}\|G_n(a)-G(a)\|_U\longrightarrow0.$$
The statement is about a single continuum operator and its compatible discrete realizations. It does not declare unrelated grid-specific maps to be one operator family.

## Definition references
[[[def-metric-compactness|metric compactness]]]

[Kovachki et al., Definition 4 and §3.1: discretization-invariance conditions](https://arxiv.org/pdf/2108.08481)

