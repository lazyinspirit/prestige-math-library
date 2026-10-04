# Complete finite stochastic dynamics, response and a Gaussian bath branch

These mathematical models have actual existence and correlation arguments. Adopting a stochastic coarse dynamics for a material is a separate restricted modeling premise with rate/noise parameters; no theorem below replaces an absent Hamiltonian coarse-graining limit with a physical assumption. Full AC is explicitly carried from the inspected Ionescu–Tulcea and TD Brownian suppliers.

<a id="D14"></a>

## D14 — finite continuous-time chain construction and reversible spectrum

Let E={1,…,r}, r≥2, with primitive energy levels e_a∈R in J, β>0 in J^-1, π_a=exp(-βe_a)/Z>0. Give rates w_ab≥0 in s^-1, a≠b, with connected undirected positive-edge graph and detailed balance π_aw_ab=π_bw_ba. Define the observable generator (Lf)_a=Σ_{b≠a}w_ab(f_b-f_a). Rows sum zero; a density row evolves p'=pL. Choose λ>max_aΣ_bw_ab and P=I+L/λ, a stochastic matrix with positive diagonal.

The inspected Ionescu–Tulcea theorem under full AC constructs the initial state, countably many independent uniform marks on (0,1), and a P-chain by row cumulative probabilities, independently of an iid waiting-time sequence τ_j=-log U_j/λ. Each τ has survival exp(-λt). Waiting times sum to infinity almost surely: P(τ_j≥1/λ)=e^-1, and the probability that all waits beyond a fixed index fail that bound is lim_N(1-e^-1)^N=0; a countable union proves infinitely many long waits. Thus the piecewise constant path with jumps at their partial sums is right-continuous with left limits and nonexplosive. For k≥1 the sum of k waits has density λ^k t^{k-1}e^-λt/(k-1)!, proved by convolution induction; integrating it against the survival of the next wait gives P(N(t)=k)=e^-λt(λt)^k/k!, including k=0 separately. The memoryless survival ratio and independent marks give the Markov property and stationary time-homogeneous transition law

P_t=e^{tL}=e^-λt Σ_{k≥0}(λt)^kP^k/k!.

The absolutely convergent finite-matrix power series is stochastic, differentiates to L, and proves uniqueness of the finite forward equation by its integral/linear ODE. Detailed balance makes π invariant and L self-adjoint for ⟨f,g⟩π=Σπ_af_ag_a. Direct summation gives -⟨f,Lf⟩π=(1/2)Σπ_aw_ab(f_b-f_a)²≥0, whose kernel is exactly constants by graph connectivity.

Its finite spectral theorem can also be closed locally: a self-adjoint matrix's Rayleigh quotient attains a maximum on the compact unit sphere; differentiating along every orthogonal tangent gives an eigenvector. Its orthogonal complement is invariant by self-adjointness. Induction gives an orthonormal eigenbasis. Applying this to L yields eigenvalues 0,-γ_1,…,-γ_{r-1}, all γ_j>0. Thus P_t converges exponentially to projection onto constants with gap γ_min; every entry tends to π_b. The actual root finite self-adjoint spectral interface was inspected and this alternative direct proof avoids requiring any unexamined infinite-dimensional spectral theorem. For a one-state model all centered observables vanish and the conclusions reduce trivially, without claiming a positive nonzero spectral gap.

<a id="D15"></a>

## D15 — real entropy decay and almost-sure time averages

For any initial law p, P_t has every entry positive for t>0: for each pair of states a positive graph path contributes one positive term to its Poisson power series. Hence r_a(t)=p_a(t)/π_a>0 at positive times. Define relative information D(p||π)=Σp_a log(p_a/π_a). Differentiation using p'=pL and the symmetric c_ab=π_aw_ab gives

D'(t)=-(1/2)Σc_ab(r_b-r_a)(log r_b-log r_a)≤0.

The zero mass derivative removes the constant part of differentiating p logp. Equality forces all r equal on the connected graph, hence p=π. The proven spectral convergence makes D→0. This is genuine dissipative relative-entropy decay for the specified chain; it is different from the conserved fine entropy of Hamiltonian Liouville transport.

For bounded observable A centered by π, stationary covariance is C(t)=⟨A,P_t A⟩π=Σ_j a_j²e^-γ_jt, hence ∫_0∞|C|dt<∞. D5 gives Var(T^-1∫_0^TA(X_s)ds)≤2Σa_j²/(γ_min T). Choose T_n=n²t0 for a fixed time unit t0>0. Chebyshev and the summable n^-2 bound show, by the tail union argument, convergence to zero almost surely on this subsequence. Between T_n and T_{n+1}, boundedness bounds the average difference by 2∥A∥∞(T_{n+1}-T_n)/T_n→0. Thus continuous-time averages converge almost surely for every bounded observable. Any initial law has bounded density relative to the positive π law on the finite initial state; the full path law has the same density depending only on that initial state. A stationary null event remains null for every preparation. This proves the actual finite-chain ergodic time-average theorem, not merely an L² statement called almost-sure ergodicity.

<a id="D16"></a>

## D16 — exact coarse Markov criterion and an obstruction

For a partition E=⊔C_i, a sufficient and necessary condition for the observed block process to have the same Markov law for **every initial microscopic preparation** is strong lumpability: Σ_{b∈C_j}w_ab is independent of a∈C_i for all j≠i. Then L maps block-constant functions to block-constant functions, inducing the matrix L_bar with those off-diagonal rates and negative row sums. Its powers and exponential give P_t on block observables as exp(tL_bar). Conditioning on the microscopic past and then its coarser history gives the same block transition, since it is independent of the hidden current state. This proves the projected Markov property. Conversely, its derivative at t=0 for a preparation concentrated on a is exactly that outgoing block-rate sum, so independence of the microscopic preparation forces the condition. A special preparation can satisfy weaker conditions; the all-preparations scope is essential.

For an explicit failure take states {1,2,3}, blocks {1,2},{3}, positive rates w_12=w_21=w_23=w_32=1 and w_13=w_31=0. This chain is reversible for the uniform law and irreducible. Starting in state1 has zero instantaneous block exit rate, starting in state2 has rate1, although both have the same observed initial block. The coarse state alone cannot supply a universal Markov generator. This exact obstruction, and D3's entropy reversal example, prevent treating unspecified coarse graining as an automatic stochastic or irreversible limit.

<a id="D17"></a>

## D17 — finite-chain fluctuation/response and Green–Kubo

Take any real state observable B and prescribe a small energy-coupled field by energies e_a-εh(t)B_a, [h]=J/[B], ε dimensionless. Define off-diagonal rates w^ε_ab(t)=w_ab exp[(βεh(t)/2)(B_b-B_a)] and diagonal negative row sums. These specific rates are an explicit model coupling; arbitrary transition-rate responses are not inferred from equilibrium probabilities. For a static field the law π^ε_a∝π_a exp(βεh B_a) satisfies detailed balance by direct multiplication. For a finite smooth control slab the finite matrix ODE has a unique probability evolution: Euler products I+δtL^ε(t) are stochastic for small steps, and their limit is the unique linear ODE solution by its integral estimate.

Starting from π at t=0, derivative δp obeys δp'=δpL+h(t)πK, where K_ab=(β/2)w_ab(B_b-B_a) off diagonal and rows sum zero. Variation of constants proves δp(t)=∫_0^t h(s)πK P_{t-s}ds. Detailed balance gives (πK)_b=-βπ_b(LB)_b. Thus for observable A,

δ⟨A(t)⟩=∫_0^t h(s)R_AB(t-s)ds,   R_AB(u)=-β⟨LB,P_uA⟩π=-β C'_BA(u).

Centering A,B does not change the derivative. A constant step gives βh[C_BA(0)-C_BA(t)], tending to βh Covπ(B,A) by the proved spectral gap. The static derivative of the explicit π^ε gives the same susceptibility. This is a complete finite-model fluctuation-dissipation relation; the rates and coupling remain stated physical assumptions if applied to a bath.

For centered real observables A,B expand in the same eigenbasis: ∫_0∞C_AB(u)du=Σ_j a_jb_j/γ_j=⟨A,(-L)^-1 B⟩π on the centered subspace. D5 then gives the symmetric positive-semidefinite Green–Kubo variance matrix for time-integrated observables. The inverse, convergence and positivity are proved by these finite sums. This does not assert a central limit theorem, infinite-volume transport existence or mechanical mobility for an unspecified displacement/coupling model.

<a id="D18"></a>

## D18 — actual Gaussian velocity bath, diffusion and Einstein relation

The complete inspected TD L16 supplier constructs OU on a Brownian filtered space with future increments independent of the past, under its explicit AC premise: V_t=e^-γtV0+σ∫_0^t e^-γ(t-s)dB_s, γ>0. It proves the continuous version, pathwise uniqueness, independent Gaussian transition kernel, stationary Gaussian law, covariance and Fokker–Planck equation; white noise is not treated as an ordinary pointwise function. Interpret V as one velocity component (m/s), m>0 as kg, T>0 as K, and adopt σ²=2γk_BT/m, so [σ]=m/s^(3/2). In stationary preparation V0 is independent of Brownian increments and N(0,k_BT/m). Then C_VV(t)=(k_BT/m)e^-γ|t|.

Add a prescribed smooth mechanical force F(t) in N by dV=-γVdt+F(t)dt/m+σdB. Subtracting the unforced solution and integrating the deterministic linear equation gives δE V_t=(1/m)∫_0^t e^-γ(t-s)F(s)ds. Thus its response kernel is (1/m)e^-γu=β C_VV(u). Define displacement X_T-X0=∫_0^TV_sds. D5 and an elementary exponential integral give

Var(X_T-X0)=2(k_BT/m)[T/γ-(1-e^-γT)/γ²],  D=lim Var(X_T-X0)/(2T)=k_BT/(mγ).

For constant F, lim E V_t=F/(mγ); the model mobility is μ=1/(mγ), giving D=μk_BT. This Einstein relation is deduced for the specified Langevin bath and force coupling from its adopted thermal-noise normalization; it is not derived for every mechanical system from equilibrium thermodynamics alone. Finite Riemann sums of the stationary Gaussian V are Gaussian, and their L² limit is the ordinary time integral (continuous covariance controls the sum errors). Characteristic functions pass to that limit, so the centered X_T is Gaussian and [X_T-X0-E(X_T-X0)]/sqrt(T) converges in distribution to N(0,2D). No functional path limit or nonlinear multiplicative-noise SDE theorem is asserted.

<a id="D19"></a>

## D19 — retained scope of harder limits

The proved D9 limit is smooth bounded-Lipschitz mean field on a periodic finite-volume model with N^-1 interaction scaling. D10–D12 is an independently specified homogeneous cutoff collision equation with actual global finite-energy and smooth-mixture solutions. Neither uses a hard-sphere configuration boundary, Boltzmann–Grad Nε² scaling, recollision expansion or a uniform hydrodynamic estimate. No Lanford-type theorem, all-time hard-sphere Boltzmann derivation, general Euler/Navier–Stokes kinetic limit, generic Hamiltonian ergodicity or universal irreversible entropy law is asserted as a supplier. Those distinct regimes would need their exact theorem/data/topology/time restrictions and complete checked arguments; their absence is not relabeled molecular chaos, a physical postulate or a proved formal approximation. This is an explicit disposition of unclaimed stronger theories, not an unresolved prerequisite of any result above. Turbulence and global smooth three-dimensional Navier–Stokes remain governed by their actual known-open/model-dependent status.
