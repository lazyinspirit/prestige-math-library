# Mixed reflection: finite disk construction and the remaining exploration check

**A2 remains unresolved.** The section-3 height-order inference is false.
The reproducible checked counterexample is
`first-hit-counterexample.py`, with actual output in
`first-hit-counterexample.jsonl`. In literal half-open side-28 boxes,
the first reflected hit is (30.5,13.5), the last return to u=28 is
(28,24), and the first path's right endpoint is (27,13). The required
last-return height inequality is reversed. Both exploration outputs are
disjoint and the preparatory event holds. The generator checks the exact
DFS outputs, all edge/parity/path constraints, and intersection order.
A closed side-24 version is retained too. This is a counterexample to
this first-hit surgery assertion, not to RSW. The dependent surgery and
closed-box gluing claims below are conditional and cannot close A2.

Research only. No item, manifest, import, readiness, or run-state changes.
The source actually inspected is Beffara--Duminil-Copin,
https://arxiv.org/pdf/1006.5073, Lemma 7 and Proposition 8, printed pp. 9--13,
in the complete local PDF/text in the parent directory. The lattice and
half-open rectangle conventions in those pages are essential.

This note supplies a precise reduced-graph version of Lemma 7 and a planar
cut lemma addressing the problematic marginal comparison in Proposition 8.
Section 6 proposes a fully finite primal depth-first exploration replacing
the source's medial exploration. Its one-sidedness proof is supplied for
owner checking. This is a research construction, not an acceptance receipt;
no independent check or production integration is claimed.

## 1. Lattice and the reduced disk

Let P be the embedded graph with vertices (i,j) in Z² of equal coordinate
parity and straight edges of displacement (±1,±1). Let D be its dual graph,
with opposite-parity integer vertices and the same edge displacements. The
dual edge e* crosses e at its midpoint. A bounded face of P is a diamond
whose centre is a vertex of D. Reflection s in u=c+1/2 interchanges P and D.
All edge labels are retained, including loops after vertex identifications.

Suppose a1,a2 are simple primal paths, respectively in u≤c and u≥c+1.
Their initial vertices are (c,h) and (c+1,b), with b<h. Require that a1
and s(a2) be disjoint and that their final vertices be axial nearest
neighbours (distance one). Also require a1 to meet u=c only initially and
a2 to meet u=c+1 only initially, except that a path of length zero is
allowed. These slightly explicit conditions are satisfied by the proposed
first-hit truncation when its ordering is proved; they are not assumed for
arbitrary source paths.

The four arcs a1,s(a2),a2,s(a1), connected at their ends by axial unit
segments and at their starts by the two horizontal unit segments, form a
simple Jordan polygon J. To check this, the two arcs on the left are
disjoint by hypothesis, the two on the right by reflection, and opposite
half-plane arcs cannot meet. The initial connectors lie in the empty strip
c<u<c+1. A unit axial connector between an integer primal vertex and an
integer dual vertex has no lattice vertex in its interior and no primal
or dual edge can meet its interior: a diagonal edge meets an integer
horizontal or vertical line only at an integer endpoint. Its endpoints
cannot be other path vertices because the paths are simple and disjoint.
The final connectors have the same property. Thus the listed intersections
are exactly the consecutive endpoints. The b<h ordering makes the central
strip between the two initial connectors belong to the bounded component.
Let Ω be J together with its bounded component; reflection preserves Ω.

Set V=P∩Ω, and let E contain precisely primal edges wholly in Ω. Delete
the edge labels of a1 and a2, obtaining E0. Contract all vertices of a1
to a vertex p1 and all vertices of a2 to a different vertex p2. Denote the
resulting finite plane multigraph by Gsep. Its embedding is obtained by
contracting each boundary path in a thin exterior collar, so no crossing is
introduced. This specifies the separate wiring exactly. Deleting the path
edges changes neither the marginal law on E0 nor any connection between
the two wired classes: those edges are loops after contraction and their
weights sum independently to p+(1-p)=1. The event C is an E0-open path
between p1 and p2; the boundary identifications themselves are not counted
as such a connection.

The abstract planar dual of Gsep has the following explicit description.
Its vertices are the dual sites strictly inside Ω, together with one vertex
o obtained by identifying **all** dual vertices on s(a1) and s(a2). Its
edges are e* for e∈E0. Here, o is the exterior face, rather than two distinct
vertices. For verification, any strictly interior dual site has its whole
primal diamond available: J cannot pass through a diamond interior except
along the dual arcs, and those have their centres on J, not strictly
inside. Every other face reaches the exterior through one of the dual
boundary arcs. Traversing such an arc identifies all its incident exterior
face sectors; the two arcs communicate in the unbounded complement of the
two separately contracted primal paths, hence belong to the same exterior
face. Boundary-path contraction preserves faces. Therefore each bounded
face is exactly one interior diamond, and the remaining face is o. This
also describes edges incident to o, dual loops, and parallel labels; no
boundary edge is silently added. Possible isolated primal vertices cause
no exception to this face description.

Reflection identifies this dual graph with the graph on the same reduced
edge space E0 in which p1 and p2 have additionally been identified. More
explicitly e* is sent to s(e*); the midpoint of the latter is the reflected
midpoint of e. If e∈E0, both adjacent dual centres are in Ω, possibly on a
dual boundary arc. Thus s(e*) is wholly in Ω and is not a deleted primal
boundary edge. The same statement applied twice proves bijectivity. The
interior dual vertices go to the nonboundary primal vertices, while o goes
to the union of both primal boundary paths. Call the resulting graph Gjoin.

## 2. Euler, dual law, and the constant

For completeness the only planar counting used here can be checked by
adding edges one by one. A forest edge joining different components lowers
the component count by one and creates no bounded face. An edge whose
ends are already connected creates exactly one bounded face, by Jordan
separation, and changes no component count. Loops fall in the second case.
Beginning with isolated vertices proves

    bounded_faces(A)=|A|-|V(Gsep)|+ksep(A).

The components of the complementary dual edge set A* correspond exactly
to the faces of the primal subgraph A: deleting a primal edge joins its
incident face sectors by its dual edge, and no other face sectors are
joined. Consequently

    kjoin(s(A*))=|A|-|V(Gsep)|+ksep(A)+1.       (R1)

This holds for a disconnected primal subgraph as well. With
p=√q/(1+√q), substituting (R1) in the finite FK weights shows that
the pushforward of φsep by A↦s(A*) is exactly φjoin: all configuration
dependent factors cancel, and the remaining factor is independent of A.

An E0-open connection between p1,p2 and an A*-open dual connection
between the two dual boundary arcs are complementary. One direct finite
proof is to attach source/target collars to the two primal arcs, take the
open source cluster, and trace its boundary. If the target is absent,
the boundary portion separating source and target joins the two dual
arcs and crosses only closed primal edges. Conversely a primal joining
path and this dual joining path intersect, so cannot both be open. This
argument uses the two dual arcs as geometric terminal sets before their
exterior identification; a connection supplied solely by o is excluded.
Under reflection the latter event is C on the graph Gjoin, again excluding
the boundary identification itself. Hence

    1=φsep(C)+φjoin(C).

For every configuration, kjoin=ksep−1 on Cᶜ and kjoin=ksep on C. Thus
the raw weight ratio is q⁻¹ on Cᶜ and one on C. Its average lies in
[q⁻¹,1], and the normalized density lies in [q⁻¹,q]. Therefore

    φsep(C) ≥ 1/(1+q) ≥ 1/(1+q²),       q≥1.    (R2)

The weaker source constant is retained. This is a finite boundary-partition
calculation, not a torus duality assertion.

## 3. Rejected first-hit orientation construction

Here is the rejected geometric route, retained to identify its failure.
The last-return height inference is not proved and is in fact false.
Take even N, R1=[0,N)² and R2=[N/2,3N/2)×[0,N) in the primal embedding.
Let g1 be a simple horizontal R1 crossing, stopped at its first rightmost
layer vertex x=(N−1,h), and let g2 be a simple bottom-to-top R2 path whose
bottom endpoint has u<N. Suppose these two full paths are disjoint.
Reflect in u=N−1/2 and follow s(g1) backwards from s(x).

Existence and orientation of a first intersection can be proved without
a drawing. Concatenate g1, the unit segment x--s(x), and its reflection
traversed from s(x). This is a simple left-to-right crosscut of a slightly
larger rectangle; extend its two endpoints through the horizontal collars.
Extend g2 through the bottom and top collars. The extensions are disjoint
from the first crosscut except for its original interior intersections.
Jordan separation forces an intersection. It cannot be on g1 or on the
unit connector, so it lies on s(g1). All intersections are transverse
primal-dual edge crossings. Orient the horizontal crosscut left-to-right
and g2 bottom-to-top. The first intersection z along the horizontal
crosscut has positive oriented intersection: g2 separates the rectangle
into its left and right components, the initial horizontal segment lies
in the left component, and the crossing enters the right component.

Let a be the dual vertex immediately before z along s(g1), and y the
primal vertex immediately before z along g2 oriented bottom-to-top.
Let t be the last vertex on u=N on the g2 prefix ending at y. Such a
vertex exists because that prefix starts with u<N and z has u>N−1/2.
After t the prefix stays in u>N, except that it may end at t=y. Let A
be s(g1) from s(x) to z, and B be g2 from t to z, retaining the two
final half-edges. Their interiors are disjoint by the first-hit rule.
Together with the vertical segment from t to s(x), they bound a Jordan
lobe in u≥N. Its orientation at z is fixed by the positive intersection.
The rejected inference was that the vertical segment must therefore be
oriented upwards and v(t)<h. A reflex corner at z invalidates this
inference. The counterexample realizes that alternative, and its full
second path subsequently returns left above the first path to the top.

Define a1 as g1 backwards from x to s(a), and a2 as g2 from t to y.
The two endpoint vertices s(a) and s(y) are axial neighbours: a and y
are endpoints before the crossing of a primal edge and its dual edge.
The paths a1 and s(a2) are disjoint by first hit; the initial heights
need not have the asserted strict order. Replacing the two final half-edges at z by
the axial unit segment a--y removes an empty elementary half-diamond.
It cannot introduce an intersection or remove another lattice vertex.
This specifies the candidate retained vertices; z is never a primal
vertex. The hypotheses of section 1 do not follow universally, because
the initial-height ordering can fail.

## 4. Conditional cut lemma based on attachments, not on pocket contents

Assume independently the section-1 disk hypotheses and the stated corner
exit sides; section 3 does not establish these universally. Let Ω be
that disk for these truncated paths. Write
Q=s(a2) for its left free arc and Q'=s(a1) for its right free arc.
Neither full path meets the interior of Q': g1 lies in u≤N−1, while
g2 cannot meet the reflected initial segment before z. Away from their
own boundary subpaths a1,a2, every component of g1∩Ω or g2∩Ω is thus
a crosscut with endpoints on Q. An endpoint at one of the two corners
of Q is allowed. The continuation of g2 after y exits Ω at that corner:
the crossing orientation in section 3 places its forward half-edge on
the exterior side of the axial a--y connector. The analogous continuation
of g1 exits at its corner adjacent to Q. There are no other boundary
intersections, since the full paths are simple and disjoint. Intersections
with Q are transverse and occur at edge midpoints.

For such a finite family of disjoint crosscuts, their pockets on the side
not containing Q' are laminar. Indeed two pairs of endpoints cannot alternate
on Q: joining either pair to its Q interval forms a Jordan curve which
the other crosscut would have to cross. The pocket regions are therefore
either nested or disjoint. Each maximal pocket is bounded against the
component adjacent to Q' by exactly one crosscut. Deleting all the crosscuts
leaves a unique component U adjacent to the interior of Q'; every other
component lies in one maximal pocket. Its only possible attachment to U
is through that maximal pocket's outer crosscut. That crosscut belongs
to one full path, not both. Nested opposite-path excursions in a pocket
are harmless: they do not create another attachment to U. This is the
needed conclusion; the stronger assertion that pockets contain only one
path is unnecessary and need not be true.

Define F as follows. An edge not belonging to either full path is in F
exactly when its relative interior lies in U. Include both its endpoints,
including endpoints on the two cut paths. The unit connectors cannot be
crossed by primal edges, so every edge not in the two full paths has its
whole relative interior in a unique component. Let Ui be the vertices on
gi incident to F, enlarged to include the vertices of ai (isolated boundary
vertices may be retained). All boundary vertices on the same gi are known
connected in the actual model. The graph induced by edge labels outside F
can attach to F only through U1 or U2, or through a single unchanged free
boundary vertex. Every one of its components attaches through at most one
Ui, by the maximal-pocket statement. Boundary edges on ai are deleted
loops as in section 1; the separate boundary identifications introduce no
other attachment.

Consequently, condition the auxiliary mixed model on every label outside
F. Its induced partition on F refines the partition which wires U1 and U2
separately. The actual conditional FK law on F, if all F edges are
unqueried, has a partition at least as wired as that partition. Finite FK
boundary monotonicity proves domination of the auxiliary marginal for every
increasing F-event, by first conditioning and then averaging.

Let BF mean that the two classes U1,U2 connect using F, with within-class
identifications allowed. If C occurs in the full auxiliary disk, erase
successive excursions through off-F components. Each such excursion has
both attachment ends in one Ui and can be replaced by its identification.
The resulting path witnesses BF. Thus φsep(BF)≥φsep(C), and actual
conditional probability of the full-path connection is at least (R2).
This explains both the domination and the deterministic path rerouting.

## 5. Averaging and the outstanding discrete check

Use the complete edge-query transcript T, not merely the two output paths.
An adaptive exploration has the exact FK spatial Markov conditional law
on unqueried edges, because its next queried label is a deterministic
function of its queried states. If every F label above is unqueried, the
previous section gives P(BF|T)≥(1+q²)⁻¹ for each successful disjoint
transcript; intersecting paths give probability one.

The preparatory event also asks for a horizontal crossing of R2. This is
not necessarily T-measurable. Conditional on T, that event and BF are
increasing in the unqueried labels. Conditional FKG therefore gives
P(BF|T,H(R2))≥P(BF|T). Integrating this inequality, rather than replacing
an indicator of the preparatory event inside a conditional expectation,
gives the required factor (1+q²)⁻¹ times its preparatory probability.

The usual informal phrase 'topmost/rightmost interface' does not itself
supply the missing finite algorithm. The following replaces it with a
primal algorithm whose sources and failure branch are literal finite sets.

## 6. A primal exploration that avoids medial corner conventions

Let G be the actual induced primal graph of a half-open rectangle, with
edge labels fixed in advance. To search for a horizontal crossing, its
source set S is the entire leftmost coordinate layer and its target set
T the entire rightmost coordinate layer. Introduce a virtual root r to
the left of the rectangle and disjoint fan arcs r--v to v∈S, all strictly
outside the rectangle except at v. These are search instructions, not
edges of the probability space and not FK boundary identifications. Order
the root children by decreasing vertical coordinate. A fan can for example
be drawn with straight segments from a point strictly to the left of the
lower-left corner; their only common point is r.

Perform deterministic depth-first search. A vertex, once visited, stays
visited. At a newly visited nonroot vertex v, start with its incoming
parent half-edge and inspect the incident graph edges in clockwise cyclic
order following that half-edge. On returning from a recursive visit,
resume the same list rather than restarting it. If the other endpoint is
already visited, skip the edge **without querying its state**. Otherwise
query it if not previously known; if it is open, mark its other endpoint
visited and recurse; if closed, continue. Root fan arcs are always usable.
Stop immediately when a target vertex is first visited. The output path
is the current parent-tree branch, with the virtual root and fan edge
removed. If the stack empties without a target, output failure. No edge
label is queried twice; every tie and the failure branch are specified.
Each output path is simple and contains only open actual edges, and it
has exactly one target-layer vertex. Ordinary finite DFS completeness
proves that failure occurs exactly when no crossing exists.

Here is the one-sidedness proof, including the skipped-cycle issue. Extend
the eventual successful tree branch through its root fan and the target
boundary collar to a proper left-to-right arc. At a branch vertex on this
arc, every child subtree completed before the final chosen child leaves
through the angular sector on the left of the oriented branch: this is
exactly the clockwise order from the reversed incoming direction to the
outgoing final-child direction. A completed subtree has no other vertex
on the eventual final branch, because vertices are never revisited and
the branch consists of ancestors still on the recursion stack. Its embedded
tree cannot cross that branch, since graph edges do not cross. It therefore
lies entirely in the upper component of the rectangle minus that branch.
At the root the same assertion follows from the decreasing-height order
of its fan arcs. These observations account for every visited vertex not
on the final branch. Every queried closed edge either issues from such
a subtree, or from a branch vertex through one of the same earlier angular
sectors. Its interior cannot cross the final branch, so it too lies above
the branch; it may end at a final-branch vertex. Edges to already visited
vertices were skipped, so no additional cycle edge requires classification.
Thus every queried actual edge is on or above the output path. All actual
edges with relative interior below the path remain unqueried. The proof
also shows that every open left-to-right crossing above the output path
would have forced an earlier successful visit, so the path has the required
topmost property, although that extra characterization is not needed.

For the second search take precisely

    S2={(u,0)∈P:N/2≤u<N},
    T2={(u,N−1)∈P:N/2≤u<3N/2}.

Draw the virtual fan below R2, order its children by decreasing horizontal
coordinate, and use counterclockwise cyclic order at nonroot vertices.
The reflected version of the preceding proof shows that every queried
actual edge lies on or to the right of the resulting simple bottom-to-top
path g2. Failure is exactly absence of the prescribed bottom-to-top
connection. Its source lies strictly to the left of u=N, as required in
section 3. The algorithm may be run after the first exploration, reading
previously known states when needed. It is the same deterministic DFS on
the same full configuration; its queries and output would be identical
if those states were queried anew. The combined transcript merely omits
duplicate queries. If the output paths intersect, the desired connection
already holds and no surgery is needed.

For disjoint outputs, the component U of section 4 is below g1 in R1 and
to the left of g2 in R2. To check the first assertion, g1 together with
its left/right boundary collars separates R1 into upper/lower components;
U starts immediately below x. To reach the upper component inside Ω it
would have to cross g1 or pass around x through the horizontal connector
x--s(x), which is part of ∂Ω, or pass around the left boundary of R1,
which Ω does not reach: its leftmost coordinate is at least N/2−1 because
Q=s(a2) is reflected from R2 and a1 ends at the first such crossing. None
is possible. The second assertion follows from g2's proper bottom-to-top
separation in R2 and the last-return/positive-orientation construction:
the point just below x is on its left side. Consequently every label F
is below g1 wherever it lies in R1, and left of g2 wherever it lies in R2.
The two rectangles cover Ω: its rightmost coordinate is at most 3N/2−1
because a1 stops when its reflection first meets a path in R2. Thus no F
label was queried by either DFS. (For edges meeting the overlap boundary,
the relative-interior side test gives the same conclusion.)

Subject to the missing geometric ordering, the section-5 hypotheses
concern this explicit full transcript.
No conditioning on unqueried crossing events, artificial root wiring in
the FK law, or unrecorded medial boundary convention is used.

## Research disposition

The proposed local route through section 3 is rejected. A replacement for
its false initial-height ordering, with valid unqueried-domain geometry,
is still necessary. The generic disk proof and the finite DFS construction
do not supply that missing replacement.
This file alone does not assert the theorem's all-n,m completion or remove
its A2 hold; those require the owner's actual check and integration with
the separate square/transfer construction.

## 7. Endpoint parity: use closed rotated boxes for the preparatory estimate

There is an additional endpoint issue in transplanting the paper literally.
For the normalized same-parity lattice, the half-open square of even side
N is not preserved by horizontal reflection: its axis is a half-integer
line and reflection sends primal to dual. At N=2 the bottom vertices of
R2=[1,3)×[0,2) consist only of (2,0), so the prescribed bottom-left half
[1,2) contains no source at all. Thus a claim that the preparatory event
always has probability at least half the square crossing probability
cannot use these literal extreme-layer conventions without a repair.
This is a convention obstruction, not a counterexample to torus RSW.

Here is a repair retaining the rotated lattice. Restrict the intermediate
scale to N a positive multiple of four and use closed vertex boxes

    R1=[0,N]²,
    R2=[N/2,3N/2]×[0,N],
    R=[0,3N/2]×[0,N].

The needed half-open square estimate has a direct finite graph convention.
For even N, put B={0,...,N−1}². Take all primal vertices and diagonal
edges in B, with left/right terminal sets u=0,N−1. Take all dual vertices
and diagonal edges in B, with bottom/top terminals v=0,N−1. Every primal
edge lies in one elementary unit square of B and is crossed by the other,
dual diagonal of that same square; thus this is an exact label bijection,
including boundary cells. A primal horizontal crossing and complementary
dual vertical crossing are exclusive by Jordan intersection. If no primal
crossing exists, the boundary of the open left-terminal cluster, traced
through these elementary cells, has a bottom-to-top component made of the
crossing dual diagonals of closed edges. Boundary terminal vertices are
the dual vertices on v=0,N−1, so no exterior edge or missing terminal row
is required. This proves complementarity on these literal finite sets.
A quarter-turn about ((N−1)/2,(N−1)/2) maps the dual graph and its
vertical event to the primal graph and its horizontal event: the affine
formula (u,v)↦(N−1−v,u) sends opposite parity to equal parity because N
is even. This is an isomorphism of the diagonal-period dual torus to the
primal torus. The cellular q² likelihood bound therefore gives

    1−φ(H(B)) ≤ q² φ(H(B)),
    a0(q)=1/(1+q²).

The vertical estimate follows from the same argument with coordinates
exchanged; coordinate exchange itself preserves the primal lattice.

These are new intermediate events, not a narrowing of the final ordinary
grid theorem. If a selfdual half-open square of side N has horizontal and
vertical crossing probabilities at least a0(q), the closed square has
both probabilities at least a(q)=r(q)a0(q), where r(q)=1/(1+√q).
Indeed reveal only its half-open square and choose an open horizontal
crossing deterministically. From its right-layer endpoint (N−1,v),
0≤v≤N−1, the edge to (N,v+1) is outside the revealed edge set and lies
in the closed square. Its conditional open probability is at least r(q).
The vertical version uses (u,N−1)--(u+1,N). This argument remains valid
with any induced torus boundary partition and all q≥1.

Closed R2 has the exact primal symmetry u↦2N−u. Split its bottom source
layer into the inclusive halves [N/2,N] and [N,3N/2]; their union is the
whole bottom layer, and reflection interchanges their connection-to-top
events. Their equal probabilities are at least a(q)/2 by the union bound
and the vertical square bound. Translations by N/2 preserve the primal
lattice since N is a multiple of four. FKG now gives the preparatory
probability at least a(q)³/2, with no dual/primal symmetry confusion.

Apply the construction in sections 1--6 with the following literal changes:
the right layer of R1 is u=N, the gluing reflection is u=N+1/2, the
reflected start layer is u=N+1, the bottom source set is inclusive
N/2≤u≤N, and t is the last g2 vertex on u=N+1 before y. All side sets
are the closed extreme coordinate layers. The proper-crosscut, empty
half-diamond, face enumeration, pocket, and DFS arguments are unchanged.
The initial reflected segment cannot leave R2 through its right side
before meeting g2, because g2 separates the bottom from the top in R2;
it cannot leave through a horizontal side since its vertical coordinates
are those of g1. Consequently Ω⊂R, and its leftmost coordinate is at
least N/2+1. This also justifies the no-F-query argument of section 6
with closed boxes, subject to the missing valid surgery. If that surgery
is replaced successfully, the closed rotated 3/2 lower bound would be

    a(q)³ / [2(1+q²)].

Every domain embeds whenever 3N/2<m in the diagonal-period torus. Its
coordinate span is then strictly below m; any nonzero period has a
coordinate of magnitude at least m. This repair deliberately does not
claim that the paper's own half-open conventions were the normalized
extreme-layer conventions used in the earlier research manuscript.

The separate ordinary-grid transfer must now choose sufficiently divisible
scales and account for one extra closed boundary layer. It is not justified
to call the half-open 5/3 overlap helper already proved just from this
closed-box estimate. A convenient flexible endpoint is a closed rotated
crossing bound for all heights between W and 2W, W a multiple of four,
obtained by fixed finite concatenation; a crossing of a larger such box
can be truncated to a prescribed shorter height. This may absorb the
few-layer difference in the overlap boxes, but the actual inequalities
and quotient embedding still belong to the transfer owner's check. More
explicitly, concatenate two closed vertical 3/2 rectangles of width W∈4Z
at vertical starts 0 and W/2. Their overlap contains the closed W-square
at heights W/2 through 3W/2. Its horizontal crossing intersects both
vertical subcrossings. FKG gives a closed aspect-two bound
d(q)=b(q)²a(q), where b(q)=a(q)³/[2(1+q²)], whenever 2W<m. A closed
vertical crossing to any integer height T≤2W follows by truncation of
that larger witness. For L=16k, k=floor(n/32), n≥64, the half-open
overlap dimensions are 12k by 20k. It contains the closed box of width
W=12k−4 and height T=20k−1, and T≤2W for k≥2. Moreover
2W=24k−8<n<m. Thus the larger aspect-two witness embeds, and its
truncation witnesses the desired half-open overlap crossing. The placement
translations in the companion manuscript are even in both coordinates
when L is a multiple of sixteen. The small ordinary scales n<64 admit
a direct fixed-row bound r(q)^ceil(64α). These observations supply the
endpoint correction to the conditional transfer; the companion owner must
still check its actual placement and counting inequalities after adopting
the changed L.

## Finite diagnostic actually run

A Python exhaustive diagnostic enumerated all 65,536 edge configurations
of the closed rotated side-four square (13 vertices, 16 labelled edges).
It implemented the clockwise DFS above, with the exterior root at (−1,0),
and tested every queried edge midpoint against the polygon bounded by the
successful output path and the upper rectangle boundary. All 34,119
successful configurations had every queried edge on or above the output
path. This is a useful small-instance check of the DFS orientation and
visited-neighbour skip convention; it is not a substitute for the planar
argument, a test of larger sizes, or an acceptance record. No production
validator or gate was run for this research-only note.
