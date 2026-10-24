---
id: lem-link-surgery-e-one-differential-is-reduced-khovanov
kind: lemma
title: "The E1 differential of the link-surgery complex is reduced Khovanov"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - lem-os-first-differential-is-reduced-khovanov
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
  - lem-reduced-khovanov-over-f2-basepoint-independence
  - def-axiom-of-choice
  - def-countable-choice
axiom_use: "Assumes AC for the branched-cover inputs and the ACω Heegaard Floer analytic package for the vertex groups and surgery maps; finite assembly and grading calculations introduce no further choice."
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC and the ACω Heegaard Floer analytic package. For a fixed finite regular diagram $D$ of a nonempty oriented link $L\subset S^3$, with $n$ crossings and a basepoint $p\in D$ away from the crossings, choose an admissible pointed Heegaard multi-diagram subordinate to the branched-cover surgeries and the compatible perturbation data and top-generator cycles of the link-surgery construction. Its first page and first differential are isomorphic as a cochain complex over $\mathbb F_2$ to the reduced Khovanov cochain complex of the mirror diagram $\overline D$, based at the corresponding point, in the specified normalized grading shifts. The resulting second page is therefore the based reduced Khovanov cohomology of $\overline D$. The isomorphism is for this fixed diagram and makes no claim about filtered chain complexes for different diagrams.

## Statement references

[[lem-os-first-differential-is-reduced-khovanov|Local first differential identification]]

[[def-reduced-khovanov-cohomology-of-a-based-link-over-f2|Reduced Khovanov cochain complex]]

[[lem-reduced-khovanov-over-f2-basepoint-independence|Basepoint-component independence over F2]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, Theorem 6.3 and proof](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5.3](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** AC, the ACω Heegaard Floer analytic package, a fixed finite regular diagram $D$ of a nonempty oriented link $L\subset S^3$, its filtered surgery complex, and a marked point $p\in D$ away from the crossings.

[F1] The filtration's first differential is the sum of the cube-edge maps ([[lem-os-first-differential-is-reduced-khovanov]]).

[F2] [[lem-os-first-differential-is-reduced-khovanov]] supplies simultaneous vertex identifications intertwining every saddle edge with the reduced Frobenius map, including the marked-circle quotient, and identifies the surgery bits with the mirror smoothing bits. The target quotient and normalized grading convention are those of [[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]]; the shifts below are calculated from that convention, not asserted as an extra clause of the supplier's Statement.

[F3] Over $\mathbb F_2$, the isomorphism class of the reduced cohomology does not depend on the marked component, for a fixed diagram ([[lem-reduced-khovanov-over-f2-basepoint-independence]]).

## Proof

1.1 The filtration quotient at each cube vertex is its resolution Floer group, and the differential on the first page is the sum of components changing one crossing. [F1, given]

2.1 Applying the asserted edge identifications [F2] to each of the finitely many edges identifies this first-page differential with the reduced Khovanov cube differential; the finite direct sum of the vertex isomorphisms is an isomorphism of cochain complexes. [F1, F2, step 1.1]

3.1 Write $n_\pm=n_\pm(D)$ and let $a_c\in\{1,X\}$ label the unmarked circles of a state $I$, with quantum degrees $1,-1$. Mirroring interchanges $n_+$ and $n_-$, so the normalized target convention in [F2] gives $i=|I|-n_+$ and $\widetilde j=\sum_{c\ne p}\deg_q(a_c)+|I|+n_--2n_+$. The marked quotient label has reduced degree zero. Unmarked saddles lower the label-degree sum by one. A marked merge sends the other circle's $1$ to the marked $1$ and kills its $X$; a marked split creates $X$ on the new unmarked circle. Their nonzero terms also lower the unmarked degree sum by one. Thus every edge raises $i$ by one and preserves $\widetilde j$. These degrees are transported from the reduced state bases to $E_1$; no independent Floer quantum grading is asserted. For filtration index $s=n-|I|$ the cochain reindexing is $i=n_--s$. [F2, step 2.1, algebra]

4.1 Taking cohomology of the identified first-page complexes gives the based reduced Khovanov cohomology on the second page, with the shifts checked in step 3.1. By [F3] its graded isomorphism class is independent of the chosen link component for this fixed diagram. The actual Floer saddle and mirror identifications are the supplier inputs in [F2]; the finite assembly and normalization above introduce no further geometric assertion. This proves the stated identification and asserts no map between distinct diagram presentations. [F2, F3, step 2.1, step 3.1] ∎

