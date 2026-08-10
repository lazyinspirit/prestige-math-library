---
id: thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form
kind: theorem
title: "Fundamental theorem of finite abelian groups: elementary-divisor form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-primary-decomposition-of-a-finite-abelian-group, thm-cyclic-decomposition-of-finite-abelian-p-groups, def-elementary-divisor-data-for-a-finite-abelian-group, lem-successive-p-multiple-quotients-recover-elementary-divisors, thm-classification-of-cyclic-groups]
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

Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order. The multiset of their orders is uniquely determined by the group, up to permutation of the factors.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] If $G$ is finite abelian and $|G|=\prod_{i<r}p_i^{a_i}$ is its prime factorisation, then the subgroups $G(p_i)$ form an internal direct product of $G$. Thus $$G\cong\prod_{i<r}G(p_i).$$ For the trivial group, this is the empty product. ([[thm-primary-decomposition-of-a-finite-abelian-group]]).

[L2] Every finite abelian $p$-group is isomorphic to a finite direct product of cyclic groups of prime-power order. The trivial $p$-group is the empty product. ([[thm-cyclic-decomposition-of-finite-abelian-p-groups]]).

[L3] An **elementary-divisor decomposition** of a finite abelian group $G$ is an isomorphism $$G\cong C_{q_0}\times\cdots\times C_{q_{r-1}},$$ where every $q_i>1$ is a prime power. The unordered multiset of the $q_i$, counted with multiplicity, is the **elementary-divisor data**. The cyclic factors and product use thm-classification-of-cyclic-groups and def-external-direct-product-of-groups. The data records factor isomorphism types, not distinguished internal subgroups; the trivial group has empty data. ([[def-elementary-divisor-data-for-a-finite-abelian-group]]).

[L4] Suppose $G\cong\prod_{j<r}C_{p^{e_j}}$ with $e_j\ge1$, and in additive notation write $p^iG=\{p^ig:g\in G\}$. Define $d_i$ by $|p^iG/p^{i+1}G|=p^{d_i}$. Then $$d_i=|\{j:e_j\ge i+1\}|.$$ Consequently, for every $k\ge1$, the number of summands of order $p^k$ is $d_{k-1}-d_k$, so the elementary divisors are intrinsic. ([[lem-successive-p-multiple-quotients-recover-elementary-divisors]]).

[L5] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: - if $g$ has infinite order, $G\cong(\mathbb Z,+)$; - if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$. ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** direct.

1.1 Primary decomposition separates $G$ into its intrinsic $p$-primary components, and cyclic decomposition expresses each component as a product of cyclic $p$-groups. This proves existence. [given, L1, L2, L3, L4, L5]

2.1 For a fixed prime $p$, the successive quotients $p^iG(p)/p^{i+1}G(p)$ recover the multiplicity of every cyclic order $p^k$. [step 1.1]

3.1 Doing this independently for each prime proves uniqueness of the multiset of elementary divisors. The assertion concerns factor isomorphism types, not uniqueness of internal complements. [step 2.1] ∎
