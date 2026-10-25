---
id: def-scheme-theoretic-image
kind: definition
title: "Scheme-theoretic image"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-of-schemes, def-closed-immersion-schemes]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 6.2"
      url: "https://stacks.math.columbia.edu/tag/01R5"
---
## Definition

For a morphism $f:X\to Y$, its **scheme-theoretic image**, when it exists, is
the smallest closed subscheme $Z\hookrightarrow Y$ through which $f$ factors.
Existence is not part of this definition.
