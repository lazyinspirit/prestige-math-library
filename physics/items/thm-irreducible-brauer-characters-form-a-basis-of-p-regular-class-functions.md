---
id: thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions
kind: theorem
title: "Irreducible Brauer characters form a basis of the p-regular class functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-brauer-characters-are-class-functions-on-p-regular-elements, thm-brauer-character-is-additive-on-short-exact-sequences, def-decomposition-map-from-ordinary-to-modular-grothendieck-groups, def-class-function-and-the-space-of-complex-class-functions, thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
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

## Statement

Choose once and for all the standard complex realization of Brauer character
values by identifying the prime-to-$p$ roots of unity in the splitting
$p$-modular system with the corresponding complex roots of unity. Under that
identification, the irreducible Brauer characters of $G$ form a basis of the
complex vector space of class functions on $G^0$.

## Facts & Assumptions

**Given:** A finite group $G$, a prime $p$, and a splitting $p$-modular system for $G$.

[L1] Every Brauer character is a class function on $G^0$ ([[prop-brauer-characters-are-class-functions-on-p-regular-elements]]).

[L2] Brauer characters are additive on short exact sequences ([[thm-brauer-character-is-additive-on-short-exact-sequences]]).

[L3] Ordinary irreducible complex characters form a basis of the space of class functions on $G$ ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).

[F4] For every ordinary irreducible character $\chi$, its restriction $\chi^0:=\chi|_{G^0}$ is the Brauer character of the modular reduction of a stable lattice affording $\chi$ ([[def-decomposition-map-from-ordinary-to-modular-grothendieck-groups]]).

[F5] Proposition 1.5 of J. Miquel Martínez's cited course notes proves that the irreducible Brauer characters are linearly independent as functions on $G^0$, by applying linear independence of modular trace functions and recovering their semisimple parts from $p$-regular elements.

## Proof

**Proof technique:** direct.

1.1 By [L1], every irreducible Brauer character is a class function on $G^0$, so the family lies in the target vector space. By [F5], it is linearly independent. [L1, F5, given]

1.2 Let $f:G^0\to\mathbb C$ be a class function. Extend it to a class function $\widetilde f:G\to\mathbb C$ by setting $\widetilde f(g)=0$ on the $p$-singular elements. Then [L3] gives $\widetilde f=\sum_\chi a_\chi\chi$ as a linear combination of ordinary irreducible characters. Restricting to $G^0$ yields $$f=\sum_\chi a_\chi\chi^0.$$ [L3, given, algebra]

2.1 By [F4], each $\chi^0$ is the Brauer character of some finite-dimensional $kG$-module. A composition series for that module and [L2] write $\chi^0$ as a linear combination of irreducible Brauer characters. Step 1.2 therefore expresses $f$ as a linear combination of irreducible Brauer characters. [L2, F4, step 1.2, algebra]

3.1 Steps 1.1 and 2.1 show that the irreducible Brauer characters are linearly independent and span the class functions on $G^0$, hence form a basis. [step 1.1, step 2.1] ∎
