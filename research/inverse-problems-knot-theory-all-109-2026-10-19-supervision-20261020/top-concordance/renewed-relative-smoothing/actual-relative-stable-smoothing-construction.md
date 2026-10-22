# Actual relative stable smoothing near the zero cylinder

This constructs coordinate charts on a stabilized comparison neighborhood.
It does **not** merely assert that a lifted tangent bundle integrates. It
reconstructs Milnor, *Microbundles I*, §5.9–5.13, with the relative normal
construction expanded in the preceding file. The complete 28-page primary
paper was read in OCR and its printed pp.63–64 were visually checked; the
complete twelve-page Hirsch normal-microbundle paper was also read.

This is a new proof draft requiring independent review. It yields actual
stable smoothing, not yet the desired unstabilized W⁵ smoothing. Controlled
end completion and cellular boundary-map approximation are still necessary
to pass from this output back to W⁵.

## Exact inputs and compact finite-atlas localization

Let C=N²×I be the zero cylinder in the actual comparison W⁵, with the two
given smooth end germs and the prescribed smooth product near K. Write A
for a closed neighborhood of those protected pieces inside a slightly larger
open neighborhood where their actual smooth atlases agree. Extend the
underlying W through its two supplied end collars; this is a TOP extension,
with the given smooth atlas on the added collar germs. The zero cylinder
is now interior to that open extension.

Assume the actual stable tube f:E×R→M⁴×R is supplied. Compactness of C
then permits a small closed vector-disk block

B₀=f(D_ρE×[−ε,1+ε])

inside the underlying open extension, containing C in its interior. It is
an abstract compact manifold with boundary and corners, since E is an
actual vector bundle on the smooth surface N. Round its abstract corners.
This supplies a finite coordinate atlas and an actual collar of its outer
boundary; it does **not** assert that its abstract smoothing agrees with
the protected end atlas. No new side-boundary smoothing of W is being used.
Work on an open neighborhood of C inside int(B₀); base neighborhoods may
be shrunk finitely throughout the construction.

Supply the relative stable tangent reduction as actual finite bundle data:
a vector bundle ξ on B₀, smooth on the protected germ, and an actual
microbundle isomorphism

τ_M⊕ε^s ≅ |ξ|⊕ε^t

on the working open M⊂int(B₀), agreeing on a neighborhood of A with the
specified smooth stable tangent isomorphism. Here m+s=rank(ξ)+t, m=5.
A homotopy lift of classifying maps must first be converted to these actual
germ data by relative microbundle homotopy transport. The preceding file
gives that transport explicitly. No unobstructed-lift claim alone is taken
as an actual atlas.

## A Euclidean embedding and retraction retaining the protected smooth germ

Choose a finite chart cover of B₀, using its prescribed smooth charts on
a smaller neighborhood of A and topological charts elsewhere. Choose a
subordinate finite partition ρ_i which is smooth near A; the nonsmooth
chart terms are supported away from a smaller closed protected neighborhood.
Use bounded chart coordinates x_i. The coordinate-package map

e(x)=(ρ_i(x),ρ_i(x)x_i(x))_i

is an actual embedding into some R^L. If two images agree, an index with
ρ_i>0 gives equality of the chart coordinates and hence of the points.
Continuity of the inverse follows locally from the same positive coordinate.
At an interior point, divide the active coordinate package by its positive
ρ_i; the embedding is locally a graph over the m chart coordinates. Thus it
is locally flat, and it is a smooth embedding on the protected germ.

The retained **Statement only** of
`thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice`
supplies an actual Euclidean neighborhood retraction for compact B₀,
without choice. Transfer that retraction to the embedding e as follows.
Extend the coordinate functions of the transition between the two embedded
copies by scalar Tietze extension, shrink so their image lies in the supplied
retraction domain, and compose with that retraction and e. This yields an
actual retraction onto e(B₀). The finite-coordinate Tietze construction needs
no arbitrary choice: uniformly approximate each continuous function on the
compact closed set by Lipschitz functions and extend each by
inf_a(f(a)+L d(x,a)); a uniformly convergent series gives the extension.
Restrict its domain to the inverse image of int(B₀) to obtain a retraction
onto the open working manifold M (and then restrict M near C).

The retraction can be chosen equal to the smooth tubular retraction near A.
Indeed, near the smooth embedded protected germ, both retractions take values
in that smooth germ and agree on its zero section. Shrink there so their
values lie in the domain of the smooth short-geodesic interpolation. A cutoff
between the old and smooth retractions, using that interpolation, fixes the
zero section and makes the new retraction exactly the smooth one on a smaller
protected neighborhood. Outside the overlap it remains the old retraction.
Call the result r:V→M, with V an open subset of R^L. This step uses only
the already supplied smooth germ, not a smoothing elsewhere on M.

## An actual smooth ambient manifold with the required tangent microbundle

Extend ξ to the continuous vector bundle r*ξ on V. It is already smooth
on the protected tubular germ. Embed it in a finite trivial bundle using
its finite compact-base trivializations, retaining their smooth data near A,
and write P(v) for its continuous orthogonal projection matrix. Approximate
P by a smooth symmetric matrix Q, equal to P on a smaller protected germ,
with operator error below 1/4. The relative smooth approximation operates
in the already smooth Euclidean V; its standard Countable Choice version is
sufficient.

The spectral projection of Q onto eigenvalues above 1/2 is a smooth
idempotent P_s of the same rank. The restriction P_s:im(P)→im(P_s) is
an actual vector-bundle isomorphism, since their projection matrices differ
by less than one. It is the identity on the protected germ. Let ζ be this
smooth vector bundle on V. Its total space Y=E(ζ) is an actual smooth
manifold, and the zero-section inclusion j:M→V→Y is a smooth embedding
on A and a topological embedding everywhere.

Along the zero section, the tangent vector bundle of Y splits as
ε^L⊕ζ. Therefore its underlying tangent microbundle restricts to

j*τ_Y ≅ ε^L⊕|ξ|.

The isomorphism is smooth on the protected germ, by the actual vector
bundle construction. This identifies the ambient tangent data needed for
the next actual neighborhood construction.

## Construct a genuine product normal neighborhood

Apply the preceding relative finite normal-microbundle construction to
j:M→Y. It produces an actual normal microbundle ν on M in Y×R^q, for
some finite q, retaining the ordinary smooth normal germ of j(A) plus the
trivial q directions. Apply that same construction to e:M→R^L to obtain
an actual normal microbundle η in some R^D, also smooth on A. These are
actual neighborhood retractions and homeomorphism germs, not virtual inverses.

More precisely, begin on A with actual smooth tubular neighborhood maps
Ψ_A and Ψ′_A for these two smooth embeddings, for example from their normal
exponential maps. At every stabilization use those maps times the standard
Euclidean identity. The relative normal construction and its cutoff are
exactly the identity on a smaller protected neighborhood, so these actual
smooth maps and charts are retained. Smoothness of a projection function
alone would not establish this property.

Here is the tangent/normal identity used to compute them, including its
construction. The compositions τ_M∘p₁*ν and τ_M∘p₂*ν, on a sufficiently
small diagonal neighborhood in M×M, identify respectively with τ_M⊕ν and
j*τ_(Y×R^q). The two projections p₁,p₂ on that neighborhood are homotopic:
use the Euclidean neighborhood retraction of M to retract the straight segment
between their images. Relative microbundle transport identifies their pulled
back normals. This gives the actual isomorphism

τ_M⊕ν ≅ ε^(L+q)⊕|ξ|,

and similarly τ_M⊕η≅ε^D. On A use the smooth geodesic interpolation,
the actual tubular maps Ψ_A, Ψ′_A and smooth vector transport. The resulting
representative of the identity is an actual smooth local diffeomorphism germ
there, whose derivative is the usual linear stable tangent/normal identity.
The prescribed-nonconstant transport correction in the preceding normal-
construction note makes the global microbundle transport equal to this
chosen family on A. A constant-base relative transport assertion would
not suffice for this use.

Combine these actual isomorphisms with the supplied reduction:

τ_M⊕ν⊕ε^t ≅ τ_M⊕ε^(L+q+s).

Adding η to both sides and using τ_M⊕η≅ε^D gives an actual stable
trivialization

ν⊕ε^(D+t) ≅ ε^(D+L+q+s).

All these isomorphisms are taken relative the protected smooth germ. Their
normal-trivialization representative there is a smooth local diffeomorphism
near A×0: it is composed from the actual smooth tubular maps, smooth
geodesic/vector transport and the supplied smooth stable tangent isomorphism.
Its derivative gives the corresponding linear vector-bundle trivialization;
fiberwise linearity of the whole tubular map is not required. The
relative input is essential: an arbitrary stable class equality with no
protected isomorphism data would not justify this assertion.

Put R=D+t and k=D+L+q+s. The left side is the actual normal microbundle
of M in Y×R^(q+R). The displayed trivialization therefore supplies an actual
homeomorphism germ from M×R^k onto an open neighborhood of M in that smooth
ambient manifold. This is the critical geometric output. The dimension
check is k=dim(Y)+q+R−m, since m+s=rank(ξ)+t.

Shrink to a continuous positive fiber radius ε(x), smooth on the protected
germ. The map (x,v)↦(x,ε(x)v/sqrt(1+|v|²)) identifies the whole R^k fiber
with its radius-ε(x) ball and is smooth on A, including at v=0.
Pull back the ambient smooth atlas through this actual homeomorphism.
The result is an actual smooth atlas on M×R^k. Near A the homeomorphism
is the prescribed actual smooth normal-neighborhood map followed by the
smooth local-diffeomorphism trivialization and smooth radial rescaling.
Shrink ε(x) on A so the entire ball lies inside that smooth germ. Hence its pulled-back atlas is
exactly the given smooth product germ there, including the protected K-product.

## What has and has not been realized

The output is an actual relative stable smoothing near C, produced from
concrete bundle data by a product neighborhood in an already smooth manifold.
The tangent lift has been integrated by explicit neighborhood maps. No
controlled theorem was applied to an unsmoothed W⁵. No five-dimensional
product-structure or smoothing theorem was used to construct the six- or
higher-dimensional smooth ambient manifold.

This uses the original Countable Choice assumptions for the finite/chartwise
normal construction and relative smooth approximation. The retained compact
ENR input is choice-free, and the remaining stabilization and cancellation
involve finite bundle isomorphisms. Thus no blanket full-AC theorem has been
imported into the annular route. The actual relative tangent-reduction data
and actual stable tube remain inputs, with their own original proof duties.

To obtain the requested unstabilized W⁵ smoothing one must still perform
the separately constructed smooth controlled end completion and the genuine
five-dimensional cellular boundary-map approximation, relative A. Only after
those operations may the DIFF/PL controlled theorem be applied to W⁵ itself.
