---
id: thm-os-spectral-sequence-for-a-fixed-link-diagram
kind: theorem
title: "The Ozsváth–Szabó spectral sequence for a fixed link diagram"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - lem-double-branched-cover-of-an-oriented-link-well-defined
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
  - def-link-surgery-filtered-complex-for-double-branched-cover
  - lem-os-link-surgery-filtered-complex-and-triangle
  - lem-os-unlink-resolution-covers-and-floer-tqft
  - lem-link-surgery-e-one-differential-is-reduced-khovanov
  - lem-os-filtered-convergence-and-invariance-scope
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
proof_strategy: direct
axiom_use: "Assumes AC for the branched-cover construction and ACω for the Floer analytic package; this fixed-diagram argument does not use Khovanov diagram invariance."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, Theorem 6.3 and proof"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5.3"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Assume AC and the ACω Heegaard Floer analytic package. Let $D$ be any finite regular diagram of a nonempty oriented link $L\subset S^3$, with a marked point away from crossings. There is a spectral sequence over $\mathbb F_2$ associated to the link-surgery filtered complex for this fixed diagram whose $E_2$ page is isomorphic, with the normalized grading shifts of the chosen smoothing convention, to $\widetilde{Kh}(\overline L,p;\mathbb F_2)$ computed from the mirror diagram, and whose abutment is $\widehat{HF}(\Sigma(L);\mathbb F_2)$ with its image filtration. This is a fixed-diagram construction; it does not assert a diagram-independent filtered quasi-isomorphism type.

## Statement references

[[def-double-branched-cover-of-an-oriented-link|Branched cover convention]]

[[def-link-surgery-filtered-complex-for-double-branched-cover|Filtered link-surgery module]]

[[lem-link-surgery-e-one-differential-is-reduced-khovanov|E1 differential identification]]

[[lem-os-filtered-convergence-and-invariance-scope|Finite filtration convergence]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, Theorem 6.3 and proof](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5.3](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** AC, a nonempty oriented link diagram $D$ with a basepoint, and the stated ACω Floer disk and polygon theory.

[F1] The diagram determines the surgery cube of branched covers and its filtration ([[def-link-surgery-filtered-complex-for-double-branched-cover]]).

[F2] The surgery cube is a filtered chain complex with total homology identified with the hat Floer homology of the branched cover ([[lem-os-link-surgery-filtered-complex-and-triangle]], [[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]]).

[F3] The first page and its differential identify with the reduced Khovanov cube of the mirror diagram ([[lem-link-surgery-e-one-differential-is-reduced-khovanov]]).

[F4] A finite filtration yields a convergent spectral sequence to the associated graded of the filtered homology ([[lem-os-filtered-convergence-and-invariance-scope]]).

## Proof

1.1 The crossing resolutions of $D$ give the vertices of the cube, and the surgery maps give the differential components. By [F2] these components square to zero and preserve the increasing cube filtration, so the associated spectral sequence is defined. [F1, F2, given]

1.2 The filtration has only the $n+1$ levels $0,\ldots,n$, where $n$ is the number of crossings. By [F4] the spectral sequence stabilizes and abuts to the image filtration on the total homology, which [F2] identifies with $\widehat{HF}(\Sigma(L);\mathbb F_2)$. [F2, F4, step 1.1]

2.1 The associated graded vertex groups form the $E_1$ page, and their first differential is the sum of the single-crossing edge maps. By [F3], this complex is isomorphic to the reduced Khovanov complex of the mirror diagram; taking its cohomology gives the stated $E_2$ page. [F3, step 1.1]

2.2 The proof used one fixed $D$ and the finite filtration only. It supplies no filtered map between the constructions for two diagrams, so it establishes the stated fixed-diagram spectral sequence but no diagram-independent filtered quasi-isomorphism. The proof remains escalated because [F2] and [F3] have unresolved surgery top-input/coherent filling-comparison and unlink-TQFT suppliers. [F2, F3, F4, step 1.1, step 1.2, step 2.1]
