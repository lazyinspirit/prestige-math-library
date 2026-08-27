---
id: fs-the-socle-is-always-a-single-simple-group
kind: false-statement
title: "FALSE: the socle is always a single simple group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-socle-is-characteristic-and-admits-a-direct-product-decomposition, thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James E. Humphreys, A Course in Group Theory, Proposition 16.11"
      url: "https://djvu.online/file/3PC3bR3vM2abK"
---

## Statement

**False claim:** for every finite group $G$, the socle $\operatorname{soc}(G)$ is
a single simple subgroup.

## Facts & Assumptions

**Given:** A nonabelian finite simple group $T$ and the direct product $G=T \times T$.

[L1] Finite characteristically simple groups are direct products of isomorphic
simple groups
([[thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups]]).

[L2] The socle of a finite group is a direct product of minimal normal
subgroups
([[prop-socle-is-characteristic-and-admits-a-direct-product-decomposition]]).

## Refutation

**Proof technique:** direct.

1.1 In the group $G=T \times T$, each factor $T \times 1$ and $1 \times T$ is a minimal normal subgroup, and they are distinct. [given]

2.1 By [L2], the socle of $G$ is the direct product of those minimal normal subgroups, so $\operatorname{soc}(G)=T \times T$. [L2, step 1.1]

3.1 The group $T \times T$ is not simple because each factor is a proper nontrivial normal subgroup. Therefore the claim is false. [L1, step 2.1] ∎
