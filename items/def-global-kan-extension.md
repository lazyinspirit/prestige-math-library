---
id: def-global-kan-extension
kind: definition
title: "Global Kan extensions as adjoints to restriction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-left-and-right-kan-extension, def-functor-category, def-small-locally-small-and-large-category, prop-size-of-functor-categories, def-adjunction-by-unit-counit-and-triangle-identities]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 6.1.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, §4.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $K:\mathcal C\to\mathcal D$ be a functor with $\mathcal C$ and
$\mathcal D$ small, and let $\mathcal E$ be locally small
([[def-small-locally-small-and-large-category]],
[[prop-size-of-functor-categories]]). Then the functor categories
$[\mathcal C,\mathcal E]$ and $[\mathcal D,\mathcal E]$ are legitimate
categories ([[def-functor-category]]).

Precomposition with $K$ defines the **restriction functor**

$$K^*:[\mathcal D,\mathcal E]\longrightarrow[\mathcal C,\mathcal E],\qquad H\longmapsto HK.$$

A **global left Kan extension along $K$** is a functor

$$\operatorname{Lan}_K:[\mathcal C,\mathcal E]\longrightarrow[\mathcal D,\mathcal E]$$

equipped with an adjunction
$\operatorname{Lan}_K\dashv K^*$ in the sense of
[[def-adjunction-by-unit-counit-and-triangle-identities]].

Dually, a **global right Kan extension along $K$** is a functor

$$\operatorname{Ran}_K:[\mathcal C,\mathcal E]\longrightarrow[\mathcal D,\mathcal E]$$

equipped with an adjunction $K^*\dashv\operatorname{Ran}_K$.

This is a functor-level notion. It differs from a local Kan extension of one
functor $F:\mathcal C\to\mathcal E$ in [[def-left-and-right-kan-extension]]:
forming a global Kan extension requires data for every object of the functor
category, not a silent class-indexed choice of one local extension for each
$F$.
