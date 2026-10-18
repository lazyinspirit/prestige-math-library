---
id: thm-conjugation-is-an-automorphism
kind: theorem
title: 'Conjugation $x\mapsto gxg^{-1}$ is an automorphism'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, lem-group-inverse-laws]
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
    - title: "Milne, Group Theory, Automorphisms of Groups"
      url: "https://math.libretexts.org/Workbench/Group_Theory_4e_%28Milne%29/03%3A_Automorphisms_and_Extensions/3.01%3A_Automorphisms_of_groups"
pipeline_run: null
---

## Statement

Conjugation $x\mapsto gxg^{-1}$ is an automorphism.

For each $g\in G$, the map $c_g:G\to G$, $c_g(x)=gxg^{-1}$, is an
automorphism.

## Facts & Assumptions

**Given:** A group $G$ and $g\in G$.

[L1] An automorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

[L2] Inverses reverse products and $g^{-1}$ is the inverse of $g$ ([[lem-group-inverse-laws]]).

## Proof

**Proof technique:** direct.

1.1 Associativity gives $c_g(xy)=gx yg^{-1}=(gxg^{-1})(gyg^{-1})$, so $c_g$ is a homomorphism. [L1, L2, given, algebra]

2.1 The map $c_{g^{-1}}$ is inverse to $c_g$ by cancellation. [step 1.1, L1, L2, given, algebra]

3.1 Thus $c_g$ is a bijective homomorphism and hence an automorphism. [step 2.1] ∎
