# Pure-double geometry for a reduced alternating one-boundary tangle

New author-stage geometric unit, frozen for FIRST review, 2026-10-21. No accepted proof is reopened. This is independent of the pending adequate-minimality proof and does not adopt that consumer. It supplies the actual doubling/state geometry asserted in Thistlethwaite1991, Theorem3.1.

## Primary input inventory and exact scope

Actually read Thistlethwaite1991 pp318–325 in the prior full-paper reading, and directly inspected the enlarged Figure4/Theorem3.1 page324 for this unit. Definition2.1 (p318) gives a tangle in a closed-up punctured sphere with four endpoints per boundary component; Definition2.2 (p319) gives inessential crossings and reducedness, with the separate standing exclusion of nugatory crossings. Here there is EXACTLY ONE boundary component: X is a ball and the projection domain Delta is a disk. The primary1988 adequate-link definition on p289 was directly inspected for the two-state/no-one-edge-loop convention. No statement about arbitrary multiply punctured tangles, MT NORMAL tangles, rigid graph substitutions or their sphere essentiality is made.

Input D is a finite alternating tangle diagram in a disk Delta, transverse to its boundary at exactly four points p1,p2,p3,p4 in cyclic order. It may have closed components, and its shadow need not be connected. Crossings are transverse, with over/under markings. There is no nugatory crossing (an interior circle meeting the diagram only through that crossing), and there is no inessential crossing: no proper arc in Delta, both ends on its ONE boundary circle, meeting D only at the crossing and separating its four germs into two adjacent pairs. These are precisely the two exclusions used below. At least one crossing is required when calling the output ADEQUATE in the1988 definition; the zero-crossing case is recorded separately.

Export: the actual pure double has exactly2n crossings, satisfies BOTH adequacy state conditions when n>0, and its actual pair type and induced marking depend only on the tangle pair, with no arbitrary permutation/twist of the four ports.

## The actual pure-double operation

Let r take Delta to an oppositely oriented copy barDelta by reflection, carrying each pj to a labelled barpj. Reflect the diagram in the projection plane and KEEP its over/under marks. Glue pj to barpj for EACH j, using product collars of the boundary strands and with no extra twist or crossing. Equivalently identify the entire two boundary circles by the reflected identity. The two disks form a projection sphere. The resulting closed diagram is denoted Doub(D). It has exactly n+n crossings: the collar identifications introduce none.

This is the diagram of the pure double pair

`(X union_id barX, T union_id barT)`.

One may model each ball by a rounded disk-times-height neighborhood, with the four ends at boundary height0. The reflected disk and the unchanged heights reverse the ball orientation, as required for the second side of its double. The boundary product collars identify the four actual end germs pointwise. A nontrivial four-punctured-sphere gluing or a different permutation of the ports is NOT part of this construction. The label order on the reflected disk read with its own positive orientation is reversed, but pj still glues to barpj, not to a newly chosen label.

If h:(X,T)->(X',T') is an actual pair homeomorphism, use h on BOTH copies. At a boundary point the two formulas agree because each double uses the identity gluing. Thus h union h descends to an actual homeomorphism of doubled pairs. If h permutes the four endpoints, it applies the SAME permutation on both sides. This proves invariance of the doubled link type and carries its actual induced component/endpoint marking; it does not choose an unmarked replacement symmetry. If the tangle is oriented, orient the second copy with the REVERSE direction on each corresponding component, so that an outgoing end of the first arc joins an incoming end of its second copy (closed components can use the same fixed reversal convention). These directions give the doubled oriented link. When h preserves the oriented pair, h on the reversed copies also preserves their reversed directions, so its doubled map preserves these induced orientations. This is the equivalence interface used in a later crossing-minimality consumer.

## Two local states, reflection and the finite port readout

For clarity call the two usual states A and B; interchanging their names does not affect two-sided adequacy. In an oriented chart where the over-strand is horizontal, label its radial directions E,W and the under-strand N,S. A resolves as (N,E) and (S,W); B resolves as (N,W) and (S,E). Rotate the chart orientation-preservingly at other crossings. Reflection E<->W, with over/under unchanged, exchanges A and B. Consequently

`A(Doub(D)) = A(D) glued to r(B(D))`,

`B(Doub(D)) = B(D) glued to r(A(D))`,

with the SAME physical gluing pj=barpj. This explicitly accounts for the generally nonalternating double; it is not an appeal to adequacy of an alternating closed diagram.

Each fully resolved relative state is an embedded one-manifold in Delta, hence has exactly two proper open arcs and a finite collection of closed circles. The open pairing is one of

`P=(12)(34)` or `Q=(14)(23)`;

the interleaved pairing (13)(24) cannot be disjointly embedded in a disk (one joining arc separates the other two endpoints). These pairings are READ from the actual finite diagram: trace its edge records through the specified smoothing at every crossing until reaching another boundary port or returning to the first record. There is no chosen sewing permutation.

Write aij for an A-state open arc joining pi,pj and bij for the corresponding B-state arc; subscripts describe its two ends, not an orientation constraint. In the global A-state the boundary-touching state circles are exactly:

| Actual A pairing | Actual B pairing | Closed boundary-port walks after the reflected identity gluing |
| --- | --- | --- |
|P|P|a12 followed by reflected b21; separately a34 followed by reflected b43|
|P|Q|a12, reflected b23, a34, reflected b41 (one circle)|
|Q|P|a14, reflected b43, a32, reflected b21 (one circle)|
|Q|Q|a14 followed by reflected b41; separately a23 followed by reflected b32|

For the global B-state interchange a and b. Every internal closed state circle of either half survives as a SEPARATE circle; boundary gluing identifies only the ends of open arcs. The next argument earns the property which makes this complete four-row readout adequate.

## Alternation makes relative state arcs follow one region

Checkerboard-color the complementary regions of the proper disk diagram. Such a coloring exists: the parity of intersections with a path is well-defined, since a closed interior curve encloses only even-valent crossing nodes and hence meets the diagram evenly. The boundary endpoints lie outside this parity count. Adjacent regions across a strand receive opposite colors.

For a fixed connected component of the diagram SHADOW, all A-resolutions turn around the same color and all B-resolutions around the opposite color. Here is the finite local check, rather than a homogeneous-sign assertion without its hypothesis. Orient an edge from one crossing x to its next crossing y. Let b be the color bit of its left-hand region. At x the halfedge is outward; at y its outward direction is reversed, so its left color bit is1-b. In the horizontal-over chart above, the A-turning corners are black iff the outward halfedge's over/under bit o agrees with its left black bit; this is checked on the four radial directions E,N,W,S. Alternation gives o(y)=1-o(x). Therefore `o(x)=b` iff `o(y)=1-b`: the A-turning color is unchanged across this edge. Propagate along the finite shadow component. Different shadow components may have different A-colors; the proof does not impose global homogeneity on disconnected D.

Push each resolved segment slightly into the color corner around which it turns, and each edge segment slightly toward that same adjacent region. Every connected component of this state remains next to a SINGLE actual complementary region of D. It cannot jump to another shadow component or another region while following the edge/smoothing records. A region may have several boundary components and yield several state circles; uniqueness of the circle per region is NOT asserted or needed.

It follows in particular that if the two opposite turning regions at a crossing are distinct, the two resolved segments there belong to different RELATIVE state components. Also, a state segment following an interior region (a region with no boundary interval of Delta) belongs to a closed state circle: an open state arc would terminate at a port and thereby make that region incident to a boundary interval. Proper endpoint collars ensure that touching a port cannot be an exceptional isolated boundary contact without an incident interval.

## What the two reducedness exclusions earn

Fix any crossing x and either color. Let R,S be its two opposite sectors of that color, considered as actual global regions.

First R and S are DISTINCT. Otherwise choose a simple arc in that one region joining two points of the opposite sector intervals on a small crossing disk. It can be chosen outside that disk: simplify a region path by deleting excursions through the separate sector collars. Close it by the diameter through x in the two opposite sectors. The result is a simple interior circle meeting D only at x, with two adjacent crossing germs on each side. It is a forbidden nugatory crossing. This construction avoids every other component of D because the region path lies in the actual complement of the entire diagram.

Second R and S cannot BOTH meet the boundary of Delta. If they did, choose simple region arcs from their crossing sectors to boundary-interval points, avoiding the four tangle endpoints. Such finite piecewise-smooth arcs exist by path connectedness of each planar region; a polygonal path may be simplified to an embedded arc. Since R and S are distinct their two arcs are disjoint. Join their crossing ends through x in the two opposite sectors and round the joins. This is a proper embedded arc in Delta, with both ends on its SAME boundary component, meeting D only at x and locally separating its four germs into adjacent pairs. It is exactly an inessential crossing in Definition2.2. No primeness, pairwise-essential Conway sphere or normal-tangle claim is used here. The ONE-boundary hypothesis is essential to this implication; on different boundary components that arc would not be forbidden by the stated definition.

Thus for EACH color, the opposite regions at x are distinct and at least one is interior. Combining this with the state-region readout proves the following strong relative property for BOTH resolutions of EVERY crossing:

**The two local resolved segments lie on distinct relative state components, and at least one of those components is a CLOSED circle missing all four boundary ports.**

This is stronger than relative non-looping alone and is precisely what is needed when different open arcs are joined by the opposite state's pairing.

## Adequacy of both actual doubled states

Take a crossing in the original half of Doub(D). In its global A-state it uses the original A-resolution. By the strong relative property, one local segment lies on an internal closed A-circle C and the other lies on a different relative component C'. Identity gluing at boundary ports does not touch C at all. It may join C' to other OPEN components according to the table, but it cannot join C' to C. Hence the two crossing segments belong to different global A-state circles.

At a crossing in the reflected half, the same global A-state uses the reflected original B-resolution. Apply the same strong relative property for B; again its closed witness cannot be merged by port gluing. This covers ALL2n crossings in the global A-state. Interchange A and B and repeat to cover all crossings in the global B-state.

Therefore neither state graph has a one-edge loop: each edge corresponding to a crossing joins two distinct state circles in each state. When n>0 this is exactly both one-sided adequacy conditions of the actual1988 definition, so Doub(D) is ADEQUATE, without any assertion that it is alternating. If n=0, both state conditions are vacuous and the doubled diagram has0 crossings; no claim that it meets that source's explicit positive-crossing adequacy terminology is needed.

## Export boundary

The geometric output is now literal: reflection with unchanged over/under marks; port identity j-to-j; exact complementary-state pairing table; distinct state circles at every crossing; and functorial doubling of the actual pair equivalence. The tangle has one boundary sphere/four ports, is alternating and has BOTH reducedness exclusions. It is not an arbitrary four-port embedding or a multiply punctured tangle.

Adequate NONALTERNATING crossing-minimality is a separate pending supplier. Once it is actually adopted, the usual consumer compares this2n-crossing adequate double with the2m-crossing pure double of any equivalent diagram. No such minimality adoption or full MT consumer closure is made in this geometric unit.
