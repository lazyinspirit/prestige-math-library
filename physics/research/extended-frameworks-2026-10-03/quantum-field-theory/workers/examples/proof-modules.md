# Exact regulated examples and formal QFT/QED coefficient calculations

Research2026-10-04. Mathematical modules below have only specified functions, matrices, integrals, Hilbert spaces and equation hypotheses. Physical interpretations/postulates and the real experimental report are separate. No continuum interacting four-dimensional QED Hilbert space, analytic S-matrix, LSZ existence, cutoff removal or perturbative convergence is asserted. Sources supply provenance, never a replacement for these complete arguments. Inherited countable choice is stated where the actual Fourier/L² supplier uses it.

<a id="qx00"></a>

## QX00 — Conventions, spaces and quantities

Use geometric η=diag(−1,1,1,1), x0=ct [m]. For algebraic slash/phase space use explicitly h=−η=diag(1,−1,−1,−1), not a second physical spacetime. Standard matrices γ0 are Hermitian, γi anti-Hermitian and {γa,γb}=2h^{ab}=−2η^{ab}. For an energy four-vector p=(E,c p_phys), each component has J and p² means h(p,p); masses in these modules M=mc² have J, positive-energy shell E=sqrt(|p_space|²+M²), with s=(p1+p2)² in J². Natural momentum-coordinate quantities divide these vectors/masses by ℏc, giving m⁻¹; physical cross sections restore (ℏc)²/s. The common field convention instead uses μ=mc/ℏ [m⁻¹], scalar field L⁻¹, Dirac field L⁻³/². These are compatible under M=ℏcμ.

In SI e>0 [C], α=e²/(4πε0ℏc), ε0=(μ0c²)⁻¹, and g=e sqrt(μ0c/ℏ)=sqrt(4πα) is dimensionless. The symbol g below is this coupling, not the metric or electron gyromagnetic factor. The common gauge data is D_a=∂a−i q A_a/ℏ, A_lower=(−φ/c,A_space), ψ→exp(iqχ/ℏ)ψ,A→A+dχ; A components T m,χ Wb. For the electron q=−e. A_nat=A_SI/sqrt(μ0ℏc), q_nat=q_SI sqrt(μ0c/ℏ). Mass, coupling and normalization/renormalization prescription are model input; propagators, coefficients, rates and fluxes are derived only after a model/rule is supplied. Finite matrices act on C^d with their operator norm. Standard spinor contractions u†v are explicitly second-variable-linear coordinate expressions; the earlier mathematical/NRQM Hilbert pairing is (u,v)=v†u first-linear. Norms, traces and squared amplitudes agree after conjugating the pairing convention. No probability is assigned to an amplitude by mathematics alone.

<a id="qx01"></a>

## QX01 — Bounded regulated evolution, coefficient unitarity and truncation counterexamples

Let H0 and V(t) be Hermitian d×d matrices, V norm-continuous on [0,T], and λ real. Interaction-picture V_I(t)=exp(itH0/ℏ)V(t)exp(−itH0/ℏ) is Hermitian with ||V_I||≤B. Define S_n=(-i/ℏ)^n∫_{0<t_n<...<t_1<T}V_I(t1)...V_I(tn)dt_n...dt1. The simplex volume T^n/n! follows by partitioning the cube into n! orderings (coincidence hyperplanes have zero measure). Hence ||λ^nS_n||≤(|λ|BT/ℏ)^n/n!. Its uniformly norm-convergent series solves the integral equation; differentiating uniform integrated series gives S'=−iλV_I S/ℏ. Iterating a difference equation bounds it by a constant (|λ|BT/ℏ)^n/n! for every n, proving uniqueness. Product differentiation gives (S†S)'=0 and initialI; likewise the reverse solution supplies its inverse, so S is unitary. The tail after orderN is ≤exp(z)z^{N+1}/(N+1)!, z=|λ|BT/ℏ. This reuses the actually read NRQM M14 construction, specialized to finite matrices with no unbounded-domain premise.

Write S=I+iT(λ). Exact unitarity gives i(T−T†)+T†T=0, hence2 Im T=T†T and2 Im T_ii=Σ_f|T_fi|². Since the constructed norm series is convergent, coefficients may be compared: for T=λT1+λ²T2+..., T1=T1† and2 Im T2=T1†T1. These are actual finite-regulator coefficient identities, not a continuum optical theorem. Keeping only nonzero Hermitian λT1 gives S†S=I+λ²T1², so a tree-only truncation is not an exactly unitary S.

For H=g_E σx on C², g_E in J, exp(−itH/ℏ)=cos z I−i sin z σx,z=g_Et/ℏ, by separating even/odd powers and σx²=I. Transition probability under a later Born interpretation is sin²z, survival cos²z. The leading coefficient z² exceeds1 for |z|>1; |sin²z−z²|≤|z|⁴/3 since |sinz−z|≤|z|³/6 and |sinz|≤|z|. Survival has derivative0 at0 and is periodic, so it is not exp(−Γt) for any Γ>0. On an occupation truncation {|0>,...,|N>}, the explicit ladders a_N|n>=sqrt(n)|n−1>,a_N†|n>=sqrt(n+1)|n+1> with a_N†|N>=0 give [a_N,a_N†]=I−(N+1)|N><N|. Thus an exact finite regulator cannot simultaneously retain unmodified CCR on every state; taking traces of a commutator gives the same obstruction.

<a id="qx02"></a>

## QX02 — A rigorous golden-rule kernel, not delta squared

For T>0 set K_T(ω)=T⁻¹|∫₀ᵀexp(iωt)dt|²=4 sin²(ωT/2)/(Tω²), continued as T atω0. It is nonnegative and ∫K_T dω=2π: apply the actually read published Plancherel and L¹/L² agreement to the interval indicator, whose squared norm isT, changing normalized Fourier frequency ν to ω=2πν. This use assumes ACω as those suppliers state. The integral-indicator example was inspected only as corroboration, never as a B-leaf supplier.

For r>0, K_T≤4/(Tω²) gives ∫_{|ω|>r}K_T dω/(2π)≤4/(πTr). For bounded continuous f at0 let ω_f(r)=sup_{|ω|≤r}|f(ω)−f(0)|. Subtract f(0), split the integral and use its normalized mass1 to obtain |∫K_T f dω/(2π)−f(0)|≤ω_f(r)+8||f||∞/(πTr). Hence convergence to f(0), by first fixing smallr then takingT large; if f is Lipschitz near0, choose r=T⁻1/2 in nondimensional numerical variables for the explicit O(T⁻1/2) bound. With physical T in seconds instead fix ω_*>0 [s⁻1] and take r=ω_*(Tω_*)⁻1/2; the same displayed inequality is dimensionally valid and gives the rate in the dimensionless duration Tω_*. No product δ² is formed.

For a specified bounded transition-density weight w(E) continuous at E0, with units J (state density J⁻¹ times squared matrix element J²), define the second-order coefficient P2(T)=λ²ℏ⁻²∫w(E)|∫₀ᵀexp(i(E−E0)t/ℏ)dt|²dE. Substitution E−E0=ℏω gives P2(T)/T→2πλ²w(E0)/ℏ with the preceding actual error bound for f(ω)=w(E0+ℏω). This is a theorem about that coefficient/integral, not exact long-time probability or exponential decay. Any exact-dynamics approximation additionally needs its actual higher-order remainder on the selected time window; finite-time QX01 bounds do not automatically become uniform as T→∞.

<a id="qx03"></a>

## QX03 — Boundary prescription and oscillator Feynman versus response kernel

PV below means the limit of the integral excluding the symmetric interval |x|≤δ as δ↓0. For φ∈C_c∞(R), lim_{ε↓0}∫φ(x)/(x+iε)dx=PV∫φ(x)/x dx−iπφ(0). To prove the real part, subtract φ(0)χ(x) with an even compact χ equal1 near0; χx/(x²+ε²) integrates0 by oddness. The remaining numerator is O(x) near0, so dominated convergence applies to x[φ−φ(0)χ]/(x²+ε²), giving the principal value. For the imaginary part, ε/(x²+ε²) has integralπ by arctangent and tails outside|x|≤r bounded2ε/r. Inside that interval continuity controls φ−φ0, proving the delta limit. With |φ'|≤M and ||φ||∞ finite, r=sqrt ε in nondimensional numerical coordinates gives imaginary-part error at most πM sqrt ε+4||φ||∞sqrt ε. A minus-iε reverses the delta sign. This is an actual distribution boundary identity, not a pole prescription chosen by words alone.

On the one-mode Fock basis |n>, oscillator H=ℏω(N+1/2),ω>0 [s⁻¹], ladders on the finite span and vacuum|0>, define X=sqrt(ℏ/(2m_oω))(a+a†),m_o>0 [kg]. The actual NRQM diagonal/oscillator/Fock supplier constructs H and this core. Evolution multiplies a by exp(−iωt), so C_F(t)=(m_o/ℏ)<0|T X(t)X(0)|0>=exp(−iω|t|)/(2ω). Its derivative jump at0 is−i, so distributionally (∂t²+ω²)C_F=−iδ. Integrating against test functions separately on the half-lines and integrating by parts verifies exactly this jump term. By contrast G_R(t)=1_{t≥0}sin(ωt)/ω has derivative jump+1 and satisfies the same operator applied to G_R equalsδ, with supportt≥0. C_F is not retarded response, since it is nonzero for t<0.

To verify the frequency prescription without an unchecked contour, transform exp(−ε|t|)C_F(t): its elementary half-line integrals give [1/(ε+i(ω−ν))+1/(ε+i(ω+ν))]/(2ω). Equivalently the expression is i[1/(ν−ω+iε)−1/(ν+ω−iε)]/(2ω), so the just-proved boundary identity fixes the two pole/delta terms separately. As ε↓0 this is the boundary distribution conventionally denoted i/(ν²−ω²+i0); explicitly its denominator is ν²−ω²+2iεω+ε² and numerator tendsi. Convergence of time-side pairing follows domination by a Schwartz test function; continuity of the actual published Schwartz Fourier map transfers convergence to frequency-side distributions. Thus the sign agrees with the computed derivative jump. This fixed-mode calculation supplies no spatial-locality or interacting propagator theorem.

<a id="qx04"></a>

## QX04 — Explicit Clifford trace and spin-completeness prerequisites

Use Dirac-representation γ0=diag(I2,−I2),γi=[[0,σi],[−σi,0]], where σ1=[[0,1],[1,0]],σ2=[[0,−i],[i,0]],σ3=diag(1,−1). Direct multiplication gives σiσj=δijI+iεijkσk, hence the specified Clifford identity. Tr I=4,Trγa=0 by these blocks. Cyclic trace follows by expanding ΣijAijBji. Anticommuting γa across γb gives Trγaγb=4h^{ab}; anticommuting the first of four matrices past the next three and applying cyclicity yields Trγaγbγcγd=4(hab hcd−hac hbd+had hbc). For odd products of one/three matrices, anticommute with γ5=iγ0γ1γ2γ3, an invertible matrix satisfying γ5γa=−γaγ5; cyclicity negates the trace, so it is0. These finite expansions prove all trace identities used below.

For p=(E,p_space),E=sqrt(|p_space|²+M²)>0,M≥0, put β=γ0,αi=γ0γi and H_±=α·p_space±βM. They are Hermitian and square to E²I because the α/β anticommutators cancel cross terms. P_±=(I+H_±/E)/2 are Hermitian projections, each rank2 since their trace is2 (H_± trace0) and a projection's range/kernel split makes its trace its rank. Choose any orthonormal basis of each two-plane and multiply it bysqrt(2E), obtaining u_s from H_+ and v_s from H_−. Then Σu_su_s†=2EP_+,Σv_sv_s†=2EP_−. Multiplying on the right by γ0 and using αiγ0=−γi gives Σu_s bar u_s=/p+M and Σv_s bar v_s=/p−M, where /p=γ0E−γi p_i,bar u=u†γ0. Also (/p−M)u=0,(/p+M)v=0 by multiplying the eigenvalue equations byγ0. This is a complete finite-dimensional construction, including M0 at nonzero momentum; no continuum quantum field is required. Complex conjugation of bar x γa y gives bar y γa x because γ0(γa)†γ0=γa, verified directly. Therefore squared current spin sums reduce to the displayed traces.

<a id="qx05"></a>

## QX05 — Two-body phase space, invariant flux and coefficient definitions

For P=(sqrt s,0),s>(M1+M2)²,M_i≥0, define the two-body measure by (2π)^4δ(P0−E1−E2)δ³(Pspace−k1−k2)∏_i[d³ki/((2π)³2Ei)]. The delta symbols mean successive ordinary integrations: the spatial delta setsk2=−k1; the energy delta is evaluation at its unique positive radial root with derivative inverse. The root k*=sqrt[(s−(M1+M2)²)(s−(M1−M2)²)]/(2sqrt s), obtained by solving E1+E2=sqrt s; differentiation gives d(E1+E2)/dk=k(E1+E2)/(E1E2)>0. Consequently dΦ2=k*/(16π²sqrt s)dΩ, integrating to k*/(4πsqrt s). For equal masses M, β=sqrt(1−4M²/s),dΦ2=β dΩ/(32π²),∫Φ2=β/(8π). This explicit root definition avoids an undefined square of a distribution.

A proper orthochronous h-Lorentz matrix means a real Λ with ΛᵀhΛ=h,detΛ1 and future Λe0. The shell measure d³p/(2E) is actually Lorentz invariant: for a boost along the first axis, p1′=γ(p1−βE), E′=γ(E−βp1), the spatial Jacobian is γ(1−βp1/E)=E′/E; rotations have Jacobian1. Every proper orthochronous h-Lorentz matrix is a boost followed by a spatial rotation: an explicit boost sends its future unit first column(v0,v_space) to e0 using β=|v_space|/v0,γ=v0 (the zero-spatial case is identity), after which orthogonality fixes the remaining map to diag(1,R),detR1. Thus the boost/rotation Jacobian proof covers the group. The four-momentum conservation functional transforms with determinant1; equivalently its spatial/root integrations are the shell restriction of this invariant measure. Ordinary Borel substitutions here and in QX09 use the actual published C¹-change-of-variables supplier and carry its ACω hypothesis. For two incoming positive-shell momenta define invariant flux F=4sqrt[(p1·p2)²−m1²m2²]. In their CM frame p1=(E1,p),p2=(E2,−p); expanding the square gives F=4|p|sqrt s. For equal incoming mass m,F=2sβ_i. The phenomenological coefficient map for a given amplitude is dσ_coeff=(ℏc)²|M_amp|²dΦ2/F, averaged over independently specified initial spin probabilities and summed over final spins; divide by2! for indistinguishable final particles integrated over the full labelled sphere. Thus dσ/dΩ=(ℏc)²|M_amp|²(k*/|p|)/(64π²s), with no identical factor unless specified. This is a mathematical definition/calculation of a coefficient. Its use as a physical perturbative rate rule is separately adopted, without presuming a constructed continuum S-matrix.

For a parent at rest with energy M0>0 the similarly defined rate coefficient is Γ_coeff=|M_amp|²∫dΦ2/(2ℏ M0), with the final symmetry factor. Units are s⁻¹; an energy width is ℏΓ_coeff in J. A scalar cubic constant amplitude G_E [J] for a parent→two identical daughters of mass-energy m<M0/2 gives Γ_coeff=G_E²sqrt(1−4m²/M0²)/(32πℏ M0). Distinguishable daughters remove the factor1/2. No exponential survival follows: if an additional exponential lifetime model is assumed, its mean life is1/Γ and half-life ln2/Γ. QX01 supplies an exact regulated counterexample to inferring that lifetime model from a coefficient alone.

<a id="qx06"></a>

## QX06 — Full-mass unpolarized tree annihilation and Ward check

For p1,p2 initial electron/positron shells m, k1,k2 final distinct muon/antimuon shells M, common P=p1+p2=k1+k2,s=P²>4max(m²,M²), define the formal single-photon tree amplitude M_amp=(g²/s)[bar v(p2)γa u(p1)][bar u(k1)γ_a v(k2)]. Assume uniform incoherent initial spin weights1/4. QX04 completeness/conjugation gives L_e^{ab}=(1/4)Tr[(/p2−m)γa(/p1+m)γb]=p2^ap1^b+p2^bp1^a−(s/2)h^{ab}, since p1·p2+m²=s/2. Likewise L_mu,ab=4[k1_a k2_b+k1_b k2_a−(s/2)h_ab]. Odd trace terms vanish and the ±mass product has the displayed sign. Their contraction is 4{2[(p2·k1)(p1·k2)+(p2·k2)(p1·k1)]+s(m²+M²)}: the two cross-metric terms are−s(p1·p2+k1·k2), while the metric-metric term is+s², leaving+s(m²+M²).

In CM take initial |p|=sqrt s β_e/2,final|k|=sqrt s β_mu/2,β_e=sqrt(1−4m²/s),β_mu=sqrt(1−4M²/s),and θ between p1 andk1. The dot products are s/4±|p||k|cosθ, so the averaged squared amplitude is g⁴[3−β_e²−β_mu²+β_e²β_mu²cos²θ]. QX05 and g²=4πα therefore give

dσ_coeff/dΩ=α²(ℏc)² β_mu[3−β_e²−β_mu²+β_e²β_mu²cos²θ]/(4sβ_e),

σ_coeff=πα²(ℏc)²(β_mu/β_e)[3−β_e²−β_mu²+β_e²β_mu²/3]/s,

using ∫dΩ=4π and∫cos²θdΩ=4π/3, the latter by x=cosθ and∫_{−1}¹x²dx=2/3. If m=0 these reduce to dσ=α²(ℏc)²β_mu[1+cos²θ+(1−β_mu²)sin²θ]/(4s) and σ=4πα²(ℏc)²β_mu(1+2M²/s)/(3s). If both masses0, σ=4πα²(ℏc)²/(3s), isotropic only after angular integration. All formulas are exact algebraic formal-tree coefficients, not exact QED cross sections; no higher-order/IR/threshold resummation error is invented.

For an explicit incoming-mass approximation bound put δ=4m²/s≤1/2. With B0=2−β_mu²+β_mu²cos²θ≥1, the full differential coefficient divided by its m0 value is [B0+δ(1−β_mu²cos²θ)]/[B0sqrt(1−δ)]. It is≥1 and differs by at most4δ: (1−δ)^−1/2−1≤sqrt2 δ and δ/[sqrt(1−δ)B0]≤sqrt2δ, giving2sqrt2δ≤4δ. This bounds only neglect of the initial mass in the tree coefficient, not perturbative or empirical errors.

Ward: P_a bar v(p2)γa u(p1)=bar v(/p1+/p2)u=m bar vu−m bar vu=0; similarly P·J_final=0. Therefore adding any propagator term proportional to P_aP_b changes this amplitude by0. The mass equality in each particle/antiparticle pair and their actual on-shell equations are essential. This finite rational identity agrees with the QED worker's matrix Ward supplier and does not establish regulator-preserving Ward identities at every loop.

<a id="qx07"></a>

## QX07 — Constant scalar tree coefficients and identical-state accounting

For a defined scalar quartic tree amplitude M_amp=−λ,λ real dimensionless, equal initial/final masses m and s>4m², QX05 gives equal radial momenta and no angular dependence. For two identical final bosons on the full labelled sphere divide by2!, obtaining dσ_coeff/dΩ=λ²(ℏc)²/(128π²s) and σ_coeff=λ²(ℏc)²/(32πs). Counting only an unordered hemisphere instead, without the factor1/2, gives the same total because the amplitude is symmetric under θ→π−θ. Applying both conventions would undercount by2; applying neither on the full sphere overcounts by2. Distinguishable final species use the unhalved formula. This coefficient definition does not assert existence of a nonperturbative scalar continuum or exact scattering evolution.

<a id="qx08"></a>

## QX08 — Exact cutoff soft coherent state and logarithmic IR obstruction

In auxiliary h geometry choose prescribed charge-flow current J^a(k)=Σ_iη_i Q_i p_i^a/(p_i·k),with real normalized Q_i,η_i=±1,future massive p_i,E_i>0,|v_i|<1,andΣη_iQ_i=0. For nullk=ω(1,n),ω>0,n∈S², write J=K(n)/ω. The denominator is ωE_i(1−v_i·n)>0, bounded below on the sphere; hence K is bounded and k·J=ΣηQ=0. Choose measurable orthonormal transverse spatial polarizations ε1,ε2,using spherical tangent vectors away from poles and arbitrary values at the measure-zero poles. In a frame with n=e_z, k·K=0 givesK0=Kz, soΣ_r|K·εr|²=−K²≥0.

For cutoffs0<λ<Λ<∞ in photon energy units, define h_λ,r(k)=g[J(k)·εr(k)]1_{λ<ω<Λ} in the one-photon Hilbert space L²(R³,d³k/[(2π)³2ω];C²). Its squared norm is N_λ=C log(Λ/λ), C=g²∫Σ|K·ε|²dΩ/[2(2π)³], finite≥0, since d³k/(2ω)=ωdωdΩ/2. This is an exact integral for the specified current model, not a derivation of an actual QED emission process.

The actually read NRQM Hilbert tensor/symmetric-sector/Fock construction yields F_s(H). Define Ψ_h=exp(−||h||²/2)⊕_{n≥0}h^⊗n/sqrt(n!). The norm-square exponential series proves convergence and normalization. The n-sector squared norm is exp(−N)N^n/n!, and Σn²exp(−N)N^n/n!<∞ by the ratio test, so Ψ lies in D(N). First-linear pairing gives (Ψ_h,Ψ_f)=exp[−(||h||²+||f||²)/2+(h,f)]. An ideal number Born interpretation therefore gives exact Poisson counts and vacuum probability exp(−N_λ) within this explicitly prepared free/regulated coherent state. It is not exact interacting-QED photon statistics. Under the canonical free peer's second-linear pairing the displayed overlap is conjugated; its magnitude and the real nested-current overlaps used here are unchanged. The energy operator is dΓ(ω) in J. Since photon energy on the support is at mostΛ, ||HΨ||≤Λ||NΨ|| proves the state is in its operator domain. Summing the n-sector energy gives mean energy C(Λ−λ), because each sector contributes n times the one-photon energy integral and the remaining factors sum to the exponential normalization.

To map this energy-coordinate model to the canonical positive transverse L²(d³k_length;C³) photon space, set f(k)=sqrt[(ℏc)²/((2π)³2|k|)]Σ_r h_E,r(ℏc k) εr(k); changing energy momenta to ℏc k proves norm preservation and transversality, with f units m³/². Every transverse vector has these two polarization components a.e., giving the inverse. The already read QED Q3/Q8 and free FF2 therefore supply the same positive-space coherent construction and overlap/nonlimit argument; our new content is the specified charge-flow norm/angular coefficient.

When C>0, h_{λ/2}−h_λ occupies a disjoint soft shell of squared norm C log2; the cross pairings are real because the currents/polarizations here are real and nested. Hence ||Ψ_{h_{λ/2}}−Ψ_{h_λ}||²=2[1−exp(−C log2/2)]>0 for everyλ. The same expression is a lower bound if either vector is multiplied by an arbitrary phase, using Re z≤|z|. Thus this family has no Fock-norm or projective-ray limit as λ↓0, although each regulated state exists exactly. This demonstrates an explicit IR obstruction; it is not a universal theorem about all QED charged sectors or detector-inclusive observables.

For one unit charge changing from rest to velocityv e_z,0<v<1, K=(v x/(1−vx),0,0,v/(1−vx)),x=n_z. Then−K²=v²(1−x²)/(1−vx)². Substituting y=1−vx gives ∫_{−1}¹v²(1−x²)/(1−vx)²dx=(2/v)log[(1+v)/(1−v)]−4; its primitive after substitution is [(1−v²)/y+2logy−y]/v. Therefore C=(α/π){v⁻¹log[(1+v)/(1−v)]−2}>0. Positivity also follows from the original positive integrand, excluding the endpoints with zero sinθ. The velocity change is prescribed external current data, not a fully coupled hard scattering solution or a quantum charged-sector construction.

<a id="qx09"></a>

## QX09 — Finite UV coefficient, subtraction scheme and a divergent-series counterexample

For μ>0 [m⁻¹],Λ>0[m⁻¹], define the Euclidean regulated scalar tadpole IΛ=∫_{|k|≤Λ}d⁴k/[(2π)⁴(k²+μ²)]. Its radial measure is2π²r³dr: pair the coordinates into two ordinary polar planes (r1,φ),(r2,ψ),then r1=r cosθ,r2=r sinθ,0<θ<π/2; their Jacobian is r³sinθcosθ, whose angular integral is(2π)²/2=2π². The omitted coordinate axes are Lebesgue-null. Thus the bounded positive integral is

IΛ=[Λ²−μ²log(1+Λ²/μ²)]/(16π²).

Polynomial division r³/(r²+μ²)=r−μ²r/(r²+μ²) proves this antiderivative. For a chosen subtraction scale μ_R>0, the number IΛ−Λ²/(16π²)+μ²log(Λ²/μ_R²)/(16π²) tends μ²log(μ²/μ_R²)/(16π²), by dividing1+Λ²/μ² byΛ². Changing μ_R changes this finite coefficient. This is one actually evaluated regulated integral and subtraction prescription; it is not a full gauge-invariant QED renormalization theorem, convergence of an interacting continuum or proof that every cutoff momentum shift is harmless. For example ∫_{−Λ}^Λ[(x+a)²−x²]dx=2Λa²≠0, so an unadjusted hard-cutoff domain is not translation invariant.

An exact separate toy integral F(λ)=∫₀∞exp(−x)/(1+λx)dx,λ≥0, has formal coefficients(−1)^n n!: integrate the exact finite geometric identity1/(1+λx)=Σ_{n=0}^N(−λx)^n+(−λx)^{N+1}/(1+λx). Integration by parts recursively gives ∫exp(−x)x^n dx=n!, since the exponential-polynomial boundary term vanishes. Its remainder has magnitude≤λ^{N+1}(N+1)!, but for any fixedλ≠0 the coefficient terms eventually increase by ratio|λ|(n+1), so the formal series has zero convergence radius. Existence of every finite coefficient/subtraction therefore does not imply convergence. This is a counterexample, not a claim that this toy integral is QED or proves the actual QED series divergent.

<a id="qx10"></a>

## QX10 — Ideal Penning mode calibration invariant

For a classical linearized apparatus model let r∈R³, r¨=Dr+C r˙,D=−(q/m)K,K real symmetric withTrK0 (harmonic electrostatic quadrupole),and C w=(q/m)w×B for a uniform constant magnetic vectorB. On y=(r,r˙),A=[[0,I],[D,C]]. Matrix multiplication givesTrA²=2TrD+TrC². The cross-product identity C²w=(q/m)²[B(B·w)−|B|²w] givesTrC²=−2(q|B|/m)². If the selected stable linear apparatus has a complete complex eigenbasis with eigenvalues±iω1,±iω2,±iω3,cyclicity of finite trace givesTrA²=−2Σωj². Hence ω_c²=(q|B|/m)²=ω1²+ω2²+ω3²,independent of axes' misalignment or K's ellipticity within these hypotheses. Frequencies ν=ω/(2π) obey the same square identity. The assumed stable-mode/eigenbasis and exactly uniform/linear fields are essential; nonlinear relativity/cavity corrections are not silently proved by this matrix invariant. This closes the ideal calibration algebra used in the reported experiment, while its actual imperfections/corrections remain qualified source apparatus assumptions.

<a id="qx11"></a>

## QX11 — Ratio errors and correlated weighted estimates

For R(a,c)=1+a/c,c>0, deterministic errors |δa|≤εa,|δc|≤εc<c give |R(a+δa,c+δc)−R(a,c)|≤(cεa+|a|εc)/[c(c−εc)] by subtracting the two fractions. Linearized error is δa/c−aδc/c²; Taylor's integral remainder on a compact rectangle c≥c_min>0 is bounded by half the supremum Hessian operator norm times||(δa,δc)||². The Hessian entries areRaa0,Rac=−c⁻²,Rcc=2a c⁻³; these specify an actual bound rather than an unspecified 'error propagation'. For the statistical clauses fix a probability space(Ω,F,P), measurable real random vectors with E||X||²<∞, componentwise expectation as the actual Lebesgue integral and covariance Σij=E[(Xi−EXi)(Xj−EXj)], as in the inspected published expectation/moment definitions. For random errors with zero means and finite covariance, the variance of that linearized error is Σaa/c²+a²Σcc/c⁴−2aΣac/c³. This formula is conditional on the covariance model and is not a theorem that measurement errors are Gaussian/independent.

For X∈R^n with meanμ1 and positive-definite covarianceΣ, any weightsw withw·1=1 give unbiasedw·X and variancewᵀΣw by expanding the finite double sum. Positive definiteness makes Σ invertible because its kernel is0; 1ᵀΣ⁻¹1>0 since it is vᵀΣv for v=Σ⁻¹1≠0. Letw*=Σ⁻¹1/(1ᵀΣ⁻¹1). Forw=w*+v,v·1=0,the cross termvᵀΣw*=v·1/(1ᵀΣ⁻¹1)=0,so variance=(1ᵀΣ⁻¹1)⁻¹+vᵀΣv≥(1ᵀΣ⁻¹1)⁻¹. Thus this is the unique minimum-variance unbiased linear estimate under that known covariance. The proof does not assign the experiment's omitted rawΣ or weights, infer independence, or turn its stated1σ into a posterior probability/coverage theorem.

<a id="qx12"></a>

## QX12 — Minimal Dirac magnetic square and formal Pauli benchmark

Let A:R³→R³ be C∞,B=curlA,q real,m>0 and φ0. On the common invariant core C_c∞(R³;C⁴),πi=−iℏ∂i−qAi and H_D=cα·π+βmc² are actual differential maps. Multiplying the derivatives gives [πi,πj]=iqℏ(∂iAj−∂jAi)=iqℏεijkBk. The explicit QX04 matrices satisfy αiαj=δijI+iεijkΣk,Σ=diag(σ,σ),and βαi+αiβ=0. Therefore

H_D²=m²c⁴I+c²[π²−qℏΣ·B]

on that core: the antisymmetric α product contracts half the π commutator, producing (i/2)εijkΣk iqℏεijℓBℓ=−qℏΣ·B. Every operator product stays on the stated compact-smooth core, so the equality does not assume an everywhere-defined Hamiltonian or an unproved magnetic self-adjoint closure.

As a formal expansion in the single symbol K=π²−qℏΣ·B, sqrt(m²c⁴+c²K)=mc²+K/(2m)+...; this follows by squaring the formal series and comparing its linear coefficient. Its spin term is−(q/m)S·B with S=ℏΣ/2. Matching the explicitly defined magnetic energy−μmag·B and μmag=g_s(q/(2m))S gives g_s=2 at this minimal tree/nonrelativistic coefficient level. The benchmark is formal unless an actual operator representation/low-energy approximation theorem is supplied; it is not a construction of QED radiative corrections, experimental equality g_s=2 or a claim that the magnetic Dirac operator's full spectrum was proved here. No one-loop Schwinger coefficient is asserted: the empirical report's multi-order Standard Model calculation remains separately identified source interpretation.
