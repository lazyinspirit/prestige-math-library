---
id: def-quasi-projective-morphism
kind: definition
title: Quasi-projective morphisms before Proj
status: published
origin: pipeline
deps:
  - def-projective-morphism-pre-proj
  - def-locally-closed-immersion
  - def-quasi-compact-and-quasi-separated-morphism
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, §29.41 Definition 29.41.1(2)"
      url: https://stacks.math.columbia.edu/tag/01VW
---

## Definition

On this page, a morphism $f:X\to S$ is **quasi-projective** if, for some
integer $n\ge0$, it factors over $S$ through a quasi-compact immersion
$X\hookrightarrow\mathbb P^n_S$ followed by the projection
$\mathbb P^n_S\to S$. Projective space and projective morphisms use the
finite-dimensional convention of [[def-projective-morphism-pre-proj]], an
immersion has the meaning of [[def-locally-closed-immersion]], and
quasi-compactness has the meaning of
[[def-quasi-compact-and-quasi-separated-morphism]]. In Stacks Definition
29.41.1(2), this is called **H-quasi-projective**; clause (1) separately calls
finite type together with a relatively ample invertible sheaf
**quasi-projective**. This page explicitly adopts clause (2)'s convention.

In particular, if $Y\to S$ is projective in the sense of
[[def-projective-morphism-pre-proj]] and $U\subseteq Y$ is open, then $U\to S$
is quasi-projective on this page whenever the composite immersion
$U\hookrightarrow Y\hookrightarrow\mathbb P^n_S$ is quasi-compact for a
projective-space embedding of $Y$.
