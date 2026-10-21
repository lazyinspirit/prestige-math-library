---
id: thm-e8-lattice-is-even-unimodular-and-nondiagonal
kind: theorem
title: The E8 lattice is even unimodular and is not diagonal
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-e8-root-lattice
  - lem-full-rank-unimodular-sublattice-has-index-one
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tim Perutz, Lectures on Gauge Theory and Symplectic Geometry
      url: https://web.ma.utexas.edu/users/perutz/GaugeTheory/FullCourse.pdf
      locator: §24, pp. 119–126; E8 lattice comparison, with the carrier supplying a direct matrix verification
---

## Statement

For the rank-eight lattice $L_{E_8}$ with Gram matrix $C$ specified in its definition, the form is positive definite, has determinant $1$, and takes even values on every vector. It has no vector of squared norm $1$, so it is not isometric to the standard diagonal lattice $\mathbb Z^8$ and admits no isometric full-rank embedding into that lattice.

## Statement references

[[def-e8-root-lattice|The E8 Gram matrix and node-edge convention]]

## Facts & Assumptions

**Given:** The Gram matrix $C$ with diagonal entries $2$ and off-diagonal entries $-1$ on the seven stated edges.

[F1] The ordered basis and full list of E8 edges determine the Gram matrix $C$. [[def-e8-root-lattice]]

[F2] A full-rank unimodular sublattice of the standard dot-product lattice of the same rank has index one. [[lem-full-rank-unimodular-sublattice-has-index-one]]

## Proof

**Given:** The matrix and lattice convention in [F1].

1.1 Let $A_7$ be the $7\times7$ leading principal block on vertices $1,\ldots,7$. Its leading principal determinants $d_k$ satisfy $d_0=1$, $d_1=2$, and $d_k=2d_{k-1}-d_{k-2}$ for $2\le k\le7$, by expansion along the last row of the tridiagonal chain matrix. Induction gives $d_k=k+1$, so these seven determinants are positive. [F1, algebra, induction]

2.1 The vector $x=A_7^{-1}e_3$ has coordinates $x_i=\min(i,3)(8-\max(i,3))/8$ for $1\le i\le7$: substitution into $2x_i-x_{i-1}-x_{i+1}=\delta_{i3}$ with $x_0=x_8=0$ verifies $A_7x=e_3$. Hence $e_3^{\mathsf T}A_7^{-1}e_3=15/8$. The Schur-complement determinant of $C=\begin{pmatrix}A_7&-e_3\\-e_3^{\mathsf T}&2\end{pmatrix}$ is $\det(A_7)(2-15/8)=8/8=1$. [F1, step 1.1, algebra]

3.1 By Sylvester's criterion, the positive leading principal determinants $d_1,\ldots,d_7$ from step 1.1 and $\det C=1$ from step 2.1 make $C$ positive definite. For any $z\in\mathbb Z^8$, $z^{\mathsf T}Cz=2\sum_i z_i^2-2\sum_{\{i,j\}\text{ an edge}}z_i z_j$ is even. Every nonzero vector therefore has positive even integral norm, hence norm at least $2$; in particular there is no norm-one vector. [F1, step 1.1, step 2.1, algebra]

4.1 The standard lattice $\mathbb Z^8$ contains norm-one basis vectors, so no isometry from $L_{E_8}$ onto $\mathbb Z^8$ exists by step 3.1. If there were an isometric full-rank embedding, its Gram determinant would be $1$ by step 2.1, and [F2] would force its image to be all of $\mathbb Z^8$, which would be an isometry, again contradicting step 3.1. [F2, step 2.1, step 3.1, algebra] ∎

