# Gauge, photons, regulated QED and infrared structure

2026-10-04. Research arguments, not production or independent acceptance. Mathematical items take explicit algebra/function/operator hypotheses only. Physical interpretation adopts the identified free-field, gauge, charge and regulator models. No observed data or nonperturbative continuum four-dimensional QED construction is asserted.

<a id="Q0"></a>
## Q0. Conventions, spaces and units

Minkowski spacetime is R⁴ with η=diag(−1,1,1,1), orientation dx⁰dx¹dx²dx³ and future ∂₀, x⁰=ct and spatial x in m. Fields are smooth in the classical modules and operator-valued distributions smeared by C_c∞/Schwartz tests in the quantum modules. Use the free peer's constant gamma matrices γ⁰ Hermitian, γ^i anti-Hermitian, {γ^a,γ^b}=−2η^{ab}I; β=γ⁰,α_i=γ⁰γ^i are Hermitian, α_iα_j+α_jα_i=2δij,βα_i+α_iβ=0. ψbar=ψ†γ⁰. For standard slash notation set h=−η=diag(+1,−1,−1,−1), /p=γ^a p_a with p_a=h_ab p^b; this is an explicitly different scalar-product convention for Clifford contractions, not a change of the spacetime metric. Physical on-shell natural momenta satisfy h(p,p)=μ², μ=mc/ℏ in m^−1.

SI lower potential is A=(−φ/c,A_vec), component units T m; F=dA, F_0i=−E_i/c,F_ij=εijkB_k, E in V/m,B in T. Real charge q in C,m>0 kg,ℏ>0 J s,c>0 m/s,μ₀>0 N/A² and ε₀=(μ₀c²)^−1 are model inputs. ψ has m^−3/2; its classical normalization is matter field amplitude, not automatically a measured probability density. Define canonical natural a=A/√(μ₀ℏc), f=da, g=q√(μ₀c/ℏ)=q/√(ε₀ℏc), λ=χ/√(μ₀ℏc). Components a have m^−1,f m^−2,g and λ are dimensionless, while the physical gauge scalar χ has Wb. The action divided by ℏ is ∫[−f²/4+ψbar(iγ^a(∂_a−ig a_a)−μ)ψ]d⁴x, with the equivalent real symmetrized kinetic expression when varying actual conjugate fields. Recover physical E,p by ℏcω,ℏk and physical potential by the displayed normalization; suppressed constants are not universally1.

The photon Hilbert space uses the sesquilinear product conjugate-linear in its first argument. The abstract boson/fermion Fock and CCR/CAR suppliers are free-fields' mathematical modules: def-qft-fock-and-test-spaces,lem-qft-fock-ccr-car,lem-qft-smeared-free-scalar,lem-qft-free-dirac-car-locality. Exact current paths/hypotheses/reading are recorded when their stable carriers are read. Root Fourier/distribution/Stone suppliers and prior EM gauge/Poisson arguments remain read-only. Countable Choice is carried with Fourier Hilbert constructions; AC is additionally carried wherever published Stone is used. No finite-field algebra or physical hypothesis supplies a mathematical theorem.

<a id="Q1"></a>
## Q1. Classical charged Dirac coupling, current and gauge covariance

On an open spacetime domain let A_a real smooth,ψ smooth C⁴-valued and χ real smooth. Define D_aψ=∂_aψ−iqA_aψ/ℏ. Under A′=A+dχ,ψ′=exp(iqχ/ℏ)ψ, the chain rule gives D′ψ′=exp(iqχ/ℏ)Dψ: derivative of the phase cancels the additional −iq∂χ term. F′=F follows from commuting partials. ψbar′=exp(−iqχ/ℏ)ψbar, so every contraction ψbarγDψ and ψbarψ is gauge invariant. The real symmetrized Dirac Lagrangian is

L_D=(iℏc/2)[ψbarγ^aD_aψ−(D_aψ)barγ^aψ]−mc²ψbarψ.

The difference from the unsymmetrized expression is a divergence, whose compact variation integrates to zero. For smooth compact variations δψ,δψ† and δA, integration by parts yields (iℏγ^aD_a−mc)ψ=0 and its adjoint −iℏ(∂_aψbar)γ^a+qψbarγ^aA_a−mcψbar=0. Equivalently multiply by cγ⁰ to get

iℏ∂_tψ=[cα·(−iℏ∇−qA_vec)+βmc²+qφ]ψ.

Subtract ψbar times the first equation and the adjoint times ψ to obtain ∂_a(ψbarγ^aψ)=0; no Maxwell assumption is needed for this on-shell identity. Physical current j^a=qc ψbarγ^aψ has A/m², j⁰=qcψ†ψ,ρ_q=qψ†ψ and spatial current qcψ†αψ. Varying (1/c)∫L_Dd⁴x in A gives (1/c)∫j^aδA_a d⁴x. Adding the earlier classical EM action −(4μ₀c)^−1∫F² gives ∂_aF^{ab}=−μ₀j^b, consistent with the legacy sign. This is a complete conditional classical coupling and its equations; neither smooth coupled PDE global existence nor quantum operator products ψbar(x)γψ(x) follow from it.

For quantum free Dirac Fock, the integrated normal-ordered charge is separately defined as Q=q(N_particles−N_antiparticles) on its maximal sector domain ∑_{n_p,n_a}q²(n_p−n_a)²‖ψ_{n_p,n_a}‖²<∞. The total-number domain D(N_particles+N_antiparticles) is sufficient, not necessary when charges cancel; q0 gives the zero operator on all Fock space. The free peer supplies the separate CAR particle/antiparticle construction. On its finite-particle domain [Q,ψ(f)]=−qψ(f), since particle annihilation and antiparticle creation both have that commutator. Thus exp(−iθQ/q)ψ(f)exp(iθQ/q)=e^{iθ}ψ(f) for q≠0, directly on particle sectors; q0 is neutral. The gauge implementer sign is stated explicitly. This global free charge identity does not define the interacting pointwise current.

<a id="Q2"></a>
## Q2. Coulomb constraints and an actual smooth Gauss solver

For the classical physical variables, π_A=∂L_EM/∂A_t=ε₀(A_t+∇φ)=−ε₀E and π_φ=0. The latter is the primary nondynamical constraint. Legendre transformation and compact/periodic integration by parts give

H=∫[|π_A|²/(2ε₀)+|B|²/(2μ₀)+ψ†(cα·(−iℏ∇−qA)+βmc²)ψ+φ(divπ_A+ρ_q)]d³x.

Thus variation of the multiplierφ imposes divπ_A+ρ_q=0, i.e. ε₀divE=ρ_q. Gauge transformations do not convert φ into an independent photon polarization. This Hamiltonian formula is classical; quantum Coulomb density products need a regulator and are not assigned by formal substitution.

A proved branch is periodic Coulomb gauge. On T_L³, assume smooth real ρ(x,t), ∫ρdx=0 at each t and smooth div A=0. Then Gauss becomes −Δφ=ρ/ε₀. Fix meanφ=0. For k≠0,κ_k=2πk/L, put φhat(k)=ρhat(k)/(ε₀|κ_k|²),φhat(0)=0. Smooth periodic ρ has Fourier coefficients decaying faster than every power, by repeated integration by parts, uniformly on compact time intervals with the indicated derivatives. The series and all derivatives used converge uniformly, so φ is a smooth solution. A zero-mean harmonic difference has |κ_k|²φhat(k)=0, hence is zero by actual torus Fourier completeness. Integration of Gauss shows neutrality is necessary. The longitudinal electric energy is

(ε₀/2)∫|∇φ|²dx=(1/2)∫ρφdx=|T_L³|/(2ε₀)∑_{k≠0}|ρhat(k)|²/|κ_k|²≥0.

Every equality follows from periodic integration by parts and Parseval; this supplies an actual elliptic constraint solver and positive energy under exact data assumptions. It does not prove that a time-dependent charged quantum field supplies such smooth ρ, or that an unrenormalized continuum density-square exists.

<a id="Q3"></a>
## Q3. Physical photon one-particle space and the auxiliary null quotient

For k∈R³\{0},ω=|k|,n=k/ω, define P_T(k)=I−n⊗n. This is a measurable Hermitian idempotent of norm1, rank2, killing k; at k0 assign any value (a measure-null change). On h=L²(R³,d³k;C³), its multiplier is an orthogonal projection and

h_T={f∈h:k·f(k)=0 a.e.}=Ran(P_T)

is a closed positive Hilbert space. No choice of global continuous polarization vectors is required. Rotations act by f(k)→R f(R^−1k), preserving the norm and range. State time evolution multiplies by e^{−iωx⁰}; the Heisenberg translation implementer uses the free peer's opposite phase e^{+i(ωa⁰−k·a)}, so conjugating it translates the field arguments. the positive Hamiltonian is ℏc dΓ(ω) on the boson Fock space F_s(h_T), with domain on sector n given by square integrability of (∑_{j=1}^n|k_j|)ψ_n and square-summability of these weighted norms over n. The multiplier is self-adjoint: testing an adjoint vector against finite-support coefficient functions forces the same weighted domain, and every vector in that domain satisfies the adjoint pairing. The vacuum sector has energy0. This is an exact free model.

The four-polarization auxiliary space is K=L²(d³k;C⁴) with indefinite form [ε,δ]=∫ε†ηδ; it is not a positive physical state space. Let K_0={ε:−ε⁰+n·ε_vec=0 a.e.}, a closed subspace in the underlying component L² topology. On K_0 define Tε=ε_vec−nε⁰. Then n·Tε=0 and

[ε,δ]=⟨Tε,Tδ⟩_{h_T}.

Expand ε_vec=Tε+nε⁰ to verify it, with the cross terms zero. The radical is N={b(k)(1,n(k)):b∈L²}; its indefinite norm and all pairings in K_0 vanish. T is bounded, surjective using representative(0,f), and has kernelN. Consequently K_0/N with its induced positive norm is isometric to h_T, hence complete. A timelike auxiliary vector(1,0,0,0) has negative norm and does not define a negative-probability physical state. This exact one-particle subsidiary/null quotient is not a construction of interacting Gupta–Bleuler/BRST continuum QED.

Lorentz covariance can be formulated without a global polarization frame. Over the future null cone p=(ω,k), use fibers p⊥/span(p) in C⁴ with η pairing and measure dμ=d³k/(2ω). The Coulomb representative is exactly the preceding T fiber map. This bundle Hilbert space is unitarily identified with h_T by t(k)→t(k)/√(2ω). Proper orthochronous Lorentz transformations send [ε(p)]→[Λε(Λ^−1p)], preserving fiber norm and the null-line quotient. Measure invariance has an explicit proof: for a boost of speed parameterβ in unit directionn, spatial k′=k+(γ−1)(n·k)n−γβω n has determinant γ(1−βn·k/ω)=ω′/ω by expansion of the rank-one derivative matrix. Rotations have determinant1. Any proper orthochronousΛ is a boost followed by rotation: boost the unit future vectorΛe₀ back to e₀, after which the remaining map fixes e₀ and restricts to a proper Euclidean rotation. Its explicit boost matrix verifies the statement algebraically. Hence d³k′/(2ω′)=d³k/(2ω) on the cone, and the quotient action is unitary. Strong continuity follows first on compact continuous coefficient representatives away from k0 using change of variables/uniform convergence, then on all vectors by their L² density and unitary bounds. This is an actual free one-particle representation, not a claim that unphysical four-vectors are positive physical states.

<a id="Q4"></a>
## Q4. Smeared photons, local field strengths and bounded observables

Let D_fin be the finite-particle domain in F_s(h_T). The free peer's exact CCR bounds are ‖a(f)ψ_n‖≤√n‖f‖‖ψ_n‖,‖a†(f)ψ_n‖≤√(n+1)‖f‖‖ψ_n‖. For real smooth compact spacetime vector test j, take the transverse positive-frequency restriction

g_j(k)=(2π)^−3/2(2ω)^−1/2 P_T(k)∫j(x)e^{iωx⁰−ik·x}d⁴x,

and define a_T(j)=a(g_j)+a†(g_j) on D_fin (complex tests extend linearly with the corresponding conjugate convention). This is a symmetric operator-valued distribution, not a pointwise operator. The norm is finite: near k0 its squared bound is C/ω, integrable against d³k; at infinity the Fourier transform of a compact smooth test decays faster than every power by repeated integration by parts, while P_T is bounded. These estimates in test seminorms and the CCR bounds give continuity of every D_fin matrix element. Derivative fields are defined by integrating derivatives onto tests.

Set canonical electric e=−∂₀a_T and magnetic b=curl a_T; f_0i=∂₀a_i=−e_i,f_ij=εijkb_k. For an antisymmetric real test h^{ab}, define f(h)=(1/2)∫f_ab h^{ab}=−a_b(∂_ah^{ab}), with a₀=0 and the spatial test in the preceding formula. The effective test is conserved because ∂_b∂_ah^{ab}=0. Field strength is gauge invariant: adding ∂_bλ changes this pairing by ∫λ∂_b∂_ah^{ab}=0. In the cone quotient formulation its mass-shell matrix coefficient is the contraction of p∧ε with the Fourier test, unchanged by ε→ε+bp. The Lorentz quotient unitary of Q3 and its sectorwise Fock lift therefore act covariantly on this smeared two-form with the ordinary tensor test pullback; translations multiply its cone coefficients by their phase. This supplies covariance of physical free observables, even though Coulomb a_T itself does not transform as an unconstrained local four-vector potential.

Let C₀(x−y) be the massless scalar commutator supplied by the free peer, with support in the closed causal cone, satisfying ∂₀²C₀=ΔC₀. Fourier CCR gives [a_i(x),a_j(y)]=(δij−∂_i∂_jΔ^−1)C₀ as a distribution. Curling or differentiating twice removes the inverse Laplacian:

[e_i(x),e_j(y)]=[b_i(x),b_j(y)]=(−δijΔ+∂_i∂_j)C₀(x−y),

[e_i(x),b_j(y)]=ε_{jri}∂₀∂_r C₀(x−y).

For the first identity use −∂₀²P_TC₀=−ΔP_TC₀; for the second, each curl kills the longitudinal projector and ε contractions give δijΔ−∂i∂j with the opposite y derivative; the mixed identity has one time derivative and curl. Thus all field-strength commutators have causal support. Smear spacelike-separated compact supports: every derivative distribution is zero on their difference set, so the operators commute on D_fin. These are genuine free local observables; the Coulomb potential is nonlocal. Indeed the equal-time [a_i,e_j]=−iP_T,ijδ³ has off-origin kernel −i∂i∂j(1/(4πr)), which is nonzero, e.g. ∂₁²(1/(4πr))=2/(4πr³) on the x₁ axis. The inverse Laplace kernel −Δ(1/(4πr))=δ is the actually read published Poisson fundamental-solution supplier. Its angular Fourier normalization is also explicit: damping e^−ε|k| gives the inverse transform of1/|k|² as [1/(2π²r)]∫₀∞e^−εs sin(sr)/s ds=[1/(2π²r)]arctan(r/ε), since differentiating in r gives ε/(ε²+r²) and its value at r0 is0. As ε↓0 this tends to1/(4πr), uniformly away from the origin and distributionally by its C/r locally integrable bound plus Schwartz tails. Thus no hidden harmonic/contact term changes the projector kernel. No nonlocality of the gauge-invariant field strength is inferred.

To obtain bounded observables without silently invoking an unproved essential-self-adjointness theorem, use explicit Weyl operators. Define exponential vector E(f)=⊕_{n≥0}f^{⊗n}/√n!, with norm²=e^{‖f‖²} and inner product e^{⟨f,g⟩}, by summing the scalar exponential series and Fock norms. Their span is dense: orthogonality to E(zf) for all complexz kills each sector polynomial; polarization of symmetric multilinear forms kills every symmetric tensor coefficient, whose finite products are dense by the Fock construction. Put

W(h)E(f)=exp(−‖h‖²/2+i⟨h,f⟩)E(f+ih).

The exponential-vector inner product verifies norm/inner-product preservation; W(−h) is its inverse. Hence W extends to a unitary on Fock. Direct coefficient multiplication gives W(h)W(k)=e^{−i Im⟨h,k⟩}W(h+k), and continuity on exponential vectors plus unitary density bounds gives strong continuity. The fully read canonical free-fields FF2 supplier lem-qft-segal-weyl-domain proves that W(th) has generator equal to the self-adjoint closure of X(h)=a(h)+a†(h) on D_fin, via an explicit one-mode Hermite/position graph core. This provides the derivative/domain statement rather than relying on coefficientwise differentiation alone. For each real field-strength test take W(g_h). If two such tests have spacelike-separated supports, their field commutator is2i Im⟨g_h,g_l⟩=0, and their Weyl unitaries commute. Their bounded Hermitian real/imaginary parts are actual observable operators; the local bounded algebra is generated by them. This construction does not identify nonregular abstract Weyl states with the regular Fock representation.

<a id="Q5"></a>
## Q5. Exact compact U(1) lattice regulator: Hilbert space, constraints and Hamiltonian

Choose a finite oriented graph with vertices V,links E, source s(e),target t(e), and a finite set of oriented plaquette cycles. Allow s spinor components per vertex, s=4 for a Dirac-motivated regulator. The graph/cell spacing a_lat>0 in m and couplings below are explicitly adopted cutoff-model data. Hilbert space is

H_lat=L²(T^{|E|}, normalized Haar dθ)⊗F_a(C^{s|V|}).

The link variables U_e=e^{iθ_e} act by bounded unitary multiplication; E_e is multiplication by n_e∈Z in the torus Fourier basis (equivalently −i∂θ_e), on its maximal weighted L² domain. Finite CAR c_{xα},c†_{xα} act on the finite fermion factor, norm≤1 by CAR, and n_x=∑α c†c has integer spectrum0,…,s. On the finite Fourier/occupation core, [E_e,U_f]=δef U_f and [n_x,c_{yα}]=−δxy c_{yα}; these extend as domain identities because bounded link shifts preserve every finite electric weighted domain. Choose fixed integers b_x∈{0,…,s}. Define commuting self-adjoint Gauss operators

G_x=∑_{e:s(e)=x}E_e−∑_{e:t(e)=x}E_e−(n_x−b_x).

They are simultaneously diagonal in the Fourier/occupation basis with real integer eigenvalues; maximal diagonal domains prove self-adjointness by testing individual basis coefficients in the adjoint identity. The gauge group U(α)=exp(i∑α_xG_x), α∈T^{|V|}, is an explicitly defined strongly continuous periodic unitary multiplier. It acts by

U(α)c_{xα_0}U(α)†=e^{iα_x}c_{xα_0},

U(α)U_eU(α)†=e^{i(α_s−α_t)}U_e.

Thus a link is the parallel transporter *from target back to source*: the classical comparison is U_e=exp[−ig∫_{s→t}a], transforming with exactly those endpoint phases. This prevents a sign mismatch with D=∂−ig a and ψ→e^{igλ}ψ. This lattice comparison is a model identification, not a continuum convergence theorem.

The bounded Haar average P=(2π)^−|V|∫U(α)dα is the orthogonal projection onto H_phys=∩kerG_x. Indeed on every simultaneous eigenvector its integral is1 iff all integer G eigenvalues0, else0. Density/contractivity extends that formula to all vectors. A nonempty physical vector has all electric integers0 and n_x=b_x at each site; finite occupation basis vectors with those numbers exist. The group acts as the identity on H_phys; the auxiliary rotor Hilbert space is positive but contains unphysical constraint sectors, unlike the indefinite Lorenz space of Q3.

For λ_E>0 in J choose H₀=λ_E∑E_e², with coefficient domain ∑_{n,occupation}(λ_E∑n_e²)²|ψ_{n,occupation}|²<∞. It is positive self-adjoint by the same diagonal adjoint proof; finite Fourier/occupation vectors are a graph core by truncating coefficient tails. Add

V_B=−∑plaquettes λ_p(W_p+W_p†)/2,

V_F=∑_x c_x†M_xc_x+∑_e[c_s†T_e U_e c_t+h.c.],

where W_p is the ordered product of U_e or U_e† around the chosen oriented cycle, λ_p real in J, and M_x Hermitian s×s,T_e arbitrary s×s matrices in J. This explicitly includes electric, magnetic-cycle, mass/spin and gauge-covariant hopping terms. Each W_p is unitary, and each fermion/link factor bounded; finite sums give bounded self-adjoint V=V_B+V_F. Every term commutes with U(α): cycle phases telescope and hopping phases cancel. H=H₀+V has energy units; it is a specified finite-spatial-lattice gauge regulator, not automatically the unique Lorentz-invariant Dirac continuum theory. Possible doubling, tuning and lattice-spacing limits are not assumed solved.

Here is the full bounded-perturbation self-adjointness proof. For z=±ib with b>‖V‖, R₀=(H₀−z)^−1 is the explicit coefficient multiplier and ‖R₀‖≤1/b. Factor

H−z=(I+VR₀)(H₀−z).

The inverse of I+VR₀ is the norm-convergent geometric Neumann series since ‖VR₀‖<1, hence both H±ib have full range. H is densely defined symmetric on exactly D(H₀); it is closed because if ψ_n and Hψ_n converge then H₀ψ_n=Hψ_n−Vψ_n converges and the closed diagonal H₀ identifies its limit. For y∈D(H*), solve (H+ib)x=(H*+ib)y with x∈D(H). Then y−x∈ker(H*+ib)=(Ran(H−ib))⊥=0. Thus D(H*)⊂D(H), and symmetry gives equality, proving H self-adjoint. No generic Kato–Rellich assumption is required here. The actually read published Stone/SA-generator result, carrying AC, gives the global unitary e^{−itH/ℏ}, with differentiability exactly on D(H) and that domain preserved.

The gauge group preserves D(H₀) and commutes with H there, by the diagonal electric terms and bounded term calculation. Conjugating H by U(α) gives the same self-adjoint operator, so uniqueness in the read Stone theorem makes U(α) commute with the time group. The Haar projection therefore commutes with that group and the resolvents. Its range reduces H; restricting the resolvent construction to P shows that H|H_phys is self-adjoint on D(H)∩H_phys, and physical evolution is unitary there. This completes an actual interacting gauge-model Hilbert space and dynamics with constraints, rather than assuming gauge invariance guarantees existence.

On a graph with no boundary links, ∑G_x=−∑(n_x−b_x); therefore all physical states have exactly ∑n_x=∑b_x. Nonzero net charge cannot be inserted on a compact periodic graph without changing backgrounds/boundary sectors. The local region identity is

∑_{x∈R}(n_x−b_x)=∑_{e∈∂R}orientation(e,R)E_e

on H_phys, since internal link divergences cancel. It is a precise regulated Gauss law. Local charge/flux constraints are not optional photon polarizations.

<a id="Q6"></a>
## Q6. Exact regulated Ward identities and local charge obstruction

Take bounded observables O with gauge-covariant transformation U(α)OU(α)†=e^{i∑q_xα_x}O, q_x∈Z. For any normalized physical ψ, ⟨ψ,Oψ⟩=e^{i∑q_xα_x}⟨ψ,Oψ⟩. If some q_x≠0 choose α giving nonunit phase, hence the expectation is zero. The same argument for a product proves that correlation functions vanish unless their total gauge charge at every vertex is zero. Mixed physical states defined by finite convex mixtures have the same property. No path-integral measure or divergent trace is used.

If O maps D(G_x) into itself and [G_x,O] extends boundedly, differentiate the preceding group identity: ⟨ψ,[G_x,O]ψ⟩=0. Link multiplication and finite CAR operators satisfy these domain assumptions by their explicit charge shift. Time-evolved O(t)=e^{itH/ℏ}Oe^{−itH/ℏ} has the same gauge charge since H commutes with U. Every product of such charged bounded operators preserves the relevant G domains. Thus the selection rules and infinitesimal Ward identities hold exactly for the interacting rotor regulator at arbitrary coupling.

A time-ordered contact identity is also rigorous. For distinct fixed insertion times t_j, define ordinary operator time order T[G_x(t)O₁(t₁)…O_n(t_n)], with G_x(t)=G_x, between physical/domain vectors; G is bosonic, so no graded sign is introduced when it moves past an insertion. On each interval between the t_j this expression is constant in t. Its jump at t=t_j is the corresponding ordered insertion [G_x,O_j(t_j)]. Pairing with a compact smooth temporal test and integrating its step function by parts therefore gives

∂_t⟨T G_x(t)∏O_j(t_j)⟩=∑_jδ(t−t_j)⟨T [G_x,O_j(t_j)]∏_{i≠j}O_i(t_i)⟩.

This is a complete finite-regulator Ward contact identity under explicit domains. It is not the unconstructed continuum renormalized Ward–Takahashi theorem, and no assertion about pointlike time-ordered distributions is hidden in it.

Gauss law constrains charged localization. In the exact lattice model suppose a bounded physical-sector-preserving O commutes with every boundary electric E_e of a regionR (domain commutation for these unbounded multipliers). The Q5 region identity then gives [∑_R(n_x−b_x),O]=0 on physical vectors. A charge-changing operator must affect boundary flux and cannot be confined to a region disjoint from that boundary electric algebra. This is a fully proved regulated version of nonlocal charged dressing, not an unsupported continuum sector theorem.

A continuum conditional statement is useful, with hypotheses exposed. Suppose a positive Hilbert representation has a common invariant dense domain, Gauss identity ρ=ε₀divE as operator-valued distributions, and an O localized in a bounded spatial set which commutes on that domain with electric tests in disjoint equal-time sets. Put Q_R=∫χ_Rρ=−ε₀∫∇χ_R·E with χ_R=1 on the localization set and gradient supported in an exterior annulus. Then [Q_R,O]=0 by locality. If Q_R converges to a charge Q on that domain, and commutators pass to the limit (e.g. both Q_R Oψ and OQ_Rψ converge), then [Q,O]=0. Thus a nonzero-charge-changing O cannot satisfy all of these localization/limit hypotheses. This argument does not construct such a continuum representation or prove the limits; it is conditional and cannot be used to claim all charged QED sectors already exist.

<a id="Q7"></a>
## Q7. Formal matrix Ward relations, regulated fermion determinants and tree rules

This module uses *formal/rational algebra*, not convergence of an interacting continuum expansion. In finite dimension let K₀ invertible, V a matrix and z formal. Define K(z)=K₀+zV and S(z)=∑_{n≥0}(−zK₀^−1V)^n K₀^−1 in Mat_d(C[[z]]). Every coefficient is finite and direct multiplication telescopes to K(z)S(z)=S(z)K(z)=I. If a gauge family K[A^θ]=D_θK[A]D_θ^−1 is specified, invert both sides to obtain S[A^θ]=D_θS[A]D_θ^−1, coefficient by coefficient. Such a family exists on a finite graph: external unit-modulus link numbers ζ_st transform by e^{i(θ_s−θ_t)}ζ_st, and K's hopping block K_st=T_stζ_st plus diagonal blocks transforms by the diagonal D_θ=e^{iθ_x}I_spin. The base must respect this covariance; a scalar nonzero mass timesI is an explicit formal-inverse base. In ordinary algebra S=K^−1 has the same identities wherever detK≠0.

For real infinitesimal θ, variation gives δK=i[Θ,K], δS=i[Θ,S]=−S(δK)S. The equality follows by differentiating KS=I, or by finite coefficient multiplication in the formal ring. Thus finite gauge-covariant external-field kernels obey exact matrix Ward identities, and detK is gauge invariant by multiplicativity of the finite determinant. No gauge anomaly or continuum regularization theorem is being inferred from finite determinant algebra.

For clarity, the finite fermion Gaussian determinant has a complete algebra definition. Introduce exterior algebra on generators ψ_i,ψbar_i, all anticommuting; define the integral to extract the coefficient of the fixed top monomial, with its overall sign chosen so the identity kernel integrates to1. Expand exp(−∑ψbar_iK_ijψ_j); only degree2d contributes. Terms with a repeated generator vanish. The surviving terms choose a permutation of columns/rows, and anticommuting into the fixed order gives its permutation sign, so the integral is exactly detK. Invertible diagonal gauge changes on ψ,ψbar have reciprocal determinants, preserving the top-coefficient measure. This is a finite Grassmann algebra calculation. Infinite Grassmann/path-integral measures, ultraviolet subtraction and continuum convergence are separate constructions.

For free Dirac propagator algebra use h=−η, μ>0 and /p=γ^a h_abp^b. Clifford gives (/p−μ)(/p+μ)=(h(p,p)−μ²)I, so S₀(p)=(/p+μ)/(h(p,p)−μ²) is the exact matrix inverse off shell. If both denominators at p,p+k are nonzero,

/k=S₀(p+k)^−1−S₀(p)^−1,

S₀(p+k)/k S₀(p)=S₀(p)−S₀(p+k).

The second identity is just A(A^−1−B^−1)B=B−A; this is the tree matrix Ward relation. Repeated internal insertions telescope on an ordered fermion line, with boundary differences retained. For on-shell external spinors satisfying (/p−μ)u(p)=0 and ψbar equations, the contracted current ubar(p′)/k u(p)=0 when k=p−p′. This follows by moving /p′ onto ubar and /p onto u. The pair-production variants use v satisfying (/p+μ)v=0, with the appropriate summed momentum and explicit signs. One may attach a Feynman i and a boundary-value prescription to formulate distributional propagators, but this algebra by itself is stated off shell; it does not secretly prove products of singular loop distributions.

An explicit formal coefficient rule is adopted in Q9: a species with natural charge g has vertex igγ^a (electron g=−e gives−ieγ^a); the rational fermion line is i(/p+μ)/(h(p,p)−μ²), and the Feynman-gauge auxiliary photon line is −ih_ab/h(p,p)=iη_ab/h(p,p). Off-shell denominators here are nonzero. If a time-ordered distribution is required, use the actually constructed scalar carrier H_μ of free FF9 and apply (iγ∂+μ) or multiply H_0 by η_ab; its boundary-value Fourier symbols conventionally insert +i0 in the displayed h-denominators. The pole notation is not a prescription for undefined loop products. The covariant photon line belongs to the indefinite auxiliary calculation, while physical external photons lie in Q3's quotient.

Formal covariant-gauge photon kernels differ by k_a k_b times a scalar rational denominator. Contracting with two explicitly conserved tree currents kills that difference. Likewise a pure-gauge external polarization ε→ε+bk leaves a tree current contraction unchanged. These are exact algebraic tree statements, not a blanket assertion that every individual diagram in an arbitrary regulator/renormalization scheme is gauge-independent. Usual QED rule symbols (fermion inverse, transverse/potential propagator, vertex proportional to gγ) are interpreted as formal coefficients under these stated conventions; constructing all renormalized continuum loop time products belongs to the interactions worker's exact formal/regulated modules and cannot be assumed from the rule table alone.

<a id="Q8"></a>
## Q8. Exact coherent infrared family: finite energy, no Fock vector limit

The following is an actually proved free-photon model of an infrared obstruction, not a theorem that the full interacting QED charged sector has been constructed. Fix a spatial unit vectore, κ>0 in m^−1, dimensionless λ≠0 and 0<ε<κ. In h_T define

f_ε(k)=λ 1_{ε<|k|<κ}|k|^−3/2 P_T(k)e.

The momentum-wavefunction units are m^3/2 so its L² norm and coherent amplitude are dimensionless. Angular integration gives ∫|P_T(n)e|²dΩ=∫[1−(n·e)²]dΩ=8π/3: rotate e to the z-axis and compute2π∫_{−1}^1(1−u²)du. Hence

‖f_ε‖²=(8πλ²/3)log(κ/ε),

⟨H_photon⟩_{C(f_ε)}=ℏc∫|k||f_ε(k)|²d³k=(8πℏcλ²/3)(κ−ε).

Here C(f)=e^{−‖f‖²/2}E(f) is normalized by Q4's exponential series. For each ε>0 it lies in the number and energy form domains; mean photon number is‖f‖² by differentiating the exponential normalization series, and energy expectation is the displayed one-particle quadratic form by applying the sectorwise sum and the same series. Since |k|≤κ and support is away from0, it even lies in the energy operator domain: the second moment is (∫ω|f|²)²+∫ω²|f|², obtained by the two diagonal/off-diagonal particle sums, and is finite.

The exact coherent overlap has absolute value |⟨C(f),C(g)⟩|=e^{−‖f−g‖²/2}, directly from e^{⟨f,g⟩}. Let ε_j=κe^−j. Successive f_j differ on disjoint shells with squared norm8πλ²/3, so their coherent overlaps stay at e^−4πλ²/3<1. Even choosing arbitrary phases, ‖C(f_j)−e^{iα}C(f_{j+1})‖²≥2(1−e^−4πλ²/3)>0. Therefore no strong Fock-vector limit exists asε↓0, despite a uniformly finite energy expectation.

In fact the vectors converge weakly to0. For a fixed finite-particle test ψ with sectors up toN, Cauchy–Schwarz bounds its overlap by e^{−‖f_ε‖²/2}∑_{n≤N}‖ψ_n‖‖f_ε‖^n/√n!, which tends to0 because the Gaussian factor beats every fixed polynomial. D_fin is dense and the coherent vectors have norm1; approximation then extends weak convergence to every fixed Fock test. The weak limit0 is not a normalized physical state vector. This is a rigorous counterexample to deducing a charged/infrared state in the vacuum Fock representation from bounded energy alone.

The same theorem holds for every fixed nonzero transverse angular b∈L²(S²;C³), n·b(n)=0: set f_ε(k)=1_{ε<|k|<κ}|k|^−3/2 b(k/|k|), C=∫|b|²dΩ>0. The radial integrals give norm²=C log(κ/ε), energy=ℏcC(κ−ε); each successive e-fold shell has norm²=C, so the identical overlap, energy-domain and weak-limit arguments apply verbatim. This is the general supplier used by the examples worker after independently deriving its physical soft-current angular coefficient.

Interpreting the |k|^−3/2 tail as soft dressing of charged matter is an additional model/formal approximation. Deriving it in full QED, removing ultraviolet cutoffs, proving infraparticle spectra, inclusive-scattering limits or universal cancellation of all soft divergences are not asserted here. The exact logarithmic norm/finite-energy/non-Cauchy theorem remains useful independently of those stronger claims.

<a id="Q9"></a>
## Q9. Physical framework adoptions and boundaries

The physical QED coupling postulate adopts Q1's classical local action with a chosen Dirac species (electron q=−e,e>0), the earlier Maxwell/relativistic structures and quantum free Bose/Fermi field correspondence. It does not assert that pointwise interacting fields, a gauge-invariant continuum vacuum or an exact scattering matrix already exist. The separate formal-QED coefficient rule adopts the vertex/free-line symbols of Q7 as a formal algebraic organizing convention, with every asserted coefficient identity justified there or by the interactions worker; it does not adopt an unproved convergent or nonperturbative theory. The regulator postulate separately adopts Q5's finite spatial graph, compact link angles, finite CAR matter and specified positive electric/bounded interaction coefficients. Its exact existence, constraint and Ward theorems are mathematical deductions from that data; the claim that it approximates nature or has a chosen continuum limit is a different physical/mathematical question.

Free physical photons are the positive transverse Fock model of Q3/Q4, with local smeared field-strength observables. Covariant potential symbols and indefinite auxiliary polarizations belong to a calculational enlargement with a null quotient; they are not four independently positive photon states. Classical gauge choices require actual domains/boundary behavior: Q2 supplies a periodic neutral smooth Coulomb solver, not a universal curved/charged gauge-fixing theorem. On a noncompact charged model, gauge functions vanishing at spatial infinity and transformations approaching a nonzero constant need not have the same physical role: Q1's global charge implementation is distinct from compact-gauge redundancy. A boundary/global charge-sector conclusion needs its explicit asymptotic hypotheses. Holonomy and nontrivial gauge sectors from earlier EM geometry remain explicit possible structures, not erased by naming A a global function.

Mathematical exactness in Q5–Q8 has three distinct statuses: exact interacting lattice Hamiltonian identities at fixed cutoff; coefficientwise finite/formal matrix identities; and exact free coherent-family limits. None is a proof of nonperturbative continuum four-dimensional QED. Observations, phenomenological precision and measured coupling values need actual empirical reports; this worker supplies no experiment item. Expected particle/antiparticle charge assignment comes from the stated free Dirac construction/current convention, not an invented observation.

<a id="Q2a"></a>
## Q2a. Dirac first-order canonical constraints, with an exact finite-mode reduction

To make the classical first-order constraint explicit without an undefined infinite-dimensional Poisson bracket, choose finitely many orthonormal spatial spinor modes and write their dimensionless complex coordinates z_j. The symmetrized kinetic term is (iℏ/2)∑(zbar_j ż_j−żbar_j z_j). Treat z,zbar as complex coordinate notation for real/imaginary variables; complexified canonical momenta satisfy {z_j,p_k}=δjk,{zbar_j,pbar_k}=δjk, with all other elementary brackets0. Primary constraints are C_j=p_j−iℏ zbar_j/2 and Cbar_j=pbar_j+iℏ z_j/2. Direct bilinearity gives {C_j,Cbar_k}=−iℏδjk and the two equal-type brackets0. This constraint matrix is invertible forℏ>0, so these are second-class constraints of this *classical commuting-coordinate* finite system.

Define the reduced bracket by {F,G}_D={F,G}−{F,C_A}(M^−1)_{AB}{C_B,G}, where M is that explicit constraint matrix. Multiplication verifies {C_A,F}_D=0; substitution gives {z_j,zbar_k}_D=−iδjk/ℏ and the two equal-type coordinate brackets0. For a real finite Hamiltonian H(z,zbar), ż_j={z_j,H}_D gives iℏż_j=∂H/∂zbar_j. The remaining reduced bracket has constant coordinate coefficients; its Jacobi identity follows by expanding three brackets and cancelling commuting mixed partial derivatives. Thus the finite-mode Hamilton equation is the exact first-order Schrödinger/Dirac coefficient equation. No independent second-order coordinate momentum data may be specified beyond these constraints.

This classical commuting-spinor calculation does *not* deduce fermionic CAR by ordinary bosonic quantization. The quantum free Dirac CAR is the separately adopted and actually constructed antisymmetric Fock model of FF1/FF5. A Grassmann classical canonical formulation uses a graded bracket and different variables; it is not silently substituted for the finite real-coordinate calculation above. Q5's finite quantum matter directly uses the proven CAR, whereas the photon rotor uses ordinary compact-coordinate canonical structure. Hence primary nondynamical photon constraints, Gauss constraints and first-order Dirac matter data remain distinct.
