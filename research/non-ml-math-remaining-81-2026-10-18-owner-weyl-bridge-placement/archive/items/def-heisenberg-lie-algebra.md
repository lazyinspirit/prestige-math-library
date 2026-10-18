---
id: def-heisenberg-lie-algebra
kind: definition
title: "Finite-dimensional Heisenberg Lie algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-lie-algebra-over-a-field]
justified_by: [lem-heisenberg-bracket-defines-lie-algebra]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "François Dumas, Noncommutative Invariants, §3.2.1"
      url: "https://lmbp.uca.fr/~fdumas/fichiers/B-Mat60.pdf"
---

## Definition

Let $k$ be a field and $n\geq 1$. The **Heisenberg Lie algebra** $\mathfrak h_n(k)$ is the $(2n+1)$-dimensional $k$-vector space with basis

$$X_1,\ldots,X_n,P_1,\ldots,P_n,Z.$$

Its bracket is the bilinear extension of

$$[P_i,X_j]=\delta_{ij}Z,\qquad [X_i,P_j]=-\delta_{ij}Z,$$

with all $[X_i,X_j]$, $[P_i,P_j]$, $[Z,X_i]$, and $[Z,P_i]$ equal to zero. Here $\delta_{ij}=1$ when $i=j$ and $0$ otherwise. Equivalently, for coefficient vectors $a,b,a',b'\in k^n$,

$$\left[\sum_i(a_iX_i+b_iP_i)+cZ,\sum_i(a_i'X_i+b_i'P_i)+c'Z\right]=\left(\sum_i(b_i a_i'-b_i'a_i)\right)Z.$$

The Jacobi identity and alternation, including in characteristic $2$, are proved in [[lem-heisenberg-bracket-defines-lie-algebra]].
