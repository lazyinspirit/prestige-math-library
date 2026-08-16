---
id: thm-a-reflective-inclusion-creates-all-limits
kind: theorem
title: "A reflective inclusion creates every ambient limit in the ordinary isomorphism-invariant sense"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, thm-an-object-lies-in-a-reflective-subcategory-exactly-when-its-reflection-unit-is-invertible, thm-right-adjoints-preserve-limits, def-preservation-reflection-creation-continuity-and-cocontinuity, def-limit-and-colimit-of-a-diagram, thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, corollary 4.5.15"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $I:\mathcal A\to\mathcal C$ be the inclusion of a reflective full subcategory. For every indexing category $\mathcal J$, every diagram $D:\mathcal J\to\mathcal A$, and every limiting cone $(L,p_j)$ of $ID$ in $\mathcal C$, that cone is isomorphic to the image of a limiting cone of $D$ in $\mathcal A$. Moreover, every cone of $D$ whose image is limiting is itself limiting. Thus $I$ creates all limits in the ordinary isomorphism-invariant sense of [[def-preservation-reflection-creation-continuity-and-cocontinuity]].

## Facts & Assumptions

**Given:** A reflection $R\dashv I$ ([[def-reflective-subcategory-and-reflector]]), a diagram $D:\mathcal J\to\mathcal A$, and a limiting cone $(L,p_j)$ of $ID$ in $\mathcal C$.

[L1] An ambient object lies in the essential image of $I$ exactly when its reflection unit is invertible ([[thm-an-object-lies-in-a-reflective-subcategory-exactly-when-its-reflection-unit-is-invertible]]).

[L2] Right adjoints preserve every existing limit over legitimate indexing categories ([[thm-right-adjoints-preserve-limits]]).

[L3] Ordinary creation requires an ambient limiting cone to be isomorphic to the image of a limiting source cone, and requires every source cone with limiting image to be limiting ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L4] A limiting cone has a unique mediating morphism from every cone with the same base diagram ([[def-limit-and-colimit-of-a-diagram]]).

[L5] For a full subcategory, a supplied reflector with its adjunction is equivalently a specified universal arrow $(R_C,\eta_C)$ from each object $C$ to the inclusion, the specified arrows being the components of the reflection unit ([[thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow]]).

## Proof

**Proof technique:** direct.

1.1 Applying $R$ to the legs and then the counit gives a cone from $R(L)$ to $D$; after inclusion its legs are $I(\varepsilon_{D_j})\circ IR(p_j)$. Naturality of the unit and the triangle identity give $I(\varepsilon_{D_j})\circ IR(p_j)\circ\eta_L=p_j$, so $\eta_L$ is a morphism from the given cone to this included cone. [given, L4]

2.1 By the universal property in [L4], the included cone has a unique map $q:IR(L)\to L$ with $p_j\circ q=I(\varepsilon_{D_j})\circ IR(p_j)$. Cone uniqueness gives $q\circ\eta_L=1_L$. Both $1_{IR(L)}$ and $\eta_L\circ q$ are maps between reflected objects whose composites with the universal reflection arrow $\eta_L$ equal $\eta_L$, and by [L5] the unit component $\eta_L$ is a universal arrow from $L$ to $I$, so the uniqueness clause of that universal property makes $\eta_L\circ q=1_{IR(L)}$. Hence $\eta_L$ is invertible and [L1] identifies $L$ with an included object. [step 1.1, L1, L4, L5]

3.1 Transporting the limiting cone across this isomorphism produces a cone of $D$ in the full subcategory whose image is isomorphic to $(L,p_j)$. Its image is limiting, and since $I$ is a right adjoint, [L2] preserves every source limit; conversely fullness makes any mediating map between included objects a unique map in $\mathcal A$, so a source cone with limiting image is limiting. These are exactly the clauses of [L3], including the empty and degenerate indexing categories. [step 2.1, L2, L3, L4] ∎
