---
id: def-the-solution-set-condition
kind: definition
title: "The solution-set condition for a functor, stated object by object"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-and-contravariant-functor, def-small-locally-small-and-large-category]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, theorem 4.7.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, theorem 6.3.10"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Definition

Let $U:\mathcal A\to\mathcal C$ be a functor and fix an object $C\in\mathcal C$. The functor $U$ satisfies the **solution-set condition at $C$** if there is a supplied set-indexed family of arrows
$$\eta_i:C\to U(A_i)\qquad(i\in I)$$
such that every arrow $f:C\to U(A)$ factors through one of them: for some $i\in I$ and some $h:A_i\to A$,
$$f=U(h)\circ\eta_i.$$
The functor satisfies the **solution-set condition** if it satisfies this condition at every object $C$. An assertion of the condition object by object supplies no simultaneous choice of a solution family over a proper class of objects.
