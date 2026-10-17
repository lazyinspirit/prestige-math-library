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

1.1 If $n=0$, take $Q=I_m$ and the unique $m\times0$ matrix $R$; the reduced factors are the corresponding empty blocks. For $n>0$, process columns $k=0,\ldots,n-1$. If the active subvector in rows $k$ through $m-1$ is zero, use the identity on those rows (equivalently skip the annihilation), since its targeted entries are already zero. Otherwise apply the nonzero-vector Householder assertion of [L2]. In the Givens route, eliminate the targeted entries in those rows one at a time: apply [L2] to a nonzero pair, and use the identity when both entries of the pair are zero. Embed every transformation into the identity on the first $k$ rows. Earlier columns have zero entries in the active rows, so their existing zeros remain unchanged. The product $U$ of these unitary transformations therefore makes $R=UA$ upper trapezoidal. Set $Q=U^*$, giving $A=QR$. Taking the first $n$ columns of $Q$ and first $n$ rows of $R$ gives the reduced factors, even for rank-deficient $A$. The constructive argument does not require the square invertibility hypothesis of the contextual existence result [L3]. [L1, L2, induction, cases, algebra]

2.1 Count triangularization with $Q$ retained as its transformation product; explicitly forming a dense full $Q$ is additional work. For these standard dense counts, use the fixed trailing-update schedule: a zero-column identity may be represented by $B\mapsto B-\tau v(v^{\mathsf T}B)$ with $\tau=0$ and a fixed unit coordinate vector $v$, and an identity Givens pair by $c=1,s=0$. Thus the same scheduled arithmetic is defined on zero data; implementations that skip such updates may do less work. In a dense real Householder step on the trailing block of size $(m-k)\times(n-k)$, forming the reflector costs $O(m-k)$ scalar operations and applying it to the trailing block costs $4(m-k)(n-k)$ scalar operations. Summing over $k=0,\ldots,n-1$ gives $$ 4\sum_{k=0}^{n-1}(m-k)(n-k)+O\!\left(\sum_{k=0}^{n-1}(m-k)\right) =2mn^2-\frac{2}{3}n^3+O(mn). $$ [step 1.1, algebra]

2.2 In dense real Givens QR, column $k$ has $m-k-1$ entries to eliminate below the diagonal, and each rotation updates two rows across the remaining $n-k$ columns using $6(n-k)+O(1)$ scalar operations. Hence the cost is $$ 6\sum_{k=0}^{n-1}(m-k-1)(n-k)+O(mn) =3mn^2-n^3+O(mn). $$ [step 1.1, algebra]

3.1 Step 1.1 proves the constructive QR statement, and steps 2.1-2.2 give the standard dense operation counts. [step 1.1, step 2.1, step 2.2, discharge-induction] ∎
