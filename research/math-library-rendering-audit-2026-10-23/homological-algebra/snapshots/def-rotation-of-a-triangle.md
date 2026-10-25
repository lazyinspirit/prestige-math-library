---
id: def-rotation-of-a-triangle
kind: definition
title: "Rotation of a triangle"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangle-in-a-category-with-translation]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.2"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

The **left rotation** of $X\xrightarrow fY\xrightarrow gZ\xrightarrow hX[1]$
is
$$Y\xrightarrow gZ\xrightarrow hX[1]\xrightarrow{-f[1]}Y[1].$$
Its **inverse (right) rotation** is
$$Z[-1]\xrightarrow{-h[-1]}X\xrightarrow fY\xrightarrow gZ,$$
where the displayed source and target use the specified coherence
isomorphisms for $[-1]$ and $[1]$.  This fixes the sign convention used below.
