---
id: def-structural-column-coloring-for-sparse-jacobian-recovery
kind: definition
title: "The column-interference graph and collision-free coloring for a sparse Jacobian"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Thomas F. Coleman and Jorge J. Moré, Estimation of Sparse Jacobian Matrices and Graph Coloring Problems, Argonne National Laboratory Report ANL-81-39"
      url: "https://digital.library.unt.edu/ark:/67531/metadc283504/"
    - title: "Bradley M. Bell and Kasper Kristensen, Computing Sparse Jacobians and Hessians Using Algorithmic Differentiation"
      url: "https://arxiv.org/pdf/2111.05207"
---

## Definition

Let $m,n\ge1$, $U\subseteq\mathbb R^n$ be open, $F:U\to\mathbb R^m$ be differentiable at $x\in U$, and $J:=JF(x)$ be its Jacobian as defined in [[def-jacobian-matrix-and-gradient]]. A **structural row pattern** is a list of sets $S_i\subseteq\{0,\ldots,n-1\}$, one for each row $0\le i<m$, such that $J_{ij}=0$ whenever $j\notin S_i$. It is a safe pattern only when every actual nonzero lies in the declared support.

The **column-interference graph** has vertices $0,\ldots,n-1$ and an edge between distinct columns $j,k$ exactly when some row support $S_i$ contains both. A **proper coloring** is a map $\chi:\{0,\ldots,n-1\}\to C$ to a set of color labels such that adjacent columns have different labels. For a color $c\in C$, its seed vector $s^c\in\mathbb R^n$ has coordinate $s^c_j=1$ when $\chi(j)=c$ and $0$ otherwise. The compressed product is $Js^c$.
