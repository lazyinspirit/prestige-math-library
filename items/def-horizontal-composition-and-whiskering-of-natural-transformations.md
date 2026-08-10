---
id: def-horizontal-composition-and-whiskering-of-natural-transformations
kind: definition
title: "Whiskering and horizontal composition of natural transformations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-transformation, def-functor-and-contravariant-functor]
justified_by: [lem-horizontal-composition-of-natural-transformations-is-natural]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Let $\alpha:F\Rightarrow G:\mathcal C\to\mathcal D$ be a natural transformation
([[def-natural-transformation]]), and let $H:\mathcal D\to\mathcal E$ and
$K:\mathcal B\to\mathcal C$ be functors
([[def-functor-and-contravariant-functor]]). The **left whiskering**
$H\alpha:HF\Rightarrow HG$ has components $H(\alpha_A)$, and the **right
whiskering** $\alpha K:FK\Rightarrow GK$ has components $\alpha_{KB}$.

For $\beta:H\Rightarrow L:\mathcal D\to\mathcal E$, the **horizontal
composite** $\beta*\alpha:HF\Rightarrow LG$ has either equal component formula

$$(\beta*\alpha)_A=\beta_{GA}\circ H(\alpha_A)=L(\alpha_A)\circ\beta_{FA}.$$

Their equality is the naturality equation for $\beta$ at $\alpha_A$.
Naturality of the resulting family is proved in
[[lem-horizontal-composition-of-natural-transformations-is-natural]].
