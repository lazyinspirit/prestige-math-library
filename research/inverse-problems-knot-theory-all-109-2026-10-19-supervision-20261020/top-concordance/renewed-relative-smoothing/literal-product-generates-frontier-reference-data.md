# Instantiate the initial frontier reference data from the literal product

Start with an ACTUAL smooth P^n, n≥6, an actual homeomorphism
θ:P→B×R, and the literal smooth product germ on the protected open region.
This is the independent end problem, not an assertion that the comparison W
has already supplied P. Put e=pr_B θ and t=pr_R θ. Fix a compact control
set, nested relatively compact target buffers, and one prescribed height band.
The active target charts below are interior charts; actual target boundary,
if present, is in the known protected product and is not cut. In the larger
boundaryless comparison-tube application all target charts are interior.

The construction here supplies the ACTUAL input paths, disks and finite
word homotopies for the already accepted path/frontier-loop operations.
It does not assume that an arbitrary smooth frontier has reference lifting.
It does not use an index-sorted handle decomposition or a finite CW structure
on the actual frontier. Higher relative-connectivity/kernel stages remain
separate operations.

## Smooth height frontiers with recorded bounds

Choose finitely many increasing height windows within the given band, with
all their closed enlargements disjoint. Smooth t to g with a uniform error
smaller than one tenth of their gaps, preserving g=t on a smaller protected
product germ. Here are actual analytic choices: use a countable coordinate
cover and subordinate smooth partition; approximate t in each chart by
Euclidean convolution with error smaller than the specified bound, and sum
with that locally finite partition. Patch to the already smooth t on its
protected product using a smooth cutoff supported in that product. Each
local convolution radius can be the least reciprocal integer meeting the
compact-support error bound. The local choices and the locally finite sum
are compatible with Countable Choice.

The retained Statements consulted, and only their Statements, are
`cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover` and
`lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it`;
both explicitly assume Countable Choice. For regular values use the retained
Statement of `thm-morse-sard-for-smooth-manifolds`, which also explicitly
assumes Countable Choice and asserts that the critical value set of a smooth
map is null. No full-AC relative jet-transversality theorem is used.

Choose regular values s_j in those specified windows, and define

U_j^0={g≥s_j},  A_j^0={g=s_j}.

These are actual smooth end neighborhoods and frontiers. If α is the recorded
uniform error, then

{t≥s_j+α}⊂U_j^0⊂{t≥s_j−α}.

Their protected sections are literally t=s_j, hence distinct. All compact
operating portions of these frontiers lie in bounded θ-height bands. On
compact target buffers those portions are compact by the actual product θ.
The larger and smaller superlevels have STRICT nesting.

The tame push is also an actual formula: select c between the upper bound
of A_(j+1)^0 and the lower bound of A_(j+2)^0, and clamp t to min(t,c).
Every moved point has height above c≥s_j+α, so its entire track is in the
literal tail contained in U_j^0. The shell U_j^0−U_(j+1)^0 is fixed, and
the terminal image misses U_(j+2)^0. Its projection to B is constant.
This produces the required finite tame structures with explicit domains,
strict frontiers, and arbitrarily many stages in the fixed band.

## Exact annular lifts, including source heights

Suppose a finite relative two-complex (R,S), a map f:R→B and a source map
z:S→P are supplied, with e z=f|S. Assume z(S) is in a thin annulus whose
height bounds lie strictly inside the full height strip of a buffered larger
annulus. The displayed frontier bounds guarantee such full strips after
retaining extra outer/inner levels.

Let h_S=t z. Extend h_S to h:R→[a,b], where [a,b] is a closed interval
inside that full strip and contains its boundary heights. This extension
is explicit cell by cell: choose one height c_0∈[a,b] for each new vertex;
on an attached cell use the cone formula

h(r y)=r h(y)+(1−r)c_0.

It agrees with the supplied boundary values and stays in [a,b]. Then

z_R(x)=θ^{-1}(f(x),h(x))

is an ACTUAL lift matching z on S, with e z_R=f EXACTLY, and with the
required actual source heights. It lies in the buffered annulus by the full
strip inclusion. No source-independent endpoint replacement is used. In a
contractible target coordinate ball this also gives actual local reference
paths and disk maps in the induced trivial cover. Their based paths and
height functions are retained as the marking. These initial θ lifts are
not invoked later as if they automatically lay in an operated slab.

## Actual finite generators inside compact control packages

Choose finite nested target coordinate balls S_α^0⊂S_α^1⊂S_α^2 covering the
active compact control region, with closures in their coordinate domains and
metric diameters within the reserved allowances. Choose a smooth compact
source domain G_α containing

θ^{-1}(closure(S_α^0)×[a,b])

and contained in e^{-1}(S_α^1) in a slightly larger height interval. Construct
it by a finite sum of smooth chart bumps equal to one near that compact set,
then take a regular superlevel in (0,1). Choose its level regular also on
the finitely many A_j^0. The same Countable Choice Sard contract, applied
to this finite family of restrictions, makes all intersections transverse.
All later finite stages use freshly chosen such buffered domains transverse
to the then-current actual frontiers.

The pieces D_α=G_α∩(U_j^0−int U_(j+r)^0), and their frontier pieces, are
actual compact smooth manifolds with corners. They are compact TOP manifolds
with boundary: each finite-depth orthant corner is topologically a half-ball
by its fixed radial orthant-link model. Thus the retained choice-free
Statement `thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice`
applies. It supplies actual maps

i_α:D_α→L_α,  r_α:L_α→D_α,  r_α i_α=id,

where L_α is a finite Euclidean cubical complex. Only that Statement is used;
no provider proof, triangulation or full-AC ANR interface is consumed.

Choose finite vertex paths and edge-loop generators of each component of
L_α which meets i_α(D_α). Apply r_α. The resulting ACTUAL paths and loops
generate π₁(D_α), since r_α i_α=id. The actual frontier intersection has
finitely many components (components of a compact manifold are open).
Choose one point per component and finitely many connecting paths to the
relevant component basepoints. Together these give finite generators for
the relative fundamental groupoid with frontier endpoints. All their images
are IN D_α⊂e^{-1}(S_α^1), not merely assigned close control labels.

For a particular finite path, cellular approximation of i_α of that path in
the finite cubical L_α, relative to its endpoints, gives an actual edge word
and a homotopy. Composing with r_α gives an ACTUAL word homotopy in D_α.
Thus the data include the required path homotopies, not just surjectivity of
an abstract π₁ map. Every later use involves finitely many paths, so these
homotopies are chosen finitely. Their entire images lie in the same small
control package, regardless of the word length or cubical dimension.

The same construction on each compact frontier piece gives actual finite
frontier-loop generators. Push the finite paths and loops into their smooth
interiors relative to their endpoints, then use finite relative general
position. In n≥6 the arcs can be embedded and made disjoint; on the
(n−1)-frontier the generating loops can likewise be represented by disjoint
embedded loops with separately retained basing paths. Their projections and
reference homotopies stay in S_α^2 after the reserved small perturbations.

The actual low-dimensional tube maps can be retained, not only their
existence labels. Choose a smooth metric from the coordinate partition,
product in the designated frontier collars. Frame the normal bundles of the
finite embedded arcs and disks by parallel transport along the contraction
of their interval/disk domains. The actual normal exponential maps are
embeddings on sufficiently small disk fibers by the inverse function theorem
and compactness. Shrink their finite radii to keep the tubes in the recorded
open control packages and to separate the finite disjoint families. At the
specified neat frontier collars use their fixed product models. These are
whole smooth arc/disk tubes in the ACTUAL P, rather than small critical
neighborhoods or a PL normal bundle inferred on the TOP base.

## Define the two operated frontier objects and their witnesses

For the path stage, choose the joining paths α by lifting target coordinate
paths with the exact height-extension formula. Choose the β paths by the
actual relative groupoid construction above. Use their actual finite embedded
arc neighborhoods in P. The accepted finite path-frontier operation deletes
the β tubes and adds the α tubes, with the specified outer/inner buffer cuts.
Call its actual result U_j^1 and its actual frontier A_j^1. All tubes lie in
the given source domains and avoid the smaller protected product buffer.
Its path-compression witnesses use the r_α-word homotopies just supplied
and those actual tubes. No initial frontier lifting property is assumed.

For the loop stage choose fresh transverse G_α and apply the same finite
retraction construction to their A_j^1 pieces. For every resulting generator
λ, contract eλ in the larger coordinate ball by its coordinate cone and
lift that disk using θ and the actual boundary height tλ. Reserve extra
outer/inner levels to contain the whole source height range of A_j^1.
These are actual disk maps with the prescribed boundary loops. Make their
interiors embedded and pairwise disjoint by finite relative general position:
2+2<n. Keep all maps and their based reference homotopies in the same
reserved larger target charts.

The accepted frontier-loop operation uses the already constructed U_j^1/A_j^1
path compressions to cut the planar intersections of those disks with the
neighborhood into disks. It then deletes the inside disk tubes and adds the
whole spanning disk tubes. Define U_j^2 and A_j^2 to be these ACTUAL results,
with all their finite product tube maps retained. This application has its
actual path homotopies and actual spanning disks; neither is assumed by a
frontier label or by global simple connectivity.

The new frontier reference witnesses can be recorded explicitly. Push a
finite frontier path/loop off the new belt spheres; a one-dimensional map
avoids their codimension-two loci in dimension n−1≥5. In the punctured
handle products push it to the old common frontier. The finite r_α edge
words and homotopies then express it in the chosen generators. Those
homotopies can avoid the old one-dimensional attaching cores by
2+1<n−1. Radial motion puts them in the common part, and each generator
is filled by the actual core disk of its newly added frontier surgery piece.
Glue the retained annuli, word homotopies and those disks. This gives actual
new-frontier nullhomotopies in the reserved control buffers.

Vertex lifts on A_j^2 also have actual provenance. The operated U_j^2
remains between two of the original separated height levels. For each target
point x, its vertical fiber is outside U_j^2 at the lower reserved height
and inside at the upper one. The minimum height in that compact interval
at which the closed set U_j^2 is met is a point of its actual frontier.
This supplies a vertex lift; no continuous global choice of such minima
is asserted. On the prescribed subcomplex retain its given vertex map.

Finally construct a requested finite relative two-complex lift cell by cell:
choose the finitely many new vertex lifts in this way, use the recorded frontier paths on
edges, and use these recorded disk constructions on its two-cell boundary
loops. Retain the prescribed subcomplex map throughout. Subdivide the finite
cell data into the chosen target charts; coordinate homotopies keep the
projected comparison within their reserved diameters. The resulting maps
are actual A_j^2-valued reference lifts with their actual based paths and
nullhomotopies. On the protected region they are the original product lifts.

Thus U_j^2/A_j^2, their actual marked low-dimensional tube products, the
initial frontier reference lifts and the buffered relative path compressions
are GENERATED by the literal product input. They are available before the
higher-skeleton and final kernel operations. No global index sort is used
in these two stages. The later source index-sorted whole-handle/core
realization, higher Hurewicz nullwitnesses and H_i still require their
separate actual bindings. This construction does not claim them by name.

Each packet uses finite choices and the declared Countable Choice analytic
contracts. Independently prescribed height-band packets can be selected by
Countable Choice. This NEW instance construction is ready for review; no
accepted proof body or closed review history has been reopened.
