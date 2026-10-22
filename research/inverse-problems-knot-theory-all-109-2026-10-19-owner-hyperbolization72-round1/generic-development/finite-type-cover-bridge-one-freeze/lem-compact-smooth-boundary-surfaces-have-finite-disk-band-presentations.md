---
id: lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations
kind: lemma
title: "Compact smooth surfaces with boundary have finite disk-and-band presentations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-collar-neighborhood-theorem
  - thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms
  - prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles
  - thm-morse-functions-and-handle-decompositions-correspond
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the smooth collar, adapted Morse and finite handle-normalization suppliers. Only finitely many disks, bands and attaching charts remain."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, §§2–4, finite Morse handle presentations and removal of unnecessary extrema"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), printed p.58, the one-dimensional spine of a compact surface with nonempty boundary"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume countable choice. Every connected compact smooth surface $F$ with nonempty boundary has a finite smooth disk-and-band presentation: it is diffeomorphic, respecting its actual boundary parametrization, to finitely many smooth disks with finitely many rectangular bands attached along pairs of disjoint boundary intervals, with compatible corner rounding. Equivalently it has a finite handle decomposition with only zero- and one-handles, all zero-handles first. The assertion allows nonorientable surfaces and twisted bands. For a smoothly embedded surface these data may be transported to the actual surface, so its disk, band and attaching charts are supplied inside that surface, rather than merely as a homotopy type.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice and the connected compact smooth surface $F$ with nonempty boundary.

[F1] Smooth manifolds with boundary admit smooth collars under countable choice. ([[thm-collar-neighborhood-theorem]])

[F2] An ordinary compact collared triad admits adapted excellent Morse data, and those data give a finite handle presentation. Empty incoming or outgoing faces are permitted. ([[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]], [[thm-morse-functions-and-handle-decompositions-correspond]])

[F3] A compact connected cobordism with nonempty incoming face admits a relative handle presentation without zero-handles; for a disconnected incoming face, the initial connecting one-handles are retained and every extraneous zero-handle ball is still absorbed. All subsequent attaching maps are transported through the absorption diffeomorphisms. ([[prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles]])

## Proof

1.1 Regard $F$ as a two-dimensional collared triad with incoming face $\partial F$ and empty outgoing face, using [F1]. Its boundary is compact, so it has finitely many components: a finite cover by connected interval charts meets every component. The incoming face is nonempty and need not be connected. Apply [F2] and [F3] to obtain a finite relative presentation from $\partial F$ with no zero-handles. Since the dimension is two, every remaining handle has index one or two. The normalization in [F3] retains the incoming boundary identification. [given, F1, F2, F3, construct]

2.1 Reverse this handle presentation. A $k$-handle $D^k\times D^{2-k}$ becomes a dual $(2-k)$-handle, by interchanging its attaching and outgoing faces and its two product factors. This follows directly in the handle product coordinates and their signed collar charts. Thus the reversed presentation starts from the empty face and uses only zero- and one-handles, with the same finite attaching and rounding data and with the actual boundary identification at its outgoing end. Order it with zero-handles first: the original normalization used index-ordered one- and two-handles, and reversing that order has exactly this effect. [step 1.1, F2, F3, construct]

3.1 In dimension two a zero-handle is a smooth disk. A one-handle $D^1\times D^1$ attaches along its two end intervals $S^0\times D^1$ and is precisely a rectangular band. The reversed presentation therefore is the claimed finite disk-and-band model. Its presentation diffeomorphism carries these finitely many pieces and their product collar charts onto $F$, including its outgoing boundary parametrization. No orientation was assumed by the Morse, tree-absorption or product-handle arguments, so twisted bands and nonorientable surfaces are included. At least one disk occurs because the surface is nonempty and the starting face is empty. This proves the geometric presentation assertion, not merely a deformation retraction to a graph. [step 2.1, F2, construct] ∎
