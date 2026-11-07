---
id: thm-normal-proper-curve-prime-to-characteristic-constructible-cohomology-finite-in-zf
kind: theorem
title: "Finite constructible prime-to-characteristic étale cohomology on a normal proper curve without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - lem-normal-proper-curve-prime-to-characteristic-kummer-cohomology-finite-in-zf
  - lem-ordinary-lisse-sheaf-on-smooth-curve-has-finite-etale-trivialization
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - thm-sylow-first-theorem
  - thm-integral-closure-finite-finite-type-domain-over-field
  - lem-open-immersion-exact-extension-on-normalized-adic-towers-in-zf
  - lem-etale-closed-point-stalks-conservative-over-algebraically-closed-field-in-zf
  - lem-finite-morphism-etale-direct-image-calculus
  - lem-finite-type-derived-tower-direct-images-compose-in-zf
  - def-proper-morphism
proof_strategy: direct
axiom_use: "No ambient choice principle is assumed. Each cover, group filtration, normalization and cohomological transfer uses finite data."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, cohomology of torsion sheaves on curves"
      url: "https://stacks.math.columbia.edu/tag/03SC"
      locator: "The finite-coefficient curve finiteness conclusion is reconstructed from the separate choice-free constant and finite-cover inputs."
---

## Statement

Let k be algebraically closed, C a normal integral proper finite-type k-curve, ℓ≠char(k) prime, n≥1, and F a constructible étale Z/ℓⁿZ-module sheaf on C. Then every H^q(C,F) is finite in the choice-free finite-hypercover model. No ambient choice axiom or selected separable closure is assumed. This statement does not assert relative proper base change or cohomological finiteness for arbitrary nonconstructible sheaves.

## Facts & Assumptions

**Given:** k, C, ℓ, n and F as stated.

[F1] On a normal integral proper k-curve, all cohomology groups of μ_ℓ are finite without ambient choice. [[lem-normal-proper-curve-prime-to-characteristic-kummer-cohomology-finite-in-zf]]

[F2] An ordinary finite-dimensional locally constant vector sheaf on a normal integral curve has a connected finite étale Galois trivialization without a choice premise. [[lem-ordinary-lisse-sheaf-on-smooth-curve-has-finite-etale-trivialization]]

[F3] Faithfully flat module and algebra descent and finite ℓ-Sylow subgroups are available without a choice premise. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]] [[thm-sylow-first-theorem]]

[F4] Finite-type k-domains have finite normalization in their fraction fields. [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F5] Open extension by zero is exact, and closed k-point étale stalks are exact and conservative. [[lem-open-immersion-exact-extension-on-normalized-adic-towers-in-zf]] [[lem-etale-closed-point-stalks-conservative-over-algebraically-closed-field-in-zf]]

[F6] Finite étale direct image is exact, and unnormalized derived tower direct images compose. [[lem-finite-morphism-etale-direct-image-calculus]] [[lem-finite-type-derived-tower-direct-images-compose-in-zf]]

[F7] A proper morphism is separated, finite type and universally closed. [[def-proper-morphism]]

## Proof

1.1 A constructible stratum containing the generic point contains a dense open U on which F is finite locally constant; its complement Z is a finite set of closed k-points. The closed-stalk criterion [F5] gives 0→j_!F|U→F→i_*F|Z→0. The right term has finite H⁰ and zero positive cohomology: a finite hypercover restricts at each k-point to a finite contractible simplicial set. The invariant filtration by powers of ℓ reduces the problem, by finitely many long exact sequences, to j_!L for one finite-dimensional locally constant F_ℓ-vector sheaf L on U. [F5, given, algebra]

2.1 By [F2], choose a connected finite étale Galois trivialization p:T→U of L with finite group G. Let H be an ℓ-Sylow subgroup. Descend the finite G-set G/H along the given torsor using [F3], producing a connected finite étale cover f:V→U of degree d=[G:H] prime to ℓ. The finite H-module given by the fibre of L has a finite filtration with trivial one-dimensional quotients: any nonzero module has a nonzero fixed vector by orbit counting modulo ℓ. Descent along T→V gives a corresponding filtration of f*L. The diagonal and finite-sheet trace L→f_*f*L→L compose to d; after multiplying by d⁻¹, L is a direct summand of f_*f*L. [F2, F3, step 1.1, given, choose, algebra]

3.1 Normalize C in k(V). On an affine Spec A⊂C, scale a finite field-generating list to be integral over A, form its finite A-algebra, and apply [F4] to obtain a finite integral closure. Localization glues these rings to a finite normal integral Y→C, restricting to V over U because V is already normal and finite over U. This Y is proper over k: a finite A-algebra is universally closed by the finite-dimensional fibre argument and determinant Nakayama, and [F7] then makes a finite morphism proper; compose with the given proper C→Spec k. Let j':V→Y and fbar:Y→C. [F4, F7, step 2.1, given, algebra]

3.2 For a finite-coefficient sheaf G on V, j_!f_*G≅fbar_*j'_!G: the map is the identity on U by finite base change and both sides have zero stalk outside U; [F5] and the finite-product stalk formula of [F6] prove the isomorphism. By [F6], finite direct image is exact and its derived cohomology on C is the cohomology on Y. Exact j'_! preserves the finite filtration of f*L from step 2.1. Consequently it suffices to prove finite cohomology for j'_!F_ℓ on Y. [F5, F6, step 2.1, step 3.1, algebra]

4.1 Choose one primitive ℓ-th root in k, identifying F_ℓ with μ_ℓ. By [F1], every H^q(Y,F_ℓ) is finite. The complement Y−V is finite; its skyscraper sheaf has finite H⁰ and zero higher cohomology by the same finite-point hypercover calculation as step 1.1. The exact sequence 0→j'_!F_ℓ→F_ℓ,Y→i'_*F_ℓ,Y−V→0 therefore makes every H^q(Y,j'_!F_ℓ) finite. Finite filtrations, the isomorphism of step 3.2 and the direct summand of step 2.1 give finite cohomology for j_!L; step 1.1 propagates this to F. [F1, step 1.1, step 2.1, step 3.2, given, choose, algebra] ∎

## Scope

The Picard-derived constant finiteness used in [F1] is a separate choice-free finite-code input. This theorem does not assert finiteness for arbitrary nonconstructible sheaves or any relative proper-base-change theorem.
