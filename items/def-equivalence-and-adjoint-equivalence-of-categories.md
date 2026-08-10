---
id: def-equivalence-and-adjoint-equivalence-of-categories
kind: definition
title: "Equivalence, quasi-inverse, and adjoint equivalence of categories"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-isomorphism, def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: true
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

An **equivalence of categories** from $\mathcal C$ to $\mathcal D$ consists of
functors $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$, called
**quasi-inverses**, together with natural isomorphisms

$$\eta:1_{\mathcal C}\Rightarrow GF,\qquad \varepsilon:FG\Rightarrow1_{\mathcal D}.$$

The categories are then called **equivalent**. The notions of functor and natural
isomorphism are those of [[def-functor-and-contravariant-functor]] and
[[def-natural-isomorphism]].

An **adjoint equivalence** is such data satisfying the triangle identities

$$G\varepsilon\circ\eta G=1_G,\qquad \varepsilon F\circ F\eta=1_F.$$

No triangle identity is required of a bare equivalence.
