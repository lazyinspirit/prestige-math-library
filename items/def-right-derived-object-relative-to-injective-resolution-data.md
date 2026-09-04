---
id: def-right-derived-object-relative-to-injective-resolution-data
kind: definition
title: "Right derived objects relative to supplied injective resolution data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-supplied-injective-resolution-datum, def-additive-functor, def-deleted-resolution, def-cochain-complex-in-an-abelian-category, def-cohomology-object-of-a-cochain-complex]
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

Let $I$ be a supplied injective resolution datum on a class $\mathcal D$ of
objects in an abelian category $\mathcal A$, and let
$F:\mathcal A\to\mathcal B$ be an additive functor to an abelian category
$\mathcal B$.

For $A\in\mathcal D$ and $n\in\mathbb Z$, the **$n$th right derived object of
$F$ relative to $I$ at $A$** is
$$R_I^nF(A):=H^n\!\bigl(F(I(A)_{\mathrm{del}})\bigr),$$
where $I(A)_{\mathrm{del}}$ is the deleted injective resolution from
[[def-deleted-resolution]].

The superscript records the supplied injective datum. This page keeps that data
visible instead of suppressing it into an unstated global choice.
