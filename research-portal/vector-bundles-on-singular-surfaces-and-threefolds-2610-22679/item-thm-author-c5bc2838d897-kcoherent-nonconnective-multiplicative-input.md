---
title: External nonconnective lax symmetric monoidal K-theory
status: draft
research_item: thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input
dependency_level: 4
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC and fixed universes. Let Cat_perf be the infinity-category of small idempotent-complete stable infinity-categories and exact functors. It is symmetric monoidal with tensor characterized by exact functors in each variable. The nonconnective algebraic K-theory functor 𝕂:Cat_perf→Sp exists and is lax symmetric monoidal. It is the functor denoted IK, not connective K, in BGT: 𝕂(A)≃Map($U_{\mathrm{loc}}$(Sp^ω),$U_{\mathrm{loc}}$(A)). In particular it carries coherent commutative algebra categories to E∞ ring spectra, with the corresponding functorial algebra and module operations induced by its lax structure.

## Source contract
**Given:** Small stable idempotent-complete infinity-categories, exact functors, their exact tensor and AC.

**Goal:** Import the precise nonconnective multiplicative functor used for schemes and supported categories.

[F1] BGT, A universal characterization, §2.2, §3.1, Definition 9.6 and Theorem 9.8, supplies the domain, nonconnective invariant and tensor universal property.

[F2] BGT, Uniqueness of the multiplicative cyclotomic trace, Proposition 5.9 and Corollary 5.10 explicitly include nonconnective IK in the lax symmetric monoidal assertion.

## External input
Import [F1] and [F2], with the recorded limits. The target Sp and smash-product notation are those of [def-stable-spectra-interface](item-def-stable-spectra-interface). This input does not assert that every restriction sequence of schemes is a localization sequence; it does not identify π₀ with a separately defined degree-zero group. Those application/comparison theorems remain separate suppliers.
