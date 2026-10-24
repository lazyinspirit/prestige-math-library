---
id: "prop-bounded-derived-localizations-embed-fully-faithfully"
kind: "proposition"
title: "Bounded derived localizations embed fully faithfully"
deps: ["lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology", "def-derived-category-of-an-abelian-category", "thm-the-derived-category-inherits-a-triangulated-structure"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The canonical functors $D^-(\mathcal A),D^+(\mathcal A),D^b(\mathcal A)\to D(\mathcal A)$ are fully faithful and exact. Their essential images consist exactly of complexes with cohomology respectively bounded above, bounded below, or bounded on both sides.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ and the four derived localizations under their standing size hypotheses.

[F1] Canonical truncations preserve cohomology on their retained sides ([[lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]]).

[F2] Bounded derived categories are initially localizations of termwise bounded homotopy categories with both roof orientations ([[def-derived-category-of-an-abelian-category]]).

[F3] The derived category has cone triangulation and long exact cohomology sequences ([[thm-the-derived-category-inherits-a-triangulated-structure]]).

## Proof

1.1 If cohomology vanishes above $b$, the map $\tau^{\leq b}X\to X$ is a quasi-isomorphism. If it vanishes below $a$, $X\to\tau^{\geq a}X$ is one. When both bounds hold take $a\leq b$ and combine them, obtaining a zigzag to $\tau^{\geq a}\tau^{\leq b}X$, which is termwise bounded. Acyclic and zero complexes allow any such bounds. [F1]

1.2 For termwise bounded-above endpoints, any left-roof vertex is cohomologically bounded above, so replace it by its upper canonical truncation. This proves fullness from $D^-$. To test equality, first put two roofs at a common vertex and then use an equalizing denominator; upper-truncate this witness too. The equality already holds in $D^-$. For bounded-below endpoints use right roofs and lower truncation of the target vertices and equality witnesses. [F1, F2, algebra]

2.1 For bounded endpoints first work in $D^-$, as just proved. Use right roofs there and lower-truncate their vertices and equality witnesses; they remain bounded above, so are now bounded. This proves full faithfulness of $D^b\to D^-\to D$. The cohomology functors show that every object in each essential image has the claimed bounds, while step 1.1 proves the reverse inclusion. [F1, F2, step 1.1, step 1.2]

3.1 Shifts and cones preserve each cohomological boundedness condition by the long exact sequence. Cone triangles in the bounded models map to cone triangles in $D$, so each inclusion is exact and the described full subcategories are triangulated. [F3, step 2.1] ∎
