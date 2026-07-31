---
id: def-intersecting-family
kind: definition
title: "Intersecting uniform families of finite sets"
status: published
origin: session
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
    - title: "J. Fox, MIT MAT 307, Lecture 12: Erdős-Ko-Rado by Katona's method"
      url: "https://math.mit.edu/~fox/MAT307-lecture12.pdf"
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
