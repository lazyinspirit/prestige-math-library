---
id: lem-block-upper-triangular-pencil-determinant-factorizes
kind: lemma
title: "The homogeneous determinant factors across a block upper triangular pencil"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-determinant-of-a-square-matrix]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §12.8"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Statement

Let $n_1,n_2\ge1$, $n=n_1+n_2$, and let $A,B\in\mathbb C^{n\times n}$ be
block upper triangular with the same two-block partition of sizes $n_1,n_2$,
with diagonal blocks $A_{11},A_{22}$ and
$B_{11},B_{22}$. For every $\alpha,\beta\in\mathbb C$,
$$\det(\beta A-\alpha B) =\det(\beta A_{11}-\alpha B_{11})\det(\beta A_{22}-\alpha B_{22}).$$

## Facts & Assumptions

**Given:** A block upper triangular pair with a common two-block partition.

[F1] [[def-determinant-of-a-square-matrix]]: the determinant is the signed
finite sum over permutations.

## Proof

1.1 The matrix $M=\beta A-\alpha B$ is block upper triangular, so every entry in its lower-left block is zero. In a nonzero Leibniz term, each of the first block's columns must therefore be paired with one of the first block's rows. Since the block sizes agree, these choices are a permutation of exactly those rows, and the remaining columns are paired with the remaining rows. Thus every nonzero permutation term splits into one term from each diagonal block. [given, F1, algebra]

2.1 Summing the split terms in [F1] gives the product of the two signed permutation sums for $M_{11}$ and $M_{22}$. These sums are their determinants, which proves the identity. [step 1.1, F1, algebra] ∎
