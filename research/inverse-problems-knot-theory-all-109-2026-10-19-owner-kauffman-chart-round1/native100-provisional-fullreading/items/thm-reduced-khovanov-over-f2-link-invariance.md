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
axiom_use: "Assumes ACω for finite Reidemeister-move generation. The reduced-cube algebra and component-independence argument are choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
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

[[lem-khovanov-reidemeister-chain-homotopies|Local chain-homotopy equivalences under link Reidemeister moves]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §5](https://arxiv.org/pdf/math/0309170v1)

[Shumakovitch, *Torsion of the Khovanov homology*, §§2.2 and 3](https://arxiv.org/pdf/math/0405474v2)

[Turner, *A hitchhiker’s guide to Khovanov homology*, §1.2](https://www.i2m.univ-amu.fr/perso/luisa.paoluzzi/Turner1.pdf)

## Facts & Assumptions

**Given:** ACω, two finite regular diagrams of the same nonempty oriented link, and a basepoint on a component of each diagram.

[F1] Under ACω, two diagrams of the same oriented link are connected by a finite sequence of planar isotopies and oriented Reidemeister moves ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F2] The integral cube has local chain-homotopy equivalences for link Reidemeister moves; the claim that those equivalences descend to all based-link reductions is recorded in [[lem-khovanov-reidemeister-chain-homotopies]].

[F3] For a fixed diagram, the reduced $\mathbb F_2$ cohomology is independent of which link component carries the basepoint ([[lem-reduced-khovanov-over-f2-basepoint-independence]]).

[F4] The based reduction is the quotient by the image of the basepoint action ([[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]]).

## Proof

1.1 By [F1], choose a finite sequence of diagram moves from the first diagram to the second. The local cube maps in [F2] are asserted to be chain homotopy equivalences, and the reduced quotient will be preserved when those maps and homotopies commute with the basepoint action. [F1, F2, F4, given, choose]

1.2 For each move whose disk avoids the basepoint, the statewise local cancellation map has to commute with multiplication by $X$ on the based circle; then it descends to the quotient in [F4] and induces a bigraded cohomology isomorphism. The current supplier's reduced statement is knot-specialized and its proof is not supplied, so this link-level passage is unresolved. [F2, F4, step 1.1]

2.1 After the move sequence, [F3] identifies the reductions for any two choices of marked component on the terminal diagram. This would complete the claimed link invariant once step 1.2 is proved, but the local reduced move equivalences and based-link movie bookkeeping remain unavailable; the full-strength statement is therefore escalated. [F3, step 1.1, step 1.2]
