---
id: lem-balanced-spans-with-standard-intersections-admit-smooth-sphere-quotients
kind: lemma
title: "Balanced spans with standard intersections admit smooth sphere quotients"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-finite-standard-arc-collapse-of-balanced-spans-is-a-union-of-spheres
  - lem-smooth-arc-collapse-can-be-smooth-away-from-the-collapsed-arc
  - lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse
  - lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs
  - lem-standard-ball-disks-with-smooth-collars-admit-relative-smooth-replacement
  - lem-finite-smooth-surface-creases-admit-relative-ambient-rounding
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the finite balanced-surface sphere count, parametric corner rounding and relative smooth cap suppliers. Only finitely many arcs, balls, annuli and seam components are used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, proof of Theorem 1.1, PDF pp.7–8; disconnected balanced form and explicit smooth quotient supplied here"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $F_0,F_1\subset S^3$ be compact smooth embedded surfaces with the same nonempty boundary link $L$, no closed components, and supplied radial collars. Suppose their entire intersection is $L$ together with $n$ pairwise disjoint isolated smooth arcs $A_j$ with distinct endpoints on $L$. Each is the radial extension of a proper transverse common arc in the link exterior, and the two transverse boundary-curve crossings at its ends have equal ordered signs on the boundary tori oriented outward toward the exterior. No intersection circles occur. Suppose $c(F_0)=c(F_1)=p$ and $n=\operatorname{rank}H_1(F_0;\mathbb Z)+\operatorname{rank}H_1(F_1;\mathbb Z)$.

For every open neighborhood $N$ of $L\cup\bigcup_j A_j$ there is a continuous surjection $Q:S^3\to S^3$, fixed off $N$, whose only nonsingleton fibers are exactly the $A_j$, such that $Q(F_0\cup F_1)$ is a disjoint union of exactly $p$ smooth embedded two-spheres. Each sphere contains the images of exactly one component of each $F_i$. The assertion allows disconnected or nonorientable spanning surfaces and an empty arc list. It does not assert that $Q$ is smooth, recover an alternating diagram, or identify the quotient graph $Q(L)$ with the original link.

## Statement references

[[def-axiom-of-choice]]

[[lem-finite-standard-arc-collapse-of-balanced-spans-is-a-union-of-spheres]]

## Facts & Assumptions

**Given:** Full AC, the actual surface pair, standard finite intersection arcs, the two numerical balance assumptions, and the prescribed neighborhood.

[F1] The balanced finite standard-arc quotient admits an ambient surjection $q_0$ with exactly those arc fibers, whose surface image is exactly $p$ locally flat topological spheres, each containing one component from each surface. ([[lem-finite-standard-arc-collapse-of-balanced-spans-is-a-union-of-spheres]])

[F2] A supplied straight-arc chart admits a collapse fixed near its outer ellipsoid boundary, a smooth diffeomorphism off the arc, with target ellipsoid semiaxes $f(\rho),\rho,\rho$ and $f(\rho)=a\rho$ near zero. ([[lem-smooth-arc-collapse-can-be-smooth-away-from-the-collapsed-arc]])

[F3] In the actual standard-arc proof's adapted chart, the entire surface intersection with every small confocal source ellipsoid is one circle of four smooth regular edges with distinct corner tangent lines. The endpoint matching and all level parametrizations are supplied by its actual proof. ([[lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse]])

[F4] The finite-corner radial family has a standard-pair chart. Its actual graph-rounding formula has vertical displacement $\chi((y-f_r(x))/a(r))\Delta_r(x)$ with fiber derivative greater than $1/2$, and carries the circle family to a jointly smooth circle family. Multiplying $\Delta_r$ by a smooth radial cutoff between zero and one preserves the derivative bound. ([[lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs]])

[F5] A standard ball disk with a smooth transverse boundary collar admits smooth replacement agreeing with that collar, by a boundary-fixed ambient topological isotopy. ([[lem-standard-ball-disks-with-smooth-collars-admit-relative-smooth-replacement]])

[F6] Finitely many labeled smooth half-sheet seams, with distinct inward transverse rays and smooth neighborhoods of their arc ends, admit relative ambient topological rounding, preserving a protected compact smooth set and with arbitrarily small support. ([[lem-finite-smooth-surface-creases-admit-relative-ambient-rounding]])

[F7] The smooth-input finite handle normal-form proof contracts primal and dual trees to leave one zero-disk and one two-disk on a closed connected smooth surface, transporting every collar. Its smooth circle-extension formula extends every smooth circle attaching map over a disk. These are the actual constructions in that proof; the smooth sphere consequence is derived below. ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]])

## Proof

1.1 Choose pairwise disjoint adapted standard-arc charts and outer ellipsoid balls $B_j\subset N$ by [F3]. In each of these same charts perform the collapse [F2], rather than a collapse that only fixes the outer boundary pointwise. Their finite composition $q$ is a smooth diffeomorphism off the union of the arcs, is the identity on neighborhoods of the outer ball boundaries and outside these balls, and has exactly the stated arc fibers. In a sufficiently small target ellipsoid, its level semiaxes are $a\rho,\rho,\rho$. After a fixed diagonal rescaling these are round radius levels. On each source level the actual surface circle in [F3] maps by an invertible diagonal linear map to that target level. Thus in this inner homothetic region its whole surface image is exactly a four-edge radial circle family satisfying [F4]. In particular its restriction to any smaller concentric target ball there is a standard ball-disk pair. [given, F2, F3, F4, construct]

2.1 Within each homothetic region choose one smaller target ball $C_j$ and a surrounding annulus still strictly inside that region. Use the explicit [F4] maps there, multiplying their displacements by a radial cutoff equal to one near $\partial C_j$ and zero near both ends of the annulus. The bound in [F4] makes every fiber map an increasing homeomorphism with continuous inverse, so the radius-preserving map $T_j(r\omega)=rT_{j,r}(\omega)$ extends by the identity off the annulus. Near $\partial C_j$ the surface image is a smooth annulus $r\gamma_r(s)$ transverse to the radius spheres, because its radial derivative has radial component one and its regular circle derivative has radial component zero. The map preserves $C_j$, so the disk inside retains a standard-pair chart. Apply [F5] there and extend its boundary-fixed endpoint homeomorphism by the identity. The resulting local homeomorphism $H_j$ is supported inside $B_j$; its surface image is a smooth disk throughout $C_j$ and agrees smoothly with the just constructed annulus on an open boundary collar. These finite supports are disjoint. [step 1.1, F4, F5, construct]

3.1 Verify the remaining seams before using [F6]. Outside the corner-rounding annuli and inner caps, $q$ is a smooth diffeomorphism and the only surface seams are the images of $L$ minus finitely many intervals. The original radial collar rays there are distinct: coincident rays would give an extra common radial segment, contradicting the specified full intersection set. An invertible smooth derivative preserves distinct inward rays. In a corner annulus the two actual half-sheet images have graph equation $f_r(x)+\lambda(r)\zeta(x)(f_r^\epsilon(x)-f_r(x))$, with the original corner at $x=0$. On each side this is a smooth graph up to $x=0$, and the image seam itself is the smooth curve with graph value $\lambda(r)f_r^\epsilon(0)$. The two outgoing transverse tangents have respectively positive and negative $x$ components, so are distinct for every cutoff value, even where their tangent planes agree. The maps are the identity near annulus support ends, so these descriptions join smoothly to the original seam curves. [given, step 1.1, step 2.1, F4, construct]

4.1 Trim each seam inside a smaller collar where the disk cap already agrees with the smooth annulus. The remaining seams are finitely many disjoint smooth compact arcs and circles: the compact smooth link has finitely many components, each inner level sphere meets its image in exactly the four corner points of the level description [F3], and all modifications above are injective away from the original collapsed arcs. Each trimmed arc ends in the smooth annular collar. Its two labeled half-sheets, inherited from $F_0,F_1$ outside the cap, extend geometrically slightly past the end within that unchanged smooth surface collar. One uses the smooth graph and its corner-curve continuation there to divide the collar into two halves; these need not be the images of the originally marked half-sheets inside the cap. Their inward rays remain distinct by step 3.1. All points outside these seams are smooth: the collapse is a diffeomorphism there including near the outer ball boundaries; the annular modifications are smooth on each open half-sheet; the caps and their attaching collars are smooth. Apply [F6] to these actual finite seam data, protecting smaller compact cap disks and taking support inside $N$. Let $R$ be the resulting ambient homeomorphism. Then $Q=R\circ(\prod_jH_j)\circ q$ has exactly the original arc fibers, is fixed off $N$, and its surface image is smooth everywhere. [given, step 1.1, step 2.1, step 3.1, F2, F3, F6, construct]

5.1 It remains to identify the smooth components without assuming that smoothing preserves any unspecified model. Take $q_0$ from [F1]. The maps $q_0$ and $q$ have precisely the same fibers on $S^3$. Thus $q$ factors through $q_0$ as a bijection $J:S^3\to S^3$. It is continuous because a continuous surjection from a compact space onto a Hausdorff space is a quotient map. A continuous bijection from compact to Hausdorff is a homeomorphism, so $J$ is an ambient homeomorphism and carries $q_0(F_0\cup F_1)$ onto $q(F_0\cup F_1)$. Composing with the homeomorphisms in step 4.1 shows that the smooth image consists of exactly the same $p$ topological sphere components, with the same assignment of one component from each $F_i$. For an actual smooth sphere parameter, apply the finite smooth handle construction [F7] to each such component. Its Euler characteristic two and its normalized one zero-disk and one two-disk give $2=1-h_1+1$, hence no remaining bands. It is therefore two smooth disks joined along a smooth circle map; extending that map across one disk by [F7], with the transported product collars, identifies it smoothly with the standard sphere. If no arcs occur, use the identity collapse, omit the balls and caps, and round only the distinct radial-collar seams by [F6]; the same count and quotient comparison apply. [step 1.1, step 4.1, F1, F6, F7, construct] ∎
