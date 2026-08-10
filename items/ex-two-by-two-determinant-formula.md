---
id: ex-two-by-two-determinant-formula
kind: example
title: 'The Leibniz formula gives $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-square-matrix, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Example 4.27"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §4.1"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Example

For every commutative ring,
$$\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc.$$

## Facts & Assumptions

**Given:** A $2\times2$ matrix $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ over a commutative ring.

[L1] Determinant is the signed Leibniz sum over $S_2$ ([[def-determinant-of-a-square-matrix]]).

[L2] Sign is $(-1)$ to the inversion number ([[def-inversions-inversion-number-and-sign]]).

## Verification

**Proof technique:** direct.

1.1 The two permutations of $2=\{0,1\}$ are the identity, with sign $1$, and the swap, with one inversion and sign $-1$. [L1, L2]

2.1 Their Leibniz monomials are $a_{00}a_{11}=ad$ and $a_{10}a_{01}=cb=bc$, so the signed sum is $ad-bc$. [step 1.1, algebra] ∎
