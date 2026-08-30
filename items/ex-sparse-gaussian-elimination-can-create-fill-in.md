---
id: ex-sparse-gaussian-elimination-can-create-fill-in
kind: example
title: "Sparse Gaussian elimination can create fill-in in the factors"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-permutation-matrix-partial-pivoting-and-pivot-growth]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Example

The sparse matrix
$$A=\begin{pmatrix}1&1&0\\1&1&1\\1&0&1\end{pmatrix}$$
has a zero in position $(3,2)$, but after the first elimination step that entry
becomes $-1$. Thus Gaussian elimination can create nonzeros that were absent in
the original matrix.

## Facts & Assumptions

**Given:** The displayed sparse matrix $A$.

[L1] Pivoting language records the elimination process entry by entry ([[def-permutation-matrix-partial-pivoting-and-pivot-growth]]).

## Verification

**Proof technique:** direct.

1.1 Use the first pivot $a_{11}=1$. Eliminating the entries below it subtracts row $1$ from rows $2$ and $3$, giving $$ \begin{pmatrix}1&1&0\\0&0&1\\0&-1&1\end{pmatrix}. $$ The entry in position $(3,2)$ was $0$ before elimination and is now $-1$. [given, L1, algebra]

2.1 The new nonzero in step 1.1 is fill-in: it appears after one elimination step even though the corresponding original entry was zero. [step 1.1]

3.1 Steps 1.1-2.1 verify the example. [step 1.1, step 2.1] ∎
