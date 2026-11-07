---
id: lem-finite-etale-galois-pushforward-of-lisse-adic-towers-in-zf
kind: lemma
title: "Finite Galois étale pushforward of lisse adic towers without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - lem-finite-morphism-etale-direct-image-calculus
  - def-l-adic-sheaf-as-compatible-system
  - def-derived-category-of-etale-sheaves
proof_strategy: direct
axiom_use: "No choice principle is assumed; the given Galois cover supplies its own finite trivializing cover."
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

Let q:T→U be a given finite étale Galois cover with finite group G, and let L•=(L_n) be a strict finite-free lisse Z_l-system of constant rank r on T. In the explicit rationalized normalized tower model, the levelwise direct image q_*L• is a strict finite-free lisse system of rank |G|r on U. The levelwise functor q_* is exact on arbitrary finite-coefficient étale module sheaves, commutes with coefficient reduction and carries the coherent normalized transition maps of L• to normalized transition maps. Hence its derived action on this tower is the levelwise ordinary direct image, without choosing injective or acyclic resolutions. The conclusion assumes no choice principle. It treats this finite proper map, not the general proper pushforward.

## Facts & Assumptions

**Given:** q, its finite Galois group G, ℓ and L• as stated.

[F1] Direct image by a finite morphism is exact for étale abelian sheaves and is compatible with arbitrary base change, without a choice premise. [[lem-finite-morphism-etale-direct-image-calculus]]

[F2] A strict finite-free lisse adic system has finite free locally constant level sheaves and compatible quotient reductions. [[def-l-adic-sheaf-as-compatible-system]]

[F3] The normalized tower model has levelwise exactness and derived reduction transition maps; the rational category tensors its Hom groups with Q_l. [[def-derived-category-of-etale-sheaves]]

## Proof

1.1 The Galois torsor identity identifies T×_U T with the finite disjoint union of copies of T indexed by G. By [F1], pulling q_*L_n back along q gives the direct image of the pullback along the projection from this disjoint union, hence the finite direct sum ⊕_{g∈G}g*L_n. Each summand is locally constant free of rank r. At any specified point, choose finitely many local trivializations of these finitely many summands and take their finite fibre-product refinement. Their sum is then constant free of rank |G|r. Since q itself is a surjective étale cover, q_*L_n is locally constant free of that rank on U. [F1, F2, given, algebra]

2.1 By [F1], q_* is exact for each coefficient ring; in particular it preserves finite direct sums, kernels and cokernels. Apply q_* to the short exact quotient sequence defining reduction of L_{n+1}: it gives (q_*L_{n+1})/ℓⁿ(q_*L_{n+1})≅q_*L_n, with all compatibilities inherited from the original tower. By step 1.1 every output level is finite free, so its derived tensor with A_n=Z/ℓⁿ agrees with this ordinary quotient. Therefore (q_*L_{n+1})⊗^L_{A_{n+1}}A_n≅q_*L_n. These are coherent transitions, not independent levelwise choices. [F1, F2, step 1.1, algebra]

3.1 The levelwise q_* functor is exact on the actual tower category by [F1] and levelwise exactness in [F3]. Thus it preserves quasi-isomorphisms and itself represents its derived action: no injective or acyclic resolution is involved. Step 1.1 gives a single stratum U, cohomological degree zero and Tor amplitude [0,0], while step 2.1 gives normalization. The functor is Z_l-linear on tower morphisms and descends to the rationalized Hom groups described in [F3]. This is the claimed finite-map pushforward. [F1, F3, step 1.1, step 2.1, algebra] ∎

## Scope

This establishes an actual choice-free derived pushforward for a given finite Galois étale map and a finite-free lisse tower. It does not establish the compactification's positive-dimensional proper pushforward, its finiteness, or the general functor Rf_!.
