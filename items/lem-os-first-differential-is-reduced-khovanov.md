---
id: lem-os-first-differential-is-reduced-khovanov
kind: lemma
title: "The first surgery differential is the reduced Khovanov TQFT differential"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-countable-choice
  - lem-os-link-surgery-filtered-complex-and-triangle
  - lem-os-unlink-resolution-covers-and-floer-tqft
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
axiom_use: "Assumes the ACω Heegaard Floer analytic package retained by the surgery and unlink-map suppliers; the finite state tables, sums and grading conversion introduce no further choice."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §6, Propositions 6.1–6.2"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5.3"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Assume the $\mathrm{AC}_\omega$ Heegaard Floer analytic package. Fix a finite regular diagram $D$ of a nonempty oriented link $L\subset S^3$, choose a basepoint $p\in D$ away from the crossings, and choose an admissible pointed Heegaard multi-diagram subordinate to the branched-cover surgeries, with the compatible perturbation data and top-generator cycles of the link-surgery construction. Identify each first-page vertex group with the reduced state space of the corresponding crossingless resolution, based at the circle containing $p$. For every cube edge, the induced first differential is the mod-two map assigned by the saddle: multiplication when two resolution circles merge and comultiplication when one resolution circle splits, with the marked-circle quotient at $p$. Under these identifications the direct sum of edge maps is the reduced Khovanov differential of the mirror diagram $\overline D$, based at the corresponding point, in the Ozsváth–Szabó smoothing convention.

## Statement references

[[lem-os-link-surgery-filtered-complex-and-triangle|Surgery cube and first differential]]

[[lem-os-unlink-resolution-covers-and-floer-tqft|Unlink Floer groups and saddle maps]]

[[def-reduced-khovanov-cohomology-of-a-based-link-over-f2|Based reduced Khovanov cube]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §6, Propositions 6.1–6.2](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5.3](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** The $\mathrm{AC}_\omega$ Heegaard Floer analytic package and a fixed finite regular diagram of a nonempty oriented link $L\subset S^3$, a basepoint on the diagram away from the crossings, its surgery cube, and the mod-two Heegaard Floer groups and edge maps for every crossingless resolution.

[F1] The surgery complex has the vertex groups and edge filtration described in [[lem-os-link-surgery-filtered-complex-and-triangle]].

[F2] The unlink vertex groups and all marked/unmarked saddle maps are identified, in simultaneous state bases, as the reduced Frobenius TQFT ([[lem-os-unlink-resolution-covers-and-floer-tqft]]).

[F3] The reduced Khovanov complex uses precisely the marked-circle quotient and merge/split maps in [[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]].

[F4] **External input — local surgery/mirror smoothing identification.** Ozsváth–Szabó, arXiv:math/0309170v1, Section2 Proposition2.1 and following paragraph, pp.6–7, together with Figure1 p.2 and Theorem6.3 pp.34–35, identifies the three branched fillings with crossing/0/1 resolutions and the immediate surgery edge with the saddle. In its displayed chart the over-strand is northwest–southeast, the 0-resolution joins the left pair and the right pair, and the 1-resolution joins the top pair and bottom pair. After switching over/under to form the mirror, this is exactly A then B in the library source chart. Thus the surgery bits agree with the mirror Khovanov 0/1 bits. Only the fixed-diagram mod-two assertion is imported.

## Proof


1.1 On the associated graded cube the diagonal differential is the ordinary vertex differential. Therefore its homology is the direct sum of the resolution Floer groups. The next differential is induced by the components changing one coordinate: higher polygon components lower the increasing filtration by at least two and cannot contribute to this first differential. Each surviving component is the actual surgery triangle map of that edge. [F1, given, algebra]

2.1 Use the SAME vertex state identification simultaneously for all incident edges. By the exact Floer supplier [F2], an unmarked merge has table $1\otimes1\mapsto1$, $1\otimes X,X\otimes1\mapsto X$, $X\otimes X\mapsto0$; an unmarked split has $1\mapsto1\otimes X+X\otimes1$ and $X\mapsto X\otimes X$. Marked merge kills the input with the other circle labelled $X$ and sends its $1$ input to $1_{\rm marked}$. Marked split sends $1_{\rm marked}$ to $1_{\rm marked}\otimes X_{\rm new}$, with the tensor order determined by which child contains the point. These last two formulas are obtained by quotienting the marked factor, not by keeping an extra unreduced factor. Tensor the identity on every untouched circle. These are exactly the reduced Frobenius saddle maps of [F3]. [F2, F3, step 1.1, algebra]

3.1 For an explicit grading binding, let $n_+(D),n_-(D)$ be the signed crossing counts. By [F4] the surgery bit vector $I$ is the $0/1$ vector of $\overline D$, so the normalized cochain degrees are $$i=|I|-n_+(D),\qquad \widetilde j=\sum_{c\ne p}\deg_q(a_c)+|I|+n_-(D)-2n_+(D),$$ where $a_c\in\{1,X\}$, with degrees $1,-1$, and the marked surviving label has reduced degree zero. Every saddle table in step 2.1 lowers the sum of label degrees by one, including marked merge and split. Increasing $|I|$ by one therefore raises $i$ by one and preserves $\widetilde j$. The spectral-sequence filtration index $p=n-|I|$ satisfies $i=n_-(D)-p$; it is not an independent Floer cochain grading. [F3, F4, step 2.1, algebra]

4.1 The finite direct sum of the simultaneously compatible vertex identifications in [F2] is consequently an isomorphism with the normalized reduced Khovanov cube of the mirror. The actual surgery-to-mirror chart correspondence is [F4]; the grading shifts follow independently from the library cochain definition in step 3.1, rather than from an unconverted homological index in the source. No arbitrary separate edgewise changes of basis are used. This proves the direct-sum first-differential assertion for the fixed diagram, without a diagram-independence claim. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
