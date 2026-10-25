---
id: thm-jordan-holder-theorem-for-groups
kind: theorem
title: "The Jordan–Hölder theorem for groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-composition-series-composition-factors-and-length, thm-schreier-refinement-theorem, thm-correspondence-theorem-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
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

If a group $G$ has two composition series, then the series have the same length and their composition factors agree up to isomorphism and permutation.

## Facts & Assumptions

**Given:** Two composition series of the same group $G$.

[F1] A composition series is a strictly descending subnormal series with simple factors ([[def-composition-series-composition-factors-and-length]]).

[L1] Any two finite subnormal series of a group have equivalent refinements ([[thm-schreier-refinement-theorem]]).

[L2] For $N\trianglelefteq H$, the maps $K\mapsto K/N$ and inverse image under $H\to H/N$ give inverse inclusion-preserving bijections between subgroups above $N$ and subgroups of $H/N$, and they preserve normality ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the two composition series have equivalent refinements. [given, L1]

1.2 A subnormal refinement cannot insert a term strictly between adjacent terms $H\triangleright N$: the first inserted term $K$ would satisfy $N<K<H$ and $K\trianglelefteq H$, so [L2] would make $K/N$ a nontrivial proper normal subgroup of the simple factor $H/N$. [F1, L2]

2.1 Therefore each refinement differs from its original composition series only by repeated adjacent terms, and deleting those repetitions recovers the original series. [step 1.2]

3.1 Equivalence of the refinements now pairs the original nontrivial factors; hence the two series have the same number of factors, and a permutation matches their factors up to isomorphism. [step 1.1, step 2.1] ∎
