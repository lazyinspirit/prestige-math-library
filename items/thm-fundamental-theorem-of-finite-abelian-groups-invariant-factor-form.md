---
id: thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
kind: theorem
title: "Fundamental theorem of finite abelian groups: invariant-factor form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, lem-elementary-divisors-regroup-into-invariant-factors, def-invariant-factor-data-for-a-finite-abelian-group, prop-order-of-finite-direct-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

For every finite abelian group $G$ there is a unique list $$1<n_1\mid\cdots\mid n_r$$ such that $G\cong C_{n_1}\times\cdots\times C_{n_r}$. Moreover $|G|=n_1\cdots n_r$. The trivial group corresponds to the empty list and empty product.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order. The multiset of their orders is uniquely determined by the group, up to permutation of the factors. ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

[L2] Every multiset of prime-power elementary divisors regroups in exactly one way into an invariant-factor list. ([[lem-elementary-divisors-regroup-into-invariant-factors]]).

[L3] An **invariant-factor list** for a finite abelian group $G$ is a finite list of integers $$1<n_1\mid n_2\mid\cdots\mid n_r$$ together with an isomorphism $G\cong C_{n_1}\times\cdots\times C_{n_r}$. The cyclic factors and product use thm-classification-of-cyclic-groups and def-external-direct-product-of-groups. Unit factors are omitted. The trivial group has the empty list. ([[def-invariant-factor-data-for-a-finite-abelian-group]]).

[L4] If $G$ and $H$ are finite groups, then their external direct product is finite and has order $|G\times H|=|G|\,|H|$. ([[prop-order-of-finite-direct-product]]).

## Proof

**Proof technique:** direct.

1.1 The elementary-divisor theorem supplies a unique multiset of prime powers, and the regrouping lemma converts it into a unique invariant-factor list. [given, L1, L2, L3, L4]

2.1 The order formula for finite direct products gives $|G|=\prod_i n_i$; for the empty list this product is $1$, the order of the trivial group. [step 1.1] ∎
