---
id: cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction
kind: corollary
title: "A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-a-polynomial-ring-on-a-family, thm-universal-property-of-a-polynomial-ring, def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "U. Thiel, Commutative Algebra, Section 1.4"
      url: "https://ulthiel.com/math/files/Commutative-Algebra.pdf"
pipeline_run: null
---

## Statement

For a commutative ring $R$ and a finite ordered family
$(x_0,\ldots,x_{n-1})$, the arbitrary-family construction
$R[x_i:i<n]$ is canonically isomorphic as an $R$-algebra to the recursively
iterated polynomial ring $R[x_0]\cdots[x_{n-1}]$. The isomorphism fixes $R$ and
sends each formal indeterminate to the corresponding iterated indeterminate.
For $n=0$, both sides are $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a natural number $n$ indexing an ordered family of indeterminates.

[L1] A homomorphism out of the family polynomial ring is uniquely determined by its restriction to $R$ and the images of all indeterminates ([[thm-universal-property-of-a-polynomial-ring-on-a-family]]).

[L2] A homomorphism from $A[x]$ is uniquely determined by a homomorphism from $A$ and the image of $x$ ([[thm-universal-property-of-a-polynomial-ring]]).

[L3] The finite multivariate polynomial ring is defined recursively, with the empty iteration equal to $R$ and the successor obtained by adjoining one indeterminate ([[def-multivariate-polynomial-ring-by-iteration]]).

## Proof

**Proof technique:** induction.

1.1 For $n=0$, [L3] makes the iterated construction $R$, while the empty-family clause of [L1] makes the family construction canonically $R$. [base, L1, L3]

1.2 Assume the canonical isomorphism has been constructed for a family of length $n$ and fixes $R$ and its indeterminates. [ih]

2.1 For length $n+1$, [L2] extends the induction isomorphism after choosing the image of the new variable, while [L1] gives a homomorphism in the reverse direction fixing $R$ and all $n+1$ variables. [step 1.2, L1, L2, L3]

3.1 Both composites fix $R$ and every indeterminate, so uniqueness in [L1] and [L2] makes them identity homomorphisms; the construction therefore holds for every $n$, including the empty family. [step 2.1, L1, L2, discharge-induction] ∎
