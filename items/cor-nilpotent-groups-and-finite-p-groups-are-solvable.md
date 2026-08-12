---
id: cor-nilpotent-groups-and-finite-p-groups-are-solvable
kind: corollary
title: "Nilpotent groups, and in particular finite $p$-groups, are solvable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derived-series-solvable-group-and-derived-length, def-subgroup-commutator-and-lower-central-series, thm-upper-and-lower-central-characterizations-of-nilpotence, thm-finite-p-groups-are-nilpotent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Every nilpotent group is solvable. Consequently every finite $p$-group is solvable.

## Facts & Assumptions

**Given:** A nilpotent group $G$.

[F1] $G^{(0)}=G$ and $G^{(r+1)}=[G^{(r)},G^{(r)}]$ ([[def-derived-series-solvable-group-and-derived-length]]).

[F2] $\gamma_1(G)=G$ and $\gamma_{r+1}(G)=[G,\gamma_r(G)]$ ([[def-subgroup-commutator-and-lower-central-series]]).

[L1] Nilpotence is equivalent to $\gamma_{c+1}(G)=1$ for some $c$ ([[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

[L2] Every finite $p$-group is nilpotent ([[thm-finite-p-groups-are-nilpotent]]).

## Proof

**Proof technique:** direct.

1.1 For every subgroup $H\le G$, one has $[H,H]\le[G,H]$. [F2, algebra]

2.1 Induction on $r$ gives $G^{(r)}\le\gamma_{r+1}(G)$: equality holds at $r=0$, and step 1.1 sends the inclusion at $r$ to $G^{(r+1)}\le[G,\gamma_{r+1}(G)]=\gamma_{r+2}(G)$. [step 1.1, F1, F2]

3.1 Choose $c$ with $\gamma_{c+1}(G)=1$ using [L1]. Step 2.1 gives $G^{(c)}=1$, so $G$ is solvable by [F1]. [step 2.1, L1, F1, choose]

4.1 A finite $p$-group is nilpotent by [L2], so step 3.1 applies. [step 3.1, L2] ∎
