# Actual relative normal microbundle after finite stabilization

This reconstructs the finite-atlas case of Hirsch, *On normal microbundles*,
Topology 5 (1966), pp.229–240. The complete twelve-page primary text was read.
Milnor, *Microbundles I*, Topology 3 Supplement 1 (1964), pp.53–80, was also
read in complete OCR; its actual normal/tangent formulas on printed pp.63–64
were visually checked. These are NEW missing-theory sources, not reread proofs
of repaired providers. The point is an actual neighborhood and actual maps,
not a stable class alone.

## Domain and elementary microbundle transport

Let M be a topological m-manifold with a supplied finite open coordinate
cover, embedded in a manifold V. Supply an actual neighborhood retraction
r:V₀→M. Let A⊂M be closed, with an actual normal microbundle already supplied
on an open neighborhood of A. The output is an actual normal microbundle
of M×0 in V×R^q for some finite q, agreeing with that supplied germ plus
the trivial q directions near A. No bound on the optimal q is claimed.

Replace the ambient manifold by the open retraction domain V₀ whenever
necessary. There M is closed: it is the equalizer of id_(V₀) and the
continuous map inclusion∘r into the Hausdorff ambient manifold. Closed
overlap strips and nested cutoff neighborhoods are taken in this domain.
On a protected smooth germ the input includes actual smooth normal
neighborhood embeddings and charts, not just a smooth projection function.
Those maps, enlarged by standard Euclidean coordinates, are to be retained.

The microbundle homotopy transport used below is an actual germ construction.
For completeness, on a product base B×I first cover each compact interval
{b}×I by finitely many bundle charts. Intersect their base neighborhoods and
subdivide I so the restriction to each subinterval is trivial. Adjacent
trivializations are glued by extending their transition germ constantly in
the interval coordinate, preserving a previously fixed germ. This trivializes
the bundle over U×I for each sufficiently small U.

For a locally finite cover {U_i}, choose subordinate functions λ_i≥0 with
max_i λ_i=1. The map (b,t)↦(b,max(t,λ_i(b))) is lifted using the product
trivialization over U_i×I, and is the identity outside supp(λ_i). At a fixed
base point only finitely many factors act. Ordered composition gives an
actual germ map covering B×I→B×{1}; its restriction over B×{0} is an
isomorphism germ. Germ maps which agree on a locally finite closed cover
glue after shrinking their total-space neighborhoods: require agreement on
each of the finitely many relevant overlaps near each point. This is the
explicit transport of Milnor §6.6–6.9. On a compact base choose finitely
many such product charts. On an open finite-atlas manifold, use its supplied
countable coordinate basis and a locally finite countable refinement instead.
The product-chart witnesses for basis elements are independent selections
from countably many nonempty sets, so Countable Choice suffices. Order them
by the natural-number index. The composition is locally finite even though
the global list can be countable. A finite coordinate cover alone would not
justify claiming that every product-bundle trivialization cover is finite.

If a homotopy is already constant on an open neighborhood of A, use its
given product transport there and choose the other λ_i zero on a smaller
neighborhood of A. The construction then retains that exact germ. The same
construction with an extra parameter transports isotopies continuously;
when the base maps are an isotopy, the lifted maps are embeddings as germs.
Fiberwise injectivity gives local homeomorphisms by invariance of domain;
the parameter construction shrinks their domains simultaneously. Thus this
is not an inference that an arbitrary fiber homotopy is an ambient isotopy.

We also need transport agreeing with a prescribed **nonconstant** family
on a protected open U. Here is that extension explicitly. From the preceding
transport to time one obtain continuous germ isomorphisms
T_(b,t):ξ_(b,0)→ξ_(b,t), normalized T_(b,0)=id; if R_t maps the time-t
fiber to the time-one fiber, take T_t=R_t⁻¹R_0. Let the prescribed family
be S_(b,t), with S_(b,0)=id, on U. Form the initial-fiber automorphism
h_(b,t)=T_(b,t)⁻¹S_(b,t), so h_(b,0)=id. Choose λ:B→[0,1] equal to one
near A with support in U, and extend h_(b,λ(b)t) by the identity off U.
It glues there because λ vanishes on a neighborhood of the complement of U
and h_(b,0)=id. Replace T_(b,t) by

T_(b,t) h_(b,λ(b)t).

This leaves the covered base homotopy unchanged and equals S_(b,t) near A.
Shrink the germ domains over the compact parameter interval as in the
preceding construction. In particular one may prescribe the actual smooth
vector transport and its smooth neighborhood representatives on A. When
two normal microbundles agree there, use the same prescribed family for
both; their comparison is then exactly the identity on that germ. This
extends the earlier constant-homotopy relative case rather than silently
identifying the two cases.

## Local existence and comparison in a coordinate domain

Suppose M is an open subset of R^m. Its tangent microbundle is trivial.
The total space of r*τ₂M is naturally M×V, with zero section
v↦(r(v),v), where τ₂ uses the second projection on M×M. A trivialization
therefore gives an actual embedding germ

H:(V×R^m,V×0) → (M×V,{(r(v),v)}),

with H(v,0)=(r(v),v). On M×0 this is the diagonal x↦(x,x).
The diagonal has the actual normal microbundle given by projection
M×V→M to the first factor. Pulling it through H gives an actual normal
microbundle of M in V×R^m. This construction uses the supplied retraction
and coordinate trivialization, not a stable existence assertion.

For comparison, let ν₀,ν₁ be two actual normal microbundles of M in V,
with projection germs p₀,p₁. In M×V there are the normal microbundles
ν_j* with projections (x,v)↦p_j(v), and the common normal microbundle
given by first projection. The latter and ν_j* are obtained by composing
M×ν_j with the two tangent microbundles τ₁M and τ₂M on the diagonal.

In R^m×R^m use the coordinates c=(x+y)/2 and d=(y−x)/2 and the explicit
linear shear L_t(c,d)=(c−2t d,d). It fixes the diagonal d=0 and is invertible
for every t, with L_0=id. It sends the first-projection normal plane
δc=δd to the second-projection normal plane δc=−δd at t=1.
Thus it gives the required actual tangent-normal isotopy; a literal orthogonal
rotation fixing the diagonal would not justify the one-dimensional case.
Restrict the shear to sufficiently small neighborhoods of the diagonal over
the coordinate domain M. Transporting it through M×ν_j by the preceding germ
transport gives an actual normal isotopy from ν_j* to the common first-
projection normal. Concatenate one such isotopy with the reverse of the
other. Pull it through the same H above. The result is an actual isotopy
between ν₀⊕ε^m and ν₁⊕ε^m in V×R^m, fixed on the zero section and
beginning with f₀ equal to the inclusion (identity on its domain).
If the two given normals already agree on a germ, choose identical transport
there, so the comparison is relative that germ. All assertions concern
open neighborhoods of the zero section; no full total-space parametrization
is needed at this stage.

## Extend a local comparison using one extra coordinate

Here is the actual cutoff used to patch comparisons. Suppose f_t is an
isotopy on a neighborhood E of a closed overlap strip S in V, with f₀=id
and fixed on the base M∩E. Choose E₂⊂E₁⊂E₀⊂E around S, with the relevant closures
nested and f_t(E₂)⊂E₁ for every t. Choose q:V→[0,3] equal to zero on E₁
and equal to three outside E₀. Put

T(x,s)=(x,s−q(x)),
F_t(x,s)=(f_{τ(s,t)}(x),s),
G_t=T⁻¹F_tT,

where τ(s,t)=t for s≥−1/2 and τ(s,t)=0 for s≤−1, continuously
interpolated between with τ(s,0)=0. Then

G_t(x,s)=(f_u(x),s−q(x)+q(f_u(x))),
u=τ(s−q(x),t).

For x∈E₂ and s near zero this is exactly (f_t(x),s). For x outside E₀
and s<1 it is the identity, since u=0. For base points it is also the
identity. Thus G_t glues to the identity on a neighborhood of the whole
base in V×R. It is an isotopy there because it is locally the displayed
conjugate of an embedding and is the identity on a neighborhood of every
gluing boundary. There is also an explicit separation preventing a collision
with the newly glued identity part. If a point is moved nontrivially, then
u>0 implies s−q(x)>−1. If its spatial image exits E₀, that image has q=3,
so its new last coordinate is greater than two. It cannot meet an identity
point from the added outside domain, whose last coordinate is less than one.
Within E×R injectivity is inherited from the displayed conjugate. Restrict
to the resulting common open neighborhood of the base. Near a closed
protected region disjoint from E₀ this extension is exactly the identity.
This is Hirsch's explicit extra-line operation, not an appeal to a general
topological isotopy-extension theorem.

## Finite coordinate patching and preservation of A

Start with the supplied normal near A. Add coordinate domains one at a time.
Suppose a normal is defined on U₀, and a new coordinate domain U₁ is to be
added. The local existence construction gives a normal over U₁ after adding
m directions to the ambient space. The old normal is enlarged by the same
trivial directions. On U₀∩U₁ both are actual normal microbundles, so the
local comparison above makes them isotopic after at most another m added
directions. The overlap is an open subset of a coordinate domain, so the
comparison construction applies there.

Choose a continuous partition function λ for the two domains, zero off U₁,
one off U₀, and zero near the protected A. Use the old normal where λ≤1/2
and the new one where λ≥1/2. Their transition strip
1/3≤λ≤2/3 lies in U₀∩U₁ and avoids a neighborhood of A. Apply the extra-line
cutoff to their comparison isotopy, equal to that comparison on a neighborhood
of the strip and the identity near A. The pushed old normal agrees exactly
with the new normal germ on the strip. Their projection germs therefore
glue to an actual normal microbundle over U₀∪U₁. Each patch adds at most
2m+1 trivial ambient coordinates; no optimized bound is needed.

When A is not covered by the new chart, the two-domain partition is chosen
only on the part where both normals need to be compared, with λ=0 on a
closed neighborhood of A contained in U₀. Finite closed shrinkings of the
supplied cover arrange this at every step. Thus new charts can cover the
remainder while the original A-germ is never moved. Repeating for the finite
cover produces the asserted actual stabilized normal neighborhood.

Every additional cover refinement, strip, function and germ transport is
finite near the compact protected cylinder in the application. The input
retraction, the finite coordinate atlas and the prescribed A-germ are actual
data. The construction needs no smoothing of M and does not invoke controlled
h-cobordism, cellular approximation or a product-structure theorem. Its
Countable Choice bookkeeping, including any countable smooth-atlas operations
outside the finite protected region, is separate from arbitrary-index choice.

This new construction requires independent review, especially the parameter
domains and the finite relative patching. It must not be treated as an accepted
replacement for the five-dimensional realization theorem before that review.
