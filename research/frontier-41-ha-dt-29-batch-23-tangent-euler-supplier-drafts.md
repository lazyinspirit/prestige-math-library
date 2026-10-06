# Batch 23: proof-ready finite-cell tangent-Euler suppliers

Run: `frontier-41-ha-dt-29`. These are research-only supplier drafts ordered
for later review and possible local-item authoring. No canonical item, page,
manifest, coverage record, receipt, or controller state was changed.

## Shared scope and choice bound

Assume `AC_ω`. Let `S` be a compact, connected, closed, oriented `C²` surface
which is a `C²` embedded leaf in a smooth ambient manifold `M`. In the
Novikov §8 application, `S` is the sole compact boundary leaf after `W` has
already been constructed. The tangent bundle is the continuous oriented
rank-two bundle `TS`; no `C∞` smoothing of `S` is assumed.

The only nonfinite choice supplier is the existing embedding theorem for the
smooth ambient manifold, `thm-every-smooth-manifold-embeds-in-some-finite-
dimensional-euclidean-space`, whose hypothesis is exactly `AC_ω`. The
`C²` inclusion then gives a `C²` Euclidean embedding of `S`. The generic
height parameter argument uses `thm-morse-sard-for-euclidean-maps` in the
equal-dimensional `C¹` case. Everything after that is finite: critical
points, bump functions, handle attachments, cells, bundle charts, and
excisions. None of the six suppliers below needs full AC.

The supplier order is:

1. `lem-c2-planar-topological-morse-normal-form`;
2. `lem-c2-local-sublevel-handle-attachment`;
3. `lem-finite-cellulation-compatible-with-surface-handles`;
4. `lem-finite-bundle-chart-subdivision`;
5. `lem-degree-two-finite-thom-class`;
6. `lem-finite-cell-section-coefficient-is-local-degree`.

Together with the already-audited generic-height argument, these yield
`cor-tangent-euler-number-equals-surface-euler-characteristic`, with the
finite-cell Euler class `e_fin(TS)` defined below and comparison to the usual
Thom-defined class when available.

| Supplier | Exact dependencies | Choice cost |
|---|---|---|
| 1 | `thm-sylvesters-law-of-inertia`; `thm-euclidean-implicit-function-theorem`; `thm-euclidean-inverse-function-theorem`; `C²` Taylor formula | None. The smooth `thm-morse-lemma` is not used. |
| 2 | Supplier 1; induced `C¹` metric; local `C¹` ODE existence/uniqueness and continuous dependence | No extra choice. The smooth-flow theorem must be adapted by its local Picard–Lindelöf proof at `C¹`. |
| 3 | Supplier 2; finite disk/rectangle cellulations and finite subdivision of attaching intervals | Finite choices only. |
| 4 | Supplier 3; `thm-heine-borel-rn`; `lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero`; finite-cover Lebesgue-number argument | No choice axiom. |
| 5 | Supplier 4; `lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology`; singular cohomology pair LES, excision and naturality | Finite skeletal proof only; no full-AC Thom or cellular-cohomology theorem. |
| 6 | Supplier 5; `lem-compatible-local-orientation-classes-exist-over-compact-subsets`; `def-kronecker-evaluation-pairing`; degree homotopy invariance | Finite zeros, disks, and trivializations only. |

| Supplier | Exact local inputs | Choice/regularity note |
|---|---|---|
| 1 | `thm-sylvesters-law-of-inertia`; `thm-euclidean-implicit-function-theorem`; `thm-euclidean-inverse-function-theorem`; Taylor's integral formula for `C²` functions | Finite-dimensional; only a homeomorphic normal form is claimed. |
| 2 | Supplier 1; the induced `C¹` metric; local `C¹` ODE existence, uniqueness and continuous dependence | Use a direct Picard–Lindelöf proof/adaptation at `C¹`; do not cite the library's smooth-flow theorem as if it covered a `C¹` field. |
| 3 | Supplier 2; finite triangulations of disks and rectangles; finite subdivision of attaching intervals | All maps are the actual handle attaching homeomorphisms; finite choices only. |
| 4 | Supplier 3; `thm-heine-borel-rn`; `lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero`; the finite-cover Lebesgue number lemma | Compact metric surface and a finite bundle-trivializing subcover. |
| 5 | Supplier 4; `lem-thom-disk-sphere-quotient-identifies-relative-and-reduced-cohomology`; pair LES, excision and pair naturality in singular cohomology | Direct finite skeletal proof; do not cite the general full-AC Thom existence or cellular-cochains theorem. |
| 6 | Supplier 5; `lem-compatible-local-orientation-classes-exist-over-compact-subsets`; Kronecker pairing; homotopy invariance and excision | Finite zero set, finite disjoint disks and finite local bundle charts. |

## Supplier 1: `C²` planar topological Morse normal form

**Statement.** Let `f:U→R` be `C²` on an open neighborhood `U⊂R²`, with
`df(0)=0` and nonsingular Hessian at `0`. Let `λ` be the number of negative
eigenvalues of the Hessian. There are neighborhoods `U₀` of `0` and `V₀` of
`0`, and a homeomorphism `Φ:U₀→V₀`, `Φ(0)=0`, such that

$$f(x)-f(0)=-|X|²+|Y|²,\qquad (X,Y)=Φ(x),$$

where `X∈R^λ`, `Y∈R^{2−λ}`. For this two-dimensional statement, the possible
indices are `0,1,2`. The coordinate change is asserted only to be a
homeomorphism; no differentiability beyond that is used downstream.

**Proof.** A linear coordinate change diagonalizes the Hessian by Sylvester
inertia and rescales its nonzero eigenvalues to `+1` and `−1` at the level of
the quadratic form. If the Hessian is positive definite, compactness of the
unit circle and Taylor's formula give, for some `a>0` and all sufficiently
small `r>0`,

$$\partial_r(f(rv)-f(0))=r\,D²f(0)[v,v]+o(r)>a r
\quad (|v|=1),$$

uniformly in `v`. Thus each radial restriction is strictly increasing from
zero. Set `R(rv)=\sqrt{f(rv)-f(0)}\,v` and `R(0)=0`. Uniform quadratic
bounds `a_0r²≤f(rv)-f(0)≤a_1r²` give continuity at zero. On each ray the
radius map is continuous and strictly increasing. Its inverse is continuous:
if target radii and directions converge, every subsequential limit of the
bounded source radii solves the same strictly monotone scalar equation, so
all subsequences have the unique same limit. The image is the open
star-shaped neighborhood bounded by the continuous radial image of a small
circle, and `f-f(0)=|R|²` there. Apply this argument to `f(0)-f` for a
negative-definite Hessian.

For an indefinite Hessian, choose linear coordinates `(x,y)` with
`f_{xx}(0)>0` and

$$f_{yy}(0)-f_{xy}(0)^2/f_{xx}(0)<0.$$

The `C¹` implicit-function theorem applied to `f_x=0` gives a `C¹` function
`x=η(y)` with `η(0)=0` and `f_x(η(y),y)=0`. Put `b(y)=f(η(y),y)`. Since
`b'(y)=f_y(η(y),y)`, the function `b` is `C²`, and differentiation at zero
gives `b''(0)=f_{yy}(0)-f_{xy}(0)^2/f_{xx}(0)<0`. Shrink the rectangle so
`f_{xx}>0` and `b''<0` throughout it.

For each fixed `y`, strict convexity makes `x=η(y)` the unique minimum of
`f(·,y)`. Define

$$X(x,y)=\operatorname{sgn}(x-η(y))\sqrt{f(x,y)-b(y)},\qquad
Y(y)=\operatorname{sgn}(y)\sqrt{b(0)-b(y)},$$

with both expressions zero on their zero sets. The maps are continuous.
For fixed `y`, `X(·,y)` is strictly increasing: on either side of `η(y)`
this follows from the strict sign of `f_x`, and across `η(y)` it follows
from the sign convention. Since `b''<0`, `Y` is strictly increasing on a
small interval. Shrink once more so the `X`-ranges of the two vertical ends
of the rectangle contain a common interval about zero. Then every sufficiently
small pair `(X,Y)` has exactly one preimage: first recover `y` from `Y`, then
recover `x` from the strictly increasing scalar map `X(·,y)`. The inverse is
continuous by compactness and uniqueness of these scalar solutions. Thus
`(x,y)↦(X,Y)` is a homeomorphism between neighborhoods, and
`f-f(0)=X²-Y²` by construction. Interchange the names of the output
coordinates so the negative square is the `X` block in the statement. ∎

No full-AC Morse lemma is used. The definite radial argument and the saddle
completion prove only the topological normal form needed for the handle
supplier.

## Supplier 2: local topological sublevel handle attachment

**Statement.** Let `S` be a compact `C²` surface and `f:S→R` a `C²`
function. Suppose `p` is its only critical point in the compact closed band
`f^{-1}[c−ε,c+ε]`, where `c=f(p)`, the endpoint levels are regular, and the
Hessian index at `p` is `λ`. Then the upper sublevel is obtained from the
lower sublevel by one topological `λ`-handle
`D^λ×D^{2−λ}` attached along `S^{λ−1}×D^{2−λ}`. The part of the band
outside an isolating block is a union of product collars. No smooth corner
rounding is claimed.

**Proof.** Use Supplier 1's local homeomorphism to write
`q=f−c=−|x|²+|y|²`. Shrink the model neighborhood so its image is contained
in `S` and contains no other critical point.

- **Index 0.** Here `q=|z|²`. A closed disk `H` of radius less than
  `√ε` is disjoint from the lower sublevel and contained in the upper one.
  Attach `H` as a 0-handle. The annular part out to the upper level is
  regular and is included in the collar described below.
- **Index 2.** Here `q=−|z|²`. The disk `H={|z|≤√ε}` has boundary
  `q=−ε`; its interior is absent from the lower sublevel and present in the
  upper sublevel. It is a 2-handle attached along its full boundary circle.
- **Index 1.** Write `q=−x²+y²`. Choose `d>0` with `d²<ε` and
  `R²>ε+d²`, with the whole rectangle
  `B=[−R,R]×[−d,d]` contained in the model neighborhood. Put
  $$H=\{(x,y):|y|≤d,\ |x|≤\sqrt{ε+y²}\}.$$
  The map
  $$(u,v)\longmapsto(\sqrt{ε+d²v²}\,u,dv),\quad (u,v)∈D¹×D¹,$$
  is a homeomorphism onto `H`. Its attaching sides `u=±1` lie on
  `q=−ε`, hence equal `S⁰×D¹` in the lower level. On `H`,
  `q≤y²≤d²<ε`, so `H` lies in the upper sublevel. In `B`, the lower
  sublevel is `x²≥ε+y²`, the upper sublevel is all of `B`, and their union
  is exactly the lower sublevel together with `H`, with intersection the
  two attaching sides. Thus `H` is an explicit 1-handle.

For the complement, first use this finite regular-band lemma. Let `R` be a
compact `C¹` surface with boundary, and let `h:R→[a,b]` be `C¹` with no
critical point. Suppose its boundary is the union of horizontal faces in
`h^{-1}(a)∪h^{-1}(b)` and vertical faces tangent to a `C¹` field `V` with
`dh(V)=1`. Extend `V` to a neighborhood of `R`. Its flow exists for the
bounded time needed to cross the band; uniqueness and tangency to vertical
faces show that every orbit meets `h^{-1}(a)` and `h^{-1}(b)` exactly once.
The map `(z,t)↦φ_{t-a}(z)` is then a homeomorphism from
`h^{-1}(a)×[a,b]` onto `R`, with inverse
`w↦(φ_{a-h(w)}(w),h(w))`. If a band is cut into finitely many such pieces,
these product identifications glue along the actual common boundary arcs.

In the saddle chart, the free faces of the explicit block are compact `C¹`
arcs in the regular set: writing Supplier 1's pre-swap coordinate as
`Xtemp=sgn(x−η(y))√(f(x,y)−b(y))`, they are `Xtemp=±d`. On these arcs
`Xtemp` is `C¹` and its derivative in the `x` direction is nonzero, so the
implicit function theorem makes each a `C¹` embedded arc. They meet the lower-level attaching faces only
at their endpoints and otherwise lie strictly between the endpoint levels.
Use the following one-dimensional transverse-field fact on each free arc:
if `h` is `C¹` with `dh≠0` along a compact embedded `C¹` interval `A`, one
can choose a `C¹` field `V` along `A` such that `dh(V)=1` and `V` is
transverse to `A`. At each point, the affine line `dh(V)=1` has at most one
vector tangent to `A` to avoid, so there are local choices. Along the
interval continue a choice across a finite chain of overlapping interval
charts, choosing the next local field to agree at one point in the overlap
and remain in the same component of the affine line with the forbidden
tangent vector removed. At a point where `dh(TA)=0`, that forbidden vector
is absent, so the two components join and the continuation extends. A
partition of unity subordinate to these small overlaps preserves `dh(V)=1`;
because the fields being averaged lie in one component on each overlap, the
average remains transverse. Extend over a narrow collar. This keeps the
actual block and attaching map fixed.

To apply the regular-band lemma, extend this transverse field to a product
collar of each free arc and continue its flow as a vertical face up to the
upper endpoint level. The resulting finite strip is an embedded product:
within the collar this follows from transversality and the inverse function
theorem; continuation through the compact regular band uses the regular-band
product lemma and cuts into finitely many flow-box pieces if the strip exits
a single chart. Its side boundaries are flow trajectories. The local handle and the strips cut the rest of the
critical band into finitely many compact regular pieces with horizontal
level faces and vertical flow faces. Apply the preceding regular-band lemma
to each piece. Their product structures glue to the explicit local block
along the actual interval parametrizations. This gives the upper sublevel
from the lower one by the stated handle and regular collars. Index 0 uses a
small regular level disk; index 2 uses the disk bounded by the lower regular
level. ∎

The normal form need only be topological. The exterior flow uses a `C¹`
gradient field from the ambient-induced `C¹` metric. No full-AC smooth Morse
lemma or smooth handle-rounding result is used.

## Supplier 3: actual finite cellulation matching the handle maps

**Statement.** A compact surface built from finitely many 0-, 1-, and
2-handles by Supplier 2 admits a finite face-to-face cellulation of the
actual surface, with every attaching map cellular after finite subdivision.
Only finite choices are used.

**Construction.** A 0-handle is a disk; triangulate it by coning a finite
subdivision of its boundary to one interior vertex. Inductively assume the
current compact surface has a finite boundary cellulation. A 1-handle
`D¹×D¹` attaches along the two intervals `S⁰×D¹`, each mapped
homeomorphically onto a closed boundary interval. Insert their four
endpoints and every existing boundary vertex lying in those intervals.
There are finitely many because the current boundary cellulation is finite.
Pull the resulting finite subdivisions back to the two attaching sides.
Together with chosen finite subdivisions of the free sides, these give a
finite polygonal subdivision of the rectangle boundary. Cone that boundary
subdivision to one interior point, triangulating the resulting faces if
needed. This gives a finite triangulation whose attaching edges are exactly
the pulled-back edges. Glue them by the prescribed homeomorphisms. The free
rectangle edges become new boundary edges; all incidences are face-to-face.

To make the parametrizations match literally, complete the two attaching
side maps to a homeomorphism of the rectangle boundary by mapping its two
free sides linearly to the two new boundary arcs. Identify the rectangle
with a closed disk. Any boundary homeomorphism `g:S¹→S¹` extends by the
Alexander formula `G(ru)=r g(u)`, `0≤r≤1`; pulling back a finite fan
triangulation by this extension gives the stated compatible interior cells.

A 2-handle attaches along an embedded circle in the current boundary. Since
each boundary component is a circle, this is a whole boundary component.
Pull its finite vertex set back under the attaching homeomorphism, subdivide
the circle accordingly, and cone that subdivision to a new interior vertex
of the handle disk. Glue every boundary edge to its already cellulated
image. The new radial edges and face interiors are cells. After finitely
many handles this gives a finite cellulation of `S` itself, not merely a
CW complex homotopy equivalent to it. ∎

For each handle pair, the relative cellular homology is that of
`(D^λ,S^{λ−1})`, with one generator in degree `λ`. Thus the alternating
homological Euler characteristic changes by `(-1)^λ` at each attachment.
Euler–Poincaré for the resulting finite cellulation identifies the final
alternating Morse index count with `χ(S)`.

## Supplier 4: finite subdivision subordinate to bundle charts

**Statement.** Let `S` have the finite triangulation of Supplier 3, and
let `E→S` be a locally trivial vector bundle with a chosen orientation.
There is a finite barycentric subdivision such that every closed simplex is
contained in one orientation-preserving bundle-trivializing chart.

**Proof.** Compactness gives a finite subcover `U_1,…,U_m` from the open
cover of local bundle trivializations. Give the finite triangulation its
piecewise Euclidean metric. The finite open cover has a Lebesgue number
`δ>0`; every subset of diameter less than `δ` lies in one `U_i`. For a
Euclidean triangle, each barycentric subdivision has mesh at most `2/3`
times the preceding mesh. Choose a finite subdivision depth with mesh below
`δ`. Each closed simplex is now contained in a trivialization. If its chosen
frame reverses the given orientation, reverse the first frame vector.
Everything is finite; no stronger choice principle is used. ∎

## Supplier 5: degree-two finite Thom class by skeletal attachment

**Statement.** Let `K` be a connected finite triangulation of dimension at
most two, and let `E→K` be an oriented topological real two-plane bundle.
There is a unique class
`U∈H²(D(E),S(E);Z)` whose restriction to each fiber disk pair is the
positive orientation generator. The proof constructs only this degree-two
class; it does not assert the general Thom isomorphism.

**Proof.** Use Supplier 4 to trivialize the bundle over every closed simplex.
Choose a fiber metric by patching the finitely many local metrics with a
finite partition of unity. Explicitly, shrink the finite trivializing cover
to a finite open refinement whose closures lie in chart members and still
cover `K`; distance-to-complement functions of the refinement, normalized
by their positive finite sum, give subordinate weights. The sphere bundle
has a radial collar in the disk bundle, so it is a cofibration. For `j=0,1,2`, put
`T_j=D(E|K^{(j)})/S(E|K^{(j)})`, with the entire sphere bundle collapsed
to the basepoint. By excision, the relative groups of `(T_j,T_{j−1})` are the direct sum, one
summand per `j`-cell, of the relative groups of the product pair

$$\bigl(D^j×D²,\ (\partial D^j×D²)\cup(D^j×S¹)\bigr).$$

Each quotient summand is `S^{j+2}`. Hence its relative cohomology is `Z`
in degree `j+2` and zero in all other degrees. The quotient-pair theorem
identifies `\widetilde H²(T_2;Z)` with `H²(D(E),S(E);Z)`.

At the 0-skeleton, `T_0` is a finite wedge of 2-spheres and
`H²(T_0;Z)=Z^V`, with one coordinate per vertex. Assign `+1` to every
oriented fiber generator. Adding an oriented edge attaches one 3-cell. Its
boundary has the product orientation of the interval and fiber disk: the
terminal endpoint contributes the positive fiber generator and the initial
endpoint the negative one. Orientation-preserving fiber transition maps have
degree `+1`. Therefore the connecting map
`H²(T_0)→H³(T_1,T_0)` sends vertex values `(a_v)` to edge differences
`a(v_1)−a(v_0)`. The all-ones vector lies in its kernel, so the pair long
exact sequence extends it to `H²(T_1)`. This extension is unique because
`H²(T_1,T_0)=0`.

Adding a 2-cell attaches one 4-cell. Both `H²(T_2,T_1)` and
`H³(T_2,T_1)` vanish, so restriction `H²(T_2)→H²(T_1)` is an isomorphism.
The class thus extends uniquely over every face. Within a trivialization on
a simplex, transport along a path identifies its fiber restrictions, so the
positive value at the vertices is the positive value at every point. This
proves existence and uniqueness. ∎

The relative cell groups and the single edge incidence computation can
equivalently be obtained from the singular pair LES and excision on the
three finite skeleta. No general full-AC cellular-cohomology or Thom theorem
is used.

Define the finite-cell Euler class by
`e_fin(E):=z^*j^*(U)∈H²(S;Z)`, where `z:S→D(E)` is the zero section and
`j^*:H²(D(E),S(E))→H²(D(E))` is the relative-to-absolute map. If the
ordinary global Thom class is also available, Supplier 5's uniqueness shows
that it equals `U`, so `e_fin(E)` equals the usual Thom-defined Euler class.
This comparison does not enter the finite proof.

## Supplier 6: local section coefficient equals boundary degree

**Statement.** Let `S` be a closed oriented surface with a finite
cellulation, let `E→S` be an oriented two-plane bundle with Supplier 5's
finite Thom class, and let `s` be a continuous section with a finite set
`Z` of isolated zeros. Give each small disk `D_p` around a zero its surface
orientation and choose an orientation-preserving bundle trivialization over
it. Then

$$\langle e_fin(E),[S]\rangle
=\sum_{p∈Z}\deg\bigl(s/|s|:∂D_p→S¹\bigr).$$

**Proof.** Radial deformation of `D(E)\setminus0_S` onto `S(E)` induces an
isomorphism
`H²(D(E),D(E)\setminus0_S)→H²(D(E),S(E))`. Let `U_0` be the unique
preimage of the normalized class `U`. Compactness bounds `|s|`, so multiply
`s` by a sufficiently small positive scalar to put its image in the open
disk bundle. It is then a map of pairs
`(S,S\setminus Z)→(D(E),D(E)\setminus0_S)`. The straight-line fiber
homotopy from the zero section to the scaled section proves that the
absolute image of this relative pullback is `e_fin(E)`.

Choose pairwise disjoint closed coordinate disks around the zeros, small
enough that each lies in one oriented bundle trivialization. On one such
disk, the pair map is `x↦(x,s(x))` in `D²×D²`. The homotopy
`(x,s(x))↦(t x,s(x))`, `0≤t≤1`, contracts its base coordinate to the
center and remains a map of pairs: if `x≠0`, then `s(x)≠0`; at `x=0`,
the fiber vector is zero throughout. At the end the base coordinate is
constant, so the local coefficient of `U_0` is the pullback of the oriented
fiber generator along `s:D_p→D²`. The boundary homomorphism
`H²(D²,D²\setminus{0};Z)→\widetilde H¹(S¹;Z)` sends that generator to
`[S¹]`; naturality identifies the coefficient with the induced integer on
`H¹(S¹;Z)`, namely `deg(s/|s|:∂D_p→S¹)`.
Excision decomposes the relative cohomology over the finite zero set as the
direct sum of these disk groups. The relative fundamental class restricts
to the sum of the positive local orientation generators. Naturality of
the Kronecker pairing gives the asserted sum. ∎

If a zero is nondegenerate for a `C¹` section, write
`s(x)=A x+o(|x|)` in local coordinates, with `A` invertible. On a sufficiently
small circle the straight-line homotopy to `Ax` never vanishes, because
`|Ax|≥m|x|` for some `m>0` while the error is `o(|x|)`. The local degree
is therefore `sign(det A)`. For `s=∇f`, this is `(-1)^λ` at a Morse
critical point of index `λ`.

## Assembly, dependencies, and choice audit

Use the already-audited generic-height parameter lemma to obtain a `C²`
Morse function on `S`; separate its finitely many critical values by
compactly supported ambient bumps. Supplier 2 gives one handle per critical
point and regular flow collars. Supplier 3 gives a finite cellulation of
the actual surface with the attaching maps matched. Supplier 4 subdivides
that cellulation under a finite trivializing cover. Supplier 5 constructs
the finite normalized Thom class; Supplier 6 evaluates it on the section
`∇f`. The local determinant calculation gives index `(-1)^λ`; the handle
relative Euler change gives the same alternating sum. Euler–Poincaré then
proves `⟨e_fin(TS),[S]⟩=χ(S)`. Whenever the ordinary global Thom class is
available, Supplier 5 identifies `e_fin(TS)` with the usual `e(TS)`.

No finite-cell supplier needs stronger than `AC_ω`. The only nonfinite-choice
use in the carrier is the ambient Euclidean embedding theorem in the
generic-height supplier. All subsequent witnesses are finite. As recorded
below, Supplier 2's proof is not closed until its relative regular-band
compatibility lemma is written out; this is a proof gap, not a choice-strength
increase. The local normal form is topological, the
handle/cell constructions use finite disks, rectangles, and boundary
subdivisions, and the Thom/index arguments use finite skeleta and excision.
In particular none of these drafts uses the published full-AC Morse lemma,
surface-triangulation existence theorem, general Thom theorem, or
Gauss–Bonnet/Chern–Weil route.

## Supplier closure audit

Suppliers 1, 3, 4, 5 and 6 have explicit finite constructions above, subject
to their listed cohomology and degree inputs. Supplier 2 proves the local
quadratic sublevel pair explicitly and proves the regular-band product lemma
from the `C¹` flow. Its final passage from the local block to the entire
critical band still needs a separate finite compatibility proof: the draft
asserts that the free-face strips and their complement can be cut into
finitely many compact regular pieces with vertical flow faces. To make this
a closed library supplier, prove that decomposition from the triangular
`C¹` chart and the normalized-gradient flow, including injectivity of each
swept strip and the actual gluing along its endpoints. This is the only
remaining local proof gap among the six drafts; it is not a request for a
stronger choice axiom or smoothness. The source function is already `C²`,
the free faces are `C¹`, and all needed choices are finite. Do not cite
Supplier 2 as fully proved until that relative regular-band compatibility
lemma is discharged.

The finite-cell Euler class is `e_fin(E)`. In a context where the ordinary
global Thom class exists, Supplier 5's uniqueness identifies it with
`e_fin(E)`; the finite ACω argument itself constructs and uses `e_fin(E)`
without the global full-AC Thom theorem.

For the §8 boundary calculation, once a finite CW structure on `W` is also
supplied, finite Thom uniqueness gives restriction naturality: the pullback
of the normalized class on `W` is fiber-normalized over `S`, hence is the
class constructed in Supplier 5. Thus
`i^*e_fin(TF|_W)=e_fin(TS)` without the published full-AC Euler naturality
theorem. In a context where the global Thom classes exist, this is the
usual Euler-class naturality statement. Constructing that finite CW
structure on the 3-manifold `W` is a separate obligation and remains
conditional here.
