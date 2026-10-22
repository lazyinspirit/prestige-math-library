# A controlled index filtration from finitely many color bands

New prerequisite, 2026-10-21. Author /root/top_free_abelian_torsion.
Draft for independent review; not an enlargement or rereading of the
accepted ORDERED source-handle helper. There is no claim that independent
handle swaps alone preserve whole-carrier control.

## Exact claim

Assume CC. Let C be a compact actual smooth n-dimensional source triad,
n>=6, with its genuine finitely collared faces, a continuous control map
q:C->B to a metric space, and the prescribed nested product germs. Protected
product background has its OWN supplied small track bound. An arbitrary
untracked long side product is not declared controlled. Given a positive
continuous control budget on q(C), there is an actual finite index
filtration

    C_-1 subset C_0 subset ... subset C_n=C,

where C_-1 is the tracked incoming product collar/background and C_j is
obtained from C_(j-1) by attaching finitely many whole j-handles. Actual
normal germs, both end collars, protected germs, and their product charts
are retained. Every whole handle and its short full-product/attaching
collar has the requested small control carrier. All regular product
material is included in those products or in the tracked initial collar;
there is no uncharged regular-flow remainder. The chosen initial collar
is exported with actual small fiber tracks. The dual disk product of a
handle uses that same small carrier; this is not a claim about an arbitrary
long reversed gradient of a different handle presentation.

One may reconstruct this presentation rather than sort an arbitrary
provided ordered list. No bound depends on the number of fine handles.
The actual bound below uses L=A*3^n, where A is the size of ONE fixed finite
smooth source atlas, chosen before the requested fine mesh. If variable
budgets are wanted, first refine the finite control cover on compact q(C).
The background budget must be allocated as part of that requested bound.

## Interfaces and actual source reading

Only Statements/Definitions of these accepted suppliers are used:

1. `thm-morse-sard-for-smooth-manifolds` (CC), `thm-morse-lemma`, and
   `lem-local-morse-sublevel-pair-is-a-handle-pair` (CC).
2. `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms` and
   `thm-morse-functions-and-handle-decompositions-correspond` (CC), on their
   literal compact collared triads. The mixed-side finite parameter Morse
   construction is the separately adopted source helper's exact local
   relative Morse interface, not a silent extension of these Statements.
3. `thm-relative-morse-smale-perturbation-of-a-gradient-like-field`: CC on a
   CLOSED manifold, arbitrarily C1-close, fixed on the chosen standard Morse
   balls. Its relative compact-with-side version is derived in Section 3.
4. Definitions of a finite handle decomposition and of smooth handle
   attachment with a fixed monotone corner profile (whole-body convention).

The adopted source helper supplies its local finite normal-crossing front
construction: positive smoothing of monotone min/max formulas, actual
rounded-prefix differences cut into active blocks and thin products,
explicit assignment of wall caps, and finite total track bookkeeping.
The parallel-color application of those mechanisms is proved below; an
index filtration was not part of that supplier's contract. No accepted
supplier Proof has been reread.

For the genuinely new fixed-field rearrangement argument, Milnor's actual
primary h-cobordism PDF was consulted: Section 4, Theorem 4.1 and its proof,
PDF42--44, in full; the final rearrangement Statement PDF49. Its elementary
proof is given in Section 4 here. The cached full primary PDF is in sibling
renewed-marked-torus/sources/milnor-h-cobordism.pdf. The 2-page Cairns1961
note was also acquired/read, but is NOT used: it abbreviates cell completion
and only announces the boundary extension. No triangulation conclusion,
full-AC relative triangulation, or generic full-AC transversality result is
an input.

## 1. Mesh-independent finite colors on the actual smooth source

Fix a finite smooth atlas with relatively compact coordinate boxes whose
smaller boxes cover C; let A be its cardinality. At corner points use the
actual supplied product corner charts. Fix this atlas ONCE. A finite
partition gives a source metric; no metric on an unsmoothed control space
is being constructed. All choices below are finite.

For an arbitrarily small mesh in each coordinate box, use the rectangular
lattice and its coordinate cubes. Retain the finitely many cubes meeting
its smaller compact box. Enlarge them by a fixed factor less than three,
and round them to smooth domains still in their enlarged boxes and still
covering the un-enlarged cubes. Explicitly a sufficiently high even-power
ball sum |x_i-c_i|^(2p)<R^(2p) works: choose p so n^(1/(2p)) is less than the
chosen enlargement factor, and choose R between the inner and outer cube
bounds. Intersect with physical boundary quadrants in corner charts.
Choose the finitely many R or scalar cut values generically, so all domain
boundaries meet each other and the original face strata transversely. The
finite Sard restriction argument supplies such values in the nonempty
allowed intervals. The cover and separation conditions are open conditions,
so these small generic adjustments preserve them.

Color each domain by (chart number, each lattice coordinate modulo three).
There are at most

    L=A*3^n

colors, independent of the mesh and number of domains. Distinct enlarged
boxes of the same color have disjoint closures; choose slightly larger
buffers still disjoint. Across different charts the chart-number component
of the color keeps them in different levels. By making the mesh small,
every domain and buffer lies in a prescribed source pullback control set
and has q-image diameter <d, where d>0 is selected later. The finite atlas
is fixed even when d decreases. Boundary chart functions are extended
constantly in the physical boundary-normal coordinate on a smaller supplied
collar; its width can be made small using compactness and the control
cover. This is auxiliary cutting inside the actual product germ, not a
change to its given smooth structure.

The protected background is kept as its supplied product; an active
compact domain is chosen with the actual nested smooth frontier. We use
only its given small product tracks when crossing that unchanged region.
At the incoming end choose a thin collar directly by continuity of q.
An outgoing parallel collar can likewise be chosen arbitrarily thin.
Neither is an untracked large fixed strip.

## 2. Parallel color bands with a bounded trajectory itinerary

Order COLORS, not individual mesh domains. The raw prefix after color l
is the incoming collar union all domains of colors <=l. These prefixes
cover the operating compact region after L colors. If r_i are their smooth
signed defining functions, a raw union is max_i r_i>=0; include the incoming
coordinate as an alternative. Clip inactive coordinates to +1/-1 and use
one positive convolution in their finite cut-coordinate space with one
common small outward level. The derivative coefficients are nonnegative
and sum to one. At a zero level only nearly zero cut coordinates contribute;
their differentials are independent by transversality. Thus these are
actual nested smooth fronts, including all reentrant caps. Their exact
locality follows by substituting inactive signs in the min/max formulas:
adjacent color fronts are identical off the buffers of the NEW domains.
The number of cut functions may grow with the mesh; the smoothing width
is chosen AFTER that finite family, and can be arbitrarily small.

The added active blocks for one color are disjoint, each in its domain's
buffer. To specify their boundaries, cut the actual difference of the two
smooth fronts by a product wall in the thin comparison annulus around each
new domain. Round wall/end sections by a common monotone diagonal profile;
put each removed wall cap in the OUTSIDE thin product interval. The inside
block and outside product exhaust the actual difference. New components
are inside blocks. This is the adopted local front/cap mechanism, here
applied to a union of disjoint supports in parallel. There is no isotopy
from a raw corner to an arc. The last front is the actual parallel copy of
the outgoing boundary, restored by its original product coordinate.

On each active compact block choose finite relative Morse data, product on
its actual vertical wall and end collars. For completeness the finite
relative construction is: extend the collar functions through its interior;
use finitely many supported chart coordinate functions whose differentials
span the cotangent fibers of a compact interior core; an arbitrarily small
regular parameter of the projection of {df_a=0} gives nondegenerate Hessians
by the CC Sard Statement. Distinct values are obtained by finitely many
small constant-near-critical bumps. Take the quadratic gradient in its
critical charts and a negative gradient elsewhere, patched by a finite
partition with the product field fixed on the wall. This is the local
mixed-side construction already adopted, not unrestricted jet transversality.
Put ALL critical values for color l in an interval I_l, with disjoint
successively ordered intervals for successive colors. Blocks of one color
are treated simultaneously. On the complement use exactly the thin
product coordinate. Concatenation gives a global excellent Morse function
F and a descending field X. Standard Morse chart balls can be chosen fixed
and disjoint. Retain actual product fields on all protected germs.

Here is the crucial itinerary statement, including regular material.
A trajectory of X is monotone for F and crosses each I_l at most once.
Inside that interval, the vertical product walls are invariant. It either
stays in one active block, or in the outside thin product. It cannot leave
one block through its wall and enter a second block of that color. If it
limits to a critical point, its terminal part stays in that one block.
Newly born components have no incoming piece and obey the same statement.
The entire q image of a block is in one set of diameter <d, regardless of
how many critical points or regular flow lines it contains. The outside
part is one actual thin product whose whole track bound was chosen before
building the Morse data. No assertion about small critical neighborhoods
alone is being used.

Choose the TOTAL budget of outside products, wall caps, end restorations
and finite rounding displacements to be <b. All are finitely many actual
compact product charts, so widths can be chosen after their number is
known. This does not change L or the fine domains. Every complete X
trajectory, including infinite-time ends at critical points and truncated
end trajectories, therefore has q-track diameter at most

    D=L*d+b+background_budget.                       (1)

This bound is independent of the number of critical points and individual
handles. All pieces of regular flow have been included in its proof.

## 3. Morse--Smale perturbation without importing a relative theorem

We need a Morse--Smale field while retaining the itinerary. The literal CC
supplier is closed-source, so the following finite reduction is part of
this new proof.

Extend C across its actual collars and double the remaining finitely
collared boundary faces to a closed smooth manifold D. Corner products are
doubled in their normal coordinates. The finite smooth function F and
field X already extend on a neighborhood of C by those product charts.
Extend F to D by a finite partition; make it Morse off that neighborhood
using the same finite coordinate-bump/Sard argument as in Section 2. Separate
its finitely many critical values. Extend X to a gradient-like field for
this extended F, with standard quadratic models on fixed disjoint critical
balls, using a finite partition where dF(X)<0. This is a finite extension,
not an uncountable atlas or an equivariant transversality theorem.

Apply the CLOSED CC Morse--Smale Statement, as C1-close as specified below,
fixing all critical balls. The new field Y is still descending for the
ORIGINAL extended F. We do not demand a relative MS theorem.

On every old vertical wall and every protected product collar, normalize
both nonsingular fields by -dF(field). The F-time interval is compact and
its old wall stays a positive distance from every critical ball. The
Y-flow from its incoming cross section defines a nearby invariant wall,
all the way to the other end of that interval. The elementary finite-time
ODE estimate on a compact coordinate cover gives displacement bounded by
constant times ||Y-X||_C1 (the usual Gronwall bound). Thus these walls remain
inside their disjoint buffers. Choose the closeness AFTER all these finite
constants, wall separations, and residual control budgets have been fixed.
No trajectory of Y can cross one of the new invariant walls. Outside the
walls there are no critical points; -dF(Y) has a positive minimum and the
crossing time is bounded. Its flow is uniformly close to the old thin
product flow. Hence outside tracks are still within their assigned b
budget, after a preallocated enlargement. New invariant walls for different
colors need not match each other at shared levels: they are used separately
in each interval, and F monotonicity still gives at most L intervals.

At a physical side the same flow-tube construction gives a nearby invariant
side, with incoming/outgoing cross sections on the respective regular end
levels. These bound a nearby copy C' of C. The finite product flowbox maps
identify the given collar coordinates with those of C'; extend through
the remaining small collar annuli by a finite normal-graph interpolation.
This gives a smooth diffeomorphism Theta:C->C', as close to the original
inclusion as desired, equal to the identity on the critical balls. On a
protected product its formula is literally its original incoming label
followed by Y flow in F-time. At the outgoing end extend that induced
boundary label by its finite collar; it is not assumed equal to the
unperturbed outgoing holonomy. Pulling back to the ORIGINAL C restores its
actual prescribed incoming, side, outgoing and protected product charts.
This does not change a given product structure by an unrecorded isotopy;
the resulting auxiliary field on C is exactly the product field in those
fixed coordinates (up to positive F-time normalization).

This collar identification is elementary: on a product E x[a,b], the map
(p,t)->flow_Y^(F-time t-a)(p,a) has invertible derivative for Y sufficiently
close to the vertical field. It is a smooth embedding on the compact
product, including its collars. Its endpoint label is a nearby diffeomorphism
on E, extended over the end collar by a normal graph. Intersections of
supplied product faces use their common incoming labels and commuting
product normal coordinates, so the same formula agrees there. A finite
partition extends only across the remaining regular collars; the positive
transverse derivative remains nonzero. No critical-point region is altered.

If q must be compared on C', extend it first by the continuous clamp
retraction of a collar neighborhood onto C; this requires no extension
property of B. Uniform continuity on that compact neighborhood and the
smallness of Theta preserve all assigned control buffers. Pull back F and
Y by Theta and denote them again by F,Y on C. A positive smooth time change, equal to the required factor on the fixed
product collars, makes its speed exactly the stipulated product speed if
needed; this leaves every trajectory and transverse intersection unchanged.
The latter is Morse--Smale
for all critical-to-critical intersections in C, since they are restrictions
of transverse intersections in the closed D, and diffeomorphism preserves
transversality. End/side trajectories stay in C by the restored product
coordinates. It is still gradient-like for F and has fixed standard
critical balls. Its invariant color blocks are still disjoint per color
and control-small. Thus (1) remains true, with a preallocated arbitrarily
small addition to b. This completes the relative derivation from the
literal closed CC Statement.

## 4. Sort critical VALUES, keeping the controlled field fixed

For a Morse--Smale descending field, the unstable manifold of p has
dimension index(p) and the stable manifold of q has dimension n-index(q).
Their transverse intersection has dimension index(p)-index(q). A nonconstant
orbit in it has a nonzero flow direction. Consequently there is NO
descending orbit p->q when index(p)<=index(q).

Consider two adjacent critical values in the wrong index order: p is at
the lower value, but index(p)>index(q) for q at the upper value. There is
no descending q->p orbit by the preceding dimension argument; the opposite
orbit is already excluded by F. In the compact band with exactly those two
critical points, the sets K_p and K_q consisting of their critical points
and all trajectory pieces tending to or from them are disjoint compact
sets. Compactness can be checked by cutting off small fixed critical balls:
outside them the normalized flow has a finite exit time on compact regular
bands; failure of compactness at the other ball would give the forbidden
connecting orbit. There are no other critical points in this band.

Here is the actual fixed-field local rearrangement proof. On the incoming
regular face choose a smooth function beta equal to zero near its K_p
trace and one near its K_q trace. The traces are compact disjoint sets,
so a finite bump construction supplies beta. Off K_p union K_q every
trajectory goes from incoming to outgoing; extend beta constantly along
those trajectories. Near K_p it is identically zero, and near K_q it is
identically one, so it extends smoothly over both critical sets. Call the
result b(x). It satisfies Yb=0.

Normalize this band's function interval to [0,1]. Choose increasing smooth
interval diffeomorphisms h_0,h_1, identity near endpoints, with h_0 sending
F(p) to its new desired value and h_1 sending F(q) to its new desired value;
take them to be translations near those respective values. Such interval
diffeomorphisms are constructed by prescribing a positive derivative and
integrating, adjusting its integrals on the finitely many complementary
intervals. Define

    G(s,t)=(1-t) h_0(s)+t h_1(s),
    F_new(x)=G(F(x),b(x)).

Then partial_s G>0, and

    Y(F_new)=partial_s G * YF <0

off the same critical points. Near either critical point F_new is F plus
a constant, so its Hessian/index and the standard field are unchanged.
The function is unchanged near the band's end collars. To fix an entire
protected product tube, include a THIRD interval map h_*=identity. Its
trajectory set is disjoint from K_p and K_q and compact in this band.
Choose the separating incoming partition with value (1,0,0) near K_p,
(0,1,0) near K_q, and (0,0,1) near that tube; extend its three weights
constantly along trajectories. Replace G by their convex combination of
h_0,h_1,h_*. It has the same positive derivative, and is exactly F on
the protected tube. Thus the relative germ is fixed even as a function,
not merely up to reparametrization of its product fibers. The two critical
VALUES have been exchanged, while Y and every trajectory in C are EXACTLY
unchanged. This is Milnor4.1's primary argument, supplied locally here.

Finite stable sorting of the list of critical points uses only this
operation. There are finitely many inversions. At every later interchange
Y is the SAME Morse--Smale field, and remains gradient-like for the current
function; the dimension argument and local proof still apply. Finally
separate values slightly within index levels and choose regular levels
between indices. Call the resulting Morse function g. The original F
also remains a Lyapunov function for Y, since it was never changed as a
function on C. Therefore the bound (1), proved using ORIGINAL color bands,
holds for all Y trajectories throughout and after sorting, regardless of
the number of value exchanges. There is no ancestor chain of changed
handle embeddings to estimate.

## 5. Whole products, actual skeleton, initial collar, and dual carriers

Extract handles from (g,Y) using the actual local Morse charts and Y flow.
Choose their local balls inside the corresponding color blocks. A compact
one-critical-point band consists of its local standard product and regular
flow pieces. Use its actual flowbox identifications to absorb the regular
pieces into the previously built products and collar. At all seams choose
corner profiles as graphs in a common Y-transverse flow coordinate; these
only change a flow endpoint, not its trajectory. Inductively each point
of a WHOLE transported handle lies on a trajectory meeting that handle's
original critical ball; points of the transported initial collar lie on
the trajectory of their actual incoming label. This is the controlled
whole-body version of the Morse-handle construction, not a claim only
about infinitesimal critical neighborhoods.

More explicitly, between successive local models a regular band has the
form (level) x[0,1] by Y flow. Extend each existing boundary product by its
flow interval, using the same coordinate on shared faces. The extensions
cover that whole regular band because the old boundary products and collar
cover its incoming level. Rescale their normal intervals to obtain the
same handle factors; on intersections the shared interval is identical.
The monotone corner profiles are chosen in that interval. The local handle
band is exactly the rounded product from the local Morse Statement, with
its attaching collar transported by Y. These operations give an inductive
cover of EVERY band, ending at the actual outgoing boundary of C. Small
extra rounding/normal-coordinate adjustments, if needed, have a finite
TOTAL preallocated source displacement budget b; they do not depend on a
new mesh or new color level. No remaining regular cobordism is discarded.

The entire q-image of each original critical ball has diameter <d. By (1)
each complete trajectory meeting it has diameter <=D. Thus the q-image of
the whole resulting handle carrier has diameter at most 2D+d, plus the
chosen finite rounding reserve. Its short attaching/full-product collar
is chosen in the same open control enlargement. Choose d and b initially
so this bound is below the requested budget. For example on compact q(C)
first choose a scalar e below all required refined local budgets, take
d<e/(20(L+1)), and allocate b and the background bound below e/20 each.
Variable budgets or a prescribed finite cover are handled by first choosing
a Lebesgue/star refinement on that compact set and these same inequalities.

The initial collar fiber is the actual path of Y from its incoming label
to the first chosen lower regular g-level, with the explicit end-product
parametrization near that label. It may cross regular ORIGINAL color bands,
but at most L, so its WHOLE trajectory has bound D. Its inverse direction
has the same path image. This is why its size does not depend on the number
of regular pieces absorbed into it. Protected background follows its given
tracked product, kept in the fixed actual charts by Section 3, and its
allocated budget is already in D. Both end collars are actual smooth
collars; applying the same trajectory estimate from the outgoing end also
gives its truncated fiber bound, without asserting an unrelated reversed
flow is controlled.

For each j take C_j to be the actual handlebody up to the regular g-level
above all index-j critical points, including its prescribed flow collars.
All its handles have index <=j and each j-handle is attached to C_(j-1).
If one index is absent its stage is repeated. This is a genuine index
filtration of the ORIGINAL C, not an abstract finite CW model. All normal
framings are the actual quadratic chart/flow framings. The reversed disk
product of each whole handle has the same physical carrier and the same
local collar bound. Any later normalization to indices n-3,n-2 may now
consume this actual skeleton; such normalization is not part of this lemma.

## 6. Choice ledger and limits of the export

The coarse atlas is finite; its A and L are fixed before the fine mesh.
The mesh domains, cuts, regular values, critical points, critical-value
exchanges, product walls, normal graph maps, and ALL total error budgets
are finite for each compact problem. Arbitrarily close MS perturbation is
exactly the declared CC closed Statement. The finite Sard selections and
Morse models are also CC. No arbitrary triangulation or uncountable choice
is used. For a prescribed countable collection of compact problems, CC can
select their COMPLETE finite witness tuples, including all maps, fields,
initial fibers and whole carriers. It does not produce arbitrary dependent
future inputs or an unsupported locally finite global sorting process.

No new claim is made about controlled cancellation, surgery normalization,
Whitney disks, TOP triangulations, or the control-base dimension. The
finite color depth is a property of the actual SMOOTH SOURCE atlas. Its
proof and all control constants are independent of the number of fine
handles; this is the missing ingredient that individual general-position
swaps of an arbitrary ordered list would not have provided.
