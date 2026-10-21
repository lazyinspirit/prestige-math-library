---
id: lem-positive-three-crossing-braid-is-canonical-complex-trefoil
kind: lemma
title: "The positive three-crossing two-braid is the canonical complex trefoil"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-elementary-geometric-half-twist
  - def-planar-diagram-gauss-and-dowker-codes
  - lem-diagonal-five-grid-represents-reverse-mirror-trefoil
  - thm-valid-code-reconstructs-the-declared-link-diagram
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from smooth same-code uniqueness. All braid crossings and their signs are checked from the explicit canonical half-twist motion; no homology or invariant value is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Planar grid orientation convention; the specific braid/complex-torus convention bridge is proved locally"
---

## Statement

Assume Countable Choice. Use the canonical geometric Artin half twist in the oriented chart $(x,y,t)$, with the left point moving below the midpoint and the right point above it. Its positive two-strand three-letter closure, with both braid strands oriented by increasing $t$, is ambient isotopic as an oriented knot to the canonical complex torus $T(2,3)$. Consequently the diagonal five-grid with $O_r=(r+\frac12,r+\frac12)$ and $X_r=((r+2)\bmod5+\frac12,r+\frac12)$, vertical over horizontal and the usual grid orientation, represents the reverse mirror of this positive Artin closure as well.

## Statement references

[[def-elementary-geometric-half-twist]]

[[lem-diagonal-five-grid-represents-reverse-mirror-trefoil]]

## Facts & Assumptions

**Given:** The specified canonical half twist, its threefold two-strand closure, and the standard orientation conventions.

[A1] [[def-countable-choice]] is assumed for [F3].

[F1] [[def-elementary-geometric-half-twist]] gives the two antipodal diamond motions and the endpoint transposition; in the projection viewed from $+y$, the over-strand travels from the right to the left.

[F2] [[lem-diagonal-five-grid-represents-reverse-mirror-trefoil]] proves the geometric five-grid identification with the canonical complex $T(2,-3)$, with explicit signed word $(+A,-B,+C,-A,+B,-C)$ and crossing signs $(-1,-1,-1)$. Its last step gives an ambient isotopy between the mirror trefoil and its orientation reverse.

[F3] [[thm-valid-code-reconstructs-the-declared-link-diagram]] supplies smooth same-code planar uniqueness. The compact-source extension in [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]] turns the lifted embedding isotopies into ambient isotopies.

[F4] [[def-planar-diagram-gauss-and-dowker-codes]] reconstructs the full oriented crossing rotation from the signed visit word and the separate algebraic crossing-sign vector.

## Proof

1.1 In the positive projection coordinates $(t,x)$, the canonical half twist has over- and under-tangents $(1,-2h)$ and $(1,2h)$ at its crossing, of determinant $4h>0$, for its positive scale $h$. The ambient coordinate ordering $(t,x,y)$ is a cyclic permutation of $(x,y,t)$ and retains its orientation, so these are exactly the declared positive crossing signs. Stack three copies in disjoint time rectangles and close the two endpoints on their respective exterior sides without additional crossings. Label the crossing rectangles $A,B,C$ in increasing time order. Starting at the right top endpoint, the first traversal is over at $A$, under at $B$, and over at $C$, because every half twist switches the two positions. It ends at the left bottom endpoint. The crossing-free left closure returns to the left top endpoint; the remaining traversal is under at $A$, over at $B$, and under at $C$, after which the crossing-free right closure returns to the start. Thus the cyclic signed word is $(+A,-B,+C,-A,+B,-C)$ with crossing signs $(+1,+1,+1)$. The endpoint permutation is a transposition, so this is one oriented component. [F1, F4, given, construct, algebra]

2.1 Reflect the explicit five-grid diagram of [F2] in its projection plane. Reflection changes every over/under visit and every crossing sign, so its word is $(-A,+B,-C,+A,-B,+C)$ with signs $(+1,+1,+1)$. Changing its starting visit to the fourth occurrence cyclically shifts this to $(+A,-B,+C,-A,+B,-C)$, exactly the word in step 1.1. By [F4] the pairings, oriented rotations and over/under data therefore agree. Match outer faces by viewing the diagrams on their compactified projection sphere and rotating a chosen complementary point to infinity if necessary; these sphere rotations extend to ambient rotations of $S^3$ fixing the normal collar coordinate. Apply [F3] for the resulting same plane code. Lift the planar isotopy on a compact neighborhood and extend it by the compact-source theorem. Any remaining height functions are linearly interpolated: at every common projected double point the over-minus-under height remains positive, so this is an embedding isotopy and the same extension applies. The reflected grid is the mirror of $T(2,-3)$ by [F2]. Its projection-plane reflection agrees with the canonical complex mirror up to an explicit ambient rotation: in the stereographic chart of [F2], plane reflection negates $\operatorname{Re}z_2$ and fixes $\operatorname{Im}z_2$, while canonical reflection negates $\operatorname{Im}z_2$ and fixes $\operatorname{Re}z_2$; their composite is the half-turn $z_2\mapsto-z_2$, joined to the identity by $z_2\mapsto e^{i\pi t}z_2$. Thus this mirror is canonical $T(2,3)$. Thus the positive braid closure is the claimed canonical complex torus knot. The original grid is its mirror and its reverse mirror by the explicit reversal isotopy in [F2]. This is a geometric convention bridge with no Floer premise. [A1, F2, F3, F4, step 1.1, construct, algebra] ∎
