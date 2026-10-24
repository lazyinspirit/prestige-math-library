---
id: def-adjunction-by-unit-counit-and-triangle-identities
kind: definition
title: 'Adjunction by unit, counit, and the triangle identities'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-equivalence-and-adjoint-equivalence-of-categories, def-horizontal-composition-and-whiskering-of-natural-transformations]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.2.5'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Theorem 2.2.5'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Definition

Let $\mathcal C$ and $\mathcal D$ be categories. An **adjunction** $F\dashv G$ consists of functors $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$, a natural transformation

$$\eta:1_{\mathcal C}\Rightarrow GF$$

called the **unit**, and a natural transformation

$$\varepsilon:FG\Rightarrow1_{\mathcal D}$$

called the **counit**, such that the two **triangle identities** hold:

$$ (\varepsilon F)\circ(F\eta)=1_F,\qquad (G\varepsilon)\circ(\eta G)=1_G. $$

Here whiskering and vertical composition are those of [[def-horizontal-composition-and-whiskering-of-natural-transformations]]. Componentwise, for every $c\in\mathcal C$ and $d\in\mathcal D$,

$$ \varepsilon_{Fc}\circ F(\eta_c)=1_{Fc},\qquad G(\varepsilon_d)\circ\eta_{Gd}=1_{Gd}. $$

The direction $F\dashv G$ means that $F$ is left adjoint to $G$ and $G$ is right adjoint to $F$. If $\eta$ and $\varepsilon$ are natural isomorphisms, this is precisely the adjunction data occurring in an adjoint equivalence ([[def-equivalence-and-adjoint-equivalence-of-categories]]).
