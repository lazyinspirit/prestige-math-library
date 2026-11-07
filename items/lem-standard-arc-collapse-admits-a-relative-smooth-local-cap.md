---
id: lem-standard-arc-collapse-admits-a-relative-smooth-local-cap
kind: lemma
title: "Standard-arc collapse admits a relative smooth local cap"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse
  - lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs
  - lem-standard-ball-disks-with-smooth-collars-admit-relative-smooth-replacement
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the actual standard-arc and finite-corner radial constructions and the relative smooth disk replacement. The cutoff of the explicit fiber maps and the finite compositions introduce no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11; actual annular smoothing and cap replacement supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, proof of Theorem 1.1, PDF p.7"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
---

## Statement

Assume full AC. Let $F_0,F_1$ be compact smooth embedded spanning surfaces for the same nonempty link in $S^3$, with supplied radial collars. Let $A$ be an isolated smooth radial extension of a proper transverse common arc in the link exterior. Require transverse boundary-curve crossings at its distinct endpoints and equal ordered intersection signs, with the boundary tori oriented outward toward the exterior.

For every neighborhood $U$ of $A$ there are smooth closed balls $B_{\rm in}\subset\operatorname{int}B_{\rm out}\subset U$, a continuous surjection $q:S^3\to S^3$ collapsing exactly $A$ as its only nonsingleton fiber, and a homeomorphism $H:S^3\to S^3$ fixed off $\operatorname{int}B_{\rm out}$, such that $q$ is also fixed there, both maps preserve $B_{\rm out}$, $H$ preserves $B_{\rm in}$, and $q(A)\in\operatorname{int}B_{\rm in}$. The surface
$$Hq(F_0\cup F_1)\cap B_{\rm in}$$
is a smooth properly embedded disk, transverse to the inner ball boundary, and $Hq(F_0\cup F_1)$ is smooth on an open neighborhood of that boundary circle. In particular $Hq$ still has exactly $A$ as its only nonsingleton fiber. This is a local cap assertion; no global surface smoothing, definiteness, connectedness or primeness is assumed.

## Statement references

[[def-axiom-of-choice]]

[[lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse]]

[[lem-standard-ball-disks-with-smooth-collars-admit-relative-smooth-replacement]]

## Facts & Assumptions

**Given:** Full AC, the actual surface pair and radial collars, the isolated standard extended arc, and its prescribed neighborhood.

[F1] The actual standard-arc collapse proof constructs an adapted smooth chart, confocal ellipsoids and an explicit collapse. After diagonal rescaling of its outer ellipsoid, the whole surface image is exactly $\{0\}\cup\{r c_r(s):0<r\le1\}$, with four smooth regular edges per circle, distinct corner tangent lines for all positive radii, and short smooth extensions past every positive compact radius interval. It is a standard ball-disk pair. The level description is the constructive content of that proof, in addition to its Statement. ([[lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse]])

[F2] A finite-corner radial circle family gives a standard ball-disk pair and admits radius-preserving smoothing at positive radii. Its proof constructs disjoint moving corner boxes and vertical fiber maps $T_r(x,y)=(x,y+\chi((y-f_r(x))/a(r))\Delta_r(x))$, with $|\chi'\Delta_r/a|<1/2$, mapping the corner graph to a jointly smooth graph. Both the maps and their inverses vary continuously with radius. ([[lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs]])

[F3] A supplied standard ball-disk pair with an actual smooth transverse boundary collar admits a smooth proper disk replacement agreeing with a smaller collar, through a boundary-fixed ambient topological isotopy. ([[lem-standard-ball-disks-with-smooth-collars-admit-relative-smooth-replacement]])

## Proof

1.1 Apply the explicit construction [F1] in a smooth ball $B_{\rm out}\subset U$, and use its adapted diagonal coordinates to identify that ball with $B^3$. The map $q$ is fixed on its boundary and outside it, preserves the ball, and has only $A$ as a nonsingleton fiber, with image at the coordinate origin. In these smooth target coordinates its entire surface image inside the ball is the finite-corner radial disk of [F1]. Choose $r_0=1/2$, and let $B_{\rm in}$ be the coordinate ball of radius $r_0$. Restricting and rescaling the circle family to $0<r\le r_0$ satisfies the same hypotheses in [F2], so the surface image in this inner ball also has an actual standard-pair homeomorphism. These target balls are smooth in the original ambient structure, since the adapted chart and its fixed diagonal rescaling are smooth. [given, F1, F2, construct]

2.1 Choose a smooth radial cutoff $\lambda$ equal to one on a neighborhood of $r_0$ and zero outside $(1/3,2/3)$. In each corner box from [F2] replace its displacement $\Delta_r$ by $\lambda(r)\Delta_r$. The resulting fiber derivative in $y$ is $1+\lambda(r)\chi'((y-f_r(x))/a(r))\Delta_r/a(r)>1/2$. Thus it is still an increasing interval homeomorphism, equal to the identity near the box ends. It has a continuous inverse jointly in the parameters by strict monotonicity with this uniform lower slope bound. Outside its horizontal support it is also the identity. Compose these finitely many disjoint corner maps and extend by the identity to obtain sphere homeomorphisms $T_r$. At radii where $\lambda=0$ they are the identity, and near $r_0$ they are exactly the smoothing maps in [F2]. [step 1.1, F2, construct, algebra]

3.1 Put $T(r\omega)=rT_r(\omega)$ and take $T$ to be the identity at zero and outside $B^3$. It is an ambient homeomorphism supported in $1/3<r<2/3$, with inverse obtained from $T_r^{-1}$. In particular it preserves every concentric ball and fixes neighborhoods of the center and the outer boundary. Near $r_0$ its surface image is parametrized by $r\gamma_r(s)$ for the jointly smooth embedded-circle family in [F2]. This is a smooth embedded annulus transverse to every radius sphere: its radial derivative has radial component one, whereas its nonzero circle derivative has radial component zero. The parametrization is injective because radius and the circle embedding recover both parameters. Local inverses and compact circle charts give the actual embedded annulus. Thus the transformed disk inside $B_{\rm in}$ has the smooth transverse collar required in [F3], as well as the standard-pair chart obtained by composing the chart from step 1.1 with $T^{-1}$. [step 1.1, step 2.1, F2, construct]

4.1 Apply [F3] to that inner disk. Extend its boundary-fixed ambient isotopy by the identity outside $B_{\rm in}$, and write $V$ for its endpoint. The new inner disk is smooth and agrees with the previously smooth annulus on a smaller boundary collar. Therefore it joins smoothly to the unchanged exterior annular part across the whole inner boundary circle. Take $H=V\circ T$ in the target chart, extended by the identity outside $B_{\rm out}$. Both factors preserve the inner ball and the outer ball, and $q(A)$ remains inside the inner ball because $T$ fixes the origin and $V$ preserves the ball interior. Since $H$ is a homeomorphism, the fibers of $Hq$ are precisely those of $q$. This proves the asserted local cap and all support and fiber properties. No smoothness outside the specified inner disk and boundary annulus has been inferred. [step 1.1, step 3.1, F3, construct] ∎
