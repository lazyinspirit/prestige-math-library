---
id: thm-generalized-fitting-subgroup-contains-its-centralizer
kind: theorem
title: "The generalized Fitting subgroup contains its centralizer"
status: draft
origin: pipeline
deps: [def-generalized-fitting-subgroup, lem-distinct-components-commute, lem-centralizer-of-a-normal-subgroup-is-normal, thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

For a finite group $G$, $C_G(F^*(G))\le F^*(G)$.

## Facts & Assumptions

**Given:** Let $G$ be finite and put $F^*(G)=F(G)E(G)$.

[L1] Smith's generalized-Fitting theorem says that $F(G)E(G)$ contains its centralizer in every finite group $G$.

## Proof

**Proof technique:** direct.

1.1 Smith's generalized-Fitting theorem states, with these conventions, that the product of the Fitting subgroup and the layer is self-centralizing.  Its component input is [[lem-distinct-components-commute]], and its finite-group hypotheses are exactly those in the statement. [L1, given]

2.1 Therefore $C_G(F(G)E(G))\le F(G)E(G)$, which is $C_G(F^*(G))\le F^*(G)$. [step 1.1, algebra] ∎
