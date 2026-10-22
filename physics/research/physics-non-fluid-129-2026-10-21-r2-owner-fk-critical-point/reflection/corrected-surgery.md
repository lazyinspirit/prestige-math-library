# Second construction cycle: stop first along the vertical path

Research only; no item, manifest, import, gate, or acceptance changes.
The first-cycle counterexample is preserved unchanged. This file replaces
its false first-hit order by first intersection **along the full vertical
path**. The auxiliary symmetric disk need not embed in the torus: only
the retained unqueried graph does. This distinction avoids an otherwise
unjustified requirement that the torus side exceed twice the local scale.

Use the rotated primal/dual lattices and generic reduced-disk construction
of `construction.md` sections 1--2. Those sections give the precise edge
sets, separate/joined partitions, planar counting proof, and bound
c(q)=1/(1+q²). They remain research arguments subject to owner checking.
The full paths below can be obtained by the explicit one-sided DFS of
section 6 of that file, rather than by an unspecified medial interface.

## 1. Closed boxes, full paths, and the corrected stopping rule

Let N∈4Z be positive. Put

    R1=[0,N]²,  R2=[N/2,3N/2]×[0,N],
    R=[0,3N/2]×[0,N].

Take the actual induced primal graphs. Let g1 be the simple horizontal
path output by the left-source clockwise DFS, stopped on its first
right-layer vertex x=(N,h). Let g2 be the simple vertical path output
by the bottom-source counterclockwise DFS, with source set
{(u,0)∈P:N/2≤u≤N}, stopped at its first top-layer vertex. Suppose the
two paths are disjoint; otherwise the desired connection already occurs.
All edges of both full paths have been queried open. Let s reflect in
u=N+1/2 and orient A=s(g1) backwards from s(x)=(N+1,h).

Concatenate g1 directed left-to-right, the unit connector x--s(x), and
A. Extend its left/right endpoints through small horizontal collars of
[0,2N+1]×[0,N]. Extend g2 through the bottom/top collars. In the enlarged
rectangle these are proper simple horizontal and vertical crosscuts.
Old side contacts lie in its interior; the extensions introduce no new
intersection. Their intersection is nonempty by Jordan separation.
There is no intersection on g1, because the paths are disjoint, and none
in the connector interior, because an integer diagonal edge meets its
integer-height line only at an integer endpoint. Thus the first
intersection **along g2 from its bottom source** is on A. Call it z.
It is a transverse edge-midpoint crossing.

The g2 prefix strictly before z is in the bottom component of the
horizontal crosscut. The line u=N+1 meets that crosscut only at s(x):
g1 lies in u≤N, and the first-target stopping rule means A meets u=N+1
only initially. The vertical ray on this line below h connects directly
to the bottom collar without meeting the crosscut; the ray above h
connects to the top collar. Consequently **every** visit of the g2 prefix
to u=N+1 has height below h. This is a global component assertion and
does not infer orientation from a local turn at a possibly reflex corner.

Let a be the dual vertex before z along A and y the primal vertex before
z along g2. Since the source has u≤N while z is to the right of that
line, the prefix through y has a visit to u=N+1. Let t=(N+1,b) be its
last such visit. The preceding paragraph proves b<h. Set a1 to be g1
backwards from x to s(a), and a2 to be the g2 segment from t to y.
The first-along-g2 rule says its whole prefix meets no part of A before
z, so a1 and s(a2) are disjoint. After t the path a2 stays in u>N+1,
apart from its initial vertex; a singleton a2 is allowed. The first-
target property gives the corresponding strict half-plane property
for a1. Their relevant final primal/dual vertices are axial neighbours,
as the endpoints before two crossing diagonal edges. The two final
half-edges to z can be replaced by the unit axial connector, shaving
an empty elementary half-diamond. Thus the exact generic disk Ω exists.

Its primal wired arcs are a1 and a2. Write Q=s(a2) for the left free
arc and Q'=s(a1) for the right free arc. The central open strip

    N<u<N+1,  b<v<h

lies in Ω. Choose the root point r in that strip sufficiently close to
x that it is on the left side of g2; such a choice is possible since
the compact full paths are disjoint. Let U be the component of the
interior of Ω minus the two full paths containing r.

## 2. Finite crosscut tree and its terminal colors

Clip the portions of the full paths off the two distinguished boundary
arcs a1,a2 to Ω. They form a finite family of disjoint proper crosscuts,
with a boundary-corner endpoint permitted. Indeed the full paths are
simple and disjoint, their intersections with dual boundary arcs are
transverse, and they cannot return to their own distinguished primal
boundary arcs. Their full original endpoints are outside the interior
of Ω (the domain's coordinates are within [0,2N+1]×[0,N]). Touches at
their own arc endpoints are treated by splitting the boundary corner
into its two incident collar sectors; this neither changes an edge label
nor introduces a new graph connection. Degenerate outside-only contacts
contribute no interior crosscut. In particular, after its first crossing
of the full horizontal crosscut, the forward half-edge of g2 at y is
outside Ω at the axial a--y connector. It is not a hidden crosscut joining
an original terminal to an unrelated boundary sector.

Cut a closed topological disk along one proper crosscut. Jordan separation
gives exactly two closed disks meeting along that crosscut. Repeating for
the disjoint crosscuts gives a finite family of disks. Its adjacency graph
(one vertex per disk, one edge per crosscut) is a tree: it starts as one
vertex, and every cut splits one vertex into two and adds one joining
edge. Root this tree at U. Label a tree edge by 1 or 2 according to the
full path containing its crosscut. A branch off the root is attached
through one first crosscut of one color. Nested cuts of either color
do not create another attachment to the root.

The original boundary wiring must also be tracked. It is not enough to
count only open regions of the complement. Two facts supply the needed
terminal information.

* No color-2 crosscut separates a1 from r when the color-1 cuts are
  ignored. The whole boundary path a1 is connected and disjoint from
  the whole g2. A sufficiently thin interior collar of a1, together
  with a small path from r to x, avoids g2 and connects all its terminal
  vertices to the root side. Compactness and disjointness give a positive
  separation, so one common thin collar suffices.
* No color-1 crosscut separates a2 from r when the color-2 cuts are
  ignored. All color-1 cuts lie in u≤N. Connect r down the central strip
  to t through its right-hand collar, then along an interior collar of
  a2, which lies in u≥N+1. This avoids the whole g1. A boundary-corner
  limit is taken from the disk interior; it adds no probabilistic edge.

It follows that a branch whose first edge has color 1 contains no
original terminal vertex of a2, and a branch whose first edge has color
2 contains no original terminal vertex of a1. To see this, erase cuts
of the other color: any such branch remains behind its first crosscut,
whereas the opposite terminal arc and r remain connected by the paths
just described. The terminal arc of the same color is allowed inside
the branch. This is the exact extra information needed for the mixed
boundary partition; a purely uncolored tree argument would be insufficient.

## 3. Labelled retained graph and the auxiliary marginal

Let F consist of the auxiliary primal edge labels not on either full
path whose relative interiors lie in U. Include their endpoints, even
when these are on a cut path. Every other non-path label has its relative
interior in one of the other disk regions. Keep all path edge labels
outside F, including those on a root boundary; the a1/a2 labels may
equivalently be contracted/deleted loops as in the reduced-disk proof.
Let Ui contain all g_i vertices incident to F and retain any isolated
original a_i terminal vertices needed to state the connection event.
Each Ui is connected by the known open full actual path g_i.

Consider a graph component formed from labels outside F, with the original
mixed identifications along a1 and a2 included. If it reaches F, its
attachment vertices lie on a cut path (or are singleton free vertices).
It can enter a branch from the root only along that branch's first
crosscut, so that branch attaches through one color. Traversing deeper
crosscuts does not change this interface. Path edge labels on the same
full g_i can join several interfaces, but they all have color i; labels
on the two full paths cannot join, since their vertex sets are disjoint.
The original a_i identification can also join interfaces only of color i:
the terminal-color conclusion of section 2 excludes every opposite-color
branch. Ordinary primal edges cannot cross a crosscut except at its
primal vertices; the free dual boundary arcs contain no primal boundary
vertices through which distinct branches could be joined. Therefore each
outside-F graph component, even after the original boundary identifications,
attaches to F through at most one Ui. This statement counts path labels,
boundary wiring, and nested opposite-colored cuts, not just graph pockets.

Equivalently, collapse each full root-tree branch to one symbol carrying
the color of its first crosscut. Any edge connecting two such symbols
outside U must run along a full cut path, since distinct branch interiors
are separated by U. If that path has color j, it can leave or enter a
branch only through that branch's first crosscut, forcing its color to
be j: a path of the other color cannot cross or meet this crosscut.
Original terminal identifications also join only symbols of their own
color, by section 2. Hence every connected component of this compressed
outside graph that has a root attachment is monochromatic. This proves
the preceding attachment assertion without assuming that all cuts are
rooted on one free arc, or that branch interiors contain only one color.

Condition the auxiliary mixed FK law on all outside-F states. Its induced
partition on F consequently refines separate wiring of U1 and U2. In the
actual FK law, after conditioning on the complete exploration transcript
and then any additional outside-F states, the induced partition is at
least as wired as separate U1,U2, because the full g_i are known open.
FK boundary monotonicity, followed by averaging both conditionings, proves
that the actual conditional marginal on F dominates the auxiliary marginal
for every increasing F-event.

Let BF be the F-event of an open connection between U1 and U2, allowing
within-Ui identification. An auxiliary a1--a2 path can have every maximal
outside-F excursion erased and replaced by its single-color attachment
identification. No erased component can join the two colors by itself.
The resulting F path witnesses BF. If an original terminal lies off the
root, its branch first meets the root through its own color, by section 2,
so the same erasure covers the initial/final excursion. Thus the mixed
disk bound gives auxiliary P(BF)≥c(q). In the actual model every allowed
within-Ui connection is realized by known full-path edges, so BF implies
the actual full-path connection.

## 4. Only the retained graph must embed, and it was not queried

The auxiliary disk Ω can extend to the right of R2: the corrected stopping
rule no longer says that A's entire initial segment avoids the future of
g2. The auxiliary disk is an independent finite planar graph; no edge
outside F is identified with a torus label. Requiring Ω itself to embed
would silently add an unnecessary m>2N hypothesis.

The retained graph does embed in R. In the wide rectangle
[0,2N+1]×[0,N], the proper vertical crosscut g2 separates a left from a
right component. The point x is in its left component, because the full
g1 connects x to the left boundary and is disjoint from g2. Hence r and
all of U are in the left component. Every point with u>3N/2 is in the
right component, since all of g2 lies in R2. Thus U has u≤3N/2.
All of Ω has u≥0 and 0≤v≤N. It follows that F lies in R.

Within R1 the root component is below g1. Here is the endpoint check that
prevents a hidden bypass. The only path-arc intersections of ∂Ω with
u=N are x at height h and the start of Q at height b: a1 meets that
layer only at x, and a2 meets u=N+1 only at t. A unit connector can add
no other height except, in the double-singleton case, the entire unit
segment between these two heights. Consequently Ω∩{u=N} is the interval
between b and h, including its endpoints. A curve within Ω avoiding g1
cannot go around x into R1's upper side, because that would require a
return through u=N above h. It cannot go around the other endpoint of
g1, since Ω has u≥0 and that endpoint is on u=0. Jordan separation in
the rectangle, or the same argument with small exterior collars, therefore
places every F edge in R1 below g1. Within R2 every F edge is left of
g2 by the preceding global component argument.

The first DFS queried only labels on/above g1 within R1, and the second
only labels on/right of g2 within R2. The labels on either full path
were explicitly excluded from F. Every F edge belongs to R1 or R2 (the
overlap has width N/2≥2), so no F label was queried. Since both coordinate
spans of R are less than m when 3N/2<m, no two of its vertices or edge
labels are identified by a nonzero diagonal torus period. Thus the retained
graph, its Ui vertices, and its label correspondence with the actual model
are unambiguous even when Ω extends beyond that rectangle.

## 5. Transcript averaging and uniform closed-box consequence

For a fixed successful transcript T the unqueried FK law is the exact
spatial Markov law. Sections 1--4 give

    P(g1 connected to g2 | T) ≥ c(q)=1/(1+q²).

The preparatory event additionally asks for H(R2), which need not be
T-measurable. Conditional on T, it is increasing in the remaining labels,
as is BF. Conditional FKG gives
P(BF|T,H(R2))≥P(BF|T), whenever the left side is defined. On H(R2)
the full g2 meets a horizontal R2 crossing and hence connects to R's
right side, while g1 connects to its left side. Integrating the correct
conditional inequality yields the gluing factor c(q), without placing
an unmeasurable preparatory-event indicator inside a conditional expectation.

For completeness, the closed square and source split are the parity repair
of `construction.md` section 7, independent of its rejected surgery.
The even half-open square has bound a0(q)=1/(1+q²) by literal-cell duality
and the finite-torus likelihood comparison. One unqueried diagonal edge
extends its horizontal/vertical crossing to the closed square, so put
a(q)=r(q)a0(q), r(q)=1/(1+√q). Closed R2 has the genuine primal symmetry
u↦2N−u. Its two inclusive bottom halves therefore each connect to the
top with probability at least a(q)/2. FKG gives preparatory probability
at least a(q)³/2. The resulting closed rotated 3/2 bound is

    b(q)=a(q)³/[2(1+q²)],   N∈4Z,  3N/2<m.

Two such vertical rectangles at starts 0 and N/2, joined by a horizontal
closed-square crossing in their overlap, give a closed aspect-two bound
d(q)=b(q)²a(q) whenever 2N<m. Truncating the larger crossing witnesses
any prescribed smaller integer height. The parent owner's all-closed
ordinary-grid transfer then handles every original n,m using scales
L=16 floor(n/32), direct rows for n<32, and the original theorem's exact
torus-size condition. That transfer is separately owned; this file does
not certify its placement/counting checks or production acceptance.

## Current second-cycle disposition

This is the proposed corrected full construction for owner examination.
The source's first-along-reflected-path rule is not being silently reused.
The retained counterexample refutes that earlier rule and does not apply
to the corrected first-along-g2 choice. No theorem acceptance, independent
review, source integration, or gate completion is asserted here.

The stable proposed source helper is
`lem-csm-frontier-fk-mixed-reflection-gluing`: closed rotated square
bound a(q) and closed rotated 3/2 bound b(q) for N∈4Z and 3N/2<m,
with every finite disk, exploration, and comparison argument supplied
locally. The parent retains the ordinary-grid theorem and transfer.

## Appendix A: four local half-diamond exit cases

Before shaving, the right-half lobe is traversed up the axis from b to h,
along A to z, then backwards along g2 to t. Its bounded component is
on the right of the upward axis segment, so the Jordan lobe is clockwise.
The first crossing of g2 from the bottom to the top side of the full
horizontal crosscut gives det(A',g2')>0. There are exactly four diagonal
direction pairs; the table lists the connector a→y and the side of it
entered by the forward edge y→y'.

| A' | g2' | a→y | y→y' side |
| --- | --- | --- | --- |
| (1,1) | (−1,1) | east | north, left side |
| (−1,1) | (−1,−1) | north | west, left side |
| (−1,−1) | (1,−1) | west | south, left side |
| (1,−1) | (1,1) | south | east, left side |

In every row det(y−a,y'−y)=1. The shaved disk is on the right side
of the connector, by its clockwise orientation; the removed triangle
is exactly conv{a,y,z}. The future half-edge at y is strictly on its
left, so it exits Ω immediately. This enumerates all local cases and
does not infer convexity from the local crossing sign: the lobe's
clockwise orientation was first fixed globally by b<h. Reflection gives
the corresponding empty-half-diamond statement at the left connector.

## Appendix B: full one-sided DFS proof with source fans

Let G be a finite planar graph embedded in a rectangle, with edges meeting
only at common endpoints. Let S be an ordered subset of its left boundary
vertices and T a subset of its right boundary vertices, S∩T empty. Attach
an exterior root by a noncrossing fan to S, ordered from top to bottom.
Fan edges are deterministic search instructions, never probability-space
labels. Enlarge the rectangle by narrow collars; put the root in the
left collar and give it one incoming stem from the enlarged left boundary.
The fan, stem, and all original edges are inside the enlarged rectangle.
Extend a successful target through the right collar. Thus the final
root-to-target branch becomes a proper simple arc. The root/fan only
selects a genuine source-to-target path; it supplies no FK connectivity
or boundary conditioning.

Initialize the stack with the root. A first visit marks a vertex forever.
At an actual vertex list incident edges clockwise starting strictly after
the incoming parent half-edge. Resume this same list after recursion.
Skip an edge to an already marked neighbour without querying, including
virtual fan edges back to the root. For an unmarked neighbour, query
the label if necessary and recurse precisely when open. At the root
iterate fan children in their specified order. Stop as soon as a T
vertex is marked; empty stack means failure. Every marked actual vertex
is connected to S by its parent-tree edges. On failure every edge from
a marked to an unmarked vertex has been queried closed; hence no open
S--T path exists. Conversely success gives such a path. Skipping marked
neighbours never prevents discovery of an unmarked reachable vertex.
All operations are finite, all choices specified, the output branch is
simple, and its first T vertex is its final vertex.

Fix a successful complete configuration and call the final branch P,
including the root fan and collar extensions, oriented left-to-right.
The recursion stack at success consists exactly of P. Every other marked
vertex has already finished its recursive call. Thus queried-open tree
edges off P form completed subtrees, each attached to one P vertex.
Their vertex sets are disjoint from P apart from that attachment: a
previously marked vertex cannot later be visited again and added to the
stack. At a nonroot attachment v, each such subtree was processed before
the final child of v on P. Its first half-edge is in the clockwise sector
from the reverse incoming P half-edge to the outgoing P half-edge. That
sector is exactly the local left side of oriented P. It can be reflex,
with angle greater than π; no convexity is assumed. At the root the
completed fan children are the higher children and lie on the same left
side of the final fan edge. Skipped marked fan children query nothing.

A completed subtree's interior is connected and disjoint from P. It
cannot cross P in an edge interior by planarity and cannot meet another
P vertex by the permanent-visited property. Its first edge leaves P to
the left; therefore its entire embedded tree lies in the left component
of the enlarged rectangle minus the proper arc P, by Jordan separation.
This classifies every queried-open edge not on P.

For a queried-closed edge e, its initial vertex v is marked and its other
endpoint is unmarked at query time. If v is off P, it belongs to one of
those completed subtrees; the edge interior cannot cross P, so it too
lies in the left component, though its other endpoint might later become
a P vertex. If v∈P, the query preceded the final successful child of v:
after that child succeeds, success returns up the stack and no edge list
resumes. Hence e leaves through the same earlier left angular sector.
Again its interior cannot cross P, so remains on the left, possibly
ending at another P vertex. The final target makes no query. These
cases exhaust all queried-closed edges. Edges to marked vertices, which
could form cycle chords on another side, were never queried.

Every queried actual label is therefore on P or has relative interior
on its left (upper) side. All labels with relative interior on its
right (lower) side remain unqueried. Original boundary contacts cause
no exception: collars put them inside the enlarged proper-crosscut
rectangle, and all queried actual edges remain in the original rectangle.

Coordinate interchange reflects the embedding, reverses clockwise to
counterclockwise order, takes a left-boundary source subset to a bottom
source subset, and takes the upper preferred side to the right preferred
side of a bottom-to-top path. This proves the second search's lemma for
the literal prescribed bottom subset, without wiring the whole bottom.
Running the second deterministic search after the first may read known
states; its decisions and output equal those obtained from scratch on
the same complete configuration. The combined transcript only omits
duplicate queries and imposes no condition on the still-unqueried labels.
