---
id: thm-inner-automorphisms-normal-in-automorphism-group
kind: theorem
title: '$\operatorname{Inn}(G)$ is a normal subgroup of $\operatorname{Aut}(G)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inner-automorphism-group, thm-automorphisms-form-a-group, thm-normal-subgroup-characterisations, lem-inverse-of-bijective-group-homomorphism]
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

$\operatorname{Inn}(G)$ is a normal subgroup of $\operatorname{Aut}(G)$.

## Facts & Assumptions

**Given:** A group $G$.

[L1] Inner automorphisms are the maps $c_g$ ([[def-inner-automorphism-group]]).

[L2] $\operatorname{Aut}(G)$ is a group under composition ([[thm-automorphisms-form-a-group]]).

[L3] A conjugation-stable subgroup is normal ([[thm-normal-subgroup-characterisations]]).

[L4] The inverse of a bijective homomorphism is a homomorphism ([[lem-inverse-of-bijective-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 For $\varphi\in\operatorname{Aut}(G)$ and $c_g\in\operatorname{Inn}(G)$, direct evaluation gives $(\varphi c_g\varphi^{-1})(x)=\varphi(g)x\varphi(g)^{-1}=c_{\varphi(g)}(x)$. [L1, L2, L3, L4, given, algebra]

2.1 Thus conjugation by every element of $\operatorname{Aut}(G)$ carries $\operatorname{Inn}(G)$ into itself; applying the same statement to $\varphi^{-1}$ gives equality. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 The conjugation closure in step 2.1 proves normality. [step 2.1] ∎
