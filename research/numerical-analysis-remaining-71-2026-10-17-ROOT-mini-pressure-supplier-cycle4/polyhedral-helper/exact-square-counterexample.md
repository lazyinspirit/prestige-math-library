# Exact square, Newtonian NS, L² forcing: endpoint pressure counterexample

Research proof packet, 2026-10-18. This is an independently derived construction, not an attribution to an unread source. It uses the exact polyhedral domain D=(0,1)², constant viscosity ν>0, no-slip boundary, initial data in H_sigma, and forcing in L²(0,T;L²(D)²). Its unique two-dimensional energy velocity has mean-zero pressure outside L^(4/3)(0,T;L²). Thus it addresses the actual generic regular-pressure clause, including its interpretation as a MINI subsequential limit. No canonical item is edited here.

Convention: rot ψ=(∂yψ,−∂xψ). Fix α with 1/2<α≤3/4. Constants below may depend on fixed cutoffs, ν and α. Choose a nonzero a∈C_c^∞((1/3,2/3)), and nonnegative η∈C_c^∞([0,1/16)) equal to 1 on [0,1/32]. Set

    w0(y)=η(y)y^(−1/2)(log(1/y))^(−α) for 0<y<1/16,
    w0(y)=0 for y≥1/16.

It is in L¹(0,∞)∩L²(0,∞), and is smooth away from zero. Let w be its Dirichlet heat evolution on the halfline, with diffusivity ν:

    w(t,y)=∫₀∞ [Gνt(y−z)−Gνt(y+z)]w0(z) dz,
    Gνt(r)=(4πνt)^(−1/2) exp(−r²/(4νt)).

This is nonnegative, smooth up to y=0 for t>0, w(t,0)=0, and solves wt−νwyy=0. The elementary heat energy identity (first truncate/approximate w0 in L² and pass by contraction) gives

    sup_t ||w(t)||₂≤||w0||₂,
    ∫₀ᵀ ||wy(t)||₂²dt≤||w0||₂²/(2ν),
    w(t)→w0 strongly in L² as t↓0.

The kernel is sub-Markov, so ||w(t)||₁≤||w0||₁. All these claims follow equivalently by the odd extension heat kernel and L² Fourier identity. No time derivative extension on the nonsolenoidal velocity space is invoked.

## 1. The scalar initial layer

Write

    M(t)=∫₀∞w(t,y)dy,
    M0=∫₀∞w0(y)dy,
    m(t)=M(t)−M0,
    h(t,y)=−∫ᵧ∞w(t,z)dz.

Then hy=w, h(t,0)=−M(t), and ht=νhyy. Indeed ∫ᵧ∞wzz dz=−wy(t,y), so ht=νwy=νhyy. Integration of the kernel yields

    M(t)=∫₀∞ erf(z/(2√(νt)))w0(z) dz,
    m'(t)=−[1/(2√(πν))]t^(−3/2)
                 ∫₀∞ z exp(−z²/(4νt))w0(z) dz.

Consequently, for some t*>0 and constants c,C>0,

    c t^(−3/4)(log(1/t))^(−α)
      ≤ −m'(t) ≤ C t^(−3/4)(log(1/t))^(−α),
    |m(t)| ≤ C t^(1/4)(log(1/t))^(−α),     0<t<t*.

For completeness, substitute z=√t r into the derivative integral. Its prefactor becomes t^(−3/4); on 1≤r≤2 the cutoff is 1 and log(1/(√t r)) is comparable to log(1/t), proving the lower bound. For r≤t^(−1/4), this logarithm is at least (1/4)log(1/t), so the remaining integral is bounded above by C(log(1/t))^(−α)∫₀∞r^(1/2)exp(−r²/(4ν))dr. The r>t^(−1/4) tail is exponentially small; w0 has compact support and only the integrable zero singularity. This proves the upper bound. Dominated convergence in the mass formula gives m(0)=0; integration of the upper derivative bound gives the stated bound for m. In particular m' is integrable in time, but

    ∫₀ᵀ |m'(t)|^(4/3)dt = ∞

because 4α/3≤1. In contrast,

    ∫₀ᵀ [|m'(t)|t^(1/4)+|m(t)|t^(−3/4)]²dt < ∞,

because its integrand is bounded by C t^(−1)(log(1/t))^(−2α) and 2α>1.

## 2. Harmonic outer field on the exact square

Choose fixed κ,χ∈C^∞([0,1]) equal to 1 near [0,1/8] and equal to 0 on [1/4,1]; thus their derivatives are supported away from supp η. They may be chosen equal; separate letters keep their roles clear. Let θ be harmonic on the square with Dirichlet values a(x) on y=0 and 0 on the other three sides. This θ is smooth on the closed square. One explicit verification is the sine series

    θ(x,y)=Σ_{n≥1} a_n sin(nπx) sinh(nπ(1−y))/sinh(nπ),
    a_n=2∫₀¹a(x)sin(nπx)dx.

Repeated integration by parts gives arbitrarily rapid decay of a_n since a vanishes near both endpoints. All derivatives of each displayed hyperbolic factor are bounded by C_k(nπ)^k uniformly on 0≤y≤1; hence the series and every derivative converge uniformly. It has exactly the claimed boundary values and Laplacian zero. In particular no unproved corner regularity theorem is needed.

Since div(rot θ)=0 and curl(rot θ)=−∆θ=0, the simply connected square admits a smooth potential φ with

    ∇φ=rot θ.

Explicitly, before subtracting the mean, one may use

    φ(x,y)=Σ_{n≥1} a_n cos(nπx) cosh(nπ(1−y))/sinh(nπ).

The same rapid coefficient decay proves uniform convergence of every derivative, and direct differentiation gives φx=θy and φy=−θx. Subtract its integral mean to fix φ∈L²_0(D). It is nonconstant because a≠0 makes θ nonconstant.

Set b(x,y)=θ(x,y)−a(x)χ(y). Then b is smooth and vanishes on all four sides. On the bottom, χ'=0, so ∂n b=∂n θ. On the other sides the aχ term and its normal derivative vanish, so this identity holds everywhere on the boundary. This b is a device for prescribing the tangential trace of a divergence-free correction without any corner inconsistency.

## 3. A shrinking no-slip corrector

Let ρ∈C^∞([0,∞)) be 1 on [0,1/3] and 0 on [1,∞). Write the four distances to the sides as d₁=x, d₂=1−x, d₃=y, d₄=1−y. Put ℓ(t)=√t and, for 0<t<T with T small enough that ℓ(T)<1/16, define

    R(t,x,y)=1−∏_{i=1}⁴[1−ρ(d_i/ℓ(t))].

It equals 1 in a neighborhood of every boundary point, is supported in the union of strips d_i≤ℓ, and is smooth including corners for t>0. Put

    ψm=a(x)[κ(y)h(t,y)+M0χ(y)],
    ψ=ψm+m(t)θ−m(t)bR(t),
    u=rot ψ,    p=−m'(t)φ.

The stream ψ vanishes on the boundary. On y=0, ψm=a(−M+M0)=−am and θ=a; on the other edges both are zero. Also rot ψm is zero tangentially at the bottom: ∂yψm=a w(t,0)=0. It is zero tangentially on every other edge because all fixed cutoffs vanish near the top and a vanishes near the vertical edges. Thus the tangential trace of rot(ψm+mθ) is precisely that of m rot θ. As b=0 and R=1 at the boundary, the gradient of bR there is ∇b; ∂n b=∂n θ. Consequently ∂n ψ=0 on all four sides as well. We have constructed u(t)∈H¹_0(D)² with div u=0 for every t>0, exactly.

Here are the required quantitative estimates, with r=−m rot(bR). For any fixed smooth b vanishing on the square boundary,

    ||∇(bR)||∞≤C,
    ||D^k(bR)||₂≤C ℓ^(3/2−k),  k=1,2,3,
    ||∂t∇(bR)||₂≤C t^(−1)ℓ^(1/2).

To check them, the support has area O(ℓ); each differentiated cutoff costs ℓ^(−1); wherever that cutoff derivative is nonzero, |b|≤Cℓ. Thus the terms with all derivatives on the cutoff have size O(ℓ^(1−k)), while terms with a derivative on b have the same bound or a better one. Their L² norm gains ℓ^(1/2). For k=1 the undifferentiated ∇b term has size O(1). A time derivative of ρ(d/√t) has size O(t^(−1)); differentiating it spatially costs ℓ^(−1), again offset by b=O(ℓ). These bounds also apply in overlaps at the corners: take the side whose cutoff is being differentiated, and use its distance to bound b. No disjoint-strip assertion is made.

It follows that

    ||r||∞≤C|m|,  ||r||₂≤C|m|t^(1/4),
    ||∇r||₂≤C|m|t^(−1/4),
    ||rt||₂+||∆r||₂
       ≤ C[|m'|t^(1/4)+|m|t^(−3/4)] ∈ L²(0,T).

In particular the corrector is uniformly L² bounded, tends strongly to zero in L² initially, and belongs to L²_tH¹_x.

## 4. The linear residual really is L²_tL²_x

Let v=rot(ψm+mθ), so u=v+r. Since rot θ=∇φ and ∆θ=0,

    (∂t−ν∆)(m rot θ)+∇p = m'∇φ−m'∇φ = 0.

The main stream residual is explicitly

    (∂t−ν∆)ψm
      = −ν[a''κ h+2aκ' w+aκ''h]
        −ν M0[a''χ+aχ''].

After applying rot, its terms involve only fixed smooth coefficients times h,w and, where κ'≠0, wy. The h terms are uniformly bounded by ||w0||₁. The w terms are uniformly L² bounded by heat contraction. The only potentially delicate term is κ'wy, supported at a positive distance from supp w0; the displayed Gaussian kernel and its first derivatives bound it uniformly for small t by a constant times t^(−N)exp(−c/t)||w0||₁, hence it belongs to L²_tL². (Away from zero time everything is smooth.) Thus

    L:=(∂t−ν∆)u+∇p ∈ L²(0,T;L²(D)²).

This is an actual forcing-error estimate, not a formal localization claim.

## 5. Energy bounds and the nonlinear term

The main field uses h,w with fixed tangential cutoffs. Its only unbounded spatial derivative near the bottom is aκ wy; the heat energy bound controls it in L²_tL². All remaining terms are bounded using h in L∞, w in L∞_tL² and fixed cutoffs. The harmonic term m rot θ and the corrector satisfy the bounds above. Hence

    u∈L∞(0,T;L²(D)²)∩L²(0,T;H¹_0(D)²).

The convection belongs to L²_tL², as follows without any isotropic smoothing assertion. The second component u₂ is uniformly bounded: −∂xψm uses only h and fixed functions; mθ is smooth with bounded amplitude; r is uniformly bounded. Therefore u₂∂y u∈L²_tL² by the energy-gradient bound.

The only unbounded part of u₁ is a(x)κ(y)w(t,y). Choose a fixed open interval J⊂(1/4,3/4) containing supp a. On J and for the chosen T, the vertical-side cutoffs are identically zero. Thus R there depends only on y. Since b(x,0)=b(x,1)=0 identically in x, its tangential derivatives bx and bxx vanish on these edges, and |bx|+|bxx|≤C min(y,1−y). Consequently

    |∂x r|=|m rot(∂x(bR))|≤C|m|

on J: the factor Ry costs ℓ^(−1) only where the distance to the horizontal edge is O(ℓ), canceled by bx=O(ℓ). The main and harmonic terms then give, on J,

    |u₁∂x u|≤C(1+|w|²).

Outside J the singular term aw is zero, u₁ is uniformly bounded, and u₁∂x u belongs to L²_tL² by the energy bound. Finally the elementary halfline inequality

    ||w||₄⁴≤||w||∞²||w||₂²
            ≤2||w||₂³||wy||₂

and Cauchy–Schwarz in time show ∫₀ᵀ||w(t)||₄⁴dt<∞. Therefore

    N(u)=(u·∇)u ∈ L²(0,T;L²(D)²).

Define the actual body force

    f=L+N(u).

Then f∈L²_tL²_x and u,p solve

    ut−ν∆u+(u·∇)u+∇p=f,
    div u=0,
    u|∂D=0

smoothly for each t>0. For solenoidal no-slip u this uses exactly the Newtonian weak viscous form 2ν(ε(u),ε(v))=ν(∇u,∇v); the skew convection agrees with (u·∇)u on such a velocity.

## 6. Initial data, energy identity, and the actual MINI limit

Let h0(y)=−∫ᵧ∞w0(z)dz, and define

    ψ0=a(x)[κ(y)h0(y)+M0χ(y)],   u0=rot ψ0.

The heat L² convergence and L¹ mass convergence imply u(t)→u0 strongly in L²; the m and corrector terms vanish strongly. Also ψ0∈H¹_0(D). Approximate ψ0 in H¹ by smooth compactly supported streams; their rotations are in V_sigma and converge to u0 in L². Thus u0∈H_sigma with exactly the repository's closure definition.

For ε>0 all fields are smooth on [ε,T] and integration against u gives

    1/2||u(t)||₂²+ν∫εᵗ||∇u||₂²
       =1/2||u(ε)||₂²+∫εᵗ(f,u).

The pressure term is zero by divergence and no slip, at each positive time. Let ε↓0 using strong L² initial convergence and the just-proved energy/force integrability. This gives the energy equality with initial data u0. Integrating the pointwise solenoidal momentum equation and taking ε↓0 likewise supplies the weak solenoidal equation and initial trace. Thus this is an energy weak velocity under the actual stated assumptions.

To tie it specifically to the limit theorem rather than just a general energy solution, use two-dimensional solenoidal energy uniqueness. Here is the usual proof interface in this setting. The planar inequality ||z||₄²≤C||z||₂||∇z||₂ (extend z by zero and apply the one-dimensional fundamental theorem in the two coordinate directions) implies every energy velocity is in L⁴_tL⁴_x, so its convection is in L²_tV_sigma*. Its restricted derivative is then in L²_tV_sigma*, which permits the standard time-mollified Hilbert-triple energy identity. This is solely on V_sigma⊂H_sigma⊂V_sigma*, and does not extend the derivative to full V*.

For two energy solutions with these data, subtract their solenoidal equations, test the time-mollified difference z and pass to the limit. Skew cancellation gives

    1/2 d/dt ||z||₂²+ν||∇z||₂²
      ≤ |∫(z·∇)u·z|
      ≤ C||∇u||₂ ||z||₂ ||∇z||₂
      ≤ (ν/2)||∇z||₂²+Cν^(−1)||∇u||₂²||z||₂².

Both solutions attain the same initial data strongly in H_sigma by this same Hilbert-triple identity. Gronwall gives z=0. Every MINI subsequential limit supplied by the existing theorem is such a two-dimensional solenoidal energy solution with these data; hence it equals this u. No assertion about discrete instantaneous pressure stability is required for this identification.

## 7. Mean-zero pressure obstruction

The explicit p(t)=−m'(t)φ is locally smooth in time and belongs to L¹_tL²_0, since m'∈L¹ and φ has mean zero. It is therefore a legitimate time-distribution pressure, and

    ||p(t)||₂=|m'(t)| ||φ||₂.

As φ is nonconstant, ||φ||₂>0. Section 1 proves p∉L^(4/3)_tL²_0. If another mean-zero pressure q in that regular class represented the same velocity and forcing, subtracting the distributional momentum equations would give ∇(q−p)=0. Equivalently, apply the existing bounded divergence lifting to every scalar test in time: q−p is spatially constant as an L²-valued distribution and has mean zero, hence is zero. Therefore no different regular pressure can repair the failure.

The pressure primitive is −m(t)φ, bounded and initially zero, exactly consistent with the established integrated-pressure theorem. The counterexample defeats only the original generic instantaneous regular-pressure clause. It says nothing against the smooth-branch pressure-error claim, since this velocity does not have that branch's strong smoothness up to time zero.

## Genuine potential native inventory

If independently accepted, this packet supports `cex-na-polyhedral-energy-ns-pressure-endpoint` (or an owner-selected ID) with the exact square counterexample. Subordinate constructive results could be `lem-na-shrinking-boundary-stream-corrector` and `lem-na-halfline-heat-logarithmic-mass-loss`; both are fully proved above, rather than unresolved external prerequisites. They are research proposals only; this helper did not create canonical items, manifests, metadata, hashes, runtime state, or tests/gates.
