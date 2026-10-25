---
id: cor-diffeomorphisms-preserve-interior-and-boundary
kind: corollary
title: "Diffeomorphisms preserve interior and boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-smooth-invariance-of-manifold-boundary, def-smooth-map-between-manifolds-with-boundary]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Every diffeomorphism of manifolds with boundary maps $\partial M$ onto $\partial N$ and $\operatorname{Int}M$ onto $\operatorname{Int}N$.

## Facts & Assumptions

**Given:** A diffeomorphism $F:M\to N$ between smooth manifolds with boundary.

[L1] A smooth diffeomorphism between relatively open half-space sets preserves their face and relative interior ([[thm-smooth-invariance-of-manifold-boundary]]).

[L2] Smoothness between manifolds with boundary is tested in boundary charts ([[def-smooth-map-between-manifolds-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], every coordinate representative of $F$ and its inverse in boundary charts is a smooth half-space diffeomorphism. [given, L2]

2.1 Applying [L1] to those representatives shows that $F$ maps boundary points exactly to boundary points and interior points exactly to interior points. Bijectivity then gives $F(\partial M)=\partial N$ and $F(\operatorname{Int}M)=\operatorname{Int}N$. [L1, step 1.1] ∎
