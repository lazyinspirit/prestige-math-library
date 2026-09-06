---
id: def-integral-scheme
kind: definition
title: "Integral schemes"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scheme, def-reduction-of-scheme, def-irreducible-topological-space-and-subset, def-affine-open-subscheme]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 12"
      url: "https://stacks.math.columbia.edu/tag/01J1"
---
## Definition

An **integral scheme** is a nonempty scheme that is reduced and whose
underlying topological space is irreducible. Equivalently, it is nonempty and
every nonempty affine open is the spectrum of a domain. The latter criterion is
independent of the chosen affine open cover.
