---
id: thm-automorphisms-form-a-group
kind: theorem
title: 'The automorphisms of a group form a group under composition'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, lem-inverse-of-bijective-group-homomorphism, def-symmetric-group, lem-symmetric-group-is-a-group]
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

The automorphisms of a group form a group under composition.

## Facts & Assumptions

**Given:** A group $G$.

[L1] $\operatorname{Aut}(G)$ is the set of bijective homomorphisms $G\to G$ ([[def-group-isomorphism-and-automorphism]]).

[L2] The inverse of a bijective homomorphism is a homomorphism ([[lem-inverse-of-bijective-group-homomorphism]]).

[L3] The symmetric group uses composition of bijections ([[def-symmetric-group]]).

[L4] Bijections of a set form a group under composition ([[lem-symmetric-group-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 The identity map is an automorphism, and the composite of two automorphisms is again a bijective homomorphism. [L1, L2, L3, L4, given, algebra]

2.1 By [L2], the inverse of every automorphism is an automorphism, while associativity comes from composition of functions. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Hence the closure and inverse properties in step 2.1 give a group structure on $\operatorname{Aut}(G)$. [step 2.1] ∎
