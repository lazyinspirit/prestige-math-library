---
id: thm-collar-neighborhood-theorem
kind: theorem
title: "Collar neighborhood theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary, thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary, def-smooth-collar-of-a-manifold-boundary, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Every smooth manifold with boundary has a smooth collar.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth manifold with boundary.

## Proof

**Proof technique:** direct.

1.1 Flow a global inward field from boundary points. In a boundary chart, extend the field across the face. The derivative of $(y,t)\mapsto\Phi_t(y,0)$ at $t=0$ is the identity on face directions together with the inward vector in the time direction, hence is invertible. The Euclidean inverse function theorem therefore gives local collar embeddings. [given]

2.1 A locally finite refinement of these local collars admits a smooth positive width $\delta$ for which $(p,t)\mapsto\Phi_t(p)$ is injective on $0\le t<\delta(p)$ and has open image near the boundary; this is the usual locally finite shrinking of local collar domains. [step 1.1]

3.1 The reparametrization $c(p,s)=\Phi_{s\delta(p)}(p)$ from $\partial M\times[0,1)$ is then a smooth embedding, fixes $\partial M$ at $s=0$, and has that open image. It is therefore a smooth collar. [step 2.1] ∎
