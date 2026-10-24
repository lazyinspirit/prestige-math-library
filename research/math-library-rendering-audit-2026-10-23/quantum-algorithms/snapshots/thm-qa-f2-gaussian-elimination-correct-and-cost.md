---
id: thm-qa-f2-gaussian-elimination-correct-and-cost
kind: theorem
title: "F2 row reduction returns the unique Simon mask"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-f2-gaussian-elimination
  - thm-rank-nullity
  - def-qa-simon-promise
  - thm-qa-binary-field-f2-is-a-field
  - def-qa-binary-field-f2
  - def-qa-binary-vector-space
  - def-matrix-equation-augmented-matrix-and-linear-system
  - cor-matrix-rank-equals-the-rank-of-its-linear-map
  - def-row-space-column-space-nullspace-and-matrix-ranks
  - def-linear-basis
  - lem-span-is-the-set-of-linear-combinations
  - def-qa-binary-dot-product
  - thm-gaussian-elimination-produces-row-echelon-form
  - def-qa-classical-bit-cost
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; row operations, finite bases, and the selected free coordinate are explicit."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Statement

For $n\ge1$, let $Y$ be a binary $(n-1)\times n$ matrix. The algorithm [[alg-qa-f2-gaussian-elimination]] terminates, returns FAIL exactly when $\operatorname{rank}(Y)<n-1$, and otherwise returns the unique nonzero vector in $\ker Y$. In particular, if the rows are independent and each row $y_i$ satisfies $y_i\cdot s=0$ for a fixed nonzero Simon mask $s$, then the returned vector is $s$. The algorithm uses $O(n^3)$ classical bit operations.

## Facts & Assumptions
**Given:** $n\ge1$, a binary matrix $Y$ with $n-1$ rows and $n$ columns, and, in the Simon case, a nonzero $s\in\mathbb F_2^n$ annihilated by each row.

[F1] [[alg-qa-f2-gaussian-elimination]]: the procedure uses row swaps and row XORs, clears every pivot column from all other rows, fails when the pivot count is not $n-1$, and otherwise sets the sole free variable to $1$.

[F2] [[thm-qa-binary-field-f2-is-a-field]]: $\mathbb F_2$ is a field.

[F3] [[thm-rank-nullity]]: for a linear map from an $n$-dimensional vector space, kernel dimension plus rank equals $n$.

[F4] [[def-qa-simon-promise]]: the Simon mask $s$ is nonzero.

[F5] [[def-qa-binary-dot-product]]: $y\cdot s$ is the parity of the coordinatewise products in $\mathbb F_2$.

[F6] [[thm-gaussian-elimination-produces-row-echelon-form]]: finite matrices over a field can be reduced by elementary row operations to echelon form.

[F7] [[def-qa-classical-bit-cost]]: bit-operation cost counts the transitions of the declared finite-alphabet Turing machine, including reading, writing, comparisons, and postprocessing.

[F8] [[def-qa-binary-vector-space]]: $\mathbb F_2^n$ and $\mathbb F_2^{n-1}$ are vector spaces of dimensions $n$ and $n-1$ with coordinatewise operations.

[F9] [[def-matrix-equation-augmented-matrix-and-linear-system]]: $Yx=0$ is the homogeneous system for the associated matrix map.

[F10] [[cor-matrix-rank-equals-the-rank-of-its-linear-map]]: the matrix rank equals the rank of its associated linear map.

[F11] [[def-linear-basis]] and [[lem-span-is-the-set-of-linear-combinations]]: a basis spans its vector space by finite linear combinations.

[F12] [[def-qa-binary-field-f2]]: $\mathbb F_2=\{0,1\}$, so a one-dimensional $\mathbb F_2$-space has only the zero vector and its unique basis vector.

[F13] [[def-row-space-column-space-nullspace-and-matrix-ranks]]: matrix rank is the dimension of the span of its rows.

## Proof

1.1 Swapping two rows or replacing a row by its XOR with another preserves both the homogeneous solution set and row space: each operation has an inverse of the same form, and the new row is a combination of old rows. Thus the rank and kernel of $Y$ are preserved by [F13] and [F9]. The loops visit $n$ columns and at most $n-1$ pivot rows, with finite row scans, so they terminate. [given, F1, F2, F9, F13, algebra]

2.1 At each pivot the selected entry is $1$, earlier pivot columns are zero below it, and XORing the pivot row clears its column in every other row. At termination the pivot columns form an identity block and all remaining rows are zero. The nonzero rows are independent because their pivot columns form an identity matrix, and they span the row space because every other row is zero. By [F13], the pivot count equals $\operatorname{rank}(Y)$; step 1.1 preserves this rank from the input. The procedure returns FAIL precisely when this rank is below $n-1$. [given, F1, F2, F6, F13, step 1.1, algebra]

3.1 If the pivot count is $n-1$, there is exactly one nonpivot column. Setting its coordinate to $1$ and solving each pivot equation gives a vector in the reduced system with that coordinate nonzero. By step 1.1, it lies in the kernel of the original $Y$ and is nonzero. [given, F1, step 1.1, step 2.1, algebra]

4.1 Whenever $\operatorname{rank}(Y)=n-1$, the associated map has rank $n-1$ by [F10] and domain dimension $n$ by [F8]; rank-nullity [F3] gives a one-dimensional kernel. A basis of that kernel has one vector $u$, so every vector is $c u$ by [F11]; [F12] gives $c\in\{0,1\}$, hence $u$ is its unique nonzero vector. The algorithm's output from step 3.1 is therefore the unique nonzero kernel vector. In the Simon case, every row has dot product zero with $s$, so [F5] and [F9] give $s\in\ker Y$, and [F4] gives $s\ne0$; thus the output is $s$. [given, F2, F3, F4, F5, F8, F9, F10, F11, F12, step 3.1, algebra]

5.1 Store the $n-1$ rows consecutively on an input work tape. To find pivots, a multitape machine may scan the whole $O(n^2)$-bit matrix once for each of at most $n$ columns; this costs $O(n^3)$ transitions including head movement. For each of at most $n-1$ pivots, copy its $n$ bits to a work tape, then scan each of at most $n-2$ other rows and XOR the copied pivot row into it when required; each scan and row update costs $O(n)$ transitions, so all row operations cost $O(n^3)$. Swaps, pivot bookkeeping, and back-substitution require at most $O(n^3)$ further transitions under the same scan representation. The finite-alphabet multitape convention [F7] therefore gives the stated $O(n^3)$ classical bit cost. [given, F1, F7, algebra] ∎

