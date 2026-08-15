---
id: def-legendre-symbol
kind: definition
title: "The Legendre symbol, including its zero value"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quadratic-residue-modulo-n]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Section 4.1"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Section 1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Definition

Let $p$ be an odd prime and let $a\in\mathbb Z$. The **Legendre symbol** is

$$\left(\frac ap\right):=\begin{cases}0,&p\mid a,\\1,&p\nmid a\text{ and }a\text{ is a quadratic residue modulo }p,\\-1,&p\nmid a\text{ and }a\text{ is a quadratic nonresidue modulo }p.\end{cases}$$

The zero branch is separate from the quadratic residue and nonresidue branches of [[def-quadratic-residue-modulo-n]], which apply only to unit numerators.
