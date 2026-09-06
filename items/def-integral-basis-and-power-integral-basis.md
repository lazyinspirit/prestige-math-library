---
id: def-integral-basis-and-power-integral-basis
kind: definition
title: "Integral and power integral bases"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-order-in-a-number-field]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Bases section"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Definition

Let $\mathcal O$ be an order in a number field $K$ of degree $n$. An
**integral basis of $\mathcal O$** is an ordered $\mathbb Z$-basis of
$\mathcal O$. A **power integral basis of $\mathcal O$** is an integral basis
of the form $(1,\alpha,\ldots,\alpha^{n-1})$; equivalently,
$\mathcal O=\mathbb Z[\alpha]$. In the special case
$\mathcal O=\mathcal O_K$, this says
$\mathcal O_K=\mathbb Z[\alpha]$, and then $K$ is called monogenic. A power
integral basis is extra structure, not an assumption on an arbitrary order or
number field.
