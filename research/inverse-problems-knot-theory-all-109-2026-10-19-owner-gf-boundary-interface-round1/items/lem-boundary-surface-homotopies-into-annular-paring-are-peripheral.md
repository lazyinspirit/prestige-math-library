---
id: lem-boundary-surface-homotopies-into-annular-paring-are-peripheral
kind: lemma
title: Boundary-surface homotopies into annular paring are peripheral
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-finite-simplicial-approximation-for-maps-of-pairs
  - lem-jordan-schoenflies-extension-for-plane-curves
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from the actual surface Jordan supplier and the declared smooth triangulation theorem. All perturbations and preimage surgeries below are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Section3.1, printed435, PDF11, the explicit boundary-to-parabolic-locus homotopy condition. The surface-only implication below is proved directly; no three-dimensional annulus theorem is invoked.
---

## Statement

Assume AC. Let $B$ be a compact oriented boundaryless surface, either smooth or a GIVEN finite PL surface. Let $P\subset B$ be a finite disjoint union of collared annuli in the same category, each inducing an injection on fundamental groups, and put $S=B\setminus\operatorname{int}P$. In the PL case the pair has its given compatible finite triangulation; in the smooth case no three-manifold triangulation is assumed. If a loop $\alpha:S^1\to S$ is freely homotopic THROUGH $B$ to a loop in $P$, then it is freely homotopic INSIDE $S$ to a loop on one component of $\partial S$. Thus its class is peripheral in its actual component of $S$, including a possible zero power. The conclusion is vacuous when no such homotopy exists. Entire torus components designated as $P$ may be discarded first, since their complementary $S$ is empty.

In particular, suppose such $B$ is a boundary component of a three-manifold and a nontrivial parabolic loop in $S$ has a supplied free homotopy through $B$ into the paring locus. It then represents a nonzero power of an actual boundary rim of $S$. The mere existence of a free homotopy through the THREE-manifold into $P$ is not substituted for that supplied boundary homotopy. Nor does this lemma replace an assumption concerning only simple boundary curves by an assumption concerning every loop.

## Facts & Assumptions

**Given:** The surface pair, its category and collars, the loop and the supplied boundary-surface free homotopy.

[F1] Under AC a compact smooth manifold with ordinary boundary has a finite triangulation extending an admissible piecewise smooth boundary triangulation, pointwise with compatible subdivision. This is the ordinary-boundary special case of the actual full proof in [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], especially Proof4.1. Applied only to two-dimensional pieces here, it is not a PL-to-smooth or TOP-three-manifold assertion.

[F2] Maps from finite simplicial pairs have sufficiently fine simplicial approximations with common-carrier homotopies; these are homotopies of pairs, not arbitrary pointwise fixed boundary extensions. [[thm-finite-simplicial-approximation-for-maps-of-pairs]]

[F3] A circle on the sphere bounds two disks, and prescribed Jordan-boundary homeomorphisms extend over their disks. [[lem-jordan-schoenflies-extension-for-plane-curves]]

[A1] Full choice is [[def-axiom-of-choice]].

## Proof

1.1 Work in the connected component containing the homotopy. An empty paring locus gives no such homotopy. Push the initial loop into the interior of its component of $S$ by a short surface-boundary collar homotopy in $S$, and the terminal loop onto a core of its annular component of $P$. These changes preserve the desired conclusion. The smooth pair has a compatible finite surface triangulation: first triangulate its finitely many common rim circles by regular smooth arcs. Their differential fans are the two rays on the boundary tangent line, so they are admissible boundary data for [F1]. Extend the SAME circle maps to each compact component of $S$ and each annulus of $P$ separately by [F1]. They agree pointwise on their rims; compatible subdivision makes their union a finite triangulation of the underlying pair. In the PL case use the given compatible triangulation. The homotopy is a map $f:A=S^1\times[0,1]\to B$. Fine [F2] approximation makes it PL in these surface coordinates, allowing the two boundary maps to move only inside their respective open complementary pieces: choose the target subdivision and star carriers smaller than the positive distances of those compact loop images from the rims. The carrier homotopies then remain in those pieces. It suffices to prove the assertion for this approximated homotopy and concatenate those boundary homotopies afterwards. No three-dimensional triangulation, and no pointwise relative version of [F2], was used. [A1, F1, F2, given, construct]

2.1 Let $\mathcal C=\partial P$. Perturb these finitely many polygonal rim circles by arbitrarily small normal graphs in disjoint annular collars, supported away from the two boundary-loop images. Choose their finitely many graph vertices so that the perturbed curves $\mathcal C'$ miss every image of a source vertex, avoid the target triangulation vertices, and cross each target edge transversely with no shared segment. This requires avoiding finitely many point and collinearity conditions in finitely many coordinate rectangles; small successive vertex changes preserve embeddedness and the disjoint collars. A small normal graph $t=\epsilon(s)$ is carried from $t=0$ by the collar map $(s,t)\mapsto(s,t+\epsilon(s)\chi(t))$, with a piecewise linear cutoff and displacement smaller than the reciprocal of its fixed cutoff slope. Its normal coordinate is strictly increasing, so the map is an ambient surface homeomorphism $T$ supported in those collars. Thus $T(P)$ and $T(S)$ retain the original meaning, and $T$ fixes both boundary-loop images. The preimage $f^{-1}(\mathcal C')$ is a finite union of disjoint polygonal circles in the interior of $A$. Indeed, on a source triangle mapping with rank two its preimage consists of finitely many transverse polygonal arcs; on one mapping to an edge the transverse target crossings likewise give parallel arcs; a triangle mapping to a vertex has empty preimage. Along each source edge avoiding its vertices the two adjacent triangle arcs join with valence two. There are no preimage endpoints since the two annulus boundaries miss $\mathcal C'$. [F2, step 1.1, construct, algebra]

3.1 Remove every preimage circle bounding a disk in the source annulus, starting with an innermost one $\gamma$. Its image is in one rim $C'$. The image loop has degree zero in $C'$: the map of its enclosed disk makes it nullhomotopic in $B$, whereas $\pi_1(C')\to\pi_1(B)$ is injective by the annular-injectivity premise and $T$. Choose a parallel source circle $\delta$ just outside $\gamma$, disjoint from all preimage curves. Uniform continuity and the local preimage description put $f(\delta)$ in a small collar of $C'$ on the side occupied just outside $\gamma$. It has the same degree zero. Hence its angular coordinate lifts to a continuous real-valued periodic function $\vartheta$; its transverse coordinate $u$ is strictly positive after orienting that collar toward this side. Fill $\delta$ by the disk map with polar coordinates $0\le r\le1$ given by angular lift $(1-r)\vartheta_0+r\vartheta$ and transverse coordinate $(1-r)u_0+ru$, for fixed $u_0>0$. It agrees with $f$ on $\delta$, is continuous at the center, and misses $\mathcal C'$. Replacing the enclosed disk by this map removes $\gamma$ and creates no new preimage curves. No assertion that this replacement is homotopic to the old disk relative its boundary is needed: it gives another annulus map with the SAME two original boundary maps, which is exactly a free homotopy. The finite preimage count strictly decreases, so the process terminates. [step 2.1, given, construct, algebra]

4.1 Every remaining preimage circle is essential in the source annulus, and these circles are parallel and linearly ordered from its initial to its terminal boundary. For precision, cap those two boundaries by disks to make a sphere. By [F3] an embedded preimage circle either has both caps on the same side, when its other disk is inside the annulus, or separates the caps, when it is essential and cuts off a subannulus at each end. Two disjoint circles of the latter type are nested, giving the stated order. There must be at least one: otherwise the connected annulus image would miss $\mathcal C'$ and its two boundary loops would lie in the same component of $B\setminus\mathcal C'$, whereas one lies in $\operatorname{int}T(S)$ and the other in $\operatorname{int}T(P)$. Take the first remaining circle. The closed subannulus between it and the initial boundary has its interior image in the actual initial component of $\operatorname{int}T(S)$ and its other boundary image in one rim of that component. Composing this subannulus map with $T^{-1}$ gives the asserted free homotopy INSIDE $S$ to a loop on an actual rim. A loop on that rim has an integer degree, so this says exactly that the original class is conjugate inside its component to a power of that boundary class. [F3, step 2.1, step 3.1, construct, algebra]

5.1 In the stated three-manifold application this free homotopy is still a homotopy after inclusion into the three-manifold. A zero power would make the original loop trivial there and hence trivial in every holonomy representation, contradicting its nontrivial parabolic image. Its peripheral power is therefore nonzero. This argument used the SUPPLIED boundary-surface homotopy; obtaining it from a three-manifold homotopy is a different topological condition, and a simple-curve condition was not extended to arbitrary loops. Both original categories were used only to supply finite two-dimensional collars and triangulations, not a smoothing or triangulation of the three-manifold. [step 1.1, step 4.1, given, construct, contradiction] ∎
