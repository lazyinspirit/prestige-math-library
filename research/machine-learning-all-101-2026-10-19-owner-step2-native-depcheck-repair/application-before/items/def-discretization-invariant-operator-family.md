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

Let $A$ and $U$ be real Banach spaces of functions on bounded domains $D$ and $D'$, with the input point evaluations used below defined. For every $n\ge1$, choose finite-dimensional normed spaces $E_n,F_n$, an exactly defined sampling map $S_n:A\to E_n$ (for example, $S_n(a)=(a(\xi_{n,1}),\ldots,a(\xi_{n,N_n}))$ at specified input points), a finite-dimensional map $\widetilde G_n:E_n\to F_n$, and an output reconstruction map $R_n:F_n\to U$. The reconstruction supplies a function with a defined value at every point of $D'$. The corresponding continuum-valued discrete map is
$$G_n(a):=R_n\bigl(\widetilde G_n(S_n(a))\bigr)\in U.$$
A family $(G_n)_{n\ge1}$ is a **discretization-invariant approximation** of an operator $G:A\to U$ if its sampling maps and output reconstructions are part of the family and it approximates this single continuum operator as the input discretization is refined. In the compact-uniform version, for every compact $K\subset A$,
$$\sup_{a\in K}\|G_n(a)-G(a)\|_U\longrightarrow0.$$
When $A$ consists of almost-everywhere equivalence classes, the sampling map must be explicitly defined on those classes or use a specified representative convention; point evaluation is not inferred from the equivalence class alone. This definition does not identify unrelated grid-specific maps as one operator family.

## Definition references
[[[def-metric-compactness|metric compactness]]]

[Kovachki et al., Definition 4 and §3.1: discretization-invariance conditions](https://arxiv.org/pdf/2108.08481)

