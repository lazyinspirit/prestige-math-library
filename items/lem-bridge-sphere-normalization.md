---
id: lem-bridge-sphere-normalization
kind: lemma
title: Normalize a decomposing sphere relative to a bridge sphere
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-bridge-position-and-unknotting-number
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - lem-knot-decomposing-sphere-realizes-connected-sum
  - def-countable-choice
  - thm-isotopy-extension
  - lem-knot-exterior-is-irreducible
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Seiya Negami and Kazuo Okita, The Splittability and Triviality of 3-Bridge Links"
      url: "https://www.researchgate.net/publication/243080042_The_splittability_and_triviality_of_3-bridge_links"
      locator: "§3, Lemma 3-3 and its proof, printed pp. 259–262; the m=2 case"
    - title: "William Jaco, Lectures on Three-Manifold Topology"
      url: "https://www.maths.gla.ac.uk/~mpowell/Lectures-3-mfld-topology_Jaco.pdf"
      locator: "Chapter II, Lemma II.8, printed p. 22, planar-surface hierarchy disk count"
---

## Statement

Assume the Axiom of Countable Choice. Let $K=K_1\#K_2$ be a smooth oriented connected sum with both factors nontrivial. Let $S$ be a regular level sphere giving a bridge position: $S$ divides $S^3$ into two balls, and in each ball the knot is a finite collection of properly embedded arcs, each of which cobounds an embedded disk with an arc on $S$; the disks in each ball are pairwise disjoint. Let $P$ be a smooth decomposing sphere meeting $K$ transversely in two points and cutting it into the given two oriented factors. Put $E=S^3\setminus\operatorname{int}N(K)$ and let $A=P\setminus\operatorname{int}N(K)$ be the resulting annulus, where $N(K)$ is a small closed tubular neighborhood. Assume the inclusion-induced map $\pi_1(A)\to\pi_1(E)$ is injective and that there is no embedded disk in $E$, with interior disjoint from $A\cup\partial E$, whose boundary is the union of a properly embedded arc in $A$ that does not cobound a disk in $A$ with a subarc of $\partial A$ and an arc in $\partial E$. Then, after isotoping $P$ through spheres meeting $K$ twice and changing only the bridge-spanning disk systems for the fixed pair $(K,S)$, one can arrange that $P\cap S$ is exactly one simple closed curve and that the union of the upper and lower bridge-spanning disks meets $P$ in exactly two arcs, each joining one point of $P\cap K$ to a point of $P\cap S$.

## Statement references

[[def-knot-bridge-position-and-unknotting-number|The fixed height and bridge-position convention]]

[[def-knot-connected-sum-and-prime-knot|Connected-sum decomposition and nontrivial factors]]

[[lem-knot-decomposing-sphere-realizes-connected-sum|A sphere transverse to the knot determines the oriented factors]]

## Facts & Assumptions

**Given:** The stated countable-choice hypothesis, fixed bridge pair $(K,S)$ and initial spanning disks, the specified two-puncture sphere $P$, and the two essential-annulus hypotheses.

[F1] A knot exterior is irreducible under countable choice. [[lem-knot-exterior-is-irreducible]]

[F2] Smooth Schoenflies identifies both sides of a smooth sphere simultaneously with balls, by an ambient isotopy. [[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]]

[F3] Supplied smooth ball windows admit collar-compatible attachment and removal. [[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]]

[F4] A compact smooth embedding isotopy extends ambiently. [[thm-isotopy-extension]]

[F5] The oriented factors obtained from a two-puncture sphere by boundary caps are the connected-sum factors, independently of the cap choices. [[lem-knot-decomposing-sphere-realizes-connected-sum]], [[lem-knot-connected-sum-well-defined]]

## Proof

1.1 Write $B_+,B_-$ for the fixed bridge balls, $D_i^\pm$ for their spanning disks, and $T_\pm=P\cap B_\pm$. Arrange finite transverse intersections, with $P\cap S\cap K=\varnothing$, and take the knot tube sufficiently small and adapted to these intersections. A product neighborhood of each $D_i^\pm$ identifies a neighborhood of its bridge with the usual boundary-parallel ball-arc. Cutting $B_\pm\setminus\operatorname{int}N(K)$ along the disks $D_i^\pm\setminus\operatorname{int}N(K)$ gives a ball: successively slide each bridge along its displayed disk into a boundary collar, and remove its displayed half-tube; each cut opens that collar tunnel. These moves use disjoint same-side disk neighborhoods. In particular this is a *complete* meridian-disk system, not merely a collection of compressing disks. Throughout the proof the knot and $S$ themselves stay fixed; a puncture of $P$ is allowed to travel along the fixed knot. [given, F3, construct]

1.2 First remove compressions of $T_\pm\setminus\operatorname{int}N(K)$ in its bridge exterior. A compressing circle is nullhomotopic in $E$, hence in $A$ by the assumed injection; in an annulus it bounds a disk $E_0\subset A$. This disk must cross $S$, since otherwise the proposed compression was inessential on the relevant $T_\pm\setminus N(K)$. The compression disk and $E_0$ form a sphere in $E$ after rounding. Its ball from [F1] has no other part of $A$ inside: $A\setminus E_0$ is connected and reaches $\partial E$, whereas the ball is in the interior. Push $E_0$ across this ball to a parallel copy of the compression disk. This is an isotopy of $P$ supported off $K$, removes all the intersection circles lying inside $E_0$, and creates none. Thus each such operation strictly reduces $|P\cap S|$. After finitely many operations both punctured $T_\pm$ are incompressible. The same preparation can be repeated after a later pass. These are isotopies of the given sphere, so its oriented factors are preserved. [given, F1, F3, F4, F5, construct]

2.1 Fix one side, temporarily written $B,T,\mathcal D$. Remove circle components of $T\cap\mathcal D$ by disk exchange: a circle innermost on a spanning disk bounds a disk on the punctured $T$ by its incompressibility; take one innermost among the disk-bounding circles on $T$. Its interior contains no intersection arcs, since those have endpoints on $\partial T$ or $K$, and contains no intersection circles by this choice. Replace the disk of the spanning disk bounded by that circle by a nearby copy of this disk on $T$. The replacement is embedded, misses every other spanning disk, keeps the bridge boundary arc fixed and reduces the total number of circles. Repeat finitely. Intersection arcs now have either one endpoint on $K$ and one on the disk's foot in $S$ (type I), or both endpoints on the foot (type II). An arc with both endpoints on $K$ would join the two punctures of $A$: choose the subdisk next to the segment of the bridge between those endpoints. It has no other intersection arcs, since that segment has no further punctures and its interior foot-free subdisk cannot contain an arc ending on $S$. After deleting circles, its part in $E$ would be a boundary compression along a spanning arc of $A$, contrary to hypothesis. This also shows $P\cap S\ne\varnothing$: if it were empty, after circle removal the two punctures would have to be joined by just such an arc. Thus every component of either unpunctured planar $T_\pm$ has nonempty boundary. [given, step 1.1, step 1.2, construct]

3.1 Here are the three disk moves, including their supports. For an arc innermost next to a disk's foot, let $\Delta$ be its cut-off subdisk containing no other intersection arcs. A neighborhood of $\Delta$, with collars on its boundary intervals, is a standard disk times an interval. Pushing the surface band across $\Delta$ and a little through $S$ is a smooth embedding isotopy: in these coordinates translate the band in the interval direction, with a bump zero at the ends of the retained intervals, and round the two moving corners. The support can avoid the other same-side spanning disks. For a type-I arc this slides its puncture along the bridge through the adjacent endpoint on $S$; the velocity along $K$ is tangent to $K$, so the isotopy extends preserving $K$ setwise. It removes this puncture from the treated side and does not change the homeomorphism type of the **unpunctured** $T$. Call this move I. For a type-II arc essential in unpunctured $T$, the same band push cuts $T$ along that arc; call this move II. Both remove their chosen intersection arc and create no new intersections with the treated disk system. Their punctured-surface operations are boundary cuts. All isotopies can be stationary at their time endpoints and extended using [F4]. [given, F3, F4, step 2.1, construct]

3.2 The remaining move changes a spanning disk, not $P$. Suppose a type-II arc $\gamma$ cuts off a disk $E_0$ from $T\setminus N(K)$ with no other intersection arcs in its interior. On its spanning disk, retain the component of the cut along $\gamma$ containing the bridge, and replace the other component by a nearby copy of $E_0$. The union along $\gamma$ is a disk: two disks glued along one boundary interval. Its new foot is the old retained foot together with $\partial E_0\setminus\gamma$, pushed a little on $S$. Push its interior off $T$ on the retained disk's side and round the seam. Since $E_0$ has no punctures or other intersection arcs, the replacement misses $K$ except on its original bridge, is disjoint from all other same-side spanning disks, and deletes $\gamma$ and any intersections on the discarded part without adding any. This move III is valid even when $\gamma$ is not innermost on its spanning disk. In particular it is a disk replacement, not an unproved assertion that two disks in a knotted region are isotopic. [given, F3, step 2.1, construct]

4.1 If the treated disk system is still met, one of these moves is available. Here is the finite innermost argument for the only obstructed case. If neither I nor II is available, every arc innermost next to a foot is type II and cuts off a disk $E_0$ of the unpunctured surface $T$. Choose one such arc $\gamma$ and its foot-adjacent disk $\Delta$. If $E_0$ has no punctures, take an innermost subdisk of $E_0$ cut off by intersection arcs; it is empty and gives III. Otherwise a puncture of $E_0$ starts a type-I arc. The disk $Q=E_0\cup\Delta$, rounded at $\gamma$, is a proper disk in the bridge ball. It separates it into two balls: cap by either boundary disk on $\partial B$ and apply [F2], retaining the actual collars. Call the side away from the bridge on the spanning disk of $\gamma$ the inside. Follow the type-I arc's spanning disk from its puncture towards its foot. If this arc were foot-innermost, I would be available. The arcs between it and the foot therefore contain an innermost type-II arc on the inside. Its disk cut off on $T$ is also on the inside: $T$ misses the interior of $\Delta$, and its only portion on $Q$ is $E_0$, so an arc or cut-off disk cannot leave the inside without crossing $E_0$ or $\Delta$; if it lies on $E_0$, use its subdisk there and push its collar inward. Its own foot-adjacent disk together with that cut-off disk now cuts off an inside ball contained in the previous one. The bridge-containing side is again discarded. This is a strict descent in the finite set of intersection arcs contained on or inside these disks: the previous delimiting arc is outside the next inside ball. Repeat if its cut-off disk has a puncture. A strict descent cannot continue indefinitely. It ends with a puncture-free disk, and an innermost subdisk in it is the empty disk required for III. This proves availability without assuming an arbitrary boundary compression has the required foot. [F2, step 2.1, step 3.1, step 3.2, construct]

5.1 Perform available moves on this one side. Each deletes at least one arc of the treated system, and creates none there, so this inner process is finite. If necessary remove circles as in step 2.1. The punctured surface remains incompressible after a move I or II. To verify the usual boundary-cut assertion here, reverse its band in the empty disk-product neighborhood of step 3.1. Put a proposed compression disk transverse to the band cocore and remove its outermost intersections in that product; a surviving essential compression would give a compression of the old surface. If its boundary bounds a disk on the old surface, that disk is disjoint from the cut arc: a proper arc cannot enter the interior of a disk bounded by a disjoint interior circle without crossing that circle. It is therefore also a disk on the cut surface. Any sphere produced in removing the outermost intersections bounds a ball, since a bridge exterior cut from a ball along trivial-arc tubes is a handlebody; its sphere bounds a ball on the side not meeting the boundary by the same [F2] argument as in [F1]. Thus it cannot supply an exceptional compression. Move III does not change the surface. At termination $T$ misses both $K$ and the complete disk system. It lies in the cut-open ball of step 1.1 and is a union of disks: for a nondisk planar component an innermost boundary curve on that ball's sphere gives, by a small boundary-collar push, a compression, contrary to incompressibility. [F1, F2, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, construct]

6.1 We give the strict count rather than infer it from the number of punctured boundary curves. For an unpunctured planar surface with $b$ boundary curves and $c$ components, set $z$ equal to its number of nondisk components. Moves I and III do not change this surface's topology. Every move II cuts an essential proper arc. A nonseparating such cut reduces the total $\sum(b_j-1)=b-c$ by one; a separating cut leaves this total unchanged and creates no disk, since the arc was essential. At the end this total is zero, so there were exactly $b-c$ nonseparating cuts. Each creates at most one new disk; initially there were $c-z$ disks. Hence the number $d$ of final disks satisfies $d\le(c-z)+(b-c)=b-z$. Their boundaries are precisely the *new* circles $P\cap S$. If the treated side had a nondisk component, $z\ge1$, and a complete pass strictly decreases the number of circles from $b$ to $d$. This is the planar hierarchy count used here. Punctures do not occur in $b$. [step 3.1, step 3.2, step 5.1, algebra]

7.1 Repeat the compression cleanup of step 1.2 and then a complete pass on either side that has a nondisk component. Cleanup and every such pass strictly decrease the positive integer $|P\cap S|$, so the outer process is finite. At its end every component of both $T_+$ and $T_-$ is a disk. The dual graph of the circles cutting the sphere $P$ is connected; every vertex is now a disk and has degree one, so that graph has just one edge. Consequently $P\cap S$ is exactly one circle. Each operation on $P$ was an embedding isotopy through spheres meeting $K$ in exactly two points, preserving $K$ setwise; each other operation changed only a spanning disk. The specified oriented factors are therefore still the same by [F5]. [F5, step 1.2, step 2.1, step 6.1, algebra]

8.1 Each $T_\pm$ is now a single disk. Apply I and III on the upper side until it has no punctures or disk intersections; II is unavailable on a disk. The two punctures then lie in the lower disk. Apply I and III below only until one of its punctures has passed to the upper disk. There is now one puncture in each disk, and the intersection circle has not changed. In a disk a nonempty finite family of type-II chords cuts off at least two outermost disks; at least one of those contains no puncture. Choose an innermost empty subdisk if further intersection arcs lie in it and apply III. Repeating removes all type-II arcs, without changing $P$ or either puncture. Circles have already been removed. Each remaining puncture is on exactly one spanning disk on its own side, and a type-I arc has just one puncture endpoint. There are therefore exactly two type-I arcs in total. Their other endpoints are on $P\cap S$, away from $K$, and can be taken distinct by a small foot perturbation on $S$. Thus their union consists of two disjoint embedded arcs, as asserted. All choices and all moves after the stated smooth suppliers were finite. [F3, F4, step 2.1, step 3.1, step 3.2, step 4.1, step 7.1, construct] ∎

## References

[Negami–Okita, Lemma 3-3, printed pp.259–262](https://www.researchgate.net/publication/243080042_The_splittability_and_triviality_of_3-bridge_links). Their categories are PL; the disk-product supports, smooth corner rounding and smooth isotopy extension above provide the smooth moves used here. The three modifications are described by their supports and effects, without using the figures as proof.

[Jaco, Chapter II, printed pp.21–22](https://www.maths.gla.ac.uk/~mpowell/Lectures-3-mfld-topology_Jaco.pdf). The required finite planar count is proved in step 6.1.
