---
id: def-index-of-a-unit-relative-to-a-primitive-root
kind: definition
title: "The index $\\operatorname{ind}_g(a)$ of a unit relative to a primitive root"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-primitive-root-iff-unit-group-generator, lem-order-characterisation]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, §C.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Definition

Let $n\ge1$ and let $g$ be a primitive root modulo $n$. For every $a\in(\mathbb Z/n)^\times$, the **index of $a$ relative to $g$** is the unique residue class

$$\operatorname{ind}_g(a)\in\mathbb Z/\varphi(n)$$

such that $g^r=a$ whenever the class is represented by $r\in\mathbb Z$.

Existence follows from [[prop-primitive-root-iff-unit-group-generator]], since every unit is a power of $g$. If $g^r=g^s$, then $g^{r-s}=1$, and [[lem-order-characterisation]] with $\operatorname{ord}(g)=\varphi(n)$ gives $r\equiv s\pmod{\varphi(n)}$; hence the residue class is well-defined and unique.
