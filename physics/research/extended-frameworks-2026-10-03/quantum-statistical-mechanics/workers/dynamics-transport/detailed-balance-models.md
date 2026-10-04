# Detailed balance, relaxation and selected transport models

2026-10-04. Finite-dimensional exact mathematics throughout. No bath limit is inferred. Physical use of a GKSL generator, rates and monitoring instrument is an additional specified effective model. H is J, ℏ J s, β J^-1, rates s^-1, density and Pauli matrices dimensionless. Complex matrix adjoints have their usual meaning; the operator Hilbert pairing below is first-variable-linear. Kinetic coefficients are derived from the selected generator and observables, not primary measurements.

<a id="G0"></a>
## G0 — a precise detailed-balance convention and proved gap

Let σ>0 be a faithful density on C^d and H=H* commute with σ. Define ⟨A,B⟩_σ=Trσ B*A, a positive-definite first-linear Hilbert inner product on M_d. The observable generator is G(A)=i[H,A]/ℏ+D(A), dual to a C3 GKSL generator. Assume D itself is a unital GKSL observable generator, D(I)=0, and is self-adjoint for this inner product. These conditions are the **GNS detailed-balance convention used here**, not an assertion that all conventions called quantum detailed balance are equivalent. In particular Kubo–Mori and other weighted pairings are not silently substituted.

Self-adjointness and D(I)=0 imply Trσ D(A)=⟨D(A),I⟩_σ=⟨A,D(I)⟩_σ=0. The Hamilton part also has zero σ trace; cyclicity and [σ,H]=0 prove stationarity. For e^{tD}, C1 Schwarz and this stationarity give ∥e^{tD}A∥_σ²≤Trσ e^{tD}(A*A)=∥A∥_σ². Differentiating at zero yields ⟨D A,A⟩_σ≤0. The finite spectral theorem in this positive inner product follows by conjugating with the invertible Hilbert map A↦Aσ^{1/2} to the ordinary matrix inner product and using Q0. Thus if ker D=C I and d>1, the finite list of nonzero eigenvalues is strictly negative, and γ=min(-λ)>0, in s^-1. For d=1 the centered space is zero and all following centered claims are trivial.

The centered subspace M_0={A:Trσ A=0} is invariant. K(A)=i[H,A]/ℏ is anti-self-adjoint: trace cyclicity and [σ,H]=0 give ⟨K A,B⟩_σ=-⟨A,K B⟩_σ. For A_t=e^{tG}A in M_0, differentiation gives (∥A_t∥_σ²)'=2⟨D A_t,A_t⟩_σ≤-2γ∥A_t∥_σ². Integrating the derivative of e^{2γt}∥A_t∥_σ² gives ∥A_t∥_σ≤e^-γt∥A∥_σ. D and K need not commute for this argument. Hence all centered correlations ⟨e^{tG}A,B⟩_σ are absolutely integrable, bounded by e^-γt∥A∥_σ∥B∥_σ.

This also proves trace-norm relaxation of every state ρ_t=e^{tL}ρ to σ. Put X=ρ-σ. For ∥A∥≤1 replace A by A_0=A-(Trσ A)I. Stationarity gives Tr(ρ_t-σ)A=Tr X e^{tG}A_0. Hilbert–Schmidt Cauchy–Schwarz applied to σ^-1/2 X and (e^{tG}A_0)σ^{1/2} bounds this by ∥σ^-1/2 X∥_2 e^-γt∥A_0∥_σ. The last norm squared is Trσ A*A-|Trσ A|²≤1. C1 trace-norm duality proves ∥ρ_t-σ∥_1≤∥σ^-1/2(ρ-σ)∥_2 e^-γt. No faithful stationary state/gap is claimed for arbitrary Lindblad models.

For centered A, ∫_0∞e^{tG}A dt=(-G|M_0)^-1 A: the integral converges by the bound, multiplying by G gives -A, and injectivity follows by the same bound on any kernel vector. Define Γ(A)=Re⟨(-G)^-1 A,A⟩_σ. If Y=(-G)^-1 A, Γ=Re⟨Y,-GY⟩_σ=⟨Y,-DY⟩_σ≥0. Polarization on real Hermitian combinations gives a positive-semidefinite symmetric correlation-integral matrix. This is a finite model correlation coefficient. A classical path variance or a detector transport coefficient requires the extra realization in G4, rather than following from one-time density evolution alone.

<a id="G1"></a>
## G1 — Gibbs jump models and exact commuting entropy production

Choose d≥2 energies E_a, inverse temperature β>0 and π_a=e^-βE_a/Z. For a≠b let w_ab≥0 denote the rate from a to b, assume π_a w_ab=π_b w_ba, and that the undirected positive-rate graph is connected. Set L_ab=√w_ab |b⟩⟨a| and H=ΣE_a|a⟩⟨a|. With r_a=Σ_(b≠a)w_ab, direct matrix multiplication gives

p_a'=Σ_(b≠a)(p_b w_ba-p_a w_ab),
ρ_ab'=[-i(E_a-E_b)/ℏ-(r_a+r_b)/2]ρ_ab  (a≠b).

The diagonal observable restriction is Wf(a)=Σ_b w_ab(f(b)-f(a)); its π inner product has Dirichlet form -⟨Wf,f⟩_π=(1/2)Σ_ab π_a w_ab|f(b)-f(a)|², by pairing a,b and detailed balance. Off-diagonal matrix units are orthogonal in the σ pairing, with norm squared π_b for |a⟩⟨b|, and D acts on each by the real scalar -(r_a+r_b)/2. Diagonal/off-diagonal spaces are orthogonal. These facts prove G0's self-adjoint D assumption. Connectedness forces the diagonal kernel to constants; each r_a>0, so the other kernel is zero. Therefore this class has the genuine faithful Gibbs stationary state, positive gap and all G0 relaxation/integral conclusions.

For diagonal initial states the quantum entropy relative to σ is exactly the classical KL functional K(p|π)=Σ_a p_a log(p_a/π_a). For positive p put u_a=p_a/π_a and c_ab=π_a w_ab=c_ba. Conservation Σp_a'=0 and pairing the derivative give

K'=-(1/2)Σ_ab c_ab(u_a-u_b)(log u_a-log u_b)≤0.

Each term is nonnegative because log is increasing. Equality holds precisely when u is constant on every edge, hence p=π by connectedness and normalization. If some initial p_a=0, positivity for every t>0 follows directly from the uniformization formula e^{tW}=e^-λtΣ_n(λt)^n P^n/n!, with λ>max r_a and P=I+W/λ a stochastic matrix; any two states have a finite positive path. Apply the derivative at t>0 and continuity of x log x at zero for monotonicity including the initial time. This supplies its own full finite-chain proof; no general noncommuting Umegaki DPI/Spohn theorem is asserted.

<a id="G2"></a>
## G2 — open-model response with explicit bath convention

For a C3 finite generator L_0 with stationary σ and real continuous h, adopt the time-dependent effective generator L_ε(t)=L_0+(iεh(t)/ℏ)[B,·], B=B*. The dissipator is **held fixed**. C3 proves its CPTP propagator; finite Volterra iteration proves a differentiable ε dependence with a factorial O(ε²) remainder on every finite time slab. Variation of constants gives δρ_t=(i/ℏ)∫_0^t h(s)e^{(t-s)L_0}[B,σ]ds. Pairing with A gives R_AB(t)=(i/ℏ)Trσ[e^{tG}A,B]. If G0's gap holds, the centered observable bound proves absolute integrability of this response and existence of its frequency transform, including zero frequency. Its integral is a resolvent on M_0.

A field-dependent thermal bath would instead introduce a dissipator derivative and possibly an initial-state derivative. Detailed balance of the unperturbed generator alone does not say that the driven fixed-dissipator stationary state is the Gibbs state of H-εhB. Thus neither the closed-unitary spectral FDT in T2 nor the static Gibbs Q2 formula is automatically an identity for this open fixed-bath model.

<a id="G3"></a>
## G3 — exactly solved thermal qubit and finite coefficients

H=ΔZ/2, Δ>0, ω=Δ/ℏ. Adopt downward a>0, upward b>0 with b/a=e^-βΔ and jump matrices √a |1⟩⟨0|, √b |0⟩⟨1|. An optional pure-dephasing jump √(γ_φ/2) Z has γ_φ≥0. All rates are s^-1. Put γ_1=a+b, γ_2=(a+b)/2+γ_φ, z_eq=(b-a)/(a+b)=-tanh(βΔ/2). Matrix multiplication of the generator gives

z(t)=z_eq+e^-γ_1t(z(0)-z_eq),
ρ_01(t)=e^{-(γ_2+iω)t}ρ_01(0).

The dual is e^{tG}X=e^-γ_2t(Xcosωt-Ysinωt) and e^{tG}Z=z_eq I+e^-γ_1t(Z-z_eq I). The added dephaser is σ-self-adjoint, negative, with diagonal kernel; the positive-temperature jumps still give ker D=C I. Thus G0 is valid and the solved equations verify it independently.

At Gibbs σ the centered correlations are C_XX(t)=e^-γ_2t(cosωt-i tanh(βΔ/2)sinωt) and C_(Z-z_eq)(Z-z_eq)(t)=(1-z_eq²)e^-γ_1t. Elementary integrations give Γ_X=γ_2/(γ_2²+ω²)>0 and Γ_Z=(1-z_eq²)/γ_1. These have seconds units before observable scaling. Under G2's fixed-bath coupling -hX, R_XX=(2/ℏ)tanh(βΔ/2)e^-γ_2t sinωt. Its zero-frequency susceptibility is 2 tanh(βΔ/2)ω/[ℏ(γ_2²+ω²)], whereas the static Gibbs susceptibility is 2 tanh(βΔ/2)/(ℏω). The mismatch is exact and follows from the specified preparation/bath model, not an algebraic error or an empirical failure of equilibrium quantum mechanics.

<a id="G4"></a>
## G4 — selected monitored path and a genuine transport variance

For the G1 diagonal Hamiltonian/jump model, impose a specific energy-resolved jump instrument and diagonal initial preparation. At an energy-basis state |a⟩, between recorded jumps the nonjump vector evolves with K=-iH/ℏ-(1/2)ΣL*L, hence its norm survival probability is e^-r_a t and its normalized state stays |a⟩. A recorded a→b jump occurs with rate w_ab and maps it to |b⟩. Consequently the selected record is exactly the finite continuous-time Markov chain with generator W, rather than a joint measurement law inferred from noncommuting correlations. The exact checked CSM supplier thm-csm-dk-nonexplosive-ctmc-and-gap (stochastic-response.md D14), retaining full AC, constructs the joint path law via independent marks and exponential holding times from Ionescu–Tulcea; not merely one-time Poisson marginals. Its almost-sure divergent holding-time sums supply a nonexplosive right-continuous path. Nonexplosion is also reflected in uniformization with λ>max r_a uses a Poisson clock of rate λ and a finite stochastic matrix P=I+W/λ, allowing self transitions. The Poisson probabilities sum to one by their exponential series, finitely many clock events occur almost surely on finite intervals since their mean is finite, and the expansion in G1 yields its transition semigroup. Averaging the conditional projections reproduces the diagonal master equation. This realization is a model choice; one-time channels alone do not specify the instrument.

Start the record in π, choose real centered velocities v_a in m/s and define X_T-X_0=∫_0^T v_{a(s)}ds. Ordinary finite-state bounded random variables permit Fubini: E(X_T-X_0)=0 and Var(X_T-X_0)=2∫_0^T(T-s)C_v(s)ds, C_v(s)=Σ_aπ_a v_a(e^{sW}v)_a. G1's connected detailed balance and its finite spectral gap give |C_v(s)|≤e^-γsΣπ_a v_a². Dominated convergence therefore yields Var(X_T-X_0)/(2T)→D=∫C_v=⟨(-W)^-1v,v⟩_π≥0, with m²/s units. The inverse exists on centered functions by the same finite spectral argument as G0. This proves the variance coefficient, not a functional central-limit theorem or a generic quantum hydrodynamic limit.

For G3 with v_a=v0(Z_aa-z_eq), v0 in m/s, the chain has C_v(s)=v0²(1-z_eq²)e^-γ_1s. Thus D=v0²(1-z_eq²)/γ_1, and the exact finite-time variance is 2v0²(1-z_eq²)[T/γ_1-(1-e^-γ_1T)/γ_1²]. The jumps record a selected pointer/velocity process; neither a microscopic continuous quantum position nor an experimental velocity is invented.

<a id="G5"></a>
## G5 — physical premises and honest boundary of the claims

The physical effective-bath postulate is: for the specified prepared finite subsystem, a chosen positive-rate GKSL generator/instrument models the resolved time scale, with primitive H, coupling operators, bath temperature/rates and their calibration uncertainty. The mathematical consistency and consequences are C3–G4. This postulate does not provide a microscopic derivation, exact bath reset, weak-coupling scaling error, or measurement of rates. Distinguish initial independent product preparation C2, isolated unitary evolution T0, processed/dephased states C5 and resolved effective dissipative dynamics. Thermodynamic entropy units multiply -Trρ logρ by k_B, while information relative entropy is dimensionless.

No general infinite-dimensional Lindblad-generator classification, Davies/kinetic Markov limit, general noncommuting entropy-production theorem, generic temporal mixing, infinite-volume dc integrability or hydrodynamic limit is claimed here. These stronger results are neither dependencies nor replacements for a local missing proof. All asserted response/transport branches have their explicit finite-time, bounded-domain, spectral-gap or monitored-chain hypotheses, and all their arguments are supplied above or by the exact checked supplier contracts.

The conditional physical bath-relaxation theorem assigned to G3 assumes G5's effective-bath postulate with G1's primitive connected Gibbs-balanced rates and preparation/observable interpretation, then concludes G0/G3's exponential density relaxation and solved expectation formulas. The conditional record-transport theorem assigned to G4 additionally adopts the energy-resolved jump instrument, initial π law and pointer velocities, then concludes the displayed finite-time variance and D. Their complete deductions are those sections; their physical interpretation/parameter validity are conditional and uncertain. No experiment premise or calibration dataset is present. Background references, not newly retrieved full-proof reading: https://doi.org/10.1007/BF01608499 (Lindblad finite-generator context), https://doi.org/10.1063/1.522979 (Gorini–Kossakowski–Sudarshan context), https://doi.org/10.1103/PhysRevLett.68.580 (quantum-jump modeling context). The finite generator equivalence is completely proved in C3/C4; the chosen bath/instrument is a scoped adopted effective model, never a surrogate for an absent microscopic-limit theorem.
