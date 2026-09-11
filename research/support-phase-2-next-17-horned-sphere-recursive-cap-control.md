# Horned sphere: relative recursive cap control and the limiting ball

Date: 2026-09-12 (Australia/Sydney).

This is a proposed repair-authoring proof package for
`cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls`.
It uses the explicit pillbox in
[the geometric package](support-phase-2-next-17-horned-sphere-geometric-pillbox.md)
and completes its recursive placement/parametrization interface. It does not
edit or certify an item, register a supplier, clear a hold, or alter workflow
state. Only this new research document is written.

The already proved abstract group and spherical-exterior arguments remain
in [the first horned-sphere package](support-phase-2-next-17-horned-sphere.md).

**Mathematical recommendation:** the construction below is suitable for a
bounded repair-authoring pass. It supplies both source and target control,
including a finite-data uniform inverse estimate, instead of leaving an
unproved infinite-placement proposition. The existing operational hold is
unchanged. The author must materialize and check the local suppliers and
the unchanged consumer under the normal workflow before any item decision
is cleared. This is not independent adjudication of the proposed proof.

## 1. Interfaces, and a necessary boundary convention

The geometric package provides a closed ball C*, disjoint solid tori
V₀,V₁⊂C*, cap disks D₀,D₁ on its boundary, and the actual marked pair

    (C*\(V₀∪V₁), ∂C*\(D₀∪D₁))
        ≅ (F×(-1,1), ∂F×(-1,1)),

with F a once-punctured torus. Its two generators are the two solid-torus
meridians. Retain that exact template, not an arbitrary pair of linked tori.

Here a meridional pillbox in a parametrized solid torus T≅D²×S¹ is
the image of D²×I, for a proper closed arc I⊂S¹. Its complementary ball
is

    P = T \ int_T(C) = closure_T(T\C),                         (1)

where **int_T is relative interior in the solid torus**. In the product
coordinates P=D²×closure(S¹\I), and P∩C consists of exactly the two
cap disks D²×∂I. Removing only the ambient three-dimensional interior
of C would retain its lateral annulus in P; that is not this cutting
operation and does not give the asserted cap-only intersection.

This relative-interior convention is also used for the source half-balls.
It makes every later gluing and open-cover assertion literal.

We retain the original AC assumption. In addition to its existing use in
the Jordan–Brouwer/invariance-of-domain route, one may use AC to select the
countable family of finite cap-matching homeomorphisms below. The other
metric choices can be made by choosing the first dyadic scale satisfying
an explicit inequality. No new claim of a choice-free whole construction
is made, and no stronger set-theoretic principle is required.

## 2. Finite relative cap matching, with proof

### 2.1 Restricted finite lemma actually needed

Suppose two closed 3-balls have supplied parametrizations and the same
finite number of labelled disjoint closed disk caps in their boundaries.
For each cap, suppose its boundary-sphere parametrization supplies a disk
chart extending across the cap's edge, and this chart is continuously
differentiable with nonsingular derivative near its center. No smoothness
at the cap's edge is required. Then there is a homeomorphism of the balls
carrying every cap to its counterpart. Its restriction to one cap can be
prescribed as any given disk homeomorphism; the maps on the other caps
are then the ones furnished by the construction.

Only two- and three-cap cases will be used. They are elementary finite
statements about already parametrized balls; neither a three-dimensional
Schoenflies theorem nor recognition of an unknown embedded sphere is involved.

### 2.2 Reduction of each cap to a small round disk

Use the supplied ball parametrizations to work on ordinary S². Choose a
point outside the caps and slightly larger disjoint cap neighborhoods;
stereographic projection makes all these neighborhoods planar. A cap chart
can be written c:D²₂→S² with c(D²₁) the cap. A radial homeomorphism of
D²₂, taking radius 1 to a small λ>0 and fixing radius 2, gives a sphere
homeomorphism, supported in this chart, that shrinks the cap to c(D²_λ).

Here and below radial homeomorphisms use strictly increasing piecewise
linear functions of radius. They have explicit inverse radial functions,
so all extensions by the identity are homeomorphisms, not just homotopies.

The small image can be straightened near its center. In planar coordinates
write g(0)=0, Dg(0)=L, with L invertible. Reverse the input disk chart if
necessary so det(L)>0. After the affine normalization by L⁻¹, the map is
C¹-close to the identity on a sufficiently small disk. Extend its difference
from the identity using the radial Lipschitz cutoff from §3.3 of the
geometric package. The derivative estimate makes that difference have
global Lipschitz constant less than 1/2. The resulting map is a
homeomorphism: injectivity follows from

    |(x+k(x))-(y+k(y))| ≥ (1-Lip(k))|x-y|,

and surjectivity follows by iterating the contraction x↦b-k(x).
The same proof works in dimension two. Conjugating back gives a supported
homeomorphism taking a small ellipse to c(D²_λ).

For completeness, a supported adjustment from a small ellipse to a round
disk requires no disk-unknotting theorem. Join L to the identity through
invertible positive-determinant matrices: factor L into a rotation, a
positive diagonal matrix and an upper triangular shear, and interpolate
the rotation angle, the positive diagonal entries, and the shear entry.
Subdivide this compact matrix path into finitely many steps. Each increment
A is as close to I as needed, so x↦x+χ(x)(A-I)x, with a fixed compact
cutoff, has perturbation Lipschitz constant less than 1/2. On a sufficiently
small disk containing all intermediate ellipses it is exactly A. The finite
composition is the desired supported adjustment. Every support lies in the
chosen cap neighborhood and misses all other caps.

Thus each finite cap configuration can be carried to a configuration of
small disjoint round planar disks by a sphere homeomorphism. This argument
uses differentiability only at the chosen chart centers, not at any corner
or at a subsequently prescribed arbitrary cap map.

### 2.3 Transporting the finite round disks

Two labelled configurations of finitely many disjoint round disks in the
plane can be matched by a compactly supported homeomorphism. Here are
explicit allowed moves. Shrink a moving disk radially in a slightly larger
disk disjoint from the others. Join its center to its destination by a
polygonal path avoiding the protected disks, and shrink its radius below
one tenth of the path's positive distance from those disks.

Such paths exist: start with a polygonal path and replace any portions
meeting a protected disk by arcs on a slightly larger concentric circle.
Do this successively for the finitely many disks; the larger circles can
be disjoint. Approximate the finitely many circular detours by polygonal
ones within their disjoint annular neighborhoods. The resulting compact
path avoids every protected closed disk and hence has positive clearance.

Move the small disk along a sufficiently fine finite subdivision of this
path. A move by v is implemented by x↦x+χ(x)v, where χ=1 on the moving
disk and has support in a clearance ball. Choose the step small enough that
|v| Lip(χ)<1/2. The preceding perturbation argument proves that this is a
homeomorphism; it translates the disk exactly and fixes all protected disks.
At the destination, a radial homeomorphism expands the disk to its desired
size in a neighborhood disjoint from the other final disks.

To avoid any conflict between occupied destinations, first move the disks
to finitely many temporary locations outside both original configurations,
then from these locations to their final positions, one at a time. There
are only finitely many moves. This proves the labelled setwise cap matching.

### 2.4 Prescribing one whole cap map

Choose the orientation of the setwise matching so its restriction to the
prescribed cap has the same orientation as the desired map. Either choice
is available: send the finite disks first to disjoint round disks centered
on one axis, where reflection in that axis preserves all labels and reverses
orientation, and conjugate this reflection back.

The correction required on the prescribed target cap is now an
orientation-preserving self-homeomorphism k of a disk. In its extended disk
chart apply k on D²₁. If b=k|S¹ and β:R→R is its increasing lift with
β(t+2π)=β(t)+2π, then

    β_s(t)=(1-s)β(t)+s t,  0≤s≤1,

defines circle homeomorphisms from b to the identity. On the collar
1≤r≤2 use the map (r,e^{it})↦(r,e^{iβ_{r-1}(t)}); outside the chart
use the identity. At r=1 it agrees with k on the cap boundary, and at
r=2 it is the identity. The inverse exists on each radius, and continuity
of the full inverse follows from the continuous bijection on the compact
closed annulus. This correction fixes every other cap and gives the exact
prescribed map, including its interior, not just its boundary circle.

Finally extend the resulting sphere homeomorphism radially through the
already parametrized ball, by ru↦r b(u) and 0↦0. Its inverse is the
same formula with b⁻¹. This proves the finite relative lemma.

### 2.5 Verification of these finite hypotheses in this construction

Every target piece P in (1) has the supplied cylinder parametrization
D²×[0,1]. Its outgoing caps are the two end disks. Its incoming cap is
the small rectangular angular patch on the side of the solid torus from
the explicit C* model, away from the removed slice. Each cap has a larger
disk neighborhood in the cylinder boundary. For an end cap extend its
radial chart across the rim down the adjacent side; for the incoming cap
extend its rectangle in the side's angular coordinates. These charts are
smooth with full rank near their centers. Radially parametrizing a cylinder
by a round ball is also smooth near these centers; its edges need no such
property. Transporting these parametrizations through the supplied finite
homeomorphisms preserves the asserted abstract cap charts.

The source cap charts are equally explicit from the half-balls and vertical
maps in §5: an incoming cap is a hemisphere, and the two outgoing caps
pull back to ordinary disks strictly inside the flat face. A hemisphere
disk chart extends across its rim to a thin annulus in the flat face;
it is smooth near the pole. The planar disk caps have ordinary larger
disk charts. Thus §2 is applied only to caps satisfying its proved finite
interface, not to arbitrary wild disks on a sphere.

## 3. Relative preparation of arbitrarily small next pillboxes

### 3.1 Statement

Given a cap-marked homeomorphism e:C*→C onto an embedded pillbox, and
η>0, the copy can be modified by a homeomorphism supported in int(C)
so that each child torus contains a prepared meridional pillbox of diameter
less than η. The two next pillboxes have disjoint closed neighborhoods in
int(C), are disjoint from the incoming cap disks, and their complements
in the child tori are the cap-marked cylinder balls of (1). All markings
and the punctured-torus complement pair are transported by this same
homeomorphism. In particular nothing on ∂C or outside C changes.

This changes the shape of the child tori where necessary; it does not
claim that a fixed thick torus already has meridional disks of arbitrarily
small diameter.

### 3.2 Proof in the explicit template

Use the coordinates of the geometric package. Write
a=sqrt((1-r)/2). In V₀≅D²_a×S¹ take the core-angle interval
[π-ν,π+ν], with 0<ν<π/4, and let K₀ be its product with D²_a.
Take K₁ analogously in V₁, interchanging the complex coordinates. These
are meridional pillboxes, and both miss their incoming angular cap patches,
whose core angles lie in [-r,r], with r<π/4.

Each Kᵢ has a larger ambient coordinate cylinder Nᵢ, using disk radius
(1+δ)a and angle half-length (1+δ)ν for small δ>0. For V₀, the
ambient chart is

    (z,v) ↦ (z, sqrt(1-|z|²)e^{i(π+v)});

for V₁ interchange the coordinates. Take δ so small that these two
closed neighborhoods are disjoint and lie in int(C*). This follows
directly from the inequalities: the original tori are separated by the
collar -r<t<r; sufficiently small enlargements stay respectively below
t=-r/2 and above t=r/2, while their core angles near π keep them away
from the deleted angular box. The larger charts are defined since their
disk radii remain less than one.

In either chart use the cylinder gauge

    ρ(z,v)=max(|z|/a, |v|/ν).

On ρ≤1 use homothety by λ, 0<λ<1. On 1≤ρ≤1+δ interpolate its
new radius strictly linearly from λ to 1+δ, and outside Nᵢ use the
identity. This is a homeomorphism supported in Nᵢ, carrying Kᵢ exactly
to the homothetic cylinder λKᵢ. The supports are disjoint.

Conjugate both maps through e. They are homeomorphisms of C fixing a
neighborhood of its boundary, and extend by the identity to the ambient
space. In each conjugated chart, the image of λKᵢ has diameter tending
to zero as λ→0, by continuity at its center (or uniform continuity on
the compact chart). Choose λ small enough that each diameter is below η.
No bound on the Lipschitz constant of the arbitrary e is needed.

The image tori remain disjoint solid tori, the boundary caps remain fixed,
and the image of Kᵢ is still a meridional slice with its original product
coordinates transported. Formula (1) therefore gives its complementary
ball and its two outgoing caps. The ambient homeomorphism transports the
entire marked complement pair and all meridian paths. This proves the lemma.

## 4. The target recursion, with all intersections specified

Start with a standard compact solid torus X₀⊂R³, scaled so its diameter
is at most one. Choose a meridional pillbox C_∅ in it, and put

    B₀ = X₀\int_{X₀}(C_∅).

Then B₀ is a cylinder ball, X₀=B₀∪C_∅, and their intersection is
the two caps of C_∅. The initial exterior and its meridian are the
standard ones computed in §7 of the earlier support.

Use binary words s for the recursion. Having prepared C_s, insert a
cap-marked copy of C* into C_s. Apply §3 with η=2^{-(|s|+1)} to
produce its child solid tori T_{s0},T_{s1} and their next pillboxes
C_{s0},C_{s1}. Record the product parametrization of every T_{si}, its
incoming disk, and its two future slice caps. Then set

    P_s=T_s\int_{T_s}(C_s)       for nonempty s.

The finite output data have the following exact properties:

- T_{s0},T_{s1} are disjoint compact subsets of C_s.
- Each T_{si} meets ∂C_s in its specified cap disk only.
- C_{si}⊂T_{si} lies in int(C_s), away from that incoming disk.
- P_{si} is a ball; P_{si}∩C_{si} is precisely its two outgoing caps.
- The supports used to prepare C_{s0},C_{s1} are disjoint and fix ∂C_s.
- diam(C_s)<2^{-|s|} for nonempty s, and
  diam(T_s)≤2^{-(|s|-1)} for |s|≥1.

The last inequality holds because T_s⊂C_{s^-}; at depth one use
diam(C_∅)≤1. Recursion never changes an already prepared P_s or
any earlier cap identification. Descendants stay inside their recorded
parent envelopes.

For n≥1 define

    B_n = B₀ ∪ ⋃_{1≤|s|≤n} P_s,
    X_n = B_{n-1} ∪ ⋃_{|s|=n} T_s.

At depth n, the T_s are pairwise disjoint and meet B_{n-1} exactly
in their individual incoming disks. This follows inductively because
different sibling tori are disjoint and all further modifications are
inside them, away from their incoming disks. Also

    X_n = B_n ∪ ⋃_{|s|=n} C_s,
    X_{n+1}⊂X_n,       B_n⊂B_{n+1}⊂X_{n+1}.

All these are finite unions of compact sets at each stage. For y∈X_n,
either y∈B_n or y lies in one C_s, which meets B_n in cap disks.
Consequently

    sup_{y∈X_n} dist(y,B_n) ≤ 2^{-n}.                          (2)

The proof that B_n is a ball is supplied by an actual homeomorphism in
§6, not by an implicit general ball-gluing or Schoenflies theorem.

## 5. A fixed source ball with explicit source diameters

Let D be the closed upper half of the Euclidean unit 3-ball, with coordinates
(u,z)∈R²×R and z≥0. It is a topological closed 3-ball: radial coordinates
from any point in its interior identify this convex body with the usual
ball. Use its flat disk z=0 as the face on which the limiting Cantor set
will lie.

Set c_∅=0∈R² and ρ_∅=1. Recursively let

    c_{s0}=c_s-(ρ_s/2,0),    c_{s1}=c_s+(ρ_s/2,0),
    ρ_{si}=ρ_s/8.

For nonempty s put

    R_s = {(u,z): z≥0, |u-c_s|²+z²≤ρ_s²},
    Q_s = {u: |u-c_s|≤ρ_s},
    h_s(u)=sqrt(ρ_s²-|u-c_s|²)      on Q_s,
    S_s = {(u,h_s(u)):u∈Q_s}.

Thus R_s is a convex half-ball; S_s is its incoming hemispherical disk.
The two children are disjoint as closed sets. Their center distance is
ρ_s and their radii sum to ρ_s/4. They lie strictly inside the parent
away from S_s, since their distance from the parent center is at most
ρ_s/2+ρ_s/8=5ρ_s/8. Every R_s touches ∂D only on z=0.

Let U_n=⋃_{|s|=n}R_s. Then U_{n+1}⊂U_n and

    max_{|s|=n} diam(R_s)=d_n=2·8^{-n}.                        (3)

The intersection K=⋂_{n≥1}U_n lies in z=0⊂∂D because every point
of U_n has 0≤z≤8^{-n}. Each infinite binary address determines one
point of K by nested compactness and (3); distinct addresses differ at
a finite stage and hence give different points. These facts use the
actual disjoint closed half-balls, not a drawing of shrinking horns.

### 5.1 Explicit finite source pieces are balls

For nonempty s define

    A_s=R_s\(int_D R_{s0} ∪ int_D R_{s1}),

where interiors are relative to D. Extend the child h-functions by zero
off their disks and put g_s=max(h_{s0},h_{s1}) on Q_s. Then

    A_s={(u,z):u∈Q_s, g_s(u)≤z≤h_s(u)}.

The map

    j_s(u,z)=(u, g_s(u)+(1-g_s(u)/h_s(u))z)                    (4)

for u∈int(Q_s), extended by the identity at the rim, is a homeomorphism
R_s→A_s fixing S_s pointwise. Indeed g_s vanishes in a neighborhood
of the rim, and g_s<h_s wherever it is nonzero, since the children lie
strictly below the parent hemisphere. The fibre maps in (4) are strictly
increasing affine bijections [0,h_s]→[g_s,h_s]. The map is continuous
and bijective on compact R_s, with the explicit inverse obtained by
subtracting g_s and dividing by 1-g_s/h_s. This also proves inverse
continuity directly, since that denominator is bounded away from zero
on the compact support of g_s.

The outgoing caps of A_s are S_{s0},S_{s1}. Under j_s⁻¹ they are
the ordinary disks Q_{s0},Q_{s1} in the flat face of R_s. The incoming
cap is S_s. Thus these are precisely the source three-cap balls used
by §2.

Define the root piece A_∅=D\(int_D R₀∪int_D R₁). The same formula
with the unit hemisphere height h_∅ gives j_∅:D→A_∅. This root has
the two outgoing caps S₀,S₁. More generally put

    A^{≤n}=D\⋃_{|s|=n+1} int_D R_s.

The same vertical formula with the maximum of the finitely many depth
n+1 height functions proves A^{≤n} is a ball. It is also the union
of A_∅ and A_s for 1≤|s|≤n. Distinct pieces have only the declared
parent/child cap intersections; their interiors are disjoint.

## 6. Relative parametrizations and genuine finite embeddings

Apply §2 first to obtain a two-cap homeomorphism

    h_∅:A_∅→B₀

matching S₀,S₁ to the two root slice caps. Suppose the homeomorphism
on the parent piece has been chosen. Its outgoing cap map prescribes a
homeomorphism S_s→D_s, where D_s=T_s∩B_{|s|-1} is the incoming
target cap. Apply the relative three-cap lemma to obtain

    h_s:A_s→P_s,

with exactly that incoming cap map, and carrying S_{s0},S_{s1} to
the two actual cap disks of C_s. The maps on these outgoing disks are
then prescribed for the next two children. This is the only recursive
compatibility requirement; it is fulfilled, not independently reselected
at each end of an attached disk.

Finite pasting gives a homeomorphism

    h^{≤n}:A^{≤n}→B_n.                                       (5)

To justify this without a gluing theorem, the source is a finite closed
cover by its ball pieces, and all maps agree on intersections. Its target
pieces meet in exactly the same cap pattern. Hence the pasted map is a
continuous bijection. The source is compact and the target Hausdorff, so
it is a homeomorphism. In particular B_n really is a ball.

For n≥1 define f_n:D→B_n as follows:

- on A^{≤n-1}, use h^{≤n-1};
- on each R_s with |s|=n, use h_s∘j_s.

These prescriptions agree on S_s because j_s fixes S_s. The same
finite-pasting/injectivity argument proves that f_n is a homeomorphism
onto B_n. If desired define f₀=h_∅∘j_∅. No limiting argument has
been used to assert any finite f_n is an embedding.

For every m≥n≥1 the construction gives

    f_m|_{D\U_n}=f_n|_{D\U_n},
    f_m(R_s)⊂T_s  (|s|=n),
    f_n(D\U_n)∩⋃_{|s|=n}T_s=∅.                              (6)

For the second assertion, all descendant pieces of A_s map into
descendants of T_s⊂C_{s^-}; the terminal approximating maps have the
same property. For the last assertion, the old body meets T_s only
in its incoming cap, whose preimage S_s is already contained in R_s.

The target cells in (6) are the **solid-torus envelopes T_s**, not only
the next pillboxes C_s. Their diameters still tend to zero, with a
one-generation shift. This avoids trying to confine an entire unfinished
source half-ball to only one of the two caps of its next slice.

From (6) and the target diameter bound,

    ||f_m-f_n||∞ ≤ 2^{-(n-1)}   for m≥n≥1.                    (7)

This estimate concerns images in the fixed ambient R³. The prepared
support sizes and source radii were chosen separately and verified to be
compatible by the cap-matching maps; neither is inferred from the other.

## 7. Uniform inverse control from finite-stage data

This supplies an explicit finite-data substitute for the unsupported claim
that distinct limiting horns cannot collide. For each n≥1 construct a
continuous map q_n:X_n→D with

    q_n|_{B_{n-1}}=(h^{≤n-1})⁻¹,
    q_n(T_s)⊂R_s   for |s|=n.                                (8)

Here is a concrete extension proving (8). The incoming disk D_s in T_s
has a product neighborhood with coordinates (u,t)∈D²₂×[0,1], its
cap being D²₁×{0}. These are the supplied side-cap and inward radial
coordinates of the solid torus, transported through the finite maps.
Their extension beyond the cap rim misses every other attachment.

Let a_s=(c_s,0)∈R_s. If v(u)=u/max(1,|u|), let b_s(v) be the
prescribed inverse incoming-cap map into S_s. Choose

    w(r)=1 (0≤r≤1),     w(r)=2-r (1≤r≤2),
    α(u,t)=w(|u|)(1-t).

On this product neighborhood define

    q_n(u,t)=α(u,t)b_s(v(u))+(1-α(u,t))a_s.                    (9)

Outside it, on the rest of T_s, use the constant a_s. Formula (9)
has that value on the neighborhood's interior boundary (|u|=2 or t=1),
and agrees with the required cap inverse on D_s. It lands in R_s
because R_s is convex. Thus it is continuous on T_s. The finitely
many definitions agree with the inverse on B_{n-1}, so finite closed
pasting gives the asserted q_n. No retraction of a solid torus onto
its full boundary is being claimed.

For every m≥n and x∈D, (6) and (8) imply

    |q_n(f_m(x))-x|≤d_n.                                     (10)

Outside U_n the left side is zero; inside a particular R_s both
points lie in that half-ball, whose diameter is d_n.

Because X_n is compact, define the following number solely from the
finite data X_n,q_n. If the compact set

    M_n={(u,v)∈X_n²: |q_n(u)-q_n(v)|≥d_n}

is nonempty, let δ_n be half the minimum of |u-v| on M_n.
This minimum is positive: a zero minimum would have u=v but distinct
q_n-values. If M_n is empty, put δ_n=1. Then for all u,v∈X_n,

    |u-v|<δ_n ⇒ |q_n(u)-q_n(v)|<d_n.

Combining with (10) gives the common tail inverse estimate

    |f_m(x)-f_m(y)|<δ_n ⇒ |x-y|<3d_n,
    for every m≥n.                                          (11)

Thus d_n=2·8^{-n} is an explicit source bound, while δ_n>0 is a
specified positive separation number extracted from finite compact data.
There is no unsupported assertion of one universal Lipschitz inverse
constant. For a modulus applying to all m, including m<n, take the
minimum with the finitely many ordinary uniform-continuity moduli for
f₀⁻¹,…,f_{n-1}⁻¹. Those maps are already proved homeomorphisms of
compact spaces. The common tail bound (11) is enough for the limit.

## 8. The limiting embedded closed ball

By (7) and Euclidean completeness the f_n have a uniform limit f:D→R³.
Uniform limits of continuous maps are continuous, by the direct
epsilon/3 estimate using one continuous f_n. For every fixed n, all
later f_m(D) lie in the closed X_n, so f(D)⊂X_n.

Let B=⋂_{n≥0}X_n. Formula (10) passes to the limit because q_n is
continuous on X_n. Consequently (11) holds with f in place of f_m.
If x≠y, choose n with 3d_n<|x-y|. The equation f(x)=f(y) would
contradict that estimate. Therefore f is injective. Moreover the same
estimate proves uniform continuity of its inverse once surjectivity is
established; this is genuine inverse control, not just pointwise coding.

For y∈B, (2) gives dist(y,B_n)≤2^{-n}. By (7),

    dist(y,f(D)) ≤ 2^{-n}+2^{-(n-1)}.

This tends to zero. The compact image f(D) is closed, so y∈f(D).
The reverse inclusion was already shown. Thus f(D)=B. The compact-to-
Hausdorff argument, or the inverse estimate just proved, makes f a
homeomorphism from the closed source 3-ball onto B.

The persistent source set K lies in ∂D; all other source points are
eventually outside U_n and their images stabilize. Two different infinite
addresses are separated by disjoint closed envelopes at some finite level.
These statements now follow from the constructed data and (11); they are
not premises substituted for injectivity.

Apply the existing invariance-of-domain theorem to f on int(D). As proved
in §3 of the first support, also applying it to the inverse on a hypothetical
ambient neighborhood of a boundary image shows

    int(B)=f(int(D)),     ∂B=f(∂D)≅S².

This final identification inherits the declared AC assumption of that
supplier. No property of a wild boundary was used in the finite cap or
thin-neck lemmas.

## 9. Meridian tracking through this particular recursion

The standard initial X₀ has exterior group Z and a chosen pushed-off
meridian. Each C_s is a *meridional* slice in the recorded product
coordinates of T_s. Therefore its side-circle, pushed outside T_s,
is exactly a representative of the relevant parent meridian, not merely
some loop in the exterior.

Prescribe the boundary map e:C*→C_s to carry the side-annulus product
coordinates to those of this slice, including the central side circle.
Such a boundary map is already available from the cap-marked coordinates
in the geometric package, and extends radially between the two known
balls. The two child meridians in C* may be taken at core angle π;
these are precisely the meridian slices prepared in §3. Their loops and
basepoint paths are transported along with the compression, which is the
identity on the parent boundary and outside its interior support.

There is also a concrete exterior collar for each insertion. The outward
side collar of ∂D²×int(I) in the parent torus comes from slightly
increasing the disk radius in its extended ambient chart; this is outside
the old torus. The inward collar comes from the transported C* model
after replacement. They agree on the prescribed annulus parameters and
form a two-sided product collar. At the cap ends let the width decrease
if necessary; the product coordinates make this explicit. Disjoint closed
prepared supports and their positive distances from all other finite-stage
pieces ensure that the collar misses the remainder Y of the old body.
Thus the open cover in §4 of the geometric package really applies here.

The initial exterior is path connected. At each insertion that cover has
path-connected pieces and a nonempty path-connected annular overlap, so
the new exterior is path connected as well. This verifies the connectedness
hypothesis inductively rather than assuming it for all later exteriors.

For simultaneous depth-n replacements, carry out the finitely many disjoint
insertions in lexicographic order. Basepoint paths for still-unreplaced
pillboxes lie in the old exterior, hence cannot enter any remaining closed
pillbox. They are retained. For the new children use the transported paths
in the corresponding punctured-torus block. The annular map is consequently
the boundary word [a,b] of that marked block, with every change of
orientation or basepoint accounted for by inversion or the supplied path
conjugation. Child loops are recorded in their future slice coordinates,
so the next replacement uses these same marked generators.

The previously proved free-group calculation now applies to this actual
recursion: replace a parent free generator by the nontrivial commutator
word in its two new child generators, retaining the other generators.
The corresponding inclusions are injective by reduced words. If a
conjugated or inverse convention is used, retain that exact word; it lies
in the two-child free factor and every nonzero power is nontrivial.
Do not silently assert a particular un-conjugated length formula when
different basepoint conventions were chosen.

The initial loop therefore survives in every exterior R³\X_n. Any
contracting disk in R³\B would, by compactness of its image, lie in
one such finite exterior, a contradiction. This uses the original
nonabelian proof, not linking number. Its abelianization is zero after
one commutator replacement, so a linking-number shortcut would still
be invalid even with the correct geometric construction.

Finally use the proved puncturing-at-infinity argument from §7 of the
first support: the spherical exterior S³\B is an open 3-manifold and
deleting infinity induces a π₁ isomorphism. Jordan–Brouwer gives the
two components of S³\∂B, and the exterior's nontrivial π₁ excludes
an open 3-ball. No full Schoenflies, loop theorem, transversality, or
claim that every Cantor point is wild is needed for this consumer.

## 10. Source evidence, validation, and authoring disposition

The additional primary author source read for this pass was
[Daverman–Venema, *Embeddings in Manifolds*, §2.1, pp.47–51](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/davenema.pdf).
It organizes the sphere by pillbox replacements and a tree of complementary
ball pieces, with shrinking pillbox sizes. Figure 2.12 on printed p.51
(PDF page 70, one-based) was visually inspected. The nested half-ball
source above makes that domain-decomposition idea quantitative; the
relative compression, cap transport and finite inverse estimates are
local proofs in this package, not quotations from the source.

The PDF was retrieved successfully to
`/tmp/phase2next17-horn-davenema.pdf`; reuse that file. The relevant text
was extracted/read with `mutool draw -F txt`. An initial `pdftotext`
command failed because that executable is unavailable; it was not a
source-retrieval failure. Printed pp.19–21 were also read to inspect the
source's PL Schoenflies boundary: its proof invokes additional PL results.
That theorem is **not** imported here; §2 gives the restricted cap
transport proof actually used. The existing Hatcher and Powell–Ray
sources and diagrams were already read in the two linked support packages.

All local links below and the two support links at the beginning were
checked as existing files. Referenced item IDs were checked directly:

| Item ID | Observed file state | Use |
|---|---|---|
| `cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls` | Absent; present in current batch-5 manifest | Original unchanged consumer |
| `lem-controlled-nested-horn-construction-embeds-a-closed-three-ball` | Absent; proposed in group-D report | §§2–8 supply its proposed construction proof |
| `lem-horn-replacement-block-has-injective-commutator-meridian` | Absent; proposed in group-D report | Geometric package plus §§3,4,9 supply the marked insertion interface |
| `thm-banach-fixed-point` | Present, published | Small supported perturbations in finite cap transport |
| `thm-euclidean-space-complete` | Present, published | Perturbations and uniform limit |
| `thm-mean-value-inequality-for-total-derivatives` | Present, published | C¹-to-Lipschitz estimate |
| `thm-compact-subset-of-a-hausdorff-space-is-closed` | Present, published | Compact image and limiting surjectivity |
| `thm-invariance-of-domain` | Present, draft | Boundary/interior identification |
| `thm-jordan-brouwer-separation` | Present, draft | Spherical component count |
| `thm-seifert-van-kampen` | Present, published | Actual collared open-cover calculation |
| `thm-fundamental-group-of-finite-wedge-of-circles` | Present, published | Marked block's free group |
| `thm-reduced-words-form-the-free-group` | Present, published | Injective stage homomorphisms |
| `prop-fundamental-groups-of-punctured-euclidean-spaces` | Present, published | Puncturing-at-infinity comparison |
| `def-axiom-of-choice` | Present, published | Retained assumption and countable finite-homeomorphism selections |

The record locations are
[the batch-5 manifest](phase-2-next-17-batch-5.pages.json) and
[the original group-D report](phase-2-next-17-step3b-d.md). They were read
only and have not been amended. The three absent IDs above are expected;
they are not represented as existing usable suppliers.

The author should preserve these exact boundaries when materializing the
repair: relative-interior cuts; cap-only intersections; the same C* marked
complement at every stage; source radius 8^{-|s|}; target pillbox bound
2^{-|s|} and one-generation envelope bound; prescribed incoming cap maps;
the finite inverse maps q_n; and transported meridian/basepoint records.
State the AC selection use rather than inheriting a silent choice-free
claim from a finite subargument.

No additional unresolved topology proposition is being used as a premise
in the proposed construction above. The former broad geometric hold has
therefore been reduced to materializing and checking these explicit local
proofs, not to accepting a conditional existence statement. It is appropriate
to reopen **authoring** within the authorized existing-page scope; this
support itself leaves the actual hold and every certification gate untouched.
