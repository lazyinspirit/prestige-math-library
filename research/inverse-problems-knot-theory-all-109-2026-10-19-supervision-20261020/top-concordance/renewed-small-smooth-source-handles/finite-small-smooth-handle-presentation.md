# Finite control-small smooth source handles under countable choice

New prerequisite authoring, 2026-10-21. Frozen draft for independent review.
No accepted triangulation or other supplier Proof was read. The source is
an actual smooth manifold, not an unsmoothed TOP control base.

## Exact claim and collar convention

Assume AC_omega. Let C be an actual compact smooth n-dimensional cobordism
with finitely collared corner faces, incoming and outgoing ends, and the
supplied smooth product structure on its side. Here n may be any finite
positive dimension; in the application n>=6. Let q:C->B be continuous,
where B is a metric control space. Given any finite open cover of q(C),
there is a finite smooth handle presentation relative to the incoming end
and the fixed side product such that each WHOLE closed handle product,
together with an open attaching/product-collar neighborhood of that product,
is mapped by q into one specified member of the cover. The reversed handle
uses the same underlying product and collar carrier, hence the same bound.
All attaching maps, normal germs, and collar transition maps are actual
smooth maps in C. The initial collar is exported with its actual fiber
homotopy and a prescribed small track bound, in both directions along that
same fiber. ALL regular pieces belong either to a whole handle/bridge
carrier or to the finite small product transports in its explicit total
track budget; none is discarded as a regular Morse-flow remainder.

Equivalently one may start with arbitrary positive continuous eta on B
and a prescribed finite refinement of eta-small control neighborhoods:
the construction works for that refinement. It is not restricted to a
fixed scalar control radius.

A protected side/end product retained outside the operating region is
TRACKED BACKGROUND: its supplied product homotopy must already meet its
own prescribed control bound. This is the actual consumer's product-base-
constant situation. No untracked long protected side strip is included in
the new thin initial collar. The final collar bound includes the supplied
background bound and the explicitly budgeted finite displacement. Without
that background hypothesis the stronger controlled-product criterion is
not exported.

The prescribed product collars have nested genuine smooth frontiers. An
inner open product germ is kept literally fixed; a slightly larger product
collar is supplied in which a smooth cutting frontier can be chosen. For a
compact protected set in a product U0 x I, a compact smooth domain D0 in U0
and the frontier of D0 x I supply this data. No arbitrary wild closed or
open protected set is asserted to have such a frontier. A supplied finite
already-small handle package may be retained if it has a compatible smooth
collared frontier and forms a specified relative subpresentation; the proof
is applied to the complement. A slab already supplied with the required
small handles is consumed without subdivision.

The preexisting large product collar of an entire end is not itself one
small handle. It remains the unchanged product part of the relative
presentation. The smallness assertion concerns each individual handle and
its individual attaching/product collar. Without this convention even a
large fixed incoming end would make the assertion false.

## Literal supplier Statements

Only the following Statements/Definitions were consulted for this proof.

* `thm-morse-sard-for-smooth-manifolds`: under CC critical values of a smooth
  map of smooth manifolds form a null set.
* `thm-morse-lemma`: a nondegenerate critical point has an actual smooth
  quadratic coordinate chart with its actual index.
* `lem-local-morse-sublevel-pair-is-a-handle-pair`: under CC the local change
  is a rounded source handle with an actual attaching germ; its complement
  in a compact one-critical-point band is a regular collar.
* `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms` and
  `thm-morse-functions-and-handle-decompositions-correspond` state CC for
  compact collared triads with disjoint whole incoming/outgoing boundary
  components. They can be used on such pieces, but their Statements do not
  by themselves cover mixed faces or a vertical side. Section 4 proves the
  precise finite relative Morse assertion needed here instead.
* `def-handle-decomposition-relative-to-the-incoming-boundary` and
  `def-attaching-a-smooth-handle-with-corner-rounding`: the whole-handle
  and explicit monotone collar-profile conventions used in 3c.
* `def-smooth-cobordism-triad-for-morse-theory` and
  `def-morse-function-adapted-to-a-cobordism` fix those last conventions.

In particular neither a full-AC smooth triangulation theorem nor the
full-AC relative jet-transversality Statement is a logical input.

## 1. Compact operating region and buffered source cover

Remove only the prescribed product portions from the region on which new
handles are to be made. End collars are restored unchanged at the end. The NEW
incoming collar is thin directly at its end. The fixed side product is
retained separately with its SUPPLIED track bound, not declared small
merely because it is a product. Choosing its outer smooth frontier
in the larger supplied product collar makes the remaining operating region
compact and smooth with corners. The smaller fixed open germ is untouched.
At the outgoing end the reserved product collar is restored as the final
product part. A retained relative subpresentation is treated in exactly the
same way using its supplied collared frontier. Thus all new cutting,
rounding, and flow operations occur off the protected inner open germ.
We continue to denote the operating compact manifold with corners by C.
Its original boundary faces are labelled incoming or outgoing, with fixed
collar coordinates. Artificial vertical sides introduced below are not
additional assumptions on C.

Pull the prescribed cover back by q. By compactness and ordinary local
smooth charts, choose FINITELY many pairs of relative-open chart domains
V_i^- subset V_i with closures of V_i^- in V_i, covering C, such that
closure V_i is mapped into one chosen control set O_i. Domains and closures
are taken in C at boundary points. Compactness lets these choices be made
as one finite tuple; no choice over all points is needed. If desired first
choose the finite tuple of chart neighborhoods with compact closure, then
shrink it by a Lebesgue number in any compatible metric on compact C.
Finite chart bump functions give smooth phi_i:C->[0,1], equal to one on
closure V_i^- and supported compactly in V_i. They extend smoothly across
corner charts. The construction uses ordinary Euclidean bump functions
restricted to those charts, and a finite partition of unity.

The sets {phi_i>2/3} cover C. We retain the buffer between their compact
superlevel sets and C\V_i. All later roundings and attaching collars will
be chosen inside those buffers. This is the source of actual whole-handle
control; a merely small critical-point neighborhood would not suffice.

## 2. A finite normal-crossing cut into small chambers

Choose t_i in (1/3,2/3) successively so that the hypersurfaces
H_i={phi_i=t_i} are mutually transverse on every original boundary stratum.
Here is the finite regular-value argument. Having chosen t_1,...,t_{i-1},
restrict phi_i to every intersection of a subset of the earlier H_j with
each original open boundary stratum, including the interior. There are
finitely many such smooth manifolds. The Sard Statement says each has a
null critical-value set; a finite union is null. Choose t_i outside it.
Empty intersections impose no condition. Restrictions may be noncompact;
the quoted Sard Statement applies to smooth manifolds, not just compact
ones. This proves simultaneous transversality, including all corner strata.
Only finitely many choices of regular values are made.

Put r_i=phi_i-t_i. For a sign vector sigma in {+,-}^m let

    Q_sigma={r_i>=0 if sigma_i=+; r_i<=0 if sigma_i=-}.

Transversality says every nonempty Q_sigma is a compact manifold with
corners, with the indicated inequalities as independent local boundary
coordinates when they vanish. It has finitely many components: components
of a compact manifold with corners are open, and their cover has a finite
subcover. At every point at least one phi_i>2/3>t_i. Thus the all-negative
chamber is empty. Each nonempty Q_sigma has a positive sign; fixing any
such i gives

    Q_sigma subset {phi_i>=t_i} subset V_i.

Consequently that ENTIRE chamber, regardless of its topology, lies in one
buffered control set. Its diameter, its internal topology, and its number
of critical points will not need estimates. Fix the least positive index
as its control label. Closed chambers meet only on their indicated faces.

## 3. Actual rounded prefixes, product tracks, and assignment of all pieces

This section replaces the first draft's incorrect assertion about ambient
isotopy of raw corners. No raw corner is smoothly isotoped to a smooth
front. We construct smooth fronts directly, compare ONLY smooth fronts,
and define the added blocks by actual set difference. The coordinates of
the original normal-crossing cuts are used to do this explicitly.

### 3a. Monotone Boolean fronts and the reentrant test

Keep the lexicographic order, preferring + before -. The exact identity
for the intersection of a new closed chamber with the preceding raw union is

    A_sigma = union_{sigma_i=-} (Q_sigma intersect H_i),

with the original incoming faces added. For the forward inclusion use the
first differing sign of an earlier chamber. For the reverse inclusion flip
one negative sign to positive. In an orthant this is a union of coordinate
facets. In particular the incoming union of two facets in s,t>=0 has the
coordinate equation MIN(s,t)=0. It is not the zero set of max(s,t).

A prefix of a lexicographic list of sign vectors is upward closed for the
coordinatewise order -<+. Consequently, if I_j is its set of sign vectors,
its raw union has the following single Boolean formula, away from the
already present incoming collar:

    u_j(r) = max_{sigma in I_j} min_{i:sigma_i=+} r_i,
    raw prefix = {u_j>=0}.

Redundant sign vectors may be retained. Before the final prefix every
minimal sign vector has a positive coordinate. The final prefix is the
whole domain and does not need a defining u. Each u_j is 1-Lipschitz in
sup norm, nondecreasing in each argument, and satisfies
u_j(r+t(1,...,1))=u_j(r)+t. Also u_j<=u_{j+1}. Include the initial collar by
adding its defining coordinate r_0 as another alternative:
max(r_0,u_j). Its frontier was selected transverse to the finitely many
cuts by the same regular-value argument. The formula for the initial stage
alone is r_0. This is an actual initially thin incoming collar, not the
union of all later regular-flow pieces.

Before this operation smoothly clip each cut coordinate at fixed values
+1 and -1 outside a small neighborhood of its zero hypersurface, using a
strictly increasing coordinate near zero. These zero neighborhoods can be
chosen as small as needed. Transversality is unchanged near their zero
sets. Convolve the min/max functions in these finite cut-coordinate
variables with ONE nonnegative smooth kernel of integral one supported in
the sup-norm ball of radius epsilon. Write v_j for the results. Exactly,

    |v_j-u_j|<=epsilon; v_j<=v_{j+1};
    partial_i v_j>=0; sum_i partial_i v_j=1.

The last equality follows by differentiating translation equivariance of
the uncomposed min/max function. A nonzero derivative at a zero level can
involve only coordinates with |r_i| bounded by a fixed finite multiple of
epsilon: a coordinate contributes only when it realizes the winning value,
and convolution changes it by at most epsilon. At the joint zero set of
such coordinates their differentials are independent on the relevant
original boundary stratum, and remain so on a sufficiently small uniform
neighborhood. Thus d(v_j composed with the clipped cut coordinates) is
nonzero at the levels used below: it is a nonzero nonnegative combination
of independent differentials. There are finitely many subsets to check.

Fix ONE b>2, independent of j, and put

    P_j={v_j(r(x))>=-b epsilon}.

These are nested actual smooth-front domains, containing their raw
prefixes and lying in neighborhoods of them tending to zero with epsilon.
The initial one is an actual thin incoming collar. Coincident portions of
adjacent fronts are allowed; they are the unchanged portion of a relative
attachment, not material which must be transported across the manifold.

There is also a useful EXACT locality statement. Outside a prescribed
small neighborhood of the newly added closed chamber, the two raw Boolean
conditions agree for every sign choice of the still-small coordinates.
Other coordinates there are clipped to their fixed positive or negative
values. After those fixed signs are substituted, the two min/max formulas
are identical near zero: distribute min over max and discard redundant
terms by absorption. These identities hold in every linearly ordered
lattice, so equality of the monotone Boolean conditions gives equality of
the reduced min/max expressions. Nonzero clipped coordinates stay bounded
away from zero during convolution. It follows that adjacent rounded fronts
are EXACTLY IDENTICAL outside that chamber neighborhood. The common b is
important here. No increasing global level shift is used.

This constructs the fronts directly, rather than isotoping their raw
polyhedral ancestors, which would preserve the wrong tangent-cone type.

Here is the requested reentrant test. The third raw quadrant prefix is
{s>=0 or t>=0}, so its Boolean function is max(s,t). A concrete alternative
to convolution in this two-coordinate chart is

    M_e(s,t)=(s+t+sqrt((s-t)^2+e^2))/2.

The derivatives are positive and sum to one. The level M_e=0 rounds into
the negative quadrant, with st=e^2/4 and s+t<0. Its small cap is INCLUDED
in the superlevel domain. It is not discarded and not obtained by a
smooth ambient isotope of the reentrant boundary. For the first quadrant
intersection use the analogous smooth MIN with the minus square root.
Both are instances of the monotone-front construction just given.

Near physical side collars extend the cut functions constantly in the
boundary-normal variable before smoothing. Thus all fronts and comparisons
are product in that normal variable. At the outgoing end first work in a
slightly shortened parallel copy of C, leaving an arbitrarily thin reserved
outgoing collar. One can make every intermediate front miss that end by
including its boundary defining coordinate as an additional minimum; the
same monotone convolution construction applies. Use the same parallel cutoff at every stage; monotonicity preserves
nesting. At the final prefix only the
outgoing parallel cutoff remains: P_last is exactly the shortened copy of
C. Restore its reserved outgoing collar by the original product coordinate.
All such shortenings and restorations have arbitrarily small normal tracks.
Incoming end coordinates are fixed. There is no assumption that a union of
balls has the right final boundary: the final prefix here is specified by
the actual outgoing boundary coordinate of C.

### 3b. The finite smooth-front product comparison

Fix a buffered open neighborhood N_j of Q_j with compact closure in its
assigned V_i. If a new component is present, include it in N_j. Outside N_j the two rounded fronts are identical by exact locality.
In an annulus INSIDE N_j, outside a smaller neighborhood of Q_j, both
fronts round the same oriented raw strata. They can be compared by
interpolating their smoothed defining functions and the common level. At its zero level each interpolated differential is still a
nonzero nonnegative combination of the independent active dr_i. A vector
field solving dF_t(X_t)=-partial_t F_t therefore gives a smooth isotopy
BETWEEN THOSE ALREADY SMOOTH FRONTS. Use the right inverse of the finite
Gram matrix of the active dr_i, patched by a finite partition on the
compact front. Near their zero levels the two defining functions differ
by O(epsilon), and the right-inverse bounds are finite. Hence this isotopy
has source tracks O(epsilon), uniformly on the compact front. It is
product in the supplied normal collar coordinates. Extend this comparison to the identity outside N_j; its transition
annulus is still inside V_i. It is not applied to a raw corner.

This comparison has the following concrete cutting interpretation, useful
for accounting for pieces. Choose a compact smooth footprint F in the old
front, with its boundary in that transition annulus, containing all places
where a long or new component of the difference can occur. A bump equal
to one on that compact bad locus, supported in N_j, and one regular value
give F. In a neighborhood of its boundary the two fronts have the product
coordinates just constructed. Cut the difference along the product wall
above boundary F. The outside part is a thin product of the old front, trivial outside N_j;
the inside part is a compact block R_j contained in N_j, with its incoming,
outgoing, and wall faces. New components not meeting the old front are
included in R_j. Each wall is a literal product, not an inferred
homotopy equivalence.

At either end of a product wall the section is a quadrant. Round that
wall/end corner by a monotone arc, keeping its two endpoint neighborhoods
in their product coordinates. Put the cut-off cap on the OUTSIDE PRODUCT
side of the wall. In its section this cap is the interval between the arc
and the two original segments; following the common transverse diagonal
identifies it with the adjacent shortened product interval. The diagonal
is transverse to both arc and segments except at their original corner,
which is an outer endpoint of the bookkeeping chart, not a point at which
a smooth isotopy is asserted. The two resulting smooth product charts
use the same arc and diagonal. Thus the cap is part of that outside
product piece, not missing material. All these wall caps occur in the
O(epsilon)-thin product zone. Physical side-collar sections are treated by
taking the product of this construction with their fixed normal coordinate.
After this assignment R_j has a smooth rounded boundary with a specified
incoming boundary submanifold A_j and the remaining boundary; the removed
wall caps belong to the outside product piece. No internal corner of a
raw sign union is being used as its boundary.

Consequently the actual passage from P_{j-1} to P_j consists of exactly:
(1) a thin product identification outside the active block, including all
wall caps; (2) addition of R_j along A_j, with an arbitrarily short
insertion collar. This is equality by the preceding cutting of the actual
set difference. These two pieces exhaust it. Product identifications are identity off N_j and use
only the already smooth fronts and the assigned wall caps. Their source
tracks tend uniformly to zero with epsilon. All non-thin material is in
R_j inside V_i. In particular smoothing a reentrant corner has assigned its
whole added cap to R_j if it is in the active region, and to the thin
outside product if it is on its product wall.

This is also a construction of compatible rounded prefixes: start with
P_0 and perform these actual cuts and gluings in the already defined P_j.
The last stage is the specified shortened C. Restoring its outgoing collar
then gives the original C. There is no final unknown remainder or putative
isotopy from a raw union to C.

### 3c. Turn ALL active product material into whole handles

A useful elementary bridge construction prevents regular flow inside R_j
from being charged to the initial collar. Its input is a smooth compact
block R with incoming boundary submanifold A (possibly with boundary),
embedded in one of the N_j. Round its side/end bookkeeping corners as in
3b and keep their actual product charts. Push a copy of R a short distance
away from A in its supplied collar. Use a smooth collar-length function
positive on a neighborhood of the CLOSED A, not a function tapering to
zero at boundary A. Its taper is on the outgoing wall annulus beyond A.
The extra collar in that annulus is assigned to the outside thin wall
product of 3b. Thus the remaining bridge over A is literally A x[0,1],
without a cusp at its edge. Present that entire disjoint copy by
an ABSOLUTE finite handle decomposition (incoming empty). This is the
empty-incoming case of the CC compact Morse/handle Statement, or the
special case of Section 4 with the whole smooth boundary outgoing. By the
literal definition of a handle decomposition its final handlebody is all
of R, not critical balls plus an unrecorded outgoing product. Its finitely
many actual handle embeddings are transported by that whole-block
identification and lie in N_j.

What remains between the old prefix and this copy is exactly A x[0,1].
Give A an absolute finite smooth handle presentation as well. If

    H=D^k x D^(n-1-k)

is one of its handles, its prism H x[0,1] is an n-dimensional (k+1)-handle:
its attaching region is

    ((boundary D^k)x[0,1] union D^k x{0,1}) x D^(n-1-k)
        = boundary(D^k x[0,1]) x D^(n-1-k).

The lower end attaches to the old prefix, the upper end to the disjoint
copy of R, and the lateral part to the earlier prisms. The remaining
lateral face is its free boundary. For k=0 this is a 1-handle joining those
two pieces. This formula, with the usual fixed monotone corner profiles,
gives actual normal framings and covers EVERY point of A x[0,1]. Boundary
collars of A give precisely the side/end corner sections already assigned
in 3b; their caps are on the specified outside product side. Shortening or
inserting this bridge uses its own product coordinate, so its gluing is the
original gluing of R, through a smooth collar rescaling between already
rounded boundaries. This rescaling is identity off N_j. No raw corner is
sent by a smooth diffeomorphism to an arc.

All absolute handles of R and all prism handles of the bridge are thus
whole actual products in N_j, including every formerly regular part of R.
There is no flow line from a distant incoming point through successive
chambers in this construction. The only nonhandle pieces left after this
operation are the THIN outside product pieces explicitly in 3b, supported
in N_j and trivial away from it. They move
previously embedded whole handles as wholes; they do not become long
incoming collar fibers. A remains in N_j, so its entire absolute handle
presentation and all bridge prisms remain in that same control set. The
finite Morse functions used to obtain these two absolute presentations
need no small critical charts: their complete underlying manifolds are
already small.

### 3d. Tracked initial collar and total displacement ledger

Before choosing epsilon choose a compatible source metric on the compact
piece and all the finite open buffers. Choose a thin incoming collar
c:M_0 x[0,h]->C so that each q(c(x,t)) fiber is within a prescribed first
control budget of q(x). This follows from uniform continuity on the compact
incoming collar; variable budgets use a finite refinement. Incoming is
fixed by all the front comparisons.

There are finitely many stages. Prescribe in advance positive budgets
beta_1,...,beta_s for the source tracks of their outside product
identifications, including all wall caps, bridge edge rescalings, and the
final outgoing restoration. Take their sum smaller than the distance
needed to stay in every assigned finite buffer and so small that q images
of that total source displacement meet the desired residual control budget.
Choose epsilon and the finitely many collar widths small enough to satisfy
ALL those bounds. The preceding O(epsilon) comparisons and finite compact
collar charts justify this simultaneous choice. If an intermediate
embedded handle is moved by later product identifications, its TOTAL
movement is bounded by sum beta_j, so it and its full collar still lie in
its assigned V_i. This uses the complete finite list, not an assumption
that a composition of short maps is short without a bound.

Let Phi be the composite of these product identifications on the old
pieces. On the newly chosen thin portion, the final initial collar is Phi composed with c; it is an actual
embedded product, with the incoming end fixed. Its fiber path is

    H_x(t)=Phi(c(x,t)).

For every t, the distance between H_x(t) and c(x,t) is at most sum beta_j.
Thus uniform continuity of q bounds the ENTIRE H_x track by the original
thin-collar budget plus the residual displacement budget. The reversed
fiber uses the same path image, so it has the same control. The datum
exported is this actual parametrized collar, not an unspecified regular
Morse flow. All other regular pieces are either part of the whole block
handles/bridge handles of 3c or the finite tracked identifications included
in Phi. Include the supplied tracked background product with its own bound; its
protected inner germ is fixed throughout. This proves that the final C is
exactly that tracked initial product collar/background union its genuine
ordered whole handles, with the specified corner
roundings and no uncontrolled regular remainder.

## 4. Finite relative Morse data inside a rounded chamber

We give the finite relative Morse construction because a chamber may have
the product vertical side just described. Let (Q;A,B,S) be that rounded
compact chamber. The side is a specified product S=E x[0,1] with endpoints
on A and B. The same construction works with any of these faces empty.
Collars and side coordinates supply a smooth f0:Q->[0,1] equal to an
incoming normal coordinate near A, equal to one minus an outgoing normal
coordinate near B, and equal to the side coordinate t on S and on a
smaller side collar. Use these expressions on overlapping end/side product
collars, where they agree after the usual affine normalization of the
normal coordinate, and extend through the interior by a finite partition
of unity. The extension can be kept strictly between zero and one in the
interior. Its differential is already nonzero on an open boundary collar.

On a compact core outside a smaller such collar take finitely many chart
bumps beta_l whose unit regions cover that core. In their coordinates use
all functions beta_l x_lj. At every point of the core, the differentials
of this finite list span T*Q, because some beta_l is identically one in
a neighborhood of that point. For the finite coefficient vector a set

    f_a=f0+sum a_lj beta_l x_lj.

All bumps vanish on the fixed boundary and side collar. Coefficients small
enough preserve the boundary differential and the strict interior range.
The section (x,a)->d_x f_a of T*Q over the interior is transverse to zero:
on the core its coefficient derivatives span the fiber, and off the core
there are no zeros for sufficiently small coefficients. Hence its zero set
Z is a smooth manifold. A regular value of the projection Z->R^M is
precisely a coefficient vector for which every Hessian at a critical point
is invertible. Indeed solving the tangent equation

    Hess(f_a) v + sum b_lj d(beta_l x_lj)=0

for every prescribed b is equivalent to surjectivity of the Hessian, since
the coefficient terms span the whole cotangent fiber. Apply the CC Sard
Statement to this finite-dimensional projection and choose one arbitrarily
small regular coefficient vector. Thus f_a is Morse relative to the ENTIRE
prescribed boundary/side collar, without invoking a general relative jet
transversality theorem. The critical points are isolated and in a compact
core, so there are finitely many. If values coincide, add independent small
bumps constant near those points; sufficiently small C2 errors on their
closed transition annuli and on the compact complement preserve the critical
points, their indices, and the absence of new zeros. Choose the finitely
many constants to make the values distinct. This gives an excellent f.

Choose its gradient-like field explicitly: the quadratic descending field
in finitely many disjoint Morse charts; minus the product gradient in the
fixed end collars; and minus the side-coordinate vector field on the fixed
side collar. Choose a finite partition of unity with these expressions
fixed on smaller neighborhoods and a metric negative gradient elsewhere.
Each term has df(X)<0 away from critical points, so their convex combination
does too. It is tangent to the vertical side, and agrees there with the
specified product field. Extend across the boundary collars and cut off on
a compact neighborhood in a boundaryless extension; the extended field is
complete because it has compact support. This does not assert that an
outward-pointing field has a complete flow staying inside Q.

The Morse lemma gives the actual finitely many local quadratic charts.
Apply the local sublevel handle Statement in each one-critical-point band.
Outside those charts the normalized field X/(-df(X)) identifies regular
levels: a trajectory stays in the compact band until it reaches its other
level, and cannot escape the vertical side because the field is tangent
there. Ordinary flow uniqueness gives inverse identifications. Compact
bands and fixed nonzero df(X) there give the required finite-time bounds.
This assembles an actual finite relative handle decomposition of Q rel A,
product on S. All source factors remain source factors; index k gives
D^k x D^(n-k). The attaching normal germ is supplied by the same Morse
chart and actual flow, not by an algebraic CW attachment. Its entire image
is in Q, with a short attaching collar in the incoming collar of Q.
This proves the needed corner-relative Morse assertion using only the
literal local Morse and Sard Statements.

## 5. Assembly, actual whole-handle filtration, and choice ledger

Concatenate the absolute block handles and bridge-prism handles of 3c in
the finite prefix order. Incorporate each thin outside product identification
by transporting the existing prefix via its actual collar map. Section 3d
bounds the TOTAL displacement of every such transport and its inverse.
The last prefix and outgoing restoration are the original C. Therefore the
result is exactly a genuine relative filtration

    C = C_-1 union H_1 union ... union H_l,

with corner rounding at each attachment, where C_-1 is the tracked initial
collar and each H_i is a whole actual closed product. There is no separate
uncontrolled regular part. Small open attaching and full-product collars
can be chosen inside their already assigned V_i; the finite displacement
reserve keeps them there after all later transports. Reversing a handle
exchanges disk factors in that same carrier, so the dual product and its
local collar have the identical bound. This does NOT assert a globally
index-sorted dual presentation or bound a long reversed gradient flow.
The reversed initial collar fiber has the same path image as the supplied
forward fiber; a different chosen end requires applying the construction
with that end as input, not assuming a new global product.

For variable eta, choose the finite cover backwards from all required
budgets. Uniform continuity of q on compact C converts the finite source
displacement bounds in 3d into those control budgets. Actual paths lying
in a handle carrier stay in its O_i, not merely at their endpoints. Later
Whitney disks, matrix operations and final cancellation have their own
budgets and are not supplied by this source helper.

All selections are finite tuples: source charts and bumps; cut regular
values; finite sign chambers; the kernel and smoothing scales; compact
active footprints and smooth product walls; absolute Morse data for each
block and bridge base; critical charts; and the complete finite collar
and transport witnesses with their total bound. The Sard and local handle
Statements explicitly assume CC. The ordinary absolute handle Statement
used in 3c also expressly assumes CC and its definition is a WHOLE-body
presentation starting from the empty incoming end. No full-AC triangulation
or relative transversality theorem is used. Finite successive choices add
no choice principle. This proves the result under CC.

For a prescribed countable collection of compact buffered problems, apply
CC to the sets of their COMPLETE finite witness tuples, including the
initial collar trajectories, fixed-background agreement and all total
movement bounds. This does not invoke dependent choice over future
unknown inputs. Disjoint escaping height bands can be selected this way;
the supports are locally finite and the supplied unchanged collars agree.
A prescribed exhaustion can be used only if each finite problem includes
its required compatible frontier/germ data and has the witness property
proved here. No arbitrary dependent infinite refinement is asserted.

## Scope

This is a source smooth-handle prerequisite only. It does not triangulate
the TOP control base, change its dimension, prove controlled cancellation,
or supply reference groupoid paths outside the actual indicated carriers.
The controlled owner chooses the input cover backwards from chain,
Whitney, and completion budgets. No canonical/native/gate operation forms
part of this draft.
