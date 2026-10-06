# Batch 23: local disk center–saddle index sum by winding

Run: `frontier-41-ha-dt-29`. The locally reconstructed proof below was
independently reviewed and integrated into
`lem-characteristic-disk-center-saddle-index-count`. No readiness receipt,
gate, or controller state was changed.

## Purpose and scope

Replace the full-AC dependency
`thm-poincare-hopf-with-outward-pointing-boundary` in
`lem-characteristic-disk-center-saddle-index-count`. The needed conclusion is
only the disk formula `c−s=1`, for a disk map whose characteristic covector
is nonzero on the boundary and has finitely many nondegenerate interior
zeros. The proof below computes the boundary degree and proves finite local
degree additivity directly. It uses no global Poincaré–Hopf, Thom, Jordan, or
surface-classification theorem.

**Claim.** Let `h:D²→M` be a `C²` disk map into a `C²` cooriented
codimension-one foliation with a defining one-form `ω`. Put `β=h*ω`. Assume
`β` is nonzero on `∂D²` and has finitely many interior zeros, all
nondegenerate. Suppose either (T) `h(∂D²)` lies in one leaf, or (X)
`h|∂D²` is a closed transversal. Then the signed sum of local degrees of
`β` is `1`; if its zeros are the center/saddle singularities of the
characteristic line field, then `c−s=1`.

The relative-genericity supplier provides the finiteness, nondegeneracy and
regular boundary. The proof is valid under the batch's `AC_ω` ceiling; the
local disk-index argument uses only finite selections.

## Inline degree and open-path increment supplier

For a continuous path `q:[0,1]→S¹`, each parameter value `t` has a
proper open arc `A_t` containing `q(t)` and a radius `r_t>0` such that
`q((t−2r_t,t+2r_t)∩[0,1])⊂A_t`. The smaller intervals of radius `r_t`
cover `[0,1]`; compactness gives a finite subcover. Let `δ` be the minimum
of its finitely many radii. A partition of mesh less than `δ` has each
subinterval inside one of the larger intervals: choose a finite smaller
interval containing its left endpoint, and the mesh bound keeps the rest
within the corresponding doubled interval. Hence its image lies in one
proper arc. Each arc has a continuous argument coordinate. Choose an
argument on the first subinterval; on each successive one add the unique
multiple of `2π` that makes the arguments agree at the shared endpoint. The
resulting continuous lift `θ:[0,1]→R` satisfies `q(t)=e^{iθ(t)}`. Define
the **argument increment** `Δ(q)=θ(1)−θ(0)`. Any other lift differs by a
constant multiple of `2π`, so `Δ(q)` is well-defined. For a loop,
`deg(q)=Δ(q)/(2π)∈Z`, because its endpoint values agree.

Increments add under concatenation of composable paths and negate under
reversal: align the successive lifts at the common endpoint, and reverse a
lift for the reversed path. If a loop extends over a disk, its degree is
zero: the disk extension gives an explicit radial homotopy of its boundary
loop to the value at the center. For a homotopy on the square, continuity
provides around each parameter point an axis-parallel open rectangle whose
image lies in a proper arc. For each chosen rectangle write its coordinate
half-widths as `2r_z` and `2s_z`; the concentric rectangle with half-widths
`r_z,s_z` still gives a cover. Take a finite subcover of these smaller
rectangles and let `δ` be the minimum of all the finitely many `r_z` and
`s_z`. Choose a rectangular grid whose horizontal and vertical mesh widths
are each less than `δ`. In each grid cell choose a point and a smaller
rectangle of the finite subcover containing it. Since each coordinate varies
by less than `δ`, the whole cell lies in the corresponding original
rectangle, so its image lies in that proper arc. On each cell an argument branch
exists, so its boundary increment is zero. Summing cancels the interior grid
edges; for a homotopy through loops the two side paths are the same path with
opposite orientations. Thus the top and bottom loop increments agree. These
are finite constructions; no lifting theorem with a choice premise is
needed.

For a `C¹` nonzero vector field `v=(v₁,v₂)` along an oriented closed curve,
its local degree is `deg((v₁+iv₂)/|v|)`. This is the usual local index
convention. If the loop is not based at `1`, multiply by the constant unit
number that sends its initial value to `1`; this does not change the argument
increment.

## Polygonalization and finite triangulation of the perforated disk

Let `p₁,…,p_N` be the finitely many interior zeros. Since none lies on
`∂D²`, choose a zero-free annular collar of the boundary, and choose a
regular polygon centered at the origin with sufficiently many inscribed
vertices that its boundary lies in this collar and it contains every `p_i`.
Let `Q₀` be its closed convex hull. For each `p_i`, choose a round disk `D_i`
centered there, with pairwise disjoint closures contained in `int(Q₀)` and
containing no other zero. The punctured disk `D_i\{p_i}` is zero-free.
Choose a small closed axis-aligned square `Q_i` centered at `p_i` and
contained in `D_i`. The filled polygons are explicit convex sets (finite
intersections of closed half-planes), so no polygonal separation theorem is
needed to identify their interiors. Both the centered regular polygon and
each centered square are star-shaped with positive radial boundary functions.
If `r₀(θ)` is the radial function of `∂Q₀`, the outer homotopy is
`H₀(s,θ)=((1−s)r₀(θ)+s)e^{iθ}`. Its radii remain in the zero-free boundary
collar. If `ρ_i(θ)>0` is the radial function of `∂Q_i` about `p_i` and `R_i`
is the radius of `D_i`, the inner homotopy is
`H_i(s,θ)=p_i+((1−s)ρ_i(θ)+sR_i)e^{iθ}`. Its image stays in
`D_i\{p_i}`. Composing these homotopies with the normalized coefficient
map gives homotopies of loops in `S¹`, so argument increments and degrees
are preserved. The region `A_poly`, obtained from `Q₀` by removing the
interiors of the `Q_i`, is a closed polygonal domain with square holes and
contains no zero.

A finite triangulation of `A_poly` is constructed by vertical decomposition.
Choose a linear coordinate direction so that no boundary edge is vertical
and all boundary vertices have distinct first coordinates; only finitely
many directions are forbidden. Order the vertex coordinates as
`x₀<⋯<x_N` and draw the vertical lines at those values. In each open slab
`(x_j,x_{j+1})`, the boundary edges are linear graphs and their vertical
order is constant: a change of order would require two boundary edges to
cross. The part of `A_poly` in a slab is therefore a finite union of
regions between successive boundary graphs. The closure of each region is
a triangle or a trapezoid, possibly with a zero-length side at a slab
endpoint. Omit zero-area pieces. Collect, on each vertical line, all
endpoints from the decompositions on both adjacent slabs and subdivide the
vertical sides of every cell at that finite set. Each remaining cell is a
convex polygon (a triangle or trapezoid with possible collinear boundary
subdivisions). Omit zero-area cells and
triangulate each positive-area convex cell by joining one interior point to
its cyclically ordered boundary vertices. The resulting triangles cover
`A_poly`, have disjoint interiors, and meet only in full common edges or
vertices. This works with several holes and several disjoint pieces in one
slab. It uses only finitely many directions, boundary vertices, cells, and
interior points; it uses no classification or Jordan–Schönflies assertion.

## Proof of boundary degree `1`

Use the standard oriented coordinates on the source disk, with area form
`μ=dx∧dy`. Write `β=P dx+Q dy` and define `X` by
`ι_X μ=β`. Thus `X=(Q,−P)=J(P,Q)`, where
`J=[[0,1],[-1,0]]` has determinant `+1`. On every loop where `β` is
nonzero, `X` is nonzero and its normalized degree equals that of the
coefficient vector `(P,Q)`, since `J` is a fixed rotation of degree `+1`.

Orient `∂D²` positively, let `τ` be its unit tangent and `n` its outward
unit normal. At `(cos θ,sin θ)`, these are respectively
`τ=(−sin θ,cos θ)` and `n=(cos θ,sin θ)`. Both are degree-one loops and
differ by a fixed quarter-turn.

- **Leaf boundary (T).** Since `h(∂D²)` lies in one leaf,
  `β(τ)=ω(dh(τ))=0`. The assumption `β≠0` on the boundary then gives
  `μ(X,τ)=β(τ)=0` and `X=kτ` for a continuous nowhere-zero scalar `k`.
  Its sign is constant on the connected circle. Multiplication by a
  constant negative scalar is a half-turn, so it does not change degree.
  Therefore `deg(X/|X| on ∂D²)=deg(τ)=1`.
- **Transversal boundary (X).** Here
  `β(τ)=ω(dh(τ))` is continuous and nowhere zero, hence has constant sign.
  Decompose `X=a n+bτ`. Since `μ(τ,τ)=0` and `μ(n,τ)>0`,
  `β(τ)=μ(X,τ)=a μ(n,τ)`, so `a` has one fixed nonzero sign. If `a>0`,
  the homotopy `(1-r)X+r n`, `0≤r≤1`, stays nonzero because its outward
  component remains positive; if `a<0`, use `(1-r)X-r n`, whose outward
  component remains negative. Thus the boundary degree of `X` is the degree
  of `n` or `−n`. Both are `1`, since on the unit circle `n(e^{iθ})=e^{iθ}`
  and `−n(e^{iθ})=e^{i(θ+π)}`.

Consequently the boundary degree is `1` in either allowed boundary case.
No rotation of a vector field through an unverified collar homotopy is
needed.

## Sum of local degrees equals the boundary degree

Write `β=P dx+Q dy` in the standard source coordinates and put
`g=(P+iQ)/sqrt(P²+Q²)` wherever `β≠0`. Choose the disjoint zero disks
`D₁,…,D_N` small enough that there is no other zero in them. Polygonalize
`∂D²` and each `∂D_i` as above. The map `g` is defined on `A_poly` and each
of its polygonal boundary loops is homotopic through nonzero values to its
corresponding original circle loop.

For every oriented edge `e` in the finite triangulation of `A_poly`, let
`Δ_e` be the argument increment of `g∘e`, defined by the path construction
above. In particular, reversal negates the increment and concatenation adds
increments. For a triangle `T` with positively oriented boundary edges
`e₁,e₂,e₃`, the loop `g|∂T` extends over `T` and contracts by the affine
contraction of its boundary to an interior point. The homotopy-square grid
argument above gives homotopy invariance: each small rectangle has total
boundary increment zero, and internal edges cancel in opposite orientations.
Hence
`Δ_{e₁}+Δ_{e₂}+Δ_{e₃}=0`. Sum this equality over the finitely many
triangles. Every interior edge occurs twice, once in each direction, and
its two open-path increments cancel by `Δ(e^{-1})=−Δ(e)`. Only the boundary
edges remain. With the planar orientation, the outer boundary is positive
and each hole boundary is negative, so

`0 = Δ(∂Q₀) − Σᵢ Δ(∂Q_i)`.

Divide by `2π` and use homotopy invariance in the zero-free collars. This
gives

`deg(g|∂D²) = Σᵢ deg(g|∂D_i)`.

This is the required total-degree/local-degree identity. It is a finite
triangulation sum, not a general Poincaré–Hopf theorem.

At a nondegenerate zero `p`, let `A_p=D(P,Q)(p)` be the derivative of the
coefficient map. It is invertible. Taylor's formula gives
`(P,Q)(p+v)=A_p v+o(|v|)`. There is `m>0` with
`|A_pv|≥m|v|`; on a sufficiently small circle the straight homotopy from
`(P,Q)(p+v)` to `A_pv` is nonzero. Thus the local degree is
`sign(det A_p)`. In an adapted foliation chart,
`ω=a dz` with `a≠0`, so `β=a(h)d(z∘h)`. At its zero,
`D(P,Q)(p)=a(h(p)) Hess(z∘h)(p)` in source coordinates: the derivative of
`a∘h` multiplies `d(z∘h)(p)=0`. Therefore its determinant sign is the Hessian
determinant sign. Definite Hessians (the centers, Morse indices `0` and `2`)
have sign `+1`; an indefinite Hessian (a saddle, index `1`) has sign `−1`.
Combining this identity with the boundary degree `1` gives

`1 = Σᵢ ind_{pᵢ}(X) = c−s`.

If `N=0`, `g` extends over `D²` and its boundary degree is zero, contrary
to the boundary computation; hence a singularity exists as well.

## Exact suppliers and choice audit

Use only the following local inputs:

- `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`
  for the finite interior zero set, nondegeneracy and nonzero boundary
  covector. Its live proof now uses `δ_n=L²/(128·2^n(ℓ_n+1))` and explicit
  area bounds to correct the earlier thickening estimate. That supplier and
  its thickening repair is separately recorded in the Novikov-chain audit;
  the index argument has been independently reviewed and integrated.
- The supplied coorientation/defining form `ω`, adapted chart formula
  `ω=a dz`, the standard orientation and area form of the source disk, and
  the definitions `β=h*ω` and `ι_X μ=β`.
- The inline finite-lift argument increment, finite polygonal triangulation,
  edge-cancellation sum, Taylor estimate at a nondegenerate zero, and the two
  boundary computations above.

Equivalent published winding inputs exist (`def-winding-number-closed-
complex-contour`, `thm-winding-number-is-integer`,
`prop-winding-number-under-reversal-and-concatenation`, and
`thm-winding-number-equals-circle-degree`). The inline version is preferable
for this supplier because current batch notes report that raw dependency-ID
closures of the winding/Jordan items reach unused AC/DC-bearing branches. The
finite triangulation proof avoids depending on those broad closures. No
full-choice theorem is required by the proof clauses given here. Its new
selections are finite: finitely many zero disks and finitely many
circle-argument charts. Compactness supplies each finite subcover. The route
is valid under `AC_ω` and does not invoke the batch7 full-AC
Poincaré–Hopf theorem.
