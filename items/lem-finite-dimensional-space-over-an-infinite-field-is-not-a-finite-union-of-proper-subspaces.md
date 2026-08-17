---
id: lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
kind: lemma
title: "A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vector-space, def-linear-basis, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a finite-dimensional vector space over an infinite field $F$. No
finite family of proper linear subspaces of $V$ has union $V$.

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$ over an infinite field $F$, and a finite family $W_0,\ldots,W_{m-1}$ of proper linear subspaces.

[L1] A vector space has addition and scalar multiplication satisfying the vector-space axioms ([[def-vector-space]]).

[L2] A finite-dimensional vector space has a finite basis, and the empty basis occurs exactly for the zero space ([[def-linear-basis]]).

[L3] A finite set has a natural-number cardinality invariant under bijection ([[def-finite-cardinality]]).

## Proof

**Proof technique:** induction.

1.1 For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space. [base, L1]

1.2 Assume the assertion for families of fewer than $m>0$ proper subspaces, in every finite-dimensional vector space over $F$. [ih]

2.1 If $m=1$, choose $b\in V\setminus W_0$ and the result is immediate. For $m>1$, remove any $W_i$ contained in another member; if this shortens the family, the induction hypothesis applies. Otherwise every $W_{m-1}\cap W_i$ is a proper subspace of $W_{m-1}$, so the induction hypothesis inside $W_{m-1}$ gives a nonzero $a\in W_{m-1}$ lying in none of the earlier $W_i$. Choose $b\in V\setminus W_{m-1}$. [step 1.2, L1, L2, choose]

3.1 In the unresolved case $m>1$, on the affine line $\{b+ta:t\in F\}$ each $W_i$ contains at most one point: two such points would have difference a nonzero scalar multiple of $a$, putting $a$ in $W_i$ for $i<m-1$, while any point in $W_{m-1}$ would put $b$ there. [step 2.1, L1, algebra]

4.1 For $m>1$ the union therefore meets the line in at most a finite set of points by [L3], whereas $t\mapsto b+ta$ is injective and $F$ is infinite. Some point of the line lies outside every $W_i$; together with the $m=1$ conclusion in step 2.1, this completes the induction. [step 2.1, step 3.1, L3, discharge-induction] ∎
