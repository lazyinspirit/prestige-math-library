---
id: def-coalgebra-for-a-comonad-and-coalgebra-homomorphism
kind: definition
title: "Coalgebra and coalgebra homomorphism for a comonad"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-comonad]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Exercise 5.2.iii"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Let $(G,\varepsilon,\delta)$ be a comonad on $\mathcal C$. A **$G$-coalgebra** is an object $A$ with a morphism $c:A\to GA$ satisfying

$$\varepsilon_Ac=1_A,\qquad \delta_Ac=G(c)c.$$

A **coalgebra homomorphism** $f:(A,c)\to(B,d)$ is a morphism $f:A\to B$ in $\mathcal C$ satisfying

$$G(f)c=df.$$
