---
id: def-enriched-functor
kind: definition
title: "Enriched functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-enriched-category]
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (1.5) and (1.6)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Geoffrey Cruttwell, Normed Spaces and the Change of Base for Enriched Categories, Section 2.2.1"
      url: "https://www.reluctantm.com/gcruttw/publications/thesis4.pdf"
---

## Definition

Let $\mathcal A$ and $\mathcal B$ be $\mathcal V$-categories
([[def-enriched-category]]) over the same monoidal base $\mathcal V$.

A **$\mathcal V$-functor** $T:\mathcal A\to\mathcal B$ consists of

- a function $T:\operatorname{Ob}(\mathcal A)\to\operatorname{Ob}(\mathcal B)$;
- for every pair $A,B\in\operatorname{Ob}(\mathcal A)$, a morphism in
  $\mathcal V$
  $$T_{A,B}:\mathcal A(A,B)\longrightarrow\mathcal B(TA,TB);$$

such that for every triple $A,B,C$ the composition square commutes:

$$T_{A,C}\circ M^\mathcal A_{A,B,C}=M^\mathcal B_{TA,TB,TC}\circ(T_{B,C}\otimes T_{A,B}),$$

and for every object $A$ the identity morphisms agree:

$$T_{A,A}\circ j^\mathcal A_A=j^\mathcal B_{TA}.$$

The $\mathcal V$-functor is **fully faithful** when every structure morphism
$T_{A,B}$ is an isomorphism in $\mathcal V$.
