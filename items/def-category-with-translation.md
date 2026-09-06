---
id: def-category-with-translation
kind: definition
title: "Category with translation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-additive-category]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.1"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

A **category with translation** is an additive category $\mathcal T$ together
with a specified additive autoequivalence $[1]:\mathcal T\to\mathcal T$ and a
specified quasi-inverse $[-1]$. Write $X[n]$ for the iterated translates,
using the chosen coherence isomorphisms $[n][m]\cong[n+m]$.

