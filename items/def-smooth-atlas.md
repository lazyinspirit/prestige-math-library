---
id: def-smooth-atlas
kind: definition
title: "Smooth atlases"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-manifold-chart-coordinate-domain-and-coordinate-functions, def-smoothly-compatible-charts]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Definition

Let $M$ be a topological $n$-manifold. A **smooth atlas** on $M$ is a family
$\mathcal A=(U_i,\varphi_i)_{i\in I}$ of charts on $M$
([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]) such that:

1. the coordinate domains cover $M$, that is $\bigcup_{i\in I}U_i=M$; and
2. any two members of $\mathcal A$ are smoothly compatible
   ([[def-smoothly-compatible-charts]]).

Two atlases $\mathcal A$ and $\mathcal B$ on $M$ are **compatible** when every
chart of $\mathcal A$ is smoothly compatible with every chart of $\mathcal B$.
The family of all charts of both atlases is written $\mathcal A\cup\mathcal B$.

## Remarks

- **The covering condition is part of being an atlas.** A family of pairwise
  compatible charts that does not cover $M$ is not an atlas, and the maximal
  atlas of [[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]]
  still covers $M$ for exactly this reason.

- **Compatibility of atlases is cross-pairwise, not pairwise within the union.**
  Compatibility within each atlas is already given; the extra content of
  "compatible atlases" is the smoothness of every transition across the two
  families, which is the hypothesis
  [[lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas]] turns into
  an atlas again.
