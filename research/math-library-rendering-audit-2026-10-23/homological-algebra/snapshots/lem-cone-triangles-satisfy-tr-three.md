---
id: lem-cone-triangles-satisfy-tr-three
kind: lemma
title: "Cone triangles satisfy TR3"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-distinguished-cone-triangle-in-the-homotopy-category, def-triangulated-category-axiom-tr-three]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 13.9.2"
      url: "https://stacks.math.columbia.edu/tag/014D"
---

## Statement

The distinguished cone triangles in $K(\mathcal A)$ satisfy TR3.

## Facts & Assumptions

**Given:** A commuting square of first maps between two standard cone triangles.

## Proof

1.1 Choose chain-map representatives $a:C\to C'$ and $b:D\to D'$ for the two vertical arrows.  Commutativity in $K(\mathcal A)$ means that there is a chain homotopy $H$ with $$bf-f'a=dH+Hd.$$ With the cone convention of [[def-distinguished-cone-triangle-in-the-homotopy-category]], the matrix $$\begin{pmatrix}b&H\\0&a[1]\end{pmatrix}:\operatorname{Cone}(f)\longrightarrow\operatorname{Cone}(f')$$ is a chain map. [given]

2.1 Its composites with the cone inclusion and projection agree in $K(\mathcal A)$ with the prescribed vertical arrows (the possible $H$-terms are precisely homotopies).  Thus its homotopy class is the required third component of a morphism of triangles; isomorphic replacements of standard cone triangles preserve the conclusion. [step 1.1, given] ∎
