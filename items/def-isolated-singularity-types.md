---
id: def-isolated-singularity-types
kind: definition
title: "Isolated singularities: removable, poles, and essential singularities"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
    - title: "David Greenfield, Rutgers Math 403 diary"
      url: "https://sites.math.rutgers.edu/~greenfie/mill_courses/math403/diary2.html"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb C$ be open, let $a\in U$, and let $f$ be holomorphic on a
punctured neighbourhood of $a$, meaning that for some $r>0$ the set
$\{z\in\mathbb C:0<|z-a|<r\}$ is contained in $U$ and $f$ is holomorphic there.
Then $a$ is an
**isolated singularity** of $f$.

Such an isolated singularity is:

- **removable** when there is a holomorphic function $F$ on a neighbourhood of
  $a$ with $F(z)=f(z)$ for all $z\ne a$ near $a$;
- a **pole of order $m\ge1$** when $(z-a)^mf(z)$ extends holomorphically across
  $a$ and the extended value at $a$ is nonzero;
- **essential** when it is neither removable nor a pole.

## Remarks

This definition does not assume that every isolated singularity falls into
exactly one of the three classes. That trichotomy is a theorem later on this
page.

The order of a pole is part of the definition, not an afterthought: the
smallest $m$ for which $(z-a)^mf(z)$ extends holomorphically and nonvanishingly
at $a$ is the pole order.
