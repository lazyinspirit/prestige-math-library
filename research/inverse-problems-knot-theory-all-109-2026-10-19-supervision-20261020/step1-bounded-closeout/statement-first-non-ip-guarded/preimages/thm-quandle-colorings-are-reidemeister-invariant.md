---
id: thm-quandle-colorings-are-reidemeister-invariant
kind: theorem
title: "Quandle colorings are invariant under oriented Reidemeister moves"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ def-quandle-and-knot-coloring, def-oriented-reidemeister-moves, thm-oriented-reidemeister-equivalence-theorem, def-countable-choice ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. O. Manturov, Knot Theory, Chapter 5, §5.1, printed pp. 49–52"
      url: "https://varf.ru/rudn/manturov/book.pdf"
    - title: "J. Scott Carter, A Survey of Quandle Ideas, §2, arXiv:1002.4429v2, pp. 3–9"
      url: "https://arxiv.org/pdf/1002.4429"
    - title: "Józef H. Przytycki, 3-coloring and other elementary invariants of knots, §1, arXiv:math/0608172, pp. 2–3"
      url: "https://arxiv.org/pdf/math/0608172"
dependency_level: 1
---

## Statement

Let $Q$ be a quandle and color regular oriented link diagrams by the normal-to-overarc
rule in the Definition. Every oriented Reidemeister move and planar isotopy induces
a canonical bijection between the two coloring sets. Consequently, under
$\mathrm{AC}_\omega$, diagrams of ambient-isotopic oriented links have bijective
coloring sets; if $Q$ is finite, their coloring counts are equal. Conversely,
suppose a set with a binary operation uses this crossing rule and every oriented
local R1, R2, and R3 replacement gives a unique coloring extension in both
directions for every boundary coloring. Then the operation is idempotent, every
right translation is bijective, and the operation is right self-distributive.
This converse requires local extension bijections, not equality of total
coloring counts alone. No claim that a coloring count classifies knots is made.

## Statement references

[[def-quandle-and-knot-coloring]].

[[def-oriented-reidemeister-moves]].

[[thm-oriented-reidemeister-equivalence-theorem]].

[Przytycki, *3-coloring and other elementary invariants of knots*, §1](https://arxiv.org/pdf/math/0608172).

## Facts & Assumptions

**Given:** A quandle $Q$, regular oriented diagrams, and $\mathrm{AC}_\omega$ for the ambient-isotopy conclusion.

[F1] [[def-quandle-and-knot-coloring]]: a quandle is idempotent, each right translation is bijective, and the operation is right self-distributive.

[F2] [[def-quandle-and-knot-coloring]]: the normal to the oriented overarc determines the source and target underarcs, and the target color is the source color acted on by the overarc color.

[F3] [[thm-oriented-reidemeister-equivalence-theorem]]: assuming $\mathrm{AC}_\omega$, two regular oriented diagrams represent equivalent oriented links exactly when related by a finite sequence of planar isotopies and oriented Reidemeister moves.

[F4] [[def-oriented-reidemeister-moves]]: all local orientation variants of R1, R2, and R3 are included, with their over/under data.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every sequence of nonempty sets has a choice function.

## Proof

1.1 An R1 kink adds one underarc color $y$ to the unchanged boundary arc color $x$. Depending on the local orientation, the crossing equation is $y=x*x$ or $x=y*x$. In the first case idempotency gives the unique extension $y=x$; in the second case $x=x*x$ and right invertibility give the unique solution $y=x$. Removing the kink is the inverse bijection. [F1, F2, F4, given]

1.2 At an R2 move, fix the color $y$ on the strand passing over the other strand. The understrand's color changes by $R_y$ at one crossing and by $R_y^{-1}$ at the other; these maps are inverse bijections by [F1]. Thus every boundary coloring extends uniquely across the two-crossing side, and the inverse R2 move gives the inverse map. [F1, F2, F4]

1.3 For the braid-like R3 orientation, the local crossing map is $B(x,y)=(y,x*y)$ and its inverse is $B^{-1}(u,v)=(v\mathbin{\bar *}u,u)$. Starting from $(x,y,z)$, the two sides of R3 give respectively $(z,y*z,(x*y)*z)$ and $(z,y*z,(x*z)*(y*z))$; these are equal by right self-distributivity. For every $z$, $R_z(x*y)=(x*y)*z=(x*z)*(y*z)$, so $R_z$ preserves $*$. If $u=a\mathbin{\bar *}b$, then $u*b=a$; applying the bijection $R_z$ gives $R_z(u)*R_z(b)=R_z(a)$, and uniqueness of right division yields $R_z(u)=R_z(a)\mathbin{\bar *}R_z(b)$. Hence $R_z$ preserves $\bar *$ too, and its inverse preserves both operations. Thus for either operation $\star_1,\star_2\in\{*,\bar *\}$, $(x\star_1 y)\star_2 z=(x\star_2 z)\star_1(y\star_2 z)$. These four identities give the R3 relation for every choice of crossing direction, and the bijective crossing maps give the corresponding extension bijections. A planar isotopy simply transports each arc label. [F1, F2, F4, algebra]

1.4 For the converse, the R1 extension property gives $x*x=x$ for every $x$: on the kink side, the boundary color $x$ can extend only when this equality holds. [given, F2, F4]

1.5 In an R2 tangle with over-color $y$, the under-color map is $R_y$. Unique extension for every incoming color makes $R_y$ a function defined everywhere; unique extension in the reverse direction means each target color has exactly one preimage. Hence $R_y$ is bijective for every $y$. [given, F2, F4]

1.6 In the braid-like R3 tangle, arbitrary boundary colors $x,y,z$ yield the outputs $(x*y)*z$ and $(x*z)*(y*z)$. Unique extension to the same boundary coloring forces these outputs to agree for all triples, which is right self-distributivity. [given, F2, F4]

2.1 Thus the local axioms are necessary and sufficient for the stated local extension property. Under $\mathrm{AC}_\omega$, [F3] connects diagrams of the same oriented link by finitely many such moves; composing the local bijections gives a bijection of coloring sets. A finite quandle has finitely many assignments on a finite diagram, so the bijection preserves their counts. Countable choice is used only through [F3]; the move-by-move calculations in steps 1.1–2.3 are choice-free. [A1, F1, F3, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6] ∎

## Proof references

[[def-quandle-and-knot-coloring]].

[[def-oriented-reidemeister-moves]].

[[thm-oriented-reidemeister-equivalence-theorem]].

[[def-countable-choice]].
