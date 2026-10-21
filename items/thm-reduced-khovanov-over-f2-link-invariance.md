---
id: thm-reduced-khovanov-over-f2-link-invariance
kind: theorem
title: "Reduced Khovanov homology over F2 is an oriented link invariant"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
  - lem-reduced-khovanov-over-f2-basepoint-independence
  - thm-oriented-reidemeister-equivalence-theorem
  - def-countable-choice
  - lem-khovanov-reidemeister-chain-homotopies
  - lem-based-link-reduced-khovanov-reidemeister-equivalences
axiom_use: "Assumes ACω for finite Reidemeister-move generation. The reduced-cube algebra and component-independence argument are choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §5"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Shumakovitch, Torsion of the Khovanov homology, §§2.2 and 3"
      url: "https://arxiv.org/pdf/math/0405474v2"
    - title: "Turner, A hitchhiker’s guide to Khovanov homology, §1.2"
      url: "https://www.i2m.univ-amu.fr/perso/luisa.paoluzzi/Turner1.pdf"
---

## Statement

Assume ACω. For every nonempty oriented link $L\subset S^3$, the bigraded $\mathbb F_2$ vector spaces $\widetilde{Kh}^{i,j}(L;\mathbb F_2)$ obtained by reducing the normalized Khovanov complex at a point on any chosen component are independent, up to noncanonical bigraded isomorphism, of the diagram and the chosen component. No filtered structure from a Floer construction is part of this invariance statement.

## Statement references

[[def-reduced-khovanov-cohomology-of-a-based-link-over-f2|Based reduced Khovanov cohomology]]

[[lem-reduced-khovanov-over-f2-basepoint-independence|Component independence for a fixed diagram]]

[[lem-based-link-reduced-khovanov-reidemeister-equivalences|Local reduced equivalences for arbitrary based links]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §5](https://arxiv.org/pdf/math/0309170v1)

[Shumakovitch, *Torsion of the Khovanov homology*, §§2.2 and 3](https://arxiv.org/pdf/math/0405474v2)

[Turner, *A hitchhiker’s guide to Khovanov homology*, §1.2](https://www.i2m.univ-amu.fr/perso/luisa.paoluzzi/Turner1.pdf)

## Facts & Assumptions

**Given:** ACω, two finite regular diagrams of the same nonempty oriented link, and a basepoint on a component of each diagram.

[F1] Under ACω, two diagrams of the same oriented link are connected by a finite sequence of planar isotopies and oriented Reidemeister moves ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F2] For every oriented link Reidemeister move with an unchanged exterior mark, the actual normalized integral maps and inverse homotopies commute with the marked actions and descend to bigraded equivalences of the quotient complexes; reducing the same identities modulo two proves the corresponding based-link equivalences over $\mathbb F_2$ ([[lem-based-link-reduced-khovanov-reidemeister-equivalences]]).

[F3] For a fixed diagram, the reduced $\mathbb F_2$ cohomology is independent of which link component carries the basepoint ([[lem-reduced-khovanov-over-f2-basepoint-independence]]).

[F4] The based reduction is the quotient by the image of the basepoint action ([[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]]).

## Proof


1.1 By [F1], choose a finite sequence $D=D_0,D_1,\ldots,D_r=D'$ of planar isotopies and oriented Reidemeister moves. For a Reidemeister step choose a marked point on an unchanged exterior arc and carry it to the corresponding arc on the other diagram. Such an arc exists: the move models contain a continuing strand meeting the boundary of their disk, and a closed regular link diagram continues that strand outside the disk. For a planar isotopy choose any mark and carry it by the isotopy. There are finitely many steps and every diagram is nonempty, so these are finite point choices, adding no choice hypothesis beyond [F1]. These auxiliary marks need not all lie on a single tracked component. [F1, given, choose, construct]

2.1 At the start of a step, [F3] identifies the current reduced group with the reduction at its chosen auxiliary mark, even if that mark lies on another component. For a Reidemeister move, [F2] then gives a bigraded cochain homotopy equivalence between the reductions at the two unchanged exterior marks. Its integral maps and contractions commute with the marked action before quotienting, and their explicit equations remain true over $\mathbb F_2$. For a planar isotopy the relabeling of circles preserves that marked factor and every normalized degree. Thus each step supplies a bigraded cohomology isomorphism, followed if necessary by another fixed-diagram change of mark using [F3]. [F2, F3, F4, step 1.1, construct, algebra]

3.1 Compose these finitely many isomorphisms, using [F3] at the first and last diagram to reach the originally selected marks. This proves independence of the diagram and chosen component. For an empty move sequence only [F3] is needed. Each vector space has finite support in its bigrading, so finite choices of its isomorphisms assemble the asserted noncanonical bigraded isomorphism. The proof uses neither a canonical identification of different move sequences nor a relative movie theorem for multi-component cut tangles. ACω is used only in [F1]; the local tensor equations and fixed-diagram mark changes are finite and choice-free. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
