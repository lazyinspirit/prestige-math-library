---
id: thm-cyclic-decomposition-of-finite-abelian-p-groups
kind: theorem
title: "Every finite abelian p-group is a direct product of cyclic p-groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group, thm-strong-induction, thm-internal-direct-product-recognition, thm-classification-of-cyclic-groups]
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

Every finite abelian $p$-group is isomorphic to a finite direct product of cyclic groups of prime-power order. The trivial $p$-group is the empty product.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $G$ be a finite abelian $p$-group and let $a\in G$ have maximal element order. Then there is a subgroup $H\le G$ such that $$G=\langle a\rangle\oplus H.$$ ([[thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group]]).

[L2] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.) ([[thm-strong-induction]]).

[L3] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L4] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: - if $g$ has infinite order, $G\cong(\mathbb Z,+)$; - if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$. ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** direct.

1.1 Induct on $|G|$. The trivial group gives the empty product. Otherwise choose $a$ of maximal order and split $G=\langle a\rangle\oplus H$. [given, L1, L2, L3, L4]

2.1 The cyclic factor $\langle a\rangle$ has prime-power order. If $H$ is nontrivial then $|H|<|G|$, so induction decomposes $H$ into cyclic $p$-groups. [step 1.1]

3.1 Concatenating that decomposition with $\langle a\rangle$ and applying internal-product recognition gives the asserted external direct product. [step 2.1] ∎
