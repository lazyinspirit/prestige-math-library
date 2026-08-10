---
id: def-functor-and-contravariant-functor
kind: definition
title: "Covariant functor, identity functor, composite functor, and contravariant functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-opposite-category]
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
pipeline_run: null
---

## Definition

For categories $\mathcal C,\mathcal D$ ([[def-category]]), a **covariant
functor** $F:\mathcal C\to\mathcal D$ assigns an object $FA$ to every object
$A$ and a morphism $Ff:FA\to FB$ to every $f:A\to B$, satisfying

$$F(1_A)=1_{FA},\qquad F(g\circ f)=Fg\circ Ff.$$

The **identity functor** acts identically on objects and morphisms. For
$F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal E$, the
**composite functor** $GF$ has $(GF)A=G(FA)$ and $(GF)f=G(Ff)$.

A **contravariant functor** from $\mathcal C$ to $\mathcal D$ means a covariant
functor $\mathcal C^{\mathrm{op}}\to\mathcal D$, using
[[def-opposite-category]].

