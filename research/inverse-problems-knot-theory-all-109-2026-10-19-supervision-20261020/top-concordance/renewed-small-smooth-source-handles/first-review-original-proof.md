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
smooth maps in C.

Equivalently one may start with arbitrary positive continuous eta on B
and a prescribed finite refinement of eta-small control neighborhoods:
the construction works for that refinement. It is not restricted to a
fixed scalar control radius.

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
* `def-smooth-cobordism-triad-for-morse-theory` and
  `def-morse-function-adapted-to-a-cobordism` fix those last conventions.

In particular neither a full-AC smooth triangulation theorem nor the
full-AC relative jet-transversality Statement is a logical input.

## 1. Compact operating region and buffered source cover

Remove only the prescribed product portions from the region on which new
handles are to be made. End collars are restored unchanged at the end. The
incoming collar together with the fixed side collar is the standard initial
product part of a relative presentation. Choosing its outer smooth frontier
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

## 3. Lexicographic gluing and finite corner rounding

Order sign vectors lexicographically, preferring + before -. Components
of one chamber are attached together or in any finite order. Before a
chamber Q_sigma is added, its intersection with the union of earlier
chambers is EXACTLY

    A_sigma=union over i with sigma_i=- of (Q_sigma intersect H_i).

To verify the nontrivial inclusion, if a point belongs also to an earlier
Q_tau, take the first index at which tau and sigma differ. Then tau_i=+,
sigma_i=-, so r_i=0. Conversely, at any point of Q_sigma intersect H_i with
sigma_i=-, flipping just that sign gives an earlier chamber containing the
point. The statement uses closed chambers and remains true even when that
face has lower-dimensional corners. No generic position of closures beyond
the already proved transversality is hidden here. Add the original incoming
faces to A_sigma. Original outgoing faces and faces still to be attached
are the complementary boundary faces.

In each orthant chart this attaching set is therefore a UNION OF WHOLE
COORDINATE FACETS, not an isolated lower-dimensional intersection. This
property is what makes the construction a smooth relative handle gluing.
Here are the finite collar/rounding details used in that assertion.

Group the local facets into incoming and remaining facets. First round
multiple facets within either group; in a two-facet quadrant one replaces
the corner of their union by a monotone smooth arc, equal to the two axes
outside a small square. Such an arc is obtained by rounding the graph of
max(s,t) with a smooth convex approximation which equals max when
|s-t| exceeds a prescribed small number. Its gradient has nonnegative
components with sum one, so the rounded face has a nonzero normal.
Take its product with all other coordinates. On a compact codimension-j
corner stratum use its product collar, do this in its normal coordinates,
and make the cutoff equal to one near the deeper strata already treated.
Treat corner codimensions in decreasing order. On overlaps the previously
fixed smaller product germ is retained; the remaining change is supported
in an ordinary face collar. A finite partition in the tangential variables
patches the rounding graphs, whose common transverse derivative stays
positive. There are finitely many faces and a finite coordinate subcover,
so this ends after finitely many operations. This constructs compatible
smooth face collars, rather than assuming a triangulation of their edges.

At an incoming/remaining corner the resulting model is a product of a
quadrant with its corner stratum. Truncate an arbitrarily small quadrant
corner by a rounded arc. Its new arc times that stratum is a vertical side,
parametrized from its incoming endpoint to its outgoing endpoint. Thus the
rounded chamber is a smooth cobordism with incoming face, outgoing face,
and a genuine product vertical side. The truncation is just collar
bookkeeping: adding the cut-off quadrant back is a product-collar gluing.
The same arc is used on both sides of a shared cut. All modifications are
smooth isotopies of collared fronts in the ambient C; their time-dependent
normal graph functions extend across the adjacent collar. The resulting
boundary transition and all later attaching maps are transported by that
same ambient collar isotopy. This restores the original C, rather than a
new quotient chosen only up to homotopy.

This also gives a direct induction that the rounded union of each prefix
is a smooth compact manifold with collared frontier. In a local active-sign
orthant the newly glued piece attaches along the indicated coordinate
facets, and the preceding rounding replaces their corners by those same
arcs. No other local intersections are present. The final union is C with
its original smooth structure, through the composite of these finitely many
collar identifications. They are identity on the protected product germ.

All chambers and all faces are compact. Choose the support sizes of the
finitely many isotopies and collars sufficiently small that every chamber
and its extended carrier stays in its assigned V_i. Where several carriers
meet, their common face is compactly inside EACH of their assigned V_i;
choose a neighborhood in their finite intersection. This preserves all
earlier control assignments during later rounding. An attaching collar
may extend a short distance into the previous prefix, but it is still
inside the newly attached chamber's own V_i. Finite collars can always be
made that short. There is no positive universal collar width assertion.

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

## 5. Assembly, smallness, duals, and choice ledger

Apply Section 4 to the finitely many rounded chambers in their lexicographic
order and concatenate their finite handle lists. Transport subsequent
attachments through the collar identifications of Section 3. The output is
an actual smooth relative handle presentation of C. Each closed handle and
an open full-product/attaching-collar neighborhood lie in its chamber's
buffered V_i. Consequently q of that entire carrier lies in O_i. This is
valid for every path in the carrier, rather than just its endpoints.
Reversing a product exchanges its two disk factors; it does not change its
carrier. The identical control assignment therefore applies to dual handles.
Nothing claims that all later Whitney disks or algebraic matrix operations
are contained in these carriers; those are separate controlled-construction
obligations with their own prior budget.

For variable eta, choose neighborhoods O around each point of q(C) small
enough that their diameters are below the desired local eta bound, and if
necessary refine the other prescribed control cover. Compactness supplies
a finite cover. Alternatively the consumer can supply that finite cover
already. The proof is insensitive to how small it is. Smooth source charts
exist because C, unlike the control space B, is genuinely smooth.

All choices so far are finite tuples: the source chart cover and bumps;
regular cut values; sign chambers and their finitely many components;
corner collars and their finite charts; finite Morse coefficient vectors;
critical charts; and finite flow/handle/collar witnesses. A choice of a
parameter in a nonempty complement of finitely many Sard-null sets is one
existential choice, not an uncountable family of choices. The Sard supplier
and local handle supplier explicitly assume only CC. Finite successive
choices introduce no stronger axiom. No locally finite smooth triangulation
is used, and no arbitrary-module or global chart choice is hidden here.

For a prescribed countable collection of compact buffered source problems,
take the set of COMPLETE finite witness tuples for each problem, including
all smallness and protected-germ constraints, and apply CC once to these
nonempty sets. This gives simultaneous witnesses, not a dependent recursive
choice over future unknown data. Disjoint escaping height bands may therefore
be treated simultaneously: their supports are locally finite, and finite
product identifications on their unchanged collars agree. A genuinely
compatible preassigned exhaustion may be treated in the same way only when
each compact problem includes its prescribed collar agreement as input and
has the nonempty witness property just proved. No claim is made that an
arbitrary dependent infinite refinement process follows from CC.

## Scope

This is a source smooth-handle prerequisite only. It does not triangulate
the TOP control base, change its dimension, prove controlled cancellation,
or supply reference groupoid paths outside the actual indicated carriers.
The controlled owner chooses the input cover backwards from chain,
Whitney, and completion budgets. No canonical/native/gate operation forms
part of this draft.
