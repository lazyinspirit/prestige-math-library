---
id: def-balanced-ext-bifunctor
kind: definition
title: "The balanced Ext bifunctor"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic, lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data, prop-the-ext-balance-isomorphism-is-natural-in-both-variables, prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws]
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

Assume the Axiom of Dependent Choice. Let $\mathcal A$ be an abelian category
with enough projectives and enough injectives, and fix supplied projective and
injective resolution data on all objects of $\mathcal A$. For each $n\geq0$,
define
$$\operatorname{Ext}_{\mathcal A}^{n}(M,N)$$
to mean either $\operatorname{Ext}_{P}^{n}(M,N)$ or $\operatorname{Ext}_{I}^{n}(M,N)$, identified by the natural comparison isomorphism already proved. This notation is justified by the comparison theorem, its independence of comparison data, its two-variable naturality, and its change-of-resolution cocycle law; it is not a definition by equality of the two complexes.
