---
id: cor-group-mod-center-is-inner-automorphism-group
kind: corollary
title: '$G/Z(G)\cong\operatorname{Inn}(G)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-conjugation-homomorphism, thm-first-isomorphism-theorem-groups, def-center-of-a-group]
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

$G/Z(G)\cong\operatorname{Inn}(G)$.

## Facts & Assumptions

**Given:** A group $G$.

[L1] The conjugation map has kernel $Z(G)$ and image $\operatorname{Inn}(G)$ ([[thm-conjugation-homomorphism]]).

[L2] $G/\ker f\cong\operatorname{im}f$ for every group homomorphism $f$ ([[thm-first-isomorphism-theorem-groups]]).

[L3] $Z(G)$ is the center of $G$ ([[def-center-of-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the conjugation homomorphism of [L1]. [L1, L2, L3, given]

2.1 Substituting its kernel and image yields $G/Z(G)\cong\operatorname{Inn}(G)$. [step 1.1, L1, L2, L3, given]

3.1 This is the asserted isomorphism. [step 2.1] ∎
