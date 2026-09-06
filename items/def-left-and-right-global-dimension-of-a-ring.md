---
id: def-left-and-right-global-dimension-of-a-ring
kind: definition
title: "Left and right global dimension of a ring"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-dimension-of-an-object, def-opposite-ring]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Definition

For a ring $R$, define
$$\operatorname{l.gl.dim}R=\sup\{\operatorname{pd}_R M:M\text{ is a left }R\text{-module}\},$$
and
$$\operatorname{r.gl.dim}R=\sup\{\operatorname{pd}_{R^{\mathrm{op}}} M:M\text{ is a right }R\text{-module}\}.$$
They are separately defined extended natural numbers; their equality is not part of the notation.
