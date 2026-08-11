---
id: ex-three-by-three-leibniz-expansion
kind: example
title: 'A full $3\times3$ Leibniz expansion lists all six permutations and their signs'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-square-matrix, def-inversions-inversion-number-and-sign, thm-number-of-bijections-of-a-finite-set]
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
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Example 4.27"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, §6.4"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Example

For $A=(a_{ij})\in M_3(R)$,
$$\det A=a_{00}a_{11}a_{22}+a_{10}a_{21}a_{02}+a_{20}a_{01}a_{12}-a_{10}a_{01}a_{22}-a_{20}a_{11}a_{02}-a_{00}a_{21}a_{12}.$$

## Facts & Assumptions

**Given:** A $3\times3$ matrix over a commutative ring.

[L1] The determinant is the signed Leibniz sum ([[def-determinant-of-a-square-matrix]]).

[L2] A permutation's sign is determined by the parity of its inversions ([[def-inversions-inversion-number-and-sign]]).

[L3] A set of size $3$ has $3!=6$ bijections to itself ([[thm-number-of-bijections-of-a-finite-set]]).

## Verification

**Proof technique:** direct.

1.1 The even permutations in one-line notation are $[0,1,2]$, $[1,2,0]$ and $[2,0,1]$; the odd ones are $[1,0,2]$, $[2,1,0]$ and $[0,2,1]$. These are all six permutations. [L1, L2, L3]

2.1 Substitution yields the displayed six terms. For $A=\begin{pmatrix}1&2&3\\0&1&4\\5&6&0\end{pmatrix}$ they give $0+0+40-0-15-24=1$, a concrete check of the signs. [step 1.1, algebra] ∎
