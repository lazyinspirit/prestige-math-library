---
id: thm-reduced-khovanov-basepoint-and-reidemeister-invariance
kind: theorem
title: "Reduced Khovanov cohomology is invariant under based moves and basepoint transport"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-countable-choice
  - lem-marked-knot-cut-tangles-have-relative-reidemeister-movies
  - def-reduced-khovanov-cohomology-of-a-knot
  - thm-oriented-reidemeister-equivalence-theorem
  - lem-khovanov-reidemeister-chain-homotopies
  - thm-isotopy-extension
  - lem-a-smooth-isotopy-of-links-can-be-put-in-general-position
  - lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times
  - def-chain-homotopy
  - def-chain-homotopy-equivalence
proof_strategy: direct
axiom_use: "Assumes ACω through ambient isotopy extension and oriented Reidemeister equivalence; the local based chain homotopies and quotient argument are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§8.1–8.4"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §§3.5.1–3.5.5"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §6.3.4"
      url: "https://arxiv.org/pdf/2501.03115v1"
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be an oriented knot and let $(D,p)$ and $(D',p')$ be finite regular oriented diagrams of $K$ with basepoints away from all crossings. Then the reduced integral groups $\widetilde{Kh}^{i,\widetilde j}(D,p)$ and $\widetilde{Kh}^{i,\widetilde j}(D',p')$ are isomorphic for every $(i,\widetilde j)$. In particular, they are invariant under Reidemeister moves supported away from the basepoint and under transport of the basepoint along the knot.

## Statement references

[[def-countable-choice|Countable choice axiom]]

[[def-reduced-khovanov-cohomology-of-a-knot|Reduced quotient and based interval module]]

[[thm-oriented-reidemeister-equivalence-theorem|Oriented Reidemeister equivalence]]

[[thm-isotopy-extension|Ambient extension of a marked-knot isotopy]]

[[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position|General-position link isotopy]]

[[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times|Finite Reidemeister event sequence]]

[[lem-khovanov-reidemeister-chain-homotopies|Local based chain homotopies]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§8.1–8.4](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §§3.5.1–3.5.5](https://arxiv.org/pdf/math/0201043)

[Zhang, *Notes on Khovanov homology* (2025), §6.3.4](https://arxiv.org/pdf/2501.03115v1)

## Facts & Assumptions
**Given:** AC$_\omega$, two finite regular based diagrams of the same oriented knot, and their reduced quotient complexes.

[F1] AC$_\omega$ is the axiom that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F2] An isotopy of smooth embeddings of a compact knot circle extends under AC$_\omega$ to an ambient isotopy ([[thm-isotopy-extension]]).

[F3] The cut one-interval tangles of any two based diagrams of the same oriented knot admit a smooth isotopy relative to the two endpoints and collars, and a finite relative Reidemeister movie. The moving-ball and terminal Alexander-scaling constructions, and the spatial-cutoff general-position proof, are supplied by [[lem-marked-knot-cut-tangles-have-relative-reidemeister-movies]], proof steps 1.1–6.1.

[F4] Every local move away from the mark induces a bigraded chain homotopy equivalence of the reduced quotient complexes; all local chain maps and homotopies commute with $X_p$ before quotienting ([[lem-khovanov-reidemeister-chain-homotopies]]).

[F5] A cochain homotopy equivalence induces mutually inverse maps on cohomology ([[def-chain-homotopy]], [[def-chain-homotopy-equivalence]]).

## Proof

1.1 Under AC$_\omega$ in [F1], apply [F3] to $(D,p)$ and $(D',p')$. Its moving-ball construction uses the compact isotopy-extension clause of [F2]. It gives a finite Reidemeister movie of their cut one-interval diagrams whose endpoints and short product collars remain fixed throughout. Closing the boundary collars by the same crossing-free cap recovers the two based diagrams. In each resolution this closure replaces the distinguished interval by the based circle and adds no crossing, so it preserves $n_+,n_-$, cohomological degree and reduced quantum degree. The quotient/interval identification is the one proved in the defining reduced-complex item. [F1, F2, F3, given, construct]

2.1 Every interior R1, R2 or R3 in the movie avoids the distinguished end collars. By [F4], its chain maps and contractions descend to the reduced quotient. A planar isotopy of the tangle identifies resolution factors and preserves every signed edge map; it fixes the distinguished interval and its degree-zero module. Thus each movie segment gives a bigraded chain homotopy equivalence of the reduced complexes. By [F5], the induced cohomology maps are mutually inverse, and finite composition gives the asserted isomorphisms in every $(i,\widetilde j)$. [F3, F4, F5, step 1.1, algebra]

3.1 Taking a movie with just one local move gives the based-move clause. Taking the same diagram with two marks gives the basepoint-transport clause by [F3]; orientation-preserving reparametrization of the single knot circle can carry either mark to the other. The relative supplier proves this case using an actual isotopy of cut arcs and fixed collars, so no relative-boundary statement for closed-link isotopies is being assumed. Together with step 2.1 this proves the full Statement. AC$_\omega$ is used only through that supplier's isotopy extension and transversality, and the local algebra is choice-free. [F1, F3, F4, F5, step 1.1, step 2.1, algebra] ∎
