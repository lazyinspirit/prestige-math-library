---
id: def-supplied-projective-resolution-datum
kind: definition
title: "Supplied projective resolution data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-resolution-in-an-abelian-category, def-abelian-category]
landmark: true
verification:
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

A **supplied projective resolution datum** on $\mathcal D$ assigns to each
$A\in\mathcal D$ a specific projective resolution
$$P_\bullet(A)\to A$$
in the sense of [[def-projective-resolution-in-an-abelian-category]].

This is extra structure on the chosen domain of objects. It records displayed
resolutions objectwise; it does not assert that such a choice exists
canonically for all objects of $\mathcal A$.
