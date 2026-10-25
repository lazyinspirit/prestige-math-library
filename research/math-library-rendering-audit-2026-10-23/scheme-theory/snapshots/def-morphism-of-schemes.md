---
id: def-morphism-of-schemes
kind: definition
title: "Morphisms of schemes"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-scheme, def-morphism-locally-ringed-spaces]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 1"
      url: "https://stacks.math.columbia.edu/tag/01J7"
---
## Definition

A **morphism of schemes** $f:X\to Y$ is a morphism of the underlying locally
ringed spaces. In particular its maps on stalks are local homomorphisms.
