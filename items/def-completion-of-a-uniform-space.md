---
id: def-completion-of-a-uniform-space
kind: definition
title: "A Hausdorff completion of a uniform space and its canonical dense map"
status: published
origin: session
deps: [def-complete-uniform-space, def-separated-uniform-space, def-uniform-embedding-and-uniform-isomorphism, def-interior-closure-boundary-top, def-uniformly-continuous-map]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Definition

A **Hausdorff completion** of a uniform space $(X,\mathcal U)$ is a complete
separated uniform space $(\widehat X,\widehat{\mathcal U})$ together with a map
$\eta:X\to\widehat X$ satisfying both of the following conditions.

- The image $\eta[X]$ is dense:
  $\overline{\eta[X]}=\widehat X$ ([[def-interior-closure-boundary-top]]).
- The original uniformity is exactly the uniformity pulled back along $\eta$:
  for every $\widehat E\in\widehat{\mathcal U}$,
  $(\eta\times\eta)^{-1}[\widehat E]\in\mathcal U$, and for every
  $E\in\mathcal U$ there is $\widehat E\in\widehat{\mathcal U}$ with
  $(\eta\times\eta)^{-1}[\widehat E]\subseteq E$.

The first half of the second condition is uniform continuity
([[def-uniformly-continuous-map]]); the second half prevents the completion map
from discarding any of the original uniform structure. The map is not required
to be injective. It is a uniform embedding
([[def-uniform-embedding-and-uniform-isomorphism]]) exactly when it is injective,
and this is the usual completion of a separated uniform space.
