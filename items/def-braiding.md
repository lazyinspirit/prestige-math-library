---
id: def-braiding
kind: definition
title: "Braiding"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category, def-natural-isomorphism]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 8.1.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Definition

Let $(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ be a monoidal
category ([[def-monoidal-category]]).

A **braiding** on $\mathcal C$ is a natural isomorphism

$$c_{X,Y}:X\otimes Y\longrightarrow Y\otimes X$$

natural in both variables ([[def-natural-isomorphism]]) such that, for all
objects $X,Y,Z$,

$$\alpha_{Y,Z,X}\circ c_{X,Y\otimes Z}\circ\alpha_{X,Y,Z}=(1_Y\otimes c_{X,Z})\circ\alpha_{Y,X,Z}\circ(c_{X,Y}\otimes1_Z),$$

and

$$\alpha_{Z,X,Y}^{-1}\circ c_{X\otimes Y,Z}\circ\alpha_{X,Y,Z}^{-1}=(c_{X,Z}\otimes1_Y)\circ\alpha_{X,Z,Y}^{-1}\circ(1_X\otimes c_{Y,Z}).$$

These are the two **hexagon identities**. The invertibility of each
$c_{X,Y}$ is part of the data, not a consequence of the hexagons.
