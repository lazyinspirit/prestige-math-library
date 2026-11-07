---
id: lem-global-localization-lands-in-restricted-cohomology
kind: lemma
title: Global localization lands in restricted local cohomology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-restricted-product-of-local-galois-cohomology-groups
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - lem-number-field-extension-ramified-at-finitely-many-places
  - lem-finite-ramification-of-function-field-extension
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - lem-cyclic-group-cohomology-norm-and-inflation
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are assumed for local completion embeddings, the restricted-product definition and continuous cohomology.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 4.8, printed p.55; the finite-quotient and ramification proof is supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$, $S_0\subseteq S$, $K_S$, the finite continuous $G_{K,S}$-module $M$, and the local cohomology conventions satisfy the hypotheses of the restricted-product definition. For $r=0,1,2$, the family of actual localizations of any $x\in H^r(G_{K,S},M)$ lies in $P^r_S(K,M)$. In degree zero at an archimedean place use the canonical map from invariants to Tate degree zero. In degree two the finite-place localizations have finite support. No global exactness, image-closedness, or finiteness of the localization kernel is asserted.

## Facts & Assumptions

**Given:** The global field, place sets, unramified tower, finite module, local conventions and explicit choices in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The restricted local product uses unramified-inflated reference subgroups at finite places outside $S_0$ and Tate cohomology at the archimedean places. [[def-restricted-product-of-local-galois-cohomology-groups]]

[F2] Continuous cohomology with discrete coefficients is the filtered limit of finite-quotient cohomology with invariant coefficients. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F3] A finite extension of a number field or finite-constant global function field ramifies at only finitely many finite places. [[lem-number-field-extension-ramified-at-finitely-many-places]] [[lem-finite-ramification-of-function-field-extension]]

[F4] The finite residue-field Galois group is procyclic; cyclic degree-two cohomology has the norm description and inflation multiplies the invariant representative by the quotient-degree factor. [[thm-absolute-galois-group-of-finite-field-is-procyclic]] [[lem-cyclic-group-cohomology-norm-and-inflation]]

## Proof

**Proof technique:** represent a cohomology class on one finite Galois quotient and restrict at places unramified in that quotient.

1.1 Since $M$ is finite and continuous, its action factors through a finite quotient. By [F2], for any $x\in H^r(G_{K,S},M)$ choose a finite Galois extension $L/K$ inside $K_S$ such that $M$ is fixed by $\operatorname{Gal}(K_S/L)$ and $x$ is inflated from $H^r(\operatorname{Gal}(L/K),M)$. In degree zero this simply means choosing a finite stage fixing $M$ and representing the invariant element. [F2, given, choose, algebra]

2.1 By [F3], only finitely many finite places ramify in $L/K$. For every other finite $v\in S\setminus S_0$, the decomposition homomorphism $G_{K_v}\to\operatorname{Gal}(L/K)$ kills inertia. Thus the restriction of the finite-quotient class from step 1.1 factors through $G_{K_v}/I_v$ and belongs to the unramified subgroup. The remaining finite places form a finite exceptional set, so the family lies in the restricted product by [F1]. At the finitely many archimedean places use the specified Tate localization. [F1, F3, step 1.1, algebra]

3.1 For degree two at every finite place outside that exceptional set, the unramified subgroup is zero: the finite coefficient descends to a finite cyclic quotient of $G_{K_v}/I_v\cong\widehat{\mathbb Z}$, and its degree-two class is killed after inflating to a quotient whose degree is multiplied by the coefficient exponent, by the cyclic norm description. Hence the degree-two localizations have finite support. The zero class, finite $S$ and empty finite-place exceptional set are included. [F1, F2, F4, step 2.1, algebra] ∎
