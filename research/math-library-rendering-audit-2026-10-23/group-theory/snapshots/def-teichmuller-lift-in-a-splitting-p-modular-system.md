---
id: def-teichmuller-lift-in-a-splitting-p-modular-system
kind: definition
title: "Teichmuller lift in a splitting p-modular system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-splitting-p-modular-system-for-a-finite-group]
verification:
  audited: 2026-09-05
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

Fix a splitting $p$-modular system $(K,\mathcal O,k)$ for a finite group $G$.
If $\lambda\in k^\times$ has finite order prime to $p$, its **Teichmuller
lift** is the unique element $\tau(\lambda)\in\mathcal O^\times$ such that

1. $\tau(\lambda)$ has the same finite order as $\lambda$, hence order prime to
   $p$, and
2. the image of $\tau(\lambda)$ in $k^\times$ is $\lambda$.

Thus $\tau$ picks the prime-to-$p$ root of unity in $\mathcal O^\times$
reducing to $\lambda$.
