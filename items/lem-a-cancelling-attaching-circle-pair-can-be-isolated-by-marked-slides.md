---
id: lem-a-cancelling-attaching-circle-pair-can-be-isolated-by-marked-slides
kind: lemma
title: "A cancelling attaching-circle pair can be isolated by marked slides"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - lem-a-local-cancelling-one-two-pair-is-a-knot-disjoint-genus-stabilization
  - lem-supported-neat-proper-isotopies-extend-boundary-preservingly
  - lem-empty-cut-ball-births-erase-to-balanced-disk-slides
  - lem-broad-compression-comparisons-preserve-retained-disks-and-smooth-local-moves
  - lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Proposition2.2 discussion, printed6–7: a cancelling one/two pair is a stabilization after slides; the actual finite marked cleaning is supplied here"
---

## Statement

Assume Countable Choice. In a balanced multipointed knot Heegaard diagram, let actual compression disks $D_a\subset U_\alpha$ and $D_b\subset U_\beta$ belong to the two supplied systems, with boundaries $a,b$ meeting transversely exactly once. Then finitely many marked disk slides and curve isotopies, retaining $D_a,D_b$, make every other attaching circle disjoint from both $a,b$. The bands lie along parallel copies of subarcs of $a$ or $b$ and avoid all marks and the actual knot.

The resulting pair is supported in a knot-disjoint ball: that ball meets the Heegaard surface in a once-punctured torus with meridian $a$ and longitude $b$, and misses all other compression disks. Replacing its standard genus-one splitting by the disk splitting is a permitted genus destabilization. The result is balanced, with the same ordered pairs and actual trivial arcs, genus one less and one fewer disk in each system. The original diagram is therefore related to a genus stabilization of this result by marked slides and isotopies. The same isolation statement holds for extended cut-ball systems allowing empty balls; their balanced forest reductions are related by the corresponding finite balanced moves.

## Statement references

[[def-admissible-pointed-heegaard-floer-data]]

## Facts & Assumptions

**Given:** The actual proper compression disks and transverse attaching systems, with $|a\cap b|=1$ and all marks and actual knot arcs disjoint from the disks.

[F1] The balanced and simultaneous bridge-disk conditions are those of [[def-admissible-pointed-heegaard-floer-data]]. Curve intersections between different systems are transverse and finite.

[F2] The explicit untwisted meridian/longitude tube and bridge-disk model is a knot-disjoint genus stabilization; cutting its meridian and bridge disk restores the old cut balls and bridge systems. ([[lem-a-local-cancelling-one-two-pair-is-a-knot-disjoint-genus-stabilization]])

[F3] Neat proper-disk isotopies have supported boundary-preserving extensions. Finite face corners may first be rounded in their product collars. ([[lem-supported-neat-proper-isotopies-extend-boundary-preservingly]])

[F4] Actual disk band sums preserve extended cut-ball systems and their actual arc data, and arbitrary balanced forest reductions of a finite extended move sequence are related by finite balanced slides and isotopies. ([[lem-empty-cut-ball-births-erase-to-balanced-disk-slides]])

[F5] Clean simultaneous witnesses first, and compare the broad compression family with neat disks by a boundary-fixed homeomorphism. Its off-rim smooth replacement restores completed new disks smoothly while retaining every other ORIGINAL disk exactly. A comparison stabilization ball whose boundary misses all old disks pulls back to a smooth ball with the same relative splitting, using a smooth replacement near that boundary, without asserting smooth conjugacy through the old tangent disks. ([[lem-broad-compression-comparisons-preserve-retained-disks-and-smooth-local-moves]], [[lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system]])

## Proof

**Given:** The systems and distinguished disks in the Statement.

1.1 Apply [F5] to both full systems, cleaning witnesses before neat preparation. Perform the following band and product constructions in that auxiliary NEAT comparison, which fixes the surface, all attaching circles, actual arcs and labels. Each completed new band-sum disk is chosen disjoint from the ENTIRE old prepared family with exterior rim off every old rim. It pulls back smoothly by [F5], with all retained original disks, in particular $D_a,D_b$, restored exactly. Thus the following surface intersection count is the actual one. Let $P=a\cap b$. If $b$ meets another lower attaching circle, choose an intersection $Q$ for which the open subarc $\gamma$ of $b$ from $P$ to $Q$ contains no lower attaching intersection. Such a choice exists: traverse either direction from $P$ until the first other intersection, in the finite ordered intersection list. A thin band along $\gamma$ joins that other circle $c$ to $a$. Its interior misses every lower circle and every mark. At each end take its attaching interval centered at the indicated intersection. Replace $D_c$ by its boundary band sum with a parallel copy of $D_a$, and round the two band corners. The band may be drawn on either side of $\gamma$, using the corresponding side of the parallel disk. In a rectangular collar of $\gamma$, the two intersections at its ends disappear from the boundary of the band sum: the new boundary runs along the two parallel long edges of the rectangle and the remaining parts of $c,a$. The remaining part of the parallel of $a$ misses $b$, because the only $a$ intersection was $P$ and its interval was removed. Thus the new circle has exactly one fewer intersection with $b$ than $c$ had. No other old lower circle changes. The original $a$ stays in the system and still meets $b$ once. A sufficiently thin band and parallel disk avoid the actual knot, which is disjoint from both disks and the compact boundary arc. This is an actual proper-disk slide, with its product band collar, so [F4] preserves the full compression and bridge data. [F5, F1, F3, F4, given, construct]

2.1 Repeat step1.1. The nonnegative integer counting intersections of $b$ with lower circles other than $a$ decreases by one each time, so finitely many slides remove them all. Now apply the dual procedure: for the first intersection of $a$ with an upper circle $d\ne b$ along an intersection-free subarc from $P$, slide $D_d$ over a parallel of $D_b$ along that subarc. It removes one intersection with $a$. Throughout this second procedure the lower circles are unchanged, and $a$ remains disjoint from every other lower circle. The bands along $a$ and parallel copies of $b$ therefore miss all those lower circles as well. Hence the previous cleaning is retained. Finitely many dual slides leave every other upper circle disjoint from $a$, while the same-system disjointness already makes it disjoint from $b$. All lower circles miss $a$ by same-system disjointness and miss $b$ by the first procedure. The pair $a,b$ and all marks stayed fixed. [F5, F1, F4, step 1.1, construct, algebra]

3.1 Take a thin closed surface neighborhood $T$ of $a\cup b$, disjoint from every other curve and all marks. At their single crossing the four half-edges alternate. A small disk there with the two rectangular edge collars therefore has one boundary component and two surface one-handles; its Euler characteristic is $1-2=-1$, so it is a once-punctured torus. In the auxiliary NEAT comparison, thicken the prepared images of the actual disks $D_a,D_b$ on their respective sides and the common crossing chart. This gives a ball $B$ with $B\cap\Sigma=T$, after rounding its boundary. The ball assertion has a direct product construction: each thickened disk is $D^2\times[-\epsilon,\epsilon]$, hence a ball; their only overlap is the small crossing box, also a ball, with a disk attaching face on either piece. Absorbing the common box collar glues the two remaining ball pieces along a disk. A disk collar flattens such a gluing to a ball. The boundary collars along $a,b$ supply its intersection with the surface. Since other lower disks are disjoint from $D_a$, other upper disks from $D_b$, and all their boundary curves miss $T$, compactness permits these thickenings to miss all other compression disks. The actual knot is disjoint from $D_a\cup D_b$ and $T$, so $B$ misses it as well. Choose the entire boundary of this comparison ball disjoint from the ENTIRE old prepared disk family, with the pair in its interior except for its displayed surface intersections; this is achieved by the same thin thickening and compact separation just used, and the two distinguished disks lie strictly inside the respective half-ball pieces. Its surface exterior circle misses every old rim. Now pull back the ball by [F5]. Its boundary and a two-sided collar have a smooth ambient replacement $G$ preserving both handlebodies and fixing the original surface pointwise. Consequently the pullback is the smooth ball $G^{-1}B$ and has the same relative splitting. Separately the homeomorphism restores the actual retained $D_a,D_b$ INSIDE that ball and every other actual disk OUTSIDE it. A smooth map through the tangent distinguished disks was neither supplied nor used. [F5, F1, F3, step 2.1, construct]

4.1 First use the product coordinates of the auxiliary neat ball in step3.1: there the prepared lower disk is its meridian and the prepared upper disk is the truncated bridge disk crossing it once. Transfer the relative SPLITTING model to the actual ball with the smooth replacement $G^{-1}$ from that step; do not transfer a claimed smooth disk-germ identification. The two rectangular collars at the single crossing give exactly the tube and longitudinal segment of [F2]; choosing their disk-normal coordinates supplies the framing. There is no integer twist to choose independently: the longitude is the boundary of the actual supplied disk $D_b$, and the coordinate identification follows that disk collar throughout. Thus this local splitting is the standard genus-one splitting relative its boundary disk. Replace it by the genus-zero disk splitting, leaving the complement of $B$ fixed, and delete $D_a,D_b$. By [F2]'s explicit cut-and-cap calculation, the cut balls on each side and their actual arcs are unchanged up to the disk-collar identifications. Choose simultaneous witnesses outside the comparison ball as follows. Cut its lower piece along the distinguished prepared meridian: the punctured torus cut along that circle and capped by its two disk faces is a disk, so this piece becomes an empty boundary cap in the lower cut ball. The dual upper cut has the same description. Apply [F5]'s empty-disk boundary-subarc pushes and inward collar extensions in those cut balls. The resulting witnesses miss those caps and every old face, hence miss the comparison ball after reattachment; their boundaries miss all old rims. They pull back smoothly and stay disjoint from the actual ball and original retained disks. Thus the same collar calculation supplies actual bridge data after deletion. The genus decreases by one; the ordered pairs are unchanged; each system loses one disk, so $m-1=(h-1)+k-1$. This verifies the full balanced conditions after destabilization rather than only the surface genus. [F5, F1, F2, F3, step 3.1, construct, algebra]

5.1 Nothing in the finite cleaning or the local cut-and-cap calculation requires every cut ball to be occupied. For an extended system empty balls are simply carried along, so the same isolation and deletion work. If balanced reductions rather than the full extended systems are prescribed, apply [F4] to each actual slide and its reductions. For the isolated local pair choose reductions with the same rooted forests outside its ball, which is possible since the destabilization cut-and-cap leaves the cut balls and their occupancies unchanged. The reduced diagrams then undergo precisely that local genus destabilization; alternate forest choices add only the finite balanced slides of [F4]. Reversing gives the stabilization assertion. Countable Choice enters only through the stated collar and disk suppliers; the intersection-reducing operations and local coordinates are finite. [F5, F1, F2, F3, F4, step 1.1, step 2.1, step 4.1, construct] ∎
