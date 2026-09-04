---
id: def-right-derived-map-relative-to-resolution-data
kind: definition
title: "The right derived map relative to supplied resolution data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-right-derived-object-relative-to-injective-resolution-data, lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions, lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]
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

Assume the Axiom of Dependent Choice.

Let $I$ be a supplied injective resolution datum on a class $\mathcal D$ in
an abelian category $\mathcal A$, let $F:\mathcal A\to\mathcal B$ be an
additive functor to an abelian category $\mathcal B$, let $A,B\in\mathcal D$,
and let $n\in\mathbb Z$. For a morphism $u:A\to B$, choose any injective
comparison extension
$$\widetilde u^\bullet:I^\bullet(A)\to I^\bullet(B).$$

The **right derived map of $u$ in degree $n$ relative to $I$** is the induced
map on cohomology
$$R_I^nF(u):=H^n\!\bigl(F(\widetilde u^\bullet)\bigr):R_I^nF(A)\to R_I^nF(B).$$

Existence of $\widetilde u^\bullet$ comes from
[[lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions]],
and independence of the chosen extension comes from
[[lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]].
