---
id: lem-minimal-annular-boundary-cuts-have-embedded-peripheral-lift-trees
kind: lemma
title: "Minimal annular boundary cuts have embedded peripheral lift trees"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-boundary-incompressible-pl-surfaces-have-injective-doubles-and-boundary-lift-trees
  - lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position
  - lem-finite-super-hierarchies-carry-annular-torus-and-square-cut-data
  - lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - thm-covering-maps-inject-fundamental-groups
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. B. A. Epstein, Curves on 2-manifolds and isotopies"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/6005-11511_2006_Article_BF02392203.pdf
      locator: "Actualfull1.6 and2.5/printed84–85,89 read; disk descent and innermost lifted-bigons are used with the explicit one-intersection check below. The original2.5 proves the homotopic case, not the whole new conclusion by citation."
---

## Statement

Assume the manifold and nondisk surface hypotheses of [[lem-boundary-incompressible-pl-surfaces-have-injective-doubles-and-boundary-lift-trees]]. Let $P$ be a finite disjoint union of injective annuli and whole torus components in $\partial M$. Put $C=\partial F$ in the actual peripheral position of [[lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position]]: all components parallel to $\partial P$ lie inside $P$, and the number of components of $C\cap P$ is minimal subject to this condition. Let $X\to M$ be the universal cover and $T$ the dual tree of the lifts of $F$.

For every connected lift $L$ of a component of $P$, each lifted surface meets $L$ in at most one connected boundary line or spanning arc. The graph $S_L$ dual to those intersections inside $L$ embeds as a nonempty connected subtree of $T$. It is invariant under the full deck stabilizer $G_L$ of $L$, the conjugate peripheral group. Its vertices correspond to the actual lifted components of $P$ cut along $C$, including rectangles. For its vertex $w$ represented by the region $R$ in the global cut component $X_w$,
$$G_L\cap\operatorname{Stab}(X_w)=\operatorname{Stab}(R),$$
and this is precisely the conjugate group of the corresponding annulus, torus or rectangle downstairs. In particular it is trivial or infinite cyclic except when that region is an unchanged torus marking. No pared cylinder axiom or given peripheral graph is an input.

## Facts & Assumptions

**Given:** The actual boundary-injective manifold, essential surface, minimal-position boundary marking, universal cover and cut tree in the Statement.

[F1] Each lift of $F$ meets each boundary lift in at most one line, and the boundary dual tree embeds in the global cut tree. [[lem-boundary-incompressible-pl-surfaces-have-injective-doubles-and-boundary-lift-trees]]

[F2] Essential surface circles have infinite order. Universal covers of positive-genus closed oriented surfaces are planes. A disk in such a cover whose boundary projects injectively also projects injectively, and innermost bigons can be cleaned for two finite curve families. These are the actual compact-core/disk-descent and finite-family constructions in [[lem-finite-pl-peripheral-multicurves-admit-minimal-annular-position]], Proof1.1–8.1.

[F3] In the specified minimal position annuli are cut into annuli or labeled rectangles, and tori into annuli or the unchanged torus. All retained annuli/tori inject in the cut piece. [[lem-finite-super-hierarchies-carry-annular-torus-and-square-cut-data]]

[F4] Stabilizers of actual lifted subspaces with injective groups are the conjugate downstairs groups, by the covering path-lift construction; the actual cut graph is a tree. [[lem-finite-injective-surface-hierarchies-give-aspherical-pieces-and-annulus-map-control]] [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]] [[thm-covering-maps-inject-fundamental-groups]]

## Proof

1.1 The constrained minimum forbids every embedded bigon between $C$ and $\partial P$. Any such bigon contains an empty one for the whole two families by [F2]'s finite innermost-arc cleaning; essential closed family components cannot lie in its disk. The shore on $C$ belongs to a nonperipheral component, since the peripheral components already lie inside $P$ and miss $\partial P$. The empty-bigon push therefore preserves all peripheral-circle placement. It removes two crossings and reduces the number of arc components of $C\cap P$ by one. The closed intersection components cannot change: a nonperipheral circle cannot become a core circle inside an annulus, and the peripheral circles stay inside. Thus it contradicts the stipulated minimum. [F2, F3, given, construct]

2.1 Here is the needed lifted-bigon consequence for arbitrary two essential circle components $c,d$, not only homotopic ones. If a pair of their lines in the universal plane intersect more than once, planar innermost-arc separation supplies a bigon. Choose innermost shores successively with respect to all lifts of $c$ and $d$; this yields a disk whose interior and open shores miss the opposite lifted family. If $c,d$ have at least two intersections downstairs, neither shore can wrap once around its base circle, because it would then meet another lift of the opposite family. Their projected corners are also distinct for that reason. Their boundary projects injectively, and [F2]'s disk descent gives an embedded downstairs bigon. If the two base circles have exactly one intersection, two points on the same pair of lifted lines would project to that same crossing. The unique deck transformation taking one point to the other preserves both lines and is nonidentity. It represents nonzero powers $c^m,d^n$ in the two infinite cyclic line stabilizers. In homology this gives $m[c]=n[d]$, up to the chosen orientations. Algebraic intersection with $[c]$ gives $0=\pm n$, since the single transverse crossing has sign $\pm1$, a contradiction. The signed-intersection cocycle is defined by orienting the transverse edge crossings; its triangle boundary evaluations cancel, so this calculation is valid in the finite triangulation. Zero base intersections give no lifted crossings at all. Therefore absence of downstairs bigons implies that any two such lifted lines meet at most once. [F2, F4, step 1.1, given, construct, algebra]

3.1 A lift $L$ of an annular $P$ is a closed strip in the universal plane $B$ of its incident boundary component: peripheral injection into $M$ implies injection into that boundary component, and then [F4] identifies this lift as the universal annulus cover. Its two boundary lines are lifts of $\partial P$. A lifted $C$ line belonging to a peripheral component lies wholly in one such strip, by the initial placement. For any other lifted $C$ line, its intersections with this strip are lifts of the spanning arcs from [F3]. If there were two, it would meet one of the strip's boundary lines twice, contrary to steps1.1–2.1. Thus its intersection with $L$ is either empty or one proper spanning arc. A torus component of $P$ is the entire boundary component, so its lift is $B$ itself and needs no strip argument. By [F1], one global lifted surface supplies at most one $C$ line in $B$. Hence it meets $L$ in at most one connected arc or line. [F1, F2, F3, F4, step 1.1, step 2.1, given, construct]

4.1 All these disjoint arcs or lines separate the strip or plane $L$. Their graph of complementary regions is connected by reading paths in $L$, and has no cycle by separation, exactly as for the cut tree. It is nonempty even when there is no intersection, when it consists of one vertex. Each edge maps to the corresponding global lifted surface, and step3.1 makes its global edge image unique. The path between different vertices therefore cannot map to a nonempty closed walk in the global tree: that would use distinct edges in a closed walk. It follows that this dual graph embeds in $T$, with connected subtree image $S_L$. [F1, F4, step 3.1, given, construct]

5.1 The stabilizer $G_L$ acts on this subtree because it preserves $L$ and the full lifted surface family. If $g$ preserves both $L$ and the global cut component $X_w$, it sends its region $R$ in $L$ to another region mapping to the same global vertex. Injectivity of the subtree in step4.1 forces that region to be $R$. Conversely preservation of $R$ preserves its unique connected peripheral lift $L$ and its incident cut component. This proves the exact displayed intersection equality. The path-lift rule of [F4] identifies $\operatorname{Stab}(R)$ with the conjugate group of its downstairs cut component of $P$; this also follows by lifting loops in that component and joining a point of $R$ to its translate inside $R$. Rectangles have trivial group, annuli infinite cyclic group, and an unchanged torus has its original rank-two group, exactly as in [F3]. [F3, F4, step 4.1, given, construct]

6.1 There is no hidden peripheral graph assumption in these identifications: the regions and their arcs are the actual cuts in $L$, the tree was constructed geometrically, and the intersection of stabilizers was proved in step5.1. If a torus region survives, its original torus had no cutting curve, so $S_L$ has just that one vertex. If a torus is cut, every region is annular and every vertex stabilizer in $G_L$ is cyclic. These observations include arbitrary parallel annular components of $P$; no nonparallel-component convention was imposed. [F3, step 3.1, step 4.1, step 5.1, given, construct] ∎

## Scope

This is the local peripheral-tree theorem for a single boundary-injective cut. It is not a full relative Waldhausen/Johannson marking theorem. The full cylinder axiom after cutting still requires tracking the given homotopy, which is done in the pared-cut theorem rather than inferred from embedded-annulus existence.
