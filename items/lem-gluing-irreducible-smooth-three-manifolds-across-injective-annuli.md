---
id: lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli
kind: lemma
title: "Irreducibility after gluing across injective proper annuli"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-countable-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-relative-transversality-for-embedded-surfaces, lem-smooth-ball-windows-and-boundary-disk-absorption, thm-isotopy-extension, lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups, lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is used by relative transversality, ball-window standardization and isotopy extension."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.11, preliminary fact (5), converse irreducibility argument; the disk push is made explicit below"
---

## Statement

Assume countable choice. Let $M$ be a compact orientable smooth three-manifold and let $\mathcal A$ be a finite disjoint family of properly embedded two-sided annuli. Suppose each map $\pi_1(A)\to\pi_1(M)$ is injective and every component of the cut-open manifold $M\mathbin{\|}\mathcal A$, with its boundary corners rounded, is irreducible. Then $M$ is irreducible. The family may be empty, and its annuli need not be separating or boundary-incompressible.

## Facts & Assumptions

**Given:** Countable choice, $M,\mathcal A$, their injectivity and the irreducibility of all cut pieces.

[A1] Countable choice is [[def-countable-choice]].

[F1] Irreducibility, two-sidedness and compressing disks have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] Compact embedded surfaces can be put in finite relative general position ([[lem-relative-transversality-for-embedded-surfaces]], Statement).

[F3] A parametrized smooth ball with a boundary disk window is the standard ball-window pair, and a ball attached along such a window is absorbed by a diffeomorphism in its collar ([[lem-smooth-ball-windows-and-boundary-disk-absorption]], Statement).

[F4] A smooth isotopy of a compact disk extends to a supported ambient isotopy; boundary-valued annulus isotopies also extend ([[thm-isotopy-extension]], Statement).

[F5] A nullhomotopic regular circle in an oriented surface bounds a disk region, unique in a nonspherical connected component ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], Statement, clause 4).

[F6] The bounded region of a smooth planar Jordan curve is a parametrized smooth disk, with prescribed boundary collars allowed ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]], Statement).

## Proof

1.1 Let $S$ be a smooth embedded sphere in the interior of $M$. By [F2] make it transverse to $\mathcal A$; intersections are finitely many disjoint circles. Among all such transverse positions obtained by ambient isotopies supported in the interior choose one with the least number of circles. The set of possible counts is a nonempty subset of the natural numbers, so it has a least element; only one representative is selected. If the count is zero, $S$ lies in the interior of a cut piece and bounds a ball there by the Given irreducibility. Suppose instead that a circle $C$ is innermost on $S$, bounding $D\subset S$ with interior disjoint from all annuli. Its class is trivial in $\pi_1(M)$ and hence in the annulus $A$ containing it, by injectivity. By [F5] applied to the oriented open annulus, $C$ bounds a disk region $D'$ in its interior, unique because that component is not a sphere. Its inherited disk-region charts are smooth, since $C$ and $A$ are smooth. Lift this simply connected compact disk region to the standard strip cover of the annulus. The lift projects diffeomorphically onto it, and is the bounded region of its smooth planar boundary circle. Thus [F6] supplies an actual smooth disk parameter, with the boundary collar retained when needed. Thus $D\cup D'$ is an embedded sphere with a corner along $C$. [A1, F1, F2, F5, F6, given, construct]

2.1 The interior of $D$ lies on one cut side of $A$. Push $D'$ slightly into that side and round the rim along $C$. This produces a sphere in the interior of the same cut piece, hence a ball there. Restore the thin product collar between the pushed disk and $D'$: in the two-dimensional normal section at $C$ the two meeting half-disks form a quadrant, and its rounding has the same ball-window chart. Thus [F3] adds precisely that collar window and gives a ball $B$, allowing the displayed boundary corner, with boundary $D\cup D'$ and $B\cap\bigcup\mathcal A=D'$. This assertion concerns that particular side, not an assumption that an arbitrary sphere in $M$ already bounds a ball. It follows from the cut-piece ball and the restored window; all other cut faces remain outside it. [F1, F3, step 1.1, construct]

3.1 We spell out the disk push across this ball. Standardize $(B,D')$ by [F3]; its complementary boundary disk is $D$. The two hemispheres of a standard ball admit a common-boundary disk sweep through its interior. For example, in polar disk coordinates $0\le\rho\le1$ the spherical caps with center height $a\in[-1,1]$ have meridian coordinates $$r_a(\rho)=\frac{1+a^2}{2a}\sin(2\rho\arctan a),\qquad z_a(\rho)=\frac{a^2-1}{2a}+\frac{1+a^2}{2a}\cos(2\rho\arctan a),$$ with the removable values $r_0(\rho)=\rho,z_0(\rho)=0$. Rotating these arcs about the vertical axis gives embedded disks joining the lower hemisphere to the upper one and fixing their common circle. The expressions extend smoothly through $a=0$ by their power series; at the axis $r_a(\rho)/\rho$ and $z_a(\rho)$ are smooth functions of $\rho^2$, and at the rim the meridian derivative is nonzero even for $a=\pm1$. Thus these are smooth disk embeddings, not merely a contraction of their images. In a thin rim collar extend their meridian arcs to the stationary annulus outside $D'$, and at the last stage push the resulting disk just past $D$ in its surface-normal collar. This extension is obtained in the normal two-dimensional section by rounding the joining arc and using a cutoff on a slightly larger rim interval; the tangent turns between two nonzero incident directions and the interval is chosen small enough that the curve stays embedded. The sign of the last push is chosen so that the continued outer annulus misses $S$ at the former crossing $C$. Outside that rim collar the last disk is a parallel copy of $D$, disjoint from $S$; compactness supplies one normal width valid on its whole disk. Consequently this is an isotopy of $A$ that replaces its subdisk $D'$ by a disk just past $D$, removes $C$ and every other intersection circle inside $D'$, and creates no new intersections with $S$. Its support is in $B$ and an arbitrarily thin collar of its rim and faces; other annuli are disjoint from that support by step 2.1. Use [F4] to extend it to an ambient isotopy $H$ of $M$, fixed near $\partial M$. Then $H^{-1}(S)$ has fewer intersections with the original $\mathcal A$, since its intersections correspond to those of $S$ with the moved annuli. This contradicts the minimal choice of step 1.1. [A1, F3, F4, step 1.1, step 2.1, construct]

4.1 The minimal count must therefore be zero. The ball in the cut piece from step 1.1 is a ball in $M$, and its inverse image under the isotopies bounds the original sphere. This proves irreducibility. If the annulus family is empty, the zero-count argument applies immediately. At no stage was an annulus required to separate, and no boundary-compressibility assertion was used. [F1, step 1.1, step 3.1] ∎
