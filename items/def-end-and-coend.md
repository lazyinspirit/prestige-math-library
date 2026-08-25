---
id: def-end-and-coend
kind: definition
title: 'The end and the coend of a functor $\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-wedge-and-cowedge, def-initial-terminal-and-zero-object, def-dinatural-transformation]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Definition 1.1.6 and Notation 1.1.13"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Definitions 4.4.4 and 4.4.6"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be a functor and
let $\operatorname{Wd}(T)$ and $\operatorname{Cwd}(T)$ be the categories of
wedges over $T$ and of cowedges under $T$ ([[def-wedge-and-cowedge]]).

An **end** of $T$ is a terminal object of $\operatorname{Wd}(T)$, and a
**coend** of $T$ is an initial object of $\operatorname{Cwd}(T)$
([[def-initial-terminal-and-zero-object]]). In short: an end is a terminal
wedge and a coend an initial cowedge. Neither need exist.

Written out, an end is a pair $(e,\omega)$ in which $\omega_c:e\to T(c,c)$ is a
wedge and, for every wedge $(x,\xi)$ over $T$, there is exactly one morphism
$u:x\to e$ with

$$\omega_c\circ u=\xi_c\qquad\text{for every object }c\text{ of }\mathcal C.$$

A coend is a pair $(q,\rho)$ in which $\rho_c:T(c,c)\to q$ is a cowedge and,
for every cowedge $(x,\xi)$ under $T$, there is exactly one morphism
$v:q\to x$ with $v\circ\rho_c=\xi_c$ for every $c$.

The vertex of an end is written $\int_{c}T(c,c)$ and the vertex of a coend
$\int^{c}T(c,c)$, the subscripted integral denoting the end and the
superscripted one the coend. The components $\omega_c$ of the terminal wedge
are the **projections** of the end and the components $\rho_c$ of the initial
cowedge the **injections** of the coend. The variable $c$ in the integral
notation is bound: it names the dinatural variable and nothing else.

## Remarks

Because an end is a dinatural transformation
([[def-dinatural-transformation]]) with a universal property rather than an
element-level construction, the definition applies to any target category
$\mathcal D$ whatever, and it never asserts existence. Which functors have
ends, and in which targets, is a separate question answered by the comparison
theorems on this page and by the hypotheses they carry.

The projections $\omega_c$ are indexed by the objects of $\mathcal C$, while the
wedge equation they satisfy is indexed by its morphisms. Thus an end records
the family of diagonal values together with every tie imposed through the
off-diagonal values $T(c,c')$. For a discrete category there are no nonidentity
ties and the end reduces to the product of the diagonal values.
