---
id: thm-rack-colorings-are-framed-invariants
kind: theorem
title: "Rack colorings are framed Reidemeister invariants"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-quandle-and-knot-coloring, def-rack-fundamental-quandle-and-adjoint-group, lem-rack-kink-map-is-bijective, def-oriented-reidemeister-moves, def-oriented-crossing-sign-writhe-and-blackboard-framing, def-framed-knot-self-linking-and-seifert-framing]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sam Nelson, Link invariants from finite racks, §§2.1–2.2, arXiv:0808.0029v3, pp. 2–5"
      url: "https://arxiv.org/pdf/0808.0029"
    - title: "V. O. Manturov, Knot Theory, Chapter 5, §5.1, printed pp. 49–52"
      url: "https://varf.ru/rudn/manturov/book.pdf"
    - title: "J. Scott Carter, A Survey of Quandle Ideas, §2, arXiv:1002.4429v2, pp. 3–8"
      url: "https://arxiv.org/pdf/1002.4429"
---

## Statement

Let $R$ be a rack and let $\pi(x)=x*x$ be its kink map. Rack-coloring sets
are in bijection across every oriented R2 or R3 move and planar isotopy.
Across a single oriented R1 curl, the label transported along the affected
strand changes by $\pi$ or $\pi^{-1}$ according to the curl orientation.
Consequently, an opposite-kink pair whose two signed framing changes cancel
induces a bijection on colorings. A single unframed R1 move has a unique
extension for every boundary color exactly when $\pi$ is the identity, which
is the quandle idempotency axiom. Thus finite rack coloring counts are
invariant under R2, R3, planar isotopy, and framing-preserving opposite-kink
compensation; the unframed R1 move is covered when the rack is a quandle.
The R1-compensation clause uses the designated KT-03 convention that the
framing-preserving opposite-kink move acts by the two inverse kink maps. The
available crossing-sign and framed-knot definitions give their conventions,
but do not themselves establish that compatibility; that clause remains
conditional pending reconciliation of this interface.

## Statement references

[[def-rack-fundamental-quandle-and-adjoint-group]].

[[lem-rack-kink-map-is-bijective]].

[[def-oriented-reidemeister-moves]].

[[def-oriented-crossing-sign-writhe-and-blackboard-framing]].

[[def-framed-knot-self-linking-and-seifert-framing]].

[Nelson, *Link invariants from finite racks*, §§2.1–2.2](https://arxiv.org/pdf/0808.0029).

## Facts & Assumptions

**Given:** A rack $R$, its kink map $\pi$, and the stated crossing-sign/frame convention for a compensated type-I move.

[F1] [[def-rack-fundamental-quandle-and-adjoint-group]]: every right translation is bijective, right self-distributivity holds, and the coloring relation uses the overarc action.

[F2] [[lem-rack-kink-map-is-bijective]]: the map $\pi(x)=x*x$ is bijective with inverse $\pi^{-1}(z)=R_z^{-1}(z)$.

[F3] [[def-oriented-reidemeister-moves]]: oriented R2 and R3 moves have all local orientation and height-order variants.

[A1] Under the proposed KT-03 frame interface, a framing-preserving opposite-kink compensation acts on the boundary label by $\pi$ and $\pi^{-1}$ in one order or the other. The actual crossing-sign definition fixes $\operatorname{sgn}(c)=\operatorname{sgn}\det_P(v_{\rm over},v_{\rm under})$ and the actual framed-knot definition treats a framing as a homotopy class of nonzero normal sections; neither body states the required R1 compatibility. The implication used here is therefore an explicit unresolved interface hypothesis ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]], [[def-framed-knot-self-linking-and-seifert-framing]]).

## Proof

1.1 At an R2 move, hold the overarc color $y$ fixed. The underarc label is changed by $R_y$ at one crossing and by $R_y^{-1}$ at the other, so the two boundary colorings determine one another uniquely. Reversing the move gives the inverse correspondence. [F1, F3]

1.2 For a braid-like R3 move, use the crossing map $B(x,y)=(y,x*y)$. Its inverse is $B^{-1}(u,v)=(v\mathbin{\bar *}u,u)$ by right invertibility. The two sides send $(x,y,z)$ respectively to $(z,y*z,(x*y)*z)$ and $(z,y*z,(x*z)*(y*z))$; the last coordinates agree by rack self-distributivity. For every $z$, $R_z(x*y)=(x*y)*z=(x*z)*(y*z)$, so $R_z$ preserves $*$. If $u=a\mathbin{\bar *}b$, then $u*b=a$; applying $R_z$ gives $R_z(u)*R_z(b)=R_z(a)$, and uniqueness of right division yields $R_z(u)=R_z(a)\mathbin{\bar *}R_z(b)$. Thus $R_z$ and its inverse preserve both operations. For either operation $\star_1,\star_2\in\{*,\bar *\}$, this gives $(x\star_1 y)\star_2 z=(x\star_2 z)\star_1(y\star_2 z)$, the corresponding mixed R3 equation. The bijective crossing maps then give the extension bijection for every orientation variant. A planar isotopy transports arc labels. [F1, F3, algebra]

1.3 A type-I curl transports the boundary label through the diagonal operation $x\mapsto x*x=\pi(x)$ in one orientation and through its inverse in the opposite orientation. The inverse exists by [F2]. [F1, F2, F3]

1.4 For a single unframed curl with boundary color $x$, extension requires $x=\pi(x)$; if $\pi$ is the identity, this condition holds uniquely for every $x$. Conversely, if every boundary color extends uniquely, every $x$ is fixed by $\pi$, so $x*x=x$ for all $x$ and the rack is a quandle. [F1, F2, F3]

2.1 Under the compensation in [A1], the two successive label changes are $\pi$ and $\pi^{-1}$ in one order or the other, whose composite is the identity. Hence every boundary coloring extends uniquely across the compensated pair, and the inverse pair gives the inverse map. [A1, F2, step 1.3]

3.1 Thus R2, R3, planar isotopy, and a compensation satisfying [A1] preserve the coloring sets by bijections. A finite target rack has finitely many assignments on a finite diagram, so its coloring count is preserved under these moves; a quandle also has the individual R1 bijection. The R2/R3 and local R1 arguments are complete; the proposed KT-03 compatibility in [A1] remains open. [A1, step 1.1, step 1.2, step 2.1, step 1.4] ∎

## Proof references

[[def-rack-fundamental-quandle-and-adjoint-group]].

[[lem-rack-kink-map-is-bijective]].

[[def-oriented-reidemeister-moves]].

## Unresolved supplier checks

The crossing-sign and framed-knot definitions are now present and inspected. The crossing-sign definition uses the determinant of the oriented over and under tangents and defines the blackboard section as the positive quarter-turn of the projected tangent. The framed-knot definition uses homotopy classes of nonzero normal sections and defines relative framing integers. Neither definition states that an R1 move changes the blackboard framing by its crossing sign or that a framing-preserving R1 compensation induces the two inverse rack kink maps. A current candidate supplier is thm-linking-number-is-invariant-and-writhe-is-not (batch 58, item level 7); using it would add a cross-batch dependency and raise this item's level to 8. The owner must reconcile that edge or accept a complete local proof of the missing interface. No supplier acceptance is asserted.
