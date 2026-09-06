---
id: def-exact-functor-between-triangulated-categories
kind: definition
title: "Exact functor between triangulated categories"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangulated-category, def-additive-functor, def-natural-isomorphism]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.3"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

An **exact functor** $(F,\xi):\mathcal T\to\mathcal T'$ is an additive functor
with a specified natural isomorphism $\xi_X:F(X[1])\xrightarrow\sim F(X)[1]$
such that every distinguished $X\to Y\to Z\xrightarrow hX[1]$ has distinguished
image $F(X)\to F(Y)\to F(Z)\xrightarrow{\xi_XF(h)}F(X)[1]$.

