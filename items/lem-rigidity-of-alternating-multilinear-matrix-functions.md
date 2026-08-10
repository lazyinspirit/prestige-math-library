---
id: lem-rigidity-of-alternating-multilinear-matrix-functions
kind: lemma
title: 'Every alternating multilinear $F$ satisfies $F(A)=F(I)\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_i a_{\sigma(i),i}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions, lem-alternating-multilinear-implies-antisymmetric, def-inversions-inversion-number-and-sign, thm-transpositions-generate-the-symmetric-group, thm-parity-of-transposition-factorisations-is-well-defined, thm-sign-is-a-homomorphism, def-finite-sum-in-a-commutative-monoid, def-monoid-finite-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.20"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, Definition 6.4.1"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $R$ be a commutative ring, and let $F:M_n(R)\to R$ be alternating and column-multilinear. Then for $A=(a_{ri})$,
$$F(A)=F(I_n)\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}.$$

## Facts & Assumptions

**Given:** A matrix $A=(a_{ri})\in M_n(R)$ and an alternating column-multilinear function $F:M_n(R)\to R$.

[L1] Column multilinearity expands $F$ in each column ([[def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions]]).

[L2] Alternating multilinear functions are antisymmetric under swaps ([[lem-alternating-multilinear-implies-antisymmetric]]).

[L3] The sign of a permutation is $(-1)^{\operatorname{inv}(\sigma)}$ ([[def-inversions-inversion-number-and-sign]]).

[L4] Sign is a homomorphism on $S_n$ ([[thm-sign-is-a-homomorphism]]).

[L5] Finite sums and products over finite index sets are defined in commutative monoids ([[def-finite-sum-in-a-commutative-monoid]], [[def-monoid-finite-product]]).

[L6] Every finite permutation is a product of transpositions ([[thm-transpositions-generate-the-symmetric-group]]).

[L7] Every transposition factorisation of a permutation has parity prescribed by its inversion sign ([[thm-parity-of-transposition-factorisations-is-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 For $r<n$, let $e_r$ be the column with entry $1$ in row $r$ and $0$ elsewhere. Since column $i$ is $\sum_{r<n}a_{ri}e_r$, repeated multilinearity expands $F(A)$ as the finite sum over tuples $(r_i)_{i<n}$ of $\bigl(\prod_{i<n}a_{r_i i}\bigr)F(e_{r_0},\ldots,e_{r_{n-1}})$. [L1, L5, algebra]

2.1 If a tuple repeats a row index, its $F$-value is zero by alternation. The surviving tuples use every element of $n$ once, so they are precisely the permutations $r_i=\sigma(i)$. [step 1.1, L1]

3.1 Factor $\sigma$ into transpositions. Repeated antisymmetry changes $F(I_n)$ by one minus sign per transposition. Each transposition has sign $-1$, so [L4] identifies the product of these signs with $\operatorname{sgn}(\sigma)$; equivalently [L3] and [L7] identify it with the factorisation-independent inversion parity. Substitution into step 2.1 gives the formula. [step 2.1, L2, L3, L4, L6, L7, algebra] ∎
