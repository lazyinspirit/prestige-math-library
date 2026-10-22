---
id: thm-rack-colorings-are-framed-invariants
kind: theorem
title: Rack colorings are framed Reidemeister invariants
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-quandle-and-knot-coloring
  - def-rack-fundamental-quandle-and-adjoint-group
  - lem-rack-kink-map-is-bijective
  - def-oriented-reidemeister-moves
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-framed-knot-self-linking-and-seifert-framing
  - thm-blackboard-framing-self-linking-is-writhe
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sam Nelson, Link invariants from finite racks, §§2.1–2.2, arXiv:0808.0029v3, pp. 2–5
      url: https://arxiv.org/pdf/0808.0029
    - title: V. O. Manturov, Knot Theory, Chapter 5, §5.1, printed pp. 49–52
      url: https://varf.ru/rudn/manturov/book.pdf
    - title: J. Scott Carter, A Survey of Quandle Ideas, §2, arXiv:1002.4429v2, pp. 3–8
      url: https://arxiv.org/pdf/1002.4429
dependency_level: 7
---

## Statement

Assume $\mathrm{AC}_\omega$ for the smooth framing statements. Let $R$ be a rack and let $\pi(x)=x*x$ be its kink map. Rack-coloring sets
are in bijection across every oriented R2 or R3 move and planar isotopy.
Across a single oriented R1 curl, the label transported along the affected
strand changes by $\pi$ or $\pi^{-1}$ according to the curl orientation.
Consequently, an opposite-kink pair on the same component whose two signed framing changes cancel
induces a bijection on colorings. A single unframed R1 move has a unique
extension for every boundary color exactly when $\pi$ is the identity, which
is the quandle idempotency axiom. Thus finite rack coloring counts are
invariant under R2, R3, planar isotopy, and framing-preserving opposite-kink
compensation; the unframed R1 move is covered when the rack is a quandle.

## Statement references

[[def-rack-fundamental-quandle-and-adjoint-group]].

[[lem-rack-kink-map-is-bijective]].

[[def-oriented-reidemeister-moves]].

[[def-oriented-crossing-sign-writhe-and-blackboard-framing]].

[[def-framed-knot-self-linking-and-seifert-framing]].

[Nelson, *Link invariants from finite racks*, §§2.1–2.2](https://arxiv.org/pdf/0808.0029).

## Facts & Assumptions

**Given:** A rack $R$, its kink map $\pi$, the positive-normal crossing convention, and $\mathrm{AC}_\omega$ when smooth framings are used.

[F1] [[def-rack-fundamental-quandle-and-adjoint-group]]: every right translation is bijective, right self-distributivity holds, and the coloring relation uses the overarc action.

[F2] [[lem-rack-kink-map-is-bijective]]: the map $\pi(x)=x*x$ is bijective with inverse $\pi^{-1}(z)=R_z^{-1}(z)$.

[F3] [[def-oriented-reidemeister-moves]]: oriented R2 and R3 moves have all local orientation and height-order variants.

[F4] The crossing sign is $\operatorname{sgn}\det_P(v_{\rm over},v_{\rm under})$; blackboard self-linking equals self-writhe. Therefore an R1 creation with sign $\epsilon$ changes blackboard self-linking by $\epsilon$. [[def-oriented-crossing-sign-writhe-and-blackboard-framing]], [[thm-blackboard-framing-self-linking-is-writhe]]

[A1] $\mathrm{AC}_\omega$ is used only for the supplied smooth-framing/self-linking results. [[def-countable-choice]]

## Proof

1.1 At an R2 move, hold the overarc color $y$ fixed. The underarc label is changed by $R_y$ at one crossing and by $R_y^{-1}$ at the other, so the two boundary colorings determine one another uniquely. Reversing the move gives the inverse correspondence. [F1, F3]

1.2 For a braid-like R3 move, use the crossing map $B(x,y)=(y,x*y)$. Its inverse is $B^{-1}(u,v)=(v\mathbin{\bar *}u,u)$ by right invertibility. The two sides send $(x,y,z)$ respectively to $(z,y*z,(x*y)*z)$ and $(z,y*z,(x*z)*(y*z))$; the last coordinates agree by rack self-distributivity. For every $z$, $R_z(x*y)=(x*y)*z=(x*z)*(y*z)$, so $R_z$ preserves $*$. If $u=a\mathbin{\bar *}b$, then $u*b=a$; applying $R_z$ gives $R_z(u)*R_z(b)=R_z(a)$, and uniqueness of right division yields $R_z(u)=R_z(a)\mathbin{\bar *}R_z(b)$. Thus $R_z$ and its inverse preserve both operations. For either operation $\star_1,\star_2\in\{*,\bar *\}$, this gives $(x\star_1 y)\star_2 z=(x\star_2 z)\star_1(y\star_2 z)$, the corresponding mixed R3 equation. The bijective crossing maps then give the extension bijection for every orientation variant. A planar isotopy transports arc labels. [F1, F3, algebra]

1.3 Write the under-tangent as $a v_{\rm over}+b n_o$. Its determinant sign is the sign of $b$, so at a positive crossing the oriented underpass goes from source to target. In a positive curl with incoming label $x$ and outgoing label $y$, either the overarc is the incoming arc and $y=x*x$, or it is the outgoing arc and $y=x*y$. In the latter case self-distributivity gives $R_yR_x=R_{x*y}R_y=R_yR_y$, hence $R_x=R_y$; therefore $y=x*y=x*x=\pi(x)$. Conversely $y=\pi(x)$ solves the equation since $R_{\pi(x)}=R_x$ by the kink-map proof. Thus both positive curl shapes have unique transport $y=\pi(x)$. In a negative curl the same equations are read backwards and give $y=\pi^{-1}(x)$. This checks both choices of which boundary arc is the overarc, independently of a picture. [F1, F2, F4, algebra]

1.4 For a single unframed curl with boundary color $x$, extension requires $x=\pi(x)$; if $\pi$ is the identity, this condition holds uniquely for every $x$. Conversely, if every boundary color extends uniquely, every $x$ is fixed by $\pi$, so $x*x=x$ for all $x$ and the rack is a quandle. [F1, F2, F3]

2.1 A compensated pair creates two curls on the same component, or removes their inverse configuration. If its blackboard framing is preserved, its self-linking is preserved, so [F4] forces the two created crossing signs to sum to zero. The same holds directly when opposite signed framing changes are part of the specified compensation. By step 1.3 the label transports are consequently $\pi$ and $\pi^{-1}$, in one order or the other; their composite is the identity. Every boundary coloring thus extends uniquely across the pair, with inverse correspondence given by removing it. [A1, F2, F4, step 1.3]

3.1 Steps 1.1–1.2 give the R2, R3 and planar-isotopy bijections; step 2.1 gives the compensation bijection. A finite rack admits only finitely many assignments on a finite diagram, so the cardinalities are preserved. Step 1.4 proves exactly when the individual unframed R1 bijection is available. The algebraic assertions use no choice; only the smooth framing interpretation uses [A1]. [A1, step 1.1, step 1.2, step 1.4, step 2.1] ∎


## Proof references

[[def-rack-fundamental-quandle-and-adjoint-group]].

[[lem-rack-kink-map-is-bijective]].

[[def-oriented-reidemeister-moves]].
