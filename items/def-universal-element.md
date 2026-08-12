---
id: def-universal-element
kind: definition
title: "Universal elements of covariant functors and presheaves"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-representable-functor-and-representation]
justified_by: [thm-universal-elements-and-universal-factorisations]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Definition 2.3.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Definition 4.1.17"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be locally small. For a functor
$F:\mathcal C\to\mathbf{Set}$, a **universal element** is a pair $(R,u)$ with
$R\in\mathcal C$ and $u\in F(R)$ such that the maps

$$\theta^u_c:\mathcal C(R,c)\longrightarrow F(c),\qquad \theta^u_c(f)=F(f)(u)$$

are the components of a natural isomorphism
$\theta^u:\mathcal C(R,-)\xRightarrow{\cong}F$.

For a presheaf $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$, a
**universal element** is a pair $(R,u)$ with $u\in P(R)$ such that

$$\theta^u_c:\mathcal C(c,R)\longrightarrow P(c),\qquad \theta^u_c(f)=P(f)(u)$$

are the components of a natural isomorphism
$\theta^u:\mathcal C(-,R)\xRightarrow{\cong}P$. Thus a universal element is
a representation in the sense of
[[def-presheaf-representable-functor-and-representation]], with its natural
isomorphism specified by a distinguished element of the representing object's
value.
