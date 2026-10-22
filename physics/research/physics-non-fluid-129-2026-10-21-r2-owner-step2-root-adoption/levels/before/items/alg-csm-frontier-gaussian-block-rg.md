---
id: alg-csm-frontier-gaussian-block-rg
kind: algorithm
title: Exact finite Gaussian block elimination
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-frontier-finite-gaussian-precision
  - lem-csm-frontier-schur-complement-positive
  - def-natural-logarithm
dependency_roles:
  def-csm-frontier-finite-gaussian-precision: mathematical-premise
  lem-csm-frontier-schur-complement-positive: mathematical-premise
  def-natural-logarithm: mathematical-premise
justified_by:
  - thm-csm-frontier-gaussian-block-rg-correct
aliases: []
physical_scope: null
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §3.2, printed pp. 63–69 / PDF pp. 67–73, exact integration over Gaussian modes and resulting effective quadratic form.
    - title: MIT OpenCourseWare, 2.154 Maneuvering and Control, lecture notes
      url: https://ocw.mit.edu/courses/2-154-maneuvering-and-control-of-surface-and-underwater-vehicles-13-49-fall-2004/2609f8b1bdebe4566891080afe007f51_1349_notes.pdf
      locator: §§25.1.4–25.1.5, printed pp. 135–136 / PDF pp. 141–142, block partitioning and positive Schur complements.
---

## Definition

The exact Gaussian block-elimination algorithm has input:

- an integer $N\ge1$ and a real matrix $K_0\in\mathbb R^{N\times N}$ satisfying $K_0^{\mathsf T}=K_0$ and $v^{\mathsf T}K_0v>0$ for every nonzero $v\in\mathbb R^N$. In the finite Gaussian convention, $K_0$ is the precision because it appears in the density proportional to $\exp(-z^{\mathsf T}K_0z/2)$;
- an integer $q\ge0$ and nested retained coordinate sets
  $$R_0=\{1,\ldots,N\}\supseteq R_1\supseteq\cdots\supseteq R_q,$$
  each given in increasing coordinate order.

It starts at stage $0$ with the ordered coordinates $R_0$ and matrix $K_0$. For each $j=1,\ldots,q$, let $E_j=R_{j-1}\setminus R_j$ be the coordinates to eliminate at that stage.

1. If $E_j=\varnothing$, set $K_j=K_{j-1}$ and $\ell_j=0$.
2. If $E_j\ne\varnothing$, reorder the current coordinates as the increasing list of $R_j$ followed by the increasing list of $E_j$, and write the correspondingly permuted matrix
   $$K_{j-1}=\begin{pmatrix}A_j&B_j\\B_j^{\mathsf T}&C_j\end{pmatrix}.$$
   Solve the nonsingular system $C_jX_j=B_j^{\mathsf T}$, set
   $$K_j:=A_j-B_jX_j,\qquad \ell_j:=\frac{|E_j|}{2}\ln(2\pi)-\frac12\ln(\det C_j).$$
   Interpret $K_j$ in the increasing coordinate order on $R_j$.

The output is $(K_q,\ell_1,\ldots,\ell_q)$, with the accumulated log normalization $\sum_{j=1}^q\ell_j$. If $q=0$, this output means $K_0$ and an empty list of increments. When $R_j=\varnothing$, $K_j$ is the unique empty $0\times0$ matrix and its determinant is defined to be $1$. This is an exact-arithmetic procedure on finite matrices.

## Definition references

[[def-csm-frontier-finite-gaussian-precision]]

[[lem-csm-frontier-schur-complement-positive]]

[[def-natural-logarithm]]
