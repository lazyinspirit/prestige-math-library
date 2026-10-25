---
id: def-morphism-locally-ringed-spaces
kind: definition
title: "Morphisms of locally ringed spaces"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-locally-ringed-space, def-morphism-ringed-spaces]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Definition 26.2.1"
      url: "https://stacks.math.columbia.edu/tag/01HA"
    - title: "Ravi Vakil, The Rising Sea, Section 6.3.1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $(f,f^\sharp):(X,\mathcal O_X)\to(Y,\mathcal O_Y)$ be a morphism of ringed
spaces between locally ringed spaces. It is a **morphism of locally ringed
spaces** if for every point $x\in X$ the induced stalk map
$$
f^\sharp_x:\mathcal O_{Y,f(x)}\longrightarrow \mathcal O_{X,x}
$$
is a local ring homomorphism, meaning that the maximal ideal of
$\mathcal O_{Y,f(x)}$ maps into the maximal ideal of $\mathcal O_{X,x}$.
