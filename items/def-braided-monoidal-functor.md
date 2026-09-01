---
id: def-braided-monoidal-functor
kind: definition
title: "Braided monoidal functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-braided-monoidal-category, def-lax-strong-and-strict-monoidal-functor]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 8.1.7"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Let $(\mathcal C,c)$ and $(\mathcal D,c')$ be braided monoidal categories
([[def-braided-monoidal-category]]). A **braided monoidal functor**
$F:\mathcal C\to\mathcal D$ is a strong monoidal functor
([[def-lax-strong-and-strict-monoidal-functor]]) with structure isomorphisms

$$J_{X,Y}:F(X)\otimes F(Y)\overset{\cong}\longrightarrow F(X\otimes Y),\qquad J_0:\mathbf 1_{\mathcal D}\overset{\cong}\longrightarrow F(\mathbf 1_{\mathcal C}),$$

such that for all objects $X,Y$,

$$J_{Y,X}\circ c'_{F(X),F(Y)}=F(c_{X,Y})\circ J_{X,Y}.$$
