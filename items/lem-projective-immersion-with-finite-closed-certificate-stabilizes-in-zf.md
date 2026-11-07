---
id: lem-projective-immersion-with-finite-closed-certificate-stabilizes-in-zf
kind: lemma
title: A finite closed-immersion certificate stabilizes over filtered rings in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-filtered-category-and-filtered-colimit
  - def-locally-closed-immersion
  - def-closed-immersion-schemes
  - def-relative-projective-space-standard-charts
  - lem-finite-algebraic-gluing-certificates-descend-without-choice
proof_strategy: direct
axiom_use: No choice principle is assumed; the finite algebraic closed-immersion certificate is part of the input.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Limits of Schemes, Proposition 32.9.6
      url: https://stacks.math.columbia.edu/tag/01ZJ
      locator: Finite-presentation context was read in the A5 authoring; the explicitly qualified finite-certificate descent below is supplied locally.
---

## Statement

In ZF, let $A=\varinjlim_i A_i$ be a filtered colimit of rings, let $Y_i$ be a finitely presented $A_i$-scheme, and let $j_i:Y_i\to\mathbb P^n_{A_i}$ be an immersion. Suppose the base-changed map $j_A$ is supplied with a **finite algebraic closed-immersion certificate**: finitely many target and source affine presentations; finitely generated quotient ideals defining a closed subscheme $Z\subset\mathbb P^n_A$ on the standard charts; a finite algebraic gluing and principal-cover certificate with its unit-ideal equations; and mutually inverse maps $Y_A\rightleftarrows Z$ whose compositions and equality to $j_A$ are witnessed by finitely many equations. Then for some later stage $k$, the base change $j_k$ is a closed immersion. The certificate is additional data; mere topological closedness is not asserted to supply it in ZF.

## Statement references

[[def-filtered-category-and-filtered-colimit]]

[[def-locally-closed-immersion]]

[[def-closed-immersion-schemes]]

## Facts & Assumptions

**Given:** The filtered system, the finitely presented source and immersion, and the explicit finite closed-immersion certificate.

[F1] Every specified finite algebraic presentation, unit-ideal cover, gluing diagram, map and equation descends simultaneously to one stage. [[lem-finite-algebraic-gluing-certificates-descend-without-choice]]

[F2] A closed immersion is locally presented by a surjective homomorphism of affine coordinate rings. [[def-closed-immersion-schemes]]

## Proof

**Proof technique:** descend the supplied quotient, inverse maps and unit-ideal identities together.

1.1 Apply [F1] to the finite quotient ideals, all affine charts, the principal-cover unit identities, the transition isomorphisms and their cocycles. At a common later stage they define a closed subscheme $Z_k$ of $\mathbb P^n_{A_k}$: on each standard chart the defining map is an explicitly surjective quotient, and the supplied overlaps glue by [F2]. Base change recovers the supplied $Z$. [F1, F2, given, construct, algebra]

2.1 Apply [F1] again to the finite affine descriptions of the maps $Y_A\rightleftarrows Z$ and to the specified inverse and comparison equations. At one later common stage the resulting maps are mutually inverse and identify the original $j_k$ with the closed immersion $Z_k\hookrightarrow\mathbb P^n_{A_k}$. Hence $j_k$ is a closed immersion. No prime ideal or topological-cover-to-unit-ideal argument is used. [F1, F2, step 1.1, given, construct, algebra] ∎
