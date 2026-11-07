---
id: lem-finite-morphism-derived-tower-pushforward-in-zf
kind: lemma
title: "Derived adic tower pushforward for finite morphisms without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - lem-finite-morphism-etale-direct-image-calculus
  - def-derived-category-of-etale-sheaves
  - def-l-adic-sheaf-as-compatible-system
proof_strategy: direct
axiom_use: "No choice principle is assumed; the derived coefficient comparison uses the explicit periodic free resolution."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, finite morphisms"
      url: "https://stacks.math.columbia.edu/tag/04E1"
    - title: "Grothendieck et al., SGA 5, Exposé VI §§1.1–1.5"
      url: "https://grothendiecksga.com/read/sga5/en/VI-1.html"
---

## Statement

Let f:Y→X be a finite morphism, ℓ a prime and A_n=Z/ℓⁿZ. In the explicit bounded-below derived category of A_•-module sheaf towers, the levelwise direct-image functor is exact and itself gives its derived functor Rf_*, without choosing injective resolutions. For a tower K whose level complexes have one common finite cohomological bound and coherent derived reduction isomorphisms K_{n+1}⊗^L_{A_{n+1}}A_n≅K_n, the output f_*K has the same cohomological bound and coherent derived reduction isomorphisms. The construction is Z_l-linear and passes to the stated rationalization wherever its objects and morphisms lie in the rationalized subcategory. This statement assumes no choice principle. It does not assert finite Tor amplitude, constructibility of f_*K, or pushforward for nonfinite proper maps.

## Facts & Assumptions

**Given:** f, ℓ and the bounded normalized tower K as stated.

[F1] Direct image by a finite morphism is exact on étale abelian sheaves for every coefficient ring, without a choice premise. [[lem-finite-morphism-etale-direct-image-calculus]]

[F2] The tower category has levelwise kernels, cokernels and exactness, and its derived reduction comparisons are the specified A_{n+1} to A_n tensor maps. [[def-derived-category-of-etale-sheaves]]

[F3] Rationalization tensors the morphism groups of the specified adic category with Q_l. [[def-l-adic-sheaf-as-compatible-system]]

## Proof

1.1 By [F1], f_* is additive and exact on each finite-coefficient sheaf category. Thus its levelwise action on actual towers is exact by [F2]. It preserves quasi-isomorphisms of bounded-below tower complexes and consequently descends to the derived tower category. For an exact functor the original functor itself is its right-derived functor, so this construction needs no injective or acyclic resolution. Exactness also makes its cohomology tower equal to the levelwise direct image of the original cohomology tower and therefore preserves the given uniform finite cohomological interval. [F1, F2, given, algebra]

2.1 Fix n. The A_{n+1}-module A_n has an explicit bounded-above free resolution with every term A_{n+1} and differentials alternating multiplication by ℓⁿ and ℓ. Its exactness follows directly from the ideals in Z/ℓ^{n+1}. Because K_{n+1} has bounded cohomology, canonical truncations supply a bounded representative. The total tensor with this periodic resolution has a finite direct sum in every degree. The additive exact functor f_* commutes with each such finite sum and each scalar differential, giving a canonical isomorphism (f_*K_{n+1})⊗^L_{A_{n+1}}A_n≅f_*(K_{n+1}⊗^L_{A_{n+1}}A_n). These maps are natural in the actual tower maps. Applying f_* to the specified normalized transitions of K supplies the output transitions and their coherence. [F1, F2, step 1.1, given, construct, algebra]

3.1 Levelwise scalar multiplication makes f_* Z_l-linear. It therefore extends to the Hom-group rationalization of [F3] whenever the input and output belong to its stated subcategory. No constructibility or Tor claim is inferred from the reduction calculation alone. [F3, step 1.1, step 2.1, algebra] ∎

## Scope

The theorem gives the actual derived tower action and normalization for all finite morphisms, including inseparable ones. Establishing the full constructible finite-Tor output in general is a separate obligation. This does not resolve the positive-dimensional proper map in the original compact-support consumer.
