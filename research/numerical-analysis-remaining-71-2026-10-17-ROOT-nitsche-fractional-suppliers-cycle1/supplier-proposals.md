# Nitsche fractional supplier proposals — construction escalation, cycle 1

Research proposals only. No canonical item, page, manifest, contract, engine state or shared plan has been edited. No acceptance, source-reading credit for the new arguments, hashes, gates or tests are asserted. Root must re-read current native carriers after the batch-52 writer drains. These proposals preserve arbitrary fixed dimension d≥2, matching shape-regular affine simplex meshes, the existing restriction Bessel-potential convention, and the whole commissioned dual range 1/2<s≤1. They require no global Lipschitz assumption on Ω and no values of the input at vertices.

Place the following four suppliers on the existing Nitsche A page, before their consumers. There is no need for a new pair. Proposed IDs are new, with no original consumers. Keep all original items. The existing general energy rate with its separate higher-order/local approximation premise remains intact; the new interpolation theorem discharges the dual premise, and also gives a concrete global low-order primal consequence without replacing the richer conditional energy claim.

## Proposed lemma: lem-nitsche-scaled-fractional-simplex-trace

Typed dependencies: def-nitsche-restriction-bessel-potential-sobolev-spaces; lem-nitsche-fractional-face-trace-on-simplex; thm-plancherel; thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces; lem-shape-regular-affine-simplex-scaling; thm-reference-simplex-poincare-wirtinger; def-countable-choice. Smooth cutoffs, affine weak derivatives, mollification, Tonelli and change of variables are used and should have their actual existing supplier IDs listed during integration.

Statement. Assume Countable Choice. For 0<s<1 set

    |w|_{s,K}² = ∫K∫K |w(x)−w(y)|² / |x−y|^{d+2s} dx dy.

For s=1 set |w|_{1,K}=∥∇w∥K. On a shape-regular affine simplex K with diameter hK and any facet F, if 1/2<s≤1, then

    ∥Tw∥F² ≤ C (hK^{-1}∥w∥K² + hK^{2s−1}|w|_{s,K}²).                 (T)

The trace is precisely the restriction-space trace already defined on this page. For 0<s<1 the intrinsic norm ∥w∥K²+|w|²_{s,K} is equivalent to the restriction H^s(K) norm on a fixed reference simplex; for s=1 it is the weak H1 norm. Constants on the scaled family depend only on d,s and shape regularity.

Proof. Here are the extension and scaling details needed to avoid importing an unproved fractional trace theorem.

1. For W in Schwartz space, Tonelli, Plancherel and the substitution z=y−x give

    ∫∫ |W(x)−W(y)|²/|x−y|^{d+2s} dx dy
      = ∫ |Ŵ(ξ)|² [∫ |1−exp(2πi ξ·z)|²/|z|^{d+2s} dz] dξ
      = c(d,s) ∫ |ξ|^{2s}|Ŵ(ξ)|² dξ.

The inner constant is finite and positive: near zero the numerator is at most C|z|², giving radial exponent 1−2s; at infinity the numerator is at most 4, giving exponent −1−2s; positivity holds on an open set. Rotation and dilation establish the last equality. Thus this intrinsic whole-space norm is equivalent to the Bessel norm. The identity passes to the completion, by the isometry into L2 of pairs (x,y) with the displayed weighted measure, and conversely by convolution/cutoff approximation. More explicitly, translation is continuous in the pair L2 space by first approximating an integrable square by continuous compactly supported functions away from x=y, and then translating these; convolution is therefore an approximate identity in this norm. Multiplication by a smooth compactly supported cutoff χ is bounded since |χ(x)−χ(y)|≤min(C|x−y|,2∥χ∥∞). The resulting kernel in the error term is integrable both near zero and infinity. Cutoffs tending to one converge by dominated convergence and this estimate. This proves the converse approximation assertion as well.

2. The reference simplex admits an intrinsic-norm bounded extension to R^d. For completeness, choose finitely many boundary neighborhoods and an inward direction in each. In those coordinates the simplex is locally the epigraph t>g(x'), where g is the maximum of the finitely many affine facet functions meeting that neighborhood, hence Lipschitz. Shrink the neighborhoods to boxes with a margin and use a smooth finite partition of unity, with one additional interior part. Reflect an upper half-box across the graph by R(x',t)=(x',2g(x')−t). This is a bi-Lipschitz involution with Jacobian magnitude one almost everywhere. Extend a localized function w below the graph by w(Rx), and use a cutoff supported inside the original larger chart to extend it by zero beyond the chart. For two reflected points, distances change by at most a fixed factor, so change of variables bounds their contribution to the double integral. For a point x above and y below the graph, the Lipschitz property gives |x−Ry|≤C|x−y|: write the vertical distances from the graph as a,b≥0; then a+b≤|x_d−y_d|+L|x'−y'|, and both vertical distances in x−Ry are controlled by a+b+L|x'−y'|. Changing y to Ry therefore bounds the mixed double integral by C times the upper-upper double integral. The L2 norm is also bounded. The cutoff estimate of step 1 controls localization and zero extension: support has positive margin to the chart sides, so cross-chart pairs add only a bounded L2 term. The interior part extends by zero with the same positive-margin estimate. Summing the finitely many extensions gives a bounded extension equal to w on the reference simplex. For s=1 the same reflection construction is bounded in weak H1 by the Lipschitz chain rule, which follows first for smooth functions, then by local mollification and weak-derivative testing; the Lipschitz coordinate maps and their inverses have bounded derivatives. This is also a direct H1 density/extension construction on a simplex.

3. Restricting any whole-space extension decreases the intrinsic norm. Conversely step 2 followed by step 1 gives an extension bounded by the intrinsic norm. This proves the asserted norm equivalence. Apply the already proved whole-hyperplane Fourier trace estimate to this extension and restrict to the reference facet. Its trace agrees with the existing restriction-space trace by density and uniqueness. Thus ∥Tw∥²_reference-facet ≤C(∥w∥²_reference-cell+|w|²_s,reference-cell). Affine change of variables and the singular-value bounds in the shape-regular scaling lemma give exactly (T); at s=1 the weak gradient scales in the same way.

4. A consequence used below is fractional mean-zero Poincare. For 0<s<1, with wK its mean,

    ∥w−wK∥K² = (2|K|)^{-1}∫K∫K |w(x)−w(y)|² dxdy
               ≤ C hK^{2s}|w|²_{s,K}.

At s=1 use reference-simplex Poincare and affine scaling. This completes all local inequalities needed below.

## Proposed lemma: lem-nitsche-fractional-weak-green-and-flux-cancellation

Typed dependencies: restriction-space definition; existing fractional face trace; affine-simplex Gauss–Green; affine weak-derivative scaling; matching mesh/conforming definitions; scaled fractional simplex trace above (for H1 density/test traces); Plancherel/Fourier characterization; mollifier suppliers; Countable Choice.

Statement. Let K be an affine simplex, r>1/2, q∈H^r(K;R^d) in the restriction convention, and div q∈L2(K) distributionally. Then for every v∈H1(K),

    ∫K q·∇v + ∫K(div q)v = ∑facets F ∫F (T_F q·nK) T_F v.           (G)

For u∈H^{1+r}(Ω), −Δu=f∈L2(Ω), on the existing matching mesh, the q=∇u traces on each common facet agree as vectors; the outward normal fluxes sum to zero. For every w∈H1(Ω), summing (G) gives

    ∫Ω∇u·∇w −∑boundary F∫F∂nu Tw = ∫Ω f w.                        (GG)

In particular this holds for every discrete conforming polynomial and for errors u−uh. Normal traces are exactly the L2 facet traces of the existing Fourier lemma.

Proof. 1. Choose a point a in the interior of K and a whole-space H^r extension Q of q. For 0<t<1 put At x=a+t(x−a). The larger simplex Kt=At^{-1}(K) contains the closed K in its interior. On Kt define qt=Q∘At=q∘At. Weak change of variables gives div qt=t(div q)∘At on Kt. Translations and dilations tending to the identity converge strongly in whole-space H^r: verify this on Schwartz functions by the Fourier change-of-variable formula and dominated convergence, then use their density and the uniform bounds for dilation factors in [1/2,1]. Therefore qt→q in restriction H^r(K). If f0 is the zero extension of div q, the same elementary L2 dilation/translation continuity gives t f0∘At→f0 in L2(R^d), hence div qt→div q in L2(K). Zero extension is used only for the scalar L2 convergence, not as a claimed H^r extension of q.

2. For fixed t mollify the global function Q∘At at radius ε smaller than dist(K,∂Kt). On a neighborhood of K its divergence is the mollification of t(div q)∘At, because the convolution kernel stays in Kt. Mollifiers converge in whole-space H^r by their bounded Fourier multipliers and dominated convergence; the scalar divergence converges locally in L2 by approximate-identity convergence after zero extension outside Kt. Choose t_n↑1 and then ε_n↓0 small enough that both errors on K are ≤1/n. This gives qn smooth on a neighborhood of closed K, qn→q in H^r(K), and div qn→div q in L2(K). Countable Choice suffices for the extensions/approximants; no simultaneous extension of div q in H^r is asserted.

3. For smooth v, apply classical affine-simplex Green to qn v. Its volume terms converge by L2, and its facet terms converge by the existing H^r-to-L2 trace. Thus (G) holds for smooth v. The simplex extension/density construction in the preceding lemma approximates every H1 v by smooth functions on closed K in H1. Their facet values converge in L2 by the s=1 case of (T), so all terms in (G) pass to the limit. This proves the exact weak conormal identification, not merely existence of a facet trace.

4. A global H^{1+r} extension U has gradient in H^r(R^d), by the Fourier multiplier 2πiξ. This gradient restricts to ∇u on every cell. Both cell traces on an interior facet are therefore the restriction of the same hyperplane trace; their normals are opposite. The H1 traces of an arbitrary w∈H1(Ω) agree on the relatively open interior facet: cover compact subfacets by balls contained in Ω, approximate w there by convolution in H1, use the s=1 cell/subsimplex trace estimate, and exhaust the facet. Its lower-dimensional rim is surface-null. Summing (G) cancels all interior terms and gives (GG). No smoothness of the global polyhedral boundary is used.

## Proposed theorem: thm-nitsche-zero-boundary-fractional-comparison-interpolation

Typed dependencies: scaled fractional simplex trace above; restriction definition; matching mesh/conforming polynomial definitions; shape-regular scaling; simplex Poincare; reference polynomial norm equivalence; matching continuous polynomial H1 inclusion; zero-boundary polynomial H10 theorem; zero-boundary closure definition; Countable Choice.

Statement. Assume Countable Choice, the existing connected bounded polyhedral Ω with a finite matching shape-regular affine simplicial mesh, d≥2, k≥1, and h=max hK. For every 1/2<s≤1 there is an explicitly constructed linear map

    I_{h,0}: H^{1+s}(Ω)∩H10(Ω) → P1(T)∩H10(Ω) ⊂ Yh

such that, using exactly the existing energy/comparison seminorm and hF=|K|/|F|,

    ∥ζ−I_{h,0}ζ∥_{#,h} ≤ C h^s ∥ζ∥_{H^{1+s}(Ω)}.                (I)

Consequently the commissioned presentation Ch^s ℓΩ^{1−s}∥ζ∥ follows with C_D=CℓΩ^{s−1}, with fixed Ω; constants are uniform over the mesh family. The boundary-value part vanishes exactly. The construction uses cell integrals of ζ and ∇ζ, and values only of affine polynomials.

Proof. 1. For each cell let bK be its centroid, mK the mean of ζ, and gK the vector mean of ∇ζ. Define pK(x)=mK+gK·(x−bK). Then ζ−pK has mean zero and its gradient is ∇ζ−gK. Put AK=|∇ζ|_{s,K}, with the weak second-derivative convention at s=1. Fractional Poincare in the preceding lemma, followed by ordinary simplex Poincare, gives

    ∥∇(ζ−pK)∥K ≤ C hK^s AK,
    ∥ζ−pK∥K ≤ C hK^{1+s} AK.                                    (1)

The s=1 trace estimate for ζ−pK and (1) give

    ∥ζ−pK∥F ≤ C hK^{s+1/2} AK.                                  (2)

For its gradient, whose intrinsic fractional seminorm is exactly that of ∇ζ, (T) gives

    hK^{1/2}∥T∇(ζ−pK)∥F ≤ C hK^s AK.                           (3)

All steps are componentwise for the gradient. The construction and these inequalities are meaningful for H^{1+s} restrictions by the intrinsic/Fourier equivalence already proved.

2. We give the needed mesh geometry instead of assuming patch regularity. Shape regularity and affine scaling imply that each cell's cone at any vertex cuts the unit sphere in surface measure ≥c(d,σ)>0. Distinct cell cones have disjoint interiors, so at most N(d,σ) cells contain a vertex. Cells sharing a facet have comparable diameters, since a shared facet has diameter comparable to either cell diameter. In the star of a vertex, use the graph with edges for common facets containing that vertex. At an interior vertex its spherical link is the full sphere, and this graph is connected: a path on the sphere can be perturbed off its finite codimension-two skeleton and crosses successive facets. At a boundary vertex each component of that graph contains a boundary facet incident to the vertex. Indeed, a component without an exposed codimension-one face would fill the sphere: perturb a path from its interior to any other direction off codimension-two faces; it cannot exit without crossing an exposed face. This would make the vertex interior. Thus every component has an exposed face. Every required path has length at most N−1. Diameters of cells on such a path are uniformly comparable. This argument applies also to boundary stars with several components, and does not add a Lipschitz-domain hypothesis.

3. Define the coefficient cz as follows. At an interior vertex z, average pL(z) over all incident cells L. At a boundary vertex put cz=0. Let I_{h,0}ζ be the continuous piecewise affine function with these coefficients. For cells K,L sharing a facet F containing z, both ζ traces agree on F; hence (2) gives

    ∥pK−pL∥F ≤ C hK^{s+1/2}(AK+AL).

The finite-dimensional reference-facet inverse bound for an affine polynomial is

    |p(z)| ≤ C |F|^{-1/2}∥p∥F.

It follows by writing the facet P1 mass matrix, positive definite since the integral of a nonzero polynomial square is positive, and bounding evaluation in its finite-dimensional coefficient space. Affine scaling therefore yields

    |pK(z)−pL(z)| ≤ C hK^{1+s−d/2}(AK+AL).                       (4)

At a boundary facet F containing z, the trace of ζ is zero: approximate ζ by Cc∞(Ω) in H1, restrict to the incident cell, and pass through its continuous H1 facet trace. Applying (2) and the same inverse bound gives

    |pL(z)| ≤ C hL^{1+s−d/2} AL                                  (5)

for its incident cell L. For an interior vertex, telescope (4) through its connected star to each averaged cell. For a boundary vertex, telescope within the component containing K to a cell having a boundary facet and apply (5). The geometry in step 2 proves in either case

    |cz−pK(z)| ≤ C hK^{1+s−d/2} (∑L∈ωK AL²)^{1/2},              (6)

where ωK is the union of stars of K's vertices; no comparison between different boundary-star components is required.

4. Barycentric scaling gives ∥∇φz∥K≤C hK^{d/2−1}. Combining (6), (1), and the at most d+1 basis functions on K gives

    ∥∇(ζ−I_{h,0}ζ)∥K ≤ C hK^s (∑L∈ωK AL²)^{1/2}.               (7)

The interpolant has zero polynomial trace on every boundary facet, hence belongs to H10 by the published zero-boundary polynomial theorem; ζ has the same zero facet trace, so the error's boundary-value term is zero. On K the interpolant gradient is constant. Consequently its subtraction changes none of the intrinsic s-seminorm of ∇ζ (or the second derivatives when s=1). Apply (T) to each component of ∇(ζ−I_{h,0}ζ), use (7), and hF comparable to hK to obtain

    hF ∥∂n(ζ−I_{h,0}ζ)∥F² ≤ C hK^{2s}∑L∈ωK AL².               (8)

5. Every cell has at most (d+1)N neighboring cells in these stars; each appears in at most the same bounded number of patches. Sum (7)² and (8), using hK≤h, to bound the comparison seminorm squared by Ch^{2s}∑L AL². For 0<s<1 choose a whole-space H^{1+s} extension Z of ζ within any ε of the quotient norm. Then

    ∑L |∇ζ|²_{s,L} ≤ |∇Z|²_{s,Rd} ≤ C∥Z∥²H^{1+s}(Rd)

by positivity of the integrand and the Fourier identity. At s=1, the sum of the cell weak Hessian norms is bounded by the whole-space H2 norm. Take the infimum over extensions. This gives (I), preserves the endpoint s=1, and proves the full comparison bound including the normal derivative term.

## Proposed lemma: lem-nitsche-global-fractional-boundary-flux-trace

Typed dependencies: restriction definition; existing fractional face trace and its hyperplane proof; Fourier characterization; Nitsche forms/hF convention; shape-regular scaling; Countable Choice.

Statement. For a fixed bounded polyhedral Ω, the matching shape-regular meshes above, h=max hK, 1/2<s≤1 and ζ∈H^{1+s}(Ω),

    (∑boundary F hF∥∂nζ∥F²)^{1/2}
       ≤ C h^{1/2}∥ζ∥H^{1+s}(Ω)
       = C_T h^{1/2}ℓΩ^{1/2}∥ζ∥H^{1+s}(Ω),

where C_T=C/ℓΩ^{1/2} depends on the fixed domain, s and dimension but not the mesh. No zero-boundary or PDE assumption is needed.

Proof. A fixed polyhedral boundary lies in finitely many supporting hyperplanes P1,…,Pm. Choose a whole-space H^{1+s} extension Z. Its gradient is H^s, with norm ≤C∥Z∥H^{1+s}. The existing Fourier trace estimate gives ∥T_Pj∇Z∥²L2(Pj)≤C_s∥Z∥²H^{1+s}. Boundary facets in the same plane have disjoint relative interiors. The simplex height convention gives hF≤hK/d≤h/d, since the altitude is at most the diameter. Thus

    ∑F hF∥∂nζ∥F² ≤ (h/d)∑j∥T_Pj∇Z∥²Pj ≤ C h∥Z∥²H^{1+s}.

The existing trace uniqueness identifies each facet restriction with this plane trace. Take the infimum over Z. Grouping by the finitely many fixed boundary planes is essential: summing a separate whole-space trace bound over all mesh facets would introduce a mesh-dependent count.
