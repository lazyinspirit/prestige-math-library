---
id: lem-product-with-normal-subgroup
kind: lemma
title: 'If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-subgroup-criterion, def-normal-subgroup, thm-normal-subgroup-characterisations, lem-group-inverse-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Judson, Abstract Algebra: Theory and Applications, Isomorphism Theorems"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.02%3A_The_Isomorphism_Theorms"
pipeline_run: null
---

## Statement

If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$.

Here $HN:=\{hn:h\in H,\ n\in N\}$.

## Facts & Assumptions

**Given:** A subgroup $H\le G$ and a normal subgroup $N\mathrel{\trianglelefteq}G$.

[L1] A nonempty subset closed under $xy^{-1}$ is a subgroup ([[lem-subgroup-criterion]]).

[L2] Normality means $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

[L3] A subgroup is normal if its conjugates by ambient elements lie in it ([[thm-normal-subgroup-characterisations]]).

[L4] $(ab)^{-1}=b^{-1}a^{-1}$ in a group ([[lem-group-inverse-laws]]).

## Proof

**Proof technique:** direct.

1.1 The identity lies in $HN$; for $h_1n_1,h_2n_2\in HN$, put $m=n_1n_2^{-1}\in N$, so $(h_1n_1)(h_2n_2)^{-1}=h_1mh_2^{-1}=h_1h_2^{-1}(h_2mh_2^{-1})\in HN$. [L1, L2, L3, L4, given, algebra]

2.1 Thus [L1] gives $HN\le G$; moreover for $h\in H$ and $x\in H\cap N$, both $hxh^{-1}\in H$ and $hxh^{-1}\in N$, so it lies in $H\cap N$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 The conjugation closure in step 2.1 gives $H\cap N\mathrel{\trianglelefteq}H$. [step 2.1] ∎
