---
id: ex-plu-factorisation-by-hand
kind: example
title: "A full PLU factorisation can be computed explicitly by hand"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity, def-permutation-matrix-partial-pivoting-and-pivot-growth]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6"
      url: "https://fncbook.com/pivoting/"
---

## Example

For
$$A=\begin{pmatrix}0&1&1\\2&1&1\\1&1&2\end{pmatrix},$$

partial pivoting gives

$$P=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix},\quad L=\begin{pmatrix}1&0&0\\ 0&1&0\\ \frac12&\frac12&1\end{pmatrix},\quad U=\begin{pmatrix}2&1&1\\0&1&1\\0&0&1\end{pmatrix},$$

and these satisfy $PA=LU$.

## Facts & Assumptions

**Given:** The displayed matrix $A$ and the candidate factors $P,L,U$.

[L1] Every square matrix admits a PLU factorisation, and partial pivoting records the row swaps in a permutation matrix ([[thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity]], [[def-permutation-matrix-partial-pivoting-and-pivot-growth]]).

## Verification

**Proof technique:** direct.

1.1 The largest entry in modulus in the first column is $2$ in row $2$, so the first pivot swap sends that row to the top. The first elimination multipliers are $0$ for the new second row and $1/2$ for the new third row, producing the intermediate matrix $$\begin{pmatrix}2&1&1\\0&1&1\\0&\frac12&\frac32\end{pmatrix}.$$ The second pivot is already the entry $1$ in row $2$, so no further swap is needed, and eliminating the $(3,2)$ entry with multiplier $1/2$ gives the displayed $U$. Recording the two nonzero multipliers in the permuted row order gives the displayed $L$. [given, L1, algebra]

2.1 Direct multiplication gives $$ LU=\begin{pmatrix}2&1&1\\0&1&1\\1&1&2\end{pmatrix}=PA. $$ Hence the displayed matrices are a correct PLU factorisation. [step 1.1, algebra]

3.1 Steps 1.1-2.1 verify the example. [step 1.1, step 2.1] ∎
