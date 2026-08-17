---
id: thm-normalizer-condition-for-finite-nilpotent-groups
kind: theorem
title: "Every proper subgroup of a finite nilpotent group is properly contained in its normalizer"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-upper-and-lower-central-characterizations-of-nilpotence, def-normalizer-of-a-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Every proper subgroup of a finite nilpotent group is properly contained in its normalizer. See [[thm-upper-and-lower-central-characterizations-of-nilpotence]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a group $G$ and $c\in\mathbb N$, the following are equivalent: 1. $G$ has a central series $1=H_0\le\cdots\le H_c=G$; 2. $Z_c(G)=G$; 3. $\gamma_{c+1}(G)=1$. Hence $G$ is nilpotent exactly when its lower central series reaches $1$, and the least such $c$ is its nilpotency class. ([[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

[L2] Let $H\le G$ be a subgroup (def-subgroup). The normalizer of $H$ in $G$ is $$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$ Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves $H$ setwise (thm-conjugation-is-an-automorphism). The subgroup property is proved in lem-centralizers-and-normalizers-are-subgroups. ([[def-normalizer-of-a-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 We use a central series and take the first term not contained in the proper subgroup $H$. [L1, L2, given, algebra]

2.1 The preceding term lies in $H$, so an element newly appearing at that stage normalizes $H$ modulo the preceding term but is not in $H$. [step 1.1, given, algebra]

3.1 Both boundary cases are admitted and hold. If $G$ has nilpotency class zero then $G=1$, which has no proper subgroup, so the claim is vacuously true and step 1.1 is never entered. If $H=1$ and $G\ne1$, then $N_G(H)=G$, which properly contains $H$. This proves the stated claim. [step 1.1, step 2.1, given, algebra] ∎
