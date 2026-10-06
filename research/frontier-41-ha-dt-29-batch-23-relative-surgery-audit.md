# Batch 23: relative center–saddle surgery audit

## Scope and status

This memo audits the simple lobe cancellation drawn in Mark Brittenham,
*Foliations and the Topology of 3-manifolds*, class 11, PDF pp. 2–3. The
source says to replace the lobe map by a leafwise filling and then “smooth
off” near the saddle, without giving a formula. The local PDF is
`/tmp/f41-brittenham11.pdf`, SHA-256
`ae8227fce4107df28370b3a27e6b3f3caeea629b419e3ff6ed3a3713c8fdf17d`.

The source's second saddle picture supplies a compact disk cut off by one
separatrix circuit, filled by the center's closed orbits. Its sentence
“smooth off” does not prove the relative surgery. This memo gives a local
construction under that disk/lobe geometry and the fixed leafwise cap: it
builds the actual first integral, product over the parameter disk, complete
center–saddle normal form, collar inequalities, and cancellation homotopy.
It does not cite the standard Morse-cancellation theorem as a substitute for
the construction. The construction is conditional only on the explicit
first-saddle hypotheses stated below; if a source instance lacks the compact
simple lobe or the transverse exit sector, the final section identifies that
as the precise missing input. In the standing (C²) foliation category, the
cap/product and scalar functions are C²; a C∞ leafwise cap cannot be
promised unless the leaves have that regularity.

## Geometric input from the first-saddle lobe

Let `f:D²→M` be the current smooth disk map. Let `u` be the global first
integral on the closed-orbit lobe and its saddle chart, constructed below;
in each foliation chart it is an increasing reparameterization of `z∘f`,
where `z` is the local transverse coordinate. The pulled-back characteristic
foliation is the level-set foliation of `u`. Consider the first saddle `q`
encountered on the frontier of the center region at `p`.
Choose the lobe `Ω` cut off by one separatrix circuit at `q`, with the
following verified local data:

- `u` has exactly one critical point in the interior of `Ω`, a nondegenerate
  center `p`; there are no other critical points in its closure except the
  boundary saddle `q`.
- After replacing `u` by `−u` if needed, `p` is a local minimum. The whole
  interior of `Ω` has `u<u(q)`: otherwise the compact closure would have an
  interior maximum at value at least `u(q)`, a second critical point.
- In Morse coordinates at `q`,
  `u-u(q)=−x²+y²+o(x²+y²)`. The lobe occupies one of the two lower sectors
  `u<u(q)`. The negative-gradient unstable eigendirection of `q` has two
  half-branches, one in each lower sector, so exactly one branch enters
  `Ω`.

That branch cannot cross the separatrix boundary: along negative gradient,
`du/dt=−|∇u|²<0`, whereas the boundary has value `u(q)`. Its forward orbit
stays in the compact lobe. Its omega-limit consists of critical points; by
the hypotheses the only possibility with value below `u(q)` is `p`. Thus it
is one connecting trajectory from `q` to `p`, modulo reparameterization.
This supplies the single incidence required for a min–saddle cancellation;
the index count alone would not supply it. If the lobe has another critical
point or both descending branches enter it, this argument does not apply and
the source figure has not selected a cancelable pair.

## Attaching one fixed leafwise filling to the old map

Write `γ` for the separatrix frontier circuit and assume it is
nullhomotopic in its leaf `L`; fix one compact C² filling
`H:D²→L`, `H|∂D²=γ`. This is used twice below. It kills the transverse
holonomy germ around `γ`, which is needed to extend the lobe first integral
over an outer regular collar, and it supplies the one leafwise cap used in
the new map. Without this hypothesis the lobe scalar is still defined on its
closed-orbit side, but its continuation across the frontier collar is not
established. After rounding `γ`, relative smoothing in the C² leaf surface
lets us take this one filling C² with its boundary fixed; no family of
fillings is selected.

### A global first integral for the actual old lobe

The surgery scalar must describe the characteristic foliation of the old map
on the whole patch; it cannot be chosen after inserting the cap. Let
`K=\overline{Ω}` be the center basin together with its first-saddle frontier,
and assume the lobe is a disk, its regular leaves are the nested closed
orbits around `p`, and the only singularities in a small disk neighborhood
are the nondegenerate center `p` and saddle `q`. The pullback of the ambient
foliation is coorientable on that neighborhood because its normal line bundle
over the parameter disk is trivial. In each foliation chart its transverse
coordinate composed with `f` is a C² first integral wherever its differential
is nonzero. Two such
coordinates on a connected overlap have the same level arcs, hence differ by
a C² function of one variable with nonzero derivative. Choose the
coorientation so these transition functions are increasing. The annulus of
closed center orbits has trivial holonomy because each orbit is a leaf in a
circle-foliated annulus. Around the outer frontier circuit, the transition
cocycle is the ambient holonomy germ of `γ`, which is identity because `γ`
bounds the fixed `H` in `L`. Thus the chart first integrals glue across the
regular frontier collar as well as on the lobe.

Here is the global construction. The regular basin `Ω\{p}` is an annulus
foliated by its *full* nested closed orbits, including the saddle-chart arc
on each orbit near `q`. Its orbit space is an interval. A transverse arc and
the compact circle fibration identify it with `S¹×I`; each circle has trivial
holonomy because it is itself a leaf in this annulus. Choose a C² coordinate
`r` on the interval. In a small center chart, the actual C² center
coordinate `a_p` (after subtracting its critical value) is positive away
from `p`, and its small positive levels are these circles. On the overlap,
`r=φ_p(a_p)` for an increasing C² diffeomorphism `φ_p`. Reparameterize `r`
monotonically so the global first integral agrees with a positive affine
function of `a_p` near `p`; this extends it over the center with a
nondegenerate minimum.

Do not excise the saddle disk from these circle fibers: near `q`, a full
circle consists of its local hyperbola arc in the center-facing saddle
sector and the complementary regular interval. In the saddle chart let
`a_q` be the actual C² transverse coordinate with critical value zero. On
the overlap, the local arc and the global circle have the same leaves, so
`r=φ_q(a_q)` for an increasing C² diffeomorphism `φ_q`. Reparameterize `r`
to agree with a positive affine function of `a_q` near `q`; this extends
across all four saddle sectors with precisely the original nondegenerate
saddle. The two monotone endpoint reparameterizations can be joined on the
interval: choose disjoint short endpoint intervals where they are fixed.
Extend their positive derivatives smoothly over the middle with a positive
baseline whose integral is less than the remaining endpoint-value gap; add
a nonnegative interior bump with the missing integral and integrate. The
result is increasing and agrees with both prescribed germs on open endpoint
intervals. The result is one C² first integral on a neighborhood of
`K`, with exactly the old center and saddle as critical points and the old
characteristic leaves as its regular levels. The extension uses the
closed-orbit basin and first-saddle hypotheses; it does not assume one
foliation chart covers the disk. Extend this scalar across a sufficiently
small regular outer collar using the transverse product coordinate. Its
holonomy around the frontier circuit is trivial by the fixed cap `H`, as
explained above, so this continuation is single-valued and adds no critical
point. For a lobe with noncompact or multiple regular leaves, the
quotient-by-circles construction does not apply.

On an open regular collar of the eventual boundary `∂W`, the exact old map
itself determines a transverse-germ section once it is projected to the
reference leaf below.
Its scalar coordinate and `u₀` are both first integrals of the same connected
regular level foliation on the collar (circle fibers on the basin side and
interval fibers on the product side). They
therefore differ by one increasing C² reparameterization. Fix that
reparameterization in the collar trivialization; this makes the coordinate
of the old map exactly the global first integral there. Thus the later
scalar surgery can be arranged to equal the old map pointwise on an open
collar, not merely to preserve its level foliation.

Round the corner at `q` within a foliation chart, using a small leafwise
homotopy; concatenate that collar homotopy to `H`, so it is still one fixed
compact filling of the rounded loop. Choose a regular neighborhood `W` of
`Ω∪{q}` in the parameter disk, disjoint from the
outer boundary of the original disk and containing no other critical points.
Take `W` across the saddle into its adjacent regular sectors; do not take
`∂W` to be the separatrix circuit itself. Thus `q` is interior to `W` and
`C=∂W` lies wholly in a regular collar, where the old pulled-back transverse
coordinate has nonzero differential. A narrow annulus between `C` and the
rounded `γ` is mapped by the old `f` into finitely many foliated charts.
Project each point of this annulus to the reference leaf by the
chart's plaque projection. The projections agree on overlaps after transport
along the annulus: the only possible monodromy is the holonomy germ of `γ`,
and this is the identity because `γ` bounds `H` in `L`. Denote the resulting
leafwise map on the annulus by `B₀`; its inner boundary is `γ`.

Glue the fixed disk `H` to `B₀` along `γ`. To make the seam C², write the cap
in polar collar coordinates `(r,θ)` with `r=1` at its boundary and the
annulus in coordinates `(s,θ)` with `s=0` at its inner edge. Precompose the
cap radial coordinate with a smooth function equal to `1` for `r≥1−δ`, and
the annulus radial coordinate with one equal to `0` for `s≤δ`, each smoothly
joined to the identity away from the seam. Both maps then equal `γ(θ)` on a
full collar of the seam, so all normal derivatives agree there and the maps
glue C². This does not change `B₀` near the outer collar `C`. The result is a
single compact leafwise map `B:W→L` whose outer collar equals `B₀`. This uses
one filling only; it does not select or limit a family of leafwise fillings.

The pullback transverse-germ bundle over `W` has transition maps equal to
holonomy germs along the paths in `B(W)`. A loop in `W` contracts in `W`, and
its `B`-image contracts in `L` because `B` is defined on the whole parameter
disk. Thus every transition around a domain loop has identity germ. A finite
triangulation subordinate to foliated charts and this trivial monodromy give
a uniform `ε>0` and a (C^2) map

`P: W×(−ε,ε)→M`

such that `P(·,0)=B` and, for each fixed `t`, `P(·,t)` maps into a single
leaf. On the annular collar, the old map `f` determines a section of these
transverse germs: at each parameter point, take the unique small transverse
germ from its plaque projection `B₀(p)` to `f(p)`. Its transition around the
annulus is the holonomy of `γ`, hence is identity. Trivialize the germ bundle
by parallel transport from one collar basepoint, extending over the disk.
The resulting section is a single-valued scalar on the collar. Normalize the
transverse parameter by the increasing reparameterization above so this
scalar is exactly the restriction of `u₀`; by construction,

`f(p)=P(p,u₀(p))`

on the whole collar, including its outer edge `C`. This is an equality of
maps, not just a homotopy. Normalize the trivialization on the collar first,
then extend it over `W`; contractibility of `W` makes the extension
path-independent. For a uniform product radius, cover the compact set `B(W)`
by finitely many foliated charts and subdivide `W` so each cell maps into one
chart. On each cell the plaque transverse interval has positive radius.
Transport these intervals along the cell edges; all edge and loop
compatibilities are the holonomy germs of `B`, which are trivial because `B`
fills `W`. Shrink to a common positive subinterval over the finite cover.
The local products then agree as germs and give one C² map
`P:W×(−ε,ε)→M`; for fixed `t`, the image is in one leaf. The collar
normalization makes `f=P(·,u₀)` exactly on an open collar. Choose the common
monotone scalar coordinate with image in `(-ε,ε)`; the collar section and
`P` are reparameterized together. This does not assert
that `P` is injective or that the immersed leaf is embedded.

Thus the old map there is exactly

`f(p)=P(p,u₀(p))`.

Consequently any scalar function `v:W→(−ε,ε)` equal to `u₀` on a collar of
`C` defines a glued disk map

`f_v(p)=P(p,v(p))` on `W`,  `f_v=f` on `D²\operatorname{int}(W)`.

This equality on an open collar, rather than only on `C`, makes the gluing
smooth and preserves the original outer boundary map pointwise. `P` is a
map-level foliated product over the parameter disk; it need not be an
embedding of the cap image. Therefore self-intersections of `H` cause no
problem, and no ambient immersion approximation is used.

## Scalar center–saddle cancellation formula

The needed local scalar model is

`m_λ(x,y)=x³/3−λx+y²`.

For `λ>0`, its critical equations are `x²=λ`, `y=0`. At
`p_λ=(+√λ,0)`, the Hessian is `diag(2√λ,2√λ)`, so this is a minimum
(characteristic center). At `q_λ=(−√λ,0)`, the Hessian is
`diag(−2√λ,2√λ)`, so it is a saddle. The segment `y=0`,
`−√λ<x<√λ`, is the unique negative-gradient orbit from saddle to minimum.
For `λ<0`, `∂ₓm_λ=x²−λ>0` everywhere, so the model is a submersion and has
no critical point. At `λ=0` the intermediate model has one degenerate
birth–death point; only the initial and final disk maps need to be Morse.

Here is an explicit cutoff patch in the relative normal-form chart. If the
old critical values are `c_p<c_q`, use `M=A m₁+B`, where
`A=3(c_q−c_p)/4>0` and `B=c_p+2A/3`; this aligns the model critical values
with the old ones. The chart identifies the old scalar with `M` on a block
containing the pair and its transition collars. Equivalently, rescale the
scalar by `A` and translate by `B` to use `m₁`.
Choose `1<a<b` and a smooth `α:R→[0,1]` with `α=1` on `[-a,a]`, `α=0`
off `[-b,b]`, and

`2|x||α'(x)| < x²−1` wherever `α'(x)≠0`.

Choose also `0<d<e` and a smooth `β:R→[0,1]` with `β=1` on `[-d,d]`,
`β=0` off `[-e,e]`, and `b sup|β'|<d`. Long transition collars give both
derivative bounds. Set `χ(x,y)=α(x)β(y)` and

`v_s(x,y)=A(m₁(x,y)+2s xχ(x,y))+B`,  `0≤s≤1`.

On `|x|≤a, |y|≤d`, this has `∂ₓv_s=A(x²−1+2s)` and
`∂ᵧv_s=2Ay`. Thus for `s<1/2` it has the center and saddle at
`(±√(1−2s),0)`, at `s=1/2` a single birth–death point, and for `s>1/2`
no critical point. On an `x`-transition with `|y|≤d`, `β=1` and

`∂ₓv_s=A(x²−1+2sα+2s xα')`

`≥ A(x²−1−2|x||α'|) > 0`.

On a `y`-transition, `|y|≥d` and `|x|≤b`, and

`∂ᵧv_s=A(2y+2s xαβ')`,

so `|∂ᵧv_s|≥A(2|y|−2b|β'|)>0`. If both cutoffs vary this `y` estimate
applies; if only `α` varies, the preceding `x` estimate applies. Outside
the support of `χ`, `v_s=M`; its critical points at `(±1,0)` lie where
`χ=1`, so no critical point remains there. Thus all transition and core
points have nonzero differential for every `s`. The support is compactly
inside the rectangle, so `v_s=M=u₀` on an open collar of its entire boundary
in the model block. Here the homotopy starts from the cap-based map
`P(·,u₀)` on `W`, which already agrees with the original `f` on the old
collar; it need not preserve the original map in the cap interior. The maps
`f_s=P(·,v_s)` then form a collar-fixed homotopy; the final map has neither
member of the center–saddle pair, and no other
characteristic singularities occur in the patch at any stage except the
single degenerate point at `s=1/2`.

The formula is a homotopy, not just an endpoint construction. On the support
of `χ`, its transition estimates hold uniformly for all `s∈[0,1]` because
the cutoff terms are multiplied by `s≤1`. The core critical points are
exactly `x=±√(1−2s), y=0` for `s<1/2`; their Hessians are respectively
positive definite and indefinite. At `s=1/2` they merge in one birth–death
point, and for `s>1/2` there are none. The transition collar is a submersion
for every `s`, while `χ=0` near the block boundary. Thus this is a
collar-fixed relative min–saddle cancellation homotopy, with no hidden
critical points in the cutoff region.

The product map `P` is C² in the standing foliation regularity, so `f_v` is
initially C² even if the original disk was smooth. If the item requires a
C∞ ambient disk map, apply relative Whitney smoothing to `f_v` in the smooth
target manifold, with support inside `W` and fixed on the outer collar. Take
the approximation C²-close enough that the pulled-back transverse coordinate
has no zeros of its differential on the compact regular region and retains
the two nondegenerate critical types (before cancellation) or the zero-free
post-cancellation state (after cancellation). This is smoothing a disk map,
not approximating it by an immersion. It preserves the prescribed outer
boundary exactly.

## Complexity and relative normal-form construction

Under the hypotheses above, the output has exactly one fewer center and one
fewer saddle, no new critical points, and the same disk map on a neighborhood
of its prescribed outer boundary. The total number of characteristic
singularities therefore drops by two. Repeating only on disjoint or
successively selected lobes terminates after finitely many cancellations.

The fixed-cap factorization and displayed cutoff are explicit. The remaining
issue in the source sketch is the relative cancellation normal form. The
following construction spells out the level-band straightening, endpoint
matching, and C² adapter rather than citing the standard cancellation theorem.

> **Local relative cancellation lemma (smooth version).** Let `u` be smooth
> on a disk block `V`, with exactly one nondegenerate minimum `p` and one
> nondegenerate saddle `q`. Assume the center basin `Ω` is a compact disk,
> its regular part is foliated by closed center orbits, its frontier is at
> the first saddle level `u(q)`, and there are no other critical points in
> its closure. Assume exactly one descending saddle branch enters `Ω` and
> the other leaves the basin. Then one can choose `V` so that the other
> branch exits through a regular section and the remaining regular part is a
> product collar. There is then a
> parameter-domain chart `h` on a smaller block, equal in scalar value to a
> scaled model `M=A m₁+B` and agreeing with `u` on an outer regular collar.
> The cutoff formula above gives a collar-fixed homotopy that removes exactly
> this center–saddle pair.

Here is the chart construction. Write `c_p=u(p)`, `c_q=u(q)`, and choose
`A=3(c_q−c_p)/4`, `B=c_p+2A/3`, so the minimum and saddle values of
`M=A m₁+B` are exactly `c_p,c_q`. By the smooth Morse lemma choose charts at
`p,q` and at the corresponding model critical points in which both scalar
functions are the same definite or indefinite quadratic form plus their
matched critical value. At the saddle choose the chart orientation so the
selected descending branch lies in the model's center-facing lower sector;
the other branch is the exiting sector.

The regular block decomposition follows from the basin geometry. Each closed
center orbit bounds a disk containing `p`; these disks are nested, and their
union with `p` is an open disk. By hypothesis their first frontier is one
separatrix circuit through `q`; away from the saddle chart this frontier is
an embedded regular interval, since a regular level set cannot self-cross.
Choose the saddle Morse disk so it meets the basin in just its center-facing
lower sector. The rest of the frontier is then a compact regular interval.
A sufficiently thin neighborhood of that interval outside the saddle disk
is a rectangle: use its interval coordinate along the frontier and `u` as
the transverse coordinate. The first integral is single-valued there, so
these local rectangles agree on overlaps. In the opposite lower sector,
choose a short segment of the other descending branch and a transverse
section `Σ` before it meets any other critical point. The branch is regular
away from `q`; flow the section by `X_u=∇u/|∇u|²`. The flow-box coordinates
are `(t,s)`, with `t=u` along the branch and `s` a coordinate on `Σ`; each
level fiber `t=constant` is an interval. Together with the saddle
Morse disk, these rectangles form a regular neighborhood `V` of the basin
and saddle. Round their outer corners inside the rectangles. They contain
no critical points, and every regular fiber in them is an interval. The
normalized-gradient flow `du(X)=1` makes each rectangle a product collar.
The entire other saddle sector is accounted for by the saddle Morse disk
plus this exit rectangle; there is no unmodeled complement. Construct the
same blocks for `M`; the frontier intervals, exit sections, and endpoint
corners have the same order, so the product coordinates identify the
collars relative to the Morse disk. This proves the complement matching
rather than assuming the selected lobe alone is a circle band.

Remove smaller Morse disks. Near `p`, a regular level is a circle by the
minimum Morse chart. Continue its connected component `C_t` through the
center basin. For any compact interval of regular values in `(c_p,c_q)`, the
basin closure over that interval is compact and contains no critical point;
its boundary lies at the frontier level `c_q`, so no such level meets that
boundary. The field `X_u=∇u/|∇u|²` satisfies `du(X_u)=1`, and its flow
identifies the fibers across the interval. Hence the component remains one
circle; it cannot split or join another component without a critical point.
Taking all compact subintervals proves that `C_t` is the *full* nested closed
orbit for every `t∈(c_p,c_q)`, not merely the selected sector in a saddle
chart. The unique descending trajectory from `q` to `p` meets each `C_t`
once because `du/dτ=−|∇u|²<0` along it and its endpoint values are
`c_q,c_p`.

This also explains the saddle endpoint gluing. In saddle coordinates chosen
so the center-facing lower sector is `ξ>0`, write
`u=c_q−ξ²+η²`. For `t=c_q−δ` with `δ>0` small, the part of `C_t` in a small
saddle disk is exactly the single arc
`J_t={ξ²−η²=δ, ξ>0}`. The other lower sector `ξ<0` is the exiting side of
the saddle and is not part of this center-basin circle. The complementary
part of `C_t` outside the interior of `J_t` is one regular interval outside
the saddle disk; denote it by `I_t`. Thus the *full* level is the union of
this saddle-chart arc and its complementary interval. The Morse chart at `q`
maps `J_t` to the corresponding model arc and, because a smaller saddle disk
is chosen inside the chart domain, prescribes the complete map germs on
collars of both endpoints of `I_t`. The interval map on `I_t` can be extended
to match those germs exactly: use
the chart map on short endpoint collars; extend its positive derivative
smoothly over the middle; if the integral of that extension is short of the
target interval length, add a nonnegative interior bump with the missing
integral, then integrate from the left endpoint. Choose the endpoint collars
short enough that the derivative stays positive and the missing integral is
positive. This formula depends smoothly on `t`, so it matches all endpoint
jets on an open band, not merely at one level. The same construction applies
to the model and gives a smooth family of full-circle diffeomorphisms.

Choose a compact regular-value interval strictly between the two critical
values and outside both Morse disks. On this middle band the full `C_t`
fibers are circles, so their total space is a compact annulus. The vector
field `X_u=∇u/|∇u|²` satisfies `du(X_u)=1` and supplies coordinates
`(t,θ)`, with `θ=0` at the connecting trajectory. The scaled model has the
same middle annulus. The endpoint Morse charts carry the distinguished
trajectory to smooth sections of the model's regular circle bundle near the
two ends. Join those endpoint sections by a smooth section of the model
bundle over the middle interval; this is possible because the base is an
interval. It need not be the model's Euclidean-gradient trajectory. Choose
angular coordinates so these source and target sections are both `θ=0`.
Between the endpoint bands, lift the marked circle diffeomorphisms to
increasing maps `g_t:R→R` with `g_t(θ+2π)=g_t(θ)+2π` and `g_t(0)=0`.
Interpolate the lifts using a smooth cutoff in `t`; convex combinations of
their positive derivatives remain positive. The resulting fiber maps are
diffeomorphisms.

At the lower endpoint, use the minimum Morse chart on its open disk and the
annular circle fibers on their open overlap. At the upper endpoint, do not
call the outside of the saddle disk a circle annulus: its fibers are the
intervals `I_t`. Use the saddle chart on the local arcs `J_t` and the
endpoint-germ interval extension above on `I_t`. Since the middle-band circle
maps agree with these chart maps on open overlap collars, all endpoint jets
match. These three pieces define the domain chart `h` and give `M∘h=u`
throughout the block.

On the remaining regular collar use the same normalized-gradient flow for
`u` and the model regular foliation. Extend the fiber maps to the boundary by
an isotopy of increasing interval or circle maps, again fixed on the already
matched inner band. The scalar values are kept equal level by level, so
`M∘h=u` on this collar. The chart need not be the identity on the parameter
collar: equality of scalar values is what makes the resulting map
`P(B,·)` equal to the old map there. The model block can be chosen with the
rectangle supporting `χ` compactly inside it. Define the scalar homotopy
there by `A(m₁+2s xχ)∘h+B` and by `u` outside. Since `M∘h=u` near the block
boundary, this is a well-defined C² homotopy fixed on the old collar. The
derivative and critical-point calculations above prove the claimed finite
drop without relying on an index count or a picture.

For the actual C² coordinate `u₀`, take a smooth scalar approximation `ū`
that is C²-close on the compact block `W`. Choose the approximation close
enough that the two nondegenerate critical points persist uniquely and no
critical points appear on the regular complement: use the inverse function
theorem in fixed small
critical disks and the positive minimum of `|du₀|` on their compact
complement. On the regular band, C¹ closeness preserves the submersion
foliation: normalized-gradient flow gives an isotopy of its compact fibers.
The local Morse charts preserve the center and saddle endpoint types, so the
circle-band and sector decomposition persists. The selected branch persists
as well. Fix a small exit section
where the other unstable branch crosses `∂V` transversely, and a small
attracting disk around `p` that the selected branch enters after finite time.
C¹ closeness of the gradient fields preserves both finite orbit segments;
the continued branch enters the attracting disk and converges to the
continued minimum.

To preserve the exact outer collar, choose the model block `V` wholly inside
`W` and a regular annulus `A` outside all of `V` but inside `W`. Use a
tubular collar coordinate `(s,θ)∈[0,1]×S¹` on `A`, with `s=0` at `∂V`.
Choose a smooth `ρ(s)=η(s)` equal to `1` near `s=0` and `0` near `s=1`.
Take `X=∇u₀/|∇u₀|²` on `A`, so `du₀(X)=1`, and put
`K_X=sup_A |dρ(X)|<∞`. Set `ũ=(1−ρ)u₀+ρū` on `A`, use `ū` on the inner
block, and use `u₀` outside `A`. C¹ closeness gives `dū(X)≥1/2`. Choose the
smooth approximation so close in C⁰ that
`K_X‖ū−u₀‖∞<1/4`. Then

`dũ(X)=(1−ρ)du₀(X)+ρdū(X)+(Xρ)(ū−u₀)>1/4`.

Thus the adapter creates no critical point on `A`, equals the smooth scalar
on the inner edge, and equals the old `u₀` on an open outer collar. Apply the
smooth model construction wholly inside `V`, where `ũ=ū`. Its final scalar
agrees with `ū` on `A`; hence the output is C², has no center or
saddle in the surgery block, and is exactly `u₀` on the old collar. The
initial interpolation from `u₀` to `ũ` is also fixed on that outer collar;
the C² closeness keeps the critical pair nondegenerate until the explicit
birth–death cancellation. No disk-map immersion approximation is involved.

The block decomposition used here is obtained by choosing the neighborhood,
not imposed as an additional theorem: the disk basin gives the full nested
circle family; the simple separatrix circuit minus its saddle chart gives a
regular interval collar; and truncating the other saddle branch at its first
regular transverse section gives the exit product. The fixed cap makes the
frontier holonomy trivial, so these pieces glue as a scalar product. Thus
under the stated source geometry the endpoint chart gluing and C² collar
adapter are constructive and do not appeal to a separate
Morse-cancellation theorem. If the boundary is not one embedded circuit, if
the basin is not a disk of closed orbits, or if the second saddle sector
cannot be truncated before another singularity, this memo does not certify
the cancellation; the required extra input is exactly a disk block with the
circle-band, one exiting branch, and product-collar decomposition in the
lemma.
The output scalar yields a C² disk map. If a C∞ parameter map is separately
required, apply relative Whitney smoothing to that map fixed on the old
collar and sufficiently C²-close to preserve the zero-free transverse
coordinate.

This construction is distinct from Brittenham's “smooth off” sentence: it
specifies the one fixed cap, the chartwise product over its parameter domain,
the scalar function changed, the cutoff inequalities, the unchanged collar,
and the finite complexity drop. Brittenham's pages supply the compact
simple-lobe picture and the nullhomotopy case, but do not prove the product
collar, endpoint-jet matching, or the literal “concentric arcs” smoothing
mechanism; the formula here replaces that last sketch with a relative scalar
homotopy. No manifest, item, coverage record, receipt, or controller state
was edited.
