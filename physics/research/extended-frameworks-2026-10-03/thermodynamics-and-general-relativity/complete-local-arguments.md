# Integrator bridges: flux, normalization and entropy calibration

2026-10-04. Pure mathematical arguments with explicit hypotheses; physical adoptions are separate. Earlier GR G0/G1/G4/G6 provide the smooth Lorentzian connection and finite-domain density identities. No global generalized second law, horizon completeness or quantum state is inferred from a local current inequality.

<a id="C0"></a>
## C0 — finite spacelike slab and its actual charge

Let a smooth oriented time-oriented Lorentz metric g of signature −+++ be defined in a positively oriented coordinate chart on a neighborhood of the compact coordinate box [t₀,t₁]×Ω̄, Ω=∏ᵢ(aᵢ,bᵢ), t₀<t₁. Coordinates, including t=x⁰, have length units. Assume every t slice is spacelike: the spatial block hᵢⱼ=gᵢⱼ is positive definite and g⁰⁰<0; choose time orientation so its normal below is future. Let J be C¹ on this neighborhood. Put N=(-g⁰⁰)^(-1/2), nₐ=−Nδₐ⁰ and w=√(-det g). Then g⁻¹(n,n)=−1 and n⁰=−Ng⁰⁰>0. Subtracting the spatial-block multiples from the first row gives det g=det h(g₀₀−g₀ᵢhⁱʲgⱼ₀); the inverse block equation gives g⁰⁰=(g₀₀−g₀ᵢhⁱʲgⱼ₀)^(-1). Hence w=N√det h. The geometric flux through the positively oriented slice is therefore

Q_J(t)=∫Ω wJ⁰d³x=∫Ω[-g(J,n)]√det h d³x.

This proves the actual proper-volume/normal interpretation of the coordinate density; it is not a coordinate-invariant assertion about J⁰ alone. The first equality is also the pullback of i_J vol_g, whose full construction is the exact GR G4 supplier. Smoothness and compactness make every displayed integral finite. A chart box supplies an admitted finite domain, with no hidden exhaustion or rough-boundary theorem.

<a id="C1"></a>
## C1 — finite entropy-flux inequality, with boundary terms

The exact density identity, independently following by the cofactor determinant derivative and contracted Christoffel formula of GR G4, is ∇ₐJᵃ=w⁻¹∂ₐ(wJᵃ). Set Π=∇ₐJᵃ. Integrate on the box. FTC in t gives the difference of Q_J; FTC in each spatial coordinate gives the outward face contribution. With Euclidean outward coordinate normal νᵢ on the rectangular faces,

Q_J(t₁)-Q_J(t₀)+∫ₜ₀ᵗ¹∫∂Ω wJⁱνᵢ d²x dt=∫ₜ₀ᵗ¹∫Ω wΠd³xdt.

All applications use continuous derivatives on a compact box; edges have zero face measure. This is a complete finite-box proof and not an assumed global Stokes theorem. If Π≥0, entropy-like charge plus net outward flux is nondecreasing in this precise balance. Zero side flux gives Q_J(t₁)≥Q_J(t₀). Without that side condition it need not. Infinite or multi-chart domains require their separately supplied convergence/chain arguments; null boundary flux is a three-form and does not use a unit null normal.

For physical entropy J=S with units J K⁻¹ m⁻³, Π has J K⁻¹ m⁻⁴. Q_S and the four-volume production integral have J/K. Writing x⁰=ct_phys converts the side integral to an entropy rate c wSⁱνᵢ integrated over seconds and physical area. Thus cS is the physical flux current, and cΠ has entropy per volume per second units. No factor c is missing from the geometric length-coordinate statement.

<a id="C1-example"></a>
## C1 B — zero production while entropy leaves an open box

On flat η and Ω=(0,L)×(0,L₂)×(0,L₃), choose 0<β<1, γ=(1−β²)^(-1/2), a>0 in inverse-length units, s₀>0 in entropy-density units and 0≤t≤T with aβT<1. Define u=(γ,γβ,0,0), s=s₀[1+a(x¹−βt)] and J=su. These are smooth, s>0, g(u,u)=−1, and

∂ₐJᵃ=γ∂₀s+γβ∂₁s=γ(-s₀aβ)+γβs₀a=0.

Nevertheless dQ_J/dt=−γs₀aβLL₂L₃<0. The net side flux is γs₀aβLL₂L₃, since the x¹=L and x¹=0 values differ by s₀aL and the other side fluxes vanish. C1 balances them exactly. This is a mathematical current example, not a claim that an arbitrarily prescribed s,u also solve the full Einstein–fluid momentum equations. It refutes the inference from local production to monotonic entropy inside an open region.

<a id="C2"></a>
## C2 — classical first-law calibration freedom

On a smooth connected state family X let E,A,κ be smooth real functions, κ>0, and C>0 constant. Suppose the one-form identity dE=CκdA holds on X. For each b>0 and s_*∈R define T_b=bκ and S_b=(C/b)A+s_*. Direct differentiation gives T_b dS_b=CκdA=dE. Consequently that classical identity alone cannot distinguish the calibrations b and 2b, or choose s_*. This does not assert that all such choices describe measured temperature: it proves mathematical underdetermination before any thermodynamic or quantum identification.

For an uncharged black-hole family in SI one may subsequently identify C=c⁴/(8πG), with units J/m, κ geometric in m⁻¹ and A in m². Then b has K m, T_b K and S_b J/K. The quantum choice b=ℏc/(2πk_B), if established under a specified quantum model, gives C/b=k_Bc³/(4Gℏ)=k_B/(4ℓ_P²), ℓ_P²=Gℏ/c³. These are dimensional and algebraic consequences of that additional choice; the lemma does not derive it. Charged/rotating families have extra work terms, and fixed-charge/fixed-angular-momentum restrictions or an explicitly given full first law must be retained.

<a id="C2-example"></a>
## C2 B — two calibrations leave the geometric work unchanged

For any nonconstant A family satisfying C2, b and 2b yield temperature functions differing by a factor2 and entropy gradients differing by a factor1/2. Both have the identical energy one-form dE. The free additive entropy constants also leave it unchanged. Thus neither an absolute entropy offset nor the ℏ-dependent temperature coefficient can be read from that geometric first-law product alone.

<a id="C3"></a>
## C3 — a Killing energy current and its normalization

Let Tᵃᵇ be a smooth symmetric tensor with ∇ₐTᵃᵇ=0, and ξ a smooth Killing vector, ∇ₐξ_b+∇_bξₐ=0. Define Jᵃ_ξ=−Tᵃᵇξ_b. Metric compatibility/product differentiation gives

∇ₐJᵃ_ξ=−(∇ₐTᵃᵇ)ξ_b−Tᵃᵇ∇ₐξ_b=0,

because contracting a symmetric tensor against the antisymmetric Killing derivative is zero. C1 therefore gives finite-slab Killing-charge conservation exactly when net side flux vanishes. Its proper slice expression is H_ξ=∫TₐᵦnᵃξᵇdV_h. If ξ is future timelike on a static slice and u=n=ξ/N, N=√(-g(ξ,ξ)), and Tᵃᵇ=(ε+p)uᵃuᵇ+pgᵃᵇ, substitution using g(u,u)=−1 gives T(n,ξ)=Nε, hence H_ξ=∫NεdV_h. This is a redshifted energy functional on that restricted geometry, not a generally available global gravitational energy.

For an externally supported smooth stress with ∇ₐTᵃᵇ=fᵇ, the identical product calculation instead gives ∇ₐJᵃ_ξ=−fᵇξ_b. If ξ·f=0, the Killing current is still conserved. In a stationary supported material with ξ=Nu, a force doing zero local power u·f=0 meets that condition. The same finite-slab side-flux restrictions apply. This provides the exact no-work-support corollary for a solved heat model without pretending its full stress divergence is zero.

For constant a>0 replace ξ by aξ. The Killing equation is preserved, N→aN, u=ξ/N unchanged, J_ξ→aJ_ξ and H_ξ→aH_ξ. For a mechanical covector p with units kg m/s, define particle Killing energy H_ξ(p)=−c p(ξ), giving joules in length coordinates; this also scales by a. An inverse-length wave covector k instead gives −ℏc k(ξ). An enthalpy energy covector h_bu♭ with h_b in joules gives −h_b g(u,ξ), with no extra c; the corresponding mechanical covector is h_bu♭/c. These are distinct types, not conflicting formulas.

If on a null hypersurface ξ is nonzero and obeys ∇_ξξ=κ_ξξ, then ∇_(aξ)(aξ)=a²κ_ξξ=(aκ_ξ)(aξ), so κ_(aξ)=aκ_ξ. This is a direct normalization identity; existence or constancy of such a horizon's κ requires its separately supplied hypotheses. If a proper temperature field T is independently supplied, the definition T_ξ=NT scales by a while T does not. It is constant only under an actual equilibrium result. Therefore temperature, energy and surface-gravity normalizations can be compared coherently without deriving a thermal law from this scaling identity.

<a id="C3-example"></a>
## C3 B — normalization at a wall

On a static region with timelike ξ choose a reference observer at a point with lapse N_w>0 and replace ξ by ξ/N_w. The reference lapse becomes1 and H_ξ,κ_ξ and any equilibrium T_ξ become their previous values divided by N_w. Every proper ratio T_ξ/N and particle H_ξ/N is unchanged. This choice is meaningful in a finite cavity even when no asymptotically flat infinity exists; it is not an assertion that different reference walls have the same locally measured temperature.

<a id="C4-example"></a>
## C4 B — common units do not identify statistical and geometric entropy

Take a fixed positive number A and the finite two-dimensional Hilbert space with zero Hamiltonian. The diagonal densities ρ₁=diag(1,0) and ρ₂=diag(1/2,1/2) are positive trace-one and have identical energy0. Their defined spectral entropies −k_B∑p logp are respectively0 and k_Blog2, with 0log0=0. The geometric number A and any area-based entropy assignment are the same in these two independently specified data sets. Thus geometry/energy data alone do not identify the finite quantum statistical entropy. This is an explicit mathematical data counterexample, with no claimed Einstein backreaction or horizon quantum state. Continuum outside-region entropy additionally requires an actual algebra/state/renormalization construction and is not automatically such a finite density entropy.
