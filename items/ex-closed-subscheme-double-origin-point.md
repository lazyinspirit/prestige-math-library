---
id: ex-closed-subscheme-double-origin-point
kind: example
title: "Two infinitesimal structures at the origin"
status: draft
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-affine-closed-immersions-quotient-rings, def-closed-immersion-schemes]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 8"
      url: "https://stacks.math.columbia.edu/tag/01I6"
---
## Example

Inside $\operatorname{Spec}k[t]$, the ideals $(t)$ and $(t^2)$ define
$\operatorname{Spec}k$ and $\operatorname{Spec}k[t]/(t^2)$. Both have the
single-point support $V(t)$, but the latter has a nonzero nilpotent class of
$t$, so these are distinct closed subschemes.
