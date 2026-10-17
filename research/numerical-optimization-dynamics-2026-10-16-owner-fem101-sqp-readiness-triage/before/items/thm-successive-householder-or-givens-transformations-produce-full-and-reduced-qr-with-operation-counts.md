---
id: thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts
kind: theorem
title: "Successive Householder or Givens transformations produce full and reduced QR factorisations with the standard dense operation counts"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-full-reduced-and-column-pivoted-computational-qr-factorisations, thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries, thm-qr-factorisation-over-r-or-c]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 3.4.2"
      url: "https://fncbook.com/house/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Least squares and QR"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html"
---

## Statement

Let $A\in M_{m\times n}(\mathbb F)$ with $\mathbb F=\mathbb R$ or $\mathbb C$
and $m\ge n$.

1. Successive Householder reflectors or Givens transformations can zero the
   subdiagonal entries column by column and produce a full QR factorisation
   $A=QR$ and hence a reduced QR factorisation $A=\widehat Q\widehat R$.
2. In dense real arithmetic, Householder QR uses
   $$2mn^2-\frac{2}{3}n^3+O(mn)$$
   scalar operations, while dense Givens QR uses
   $$3mn^2-n^3+O(mn)$$
   scalar operations.

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(\mathbb F)$ with $m\ge n$.

[L1] Full and reduced computational QR factorisations are defined in [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]].

[L2] Householder reflectors and Givens transformations are orthogonal or unitary and can annihilate chosen entries below the diagonal ([[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]).

[L3] Every invertible square real or complex matrix has a QR factorisation ([[thm-qr-factorisation-over-r-or-c]]).

## Proof

**Proof technique:** induction on the column index and summation of the shrinking trailing updates.

1.1 For column $k$, apply [L2] to the subvector of rows $k$ through $m-1$. Embedding the resulting reflector or sequence of Givens transformations into the identity on the first $k$ rows leaves the earlier zeros unchanged and zeros all entries below the diagonal in column $k$. Repeating for $k=0,\ldots,n-1$ produces a unitary matrix $Q^*$ whose product with $A$ is upper trapezoidal; therefore $A=QR$ with $Q=(Q^*)^*$, and deleting the zero rows of $R$ gives the reduced factorisation, in the computational form refining the abstract QR existence of [L3]. [L1, L2, L3, induction]

2.1 In a dense real Householder step on the trailing block of size $(m-k)\times(n-k)$, forming the reflector costs $O(m-k)$ scalar operations and applying it to the trailing block costs $4(m-k)(n-k)$ scalar operations. Summing over $k=0,\ldots,n-1$ gives $$ 4\sum_{k=0}^{n-1}(m-k)(n-k)+O\!\left(\sum_{k=0}^{n-1}(m-k)\right) =2mn^2-\frac{2}{3}n^3+O(mn). $$ [step 1.1, algebra]

2.2 In dense real Givens QR, column $k$ has $m-k-1$ entries to eliminate below the diagonal, and each rotation updates two rows across the remaining $n-k$ columns using $6(n-k)+O(1)$ scalar operations. Hence the cost is $$ 6\sum_{k=0}^{n-1}(m-k-1)(n-k)+O(mn) =3mn^2-n^3+O(mn). $$ [step 1.1, algebra]

3.1 Step 1.1 proves the constructive QR statement, and steps 2.1-2.2 give the standard dense operation counts. [step 1.1, step 2.1, step 2.2, discharge-induction] ∎
