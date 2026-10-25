---
id: ex-inverse-by-augmented-row-reduction
kind: example
title: 'A $3\times3$ inverse computed by row reducing $[A\mid I]$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-inverse-by-row-reducing-an-augmented-matrix, thm-matrix-multiplication-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §3.6"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Example

For
$$A=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix},$$
row reduction of $[A\mid I_3]$ gives
$$A^{-1}=\begin{pmatrix}1&-1&1\\0&1&-1\\0&0&1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed real matrix $A$.

[L1] Reducing $[A\mid I]$ to $[I\mid B]$ gives $B=A^{-1}$ ([[cor-inverse-by-row-reducing-an-augmented-matrix]]).

[L2] Matrix multiplication is associative and unital ([[thm-matrix-multiplication-laws]]).

## Verification

**Proof technique:** direct.

1.1 Starting from $[A\mid I_3]$, replace row $1$ by row $1$ minus row $2$, then replace row $0$ by row $0$ minus the new row $1$. The left block becomes $I_3$ and the right block becomes the displayed matrix $B$. [L1, algebra]

2.1 Direct multiplication gives $AB=I_3$ and $BA=I_3$: the only off-diagonal sums are $-1+1$, $1-1$, and $-1+1$. Hence $B=A^{-1}$. [step 1.1, L2, algebra] ∎
