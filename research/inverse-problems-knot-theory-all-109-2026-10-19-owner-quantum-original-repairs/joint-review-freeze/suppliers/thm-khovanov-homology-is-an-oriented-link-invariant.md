---
id: thm-khovanov-homology-is-an-oriented-link-invariant
kind: theorem
title: Khovanov homology is an oriented link invariant
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-countable-choice
  - thm-oriented-reidemeister-equivalence-theorem
  - thm-khovanov-chain-complex-from-diagram-procedure-properties
  - lem-khovanov-reidemeister-chain-homotopies
  - def-chain-homotopy
  - def-chain-homotopy-equivalence
proof_strategy: direct
axiom_use: Assumes ACω exactly through the oriented Reidemeister-equivalence
  theorem; the local chain homotopies and induced cohomology maps are
  choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mikhail Khovanov, A categorification of the Jones polynomial,
        arXiv:math/9908171v2, §§5.1–5.4
      url: https://arxiv.org/pdf/math/9908171v2
    - title: Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial,
        Algebraic & Geometric Topology 2 (2002), §§3.5.1–3.5.5
      url: https://arxiv.org/pdf/math/0201043
    - title: Louis H. Kauffman, An Introduction to Khovanov Homology,
        arXiv:1107.1524v2 (2022), §§4–5
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf
    - title: Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.6–3.7
      url: https://arxiv.org/pdf/2501.03115v1
---

## Statement

Assume the Axiom of Countable Choice. For every nonempty oriented link $L$, the bigraded integral groups $Kh^{i,j}(L):=H^i(C^{*,j}(D))$, where $D$ is any finite regular oriented diagram of $L$ and $C(D)$ is the normalized Khovanov cochain complex, are independent of the choice of $D$ up to bigraded isomorphism.

## Statement references

[[def-countable-choice|Countable choice axiom]]

[[thm-oriented-reidemeister-equivalence-theorem|Oriented Reidemeister equivalence]]

[[thm-khovanov-chain-complex-from-diagram-procedure-properties|Finite cochain-complex output]]

[[lem-khovanov-reidemeister-chain-homotopies|Local chain homotopy equivalences]]

[[def-chain-homotopy-equivalence|Chain homotopy equivalence convention]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§5.1–5.4](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §§3.5.1–3.5.5](https://arxiv.org/pdf/math/0201043)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §§4–5](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

[Zhang, *Notes on Khovanov homology* (2025), §§3.6–3.7](https://arxiv.org/pdf/2501.03115v1)

## Facts & Assumptions
**Given:** AC$_\omega$, two finite regular diagrams of the same oriented link, and their normalized cochain complexes.

[F1] AC$_\omega$ is the axiom that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F2] Under AC$_\omega$, diagrams of the same oriented link are connected by a finite sequence of planar isotopies and oriented Reidemeister I, II, and III moves ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F3] Every planar isotopy and oriented Reidemeister I, II or III move induces a bigraded chain homotopy equivalence of the normalized complexes ([[lem-khovanov-reidemeister-chain-homotopies]]).

[F4] A bounded cochain complex has defined cohomology in each bidegree, and chain homotopy equivalent complexes induce isomorphic cohomology ([[thm-khovanov-chain-complex-from-diagram-procedure-properties]], [[def-chain-homotopy-equivalence]]).

## Proof

1.1 By [F1] and [F2], choose a finite sequence $D=D_0,D_1,\ldots,D_r=D'$ whose successive diagrams differ by planar isotopy or one oriented Reidemeister move. By [F3], each pair has a bigraded chain homotopy equivalence, with chain maps in both directions and homotopies from their composites to the respective identities. The normalization in that supplier cancels the raw shifts, so these maps have bidegree $(0,0)$. [F1, F2, F3, given, choose]

2.1 A chain map takes cocycles to cocycles and coboundaries to coboundaries. If two chain maps differ by $dh+hd$, their values on a cocycle differ by a coboundary, so they induce the same cohomology map. Thus each equivalence in step 1.1 gives mutually inverse maps in every bidegree. Composing the finitely many induced isomorphisms identifies the cohomology of $C(D)$ and $C(D')$. It follows that the groups $Kh^{i,j}(L)$ are independent of the chosen diagram up to bigraded isomorphism. The empty sequence gives the identity, and no assertion of a canonical isomorphism for all move sequences is needed. [F3, F4, step 1.1, algebra] ∎
