---
id: def-absolute-kan-extension
kind: definition
title: "Absolute Kan extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-kan-extension, def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 6.5.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Let $(L,\eta)$ be a left Kan extension of $F:\mathcal C\to\mathcal E$ along
$K:\mathcal C\to\mathcal D$
([[def-left-and-right-kan-extension]]).
It is **absolute** when for every functor
$H:\mathcal E\to\mathcal Z$ ([[def-functor-and-contravariant-functor]]), the
pair $(HL,H\eta)$ is again a left Kan extension of $HF$ along $K$.

Dually, a right Kan extension $(R,\varepsilon)$ of $F$ along $K$ is
**absolute** when for every functor $H:\mathcal E\to\mathcal Z$, the pair
$(HR,H\varepsilon)$ is again a right Kan extension of $HF$ along $K$.

Pointwise asks for preservation only by representables of the codomain; absolute
asks for preservation by every functor out of the codomain and is therefore the
stronger condition.
