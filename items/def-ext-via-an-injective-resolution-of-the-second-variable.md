---
id: def-ext-via-an-injective-resolution-of-the-second-variable
kind: definition
title: "Ext via an injective resolution of the second variable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-supplied-injective-resolution-datum]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Definition

Let $\mathcal A$ be abelian and let $I$ be supplied injective-resolution data. For $M$ and $N$ in its domain, set
$$C_I^q(M,N)=\operatorname{Hom}_{\mathcal A}(M,I^q(N)),\qquad d_I^q(f)=d_{I(N)}^q\circ f.$$
Thus $C_I^\bullet(M,N)$ is a cochain complex. Define
$$\operatorname{Ext}_{I}^{n}(M,N):=H^n(C_I^\bullet(M,N))\quad(n\geq0).$$
The subscript $I$ remains part of the notation: this is a construction relative to the supplied data, not yet an intrinsic Ext bifunctor.
