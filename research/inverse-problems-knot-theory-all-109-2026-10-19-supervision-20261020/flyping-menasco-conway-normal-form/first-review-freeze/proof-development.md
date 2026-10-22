# Four-punctured-sphere bubble normal form

NEW research proof, not yet accepted. The exact
primary-reading extent and output scope are in `source-and-exact-interface.md`.
The only additional retained theorem consulted was the Statement (not its
proof) of the finite-PL Loop Theorem.

## Input and category

Use an actual reduced prime alternating diagram of a nonsplit prime link L,
with its finite PL bubble realization. Let S be a connected finite-PL properly
embedded meridional four-punctured sphere in its compact exterior M. Smooth
inputs can equally be treated with the smooth Loop-Theorem Statement. S is
geometrically incompressible and pairwise incompressible in the page-37
definition. This is an input; diagram nontriviality is not substituted for it.
The puncture completion of S is an actual sphere in S^3 transverse to L.

We use the following precise retained interface:
`thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds`.
It says that, for a finite triangulated compact orientable PL three-manifold
and a connected boundary subsurface F, a disk map with boundary class outside
a specified normal subgroup is replaceable by a properly embedded PL disk
with boundary class outside that subgroup. Here the subgroup will be 1.

This interface implies the particular injectivity consequence needed here.
S separates M, because its puncture completion separates S^3. Give both cut
pieces M_0,M_1 the finite compatible triangulations obtained by subdividing
the given pair triangulation. If both maps pi_1(S)->pi_1(M_i) are injective,
the reduced-word normal form for their amalgamated free product injects
pi_1(S) into pi_1(M). If one map fails, apply the Loop Statement to the copy
of S in the boundary of that cut piece; a collar puts its boundary loop in
the relative interior of that boundary subsurface. The resulting disk is a
compressing disk for S. Geometric incompressibility therefore proves
pi_1(S)->pi_1(M) injective. No arbitrary TOP-surface straightening has been
used to obtain this category or this consequence.

All subsequent surface moves are finite PL disk/product isotopies, extended
to ambient pair isotopies by their explicit regular-neighborhood products.
After corner rounding, the identical construction works smoothly.

## 1. Actual bubble position and disk pieces

Move the four meridional collars along the actual link tubes away from the
finitely many bubbles. In each crossing ball take its actual polar arc from
the underpass side to the overpass side. Make S transverse to these arcs.
Disjoint small disks of S at their finitely many transverse intersections are
retained, and the remaining surface in each crossing ball is pushed radially
away from the polar arc. The radial annuli continue across the bubble into
a small outer collar; the isotopy is the identity at the OUTER boundary of
that enlarged neighborhood, not at the bubble boundary through which the
surface is pushed. The annuli avoid the two actual pass arcs, and their
disjoint product traces give an isotopy. Equivalently, first choose a thin
regular neighborhood of the polar arc on which the retained transverse
disks are standard, then expand its lateral boundary across the link-free
hemisphere sectors. The retained disks become the usual
quadrilateral saddle disks: two arcs on each hemisphere, with the upper and
lower pairings interchanged. No puncture is in the support. Thus this is a
move of the given S, not the construction of a new surface with the same
boundary data. A small transverse adjustment gives finite intersection
circles with both S_+ and S_-.

Among these positions choose one minimizing lexicographically the number of
saddle disks and then the total number of intersection circles. Only a
nonempty subset of N x N is minimized. All improvements below are actual
pair isotopies within this class; after each one the same small radial and
collar adjustment restores the class without adding saddles.

Every component of S in B_+ and in B_- is a disk. Here are the disk exchanges
behind this familiar assertion. Push any boundary circle C of a B_+ piece
slightly into that piece, obtaining C'. The sphere-boundary collar makes C'
an unknot bounding an embedded helper disk in B_+. Its circle intersections
with S can be removed by disk surgery. Indeed, an innermost helper-disk
circle that is essential on S would be a compression. Otherwise it bounds
an S-disk E. Among the circles of E against the helper disk choose one
innermost on E and replace the subdisk on the helper disk by a slightly
pushed copy of that innermost E-subdisk. Its interior misses the helper
disk, so the replacement is embedded and removes at least one intersection
circle. Repeat finitely. We now have a helper disk D with D intersect S=C'.
Incompressibility supplies the unpunctured S-disk E with that boundary.

The sphere E union D bounds a ball disjoint from L, by nonsplitting. Its
interior is disjoint from S: S minus E is connected and runs to the four
meridional collars, which cannot be inside a ball disjoint from L. The two
disk faces therefore have a product disk-exchange isotopy, supported in a
regular neighborhood of this ball. If the original B_+ component were not a
disk, E would have to leave that component and cross S_+ again. Exchanging E
for D then removes a saddle or an intersection circle and creates neither,
contrary to the chosen minimum. Apply the same argument below. Disjoint
disk pieces in a ball can be collared to the boundary in their nesting order;
these are the disk pieces used in all subsequent band and bigon moves.

## 2. Empty words and repeated bubbles

Associate to every intersection circle its cyclic P,S word: P records a
meridional puncture on an ordinary diagram edge and S records an arc across
a bubble. The number of P letters over all upper circles, or over all lower
circles, is exactly four.

There is no empty word. An empty-word circle lies on the common projection
sphere away from both L and the bubbles. Since the diagram is connected,
one disk it bounds misses the entire diagram and every bubble. Choose an
innermost intersection circle in that disk. Its actual disk piece above (or
below) and the empty sphere disk cobound a ball disjoint from L and from
the rest of S, by the same connectedness argument used above. Push that disk
piece across the empty disk. No saddle is added, and the intersection circle
is removed, contradicting minimality.

No intersection circle crosses one bubble twice. Suppose it did on S_+.
Between two adjacent such arcs take the hemisphere rectangle R with its
other two edges on the hemisphere equator. Replacing the chosen circle by
an inner one if necessary makes int R disjoint from S. The actual disk
piece above contains a band B joining the two chosen arcs. There are two
local cases, according to whether R crosses the pass on that hemisphere.

If it does not, a boundary-parallel arc of B and an arc of R cobound an
embedded bigon in B_+. One obtains it first in a collar of the disk piece
and R and cleans any closed intersections by the helper-disk surgery just
described. Push the band through this bigon and then R. In the crossing-ball
template this removes the two saddle disks containing its two ends. The
whole product neighborhood misses L, all other bubble axes, and all other
S-pieces. This is Menasco's Figure 5(b), expressed as an actual bigon isotopy.

If R does cross the pass, the two arcs belong to the same saddle sigma.
The band B together with sigma is an annulus whose core gamma has a
geometric meridian disk Z: span across the empty rectangle R, across a thin
collar of the band, and transverse to the single pass in R. Its interior
misses S and it meets L once. Pairwise incompressibility gives a disk E on
the puncture completion of S with boundary gamma and one puncture.
The two disks E,Z make a sphere meeting L twice. Primeness gives a ball
whose link is a single unknotted arc. Its interior must be on the E side
rather than contain S minus E. Otherwise S minus E, which has the same
fundamental group F_3 as S, would lie in the complement of that trivial arc,
a solid torus with cyclic fundamental group. Its inclusion into M would
factor through that cyclic group, contrary to the injectivity proved above.
Thus the interior of the product region between the punctured disks E and
Z misses the rest of S. Slide E along the trivial arc to Z, extending the
disk slide across its tube collar. This is a pair isotopy: its puncture moves
along the same link component. In the R,B,sigma template the slide opens
the two ends of B on opposite sides of the pass and eliminates sigma.
There is no other bubble in this neighborhood; any old saddles in E are
removed. Finally its puncture collar slides along the same pass to the
adjacent ordinary edge, just outside the bubble; no other crossing ball is
met. This is the actual meridional disk slide of Figure 5(a).

Both cases contradict the minimum. The argument below is identical. In
particular the two upper arcs of any saddle belong to two distinct upper
circles, and its lower arcs belong to two distinct lower circles.

## 3. Alternation and the finite word exclusion

Record, at a visit to a bubble, on which side of the oriented intersection
circle the actual pass lies. At consecutive visits the pass sides are
opposite if there are an even number of intervening P letters and equal if
there are an odd number. To check this rule, start on the ordinary edge
leaving the first bubble. Each P changes the side of that edge relative to
the circle; at the next crossing alternation changes overpass to underpass,
which introduces the remaining side reversal. This gives exactly the two
cases of Figure 6. Going once around a word containing S returns to the
initial side, so its number of P plus S letters is even. A pure-P circle
crosses the even-valent planar diagram an even number of times: count the
half-edges inside either of its disks modulo two. Thus every word has even
length.

We need the full exclusion, not just even length: no cyclic word is P^i S^j
with j>0. View the upper circle C from the common projection sphere and
change its saddle pairings to the lower ones, without moving S. In a cyclic
four-gate notation (a,b,c,d), upper pairing is (a,b),(c,d), and lower pairing
is (a,d),(b,c). These are the actual two adjacent pairings on a quadrilateral
saddle, not a smoothing selected independently at different visits.

When j=1, label its upper C gates a,b and its other upper gates c,d, so the
lower pairing is a--d and b--c. The remaining part of C joins b back to a.
The lower path d--a--(remaining C)--b--c therefore contains both lower arcs
of that bubble, forbidden by section 2.

For j>1, take either projection disk bounded by C. The side rule forces at
least one of its bubble passes to face into this disk. Below-resolution
arcs therefore enter its interior and have endpoints at the boundary
bubbles. Choose an edge-most such arc alpha on the side cut off from the
single P block. Its cut-off boundary interval beta contains only S visits.
The elementary gate check has two cases:

| alpha's endpoint bubbles | gates in the cut-off disk | resulting lower circle |
| --- | --- | --- |
| the same bubble | the two inner gates at that bubble | contains both lower arcs of that bubble |
| distinct bubbles | inward, outward, inward at the three successive turns | contains both lower arcs of the middle bubble |

Here is the reduction and the complete gate walk. At a boundary bubble the
other upper saddle arc is on the pass-facing side of the C arc. Thus its
two c,d gates lie inside the chosen projection disk exactly when the pass
faces into that disk. After the switch, these are precisely the endpoints
of its interior below-resolution arcs. Both endpoint bubbles of alpha are
therefore inward-facing. With no P on beta their pass sides alternate.
An inward-facing intermediate bubble would have two more interior endpoints
in the disk bounded by alpha and beta. Their arcs cannot cross alpha, so
would give an arc in this disk, contrary to edge-mostness. Consequently
there is exactly one intermediate bubble, outward-facing: zero would
violate alternation at the endpoints, and two or more would include an
inward-facing bubble.

Number these three bubbles 0,1,2 along beta. At bubble i call the incoming
and outgoing C gates a_i,b_i, with other upper pair c_i,d_i and lower pairs
a_i--d_i, b_i--c_i. The C edges of beta are b_0--a_1 and b_1--a_2.
The alpha endpoints bordering beta are c_0,d_2. The actual lower path is

    d_1 -- a_1 -- b_0 -- c_0 -- alpha -- d_2 -- a_2 -- b_1 -- c_1.

It contains both lower arcs a_1--d_1 and b_1--c_1 at bubble 1, so the closed
lower component containing this path visits that bubble twice, irrespective
of how the path continues outside the cut-off disk. In the same-bubble
case alpha joins c to d, and the lower path a--d--alpha--c--b already
contains both lower arcs there. These are exactly Figure-7(b),(c), now as
gate walks rather than an appeal to the drawing. Reflection deals with a
lower starting circle.

Consequently every circle has at least two P letters. A zero-P word is
S^j, already excluded (and the empty word was removed). A one-P word is
cyclically P S^j, also excluded; P alone has odd length. A circle with two P
and two S must therefore have cyclic word PSPS rather than PPSS.

## 4. Classification for the given sphere

Write u,l,s for the numbers of upper circles, lower circles, and saddle
disks. Section 3 and the total count of four P letters give u,l<=2. The
actual pieces give chi(capped S)=u+l-s. One way to calculate this without
identifying a puncture with a saddle is to use the upper and lower disk
pieces as 0-handles and each saddle as a 1-handle; the ordinary edge collars
just join the indicated boundary intervals. Punctures are filled only for
this Euler-characteristic calculation. Since the input completion is a
sphere, u+l-s=2.

If s=0, the upper/lower circle systems coincide outside the bubbles and
every component is a punctured sphere obtained by gluing one upper disk to
one lower disk. Connectedness gives u=l=1. Its four P letters and lack of
S letters give P^4. The disk pieces can be pushed into collars of the
projection disk they bound, in their actual complementary balls. This is
the visible Conway sphere over a Jordan curve meeting the diagram four
times, reached by an ambient pair isotopy.

If s>0, a saddle has distinct upper and distinct lower circles, so u=l=2.
Hence s=2. Each upper circle visits both saddle bubbles once (each saddle
has two upper arcs), and has exactly two P letters; similarly below.
Section 3 gives PSPS for each of the four words.

The hidden embedding, not merely its words, is determined as follows.
Collapse each saddle bubble in the actual projection sphere to a vertex.
The two disjoint upper circles become four edges between the two vertices.
There is exactly one P on each edge. A planar embedding of these four
parallel edges has cyclic order (1,2,3,4) at one vertex and the reverse order
at the other: any other order interlaces two disjoint edges in a disk.
The upper disks pair adjacent edges (1,2),(3,4), and the lower disks pair
the other adjacent pairs (2,3),(4,1); using the same pairing below would
contradict the actual saddle switch. This is precisely the annular
two-circle scheme at the left of Figure 9. Its four complementary regions
are disks. Reinsert the two actual saddle templates and the actual link
pieces in those four disks. This gives the Figure-9 hidden pattern, with
arbitrary two-strand tangle regions in place of the four nonsaddle crossings
of its Borromean reference example. No flype or extra crossing insertion
has been performed in this argument.

## 5. The given marking and choice scope

Every replacement of an S-disk above was implemented by a disk/product
isotopy in an actual link-free ball or in a trivial-arc ball, not by cutting
out S and selecting an unrelated representative. Concatenating the finite
isotopies gives psi_t beginning at the identity with psi_t(L)=L. Link
components cannot be permuted during such an isotopy: their labels take
values in a finite discrete set and start fixed. The restriction to an
oriented component remains orientation preserving for the same reason.
Surface parametrization and puncture labels travel by restriction of
psi_t, and peripheral meridians travel with their tube collars. Punctures
are permitted to slide; no pointwise peripheral framing is claimed.

For a given map h whose sphere image is S, use psi_1 composed with h. The
path psi_t composed with h is the required pairwise isotopy from the GIVEN
map, not an unrelated map inducing the same peripheral permutation.

All choices are finite once the finite diagram and surface triangulation
are fixed, including the finitely many helper-disk surgeries and integer
complexity reductions. This proof does not itself require countable choice;
it is compatible with the full-AC scope of the original flyping task.
