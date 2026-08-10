---
id: thm-ring-matrix-arithmetic-laws
kind: theorem
title: "Matrix arithmetic over a commutative ring is associative, unital and distributive, and transpose reverses products"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ring-matrix-product-identity-and-transpose, lem-finite-sum-reindexing-and-fubini, lem-ring-elementary-consequences]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Ch. 4"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, §6.4"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Statement

For matrices over a commutative ring, whenever the shapes are compatible,
$$A(BC)=(AB)C,\qquad I_mA=A=AI_n,$$
$$A(B+C)=AB+AC,\qquad (A+B)C=AC+BC,$$
and
$$ (AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T},\qquad (A^{\mathsf T})^{\mathsf T}=A.$$
The corresponding entrywise additive and scalar laws also hold, including all zero-sized shapes.

## Facts & Assumptions

**Given:** A commutative ring $R$ and matrices of compatible finite shapes over $R$.

[L1] Matrix addition, multiplication, identity and transpose are given by their entrywise finite-sum formulas ([[def-ring-matrix-product-identity-and-transpose]]).

[L2] Finite sums in a commutative monoid may be reindexed and finite double sums may be taken in either order ([[lem-finite-sum-reindexing-and-fubini]]).

[L3] Ring multiplication distributes over addition, annihilates zero and obeys the usual sign laws ([[lem-ring-elementary-consequences]]).

## Proof

**Proof technique:** direct.

1.1 Entrywise ring addition gives its abelian-group laws. Substitution in the product formula gives $I_mA=A=AI_n$ and both distributive laws, since all off-diagonal identity terms are zero and the diagonal term is one. [L1, L3, algebra]

2.1 For compatible $A,B,C$, the $(i,\ell)$ entry of $(AB)C$ is $\sum_k(\sum_j a_{ij}b_{jk})c_{k\ell}$, while that of $A(BC)$ is $\sum_j a_{ij}(\sum_k b_{jk}c_{k\ell})$. Distributivity and finite-sum Fubini turn both into $\sum_{j,k}a_{ij}b_{jk}c_{k\ell}$. [step 1.1, L2, L3, algebra]

3.1 The $(k,i)$ entry of $(AB)^{\mathsf T}$ is $\sum_j a_{ij}b_{jk}=\sum_j b_{jk}a_{ij}$, the $(k,i)$ entry of $B^{\mathsf T}A^{\mathsf T}$; transposing twice restores each entry. Empty sums are zero, so every argument also covers zero-sized shapes. [step 2.1, L1, L2, algebra] ∎

