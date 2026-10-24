---
id: def-morphism-of-chain-maps
kind: definition
title: "A morphism of chain maps"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-map, def-category-of-chain-complexes]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Definition

Let $f:C_\bullet\to D_\bullet$ and $g:C'_\bullet\to D'_\bullet$ be chain maps. A
**morphism of chain maps**
$$(a,b):f\to g$$
is a pair of chain maps
$$a:C_\bullet\to C'_\bullet,\qquad b:D_\bullet\to D'_\bullet$$
such that the square commutes:
$$bf=ga.$$

Equivalently, it is a commutative square in the category
[[def-category-of-chain-complexes]].
