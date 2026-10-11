---
page: character-polynomials-fi-modules-and-representation-stability-examples
title: "Character Polynomials, FI-Modules, and Representation Stability — Examples"
status: draft
requires:
  - character-polynomials-fi-modules-and-representation-stability
items: []
examples:
  - ex-fi-permutation-module-has-character-x-one
  - ex-exterior-square-of-the-fi-permutation-module
  - ex-the-padded-family-for-lambda-two-one-begins-at-rank-five
  - cex-pointwise-finite-dimensionality-does-not-imply-fi-finite-generation
---

These examples anchor the FI-module definitions and the padded-family
construction of
[[character-polynomials-fi-modules-and-representation-stability]] in small
explicit computations, and record one contrast between the pointwise and global
notions of finiteness.

[[ex-fi-permutation-module-has-character-x-one]] exhibits the permutation
FI-module $M(1)$, generated in degree $\le1$, and computes its character
$X_1$ from the diagonal of the permutation matrices.
[[ex-exterior-square-of-the-fi-permutation-module]] takes the exterior square
$W=\Lambda^2M(1)$ and derives the character polynomial
$\binom{X_1}{2}-X_2$, with the empty ranks $n=0,1$ vanishing on both sides.
[[ex-the-padded-family-for-lambda-two-one-begins-at-rank-five]] works the
padding threshold for $\lambda=(2,1)$: the sequence
$\lambda[n]=(n-3,2,1)$ fails to be a partition at $n=3,4$ and begins at
$n=5=|\lambda|+\lambda_1$, where the realising FI-module is generated in degree
$5$, with weight $3$ and stability degree $2$.
[[cex-pointwise-finite-dimensionality-does-not-imply-fi-finite-generation]]
closes with the pointwise one-dimensional module that has no finite generating
set, contrasting pointwise finite-dimensionality with finite generation.
