---
id: def-coeilenberg-moore-category
kind: definition
title: "Co-Eilenberg–Moore category of a comonad"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-coalgebra-homomorphisms-are-closed-under-identities-and-composition]
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

For a comonad $G$ on $\mathcal C$, the **co-Eilenberg–Moore category** $\mathcal C_G$ has $G$-coalgebras as objects and coalgebra homomorphisms as morphisms. Its identities and composition are those of $\mathcal C$, whose closure is supplied by [[thm-coalgebra-homomorphisms-are-closed-under-identities-and-composition]]. The **forgetful functor** $U^G:\mathcal C_G\to\mathcal C$ sends a coalgebra and a coalgebra homomorphism to their underlying object and arrow.
