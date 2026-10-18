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

<a id="C5"></a>
## C5 — canonical future mass-shell measure and the exact Jüttner integrals

Let (V,g) be a four-dimensional real Lorentz vector space of signature −+++, with a chosen future cone, and let M>0 have units joules. Define the future massive shell

$$\mathcal H^+_M=\{P\in V:g(P,P)=-M^2,\ P\text{ future-directed}\}.$$

The derivative of P↦g(P,P)+M² at a shell point is 2g(P,·), which is nonzero because M>0. Thus the shell is a smooth three-manifold. For a future orthonormal tetrad, write P=(E,\mathbf q) with E=(M²+|\mathbf q|²)^{1/2}. Define the positive Borel measure

$$d\mu_M(P)=\frac{d^3\mathbf q}{E},$$

where d³q is three-dimensional Lebesgue measure. This measure has units J². It does not depend on the chosen future orthonormal tetrad. To prove this, let Λ be any orthochronous Lorentz transformation and let \mathbf q′ be the spatial component of Λ(E(\mathbf q),\mathbf q). This is a smooth bijection of R³ with smooth inverse induced by Λ⁻¹. Let C(\mathbf q) have columns P, ∂₁P, ∂₂P, ∂₃P. Block elimination gives det C(\mathbf q)=M²/E. If J=D\mathbf q′/D\mathbf q, the chain rule on the shell gives ΛC(\mathbf q)=C(\mathbf q′)diag(1,J). Since |detΛ|=1 and det C(\mathbf q′)=M²/E′, taking absolute determinants yields |det J|=E′/E. The published C¹-diffeomorphism substitution lemma applies to this global smooth diffeomorphism and every nonnegative Borel integrand; its ACω and Borel-domain restrictions are retained. Taking integrand 1/E′ gives d³q′/E′=d³q/E. This establishes the canonical fiber measure without choosing a preferred observer. A local tetrad on a Lorentz manifold consequently defines the same measure in every other local tetrad.

For a future timelike inverse-temperature vector β∈V with units J⁻¹, put α=√(−g(β,β))>0 and z=αM. Define, for integer j≥0,

$$K_j(z)=\int_0^\infty e^{-z\cosh t}\cosh(jt)\,dt.$$

These integrals are finite and positive: at large t the factor cosh(jt) grows at most exponentially in t, whereas e^{-z cosh t} decays faster than every exponential. The Lorentz-invariant shell integral and rest-frame momentum partition integral are respectively

$$I_M(\alpha)=\int_{\mathcal H_M^+}e^{g(\beta,P)}d\mu_M(P)=\frac{4\pi M}{\alpha}K_1(\alpha M),\qquad Z_M(\alpha)=\int_{\mathbb R^3}e^{-\alpha E(\mathbf q)}d^3\mathbf q=\frac{4\pi M^2}{\alpha}K_2(\alpha M).$$

Here I_M has units J² and Z_M has units J³. Countable Choice is assumed only where used by the published polar-coordinate supplier [[thm-polar-coordinates-formula-for-lebesgue-measure]]; its exact clause is the nonnegative-Borel radial integration formula on R³. The published probability supplier [[def-probability-measure]] defines a probability as a measure of total mass one. No thermodynamic or empirical claim is contained in these definitions.

To compute I_M, use Lorentz invariance to put β=(α,0), apply the stated polar-coordinate formula, and set r=M sinh t. Then E=M cosh t and

$$I_M=4\pi M^2\int_0^\infty\sinh^2(t)e^{-z\cosh t}dt=2\pi M^2(K_2(z)-K_0(z)).$$

Integrating d(sinh(t)e^{-z cosh(t)})/dt over [0,∞) gives z∫sinh²(t)e^{-z cosh(t)}dt=K₁(z), so K₂−K₀=2K₁/z and the displayed I_M formula follows. For Z_M, the same substitution gives

$$Z_M=4\pi M^3\int_0^\infty\sinh^2(t)\cosh(t)e^{-z\cosh t}dt=\pi M^3(K_3(z)-K_1(z)).$$

Integrating d(sinh(2t)e^{-z cosh(t)})/dt gives z∫sinh²(t)cosh(t)e^{-z cosh(t)}dt=K₂(z), hence K₃−K₁=4K₂/z and the Z_M formula follows. All endpoint terms vanish because z>0.

Now let u be a future unit observer, T>0, k_B>0, β=u/(k_BT), and let h_ref>0 be a declared reference action with units J s. It is a phase-space reference convention, not Planck's constant or a measured parameter. Let n>0 be a proper number density [m⁻³]. The scalar

$$\zeta=\log\!\left(\frac{n h_{\rm ref}^3c^3}{Z_M(1/(k_BT))}\right)$$

is dimensionless because h_ref³c³ has units J³m³. Define the dimensionless one-particle occupation f(P)=exp(ζ+g(β,P)). In the u-rest tetrad its normalized momentum probability is

$$d\nu_u(P)=Z_M(1/(k_BT))^{-1}e^{-E/(k_BT)}d^3\mathbf q.$$

This is a Borel probability law on the spatial momentum coordinates of that specified observer; it is not itself the observer-independent shell measure. Equivalently d³q=−g(P,u)dμ_M(P), so the energy factor and the observer dependence are explicit. Positivity and total mass one follow from the formula for Z_M.

Define the geometric particle current and stress moment by

$$J^a=(h_{\rm ref}^3c^3)^{-1}\int_{\mathcal H_M^+}P^a f(P)d\mu_M(P),\qquad T^{ab}=(h_{\rm ref}^3c^3)^{-1}\int_{\mathcal H_M^+}P^aP^b f(P)d\mu_M(P).$$

The prefactor makes J have units m⁻³ and T have units J m⁻³. In the u-rest tetrad, oddness gives J=(n,0,0,0); rotational symmetry makes the spatial stress isotropic. Differentiation under the Z_M integral is legitimate: for α in a compact subinterval of (0,∞), E e^{-αE} is bounded by a constant times e^{-αE/2}, whose integral is the already finite Z_M(α/2). Hence

$$\langle E\rangle=-\partial_\alpha\log Z_M(\alpha)=\frac{3}{\alpha}+M\frac{K_1(\alpha M)}{K_2(\alpha M)}.$$

The derivative identity K₂′=−K₁−2K₂/z follows by differentiating its defining integral under the same exponential bound and using K₃−K₁=4K₂/z. For isotropic pressure, the polar formula and one-dimensional FTC give

$$\int_{|\mathbf q|\le R}\nabla_{\mathbf q}\!\cdot(\mathbf q e^{-\alpha E})d^3\mathbf q=4\pi R^3e^{-\alpha E(R)}.$$

The right side tends to zero as R→∞. Expanding the divergence as (3−α|q|²/E)e^{-αE} and passing to the limit, justified by the already established exponential integrability, gives the radial moment \(\int |q|^2E^{-1}e^{-\alpha E}d^3q=3Z_M/\alpha\). Therefore the mean pressure is n/α=nk_BT. The moment tensor in this rest tetrad is consequently diag(ε,p,p,p), with

$$\varepsilon=n\left(M\frac{K_1(M/(k_BT))}{K_2(M/(k_BT))}+3k_BT\right),\qquad p=nk_BT.$$

Since the shell measure and f are tetrad-independent scalars, changing tetrad in the defining integrals gives J′=ΛJ and T′=ΛTΛᵀ; hence they are a vector and symmetric tensor, respectively. Thus J^a=nu^a and T^{ab}=(ε+p)u^au^b+pg^{ab}. A second observer v measures number density −g(J,v)=n[−g(u,v)] and energy density T(v,v)=(ε+p)[−g(u,v)]²−p. The rest-frame proper T and n are scalars of the selected material state; the measured flux and energy density vary with v. This is an exact moment calculation for the specified classical ansatz, not a derivation of thermalization, collisional equilibrium, quantum statistics, or an empirical material equation of state.

<a id="C6"></a>
## C6 — finite-regulator outside entropy, cutoff dependence and scheme ambiguity

Let H_in and H_out be complex Hilbert spaces of finite dimensions d_in,d_out≥1 and let ρ be a positive operator of trace one on H_in⊗H_out. In an orthonormal basis (e_i) of H_in define (ρ_out)_{ab}=Σ_i ρ_{(i,a),(i,b)}. For every y∈H_out, y*ρ_out y=Σ_i(e_i⊗y)*ρ(e_i⊗y)≥0, and summing diagonal entries gives Trρ_out=Trρ=1. The entry formula is independent of basis because it is equivalently characterized by Tr(ρ_out B)=Tr(ρ(I⊗B)) for every operator B on H_out; the trace pairing on finite matrices is nondegenerate. Hence ρ_out is a well-defined density operator. If its eigenvalues are λ_1,…,λ_dout∈[0,1], define

$$S_{\rm out}(\rho;H_{\rm in},H_{\rm out})=-k_B\sum_{j=1}^{d_{\rm out}}\lambda_j\log\lambda_j,$$

with 0 log 0=0. The sum is finite and invariant under basis changes. This is the finite-dimensional quantum statistical entropy supplied in the actual current QSM argument [[thm-qsm-finite-entropy-composition]]; the cited interface proves partial-trace support and finite entropy composition only for finite densities, with no continuum algebra or renormalization conclusion.

Cutoff dependence is real even in a simple exact family. For N outside qubits take H_out,N=(C²)^{⊗N} and ρ_out,N=I/2^N. Its 2^N eigenvalues are 2⁻ᴺ, so S_out,N=k_BN log 2. Thus finite-regulator entropies can diverge as the number of degrees of freedom grows. This construction proves no universal area coefficient or actual quantum-field divergence law.

The finite part of a subtraction is also a choice. Suppose real sequences x_N,r_N satisfy x_N−r_N→L∈R. For any a∈R the equally convergent subtraction r′_N=r_N−a gives x_N−r′_N→L+a. Therefore existence of a finite renormalized limit does not by itself determine its finite additive part; a renormalization condition must fix that part. If no actual counterterm sequence yields a finite limit, a renormalized value has not been defined. This algebraic fact assumes no particular divergence expansion.

<a id="C6-example"></a>
### C6 B — the additive definition alone is not monotonic

Fix any geometric term S_grav and a one-qubit outside factor. At parameter value 0 choose ρ_0=I/2; at value 1 choose ρ_1=diag(1,0). Both are positive trace-one matrices with the same fixed geometry. Their outside entropies are k_B log 2 and 0, respectively. Hence S_grav+S_out drops by k_B log 2 between these data. No evolution equation, energy condition, state-preparation dynamics or backreaction was imposed. This is a mathematical counterexample to deriving monotonicity from an additive entropy definition alone; it is not a physical process or a counterexample to a separately hypothesized generalized second law.
