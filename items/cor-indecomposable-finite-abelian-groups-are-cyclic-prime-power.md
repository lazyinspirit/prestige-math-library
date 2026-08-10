---
id: cor-indecomposable-finite-abelian-groups-are-cyclic-prime-power
kind: corollary
title: "The indecomposable finite abelian groups are exactly the nontrivial cyclic groups of prime-power order"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-indecomposable-finite-abelian-group, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, thm-cauchy-for-finite-abelian-groups, thm-subgroups-of-cyclic-groups-are-cyclic, cor-prime-order-group-is-cyclic]
justified_by: []
aliases: []
landmark: false
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

The indecomposable finite abelian groups are exactly the nontrivial cyclic groups of prime-power order.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] A nontrivial finite abelian group is **indecomposable** if it is not an internal direct product of two nontrivial subgroups in the sense of def-internal-direct-product-of-subgroups. It is **decomposable** if such a product exists. The trivial group is assigned neither label. ([[def-indecomposable-finite-abelian-group]]).

[L2] Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order. The multiset of their orders is uniquely determined by the group, up to permutation of the factors. ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

[L3] Let $G$ be a finite abelian group and let $p$ be a prime dividing $|G|$. Then $G$ contains an element, and hence a subgroup, of order $p$. ([[thm-cauchy-for-finite-abelian-groups]]).

[L4] Every subgroup $H$ of a cyclic group $G=\langle g\rangle$ is cyclic. If $H\ne\{e\}$, then the least positive integer $d$ for which $g^d\in H$ satisfies $H=\langle g^d\rangle$. ([[thm-subgroups-of-cyclic-groups-are-cyclic]]).

[L5] Let $G$ be a finite group such that the positive integer $|G|$ is prime. Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence generates $G$. In particular, $G$ is cyclic. ([[cor-prime-order-group-is-cyclic]]).

## Proof

**Proof technique:** direct.

1.1 The elementary-divisor theorem writes any nontrivial finite abelian group as a product of nontrivial cyclic prime-power factors. Indecomposability forces exactly one factor. [given, L1, L2, L3, L4, L5]

2.1 Conversely, if $C_{p^a}=B\oplus C$ with both factors nontrivial, Cauchy's theorem gives an order-$p$ subgroup in each factor. Their images are distinct, but a cyclic group has a unique subgroup of each possible order. Hence no such decomposition exists. [step 1.1] ∎
