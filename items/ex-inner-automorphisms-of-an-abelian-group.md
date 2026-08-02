---
id: ex-inner-automorphisms-of-an-abelian-group
kind: example
title: 'Every inner automorphism of an abelian group is the identity'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-inner-automorphism-group, def-group, def-center-of-a-group]
justified_by: []
aliases: []
landmark: false
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

## Example

Every inner automorphism of an abelian group is the identity.

## Facts & Assumptions

**Given:** An abelian group $G$ and $g\in G$.

[L1] An inner automorphism has the form $c_g(x)=gxg^{-1}$ ([[def-inner-automorphism-group]]).

[L2] In an abelian group $gx=xg$ for all $g,x\in G$ ([[def-group]]).

[L3] The center consists of elements commuting with every element ([[def-center-of-a-group]]).

## Verification

**Proof technique:** direct.

1.1 Since $G$ is abelian, $g\in Z(G)$ and $gxg^{-1}=xgg^{-1}=x$. [L1, L2, L3, given, algebra]

2.1 Hence $c_g=\operatorname{id}_G$ for the chosen $g$. [step 1.1, L1, L2, L3, given]

3.1 As $g$ was arbitrary, every inner automorphism is the identity. [step 2.1] ∎
