---
id: def-p-regular-and-p-singular-elements
kind: definition
title: "p-regular and p-singular elements"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Definition

Let $G$ be a finite group and let $p$ be a prime.

An element $g\in G$ is **$p$-regular** when $p\nmid |g|$, where $|g|$ denotes
the order of $g$. It is **$p$-singular** when $p\mid |g|$.

The set of $p$-regular elements is written

$$G^0:=\{g\in G:p\nmid |g|\}.$$

Brauer characters are defined on $G^0$, not on all of $G$.
