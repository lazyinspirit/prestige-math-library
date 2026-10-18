# Proposed supplier: lem-bem-panel-pair-duffy-certificates

Research proposal only. Kind lemma; proposed A-page home `boundary-integral-equations-and-galerkin-bem`, batch 57. This is an original elementary construction, not a claimed quotation of a standard paired-panel Duffy theorem. Retain Countable Choice through the existing Gaussian rules.

## Statement

For two nondegenerate flat panels in the conforming mesh, set
`A_TS=(4π)^−1 ∫_T ∫_S |x−y|^−1 dS_y dS_x`.
For coincident, common-edge, and common-vertex panels there is the finite, explicitly constructible identity below into smooth reference-triangle integrals. Every final reference-triangle exponent is **α=0<2**. The construction proves derivative bounds and supplies arbitrarily small per-pair absolute error bounds, including certified evaluation of its one-dimensional fiber amplitudes. Disjoint panels have the smooth fallback stated below. No uniform mesh-independent cost or aspect-ratio-independent derivative bound is claimed.

## Exact construction and proof

1. Parametrize each physical triangle by an affine map from `Δ₂={u_i≥0, u₁+u₂≤1}`. Write the constant surface Jacobians as `J_T=|(t₁−t₀)×(t₂−t₀)|` and similarly `J_S`. On the four-dimensional polytope `P=Δ₂×Δ₂`, let `L(u,v)=t(u)−s(v)`. Then

   `A_TS=J_T J_S/(4π) ∫_P |L(z)|^−1 dz`.

   Its zero set `Z=P∩{L=0}` is exactly the parametrized diagonal of `T∩S`. It is a triangle, segment, or point, of dimension 2, 1, or 0 respectively. This uses injectivity of each panel parametrization and the actual conforming-intersection condition, including coplanar edge and vertex cases.

2. Cut `P` by each of the three affine hyperplanes `L_i=0`, ignoring identically zero equations and empty/full-dimensional-zero cells. There are at most eight full-dimensional sign cells. Each closed cell contains **all of Z**; in each cell `Z` is a face, since it is the intersection of the supporting faces `±L_i=0`. List its vertices by intersections of finite sets of boundary hyperplanes, retaining only feasible vertices. Order the vertices globally, putting vertices of Z first. Apply pulling triangulation to each cell with this same order: choose the first vertex, triangulate recursively every facet not containing it, and cone those simplices to it. Lower-dimensional faces use the same inherited order.

   This is a finite algorithm, rather than an assumed tetrahedralization. Its correctness follows inductively on dimension: the rays from the chosen vertex meet facets not containing it, their cones cover the convex cell, and their interiors are disjoint; recursion gives simplex interiors disjoint on each facet. Restrictions to common faces coincide because they use the same order and recursion. Thus the resulting four-simplices cover P except for boundaries of four-dimensional measure zero. Every full-dimensional cell's first vertex belongs to Z, so every resulting four-simplex has at least one vertex in Z. Because Z is a supporting face, its intersection with any simplex is exactly the convex hull of that simplex's vertices in Z. No other convex combination can have L=0: supporting functionals are nonnegative and their simultaneous zero set is Z.

3. For one four-simplex, order its vertices `v₀,…,v₄` so that `v₀,…,v_k` are exactly those in Z. Here `0≤k≤2`; smaller k can occur in subdivisions even for a coincident pair, and must not be discarded. Put

   `D=|det(v₁−v₀,…,v₄−v₀)|`, `d=3−k`,

   `B(b)=Σ_{j=k+1}^4 b_j L(v_j)`, where `b_j≥0`, `Σb_j=1`.

   The compact complementary face has no point of Z, so `c=min_b |B(b)|>0`. This is an actual geometric consequence of step 2, not a smoothness hypothesis. A computable positive lower bound can be certified by the finite convex quadratic minimization of `|Σb_jL(v_j)|²`. Enumerate all supports, project 0 onto the affine hull of each affinely independent support, retain projections with nonnegative barycentric coordinates, and minimize the resulting finite list of squared norms. A minimizer lies in the relative interior of its minimal face, so this enumeration includes it. Degenerate supports are replaced by affinely independent subsupports. Choose a strictly smaller positive certified lower bound.

4. Use join coordinates

   `z=(1−r)Σ_{i=0}^k a_i v_i + rΣ_{j=k+1}^4 b_jv_j`,

   with `a∈Δ_k`, `b∈Δ_d`, `0≤r≤1`. The absolute Jacobian is `D r^(3−k)(1−r)^k`. To check it, use standard barycentric coordinates, scale the k independent a-directions by `1−r`, the d independent b-directions by r, and take the remaining r-column; its determinant is one before those factors. Also `L(z)=rB(b)`. Hence

   `∫_simplex |L|^−1 = D ((2−k)!/6) ∫_{Δ_d}|B(b)|^−1 db`.

   Indeed `vol(Δ_k)=1/k!` and `∫₀¹r^(2−k)(1−r)^k dr=(2−k)!k!/3!` (expand `(1−r)^k`, or integrate by parts). The radial powers are 2, 1, and 0, all greater than −1. Truncating at `r=ε` has tail at most `D vol(Δ_k)vol(Δ_d)c^−1 ε^(3−k)/(3−k)`, so these substitutions also prove absolute convergence. This calculation removes the singular radial variable exactly; it is not an application of the two-dimensional Duffy supplier to a four-dimensional singularity.

5. Write `g=|B|^−1`. Reduce its remaining simplex integral to the library reference triangle `R={0≤y≤x≤1}` as follows.

   * d=1: `∫₀¹g(t)dt = ∫_R[g(x)+g(y)]dxdy`. This is the square split into its two triangles, followed by swapping coordinates on one of them.
   * d=2: `∫_{Δ₂}g(u,v)dudv = ∫_R g(1−x,y)dxdy`; the unused barycentric coordinate is `x−y`.
   * d=3: `∫_{Δ₃}g(u,v,w)dudvdw = ∫_R q(x,y)dxdy`, where

     `q(x,y)=(x−y)∫₀¹g(1−x,y,(x−y)t)dt`.

     This is the exact substitution `u=1−x`, `v=y`, `w=(x−y)t`; its Jacobian is `x−y`. The third case is an explicitly prescribed one-dimensional **smooth** fiber integral, not an unproved exact point evaluation. Step 8 gives its numerical residual and termination. The q's extend smoothly to a neighborhood of R because the argument B is nonzero on the compact parameter domain. Consequently they are continuous at the reference-triangle vertex; there is no hidden directional limit there. Summing the positive constants `J_TJ_SD(2−k)!/(24π)` times these triangle integrals is the requested finite identity.

6. Here is an explicit derivative-bound algorithm, avoiding a request to assume the required derivatives. For each composed polynomial vector `B(ξ)` on its reference domain, form the polynomial `h(ξ)=|B(ξ)|²`, whose certified lower bound is c². Set `P_{0,0}=1`, all other out-of-range P's zero, and recursively

   `P_{β+e_i,j}=∂_iP_{β,j}−(j−1/2)P_{β,j−1}∂_ih`.

   Induction by the product and chain rules gives

   `∂^β(h^−1/2)=Σ_{j=0}^{|β|}P_{β,j}h^(−1/2−j)`.

   The sum of the absolute monomial coefficients bounds a polynomial on `[0,1]^m`. Thus

   `M_β=Σ_j coeffabs(P_{β,j}) c^(−1−2j)`

   bounds this derivative explicitly. All relevant domains lie in their unit cubes. For the fiber q, differentiate `(x−y)` and the displayed integral, use the same bounds for the polynomial composition inside the integral, and integrate the uniform bound over an interval of length 1. Uniform continuity of every derivative on the compact domain justifies differentiation under the integral by the difference-quotient argument already proved in `thm-gaussian-product-rule-error-bound`. This constructs bounds of **every specified finite order**, including the mixed derivatives if requested. After composing with `D(r,s)=(r,rs)` repeat the polynomial algorithm; it bounds the exact derivatives of G required by the existing corollary. Coefficients may be interval-enclosed; use outward upper bounds for their absolute values and a strict lower bound for c.

7. Each final integral is `∫_R |z|^0 q(z)dz`. Apply the actual `thm-duffy-weak-singularity-transform`, `alg-duffy-weighted-product-gauss-quadrature`, and `cor-duffy-weighted-product-gauss-error` with α=0 and `G(r,s)=q(r,rs)`. Their hypotheses now follow from steps 5–6. Retain their constants `K₁`, `M₁=1/2`, `K₀` and compute `E=K₁||∂_r^(2n)G||∞+(1/2)K₀||∂_s^(2n)G||∞`. Positive weighted node sums of certified amplitude interval radii add a separate evaluation error. Multiply E plus that evaluation error by the absolute prefactor and sum over all terms.

8. To guarantee arbitrary accuracy, do **not** infer convergence from the displayed high-order bound as n increases. Fix n=1 and subdivide R into similar triangles of maximum diameter h, pulling each subtriangle back affinely to R, with its determinant prefactor. If H bounds the Hessian of q, the two pure second derivatives of `q(A(r,rs))` have bounds at most `H C_A h²`, with a fixed reference-shape constant C_A: along either coordinate the argument is affine, so the second derivative involves only its Hessian, with both direction lengths O(h). Sum the determinant prefactors; their sum is 1. The total outer derivative remainder therefore tends to zero as O(h²). The exact constants can instead be obtained by step 6 on each pulled-back amplitude.

   For d=3, approximate each fiber with composite one-node Gauss–Legendre (midpoint) on M equal intervals. If `B_tt` is the uniform bound for the second t-derivative of its integrand from step 6, its error is at most `B_tt/(24M²)`, multiplied by `x−y≤1`. Derivation: Taylor's formula with integral remainder on each interval bounds its midpoint error by `sup|f''| ℓ³/24`; sum M intervals. All weights are positive. Thus any desired node-value tolerance is attained, and its outward interval radius is charged in step 7. No ideal fiber-value oracle is needed. For exact algebraic input coordinates, all affine operations, square roots, simplex incidence tests and Gaussian n=1 nodes/weights admit arbitrarily precise outward algebraic enclosures; refine them until the requested positive residual budgets are met. Certified signs and nondegeneracies terminate because there are finitely many strict positive quantities, including all retained c and D. Zero incidences are decided algebraically.

   For arbitrary computable real coordinates, unconditional incidence/sign-decision termination is **not** claimed: supply the finite certified subdivision and positive geometric bounds as input. Missing geometry, a degenerate panel, unverified bound or exhausted computation returns `uncertified`, not a certified defect. Mathematical existence of the decomposition is valid for every conforming nondegenerate real mesh.

## Smooth fallback for disjoint panels

Let `d₀=dist(T,S)>0`. In the coordinates of step 1, integrate over the second Δ₂ to define `q(u)=∫_{Δ₂}|L(u,v)|^−1dv`, and reflect the first triangle to R as in step 5. This is one smooth reference-triangle integral, α=0. Bound its derivatives by step 6 with c=d₀ and integration mass 1/2. Evaluate its nodes by positive, composite affine-triangle Duffy rules, with the same derivative-bound and n=1 termination argument. Charge their errors separately. This completes every panel-pair case even when whole-panel containing balls fail the far-cluster separation test. It does not expand the operator/kernel scope.

## Identification with the weak P0 matrix entry

The current single-layer theorem's classical kernel proof is explicitly for smooth face densities vanishing near edges. Do not silently widen that proof to P0. The extension needed here follows from the just-proved integrability: choose smooth face-interior cutoff densities `0≤λ_n≤1`, `0≤μ_n≤1`, approaching `1_S`, `1_T` almost everywhere and in L². They converge in H^−1/2 by the continuous L² inclusion established in the mesh definition. Boundedness of V from `thm-bem-single-layer-transmission-mapping-and-coercivity` makes `〈μ_n,Vλ_n〉→〈1_T,V1_S〉`. For these smooth cutoffs the kernel potential has its ordinary surface trace (the same local surface area bound used in that theorem gives continuity of its weakly singular integral); hence the pairings are the double integrals. The bound by the integrable kernel on T×S, proved above for touching pairs and by positive distance for disjoint pairs, allows dominated convergence. Thus the limit is exactly the physical double integral used in step 1. This proves the missing P0 realization rather than assuming edge-reaching classical representation. No double-layer edge theorem is used.

## Actual prerequisites and boundary

Proposed direct suppliers: `def-bem-surface-mesh-and-piecewise-constant-density-space`, `def-bem-newtonian-kernel-in-three-dimensions`, `thm-bem-single-layer-transmission-mapping-and-coercivity`, `thm-duffy-weak-singularity-transform`, `alg-duffy-weighted-product-gauss-quadrature`, `cor-duffy-weighted-product-gauss-error`, `thm-gaussian-product-rule-error-bound`, `def-countable-choice`; ordinary affine substitution, Fubini for nonnegative integrands, dominated convergence, elementary determinant/algebra and compact positivity are used locally as detailed above. Canonical integration must name the appropriate existing basic integration/calculus suppliers; this packet does not invent IDs for uninspected foundational carriers. The finite pulling construction and radial identity are proved here, not imported as new unproved suppliers.

No derivatives of the original singular 4D integrand are bounded. Only the explicitly regularized amplitudes are bounded. No point-cluster theorem supplies any part of this proof. The theorem covers the P0 single-layer kernel only, not double-layer, conormal, hypersingular, curved-panel, Helmholtz, or logarithmic-panel entries.
