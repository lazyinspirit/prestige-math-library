---
id: def-schur-number
kind: definition
title: "The Schur number $S(c)$ as the largest $N$ for which $\\{1,\\ldots,N\\}$ has a $c$-colouring with no positive monochromatic solution of $x+y=z$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-schur-monochromatic-sum, thm-well-ordering-principle, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, remark after Theorem 8"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Definition

For a positive natural $c$ ([[def-natural-numbers]]), let $M(c)$ be the least positive $M$ such that every $c$-colouring of $\{1,\ldots,M\}$ has positive monochromatic $x,y,z$ with $x+y=z$. The set defining $M(c)$ is nonempty by [[thm-schur-monochromatic-sum]] and has a least member by [[thm-well-ordering-principle]].

The **Schur number** is $S(c):=M(c)-1$. Equivalently, it is the largest $N$ for which $\{1,\ldots,N\}$ admits a $c$-colouring with no such solution: minimality supplies an avoiding colouring at $M(c)-1$, and restriction supplies one at every smaller $N$.
