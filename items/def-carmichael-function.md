---
id: def-carmichael-function
kind: definition
title: "Carmichael's function $\\lambda(n)$ as the exponent of $(\\mathbb Z/n\\mathbb Z)^\\times$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-unit-group-modulo-n-and-euler-totient, def-exponent-of-a-finite-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Definition C.V.3"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Definition

For $n\ge1$, **Carmichael's function** is the exponent of the finite unit group:

$$\lambda(n):=\exp((\mathbb Z/n)^\times).$$

The unit group is finite by [[def-unit-group-modulo-n-and-euler-totient]], and its exponent exists by [[def-exponent-of-a-finite-group]]. In particular $\lambda(1)=1$, since the unit group modulo $1$ is trivial.
