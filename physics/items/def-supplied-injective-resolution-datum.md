---
id: def-supplied-injective-resolution-datum
kind: definition
title: "Supplied injective resolution data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-injective-resolution-in-an-abelian-category, def-abelian-category]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Definition

Let $\mathcal A$ be an abelian category, and let $\mathcal D$ be a class of
objects of $\mathcal A$.

A **supplied injective resolution datum** on $\mathcal D$ assigns to each
$A\in\mathcal D$ a specific injective resolution
$$A\to I^\bullet(A)$$
in the sense of [[def-injective-resolution-in-an-abelian-category]].

Again this is part of the input data. It keeps the chosen coaugmented
resolutions visible rather than hiding a global selection claim in the
background.
