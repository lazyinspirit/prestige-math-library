---
id: def-the-braid-category
kind: definition
title: "The braid category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-braided-monoidal-category, def-braid-group-by-the-artin-presentation, def-strict-monoidal-category]
landmark: true
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 8.2.4"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Definition

The **braid category** $\mathcal B$ is the category defined as follows.

- Its objects are the natural numbers $0,1,2,\dots$.
- For $m\neq n$, there are no morphisms $m\to n$.
- For each $n$, the endomorphism group $\operatorname{End}_{\mathcal B}(n)$ is
  the braid group $B_n$ from [[def-braid-group-by-the-artin-presentation]].

Composition is the group multiplication in each $B_n$. The tensor product on
objects is addition. On morphisms, juxtaposition is the homomorphism
$B_m\times B_n\to B_{m+n}$ sending the first block generators
$\sigma_i$ to $\sigma_i$ and the second block generators $\sigma_j$ to
$\sigma_{m+j}$. The Artin relations show directly that this is well defined,
strictly associative, and unital. Thus $\mathcal B$ is a strict monoidal
category ([[def-strict-monoidal-category]]).

The **standard block crossing** $\beta_{m,n}$ moves the first $m$ strands over
the last $n$ strands. Isotopy of braid diagrams, equivalently the Artin braid
relations, gives naturality and the two block hexagons, so these crossings form
a braiding ([[def-braided-monoidal-category]]). Under this convention
$\beta_{1,1}=\sigma_1\in B_2$.
