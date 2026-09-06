---
id: def-almost-sure-convergence-of-random-variables
kind: definition
title: "Almost-sure convergence of real random variables"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-probability-measure, def-random-element-and-real-random-variable, def-real-limit]
justified_by: [lem-almost-sure-convergence-event-is-measurable]
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Definition 3.1"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

Let $(X_n)$ and $X$ be real random variables on one probability space.  Write
$X_n\to X$ **almost surely** when
$$\mathbb P\bigl(\{\omega:X_n(\omega)\to X(\omega)\text{ in }\mathbb R\}\bigr)=1.$$
The convergence in the event is the real convergence of [[def-real-limit]].
The set is measurable by [[lem-almost-sure-convergence-event-is-measurable]],
so its probability is defined.
