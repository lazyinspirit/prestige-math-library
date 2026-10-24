---
id: def-p-basis-of-an-exponent-one-purely-inseparable-extension
kind: definition
title: "$p$-bases for finite exponent-one purely inseparable extensions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-purely-inseparable-extension, def-linear-basis, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a finite purely inseparable extension of characteristic $p>0$
([[def-purely-inseparable-extension]]) and suppose it has **exponent at most
one**, meaning $a^p\in F$ for every $a\in K$. A finite ordered family
$(b_1,\ldots,b_r)$ in $K$ is a **$p$-basis of $K/F$** when the restricted
monomials

$$b_1^{e_1}\cdots b_r^{e_r}\qquad(0\le e_i<p)$$

form an $F$-basis of $K$ ([[def-linear-basis]]). For $r=0$, the sole restricted
monomial is the empty product $1$, so the definition gives the basis $(1)$ of
the trivial extension and degree one
([[def-extension-degree-and-finite-extension]]).
