# Completely positive maps and complete finite Lindblad theory

All results concern finite matrix algebras unless an explicit inherited countable-Kraus construction is mentioned. Matrix spectral/state facts are the actually read finite-state Q0/Q1 suppliers. Physical subsystem/bath/instrument assignments are separate model premises. Operator factors below are bounded matrices; no unbounded generator is inferred from the finite proof.

<a id="C0"></a>
## C0 — maps, ancillas, Choi matrices and Kraus equivalence

For H_in=C^d and H_out=C^e, d,e≥1, a map Φ:M_d(C)→M_e(C) is complex linear. Positive means Φ(X)≥0 whenever X≥0. Completely positive (CP) means id_r⊗Φ is positive on M_r⊗M_d for every finite ancillary dimension r. Trace preserving (TP) means TrΦ(X)=TrX for all X. A quantum channel is CPTP. This is a mathematical definition until a preparation/instrument/open-system postulate assigns it physical meaning.

Fix matrix units E_ij on the input and Ω=Σ_i|i⟩⊗|i⟩. The Choi matrix is J(Φ)=Σ_ij E_ij⊗Φ(E_ij) on C^d⊗C^e. If Φ is CP, J=(id_d⊗Φ)(|Ω⟩⟨Ω|)≥0. Conversely diagonalize a positive J as Σ_a|v_a⟩⟨v_a|, absorbing square-root eigenvalues into v_a. Define K_a:C^d→C^e by v_a=Σ_i|i⟩⊗K_a|i⟩. Comparing each (i,j) input block gives Φ(E_ij)=Σ_aK_aE_ijK_a*, hence Φ(X)=Σ_aK_a X K_a*. Every amplification is then the sum of positive conjugations by I_r⊗K_a, proving CP. This is the complete Choi/Kraus equivalence, with at most de Kraus terms, not a citation-only representation claim. TP is equivalent to Σ_aK_a*K_a=I by finite cyclicity and matrix-unit trace tests. Unitality of Φ itself is the different condition Σ_aK_aK_a*=I_out.

Composition has Kraus products; finite convex sums multiply Kraus terms by square-root weights. Operator-norm limits of CP maps are CP because their Choi matrices converge to a positive matrix (test every quadratic form); TP passes through the linear trace equations. The dual Φ*(A)=ΣK_a*AK_a satisfies TrΦ(X)A=TrXΦ*(A); it is unital CP for a TP Φ, irrespective of whether the Schrödinger Φ is unital.

<a id="C1"></a>
## C1 — genuine contraction and a positive-not-CP counterexample

For any unital CP Ψ, positivity of the 2×2 matrix block (A*A,A*;A,I), its amplification and the quadratic test for the bottom identity give Ψ(A)*Ψ(A)≤Ψ(A*A). Order preservation gives Ψ(A*A)≤∥A∥²I, so ∥Ψ(A)∥≤∥A∥. Finite trace norm has dual formula ∥X∥1=sup_{∥A∥≤1}|TrAX|: To supply that decomposition, diagonalize X*X with eigenvectors v_j and eigenvalues s_j²≥0. For s_j>0, u_j=Xv_j/s_j are orthonormal, since their pairwise inner products are the corresponding X*X matrix entries divided by s_js_k. Thus X=Σ_(s_j>0)s_j|u_j⟩⟨v_j|; the null eigenspace contributes zero. Each pairing is bounded by Σs_j∥A∥. Extend the two orthonormal lists to bases and choose a unitary A mapping every u_j to v_j; then TrAX=Σs_j, attaining the bound. Applying the dual Φ* contraction proves ∥Φ(X)∥1≤∥X∥1 for every X, and in particular trace distance (1/2)∥ρ-σ∥1 cannot increase under a common channel. This is a channel comparison result, not a time-dependent monotonicity law for an arbitrary non-Markov family of channels.

Transpose T(X)=X^T is positive and TP: if X=YY* then X^T=conj(Y)conj(Y)*≥0. But J(T)=ΣE_ij⊗E_ji is the flip, with eigenvalue -1 on the antisymmetric vector (|01⟩-|10⟩)/sqrt2 for d=2. Equivalently a Bell projection partially transposed has eigenvalue -1/2. Thus positivity on system states alone is insufficient for an ancillary-consistent channel. This fully checked finite example does not rely on an unproved infinite Stinespring theorem.

<a id="C2"></a>
## C2 — exact reduced unitary channels and preparation restrictions

For finite system/bath H_S,H_E, a specified independent initial preparation ρ⊗σ_E and unitary U on their tensor product, define Φ(ρ)=Tr_E[U(ρ⊗σ_E)U*]. Partial trace is the actual NRQM M3 entry sum characterized by Tr(Tr_E R)A=TrR(A⊗I). If σ_E=Σ_kp_k|k⟩⟨k| and {|j⟩} is an output bath basis, K_jk=sqrt(p_k)(I⊗⟨j|)U(I⊗|k⟩). Expansion gives the above Kraus formula and Σ_jkK_jk*K_jk=Σ_kp_k(I⊗⟨k|)U*U(I⊗|k⟩)=I. This proves the reduced map CPTP for this exact product preparation. The earlier NRQM M9 supplier supplies an actual countable/separable extension under strong completeness and trace-norm summability, if that selected construction is consumed; the finite Choi equivalence is not asserted as classification of every infinite map.

Product preparation is essential to this state-only formula. The Bell states (|00⟩±|11⟩)/sqrt2 have the same system marginal I/2, even the same bath marginal. A controlled-not unitary |a,b⟩→|a,a xor b⟩ sends them to |±⟩⊗|0⟩, with distinct system outputs. Thus the marginal alone does not determine an evolution for both correlated preparations; an assignment/initial-correlation specification is required. This is not a claim that every separately specified correlated model fails CP.

A channel family from a fixed finite bath need not be a semigroup. Take H_tot=ℏg Z⊗Z, g>0 in s^-1, σ_E=I/2. The bath Z=±1 mixture gives system populations unchanged and coherences multiplied by c(t)=cos(2gt). It has Kraus sqrt((1+c)/2)I and sqrt((1-c)/2)Z, so each time map is CPTP. At t=s=π/(4g), c(t)c(s)=0 while c(t+s)=-1; coherence revives, violating Φ_{t+s}=Φ_tΦ_s. A Markov/effective bath cannot be derived merely by writing a partial trace. Bath resets, scaling and memory estimates would need their own actual theorem.

<a id="C3"></a>
## C3 — full finite GKSL sufficient generator theorem

Given H=H* and finitely many L_a, define Schrödinger generator

L(ρ)=-(i/ℏ)[H,ρ]+Σ_a(L_aρL_a*-(1/2){L_a*L_a,ρ}).

Here {X,Y}=XY+YX is the anticommutator, not a Poisson bracket. [L_a]=s^-1/2, [H]=J, so every term has density/time units. Put K=-iH/ℏ-(1/2)ΣL_a*L_a, N(ρ)=Kρ+ρK*, J(ρ)=ΣL_aρL_a*. Then e^{tN}(ρ)=e^{tK}ρe^{tK*} is CP. Also e^{tJ}=Σ_n t^nJ^n/n! is CP by composition, positive weights and norm limit. In finite map norm, e^{hN}e^{hJ}-e^{h(N+J)}=O(h²): expand the convergent exponential series and bound the tails by their factorial majorants. A telescoping sum of n products, bounded by e^{t(∥N∥+∥J∥)}, shows (e^{tN/n}e^{tJ/n})^n→e^{tL}, with error≤C_t/n. Therefore e^{tL} is CP. TrL(X)=0 by cyclicity; differentiating Tr e^{tL}X proves TP for every t≥0. This supplies a genuine norm-continuous CPTP semigroup and density existence/uniqueness, not a formal differential equation claimed positive by inspection.

For continuous finite-time H(t),L_a(t), use products of their frozen-time exponential channels on partitions. Their uniform matrix coefficient continuity and the integral equation give convergence to the finite linear propagator, by local error/telescoping or Gronwall. Limits are CPTP. This is a proved finite time-dependent model class, with no unbounded-domain or generic weak-coupling conclusion.

<a id="C4"></a>
## C4 — full finite GKSL necessary generator theorem

Let T_t, t≥0, be a norm-continuous semigroup of CPTP maps on M_d, T_0=I. It has a bounded generator without assuming differentiability: for small h>0 let A_h=h^-1∫_0^hT_sds, which is invertible by ∥A_h-I∥<1 and the Neumann series. The semigroup identity T_t A_h=h^-1∫_t^{t+h}T_sds makes T_t differentiable, with derivative T_t(T_h-I)(hA_h)^-1. Thus T_t=e^{tL} for the resulting constant finite matrix L. CP ensures Hermiticity preservation, so J(L)=J(L)*; TP differentiation gives TrL(X)=0.

At t=0, J(I)=|Ω⟩⟨Ω|. For v⊥Ω, positivity of J(T_t) and its derivative gives ⟨v,J(L)v⟩≥0. Let e=Ω/sqrt d, Q=I-|e⟩⟨e|. Then M=QJ(L)Q≥0. Write J(L)=M+|e⟩⟨z|+|z⟩⟨e|+a|e⟩⟨e|, z=QJ(L)e, a real. A positive spectral decomposition M=Σ|vec L_a⟩⟨vec L_a| gives its CP gain map. Choose vec K=z/sqrt d+(a/(2d))Ω. Comparing Choi blocks gives L(X)=ΣL_a X L_a*+KX+XK*. Trace zero forces K+K*+ΣL_a*L_a=0, by testing all matrix units. Therefore K=-(1/2)ΣL_a*L_a-iH/ℏ with Hermitian H=(iℏ/2)(K-K*). Substitution yields exactly C3's generator. This proves finite norm-continuous CPTP semigroups are precisely the finite GKSL class. It is not a theorem for arbitrary unbounded infinite-dimensional generators or an effective Markov limit of every microscopic bath.

<a id="C5"></a>
## C5 — precise entropy statements and their counterexample

Finite pinching Δ(ρ)=Σ_jP_jρP_j is CPTP. If there are r labeled projectors, V=Σ_je^{2πij/r}P_j is unitary and Δ=(1/r)Σ_{k=0}^{r-1}V^k(·)V^-k by the finite geometric sum. The actual finite-state Q3 entropy concavity and unitary invariance therefore prove S(Δρ)≥S(ρ). Degenerate coherences inside each P_j are retained. A nonselective measurement interpretation requires its stated instrument assumption; Cesàro unitary averaging is a different preparation operation.

A CPTP map need not increase von Neumann entropy. For γ>0, amplitude damping toward |1⟩ has K0=diag(e^-γt/2,1), K1=sqrt(1-e^-γt)|1⟩⟨0|. The sum K* K=I verifies the channel; starting from I/2 gives diag(e^-γt/2,1-e^-γt/2), approaching a pure state. Its entropy decreases from k_Blog2 to zero. This is a selected zero-upward-rate example, not the faithful positive-temperature detailed-balance model below. Trace-distance contraction is proved for all channels, but general Umegaki data processing/Spohn entropy production is not inferred from finite Klein inequality; only the explicitly commuting classical KL production branch is used below.
