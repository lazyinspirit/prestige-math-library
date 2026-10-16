---
id: alg-qa-f2-gaussian-elimination
kind: algorithm
title: "Gaussian elimination over F2 for Simon recovery"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - thm-qa-binary-field-f2-is-a-field
  - def-qa-binary-field-f2
  - def-qa-binary-vector-space
  - def-matrix-equation-augmented-matrix-and-linear-system
  - thm-rank-nullity
  - thm-gaussian-elimination-produces-row-echelon-form
justified_by: []
axiom_use: "No Choice is used; all pivot choices are the least admissible row or column in a finite order."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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
## Definition

**Input:** An $(n-1)\times n$ binary matrix $Y$ over the field $\mathbb F_2$, with $n\ge1$. Let $d=n-1$.

**Instructions:**

1. Set the pivot-row index $k=0$ and an empty ordered list of pivot columns. For columns $j=0,\ldots,n-1$ in order, search the rows $i\ge k$ for the least $i$ with $Y_{ij}=1$. If none exists, continue to the next column.
2. If such $i$ exists, swap rows $i$ and $k$. For every other row $r\ne k$ with entry $1$ in column $j$, replace row $r$ by its bitwise XOR with row $k$. Record $j$ as a pivot column and increase $k$ by one.
3. After the finite column loop, return FAIL if $k\ne d$. Otherwise find the sole nonpivot column $q$, set the free variable $x_q=1$, and solve each pivot variable from its reduced row. Return the resulting vector $x\in\mathbb F_2^n$.

All searches, swaps, row XORs, and loops are finite. The $n=1$ input has zero rows and the algorithm returns the one-bit vector $1$. The operation is a deterministic row-reduction procedure; correctness and bit cost are proved in [[thm-qa-f2-gaussian-elimination-correct-and-cost]].
