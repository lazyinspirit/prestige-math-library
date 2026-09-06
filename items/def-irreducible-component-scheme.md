---
id: def-irreducible-component-scheme
kind: definition
title: "Irreducible components as schemes"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-scheme, def-reduction-of-scheme, def-irreducible-topological-space-and-subset]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 11"
      url: "https://stacks.math.columbia.edu/tag/01IZ"
---
## Definition

An **irreducible component** of a scheme $X$ is a maximal irreducible closed
subset of $|X|$, equipped, when regarded as a scheme, with its reduced induced
closed subscheme structure.
