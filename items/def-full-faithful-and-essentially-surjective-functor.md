---
id: def-full-faithful-and-essentially-surjective-functor
kind: definition
title: "Faithful, full, fully faithful, essentially surjective, and split essentially surjective functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-and-contravariant-functor, def-isomorphism-groupoid-and-connected-category, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Ahrens, Kapulkin and Shulman, Univalent categories and the Rezk completion, section 6"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/2CF86322C8415DE832BE304B4DC04D09/S0960129514000486a.pdf/div-class-title-univalent-categories-and-the-rezk-completion-div.pdf"
pipeline_run: null
---

## Definition

Let $F:\mathcal C\to\mathcal D$ be a functor
([[def-functor-and-contravariant-functor]]). For each $A,B$, it induces

$$F_{A,B}:\mathcal C(A,B)\to\mathcal D(FA,FB),\qquad f\mapsto Ff.$$

The functor is **faithful** when every $F_{A,B}$ is injective, **full** when
every $F_{A,B}$ is surjective, and **fully faithful** when every $F_{A,B}$ is
bijective ([[def-injection-surjection-bijection]]).

It is **essentially surjective** when every object $D$ of $\mathcal D$ is
isomorphic to some $FC$ ([[def-isomorphism-groupoid-and-connected-category]]).
It is **split essentially surjective** when the data include, for every $D$, a
specified object $C_D$ and specified isomorphism
$\varepsilon_D:FC_D\to D$. The word split records these witnesses and is
strictly stronger as data than their mere existence.

