---
id: def-intersecting-family
kind: definition
title: "Intersecting uniform families of finite sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-binomial-coefficient]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-07-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Erdős-Ko-Rado theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Ko%E2%80%93Rado_theorem"
pipeline_run: null
---

## Definition

Let $A$ be a finite set. A family
$\mathcal F\subseteq[A]^k$ ([[def-binomial-coefficient]]) is
**intersecting** if

$$S\cap T\ne\varnothing$$

for every $S,T\in\mathcal F$. For $k\ge1$ and a fixed $a\in A$, the
**star centred at $a$** is

$$\mathcal S_a:=\{\,S\in[A]^k:a\in S\,\}.$$

Every star is intersecting, since all its members contain its centre.
