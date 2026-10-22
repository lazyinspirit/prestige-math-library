---
id: lem-link-surgery-e-one-differential-is-reduced-khovanov
kind: lemma
title: "The E1 differential of the link-surgery complex is reduced Khovanov"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - lem-os-first-differential-is-reduced-khovanov
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
  - lem-reduced-khovanov-over-f2-basepoint-independence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, Theorem 6.3 and proof"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5.3"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

For a fixed finite regular link diagram $D$ with $n$ crossings and a basepoint away from crossings, the first page of its branched-cover link-surgery spectral sequence, together with its first differential, is isomorphic as a cochain complex over $\mathbb F_2$ to the reduced Khovanov cochain complex of the mirror diagram $\overline D$ in the specified normalized grading shifts. The resulting second page is therefore the based reduced Khovanov cohomology of $\overline D$. The isomorphism is for this fixed diagram and makes no claim about filtered chain complexes for different diagrams.

## Statement references

[[lem-os-first-differential-is-reduced-khovanov|Local first differential identification]]

[[def-reduced-khovanov-cohomology-of-a-based-link-over-f2|Reduced Khovanov cochain complex]]

[[lem-reduced-khovanov-over-f2-basepoint-independence|Basepoint-component independence over F2]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, Theorem 6.3 and proof](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5.3](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** A fixed projection $D$, its filtered surgery complex, and a marked point on its diagram.

[F1] The filtration's first differential is the sum of the cube-edge maps ([[lem-os-first-differential-is-reduced-khovanov]]).

[F2] The exact local identification, including one common vertex basis for all incident edges, the marked quotient tables and normalized mirror shifts, is the Statement of [[lem-os-first-differential-is-reduced-khovanov]]. The reduced target complex is defined in [[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]].

[F3] Over $\mathbb F_2$, the isomorphism class of the reduced cohomology does not depend on the marked component, for a fixed diagram ([[lem-reduced-khovanov-over-f2-basepoint-independence]]).

## Proof

1.1 The filtration quotient at each cube vertex is its resolution Floer group, and the differential on the first page is the sum of components changing one crossing. [F1, given]

1.2 Applying the asserted edge identifications [F2] to each of the finitely many edges identifies this first-page differential with the reduced Khovanov cube differential; the finite direct sum of the vertex isomorphisms is an isomorphism of cochain complexes. [F1, F2, step 1.1]

2.1 Taking cohomology of the identified first-page complexes gives the based reduced Khovanov cohomology on the second page. By [F3] its graded isomorphism class is independent of the chosen link component for this fixed diagram. The local supplier [F2] includes its explicitly external actual Floer/mirror inputs and the local quotient/grading calculations, so this finite assembly proves the displayed first- and second-page identification. It asserts no map between distinct diagram presentations. [F2, F3, step 1.2] ∎
