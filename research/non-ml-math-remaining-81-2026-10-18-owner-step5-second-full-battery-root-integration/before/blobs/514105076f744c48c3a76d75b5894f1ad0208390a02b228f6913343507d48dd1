---
id: thm-rational-cherednik-kz-factors-through-hecke-algebra
kind: theorem
title: "KZ monodromy on category O factors through the reflection Hecke algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 13
deps:
  - def-rational-cherednik-kz-functor-and-finite-hecke-algebra
  - thm-rational-cherednik-kz-standard-modules-factor-through-hecke
  - lem-rational-cherednik-category-o-has-finite-length
  - lem-rational-cherednik-dunkl-localization-and-flat-connection
  - thm-rational-cherednik-category-o-projective-generator-from-generalized-standards
  - lem-rational-cherednik-kz-relation-specializes-in-flat-family
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§6.2, Theorem 6.4 and its generic-parameter/deformation/projective-generator proof, PDF pp. 45–46."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§5.3, Theorem 5.13 and its deformation/projective-object proof, PDF pp. 20–21."
---

## Statement

For every $M\in\mathcal O_c(W,\mathfrak h)$, the KZ braid-group representation $\operatorname{KZ}(M)$ factors through the parameter-specific finite reflection Hecke algebra $\mathcal H_{q(c)}(W)$ defined in [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]. No semisimplicity or genericity assumption on $c$ is imposed.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] [[thm-rational-cherednik-category-o-projective-generator-from-generalized-standards]]: for fixed $c$, a direct summand of a generalized regular standard is a finite projective generator of $\mathcal O_c$; every object is a quotient of a finite sum of that generalized standard.

[F2] [[lem-rational-cherednik-kz-relation-specializes-in-flat-family]] proves the exact meridian polynomial identity on all generalized regular standards, by convergent nonresonant gauges and holomorphic continuation of the polynomial-free parameter family.

[F3] [[lem-rational-cherednik-dunkl-localization-and-flat-connection]]: KZ is exact.

[F4] [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]] specifies the target algebra and every defining meridian relation.

## Proof

**Proof technique:** direct.

**Given:** The stated hypotheses and Facts.

1.1 Choose a generalized regular standard $G_{n,c}$ whose finite sum surjects onto $M$, using [F1]. By [F2], every specified meridian polynomial annihilates $\operatorname{KZ}(G_{n,c})$, and hence also a finite direct sum of these modules. [F1, F2, choose, algebra]

2.1 Exactness [F3] gives a surjection from that direct sum to $\operatorname{KZ}(M)$. An annihilating relation passes to a quotient, so every defining relation in [F4] annihilates this fiber. The braid-group action therefore factors through $\mathcal H_{q(c)}(W)$, for the original arbitrary parameter and object. This uses a generating quotient, rather than the invalid inference from exactness and relations on composition factors. [F3, F4, step 1.1, algebra] ∎
