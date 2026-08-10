---
id: thm-polynomial-ring-is-a-commutative-ring
kind: theorem
title: 'Polynomial convolution makes R[x] a commutative ring containing R as its constant subring'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-ring-over-a-commutative-ring, lem-polynomial-operations-preserve-finite-support, lem-finite-sum-reindexing-and-fubini, def-ring-homomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Chapter 17.1'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Section 22'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

For every commutative ring $R$, the coefficientwise addition and convolution multiplication of [[def-polynomial-ring-over-a-commutative-ring]] make $R[x]$ a commutative ring. The constant-polynomial map $c\colon R\to R[x]$ is an injective unital ring homomorphism ([[def-ring-homomorphism]]).

## Facts & Assumptions

**Given:** A commutative ring $R$ and the operations on $R[x]$ defined by coefficientwise addition and finite convolution.

[L1] The set $R[x]$ consists of finitely supported coefficient sequences, with $(ab)_n=\sum_{i+j=n}a_i b_j$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[L2] Coefficientwise sums and convolution products of finitely supported sequences are finitely supported ([[lem-polynomial-operations-preserve-finite-support]]).

[L3] Finite sums in a commutative monoid are invariant under bijective reindexing, split over disjoint unions, and may be summed in either order over a finite product ([[lem-finite-sum-reindexing-and-fubini]]).

[L4] A ring homomorphism preserves addition, multiplication, and the multiplicative identity ([[def-ring-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Closure follows from [L2]; the additive group laws, including the zero sequence and coefficientwise negatives, follow coefficient by coefficient from the additive group laws in $R$. [given, L1, L2]

2.1 Distributivity follows by splitting each finite convolution sum, commutativity follows by reindexing $(i,j)$ as $(j,i)$ and using commutativity in $R$, and associativity follows by [L3] from the equality of the two finite sums $\sum_{i+j+k=n}a_i b_j c_k$; the sequence $1$ is a multiplicative identity because only the index-$0$ coefficient contributes. Finally $c(r+s)=c(r)+c(s)$, $c(rs)=c(r)c(s)$, and $c(1_R)=1$, so [L4] makes $c$ a unital ring homomorphism, while equality of constant sequences forces equality of their index-$0$ coefficients and makes $c$ injective. [step 1.1, L1, L3, L4, algebra] ∎
