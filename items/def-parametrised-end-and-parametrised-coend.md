---
id: def-parametrised-end-and-parametrised-coend
kind: definition
title: "Ends and coends with parameters"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-end-and-coend, def-product-category, def-functor-and-contravariant-functor, def-wedge-and-cowedge]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), §2.1 and (2.5)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal P$, $\mathcal C$ and $\mathcal D$ be categories and let

$$T:\mathcal P\times\mathcal C^{\mathrm{op}}\times\mathcal C\longrightarrow\mathcal D$$

be a functor ([[def-product-category]],
[[def-functor-and-contravariant-functor]]). For an object $p$ of $\mathcal P$
write $T(p,-,-):\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ for the
functor obtained by holding the first variable at $p$ and the identity of $p$;
that this is a functor is immediate from the functor laws for $T$ applied to
morphisms whose first coordinate is $1_p$.

A **parametrised end** of $T$ is a choice, for every object $p$ of
$\mathcal P$, of an end of $T(p,-,-)$ ([[def-end-and-coend]]): that is, an end
taken in the two dinatural variables with the remaining variables held fixed.
Its vertex at $p$ is written $\int_{c}T(p,c,c)$ and its wedge components
$\omega^p_c$ ([[def-wedge-and-cowedge]]). A **parametrised coend** is a choice
of a coend of $T(p,-,-)$ for every $p$, with vertex $\int^{c}T(p,c,c)$ and
cowedge components $\rho^p_c$.

The variable $p$ is the **parameter** and the variables in the second and third
slots are the **dinatural variables**. Nothing here asserts that the vertices
assemble into a functor of $p$: that is a further statement, and it is proved
in [[thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters]]
from the choice given here.

## Remarks

The definition is stated as a choice rather than as an operation for a reason
that is not bookkeeping. The parameter category may have a proper class of
objects, and an end is only determined up to isomorphism, so "the" end at every
parameter is not a well-defined assignment until one end has been selected at
each parameter. Every statement below that treats a parametrised end
functorially therefore carries that choice as a hypothesis.

Several parameters are covered by the same definition, since a product of
parameter categories is again a parameter category. The case
$\mathcal P=\mathcal E^{\mathrm{op}}\times\mathcal E$ is the one that appears in
the Fubini theorem, where the parameter itself is later made dinatural.
