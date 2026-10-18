---
id: thm-rational-cherednik-kz-standard-modules-factor-through-hecke
kind: theorem
title: "KZ monodromy of standard modules satisfies the reflection Hecke relations"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 12
deps:
  - def-rational-cherednik-kz-functor-and-finite-hecke-algebra
  - lem-rational-cherednik-standard-module-local-connection-residue
  - lem-rational-cherednik-log-connection-meridian-eigenvalues
  - def-rational-cherednik-standard-module
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
      locator: "§6.2, local residue calculation for standard modules, PDF pp. 45–46; the proof here fixes signs from the present left-module and positive-meridian conventions."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§5.2.2, standard induced-module connection, PDF pp. 18–19."
verification:
  precheck: pending
---

## Statement

For every finite-dimensional $W$-module $E$, each positive reflection meridian acts on $\operatorname{KZ}(\Delta_c(E))$ with eigenvalues among $\mu_{H,0},\dots,\mu_{H,e_H-1}$ from [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]. Consequently $\operatorname{KZ}(\Delta_c(E))$ is a module over the defined finite reflection Hecke algebra $\mathcal H_{q(c)}(W)$. No semisimplicity assumption on $\mathcal O_c$ or on the Hecke algebra is made.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] [[lem-rational-cherednik-kz-relation-specializes-in-flat-family]] proves the exact meridian polynomial identities on every generalized standard at every parameter, with the current endpoint and residue conventions.

[F2] [[def-rational-cherednik-standard-module]]: $\Delta_c(E)$ is induction of the finite $W$-module $E$ with $\mathfrak h$ acting by zero.

[F3] [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]: the specified reflection Hecke algebra is the braid-group algebra modulo these polynomial identities.

## Proof

**Proof technique:** direct.

**Given:** The stated hypotheses and Facts.

1.1 A standard is an induced nilpotent module with augmentation ideal acting by zero; equivalently it is a direct summand of a finite sum of the degree-zero generalized regular standard, by finite-group averaging. [F1] therefore gives $\prod_{j=0}^{e_H-1}(T_H-\mu_{H,j})=0$ on its KZ fiber for every $H$ and every $c$. This proves an annihilating polynomial, including resonant parameters; no diagonalizability at such parameters is inferred from a characteristic polynomial. [F1, F2, algebra]

2.1 Every eigenvalue of an operator annihilated by that polynomial is one of its roots. Since every defining relation of [F3] acts by zero, the braid representation factors through the stated Hecke quotient. This proves all assertions without a semisimplicity hypothesis. [F3, step 1.1, algebra] ∎
