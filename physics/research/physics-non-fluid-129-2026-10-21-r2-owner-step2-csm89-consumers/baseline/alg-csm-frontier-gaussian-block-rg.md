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
  - def-csm-frontier-gaussian-lattice
  - def-csm-frontier-finite-gaussian-precision
  - lem-csm-frontier-schur-complement-positive
  - def-natural-logarithm
dependency_roles:
  def-csm-frontier-gaussian-lattice: mathematical-premise
  def-csm-frontier-finite-gaussian-precision: mathematical-premise
  lem-csm-frontier-schur-complement-positive: mathematical-premise
  def-natural-logarithm: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §3.2, printed pp. 63–69 / PDF pp. 67–73, exact integration over Gaussian modes and resulting effective quadratic form.
    - title: MIT OpenCourseWare, 2.154 Maneuvering and Control, lecture notes
      url: https://ocw.mit.edu/courses/2-154-maneuvering-and-control-of-surface-and-underwater-vehicles-13-49-fall-2004/2609f8b1bdebe4566891080afe007f51_1349_notes.pdf
      locator: §§25.1.4–25.1.5, printed pp. 135–136 / PDF pp. 141–142, block partitioning and positive Schur complements.
---

## Statement

The exact Gaussian block-elimination algorithm has input:

- an integer $N\ge1$ and a real symmetric positive-definite precision matrix $K_0\in\mathbb R^{N\times N}$;
- an integer $q\ge0$ and nested retained coordinate sets
  $$R_0=\{1,\ldots,N\}\supseteq R_1\supseteq\cdots\supseteq R_q,$$
  each given in increasing coordinate order.

It starts at stage $0$ with the ordered coordinates $R_0$ and matrix $K_0$. For each $j=1,\ldots,q$, let $E_j=R_{j-1}\setminus R_j$ be the coordinates to eliminate at that stage.

1. If $E_j=\varnothing$, set $K_j=K_{j-1}$ and $\ell_j=0$.
2. If $E_j\ne\varnothing$, reorder the current coordinates as $R_j$ followed by $E_j$ and write the correspondingly permuted matrix
   $$K_{j-1}=\begin{pmatrix}A_j&B_j\\B_j^{\mathsf T}&C_j\end{pmatrix}.$$
   Solve the nonsingular system $C_jX_j=B_j^{\mathsf T}$, set
   $$K_j:=A_j-B_jX_j,\qquad \ell_j:=\frac{|E_j|}{2}\ln(2\pi)-\frac12\ln(\det C_j).$$

The output is $(K_q,\ell_1,\ldots,\ell_q)$, with the accumulated log normalization $\sum_{j=1}^q\ell_j$. When $R_j=\varnothing$, $K_j$ is the unique empty $0\times0$ matrix and its determinant is defined to be $1$. This is an exact-arithmetic procedure on finite matrices. When $K_0$ is a precision of [[def-csm-frontier-gaussian-lattice]], the log increments are intended to record the normalization changes from eliminating the stated coordinates; a separate correctness theorem proves that finite-dimensional Gaussian identity.

## Statement references

[[def-csm-frontier-gaussian-lattice]]

[[def-csm-frontier-finite-gaussian-precision]]

[[lem-csm-frontier-schur-complement-positive]]

## Facts & Assumptions

**Given:** A finite real symmetric positive-definite matrix $K_0$ and a finite nested list of retained coordinate sets as in the Statement.

[F1] For a symmetric positive-definite block matrix, the eliminated principal block is invertible with positive determinant, and its Schur complement is positive definite unless its size is zero ([[lem-csm-frontier-schur-complement-positive]]).

[F2] The natural logarithm is defined on positive real numbers ([[def-natural-logarithm]]).

## Proof

1.1 At any stage with a nonempty eliminated set $E_j$, the current matrix is positive definite by induction, beginning with the input $K_0$. Its principal block $C_j$ is positive definite because any nonzero vector supported on $E_j$ extends by zeros to a nonzero vector for the full quadratic form. Therefore [F1] gives $\det C_j>0$ and invertibility, so the linear system has a unique solution, the output is the stated Schur complement, and $\ell_j$ is a real number by [F2]. The same fact gives positive definiteness of $K_j$ when $R_j$ is nonempty; for empty $R_j$, the specified empty-matrix convention applies. An empty eliminated set leaves the current positive-definite matrix unchanged. Thus every stage is well-defined. [given, F1, F2, algebra]

2.1 Each of the $q$ stages applies a finite number of real matrix operations and then advances the stage index by one. Since $q$ is finite, after exactly $q$ stages the procedure terminates with the displayed output; if $q=0$ it returns $(K_0)$ with an empty list of increments. [given, step 1.1, algebra] ∎
