# Local center–saddle carrier: cap transport, subdivision, and relative cancellation

## Scope and status

This memo supplies a proof route for the conditional local carrier in
`lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation` and
the finite transport argument in
`lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar`.
It uses the approved simple embedded center lobe and one fixed leafwise cap.
It does not infer the global disk-to-lobe recurrence required by Novikov's
full theorem. The period-annulus audit remains in force: the present argument
only applies after the specified simple first-saddle lobe and cap exist; it
does not turn every complementary face into a period annulus.

The carrier below uses only `AC_ω`, as stated in the same-run smooth Morse
cancellation criterion and support lemma. It uses no Schoenflies theorem and
no full axiom of choice. The regularity is C² for the foliation, the cap,
and the final disk map. Smoothness is introduced only for the auxiliary
Morse function on the compact slab.

## Finite subdivision for a compact disk

Let `W` be the compact disk parameter block and let `\mathcal U` be a finite
open cover of `W`. There is a finite cell subdivision whose closed cells are
each contained in a member of `\mathcal U`.

Use the fixed smooth disk parameterization to pull the cover back to the
closed Euclidean disk. Here is a direct Lebesgue-number proof. For each point
x, choose r_x>0 and a cover member U_x such that the closed ball
overline B(x,2r_x) lies in U_x. The balls B(x,r_x) cover the disk, so
compactness gives a finite subcover B(x_i,r_i), 1≤i≤N. Set
lambda=min_i r_i>0. If a set A has diameter less than lambda, choose y∈A
and i with y∈B(x_i,r_i). For every z∈A,
d(z,x_i)≤d(z,y)+d(y,x_i)<lambda+r_i≤2r_i, so A⊂U_{x_i}. Thus lambda is a
Lebesgue number. This uses only a finite subcover; under the declared
AC_omega premise no stronger choice principle is needed.

Start with a fixed finite triangulation of the standard disk and transfer it
through its smooth parameterization to W. Repeated barycentric subdivision
reduces the Euclidean mesh geometrically (in dimension two, each subdivision
reduces the maximum simplex diameter by at least the factor 2/3). The disk
parameterization is uniformly continuous on the compact disk, so the mesh in
W also tends to zero. After finitely many subdivisions, every closed simplex
has diameter less than lambda; each is contained in a member of the cover.
Continue subdividing until every closed star has diameter less than the
Lebesgue number; this takes finitely many steps because the mesh tends to
zero and a closed star has diameter at most twice the mesh. These stars lie
in chart members and give open neighborhoods on which the local transport
formulas below are defined. This explicitly supplies the finite
triangulation/subdivision step; no separation or classification theorem for
arbitrary plane curves is used.

Form the cover from inverse images under B of finitely many flat foliation
boxes covering the compact image B(W). Once a closed cell lies in one such
box, its B-image is connected and lies in the intrinsic leaf L, hence lies
in one connected plaque of that box. On a collar where the exact trace is
required, refine the cover using boxes containing both B(x) and f_C(x);
compactness of the frontier lets the collar be chosen thin enough for this
finite refinement.

## Fixed-cap transport over the whole replacement block

Let B:W→L be the C² cap map on the entire disk block, obtained by gluing
the fixed filling to the plaque projection of the old map on a collar of
the frontier. To flatten the seam, use collar coordinates (r,theta) on the
cap and (s,theta) on the exterior annulus, with r=1 and s=0 at the rounded
frontier. Precompose the cap radius by a smooth function equal to 1 on a
smaller boundary collar, and the annulus radius by a smooth function equal
to 0 on its matching collar. Both maps then equal the rounded loop gamma as
a function of theta on an open seam; all normal derivatives agree there, so
the glued map is C². This changes only collar parameterizations and uses
the one specified filling. The following construction produces a single
family over all of W; it does not choose new fillings at different
parameter values.

Choose a base point `x₀∈W` on the collar and a C² transverse arc `T₀` through
`B(x₀)`, parameterized by `t` with `t=0` at `B(x₀)`. Subdivide `W` as above
so every cell maps into one flat foliation box and each collar cell has the
paired plaque coordinates for `B` and `f_C`. Transport `T₀` along a spanning
tree in the finite one-skeleton using the local holonomy diffeomorphisms.
For every non-tree edge, the tree path plus that edge is a based loop in
`W`. Since `W` is a disk, the loop contracts relative to its base point;
composing the contraction with `B` is a leafwise homotopy in `L`. The
holonomy homotopy theorem therefore makes the corresponding holonomy germ
the identity at `t=0`. There are only finitely many edge and face relations.
Each identity germ and each chart transition is defined on some open
interval about zero. The closed stars can be chosen with B-image compactly
inside their foliation boxes, so each has a positive transverse margin.
Intersect these finitely many chart margins and holonomy-germ intervals,
then shrink once more so every chosen tree-path composition is defined. The result is a
common interval `J=(-r,r)` on which transport is path-independent.

For a point x in one cell, use its flat chart: the plaque coordinates are
those of B(x), and the transverse coordinate is the value obtained by
transporting t from T₀ along a path to x. Path independence makes this
definition independent of the chosen path. Use the open-star neighborhoods
from the preceding subdivision, rather than defining formulas only on
closed simplices. On each overlap, two local paths differ by a based loop in
W; its holonomy is the identity germ. There are finitely many overlap
components after the finite refinement, so shrink once to one interval on
which all overlap transports agree as maps, not just at their base point.
The local formulas then agree on open overlaps, including their first and
second derivatives, and glue to a jointly C² map
P:W×J→M, with P(x,0)=B(x). For fixed t, every P(x,t) is obtained from
the same point T₀(t) by leafwise continuation, so the connected slice
P(W,t) lies in one leaf. In a flat chart the x-derivatives are tangent to
the plaques, while the t-derivative is transverse because holonomy maps
are local diffeomorphisms of transversals. Therefore
P*F=ker(dt), equivalently dP^{-1}(TF)=TW=ker(dt). This statement does not
assert that P is injective or that the leaf is embedded.

## Collar-range condition and exact boundary factorization

The finite holonomy construction gives a germ interval J around zero. By
itself, this does not place an arbitrary prescribed collar trace inside J.
The exact collar statement needs the following range argument.

The exact usable contract is this: let C0 be a compact collar subset of the
cap disk on which the old trace has the form f_C(x)=T_x(t_C(x)) in the
holonomy-trivialized transversal, and suppose S=t_C(C0) is compactly
contained in the transport interval J. Choose an open interval I with
S compactly contained in I and I compactly contained in J. Then the
restriction of the already-constructed map P to W×I satisfies
P(x,t_C(x))=f_C(x) on C0 pointwise. No boundary-zero condition is needed
in this formulation. The section coordinate and its range are supplied
data of the collar interface, not extra choices.

On the collar, `f_C(x)` lies on the small transversal transported to `B(x)`:
the two points have the same plaque coordinate. Transport `f_C(x)` back to
`T₀` along a `B`-path and call its coordinate `t_C(x)`. Trivial holonomy on
the disk makes `t_C` single-valued; the local formulas show it is C². In
this transported coordinate, the equality

`P(x,t_C(x))=f_C(x)`

holds pointwise, not merely up to homotopy. This interpretation of `t_C` is
essential: raw differences of transverse coordinates in unrelated flat
charts are not invariant under their nonlinear transverse transition
maps.

In the first-saddle application, the working block must contain q in its
interior, so its outer boundary is generally outside Gamma; the old map
there need not lie in L. Consequently the boundary-zero hypothesis in the
current cap-product statement is not literally satisfied by that outer
boundary. The proof gives the slightly more general and exact interface:
construct P on a fixed enlarged cap disk W-hat first, then require a
specified compact collar C0 inside W-hat on which the transported section
range S=t_C(C0) is compactly contained in J. No zero condition on the
boundary of W-hat is needed once this compact-range condition is supplied.

For the simple lobe, take W-hat to be the lobe disk together with a fixed
regular collar crossing Gamma; form B from the one chosen filling on the
lobe and the plaque projection of f on that collar. Flatten the two maps to
the same rounded loop on an open seam. The loop Gamma lies in the interior
of W-hat, and B=f on Gamma, so the transported section of f is zero there.
Fix the common holonomy interval J over all of W-hat before shrinking any
collar. Continuity and compactness of Gamma imply that the section range on
a sufficiently thin collar around Gamma is a compact subset of J. Choose
the actual cancellation block W and its fixed outer collar inside that thin
region while still containing the compactified selected trajectory and both
critical points in its interior; the supported cancellation can be confined
to an arbitrarily small neighborhood of that trajectory. Then
S=t_C(C0) is compactly contained in J, and an open interval I can be chosen
with S compactly contained in I and I compactly contained in J. Restrict P
to the actual block. This resolves the outer-boundary mismatch without
claiming that t_C=0 on the outer boundary of the block.

The whole replacement block is covered by `P`. The old disk map is required
to factor as `P(x,t_C(x))` only on the old outer collar; the map in the
interior of `W` is replaced using the cap. The auxiliary Morse slab added
below is proof scaffolding and need not map into `M`.

For a standalone product lemma, the clean statement is: after constructing
the uniform transport interval J, assume a specified collar trace is
expressed in the holonomy-trivialized coordinate and its compact range lies
inside J; then the exact factorization holds there. The boundary-zero
condition is one sufficient way to obtain that range condition when the
trace agrees with B on the boundary of W. The first-saddle consumer instead
uses the zero trace on the interior curve Gamma and takes a sufficiently
thin collar. “Same plaque coordinate” without this transported-coordinate
interpretation and compact-range condition is not enough to conclude the
exact factorization from an arbitrarily small germ interval.


## Compact Morse triad from the simple lobe and exit sector

Take a smooth approximation `\bar u` of the C² first integral on a compact
inner block containing the center disk, saddle chart, connecting corridor,
and a regular exit tube. The block has no other critical point by hypothesis.
Let `c_p<c_q` be the center and saddle values, and choose a regular
`v∈(c_p,c_q)` near enough to `c_q` that the second descending saddle branch
has not yet reached its exit section. The regular level at `v` has two
relevant pieces: the full center circle `C_v`, and the interval in the exit
sector containing the other point of the saddle's unstable `S⁰`.

Take a compact flow-box tube around the outgoing branch from its local
saddle sector to the stated transverse exit section. On a compact interval
of regular values, its fibers are intervals and t=ubar is a product
coordinate. Attach an auxiliary product rectangle along the two side
collars of this tube. Give the rectangle the same scalar coordinate t; the
two formulas then agree on full collars, so the attachment is smooth with
exact scalar germs. Each regular fiber of the union is a circle E_t
containing the exit point. Continue that circle as a product cylinder above
and below the compact exit band. The center-side component is the full
circle C_t from the lobe. The Morse chart at p supplies its 0-handle, and
the chart at q supplies a 1-handle with one attaching foot on C_t and the
other on E_t. The remaining regular sectors are product collars in the
chosen block; round their corners inside those collars, away from the
selected trajectory and cancellation support. Thus the auxiliary collars
complete the actual regular tube into the compact annular triad; they
introduce no critical point. This is an explicit handle-and-product
construction, not a plane-curve separation argument.

The batch-3 criterion is being used with its exact smooth hypotheses:
a compact collared triad, an excellent adapted Morse function and field,
exactly the index-zero/index-one pair in the slab, and one transverse
intersection A_q∩B_p. Its support refinement permits any open support
neighborhood U of the compactified connecting trajectory and p,q, relative
to both faces; both suppliers carry an AC_omega premise. The annular triad
is an auxiliary scalar domain. To transfer its cancellation back,
choose the support neighborhood U of the compactified trajectory and
p,q inside the actual smooth inner block. Identify the Morse charts and the
compact regular tube with the corresponding core of the auxiliary triad
using their exact t-product collars. The support U is chosen first inside
the source block; after C² smoothing the connecting arc is kept inside U
by the regular-band isotopy. The supported cancellation lemma gives a new
scalar equal to the old auxiliary scalar outside U and near both full faces.
Pull the changed scalar back on U and leave the actual block unchanged off
U; since the two scalars agree on a collar of the boundary of U, they glue
smoothly. Hence the auxiliary rectangle is never part of
the domain of the final disk map or of P; only the scalar change supported
inside the original block is used. This restriction argument is needed
because the cancellation criterion itself acts on its whole triad.

For the smooth approximation, no parameter-dependent gradient-trajectory
theorem is needed. Choose disjoint small critical neighborhoods and a compact
regular band between them containing the selected trajectory except for its
two endpoint tails. The norm of du₀ has a positive minimum on that band.
For a sufficiently C²-close smooth approximation ubar, every interpolant
u_s=(1-s)u₀+s ubar is still a submersion there. With
Z=grad(u₀)/|grad(u₀)|², du_s(Z)>1/2 after making the approximation closer.
The time-dependent field
Y_s=-(ubar-u₀)grad(u_s)/|grad(u_s)|²
then satisfies ∂_s u_s+du_s(Y_s)=0. If m is a positive lower bound for
|grad(u_s)| on the band, then |Y_s|≤||ubar-u₀||∞/m. It is C¹ in the space
variable, so Picard–Lindelöf gives unique local flow; choose the C² error
small enough that the displacement over 0≤s≤1 is less than the width of a
larger compact buffer band. The flow therefore exists for the whole
parameter interval without reaching the boundary and transports the regular
level components. Consequently
the center-facing saddle sector still leads through the regular product band
to the circle bounding the center sublevel disk, while the other sector is
identified with the separate exit tube. This is a statement about regular
level components, not persistence of a chosen stable or unstable manifold.

In the smooth Morse charts of ubar, join the center-facing unstable ray of q
to the transported descending section of the regular band, then continue
radially in the minimum chart to p. The pieces can be joined in regular
boxes with ubar strictly decreasing, producing a smooth embedded arc. Near
q it is exactly the chosen local unstable ray; near p it is a radial
descending ray. Route the other unstable ray through the separate exit tube.
Choose a downward gradient-like field on the smooth triad that equals the
standard Morse fields near p,q and is tangent to this selected arc. Such a
field is obtained by prescribing it on a narrow tube around the arc, matching
the standard coordinate fields at its ends, and patching to any adapted
descending field elsewhere. On the external cylinder choose the product
field so points of E_v descend to the lower external face, not into the
center disk. Convex combinations preserve d ubar(X)<0, and the fields are
arranged to agree on the selected arc. Thus the unstable sphere A_q has one
point on the center circle C_v and its other point on the external circle
E_v. The stable sphere B_p is exactly C_v: its disk contains no other
critical point and the field points inward on its boundary, while the
external component flows to its own lower face.
Therefore A_q∩B_p is exactly one point; a point and a regular curve in the
one-dimensional level meet transversely. This supplies the batch-3
cancellation criterion without global Morse-Smale genericity or a
parameter-dependent stable-manifold theorem.


## C² smoothing and fixed outer germ

The published `thm-relative-whitney-approximation-for-euclidean-valued-maps`
only guarantees C⁰ error. It is not a supplier for C² closeness. On a compact
inner block, C² approximation follows directly by finite-chart convolution:
choose a finite smooth partition of unity, write each compactly supported
coordinate summand of `u₀`, extend it by zero, and convolve with a standard
mollifier. For every multi-index `|α|≤2`,

`D^α(F*ρ_h)=(D^αF)*ρ_h` and
`‖(D^αF)*ρ_h-D^αF‖_∞→0`,

because `D^αF` is uniformly continuous on its compact support. The finite sum is C∞ and arbitrarily C²-close on the block. Critical
persistence can be checked directly from the C¹ gradient maps, without
applying the smooth-base Hessian-gap lemma to a C² function. In coordinates
near either critical point c, let H=D(grad u₀)(c) and let σ>0 be its least
singular value. Shrink a convex coordinate ball until
||D(grad u₀)-H||<σ/4 there, then take the C² approximation close enough that
||D(grad u_s)-H||<σ/2 for every interpolant u_s. The integral mean-value
formula gives
|grad u_s(x)-grad u_s(y)|≥(σ/2)|x-y|, so each u_s has at most one critical
point in that ball. Choose the ball with grad u₀ nonzero on its boundary;
closeness keeps grad u_s nonzero there. By the inverse function theorem the
unique zero continues locally in s, and compactness of the closed ball
prevents it from escaping, so a zero exists for every s∈[0,1]. Its Hessian
has the same inertia as H. On the compact complement of these two balls,
min|du₀|>0, and C¹ closeness prevents any further critical point. C⁰
closeness also preserves the strict order of the center and saddle values.

Put the entire compact Morse triad in this smooth inner region. Apply the
same-run supported cancellation there, with support `U` around the chosen
trajectory and `p,q`, `\overline U` disjoint from the outer regular collar.
The support lemma leaves the scalar unchanged outside `U` and near both
faces.

To return to the original C² scalar, use a separate regular annulus `A`
between the smooth inner region and the fixed outer collar. Use an ordinary
tubular coordinate `s` and a cutoff `ρ=η(s)`; it is not necessary that
`s` be a gradient-flow coordinate. On `A`, define
`X=\nabla u₀/|\nabla u₀|²`, so `du₀(X)=1`, and let
`K_X=sup_A|dρ(X)|<∞`. If `\bar u'` is the post-cancellation smooth scalar,
it agrees with `\bar u` on `A`. Choose the C² approximation so close that
`d\bar u'(X)>1/2` and
`K_X‖\bar u'-u₀‖_∞<1/4`. Then

`d((1-ρ)u₀+ρ\bar u')(X)`
`=(1-ρ)du₀(X)+ρd\bar u'(X)+dρ(X)(\bar u'-u₀)>1/4`.

Thus the blend has no critical point on `A`, equals the smooth cancelled
scalar at its inner edge, and equals `u₀` on an open outer collar. This
correctly preserves C² regularity and the exact map germ; it does not claim
the whole final scalar is C∞.

## Scalar range for the cap product

Let `S` be the compact range of `t_C` on the old open collar after the
finite transport construction, with `S\Subset I=(-ε,ε)`. The supported
cancellation and C² blend give a C² scalar `v` on the compact replacement
block, equal to `t_C` on that collar; its range `K_v` is compact, but need not
lie in `I`. Choose a smooth strictly increasing `\vartheta:\mathbb R→I`
that is the identity on a neighborhood of `S` and sends `K_v` into `I`.
Such a map exists: choose a closed interval `J\Subset I` containing `S` in
its interior; extend the derivative positively on each tail, matching the
identity derivative near `\partial J`, with total integrals equal to the
available margins from `J` to the endpoints of `I`. The resulting
increasing map has limits `±ε` and fixes `J`.

Then `\vartheta∘v` is C², lies in the domain of `P`, and is still a
submersion wherever `v` was, since
`d(\vartheta∘v)=\vartheta'(v)dv` with `\vartheta'>0`. On the old collar
`\vartheta(v)=t_C`, so
`P(x,\vartheta(v(x)))=f_C(x)` pointwise. No factorization of the old map
through `P` is required in the interior of the slab.

## Supplier audit and limits

- `thm-relative-whitney-approximation-for-euclidean-valued-maps` supplies
  relative C⁰ approximation only; the C² estimate above is a separate
  finite convolution argument.
- `lem-compact-morse-critical-points-have-uniform-hessian-gaps` has a smooth
  compact Morse base; for the C² base `u₀`, use the direct gradient-map IFT
  and positive gradient minimum described above.
- `lem-no-new-critical-points-under-a-compact-c1-small-perturbation` handles
  the regular complement for a smooth compact Morse base, but not branch
  continuation. The direct regular-band directional estimate is enough.
- `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point`
  is for a fixed adapted field and gives local disk dimensions; it does not
  assert parameter-dependent branch persistence. The construction instead
  chooses a descending section and builds an adapted field that follows it.
- `thm-morse-stability-with-explicit-parameter-dependence` is a
  quasi-geodesic theorem in hyperbolic spaces, not a Morse critical-point
  stability supplier, and is not used.
- The finite triangulation uses the compact-disk geometry and `AC_ω`; no
  unsupported plane-curve separation or full-AC selection is required.

The finite transport and exact collar factorization are proved under the
corrected compact-range interface. Under the stated first-saddle hypotheses,
the regular exit segment is compact and contains no critical point; a
finite flow-box cover supplies the product tube over a compact regular-value
interval. The auxiliary rectangle and cylinder then close its interval
fibers with exact scalar collars, and the supported modification restricts
to the actual source block because its support lies in U. The local
cancellation route is therefore complete under those stated hypotheses.
The current boundary-zero formulation of the cap supplier should not be
cited literally for a block whose outer boundary lies beyond Gamma; use the
compact-range formulation above. This does not close the separate period-annulus/frontier
recurrence problem recorded in
research/frontier-41-ha-dt-29-batch-23-period-annulus-audit.md, and therefore
does not by itself prove the full Novikov theorem. No canonical item, manifest,
coverage record, cross-batch ledger, receipt, or controller state was edited.
