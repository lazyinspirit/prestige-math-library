---
id: lem-empty-plate-folds-admit-finite-pl-removal
kind: lemma
title: "Empty plate folds admit finite PL removal"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-normal-handle-cuts-strictly-decrease-finite-complexity
  - lem-finite-polygonal-disk-and-collar-surgery
  - lem-parametrized-pl-balls-absorb-standard-boundary-windows
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Horst Schubert, Bestimmung der Primfaktorzerlegung von Verkettungen"
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN266833020_0076/LOG_0022.pdf
      locator: "§2.2, ninth step, printed122–123, full passage and figures10–11 viewed; the empty-ball mechanism is specified below."
    - title: "Friedhelm Waldhausen, On irreducible 3-manifolds which are sufficiently large"
      url: https://homepages.math.uic.edu/~kauffman/Waldhausen.pdf
      locator: "§2.3 after the normal-position clauses, printed63, actual full passage and image read; describes the additional adjacent marked/free half-fold."
---

## Statement

Use a finite coherent PL ball–beam–plate decomposition with the conventions in [[lem-normal-handle-cuts-strictly-decrease-finite-complexity]]. Let $F$ be a finite properly embedded locally flat PL surface which misses three-handles, meets each plate in full layers $D\times\{t\}$ at interior levels, and meets each beam in product strips $I\times K$ for disjoint proper polygonal arcs $K$. All its layers and strips agree under the supplied common product coordinates. No normality of its zero-handle portions is needed here.

Consider a beam $I\times D_B$, one marked arc $d_0$ corresponding to a plate $P=D_P\times[0,1]$, and one arc $k\subset K$. Suppose $k$ cuts off a disk $E\subset D_B$ with $\operatorname{int}E\cap K=\varnothing$, in one of these two configurations.

1. The other boundary arc of $E$ is a subarc of the interior of $d_0$, with endpoints at plate levels $0<t_1<t_2<1$. This is a full fold.
2. The other boundary path of $E$ consists of a subarc of $d_0$ from its level-zero endpoint to a point of level $0<t<1$, followed by an arc in the adjacent gap. The gap side $I\times(\partial E\setminus(k\cup d_0))$ lies in $\partial M$, and the plate end $D_P\times\{0\}$ lies in $\partial M$. There is no other marked arc on this boundary path. This is a half-fold. Reversing the plate interval covers the corresponding level-one case.

There is an ambient PL isotopy of $M$, preserving $\partial M$ setwise, after which $F$ is disjoint from the interior of the corresponding plate slab $D_P\times[t_1,t_2]$ or $D_P\times[0,t]$; all other plate layers remain the same. The full-fold move removes exactly two of this plate's layers and the half-fold move exactly one. The isotopy is supported near the union of that slab and $I\times E$, with arbitrarily small collars in adjacent handles. It preserves the surface's component types and all its incompressibility properties.

This assertion does not state that the resulting beam and zero-handle portions are already straightened again, or that an arbitrary surface has the input position. The half-fold's free-end hypotheses are actual geometric hypotheses, not an inference from a picture.

## Facts & Assumptions

**Given:** The finite product handles, actual surface layers and strips, and empty disk $E$ specified in the Statement.

[F1] Finite polygonal disks and their embedded arcs admit parametrizations, strips and finite PL disk gluings. [[lem-finite-polygonal-disk-and-collar-surgery]]

[F2] Two parametrized PL balls glued along boundary disk windows form a parametrized ball. Boundary disk maps and sphere maps extend over parametrized balls by finite coning. [[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]

[F3] The finite PL faces used here have collars, which can be chosen sufficiently small in their supplied local product charts. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

[F4] Beam and plate product coordinates agree on common rectangles. [[lem-normal-handle-cuts-strictly-decrease-finite-complexity]]

## Proof

1.1 In the full-fold case glue the ball $I\times E$ to the slab $D_P\times[t_1,t_2]$ along their common rectangle $I\times(\partial E\cap d_0)$. This rectangle is a boundary disk of each ball, and their given coordinate maps agree by [F4]. Thus their union $W$ is a parametrized ball by [F2]. The other parts of their boundaries have distinct labels, even where their rims meet zero-handles. The surface on this ball's boundary contains the two slab-end disks joined by the strip $I\times k$; denote their union by $A$. Joining two disks by one rectangle along one interval on each disk gives a disk: triangulate the three pieces and read the outer boundary, or use the disk-and-strip parameters in [F1]. Hence $A$ is a parametrized boundary disk of $W$. Its complementary boundary disk $R$ is also parametrized: in the explicit two-ball window model of [F2], it consists of the unused slab-side rectangles and the two end disks $\partial I\times E$, glued along their labeled side intervals. It is the other disk in the boundary sphere cut by $\partial A$. [F1, F2, F4, given, construct]

2.1 There is no additional surface in $\operatorname{int}W$. The beam part is empty by $\operatorname{int}E\cap K=\varnothing$. If there were an intermediate plate level $s\in(t_1,t_2)$, its endpoint on the marked arc would lie strictly between the endpoints of $k$. The strip of $K$ incident to that point cannot leave $E$ across $k$, because the arcs are disjoint. Its other endpoint must therefore lie on the same marked subarc, so that strip would have interior in $E$, a contradiction. This also excludes every other plate layer in that slab. No zero-handle interior lies in $W$. Thus the entire surface intersection with $W$ is the disk $A$ on its boundary, together with its labeled attaching rims; on the rest of $\partial W$ it has no additional interior patch. [step 1.1, given, construct]

3.1 An empty ball bounded in part by a surface disk permits a disk replacement by ambient isotopy supported in the ball and a collar: parametrize its two boundary disks as opposite disk faces of a ball, extend their common rim parameters over the two faces and then over the ball using [F2], and move the first disk across the ball to a small inward parallel of the second. In the convex model this is the sweep of disk sections from one cap to the other, keeping its boundary in a narrow fixed rim collar; triangulate the finite prism of that sweep to make it PL. Extend to a slightly larger collared ball, fixed on its outer boundary, by coning the matching disk-and-collar maps; the Alexander interpolation of that boundary-fixed ball homeomorphism is an ambient isotopy. All extensions match on the fixed outer collar by [F2]. Apply this replacement to $A$ across the empty $W$ from step2.1. Near the unused slab-side faces, push the replacement slightly into the adjacent handles, rather than into the slab. The collars there miss all other layers because they are finite and disjoint; take them smaller than the minimum of their positive chart separations. The surface consequently misses the slab interior and its two old end layers have disappeared. Its portions in other plate interiors and at all other levels are unchanged. [F2, F3, step 1.1, step 2.1, given, construct]

4.1 In the half-fold case form $W$ by gluing $I\times E$ to $D_P\times[0,t]$ along their common rectangular window. Again [F2] makes it a parametrized ball. Now $A=(D_P\times\{t\})\cup(I\times k)$ is one disk, because one rectangle attached to a disk along one interval leaves a disk. The part $B$ in $\partial M$ is the level-zero disk together with the gap-side rectangle of the beam; it too is a disk. The disks $A$ and $B$ meet in the single arc $I\times\{q\}$, where $q$ is the unmarked endpoint of $k$. Thus $A\cup B$ is a boundary disk of $W$, with complementary boundary disk $R$. Empty interior follows as in step2.1: any plate level $0<s<t$ supplies an endpoint on the marked subarc of $E$, whose incident strip would have to enter $\operatorname{int}E$. [F1, F2, F4, step 2.1, step 3.1, given, construct]

5.1 The empty-ball replacement has a boundary-preserving version for precisely this single boundary-disk patch $B$. Map the parametrized pair $(W,B)$ to a half-ball with its flat boundary disk by first matching the two boundary disks $B$ and $\overline{\partial W\setminus B}$ on their common circle, and extending this sphere map over the ball by [F2]. In that half-ball the replacement of $A$ by a parallel of $R$ sweeps its one boundary arc across the flat disk, preserving the flat boundary setwise. Extend the sweep over a narrow collar in the ambient half-space; the same finite disk-and-collar extensions as in step3.1 give a homeomorphism fixed on the free outer boundary, and Alexander interpolation about a point in the flat boundary keeps that boundary invariant throughout. Transport back. By the given local product charts, $B$ is exactly the part of $W$ on $\partial M$; any further boundary contact is along its rims. The replacement therefore gives an ambient isotopy preserving $\partial M$. Push its new disk into the adjacent-handle collars along the unused slab sides, as in step3.1. The old level-$t$ layer disappears and no other plate layer changes. [F2, F3, step 3.1, step 4.1, given, construct]

6.1 Both constructions are supported in the displayed finite ball and arbitrarily thin adjacent collars, where emptiness was checked. A preliminary sufficiently small collar push separates the replacement from its own old rims; all moves extend over finite compatible subdivisions. The resulting isotopy carries the whole original surface, so its component types and existence or nonexistence of compression disks and compressing annuli are preserved by transport. It removes the specified two or one full layers and changes no other plate interior. Re-straightening beam pieces and controlling repeated moves require separate arguments; neither is assumed in the conclusion just proved. [F3, step 3.1, step 5.1, given, construct] ∎

## Scope

This is a local empty-fold removal, including the adjacent marked/free case. A return to a single free gap can instead require boundary compression, and is not covered by this isotopy assertion. Finite global normalization and the existence of the required empty input disks remain separate. No pared hierarchy, termination or original hyperbolization claim is inferred.
