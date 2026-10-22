# Finite-torus duality and the outstanding reflection construction

Research draft for `physics-non-fluid-129-2026-10-21-r2`. This file changes no
item, manifest, import, run control, readiness record, or acceptance state.
The full torus component argument below is reconstructed locally. The final
reflection helper is **not proved in this manuscript**: the exact remaining
geometric and discrete-dual identification obligations are stated below. In
particular, this manuscript does not discharge the theorem's A2.

## Source and current interface

The actual carrier inspected is `items/thm-csm-frontier-fk-torus-rsw.md`, with
suppliers `def-csm-frontier-fk-real-boundaries`,
`lem-csm-frontier-fk-planar-duality`,
`lem-csm-frontier-fk-fkg-spatial-markov`, and
`lem-csm-frontier-grid-crossings-intersect`. Its statement is the ordinary
square-grid torus, closed vertex rectangle
`{0,...,floor(alpha n)} x {0,...,n}`, all real `q>=1`, all `alpha>1`, and all
positive integers `n,m` with `m>ceil(alpha n)`. These hypotheses are retained. The conditional transfer in section 6 is proved
for the stronger width `ceil(alpha n)` as well, so it also covers a ceiling-width
interface if the owner selects that interface. On reinspection the actual carrier
still uses `floor(alpha n)` in both its Statement and step 3.1; ceiling occurs
in its torus-size hypothesis. No source wording is silently replaced here.

The primary source actually retrieved is the complete PDF at
https://arxiv.org/pdf/1006.5073 (27 PDF pages, front page arXiv v2, 27 November
2013; document date May 28, 2018). Its Sections 1 and 2, printed pp. 3--14,
were read, including the torus correction (1.5)--(1.6), Theorem 5, Lemmas
6--7, Proposition 8, the proof of Proposition 8, and Corollary 9. The image
of printed p. 12 was also inspected for the first-hit construction. No claim
is made to have checked the paper's references or Sections 3--5. The local
PDF and extracted text are retained beside this file. The source is used
for proof research, not as an authorized external logical supplier.

The paper rotates the square lattice by pi/4 and uses half-open coordinate
rectangles in that embedding. Consequently its vertical reflection sends
primal vertices to dual vertices. Vertical reflection of ordinary Z^2 does
not do this. A2 cannot be transplanted to the current carrier merely by
replacing the paper's rectangle notation with closed ordinary-grid boxes.

## 1. Exact finite torus component identity

For every integer `m>=1`, use the following labelled cellular torus. Vertices
are `(i,j)` modulo `m`. For every vertex retain two different edge labels
`h(i,j)` from `(i,j)` to `(i+1,j)` and `v(i,j)` from `(i,j)` to `(i,j+1)`.
There is one oriented square face `f(i,j)` for every vertex. Thus `V=F=m^2`
and `E=2m^2`. At `m=2` two different horizontal or vertical labels can have
the same endpoints, and at `m=1` the two labels are loops. Never merge these
labels. Dual vertices are the square faces, and the dual edge crossing each
primal label is a separate label. This convention is the quotient of the
unit square cellulation of R^2 by `m Z^2`, including its attaching maps.

Work over the field F_2. Let `C_0,C_1,C_2` be the vector spaces with bases
vertices, edge labels, and face labels. The boundary of an edge is the sum
of its endpoints; a loop has zero boundary. The boundary of a face is the
sum of its four incident edge occurrences, reduced modulo two. In particular,
repeated occurrences in a thin quotient cancel; they are not discarded
before taking the boundary. Directly around each face every endpoint occurs
twice, so `partial_1 partial_2=0`.

Both the primal and the dual labelled graphs are connected: repeated horizontal
and vertical steps reach every vertex. The incidence rank of a finite graph
with `s` vertices and `k` components is `s-k` over F_2. Here is the short
proof, including loops and parallel labels. Within each component the edge
vectors have even coordinate sum, so their span has dimension at most one
less than the number of vertices. A path from a fixed root to every other
vertex sums to the vector root+vertex; these vectors are independent and
attain that dimension. Summing over components proves the assertion.
Thus `rank partial_1=V-1`.

A two-chain has a coefficient `c_f` on every face. For an edge having faces
`f,g` on its two sides, its coefficient in the boundary is `c_f+c_g`.
If the two faces agree this coefficient is zero. Hence a two-chain has zero
boundary exactly when its coefficients are equal across every edge of the
connected dual graph. Such a chain is constant on all faces. Consequently
`ker partial_2` has dimension one and `rank partial_2=F-1`, also when `m=1`.
It follows without appealing to surface classification that

    dim(ker partial_1 / image partial_2)
      = (E-V+1)-(F-1) = 2.

For an open edge set `A`, identify `C_1(A)` with its coordinate subspace in
`C_1`. Put

    Z(A)=ker partial_1 intersect C_1(A),
    r(A)=dim image[Z(A) -> ker partial_1 / image partial_2].

This defines the sector rank entirely by finite matrices. In particular
`r(A)` is one of `0,1,2`; no informal net/cycle classification is needed.
The same incidence-rank proof gives
`dim Z(A)=|A|-V+k(A)`, with isolated vertices included in `k(A)`.

Let `A*` contain precisely the dual labels crossing the labels outside `A`.
A two-chain has boundary supported on `A` exactly when its coefficients
agree across every dual edge in `A*`. Its coefficients can therefore be chosen
independently on the `k(A*)` dual components. Thus

    dim{c in C_2 : partial_2 c belongs to C_1(A)} = k(A*).

The kernel of `partial_2` on this space still consists of the constant
chains and has dimension one. The image is exactly
`image partial_2 intersect C_1(A)`, so that this latter space has dimension
`k(A*)-1`. It is contained in `Z(A)`. Taking the kernel of the displayed
map defining `r(A)` now gives the exact identity

    k(A*) - 1 = |A| - V + k(A) - r(A).                 (T1)

This proves the required finite-cell component identity for every labelled
thin torus as well as every ordinary torus. Applying the same identity to
the dual cellulation, and using `|A*|=E-|A|`, also gives
`r(A*)=2-r(A)`. No assumption of simple boundary cycles, connected open
clusters, or cellular open components occurs.

At `p=sqrt(q)/(1+sqrt(q))`, put
`w(A)=p^|A| (1-p)^(E-|A|) q^k(A)`. Because `p/(1-p)=sqrt(q)` and `E=2V`,
(T1) gives

    w(A)/w*(A*) = q^(|A|-V+k(A)-k(A*)) = q^(r(A)-1). (T2)

Here `w*` is the ordinary FK weight on the dual torus, not the dual
pushforward law. In particular the unnormalized ratio is in `[q^-1,q]`.
The complement-edge map is a bijection. Summing (T2) proves that the ratio
of the two partition functions also lies in `[q^-1,q]`. Dividing proves
that the dual pushforward and ordinary dual FK laws have pointwise density
ratio in `[q^-2,q^2]`. The same bound holds for every event by summation.
After any graph isomorphism from the dual torus to the original torus the
same statement holds on the original edge space. Ordinary translations,
quarter turns, and reflections preserve the torus FK law because they
preserve the number of open labels and components.

Equivalently the unnormalized density at a *dual* configuration `B` is
`q^(1-r(B))`; this is the paper's convention. This last exponent must not
be confused with the exponent `r(A)-1` in (T2).

### Stable proposed helper T

`lem-csm-frontier-fk-torus-cellular-duality`:
finite labelled square torus as defined above, `m>=1`, `q>=1`, and selfdual
`p`; definitions of the matrices and `r`; identity (T1), weight identity
(T2), `r(A*)=2-r(A)`, and normalized event likelihood bound `q^{+/-2}`.
Dependencies: finite FK weights, elementary finite-dimensional F_2 linear
algebra, and finite graph path/component definitions. This helper needs no
plane Euler or torus homology theorem as an unproved premise. The relevant
linear-algebra arguments are explicitly supplied above.

## 2. Correct square-crossing comparison for the actual closed boxes

Let `Q_n={0,...,n}^2`, where `n>=1` and `m>=n+2`. A horizontal crossing is
an open path in this lifted rectangle from `x=0` to `x=n`. Vertical primal
edges on the two sides can be omitted when deciding this event: all vertices
on each side are sources or targets, so a simple source-to-target path can
be truncated between its last left-side visit and first subsequent right-side
visit, removing such side edges.

The exact dual rectangle for absence of this crossing has vertex set

    D_n={1/2,3/2,...,n-1/2} x {-1/2,1/2,...,n+1/2}.

It has horizontal width `n-1` and vertical height `n+1`. Its vertical dual
edges cross all horizontal primal edges of `Q_n`; its horizontal dual edges
cross the vertical primal edges strictly between the two vertical sides.
The top and bottom rows consist of dangling terminal dual vertices before
one makes the top-to-bottom event. In particular they do not add horizontal
edges crossing nonexistent primal edges outside `Q_n`. Adding such horizontal
terminal-row edges makes no difference to the connection between the two
terminal sets. The endpoints on each terminal row may also be identified;
this does not change the existence event. These are event conventions, not
claims about equality of the resulting FK measures.

For completeness, the finite cut proof of complementarity is as follows.
Attach a single exterior source vertex to all left-side vertices and a
single target to all right-side vertices, using disjoint external arcs in
the rectangle boundary collars. If the source cluster reaches the target,
its path intersects every polygonal dual top-to-bottom path by Jordan
separation, and at that intersection the primal edge and its crossing dual
edge cannot both be open. Conversely, if it does not reach the target, take
the outer boundary of the union of small closed disks around source-cluster
vertices and narrow closed strips around its open edges, using radii smaller
than one quarter of an edge length and perturbing finitely many corners.
In the rectangle, the portion separating the source side from the target
side has a component from bottom to top: otherwise a connected boundary
component would close in the interior or return to the same horizontal side,
and the target could be joined to the source side in the complement of that
boundary. Equivalently this follows by following the interface starting at
the bottom boundary gap between reachable and unreachable vertices: at each
square its continuation separates those two labels and cannot terminate in
the interior; its only opposite terminal side is the top. Every traversed
primal edge has a reachable and an unreachable endpoint and is closed.
Replacing each interface segment through a square by the corresponding dual
edge yields a dual path in exactly the edge set described above. This proves
that absence of `H(Q_n)` is precisely the dual vertical crossing event.
This argument is finite and counts boundary terminals explicitly; it does
not require the incorrect assertion that the dual rectangle is `Q_n`.

Apply a quarter turn to the dual event and then a half-lattice translation
identifying dual vertices with primal ones. Its witnessing path crosses a
rectangle of horizontal width `n+1` and vertical height `n-1`. A subpath,
between its last visit to the left side of a width-`n` subrectangle and its
first subsequent visit to that subrectangle's right side, crosses that
width-`n`, height-`n-1` subrectangle. This is contained in a translated copy
of `Q_n`. The two terminal rows mentioned above become terminal columns;
any added edges along them are unnecessary after truncation. Consequently,
under ordinary dual FK and then its isomorphic primal law, the dual event
has probability at most `phi(H(Q_n))`. This also works for `n=1`: the dual
path is a vertical column of two edges, and its rotated image contains the
one-edge horizontal crossing of `Q_1`.

Using helper T on this event gives

    1-phi(H(Q_n)) <= q^2 phi(H(Q_n)),
    phi(H(Q_n)) >= 1/(1+q^2).                          (S1)

The manuscript's actual target assumption implies `m>=n+2`: since
`alpha>1`, `ceil(alpha n)>=n+1`, and `m>ceil(alpha n)`. Thus there is no
new hypothesis in (S1). At the minimal admissible torus the lifted dual
rectangle still has extent `n+1<=m-1`, so it does not fold over itself.
There is no need to change the theorem's constant or discard small `n`.

### Stable proposed helper S

`lem-csm-frontier-fk-periodic-closed-square-crossing`:
ordinary labelled square torus, `q>=1`, selfdual `p`, integers `n>=1`,
`m>=n+2`, and the literal `Q_n` event; conclusion (S1). Dependencies:
helper T and finite planar primal-dual crossing separation with the exact
terminal convention above. The existing grid intersection lemma alone is
not the primal-dual separation statement and must not be cited as if it were.

## 3. Two elementary comparison tools for the reflection argument

### 3.1 Joining exactly two already wired boundary classes

On any fixed finite graph let `xi` wire two specified vertex sets `P_1`
and `P_2` separately, leaving all other vertices free. Let `eta` be obtained
by additionally identifying these two classes. Edges remain labelled; any
boundary edges turned into loops are retained. For an edge configuration `A`
let `C` be the event of an open-edge path from `P_1` to `P_2`, excluding
connections made solely by boundary identifications. Then

    k_eta(A)=k_xi(A)-1_{C^c}(A),
    w_eta(A)/w_xi(A)=q^(-1_{C^c}(A)).                  (B1)

Indeed the quotient by the extra identification merges two components when
there is no such path, and merges none when there is one. Both the raw ratio
and its expectation under `phi^xi` are in `[q^-1,1]`. Therefore

    q^-1 <= d phi^eta / d phi^xi <= q.                (B2)

The looser bound `[q^-2,q^2]` used in the paper also follows. No topological
argument is needed for this part. The *different* assertion that reflected
complementary duality on the specially constructed disk gives exactly `eta`
is not proved by (B1). It requires an explicit disk-dual graph identification.
If a selfdual disk has been constructed with that identification and primal
connection and reflected dual connection are complementary events, then
`1=phi^xi(C)+phi^eta(C)` and (B2) give
`phi^xi(C)>=1/(1+q)`, hence certainly `1/(1+q^2)`. These hypotheses are
substantial and are not silently assumed proved here.

### 3.2 Cutting away components across known wired paths

Here is the exact finite-graph comparison needed after surgery. Let `D` be
an auxiliary finite graph with mixed partition separately wiring `P_1,P_2`.
Let `F` be the unexposed edge labels in a retained subgraph `K`. Let `U_1,U_2`
be disjoint vertex sets on the cut such that every vertex of `K` incident to
an edge of `D` outside `F` belongs to `U_1 union U_2`, except vertices that
have no exterior connection at all. Suppose `P_i subset U_i`, and suppose
all exterior boundary identifications of `D` either stay in one `U_i` or
are singletons; in particular they do not join a cut vertex to an unlisted
boundary vertex of `K`. In the actual conditioned model suppose all of `U_i`
are connected by exposed open edges, for each `i`.

Condition the auxiliary mixed model on all edges outside `F`. Its induced
partition on `K` identifies some vertices in `U_1 union U_2`. If it joins
`U_1` to `U_2`, that partition can be stronger than separate wiring, so one
cannot claim that every such exterior conditioning is dominated by separately
wired `U_1,U_2`. The remedy needed in the surgery is deterministic path
rerouting: an exterior path that joins the two sets has already achieved the
connection event, whereas if no such exterior connection exists its induced
partition refines the partition wiring `U_1,U_2` separately. In the latter
case the FK spatial Markov property and boundary monotonicity give domination
by the actual conditional law on `F`. In the former case one must prove that
an auxiliary connection is either already realized on the cut paths or forces
a connection through `K`; otherwise the comparison for the *event* does not
follow. This is why the exact domain/cut description is essential.

A clean sufficient version avoids this issue entirely: require that every
component of `D minus K` attaches to at most one `U_i`, with every attachment
within that set. Then its induced partition always refines separate wiring,
and the law on `F` in the actual model dominates the auxiliary marginal on
`F` for every increasing event. Proof: apply the finite FK conditional-law
formula to each exterior configuration, compare the induced partitions, and
average. This is a complete local proof with explicit sufficient hypotheses.
The source's `G_0` cut needs its actual attachment geometry checked against
one of these versions; it is not enough to state that arbitrary boundary
conditions dominate the free partition.

### 3.3 Correct averaging when the preparatory event is not exposed

Let `T` be the full transcript of an adaptive exploration, with each next
edge chosen as a deterministic function of previously revealed states.
For each realized finite transcript the event that it occurs fixes exactly
its queried states: the rule cannot impose extra conditions on unqueried
states. Hence the conditional law on all unqueried edges is FK with the
partition induced by the revealed open edges and the original boundary
condition. It is therefore associated.

Suppose a successful transcript already reveals the horizontal crossing of
`R_1` and the specified bottom-to-top path in `R_2`. Given that transcript,
the remaining condition `H(R_2)` in the preparatory event `D` is increasing
in the unqueried edges. The event `B` that the two revealed open paths connect
through unqueried edges is increasing as well. Conditional FKG gives

    P(B | T,H(R_2)) >= P(B | T)

whenever the conditioning event has positive probability. Thus a lower bound
`P(B|T)>=c` for every successful transcript gives the needed bound after
conditioning on `D` as well. Integrating over transcripts gives
`P(H(R) intersect D)>=c P(D)`, because on `D` the second revealed path meets
a horizontal crossing of `R_2` and therefore reaches the right side of `R`.

In contrast, the paper's displayed replacement of
`E[1_B 1_D]` by `E[P(B|Gamma_1,Gamma_2)1_D]` is not a conditional expectation
identity unless `D` is measurable in those paths. The present carrier
inherits the same unstated averaging issue. Using full transcripts and
conditional FKG repairs that particular issue without reducing any statement.

## 4. Exact remaining reflection helper

Normalize the paper's rotated lattice as

    L={(u,v) in Z^2 : u and v have the same parity},
    edges joining (u,v) to (u+/-1,v+/-1).

Its dual sites have opposite parity. Reflection in `u=c+1/2` sends the
primal lattice to its dual; reflection in a vertical line on ordinary Z^2
does not. The standard original coordinates are
`x=(u-v)/2`, `y=(u+v)/2`. The original square torus becomes the quotient of
this lattice by periods `(m,m)` and `(-m,m)`, rather than an axis-aligned
period square in the `(u,v)` embedding. These periods are preserved, as a
lattice, by the source-axis reflections and quarter turns. Thus the cellular
argument in section 1 continues to apply, and the local graph symmetries used
in the source remain available. This observation alone does not prove the
surgery or the conversion of rectangle events.

The smallest useful geometric helper should state all of the following,
with a consistent even lattice mesh and explicit side vertices:

1. An adaptive medial-edge algorithm which reveals the topmost `R_1`
   crossing and the rightmost specified `R_2` crossing, including failure
   branches, tie rules, removal of loops, and a record of queried edge labels.
2. For every successful disjoint pair, reflect the first path starting from
   its right-side endpoint and stop its reflected image at its first
   transverse crossing of the second path. Define the two endpoint-truncated
   primal subpaths by the actual primal/dual edge labels at that crossing;
   the crossing point itself is a medial point, not a primal vertex.
3. From the second path choose its last return to the specified reflection
   strip before that crossing. Prove the required ordering of the two starting
   points, absence of intersections of the two reflected boundary arcs, and
   simplicity of the four-arc circuit with its four short connectors.
4. List the finite vertex and edge sets inside that circuit, retaining every
   labelled boundary edge. Give the dual vertex/edge bijection after reflection,
   including which exterior dual vertex is split, and prove that complementing
   edges changes the two-separate-classes partition to the joined partition.
   This is the missing exact hypothesis for section 3.1.
5. Define `K` by removing both *full* explored paths from the circuit domain
   and retaining the component on the indicated side of the first endpoint.
   Specify whether cut vertices and boundary edges are reinserted. Prove every
   label in `F=E(K)` was unqueried, every external attachment belongs to a
   prescribed cut class, and the hypotheses needed for section 3.2 (or its
   path-rerouting alternative). Prove that a connection of the auxiliary
   subpaths yields a connection of the actual full paths through `K`.
6. State the resulting estimate conditional on the full transcript. Then
   apply section 3.3, not the unsupported conditional-expectation identity.

Proposed interface name:
`lem-csm-frontier-fk-rotated-reflection-gluing`, with conclusion a uniform
`3/2`-rectangle bound on the rotated lattice, in any finite torus quotient
preserved by its specified symmetries and large enough that each local domain
embeds. Dependencies: T, finite FK association/spatial Markov/boundary
monotonicity, polygonal Jordan separation, and the exact disk duality helper
specified in point 4. This remains a local authoring obligation for an
established result, not a newly classified open problem.

The paper's printed pp. 9--13 gives the construction and asserts points 3--5,
partly by reference to Figure 6. It does not supply the finite edge-label
specification demanded here. I have not reconstructed all those assertions
rigorously enough to certify this interface. Merely citing the paper's Lemma
7 and Proposition 8 would leave exactly the assigned A2 gap concealed.

## 5. Remaining geometry and integer checks in the current carrier

The carrier's square step can be repaired by section 2. Its `3/2` gluing step
still depends on section 4 or a different full ordinary-grid gluing proof.
The last bounded-aspect concatenation, *if* an ordinary-grid even-height
`3/2` bound is supplied, has the following sound details:

* For `1<alpha<=3/2`, `k=floor(W/3)`, `h=2k`, and `W=floor(alpha n)`
  satisfy `h<=n`, width `3k<=W`, and `W-3k<=2`. Choose a crossing after
  seeing only the rectangle's edges. Its one or two horizontal extension
  edges lie outside the exposed rectangle and are distinct. Successive
  conditional-open lower bounds `r_q=1/(1+sqrt(q))` give at least `r_q^2`.
* For `alpha>3/2`, `h=2 floor(n/2)`, `w=3h/2`, `d=h/2`, and `T=W-w`
  satisfy `T>=0` for `n>=2`. The starts `s_j=jd` for `j<K` and `s_K=T`,
  `K=ceil(T/d)` for `T>0`, have increments in `(0,d]`. Every overlap has
  width at least `h` and height exactly `h`. A horizontal path in either
  large rectangle contains a horizontal subpath across the specified overlap
  square; the vertical crossing of that square intersects both subpaths.
  One must explicitly truncate the paths before invoking grid intersection.
* Since `n/h<=3/2` for `n>=2`,
  `K<=2W/h-2<=3 alpha-2` when `T>0`; the carrier's weaker
  `K<=3 alpha+1` is therefore safe. There are `K+1` horizontal events and
  `K` vertical events. FKG yields the displayed positive bound with exponent
  `2K+1` (replace the exponent by an integer ceiling when defining a final
  closed-form constant).
* If `n=1`, `W<=ceil(alpha)`; if `W<3`, the fixed row uses at most two
  labels. The lower bound `r_q^(ceil(alpha)+2)` is safe in either small case.
* The statement's `m>ceil(alpha n)` gives `W<m` and `n<m`, so the literal
  target rectangle and every final concatenation rectangle embed in the
  labelled torus. This condition cannot be replaced by a source drawing.

No additional rounding defect was found in that final ordinary-grid step.
The unexplained source-to-ordinary-grid conversion is an earlier and
substantive missing prerequisite; it cannot be repaired by a bounded number
of extra edges along a large diagonal boundary.

## Disposition

Locally reconstructed in this manuscript: exact torus cellular component and
weight formulas, normalized `q^{+/-2}` likelihood control, correct closed-box
square-crossing comparison, separate-versus-joined boundary weight comparison,
a precise sufficient cut comparison, and a conditional-FKG correction of the
averaging issue. These are research arguments, not accepted production items.

Still unresolved locally: the full reflected disk and surgery construction
with its exact discrete dual identification and exterior attachments, and a
rigorous transfer from the rotated-rectangle geometry to the carrier's
ordinary-grid rectangle geometry (or an alternative direct gluing proof).
The current theorem is not ready to lose A2 or its escalation marker.

## 6. A fully explicit conditional transfer from rotated rectangles

The following reduces the source-to-ordinary-grid conversion to a precise
rotated-lattice helper. It does not require changing the target statement.
Assume the missing rotated-lattice result in section 4 has been established
on the original square torus expressed in coordinates `(u,v)=(x+y,y-x)`:
for even side counts and lattice-preserving translations, half-open squares
have horizontal-crossing probability at least `a(q)>0`, and half-open
rectangles of width `3L/4` and height `5L/4`, where `L` is a positive
multiple of eight, have vertical-crossing probability at least `b(q)>0`
whenever `5L/4<m`. Sides mean the extreme coordinate layers of vertices,
not all vertices merely adjacent to the rectangle boundary. This assumption
is exactly a square bound and a `5/3`-aspect bound in the rotated geometry;
a correct reflection/gluing helper can supply it. The quotient periods in
these coordinates are `(m,m)` and `(-m,m)`. Translations `(d,-d)` with even
`d` preserve the lattice and the quotient.

For `n>=16`, let

    L=8 floor(n/16),  d=L/4,
    W=ceil(alpha n),  J=ceil((W+2)/d),
    a_j=j d,  b_j=2-j d,  0<=j<=J.

Thus `L` is a positive multiple of eight, `d` is even,
`n/4<=L<=n/2`, and `d>=n/16`. Define squares

    Q_j=[a_j,a_j+L) x [b_j,b_j+L)

and the vertical connector rectangles, for `0<=j<J`,

    C_j=[a_{j+1},a_j+L) x [b_{j+1},b_j+L).

Every `Q_j` is a lattice-preserving translate of the same even square.
Every connector has width `L-d=3L/4` and height `L+d=5L/4`.
Both its horizontal-coordinate bounds lie inside both adjacent squares,
while its vertical-coordinate interval contains both squares' intervals.
A horizontal path in either square therefore has a subpath crossing the
connector horizontally: truncate between its last visit to the connector's
left coordinate layer and its first subsequent visit to the right layer.
That subpath stays within the connector because the original square's
vertical interval does. A vertical crossing of the connector meets both
horizontal subpaths. Indeed in this diagonal lattice two distinct primal
edges cannot cross at a nonvertex: the other diagonal of a unit coordinate
square belongs to the dual lattice. For two disjoint compact polygonal
paths with opposite side endpoints, a sufficiently small inward perturbation
away from their endpoints remains disjoint; adjoining an outside boundary
arc to one produces a polygonal Jordan curve separating the endpoints of
the other. This contradicts Jordan separation. Thus the paths have a shared
primal vertex, exactly as in the ordinary-grid crossing lemma.

Consequently the event that all `Q_j` cross horizontally and all `C_j`
cross vertically produces one connected open cluster touching a left-side
vertex of `Q_0` and a right-side vertex of `Q_J`. In original coordinates
`x=(u-v)/2`, `y=(u+v)/2`, every vertex of every one of these rectangles has

    1 <= y <= L,

The inequality follows from `a_j+b_j=2`: the minimum sum in each square is
`2` and the maximum is `(a_j+L-1)+(b_j+L-1)=2L`. Each connector has minimum
sum `a_{j+1}+b_{j+1}=2` and maximum sum
`(a_j+L-1)+(b_j+L-1)=2L` as well. Thus the entire connected cluster lies
in the target's vertical strip `0<=y<=n`.

Every left-side vertex of `Q_0` has `u=a_0=0` and `v>=b_0=2`, hence
`x<=-1`. Every right-side vertex of `Q_J` has `u=a_J+L-1` and
`v<=b_J+L-1`, hence `x>=(a_J-b_J)/2=Jd-1>=W+1`.
Take an open path in the connected cluster between the specified endpoints.
It is a genuine path in the lifted ordinary lattice: each rotated rectangle
has a fixed lift, and intersection vertices of adjacent rectangles have the
same lift. Even if different distant rectangles project onto the same torus
labels, a torus configuration assigns the same states to those labels, so
these finitely many lifted open paths remain compatible. Truncate the path
between its last visit to `x=0` before its first subsequent visit to `x=W`.
Nearest-neighbor ordinary edges change `x` by at most one, so such visits
exist. The truncated path stays in `0<=x<=W` and `0<=y<=n`, and is exactly
a target horizontal crossing. Its projection is injective on the target
because `W,n<m`.

Each individual square or connector embeds in the torus: both coordinate
extents are less than `m`, since `5L/4<=5n/8<m`; a nonzero period
`(km+lm,km-lm)` cannot have both coordinates strictly smaller than `m`
in absolute value. The assumed rotated lower bounds therefore apply to
every translated patch. Their events are increasing in the finite torus
edge labels even when nonadjacent patches overlap after projection. FKG
still applies and gives, with `c_0(q)=min{a(q),b(q),1}`,

    P(H(target)) >= c_0(q)^(2J+1).

Finally `W<=alpha n+1` and hence
`J<=16(W+2)/n+1<=16 alpha+4` for `n>=16`. Thus, for example,
`c_0(q)^ceil(32 alpha+9)` is a valid uniform positive bound in this range.
For `1<=n<16`, a fixed row path of `W` labelled edges uses
`W=ceil(alpha n)<=ceil(16 alpha)` edges and has probability at least
`r_q^ceil(16 alpha)`, where `r_q=1/(1+sqrt(q))` is the finite FK
conditional-open lower bound at selfduality. Taking the smaller of these
two constants proves the ceiling-width ordinary-grid statement **conditional on
the precisely stated rotated helper**, with no loss of any `q,alpha,n,m`
hypothesis. Truncating a ceiling-width crossing at the floor-width right side
proves the actual currently observed floor-width statement as well.

This proves a stable conditional transfer interface
`lem-csm-frontier-fk-rotated-to-axis-rectangles`. The unresolved authoring
obligation is now only the exact rotated reflection/gluing helper and its
`5/3` concatenation; the ordinary-grid transfer itself has an explicit
local argument above. The earlier disposition should be read with this
additional conditional result: no unconditional RSW proof is asserted.
