---
id: thm-conjugation-homomorphism
kind: theorem
title: 'The map $g\mapsto(x\mapsto gxg^{-1})$ is a homomorphism $G\to\operatorname{Aut}(G)$ with kernel $Z(G)$ and image $\operatorname{Inn}(G)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inner-automorphism-group, thm-automorphisms-form-a-group, def-kernel-and-image-of-group-homomorphism, def-center-of-a-group, def-group-homomorphism, lem-group-inverse-laws]
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

The map $g\mapsto(x\mapsto gxg^{-1})$ is a homomorphism $G\to\operatorname{Aut}(G)$ with kernel $Z(G)$ and image $\operatorname{Inn}(G)$.

## Facts & Assumptions

**Given:** A group $G$.

[L1] $\operatorname{Inn}(G)=\{c_g:g\in G\}$ ([[def-inner-automorphism-group]]).

[L2] $\operatorname{Aut}(G)$ is a group under composition ([[thm-automorphisms-form-a-group]]).

[L3] Kernels and images are defined for group homomorphisms ([[def-kernel-and-image-of-group-homomorphism]]).

[L4] $Z(G)=\{g\in G:gx=xg\text{ for every }x\in G\}$ ([[def-center-of-a-group]]).

[L5] A homomorphism preserves the group operation ([[def-group-homomorphism]]).

[L6] $(gh)^{-1}=h^{-1}g^{-1}$ ([[lem-group-inverse-laws]]).

## Proof

**Proof technique:** direct.

1.1 Define $C(g)=c_g$; for every $x$, $C(gh)(x)=ghx(gh)^{-1}=g(hxh^{-1})g^{-1}=(C(g)\circ C(h))(x)$. [L1, L2, L3, L4, L5, L6, given, algebra]

2.1 Now $C(g)=\operatorname{id}_G$ exactly when $gxg^{-1}=x$ for every $x$, equivalently $g\in Z(G)$, and its image is $\operatorname{Inn}(G)$ by definition. [step 1.1, L1, L2, L3, L4, L5, L6, given, algebra]

3.1 Thus $C$ is a homomorphism with kernel $Z(G)$ and image $\operatorname{Inn}(G)$. [step 2.1] ∎
