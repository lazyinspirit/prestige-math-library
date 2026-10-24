---
id: rem-resolution-of-singularities-conventions
kind: remark
title: Conventions for the resolution development
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
- def-axiom-of-choice
- def-coherent-module-scheme
- def-embedding-dimension-and-regular-local-ring
- def-field
- def-integral-scheme
- def-locally-finite-type-and-finite-type-morphism
- def-locally-noetherian-and-noetherian-scheme
- def-separated-morphism-schemes
- def-simple-normal-crossings-divisors
- def-smooth-morphism-schemes
- thm-prime-subfield-classification
- lem-ag-geometric-regularity-field-tests
- thm-ag-standard-smooth-geometric-regularity
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
  - title: 'Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403'
    url: https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf
---

## Remark

This page follows the source conventions of [[def-field]] and [[thm-prime-subfield-classification]]: $K$ is a field of characteristic zero, i.e. its prime subfield is $\mathbb{Q}$.
A $K$-variety is an integral, separated scheme of finite type over $K$ ([[def-integral-scheme]], [[def-separated-morphism-schemes]], [[def-locally-finite-type-and-finite-type-morphism]]); a smooth $K$-scheme is a scheme of finite type over $K$ whose structure morphism is smooth ([[def-smooth-morphism-schemes]]); in characteristic zero a scheme of finite type over $K$ is smooth over $K$ exactly when all its local rings are regular, by the perfect-field geometric-regularity criterion ([[lem-ag-geometric-regularity-field-tests]], [[thm-ag-standard-smooth-geometric-regularity]]).
The core resolution construction is over an algebraically closed field of characteristic zero, as in the source. Items with an explicitly broader field or characteristic range retain their stated hypotheses; the descent item and final theorems apply over arbitrary characteristic-zero fields. The positive-characteristic derivative converses require the perfect-field qualifications stated in their items.
All blowups are blowups of regular closed subschemes of smooth $K$-schemes, and all divisors are effective Cartier divisors; `SNC' abbreviates `simple normal crossings' in the sense of [[def-simple-normal-crossings-divisors]].
Resolutions are stated for reduced or integral base schemes and are constructed from an ambient smooth scheme.
The Axiom of Choice is assumed throughout this resolution development and is inherited from the published blowup and relative-Proj suppliers ([[def-axiom-of-choice]]); no dependent-choice or other choice principle is used by this page's new arguments beyond what those suppliers already assume.
