---
id: rem-the-choice-cost-of-strictification
kind: remark
title: "Strictification itself costs no Choice; choosing a skeleton can"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-mac-lane-strictification, def-skeletal-category-and-skeleton]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 2.8.7 and Exercise 2.8.8"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Remark

The construction in [[thm-mac-lane-strictification]] chooses nothing: from a
given monoidal category $\mathcal C$ it builds the right-module endofunctor
category $\mathcal C'$ and the functor $L:\mathcal C\to\mathcal C'$ directly.
So the strictification theorem itself is a ZF statement.

Choice can enter through a separate operation: passing from an arbitrary
category to a [[def-skeletal-category-and-skeleton|skeleton]] by selecting one
representative from each isomorphism class. Being skeletal is a property and
does not itself require a selection; it is the construction of a skeleton for
a given category that may carry this set-theoretic cost. Consequently any
argument that combines strictification with a chosen skeleton must account for
that additional choice, while strictification alone does not incur it.
