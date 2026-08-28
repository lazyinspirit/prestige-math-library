---
id: def-regular-holomorphic-germ
kind: definition
title: "Regular holomorphic germs in the last variable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-holomorphic-germ-ring-and-its-maximal-ideal]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.1"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Definition

Fix $m\ge1$, write $z=(z',z_m)$ with
$z'=(z_1,\dots,z_{m-1})\in\mathbb C^{m-1}$, and let $f\in\mathcal O_{m,0}$.
For $d\in\mathbb N$, the germ $f$ is **regular in $z_m$ of order $d$** if some
representative satisfies

$$f(0,\zeta)=\zeta^d h(\zeta)$$

on a neighbourhood of $0\in\mathbb C$, where $h$ is holomorphic and
$h(0)\ne0$. Equivalently, the one-variable slice $\zeta\mapsto f(0,\zeta)$ has a
zero of exact order $d$ at the origin.

The case $d=0$ is exactly the unit case $f(0)\ne0$.
