---
id: ex-conjugation-in-symmetric-group-three
kind: example
title: 'Conjugation by $(1\,2)$ in $\operatorname{Sym}(\{1,2,3\})$ exchanges the transpositions $(1\,3)$ and $(2\,3)$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-conjugation-is-an-automorphism, def-inner-automorphism-group, def-symmetric-group, lem-symmetric-group-is-a-group]
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

Conjugation by $(1\,2)$ in $\operatorname{Sym}(\{1,2,3\})$ exchanges the transpositions $(1\,3)$ and $(2\,3)$.

## Facts & Assumptions

**Given:** The symmetric group on $\{1,2,3\}$, with composition acting right-to-left.

[L1] Conjugation is an automorphism ([[thm-conjugation-is-an-automorphism]]).

[L2] Inner automorphisms are conjugations ([[def-inner-automorphism-group]]).

[L3] Elements of $\operatorname{Sym}(\{1,2,3\})$ are bijections composed right-to-left ([[def-symmetric-group]]).

[L4] These bijections form a group ([[lem-symmetric-group-is-a-group]]).

## Verification

**Proof technique:** direct.

1.1 Direct evaluation on $1,2,3$ gives $(1\,2)(1\,3)(1\,2)=(2\,3)$. [L1, L2, L3, L4, given, algebra]

2.1 Since $(1\,2)^{-1}=(1\,2)$, the same computation with the roles reversed gives $(1\,2)(2\,3)(1\,2)=(1\,3)$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Thus this inner automorphism exchanges the two stated transpositions. [step 2.1] ∎
