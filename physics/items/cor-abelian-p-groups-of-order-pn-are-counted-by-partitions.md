---
id: cor-abelian-p-groups-of-order-pn-are-counted-by-partitions
kind: corollary
title: "Isomorphism classes of abelian groups of order p^n are counted by partitions of n"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, def-partition-of-a-positive-integer, prop-order-of-finite-direct-product]
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
## Statement

For a prime $p$ and $n>0$, isomorphism classes of abelian groups of order $p^n$ are in bijection with partitions of $n$. For $n=0$, the unique group is the trivial group and corresponds separately to the empty partition.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order. The multiset of their orders is uniquely determined by the group, up to permutation of the factors. ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

[L2] For $n>0$, a **partition of $n$** is a finite nondecreasing list of positive integers $(e_1,\ldots,e_r)$ with $e_1+\cdots+e_r=n$, using finite natural sums as in def-nat-finite-sum-and-product and naturals as in def-natural-numbers. Equality is equality of these lists. The nondecreasing convention removes permutations from the data. ([[def-partition-of-a-positive-integer]]).

[L3] If $G$ and $H$ are finite groups, then their external direct product is finite and has order $|G\times H|=|G|\,|H|$. ([[prop-order-of-finite-direct-product]]).

## Proof

**Proof technique:** direct.

1.1 The elementary-divisor theorem writes such a group uniquely as $C_{p^{e_1}}\times\cdots\times C_{p^{e_r}}$ with the positive exponents arranged nondecreasingly. The product-order formula gives $e_1+\cdots+e_r=n$. [given, L1, L2, L3]

2.1 Thus the exponents form a partition of $n$, and every partition constructs a group of order $p^n$. Uniqueness of elementary divisors makes the two constructions inverse. [step 1.1] ∎
