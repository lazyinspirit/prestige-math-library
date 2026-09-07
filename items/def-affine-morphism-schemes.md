---
id: "def-affine-morphism-schemes"
kind: "definition"
title: "Affine morphisms"
status: "draft"
origin: "pipeline"
deps: ["def-morphism-of-schemes", "def-affine-open-subscheme"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 29.11.1"
      url: "https://stacks.math.columbia.edu/tag/01S5"
---

## Definition

A morphism of schemes $f:X\to S$ is **affine** when $f^{-1}(U)$ is affine for every affine open subscheme $U\subseteq S$. Here the inverse image carries the restricted structure sheaf, as in [[def-affine-open-subscheme]], and $f$ is a morphism of locally ringed spaces as in [[def-morphism-of-schemes]]. The empty scheme is affine, being $\operatorname{Spec}0$. Affineness of a morphism does not require its total source or target to be affine.
