---
id: def-category-of-elements
kind: definition
title: "The category of elements of a covariant functor or a presheaf"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-functor-and-contravariant-functor,
       def-opposite-category, def-universal-element]
justified_by: [thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Definitions 2.4.1 and 2.4.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Section 6.2"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Definition

Let $F:\mathcal C\to\mathbf{Set}$ be a functor. Its **category of elements**
$\int F$ has:

- objects $(c,x)$ with $c\in\mathcal C$ and $x\in F(c)$;
- a morphism $(c,x)\to(d,y)$ given by a morphism $f:c\to d$ in $\mathcal C$
  satisfying $F(f)(x)=y$.

The identity of $(c,x)$ is $1_c$, and composition is composition in
$\mathcal C$. The functor laws of
[[def-functor-and-contravariant-functor]] make the identity and composite
equations hold, so these data satisfy [[def-category]].

For a presheaf $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$, its **category of
elements** $\int P$ again has objects $(c,x)$ with $x\in P(c)$, while a
morphism $(c,x)\to(d,y)$ is a morphism $f:c\to d$ in $\mathcal C$ satisfying

$$x=P(f)(y).$$

This reversed equation comes from the opposite category
[[def-opposite-category]]; contravariant functoriality again supplies identities
and composition. A universal element in the sense of
[[def-universal-element]] is itself an object of the appropriate category of
elements.
