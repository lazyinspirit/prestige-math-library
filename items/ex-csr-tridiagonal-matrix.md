---
id: ex-csr-tridiagonal-matrix
kind: example
title: "A four-row tridiagonal matrix in CSR form"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-csr-matrix-with-stored-entry-semantics, thm-rat-field]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §3.4, printed pp. 92–94"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lecture 32, The 1D model problem, p. 1"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec32.pdf"
dependency_level: 1
---

## Example

Let $T\in M_{4\times4}(\mathbb Q)$ have diagonal entries $2$, entries $-1$ immediately above and below the diagonal, and all other entries $0$. A CSR record for $T$ is

$$r=(0,2,5,8,10),\qquad c=(0,1,0,1,2,1,2,3,2,3),\qquad v=(2,-1,-1,2,-1,-1,2,-1,-1,2).$$

This record stores $s=10$ entries and has no empty row, duplicate column, or explicit zero.

## Facts & Assumptions

**Given:** The displayed arrays and the zero-based CSR convention.

[L1] [[def-csr-matrix-with-stored-entry-semantics]]: the row pointers delimit each row's stored-index interval, and each stored value contributes to the matrix entry at its row and column index.

[L2] [[thm-rat-field]]: the rational numbers with their standard operations form a field.

## Verification

1.1 The row-pointer array has length $5$, starts at $0$, ends at $10$, and is nondecreasing. Every listed column index lies in $\{0,1,2,3\}$, so the data satisfy the CSR invariants for a $4$ by $4$ matrix. [given, L1, algebra]

2.1 Row $0$ uses columns $0,1$ with values $2,-1$; row $1$ uses columns $0,1,2$ with values $-1,2,-1$; row $2$ uses columns $1,2,3$ with values $-1,2,-1$; row $3$ uses columns $2,3$ with values $-1,2$. These rational sums are the specified entries of $T$, so the record represents $T$. [given, L1, L2, step 1.1, algebra] ∎
