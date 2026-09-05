---
id: def-morphism-ringed-spaces
kind: definition
title: "Morphisms of ringed spaces"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-direct-image-sheaf, def-morphism-of-presheaves, def-ringed-space]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Definition 6.25.1 and Section 26.2"
      url: "https://stacks.math.columbia.edu/tag/0090"
    - title: "Ravi Vakil, The Rising Sea, Section 6.2.D"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $(X,\mathcal O_X)$ and $(Y,\mathcal O_Y)$ be ringed spaces. A
**morphism of ringed spaces**
$$
(f,f^\sharp):(X,\mathcal O_X)\longrightarrow(Y,\mathcal O_Y)
$$
consists of

1. a continuous map $f:X\to Y$, and
2. a morphism of sheaves of rings
   $$
   f^\sharp:\mathcal O_Y\longrightarrow f_*\mathcal O_X
   $$
   on $Y$.

Equivalently, for every open set $V \subseteq Y$ there are ring homomorphisms
$$
f^\sharp_V:\mathcal O_Y(V)\longrightarrow \mathcal O_X(f^{-1}(V))
$$
compatible with restriction.

Composition is defined by composing the continuous maps and the corresponding
morphisms into the direct images of structure sheaves.
