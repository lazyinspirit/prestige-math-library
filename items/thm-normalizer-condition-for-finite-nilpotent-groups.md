---
id: thm-normalizer-condition-for-finite-nilpotent-groups
kind: theorem
title: "Every proper subgroup of a finite nilpotent group is properly contained in its normalizer"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-upper-and-lower-central-characterizations-of-nilpotence, lem-central-series-commutator-criterion, def-normalizer-of-a-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-09-24
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

[L3] If $1=K_0\le\cdots\le K_c=G$ is a central series, then $[G,K_i]\le K_{i-1}$ for each $i\ge1$. With the library's convention $[h,z]=hzh^{-1}z^{-1}$, this gives $zhz^{-1}=[h,z]^{-1}h$ for $h\in G$ and $z\in K_i$. ([[lem-central-series-commutator-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Let $H<G$. By [L1], choose a central series $1=K_0\le\cdots\le K_c=G$. Since $K_0=1\le H$ and $K_c=G\nleq H$, there is a least $i\ge1$ with $K_i\nleq H$. Then $K_{i-1}\le H$; choose $z\in K_i\setminus H$. [L1, given]

2.1 For every $h\in H$, [L3] gives $[h,z]\in K_{i-1}\le H$, hence $zhz^{-1}=[h,z]^{-1}h\in H$. Thus $zHz^{-1}\subseteq H$. Since $z^{-1}\in K_i$, the same calculation with $z^{-1}$ gives $z^{-1}Hz\subseteq H$; conjugating this inclusion by $z$ gives $H\subseteq zHz^{-1}$. Therefore $zHz^{-1}=H$ and $z\in N_G(H)\setminus H$. [step 1.1, L2, L3]

3.1 Every $h\in H$ normalizes $H$, so $H\le N_G(H)$; the element $z\notin H$ from step 2.1 makes the inclusion strict. If $G=1$ there is no proper subgroup and the claim is vacuous. [step 2.1, L2] ∎
