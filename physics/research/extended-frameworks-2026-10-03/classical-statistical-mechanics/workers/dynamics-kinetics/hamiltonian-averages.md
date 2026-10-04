# Hamiltonian distributions, averages and exact response

Research mathematics and explicitly conditional physical interpretations. Smooth means C∞; manifolds are finite-dimensional Hausdorff second-countable without boundary. Adopt full AC where the reused measure/process suppliers explicitly require it; no physics premise supplies mathematics. SI: q in m, p in kg m/s, H in J, t in s, k_B in J/K and β=1/(k_BT) in J^-1 for a selected positive temperature. A positive reference action a0 in J s makes phase volume dimensionless; it is a normalization choice and does not constitute quantization. Model parameters m,H, prepared probability law and any coupling are primitive within the selected model; observables, ensemble expectations, correlations, transport coefficients and information entropies below are derived.

<a id="D0"></a>

## D0 — precise phase and flow data

A symplectic phase space is a smooth 2n-manifold (M,ω) with smooth closed nondegenerate two-form; on T*Q its intrinsic tautological form θ pairs a covector with projected displacement, ω=-dθ, and canonical coordinates give ω=Σdq^i∧dp_i. The inspected root Hamiltonian convention is i_XHω=dH, {F,G}=X_G F. A local flow Φ_t solves z'=X_H(z), on its actual maximal open time/state domain. For ensemble and recurrence claims below require an explicitly invariant Borel set R on which all real times exist. Bounded positions alone do not guarantee that completeness. Liouville volume is Ω=ω^n/n! in its canonical orientation and m0=Ω/a0^n as a positive measure. Probability densities are with respect to the declared reference measure, not undefined δ-functions.

The actual root symplectic-flow and volume proofs were read: Cartan gives L_XHω=d²H=0, hence Φ_t*ω=ω on its domain; pullback of wedges gives Φ_t*Ω=Ω. In a canonical chart the same statement follows from the variational equation Y'=J Hess(H)Y and (Y^T JY)'=0, detY=1 by continuity. Change of variables therefore preserves m0 on R. H is conserved since dH(X_H)=ω(X_H,X_H)=0. Any finite normalizable density w(H)dm0 defines an invariant probability; in particular Z=∫_R exp(-βH)dm0 in (0,∞) gives canonical probability. Its existence is a separate integrability condition.

For regular compact energy bands in an open Euclidean phase chart, the actual TD L20 supplier gives the shell probability dA_E/|∇H| divided by its finite positive total. Exact hypotheses are C² H, nonzero ∇H on the band, and compact H^-1(K) for each compact energy interval K; full-band smooth volume-preserving flow must preserve H. Its chart/coarea and continuity proof establishes invariance for each regular E, not just almost every E. Singular/critical or infinite shells require another theorem; δ(H-E) without these conditions is not a measure definition.

<a id="D1"></a>

## D1 — Liouville transport and fine entropy

Let ρ0≥0 be an m0-density of total one. On the complete invariant domain put ρt=ρ0∘Φ_-t. Change of variables proves normalization and, for every Borel observable with required integrability, ∫Aρt dm0=∫A∘Φ_t ρ0 dm0. For smooth densities this is ∂tρ+X_Hρ=0, or ∂tρ+{ρ,H}=0; general integrable densities give its distributional transport form by testing against compact smooth time/phase functions and differentiating the characteristic identity. On finite time slabs the test support and flow images are compact, so bounded derivatives and dominated convergence justify differentiation. This proof does not require pointwise differentiability of ρ0.

If ∫|ρ0 logρ0|dm0<∞, with 0log0=0, the reference Gibbs information entropy S_G=-k_B∫ρt logρt dm0 is constant by the same substitution. Thus Hamiltonian volume preservation does not itself prove entropy increase or equilibration. The adopted identification of this ensemble functional with a thermodynamic entropy in a chosen regime is an additional physical bridge, not part of this transport theorem.

<a id="D2"></a>

## D2 — recurrence and an actual conditional time-average theorem

For T=Φ_Δ with Δ>0 and a preserved finite measure μ on R, measurable E has a null no-return set W=E\⋃_{j≥1}T^-jE. Indeed the sets T^-jW are disjoint (membership at two times contradicts no return), have equal measure, and the union of their first N levels has measure Nμ(W)≤μ(R); thus μ(W)=0. A point with finitely many returns has a last return in W and belongs to the null union of its inverse levels. Hence almost every point of E returns infinitely often. This is the complete actual inspected root recurrence/no-return proof. A probability measure on an infinite phase domain can meet this finite-measure hypothesis; unnormalized infinite Liouville volume cannot.

Ergodicity of a specified probability-preserving map T means every measurable E with T^-1E=E modulo μ-null sets has μ(E) equal to zero or one. Recurrence does not imply this. The exact published `thm-birkhoff-ergodic-probability-case-for-strong-laws` and its maximal-inequality proof were read: for real f∈L¹(μ), if T is ergodic, N^-1Σ_{j<N}f(T^jz) tends almost surely and in L¹ to ∫f dμ. Briefly, center h=f-∫f, the limsup of A_Nh is invariant, and on D={limsup A_Nh>ε} the maximal inequality applied to (h-ε)1_D gives ∫_D(h-ε)≥0. Ergodicity rules out μ(D)=1 because that integral is -ε. Apply to h and -h for countably many rational ε; bounded truncations and ∥A_N(f-f_K)∥1≤∥f-f_K∥1 give L¹ convergence. The maximal inequality itself follows from f1_{max S_jf>0}≥M_N-M_N∘T and invariance of the integral. Thus the exact theorem is an inspected proof supplier rather than a source title.

For bounded measurable f and a smooth flow, if the **chosen** time map T=Φ_Δ is ergodic, define F(z)=Δ^-1∫_0^Δ f(Φ_s z)ds. Measurability follows from the joint measurable flow, boundedness permits Fubini, and ∫F=∫f by invariance. The discrete averages of F are exactly (NΔ)^-1∫_0^{NΔ}f(Φ_s z)ds. Birkhoff plus the bound 2∥f∥∞Δ/T on the last partial interval proves continuous-time convergence to the space mean under this explicit sampled-map hypothesis. A continuous flow can be ergodic while a resonant sampled map is not (a circle rotation of unit period has Φ_1=identity). No theorem about every arbitrary Hamiltonian flow follows from these conditional results.

<a id="D3"></a>

## D3 — concrete failure of generic ergodicity and monotone coarse entropy

Two uncoupled one-dimensional harmonic oscillators with H=Σ[p_i²/(2m_i)+m_iω_i²q_i²/2], m_i,ω_i>0, conserve each individual energy E_i. On a regular compact positive total-energy shell, the set E_1<E_total/2 and its complement each contain a nonempty open shell patch and therefore have positive TD L20 shell measure. That set is invariant for every time map. Thus this explicit recurrent bounded Hamiltonian model is nonergodic relative to its total-energy-shell probability. Volume preservation and finite shell volume do not remove additional integrals.

A coarse observable is a measurable finite partition C_1,…,C_r of phase space, with probabilities p_i(t)=∫_{C_i}ρt dm0. Its Shannon entropy -k_BΣp_i log p_i need not be monotone under reversible transport. On T*S¹ use the periodic position coordinate θ∈R/Z and action coordinate I∈R, ω=dθ∧dI, H=νI with ν>0 in s^-1; flow is θ'=ν,I'=0. On the invariant finite-measure strip I∈[I0,I0+a0], prepare θ uniformly in [0,1/4) and I uniformly in this interval. Partition by the two angular half-circles. Initially the cell law is (1,0), at t=3/(8ν) it is (1/2,1/2), and at t=1/(2ν) it is (0,1). The coarse entropy is therefore 0, k_B log2, 0, although fine entropy is constant. The torus/circle uses its standard periodic atlas, so no single globally real angle is assumed. A time-arrow theorem needs actual dynamical/preparation/closure hypotheses, not just an averaging label.

<a id="D4"></a>

## D4 — exact finite-time Hamiltonian linear response

Assume a compact symplectic M without boundary, smooth real H,A,B, β>0 and canonical μ=Z^-1e^-βH dm0. Smooth fields on compact M have complete flows: bounded coordinate fields on finitely many charts and compact-continuation prevent finite endpoint escape. Let h(t) be smooth on a finite slab and perturb H to H-εh(t)B, starting from the **unperturbed** canonical preparation. The model coupling is explicitly primitive; [h]=J/[B], ε dimensionless. The inspected smooth ODE parameter proof justifies differentiating the evolution in ε and varying constants. Its first derivative for expectation is

δ⟨A(t)⟩=∫_0^t h(s)R_AB(t-s)ds,   R_AB(u)=β⟨(X_H B)(0) A(u)⟩_μ.

To verify signs and completeness, the perturbation field is -hX_B; variation of the observable propagated to final time gives -∫h(s)⟨X_B(A∘Φ_{t-s})⟩μ ds by stationarity. Hamiltonian X_B has zero volume divergence, so integration by parts on compact boundaryless M gives ∫ρ X_BA=-∫A X_Bρ. Since X_Bρ=-βρ{H,B}=βρ X_HB, the minus perturbation yields the stated positive response. All derivatives/integrals are bounded on the slab. Also ⟨X_HB⟩=0. For C_BA(u)=⟨(B-⟨B⟩)(0)(A-⟨A⟩)(u)⟩, invariance and integration by parts give C'_BA=-⟨(X_HB)(0)A(u)⟩. A constant step h therefore has response βh[C_BA(0)-C_BA(t)]. Only if that correlation tends to zero does it approach the static susceptibility βh Cov(B,A). Noncompact particle phase spaces require explicit boundary/tail/parameter domination hypotheses; this compact theorem is not silently applied there.

<a id="D5"></a>

## D5 — Green–Kubo variance statement, with actual integrability

Let a stationary process or complete invariant flow have a centered real vector observable V(t) with finite second moments. Assume covariance C_ij(t)=E[V_i(0)V_j(t)] is measurable; on finite slabs Cauchy–Schwarz bounds it and Fubini applies. Joint measurability and E∫_0^T|V(s)|²ds=T E|V(0)|²<∞ give an almost-sure ordinary time integral; Cauchy–Schwarz makes it L². For X(T)=∫_0^T V(s)ds, stationarity gives

Cov(X_i(T),X_j(T))=∫_0^T(T-s)[C_ij(s)+C_ji(s)]ds.

If every C_ij is absolutely integrable on [0,∞), dominated convergence proves Cov(X(T))/(2T)→D, where D_ij=(1/2)∫_0^∞[C_ij+C_ji]ds. The matrix is positive semidefinite because each finite covariance is and testing arbitrary finite vectors passes to the limit. For scalar velocity this is D=∫C(s)ds, with units m²/s. It establishes asymptotic variance growth, not a central limit theorem, mixing or a mechanical response coefficient without a proved coupling relation. Harmonic periodic correlations generally fail this absolute-integrability hypothesis; no divergent integral is relabeled a universal conductivity. The finite Markov and OU branches below satisfy the hypotheses explicitly.
