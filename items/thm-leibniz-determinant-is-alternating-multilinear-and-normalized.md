---
id: thm-leibniz-determinant-is-alternating-multilinear-and-normalized
kind: theorem
title: "The Leibniz determinant is column-multilinear, alternating and normalized over every commutative ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-square-matrix, def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions, lem-a-transposition-reverses-inversion-sign, thm-sign-is-a-homomorphism, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorems 4.19–4.22"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, Definition 6.4.1"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Statement

For $n\ge1$ and every commutative ring $R$, the Leibniz determinant $\det:M_n(R)\to R$ is column-multilinear, alternating and normalized.

## Facts & Assumptions

**Given:** The Leibniz determinant of an $n\times n$ matrix over a commutative ring.

[L1] Determinant is the finite signed sum over $S_n$ ([[def-determinant-of-a-square-matrix]]).

[L2] Multilinear, alternating and normalized have the stated columnwise meanings ([[def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions]]).

[L3] Sign is a homomorphism on $S_n$ ([[thm-sign-is-a-homomorphism]]).

[L4] Finite sums may be distributed and reindexed by bijections ([[lem-finite-sum-reindexing-and-fubini]]).

[L5] Composing a permutation on either side with a transposition reverses its inversion sign ([[lem-a-transposition-reverses-inversion-sign]]).

## Proof

**Proof technique:** direct.

1.1 With every column but column $q$ fixed, each Leibniz monomial contains exactly one entry from column $q$. Distributing finite sums therefore proves additivity and scalar compatibility in that column, and $q$ was arbitrary. [L1, L2, L4, algebra]

2.1 Suppose columns $p,q$ are equal. Pair each $\sigma$ with $\sigma\circ(p\ q)$. Commutativity makes the paired monomials equal, while [L5] makes their signs opposite, so every pair sums to zero and the determinant vanishes. [step 1.1, L3, L4, L5, algebra]

3.1 At $I_n$, every nonidentity permutation selects an off-diagonal zero, while the identity term is $1$. Thus $\det(I_n)=1$. This also covers $n=1$ and the zero ring, where the equality reads $0=0$. [step 2.1, L1, L2, algebra] ∎

