# Actual whole-end deformation from the final finite relative connectivity

This is a NEW application constructor, not a proof reread of the accepted
local Hurewicz, kernel-comparison or product helpers. It identifies the precise
finite data that must be bound to construct the strong H_i required by the
nested-completion helper. Its conclusion is an actual homotopy, not a
Whitehead-theorem assertion of a homotopy type.

Let V be an actual smooth n-dimensional end neighborhood, n≥6, with actual
frontier A. Let e:V→B be the control map. Work over nested open buffers around
a compact control set, reserving the finite enlargements below. A protected
open product region has its prescribed frontier section and vertical product
homotopy. There are two versions: an actual whole end over a compact base,
or the whole positive end over a smaller open output buffer. The local version
does not assert maps on points outside the actual larger input domains.

## The finite relative domination datum

Supply a relative cell complex T over a base J containing the ENTIRE actual
frontier A, with only finitely many additional cells of dimension at most n.
The base J also contains a closed protected product buffer Z whose relative
interior contains the smaller protected open set to be retained. Supply
actual characteristic maps, not just an abstract finite homotopy type.
Supply maps

u:T→V,  v:V→T,

and an actual homotopy R_s:id_V≃u v relative A. On A both maps are the
identity. In the local version v and R are required on the entire end over
the output buffer, and on enough of the enlarged buffer for all compositions;
their images lie in the operating T and V domains. R and the restrictions
of u,v to the protected product are prescribed actual product maps.

On J supply an actual homotopy Q^J from u|J into A, fixed on A, equal to
the known vertical product retraction on Z. Choose the common finite time
schedule in advance; compressing the parameter of a product retraction does
not change its product property. This is a given homotopy on a cofibrantly
attached base, not an appeal to an arbitrary closed set being a cofibration.
If the protected model is intended to be pointwise fixed, require that it
already lie in A. An interior product strip cannot be pointwise fixed by a
homotopy whose endpoint lies in A; there the relative requirement is exact
agreement with the supplied product retraction.

A concrete product-end source for R is the following. All frontier changes
lie in a fixed height band, V contains the entire higher tail, and A is below
some height c in θ coordinates. The vertical clamp

(x,t)↦(x,(1−s)t+s min(t,c))

is an actual homotopy in V, fixed on A, with zero B-coordinate movement.
Its terminal image is in a bounded-height core. Choose an actual deeper
smooth frontier with lower height bound greater than c; the region between
it and A is an actual finite operating slab containing that image. A supplied
finite relative whole-handle presentation, with its actual handle-collapse
maps relative A and its protected product collar, gives the above u,v,R
by composing that clamp with the finite core domination. THIS source datum
must really be supplied by the small-source construction. A compact subset
of an arbitrary open manifold does not by itself provide the required relative
CW pair, compatible collar or small domination. No such source realization
is claimed here.

## Chosen cell nullhomotopies and exact boundary correction

The final kernel-cut/excision/Hurewicz stage must export actual controlled
relative nullhomotopies for the finite disk maps arising below, through degree
n. They must lie in the reserved larger V domain and have the prescribed
small control. The ordinary statement that relative groups vanish is not
substituted for these witnesses. The finite controlled Hurewicz constructor
may supply them at its exact hypotheses; those include the actual local
reference lifts, one-connectivity and finite homological-triviality maps.

Induct on the finite cell dimension. Suppose Q has been built on the old
skeleton, starting at u and ending in A, with its specified values on J.
For a d-cell χ:D^d→T, first extend the already given boundary homotopy
and the initial disk uχ across D^d×I. Use the explicit cylinder retraction
onto D^d×{0}∪S^(d−1)×I. Explicitly, from the exterior point (0,2)
follow the ray through (x,t) until it first hits the bottom or side: put
λ=min(2/(2−t),1/|x|), interpreting 1/0 as infinity, and set
ρ(x,t)=(λx,2+λ(t−2)). This fixes the bottom and side and is continuous.
Thus every value of this extension is a value of the initial disk or of the
already prescribed boundary homotopy. Its terminal disk f has boundary in A.
Its control is bounded by the cell diameter and the already allocated
boundary-homotopy allowance; HEP has not been assumed automatically small.

Choose the supplied relative nullhomotopy N:D^d×I→V of f, ending in A,
with N(S^(d−1)×I)⊂A. If it does not fix its boundary pointwise, correct that
explicitly. For d≥1, write a_s=1−s/2 and define

N'_s(r y)=N((r/a_s)y,s)                 for 0≤r≤a_s,
N'_s(r y)=N(y,2(1−r))                  for a_s≤r≤1,

where y∈S^(d−1). The formulas agree at r=a_s. At s=0 the map is f;
on r=1 it is f|S^(d−1) for every s; and at s=1 both pieces lie in A.
At r=0 the first formula is independent of y. Thus this is an actual
boundary-fixed compression of f into A. Its image uses only N's image,
so its whole-image control buffer is unchanged. The terminal annulus is
inside A, not an unrecorded change to an already constructed skeleton.
For d=0 use the chosen controlled path to A, with no boundary correction.

Concatenate the cylinder extension with N' on each cell, keeping the old
skeleton at its terminal value during the second part. Distinct open cells
are disjoint in the source, and their maps agree on their attaching boundaries,
so the finite pasting lemma gives a genuine continuous homotopy on the new
skeleton. The characteristic maps are supplied, so this is a map of the
actual relative cell complex, not merely a list of cell classes. Preserve
Q^J using the same predetermined finite time schedule, stationary after its
product retraction has finished. After at most n+1 cell-dimension stages,
one obtains an actual Q_s:T→V, with Q_0=u, Q_1(T)⊂A and Q_s|A=id.
It agrees with the chosen product model on the smaller protected open buffer.

Choose all cell-image/nullhomotopy buffers and tolerances backwards from
the final bound. At a fixed dimension the finite cells can be processed in
parallel in the source; their target maps need not embed or be disjoint.
Each stage uses only the reserved extension and nullhomotopy buffers.
The number of dimension stages is bounded by n+1, not by an uncontrolled
number of recursively chosen cells. This describes the actual finite control
witnesses that must be delivered; it does not manufacture local contractions
from a global abstract fundamental-group equality.

## Construct the whole-end H

Concatenate R_s with Q_s v. The first segment starts at id_V and ends at
u v, which is exactly where the second segment starts. The second ends in
A. Both fix every point of A. Both are defined on the entire positive end
over the output buffer, including arbitrarily high points, since that was
part of the actual domination input. Their projected control bounds add;
reserve this sum before selecting the outer buffers. On the protected
product their composition is the prescribed vertical product deformation.
This is the required strong H:V×I→V relative A (or its exact local-over-
output-buffer version). No previously constructed H or slab product appears
among its inputs.

H is not asserted to be proper as a homotopy into V. In the compact-frontier
case a final retraction of an unbounded end onto that frontier cannot be
proper. The later completed map F has a separate properness proof using the
strict start/output buffers and the summable collar construction. Here the
whole-end assertion concerns actual domain, continuity and control, not an
incorrect proper-retraction claim.

## Obtain the pre-H one-connectivity without a circular H assumption

There is a finite useful binding at the kernel-cut stage. Let V_old be the
frontier-improved neighborhood with its already constructed actual controlled
reference path/nullhomotopy data, before final kernel cuts. Let V_new be
obtained by deleting disjoint proper kernel disks D^(n−2) with their normal
D² tubes. The accepted frontier kernel-comparison interface gives actual
nullhomotopy disks for the new normal meridians in the NEW frontier A_new:
a meridian is null in the old frontier by its normal D², and the supplied
complement injection transports that null class to its complement and then
to A_new. The actual local-package hypothesis retains those disk maps there.

Restore one removed tube to V_new. Its intersection with the remainder is
D^(n−2)×S¹, and the restored piece D^(n−2)×D² is simply connected.
Van Kampen quotients π₁(V_new) only by the corresponding meridian class.
That class is ALREADY zero in A_new⊂V_new by the preceding actual disk.
Consequently inclusion V_new→V_old is an isomorphism on fundamental groups,
with these actual local witnesses. The same assertion holds for the finite
family at once. Zero stabilizations delete proper D^(n−3) tubes with normal
D³; the restoring intersection D^(n−3)×S² is simply connected, so those
also preserve π₁. These calculations occur in the supplied whole local
packages; no global-to-controlled inference is made.

Thus V_old's previously constructed reference path/π₁ resources can pass
to V_new BEFORE H exists. Together with the separately transported frontier
resource, this supplies the initial relative one-connectivity for the finite
Hurewicz stage. The finite homology-triviality/excision data and that stage's
actual higher nullhomotopies still must be bound. This avoids the circular
argument that H is needed to obtain the very connectivity used to build H.

The initial V_old/frontier resource comes from the earlier finite frontier
constructor applied to the literal θ-product annular lifts, actual finite
path/loop generators and actual source presentations. Its existence is not
inferred for an arbitrary smooth regular-height frontier or arbitrary end
neighborhood. All of these inputs remain explicit application obligations.

All new choices here are finite for one operating packet. Independently
specified height-band packets can subsequently be selected using Countable
Choice. The construction neither needs a dependent countable selection nor
lowers an upstream full-AC hypothesis. It is a NEW candidate input for review;
it does not certify that all source packages, finite kernel bindings or actual
O-lifts have already been supplied in the comparison problem.
