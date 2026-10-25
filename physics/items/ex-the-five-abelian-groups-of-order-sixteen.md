---
id: ex-the-five-abelian-groups-of-order-sixteen
kind: example
title: "The five abelian groups of order sixteen"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-abelian-p-groups-of-order-pn-are-counted-by-partitions, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, def-partition-of-a-positive-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Example

The abelian groups of order $16$ are, up to isomorphism, $$C_{16},\quad C_8\times C_2,\quad C_4\times C_4,\quad C_4\times C_2\times C_2,\quad C_2^4.$$

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] For a prime $p$ and $n>0$, isomorphism classes of abelian groups of order $p^n$ are in bijection with partitions of $n$. For $n=0$, the unique group is the trivial group and corresponds separately to the empty partition. ([[cor-abelian-p-groups-of-order-pn-are-counted-by-partitions]]).

[L2] Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order. The multiset of their orders is uniquely determined by the group, up to permutation of the factors. ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

[L3] For $n>0$, a **partition of $n$** is a finite nondecreasing list of positive integers $(e_1,\ldots,e_r)$ with $e_1+\cdots+e_r=n$, using finite natural sums as in def-nat-finite-sum-and-product and naturals as in def-natural-numbers. Equality is equality of these lists. The nondecreasing convention removes permutations from the data. ([[def-partition-of-a-positive-integer]]).

## Verification

**Proof technique:** direct.

1.1 The partitions of $4$ are $4$, $3+1$, $2+2$, $2+1+1$, and $1+1+1+1$. [given, L1, L2, L3]

2.1 Replacing each part $e$ by $C_{2^e}$ gives the displayed groups. The partition bijection makes the list exhaustive and prevents repetitions. [step 1.1] ∎
