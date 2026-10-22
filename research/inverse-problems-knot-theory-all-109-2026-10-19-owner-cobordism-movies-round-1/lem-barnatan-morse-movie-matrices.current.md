---
id: lem-barnatan-morse-movie-matrices
kind: lemma
title: "Explicit Bar-Natan matrices for four Morse movie relations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-carter-saito-euclidean-local-movie-moves
  - def-barnatan-open-tangle-cobordism-complexes
  - lem-barnatan-formal-kink-retractions
  - lem-barnatan-formal-inverse-boundary-crossings
  - lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Figure13 (printed p.1476), explicit MM11–MM14 calculations pp.1480–1481, and four-tube equation (4) p.1482. These pages and figures were inspected."
---

## Statement

Assume countable choice. Assign to births, deaths and saddles their elementary formal surfaces, and to the two Reidemeister kink and inverse-crossing moves the explicit formal retractions specified below. Then the two sides of each Euclidean Morse movie relation MM11, MM12, MM13 and MM14 induce chain maps equal up to an overall sign. This includes both directions, reflected models, all compatible orientations, and insertion into a fixed planar surrounding complex. The assertion does not include MM15, RIII, or spherical sweep-around.

## Statement references

[[def-carter-saito-euclidean-local-movie-moves|The local geometric models]]

[[lem-barnatan-formal-kink-retractions|The specified kink maps]]

[[lem-barnatan-formal-inverse-boundary-crossings|The specified inverse-crossing maps]]

[Bar-Natan, pp.1480–1482](https://arxiv.org/pdf/math/0410495v2)

## Facts & Assumptions

**Given:** The standard local MM11–MM14 clips, their fixed outside frames, and the stated map assignments. Products of surfaces are read rightmost first.

[A1] [[def-countable-choice]] is inherited through the disk cancellation suppliers; no other choice principle is used.

[F1] [[def-barnatan-open-tangle-cobordism-complexes]] supplies the S/T/four-tube category and its signed cube totalization.

[F2] [[lem-barnatan-formal-kink-retractions]] gives $F_+=v-\Delta$, $G_+=e$, $F_-=u$, $G_-=w-m$, with $u,e$ circle birth/death, $v,w$ punctured-torus birth/death and $m,\Delta$ merge/split. In particular a birth adjacent to a merge, or a split adjacent to a death, cancels to a curtain disk in its specified local ball.

[F3] [[lem-barnatan-formal-inverse-boundary-crossings]] gives, in the two degree-zero summands $(I,Z)$, $F=(1,ut)^T$, $G=(1,-se)$ for one cube order and $\widetilde F=(1,-ut)^T$, $\widetilde G=(1,se)$ for the reversed order. It proves the actual cube sign correction, rather than treating the two orders as identical.

[F4] [[lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity]] proves the signed planar insertion of maps and homotopies.

[F5] [[def-carter-saito-euclidean-local-movie-moves]] identifies MM11 as a cancelling adjacent-index Morse pair, MM12/13 as a rank-one projection at an extremum/saddle, and MM14 as a strand passing an extremum.

## Proof

1.1 **The integral handle-transfer identity.** Let $D$ be two disjoint standard sheets in a local ball, with their outside collars fixed. Denote by $D_a,D_b$ the surfaces obtained by attaching one unknotted handle to the first or second sheet, and by $T$ the surface joining the sheets with one unknotted tube. Put two nearby patches $1,2$ on the first sheet and two patches $3,4$ on the second. Choose the four tube paths in the same small ball. Then $C_{12}=D_a$, $C_{34}=D_b$, while $C_{13}$ and $C_{24}$ are both $T$: moving the feet within their sheet patches identifies the latter two tubes without passing any other sheet. Four-tube therefore gives $D_a+D_b=2T$. Consequently $(D_a-T)+(D_b-T)=0$. The same construction works when a sheet is a birth disk, a death disk, or a curtain. There is no division by two. [F1, construct, algebra]

1.2 **MM11.** In the birth–saddle cancellation the birth disk meets the band along exactly one attaching interval, while the other end of the band lies on the old arc curtain. Their union is a disk with the same boundary as that curtain; move its birth cap down the band to cancel the pair. This isotopy lies in the product neighbourhood of that disk and band, disjoint from every outside sheet and boundary collar. The assigned composite is therefore $mu=1$. In the saddle–death cancellation the reversed local construction gives $e\Delta=1$. These are precisely the minimum–saddle and saddle–maximum forms of the MM11 height model, and their reverse clips. Thus both sides have the same single nonzero matrix entry, the curtain identity. [given, A1, F2, F5, construct]

2.1 **MM12 downwards.** Start with the empty local diagram and end with the one-crossing circle having two-circle resolution in cochain degree zero. Name those two output circles $a,b$. The two clips first create a circle and then create its kink on opposite sides. Substitute $F_+=v-\Delta$ from [F2]. In its $v$ term the old birth disk remains on one output circle and the punctured-torus birth occupies the other; this is $D_a$ or $D_b$, with $D$ the two disjoint birth disks. In its $-\Delta$ term, splitting the original birth disk gives the connected annulus with these two outgoing circles. That annulus is exactly $T$, obtained by tubing the two birth disks along the band of the split. The two maps have no component outside degree zero, since the source is concentrated there. Their entries are therefore $D_a-T$ and $D_b-T$. Step 1.1 says their sum is zero, so they agree with overall sign $-1$. [F1, F2, F5, step 1.1, construct, algebra]

2.2 **MM13 downwards.** Now the source is the two-arc pairing, and the final one-crossing diagram has the same two-arc pairing in degree zero. The saddle interchanges the two local arc pairings; creating the kink immediately before or after it gives the two sides of MM13. Again substitute $v-\Delta$. For the $v$ term, slide the punctured-torus birth through the adjacent saddle band onto the incident arc curtain, as in the handle-slide construction of [F2]. On one side the incident arc is $a$, on the other it is $b$. Thus these entries are $D_a,D_b$ for $D$ the two curtain disks. For the $-\Delta$ term the split band followed by the Morse band joins the two curtains with one tube. Their attaching intervals are the two central facing intervals of the pairing, so both routes give the same standard tube $T$ in the intervening ball, with no crossing of bands. Hence the two entries are again $D_a-T$ and $D_b-T$, and there are no entries in other degrees. Step 1.1 proves their sum zero. This describes the band embeddings as well as their Euler characteristics. [F2, F5, step 1.1, construct, algebra]

2.3 **The upward MM12/13 clips.** For the same positive-kink frames, the inverse R1 map is $G_+=e$, not the transpose of $F_+$. In upward MM12 its only degree-zero entry is the death of each of the two circles: death of the kink circle followed by death of the old circle gives the two disjoint cap disks in either order. In upward MM13 the saddle and the death of the resulting small circle cancel in their local disk neighbourhood, giving the identity on each of the two curtain arcs. Thus the two upward maps agree. This check is separate from the downward calculation and uses the actual selected inverse map. [F2, F5, step 1.2, construct]

2.4 **MM14.** Its top frame is an arc, its middle frames create a small circle on opposite sides of the arc, and its bottom frame has that circle across the arc, with an RII pair at its two intersections. Cut the circle outside the local RII rectangle, so the RII map is exactly [F3] in a fixed planar closure. Its degree-zero target has two summands: the circle on the first side of the arc and the circle on the other side. On the first clip, substituting $(1,ut)^T$ after circle birth gives in the first summand the original circle birth. In the second summand, the saddle $t$ merges that new circle into the old arc, and $u$ creates its replacement on the other side. The first birth and its adjacent merge cancel to the arc curtain; the remaining entry is exactly circle birth on the other side. On the second clip the two roles are exchanged. Thus both resulting columns consist of the same two standard circle births. If the physical crossing order is reversed, [F3] puts a minus sign on the second summand in both columns, so they still agree. In the upward clips use $G=(1,-se)$ or its reverse-order counterpart: each nonzero row entry caps the indicated circle, and a split adjacent to that cap cancels to a curtain. Both rows are the same, with the same cube sign. All other cochain components vanish because the crossing-free end is concentrated in degree zero. [F1, F2, F3, F5, step 1.2, construct, algebra]

3.1 **Variants and insertion.** Reflections move all the specified bands and disk patches together; the identities of steps 1.1 and 1.2 hold with their reflected embeddings. Simultaneous planar reflection and reversal of surface time exchanges the two kink complexes and transposes their maps: $v-\Delta$ becomes $w-m$, and $e$ becomes $u$. Thus it gives exactly the other chosen kink system, not an arbitrary inverse. The analogous operation exchanges the two RII orders; the diagonal tensor sign in [F3] supplies their actual cube identification. Together with the separately checked upward clips, these operations give the reflected and reversed versions. Surface orientations do not alter a formal surface coefficient; retaining compatible orientations therefore adds no new equation. Inserting into an outside complex preserves the equations by [F4]. The Morse degrees are birth/death $+1$ and saddle $-1$; both clips of each relation have the same such total, and the R maps have internal degree zero. Consequently the surrounding signed totalizations introduce the same signs on both sides. These facts prove all four stated movie relations, with a possible overall minus sign in MM12 and MM13. No MM15 or sweep-around identity was used or proved. [A1, F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 2.4] ∎
