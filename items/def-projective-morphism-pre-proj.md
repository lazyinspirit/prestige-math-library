---
id: def-projective-morphism-pre-proj
kind: definition
title: "Projective morphisms before Proj"
status: draft
origin: pipeline
deps:
  - def-relative-projective-space-standard-charts
  - def-closed-immersion-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, §29.44 Definition 29.44.1(2)"
      url: https://stacks.math.columbia.edu/tag/01W8
---

## Definition

For an arbitrary base scheme $S$, a morphism $f:X\to S$ is **projective on
this page** if for some integer $n\ge0$ it factors over $S$ as
$$X\xrightarrow{i}\mathbb P^n_S\longrightarrow S,$$
where $i$ is a closed immersion and the second arrow is the projection. The
relative projective space and its projection are those of
[[def-relative-projective-space-standard-charts]], and closed immersion has
the meaning in [[def-closed-immersion-schemes]]. This is the finite-dimensional
H-projective convention of Stacks Definition 29.44.1(2). That source's clause
(1) separately uses a projective bundle $\mathbb P(\mathcal E)$; this page
does not conflate the two conventions. The value $n=0$ is allowed, with
$\mathbb P^0_S\cong S$.
