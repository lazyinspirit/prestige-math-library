# Cycle-1 construction completion addendum

Research-only completion of the same initial construction pass, following root's independent review. The original proposal and consumer-disposition files are retained unchanged. This addendum supersedes their recommendation to change the symmetric L2 constant and removes an unnecessary general Lipschitz weak-H1 extension argument. It supplies no native acceptance, tests, gates, hashes or canonical edits.

## Preserve the original symmetric constant

The actual local supplier `lem-nitsche-local-polynomial-flux-inverse-trace` covers all k≥1 polynomials and uses exactly hF=|K|/|F|. Fix any cell K and facet F and take the affine polynomial p(x)=nK,F·x. Then ∇p=nK,F, ∂np=1, and

    hF∥∂np∥F² = (|K|/|F|)|F| = |K| = ∥∇p∥K² > 0.

Thus its admissible squared bound satisfies Ctr²≥1. Choose the positive Ctr furnished by its proof (the proof absorbs positive norm-estimate constants); hence Ctr≥1. The current local Statement only writes Ctr<∞ rather than 0<Ctr<∞, but its existential choice permits this positive choice without changing the stated theorem. In the global proof, state that this is the selected positive local constant. It is not valid to infer Ctr≥1 from Ctr²≥1 without this explicit selection.

The actual global lemma defines Cpartial=√Npartial Ctr. On a nonempty finite matching mesh of a bounded nonempty open Ω, there is a boundary facet, so Npartial≥1. One elementary proof starts at an interior point of a cell and takes a ray whose direction avoids all finite codimension-two skeleton crossings and is not parallel to a facet plane. Since the union of mesh cells is compact, the ray has a last exit. That exit occurs in the relative interior of a facet. If the facet had a cell on both sides, the ray would not exit there. Hence it is a boundary facet. Consequently Cpartial≥1.

For arbitrary comparison-space v,w, separate weighted Cauchy–Schwarz gives

    |a_h^1(v,w)| ≤ (3+gamma0) ∥v∥#,h ∥w∥#,h
                   ≤ (2+Cpartial+gamma0) ∥v∥#,h ∥w∥#,h
                   = M1 ∥v∥#,h ∥w∥#,h.

The four coefficients are 1 for the volume gradient product, 1 for the trial flux against test value, 1 for the trial value against test flux, and gamma0 for the penalty product. This proves the needed all-comparison-space bound with exactly the original M1. The energy theorem's original sharper discrete-slot derivation and its displayed Ctheta can remain unchanged. Add this all-pairs bound and Cpartial≥1 justification in the symmetric L2 proof (or as a separate paragraph in the energy proof) before applying it to ζe−zh. Thus **no symmetric Statement change for its constant is necessary**. The original packet correctly identified the insufficiency of using the discrete inverse trace on a nondiscrete second slot; root's normal-affine test supplies the smaller repair that preserves the original statement.

Nonemptiness precision: the common forms definition alone says “bounded connected polyhedral open set” and does not explicitly exclude the empty open set. Its standalone global lemma uses a maximum over cells, undefined for an empty mesh unless a convention is added. In the actual energy/duality consumers, Ω is a restriction-space domain and that definition explicitly requires a nonempty open set; the dual setting additionally writes h=maxK hK and 0<h≤diamΩ. These actual uses are nonempty and the preceding proof applies. If root elects to clean up the standalone forms/global edge case, either state the intended nonempty-domain convention in the forms setup, or handle the empty mesh separately with Npartial=0 and all spaces/integrals zero; do not use Cpartial≥1 in that empty case. No nonempty valid consumer is narrowed by making its already-required convention explicit.

## Integer endpoint and density: use the actual simplex suppliers

The actual published `lem-smooth-density-on-reference-simplex` was read in full. It already proves, for every finite p and integer k, density of restrictions smooth on a neighborhood of the closed reference simplex in weak W^{k,p}. Its proof is exactly the inward-homothety construction requested here:

1. F_t(x)=a+t(x−a), 0<t<1, has a larger inverse-image simplex containing the closed reference simplex. Weak affine derivative scaling gives Dalpha(u∘F_t)=t^{|alpha|}(Dalpha u)∘F_t.
2. Extend each weak derivative by zero only as an Lp function. Approximate in Lp(Rd) by smooth compactly supported functions; their pullbacks converge by uniform continuity, while pullback operator norms remain bounded for t≥1/2. This proves u∘F_t→u in weak W^{k,p} on the simplex.
3. For fixed t multiply u∘F_t by a smooth cutoff supported in the larger simplex and equal to one near the closed original simplex. Its compact-support zero extension is W^{k,p}(Rd). Approximate it there by smooth functions; alternatively convolve it with a mollifier. A diagonal choice gives the required density.

Affine pullback transfers this statement to every physical simplex. Therefore use this exact supplier with k=1,p=2 for the H1 test-function approximation in the proposed weak Green lemma. Use `thm-reference-simplex-trace-and-gauss-green` at p=2, followed by affine scaling, for the s=1 instance of (T). The weak H1 trace produced there agrees with any restriction-space Fourier trace of the same function by smooth density and continuity. Neither of these steps needs a Lipschitz coordinate change or its weak chain rule.

Accordingly, in the proposed scaled-trace supplier retain the explicit graph-reflection extension proof **only for 0<s<1**, where its bounds use L2 change of variables and the intrinsic pair integral, with no weak-derivative chain rule. Replace its s=1 extension paragraph by the two exact published simplex suppliers just named. Its integer endpoint assertion should be only the needed weak-H1 scaled trace inequality, intrinsic mean-zero Poincare, and agreement of traces when a restriction extension exists. The optional claim that the entire weak-H1 intrinsic space equals the restriction space can be omitted: it is unnecessary for every subsequent proof. The original restriction convention on actual H^{1+s} inputs is unchanged.

## Vertex-star graph proof under the literal mesh definition

The actual `def-matching-affine-simplicial-meshes` says, verbatim, that Ω is “the interior of their union” and explicitly explains: “Thus no lower-dimensional crack is omitted from Ω while its surrounding cells are retained.” It also requires the whole-face matching intersection property, disjoint cell interiors, finite nondegenerate simplices, and precisely two cells at every interior facet versus one at every boundary facet. These are exactly the conditions needed below; global boundary Lipschitzness is not used.

Fix a mesh vertex z. Intersect its incident-cell cones with a sufficiently small sphere centered at z. This gives a finite face-to-face collection of closed spherical (d−1)-simplices with disjoint relative interiors. Facet adjacency in this link is precisely adjacency of d-cells through a facet containing z. By shape-regular affine scaling each spherical cell has surface measure bounded below by c(d,sigma)>0; their disjoint interiors therefore bound the number of incident cells by N(d,sigma).

At an interior vertex the link is the full sphere. Any two relative cell interiors can be joined on the sphere by a path avoiding the finite codimension-two skeleton, and crossing only relative interiors of codimension-one faces. For d=2 the link is a circle subdivided into arcs, so this is immediate. For d≥3 perturb finitely many piecewise smooth path segments slightly to avoid the sets of sphere dimension at most d−3. At each crossing the next cell shares the corresponding facet, proving graph connectivity.

At a boundary vertex consider one facet-connected component C. Suppose C has no exposed link facet. Start in a cell interior of C and join to any other generic point of the sphere by the same path construction. The path cannot leave C: every crossed facet has its other incident cell in C by the supposition and facet adjacency. Thus C contains all generic points of the sphere, and its finite closed union is the entire sphere. Each incident Euclidean simplex contains its vertex cone intersected with a ball of some positive radius (take less than the distance from z to its opposite-facet plane); the minimum of those finitely many radii is positive. The full link therefore implies a whole ball around z lies in the union of mesh cells. Because Ω is the interior of that union, z would be an interior vertex, a contradiction. Hence C has an exposed link facet. Its associated Euclidean facet contains z and has only one incident cell, so it is a boundary facet.

A shortest graph path to that exposed facet has at most N−1 steps. Across each full shared facet, affine shape regularity makes both cell diameters comparable to its facet diameter; iterating through at most N−1 steps gives the uniform size comparison needed in (4)–(6) of the interpolation proof. Boundary stars may have multiple components; every component reaches a boundary facet, and the coefficient is set to zero at z, so the proof never needs to couple different components. The interior-of-union condition rules out exactly the omitted-crack counterexample that could otherwise falsely classify a full-link vertex as boundary.
