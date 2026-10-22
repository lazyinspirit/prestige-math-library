---
id: lem-os-first-differential-is-reduced-khovanov
kind: lemma
title: "The first surgery differential is the reduced Khovanov TQFT differential"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - lem-os-link-surgery-filtered-complex-and-triangle
  - lem-os-unlink-resolution-covers-and-floer-tqft
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §6, Propositions 6.1–6.2"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5.3"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Fix a link projection and its surgery multi-diagram. Identify each first-page vertex group with the reduced state space of the corresponding crossingless resolution. For every cube edge, the induced first differential is the mod-two map assigned by the saddle: multiplication when two resolution circles merge and comultiplication when one resolution circle splits, with the marked-circle quotient at the basepoint. Under these identifications the direct sum of edge maps is the reduced Khovanov differential of the mirror diagram in the Ozsváth–Szabó smoothing convention.

## Statement references

[[lem-os-link-surgery-filtered-complex-and-triangle|Surgery cube and first differential]]

[[lem-os-unlink-resolution-covers-and-floer-tqft|Unlink Floer groups and saddle maps]]

[[def-reduced-khovanov-cohomology-of-a-based-link-over-f2|Based reduced Khovanov cube]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §6, Propositions 6.1–6.2](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5.3](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** A fixed link projection, its surgery cube, and the mod-two Heegaard Floer groups and edge maps for every crossingless resolution.

[F1] The surgery complex has the vertex groups and edge filtration described in [[lem-os-link-surgery-filtered-complex-and-triangle]].

[F2] The unlink vertex groups and all marked/unmarked saddle maps must be identified as the reduced Frobenius TQFT ([[lem-os-unlink-resolution-covers-and-floer-tqft]]).

[F3] The reduced Khovanov complex uses precisely the marked-circle quotient and merge/split maps in [[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]].

## Proof

1.1 On the associated graded cube the diagonal differential is the ordinary vertex differential. Therefore its homology is the direct sum of the resolution Floer groups. The next differential is induced by the components changing one coordinate: higher polygon components lower the increasing filtration by at least two and cannot contribute to this first differential. Each surviving component is the actual surgery triangle map of that edge. [F1, given, filtration calculation]

1.2 Use the SAME vertex state identification simultaneously for all incident edges. Under the exact Floer supplier [F2], an unmarked merge has table $1\otimes1\mapsto1$, $1\otimes X,X\otimes1\mapsto X$, $X\otimes X\mapsto0$; an unmarked split has $1\mapsto1\otimes X+X\otimes1$ and $X\mapsto X\otimes X$. Marked merge kills the input with the other circle labelled $X$ and sends its $1$ input to $1_{\rm marked}$. Marked split sends $1_{\rm marked}$ to $1_{\rm marked}\otimes X_{\rm new}$, with the tensor order determined by which child contains the point. These last two formulas are obtained by quotienting the marked factor, not by keeping an extra unreduced factor. Tensor the identity on every untouched circle. These are exactly the reduced Frobenius saddle maps of [F3]. [F2, F3, step 1.1, finite quotient calculation]

1.3 For an explicit grading binding, let $n_+(D),n_-(D)$ be the signed crossing counts. Once the surgery-to-mirror local smoothing correspondence identifies the surgery bit vector $I$ with the $0/1$ vector of $\overline D$, the normalized cochain degrees are
$$i=|I|-n_+(D),\qquad \widetilde j=\sum_{c\ne p}\deg_q(a_c)+|I|+n_-(D)-2n_+(D),$$
where $a_c\in\{1,X\}$, with degrees $1,-1$, and the marked surviving label has reduced degree zero. Every saddle table in step 1.2 lowers the sum of label degrees by one, including marked merge and split. Increasing $|I|$ by one therefore raises $i$ by one and preserves $\widetilde j$. The spectral-sequence filtration index $p=n-|I|$ satisfies $i=n_-(D)-p$; it is not an independent Floer cochain grading. [F3, step 1.2, grading calculation]

2.1 The finite direct sum of these simultaneously compatible vertex identifications is consequently an isomorphism with the normalized reduced Khovanov cube of the mirror, provided [F2] and the actual local surgery-to-mirror smoothing correspondence are supplied. No arbitrary separate edgewise changes of basis suffice: they must agree at their common vertices. The reduced algebra and grading checks above are complete; the original remains held because [F2] has not yet supplied the actual unlink counts/common basis, and the surgery supplier has not constructed and compared the local slope/smoothing charts. This proof supplies neither missing geometry by a convention nor a diagram-independence assertion. [F1–F3, steps 1.1–1.3]
