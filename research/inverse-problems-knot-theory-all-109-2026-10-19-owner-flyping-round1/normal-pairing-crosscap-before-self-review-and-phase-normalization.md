---
id: lem-small-crosscap-addition-preserves-corrected-normal-signature
kind: lemma
title: "A small crosscap preserves the corrected normal signature"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-normal-transfer-linking-defines-a-symmetric-surface-pairing
  - def-one-variable-alexander-module-of-an-oriented-link
  - lem-seifert-pairing-well-defined
  - thm-mayer-vietoris-sequence-in-singular-homology
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the normal-transfer pairing and positive-meridian linking interfaces; the explicit band, boundary-sum and matrix calculations are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), 53–69, Proposition 10 and Figure 7, printed p.65"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume full AC. In oriented $\mathbb R^3\subset S^3$, fix $R>2r>0$ and $\epsilon\in\{1,-1\}$. Let $M_\epsilon$ be the embedded Möbius band parametrized by
$$m(\theta,t)=((R+t\cos(\theta/2))\cos\theta,(R+t\cos(\theta/2))\sin\theta,-\epsilon t\sin(\theta/2)),\qquad |t|\le r,$$
with $(0,t)$ identified with $(2\pi,-t)$. Its core is oriented by increasing $\theta$. Its boundary is an unknot, its integral normal-transfer pairing is $[\epsilon]$ on the core generator, and its boundary normal framing has self-linking $2\epsilon$.

Let $F$ be any connected compact smooth embedded surface with nonempty boundary and a supplied finite smooth disk-and-band presentation. Form $F'$ as the separated boundary connected sum of $F$ with a small copy of $M_\epsilon$: the two surfaces lie in disjoint ball interiors, joined along chosen boundary arcs by an untwisted product band whose interior misses them, and whose normal collar is the product of the chosen boundary normal collars. Smooth the seams. Then the boundary link of $F'$ is ambient isotopic to that of $F$, its normal pairing is integrally congruent to $B_F\oplus[\epsilon]$, and its boundary normal Euler quantity satisfies $e(F')=e(F)-2\epsilon$, where $e(S)=-\sum_i\operatorname{lk}(K_i,K_i')$ for componentwise normal push-offs determined by its surface collar. Consequently
$$\operatorname{sign}(B_{F'})+\tfrac12e(F')=\operatorname{sign}(B_F)+\tfrac12e(F).$$
Neither surface is required to be orientable, and the boundary link may have any positive number of components.

## Statement references

[[def-axiom-of-choice]]

[[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]]

## Facts & Assumptions

**Given:** Full AC, the displayed band parameters and sign, and, for the boundary-sum assertion, the supplied separated product attachment to $F$.

[F1] Normal-transfer linking defines a symmetric integral homology pairing with the stated two-sheeted normal convention, and finite disk-and-band surfaces have free finite-rank first homology. ([[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]])

[F2] Linking evaluates the coefficient of a positive meridian in complement homology; a positive local meridian has value one. Linking is symmetric and bilinear on disjoint oriented cycle components. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[lem-seifert-pairing-well-defined]])

[F3] Mayer–Vietoris gives the exact homology sequence for a two-set open cover. ([[thm-mayer-vietoris-sequence-in-singular-homology]])

[F4] A Reidemeister move and a planar isotopy of a regular diagram are realized by ambient isotopies; the local move has support in the ball over its move disk when the outside lifts agree. ([[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]])

## Proof

1.1 The displayed map is well-defined and smooth across the identification because both normal coefficients change sign when $\theta$ increases by $2\pi$. Its projection to the round core circle has fibers the indicated straight normal intervals; $R>2r$ makes these intervals disjoint for different base points. Its derivative has the nonzero angular core component and the independent unit interval direction, so it is an embedding of the Möbius band. Along the core its interval tangent makes one half-turn, and the normal line to the band is its perpendicular line in the core's normal plane, also making that half-turn. Thus the normal transfer of the core has the same meridional winding as the boundary $K=\partial M_\epsilon$. On the coordinate normal disk with coordinates radial-outward and vertical, its winding is $-\epsilon$, as the boundary is traversed for $0\le\theta\le4\pi$. This disk orientation is opposite the positive meridian orientation: at $\theta=0$ the ordered triple of increasing angular tangent, radial-outward direction and vertical direction has determinant $-1$ in the ambient orientation. Hence its positive meridional winding is $\epsilon$. The zero-framed longitude has linking zero with the round core, so [F2] gives $B_{M_\epsilon}(c,c)=\epsilon$. Since the band retracts to its core, this proves its pairing matrix $[\epsilon]$. [given, F1, F2, construct]

1.2 Parametrize $K$ by the same formula with $t=r$ and $0\le\theta\le4\pi$. Its projection to the horizontal plane is regular and has just one double point: equal projected points must have angular parameters differing by $2\pi$, and their radii are equal precisely when $\cos(\theta/2)=0$, giving the pair $\theta=\pi,3\pi$. At that pair the radial derivatives are opposite nonzero numbers and the angular derivatives are nonzero, so the crossing is transverse; the heights are $-\epsilon r$ and $+\epsilon r$. Its two lobe interiors contain no other projected strand. A planar isotopy puts either lobe into a Reidemeister-I move disk, and [F4] removes the unique crossing. The resulting simple closed plane diagram is an unknot, by contracting its planar disk to a round disk in its ball neighborhood. Thus $K$ is an unknot. [given, F4, construct]

2.1 Let $T$ be the boundary of the radius-$r$ normal tube of the round core. The boundary $K$ lies on $T$ and has slope $2\lambda+\epsilon\mu$, where $\lambda$ is the zero-framed core longitude and $\mu$ the positive meridian fixed in step 1.1. Along $K$, the interval tangent of $M_\epsilon$ is the radial normal to $T$; its other tangent is tangent to $K$. Consequently its surface normal is tangent to $T$ and transverse to $K$. A short normal push of $K$ is homotopic in the complement of $K$ to its parallel push on $T$, and then radially outward to a parallel curve on a slightly larger tube. On that larger torus its class is still $2\lambda_o+\epsilon\mu_o$. The curve $\lambda_o$ chosen at the outermost radial point of the tube has linking zero with $K$: its horizontal spanning disk meets $K$ at its two zero-height points with opposite signs. The positive meridian disk bounded by $\mu_o$ meets $K$ twice with the same positive sign, giving linking two. These intersection counts are equivalently the positive-meridian homology computation of [F2], obtained by deleting little disks around the transverse intersections of each spanning disk. Therefore bilinearity gives $\operatorname{lk}(K,K')=2\cdot0+\epsilon\cdot2=2\epsilon$, so $e(M_\epsilon)=-2\epsilon$. Reversing the chosen orientation of $K$ reverses both cycles in this self-linking and changes none of these values. [step 1.1, F2, construct, algebra]

3.1 For the boundary sum cover $F'$ by enlarged copies of the two surfaces together with half of the product band on each; their overlap is a disk and both sets are connected. Its exact sequence in [F3] gives $H_1(F';\mathbb Z)\cong H_1(F;\mathbb Z)\oplus H_1(M_\epsilon;\mathbb Z)$, with the inclusion of the old basis and the new core realizing this direct sum. Their representative curves and normal pushes can be retained inside their separate balls, away from the attachment. Each cross-linking is zero: a cycle inside one ball bounds a singular two-chain there, obtained by coning in a ball chart, and that chain misses the other ball. By [F2] this gives zero linking. The unchanged old block and the new block of step 1.1 therefore give $B_{F'}\cong B_F\oplus[\epsilon]$. The finite band construction and seam rounding supply a finite smooth disk-and-band presentation for the new surface. [given, step 1.1, F1, F2, F3, construct, algebra]

4.1 The boundary component at the attachment is the connected sum of its original component $J$ with $K$; every other boundary component is unchanged. Its framed self-linking is additive for the supplied product attachment. To see this in complement homology, cut the neck at its middle product disk and cap the cut ends by two parallel short arcs, one for the boundary cycle and one for its normal push. The two trace rectangles of this reconnection can be chosen disjoint from the other cycle, since the attachment and its normal collar are untwisted products. Thus the original boundary cycle is homologous to $J+K$ in the complement of its pushed cycle, and the pushed cycle is homologous to $J'+K'$ in the complement of $J\cup K$. Applying [F2] twice gives $\operatorname{lk}(J\mathbin{\#}K,(J\mathbin{\#}K)')=\operatorname{lk}(J,J')+\operatorname{lk}(K,K')$, since the two cross terms lie in disjoint balls and vanish. All other component self-linkings stay fixed. Step 2.1 consequently gives $e(F')=e(F)-2\epsilon$. The same local sum with an unknot does not change the boundary link type: its separated unknot summand is removed using its spanning disk, or using the Reidemeister-I isotopy of step 1.2 before flattening the remaining planar boundary-sum arc. The support can be kept in the attachment ball and a collar of that arc, away from every other component. [step 1.2, step 2.1, F2, F4, construct, algebra]

5.1 The added one-dimensional form in step 3.1 has signature $\epsilon$, so the signature increases by $\epsilon$. Step 4.1 makes half the Euler quantity decrease by $\epsilon$. Their sum is unchanged, proving the formula. The argument used only separate ball supports, the supplied product attachment and the explicit sign computation of the standard Möbius band, and so applies to arbitrary orientability of $F$ and arbitrary nonempty boundary links. [step 3.1, step 4.1, algebra] ∎
