# Gravitating equilibrium and statistics: finite models and exact spherical branches

2026-10-04 research. Mathematical modules below take explicit function, measure and geometry hypotheses. Physical interpretations separately adopt the specified Newtonian/relativistic matter, equilibrium preparation, EOS and boundary model. No empirical observations, generic dynamical stability, continuum quantum-gravity theory or universal gravitational thermodynamic limit are asserted.

<a id="GS0"></a>
## GS0. Quantities, phase measures, entropy and geometric scope

Use SI: G>0 in m³/(kg s²), c>0 m/s,k_B>0 J/K, particle masses m_i>0 kg, momentum p in kg m/s, energy H/E/ε_particle in J, length/radius/cutoff in m. Particle count N is dimensionless. A fixed classical action reference h_*>0 in J s normalizes phase measure dq dp/h_*^{3N}; h_* need not be Planck's constant. These constants, geometry, interaction/regulator, EOS and preparation are primitive within the selected model; partition function, Gibbs law, mass function, entropy, response, pressure and temperature parameters are derived constructions. β>0 is inverse energy J^−1; T_K=1/(k_Bβ) is the chosen Killing/bath normalization K. Entropy S is J/K. Shell/volume entropy conventions are declared separately; their finite-system temperatures need not agree.

Relativistic geometry uses −+++ and x⁰=ct, so coordinates x⁰,r have m. Static spherical ds²=−e^{2φ}(dx⁰)²+b^−1dr²+r²γ_S² has dimensionless lapse e^φ,b, dimensionless static unit velocity u=e^−φ∂₀, g(u,u)=−1. Fluid proper energy density ε,p have J/m³, rest number n m^−3, proper entropy density s J/(m³K),T K,chemical potential µ J. Enclosed mass M(r) kg and geometric mass v_geo=GM/c² m are distinct. No singular center is regular matter. GR G0–G4/G6 supplies signed connection/curvature/Bianchi and finite flux calculus; the static Einstein reduction is computed independently in GS4. Classical phase/measure interfaces are the actual CSM finite marks and thermodynamics M17/M27; general CSM extensive-limit hypotheses do not cover gravity. Quantum finite occupation traces use actual QS models-examples M0, not an assumed curved continuum trace.

<a id="GS1"></a>
## GS1. Finite regulated gravitational Gibbs law and proved variational stability

Fix a bounded position box B⊂R³ of positive finite volume, N≥1, softening a>0, and equal m>0. Define measurable phase Γ=B^N×R^{3N} with reference dν=dq dp/(N!h_*^{3N}) and

H_N=∑|p_i|²/(2m)−∑_{i<j}Gm²/√(|q_i−q_j|²+a²).

The potential U is continuous bounded between −Gm²N(N−1)/(2a) and0. Thus for β>0,

0<Z_N(β)=∫e^−βH_Ndν≤e^{βGm²N(N−1)/(2a)}|B|^N(2πm/β)^{3N/2}/(N!h_*^{3N})<∞.

The Gaussian normalization is the actually read TD M17 proof. Positive volume/finite-box Gaussian mass makes Z>0. All fixed energy moments and β derivatives on compact positive intervals are dominated by a polynomial in p times a slower Gaussian, since U is bounded; TD M27's actual dominated-integral proof justifies differentiation. The normalized law p_β=Z^−1e^−βH_N is an actual finite-regulator ensemble. It does not assume ergodic thermalization or a continuum relativistic metric sourced by this Newtonian potential.

Differentiate: ⟨H⟩=−∂βlogZ and ∂β⟨H⟩=−Var(H). Hence at fixed regulator/boundary/interaction,

C_K=d⟨H⟩/dT_K=k_Bβ²Var(H)≥0.

The temperature-independent Hamiltonian hypothesis is essential; a self-consistently changing equilibrium background is not such a fixed Hamiltonian.

A full global variational statement holds. For any probability density p relative toν with ∫|H|p dν<∞ and ∫|p logp|dν<∞, define S(p)=−k_B∫p logp dν (dimensionless reference makes the log meaningful). Let r=p/p_β. The pointwise inequality rlogr−r+1≥0 follows from derivative logr and its minimum0 at1. Integrating against p_β gives D(p||p_β)≥0, equality only p=p_β a.e. Substitution logp_β=−βH−logZ yields

S(p)−k_Bβ⟨H⟩_p≤k_BlogZ,

with equality uniquely at p_β. Among densities of the same average energy as p_β this is the unique entropy maximizer. For bounded u with ∫p_βu=0, p_t=p_β(1+tu), |t|‖u‖∞≤1/2, Taylor of (1+x)log(1+x)−x gives D(p_t||p_β)=t²∫p_βu²/2+O(|t|³‖u‖∞∫p_βu²), using its third derivative bounded on [−1/2,1/2]. This proves strict variational stability in that specified density class. It proves no dynamical attraction, nonlinear Euler/Vlasov stability or generic gravitating-star stability.

The same normalization/variance theorem covers an allowed hard-core position domain (positive measure) with pair −Gm²/r and minimum separation a>0: U is then bounded. Collision/reflecting-wall evolution is separate; no smooth Hamiltonian force across a hard wall is presumed.

<a id="GS2"></a>
## GS2. Point-collapse and ordinary extensive-limit counterexamples

Without a short-distance regulator, even two particles in a bounded box have divergent canonical Z for every β>0. Fix their center well inside B and allow relative r<r₀. The positional factor includes ∫₀^{r₀}r²e^{βGm²/r}dr. On annuli 1/(n+1)<r<1/n after a fixed length rescaling, its contribution is bounded below by a constant n^−4 e^{C n}, which fails to tend0; therefore the integral diverges. A finite box removes evaporation at infinity but not collapse at zero. No normalized Gibbs density exists in this point-particle model.

Softening restores each finite Z but not ordinary extensive stability. Put all N positions in a fixed ball of diameterd>0 contained in B_N, so U_N≤−Gm²N(N−1)/(2√(d²+a²))=−cN(N−1). Its position volume is v^N for a fixed v>0. Integrating Gaussian momenta gives

Z_N≥e^{βcN(N−1)}v^N(2πm/β)^{3N/2}/(N!h_*^{3N}).

Since logN!≤NlogN, logZ_N/N≥βc(N−1)−logN−C_β→∞, even if the outer box volume grows proportionally toN. Consequently F_N/N=−logZ_N/(βN)→−∞ along this family; a finite extensive free-energy density is not supplied by the finite normalization theorem. The all-coincident configuration also shows no lower bound U_N≥−BN with one N-independent B.

Hard-core gravity still has a long-range obstruction. For N=n³ place particles one per small disjoint ball around a cubic grid of spacingd>a+2δ in a box of sideO(n d), so the minimum separation exceedsa and every pair distance is≤C n d. Each pair attraction is≤−Gm²/(Cnd), giving U_N≤−cN^{5/3} on a positional set of volume v^N. The same lower bound then gives logZ_N/N≥βcN^{2/3}−logN−C_β→∞ at this fixed packing density. This is a concrete sequence disproving an automatic extensive limit with the unscaled Newtonian interaction, not a theorem excluding every possible rescaled mean-field or compensated model. Kac scaling, neutrality backgrounds or altered boundary conditions define different models and need their own proofs. Actual CSM superstable/integrably tempered equilibrium limits cannot be imported here: gravity lacks their stated linear stability and integrable tail assumptions.

<a id="GS3"></a>
## GS3. A genuinely regulated microcanonical negative-heat-capacity branch

Use a relative Kepler Hamiltonian h(q,p)=|p|²/(2µ)−A/r, r=|q|, µ>0 kg,A=Gm₁m₂>0 J m, confined to a shell r₀<r<R with r₀>0,R>16r₀. The relative phase measure is dq dp/h_*³; the center-of-mass degree is deliberately not included. This is a finite hard-core/outer-wall classical ensemble. At E=−e<0 require A/R<e≤A/(16r₀), so all classically allowed radii satisfy r≤A/e<R. Accessible phase volume is

Ω(E)=[(4π)(4π/3)(2µ)^{3/2}/h_*³]A³ e^−3/2 J(δ),

J(δ)=∫_δ^1s^{1/2}(1−s)^{3/2}ds, δ=e r₀/A.

Indeed integrating the momentum ball at fixedr gives (4π/3)[2µ(E+A/r)]^{3/2}; substitute r=(A/e)s into its radial position integral. Every boundary/integral is finite because r₀>0 and momentum is bounded there. Ω>0 and differentiable; the formula removes any hidden singular differentiation. An actual energy-shell probability is also defined, not inferred from counting alone. For r₀<r<A/e set p_*(r,E)=√[2µ(E+A/r)]. Push forward the finite measure [µp_*(r,E)/h_*³]dq dσ(u), u∈S², under(q,u)↦(q,p_*u), and divide by ω(E)=Ω′(E). Its total is ω(E): differentiate the fixed-domain momentum-ball factor (E+A/r)_+^{3/2}; its derivative (3/2)(E+A/r)_+^{1/2} is uniformly bounded on the finite r₀≤r≤R domain near the stated E, so dominated differentiation gives exactly4πµp_* per position. The resulting law is positive normalized and supported on H=E. The outer p_*0 set contributes no measure.

Adopt Gibbs-volume microcanonical entropy S_G=k_BlogΩ (Ω dimensionless under the reference); define 1/T_G=dS_G/dE and C_G=dE/dT_G on the resulting branch. This is an explicit entropy/preparation convention, not a universal identification of all shell temperatures.

Put z(δ)=δ^{3/2}(1−δ)^{3/2}/J(δ), B(δ)=3/2+z. Differentiating the explicit Ω gives T_G=e/[k_BB(δ)] and

C_G=−k_B B(δ)²/[B(δ)−δB′(δ)].

For 0<δ≤1/16 the denominator is strictly positive. To prove it without an unevaluated special integral, the interval[1/4,1/2] lies inside[δ,1], and on it s^{1/2}≥1/2,(1−s)^{3/2}≥1/4. Thus J(δ)≥1/32. Since δ^{3/2}≤1/64, 0<z≤1/2. Since δJ′=−δ^{3/2}(1−δ)^{3/2}, direct product/quotient differentiation gives δz′=(3/2)z(1−2δ)/(1−δ)+z²≤(3/2)z+z². Therefore B−δB′≥3/2−z/2−z²≥1>0. Hence C_G<0 throughout this actual regulated branch, while its ordinary relative-shell canonical preparation is finite and has nonnegative C_K by GS3a. They cannot have identical temperature/energy response curves there; negative heat capacity does not contradict canonical variance positivity.

In the mathematical unregulated bound-energy model r₀0,R∞, J0 is constant and Ω(E)∝e^−3/2, so T_G=−2E/(3k_B),C_G=−3k_B/2. Its density-of-states entropy S_B=k_Blog[Ω′(E)ΔE] with fixed ΔE>0 instead gives T_B=−2E/(5k_B),C_B=−5k_B/2. This finite-degree difference illustrates dependence on the declared entropy convention, not a claim that both are the same operational thermometer. The regulated negative branch above does not rely on the point singularity or a divergent canonical ensemble.

For physical Newtonian applicability choose a stated δ_NR≪1 with2A/(µr₀c²)≤δ_NR. Every accessible relative speed obeys |p/µ|²/c²≤2A/(µr₀c²)≤δ_NR, and the Newtonian potential scale A/(µr₀c²) is likewise small. Temperature is the stated ensemble entropy derivative, not an observation or proof of thermalization. General relativistic self-gravitation is treated separately in GS4–GS7.

<a id="GS3a"></a>
## GS3a. Complete canonical law for the same relative-shell Hamiltonian

For precisely the GS3 Hamiltonian h=|p|²/(2µ)+V(q) on Q×R³ with Q={r₀<|q|<R}, dν=dq dp/h_*³ and V=−A/|q|, fix β>0. Here |Q|=(4π/3)(R³−r₀³)>0 and −A/r₀≤V≤−A/R. The actual relative canonical integral obeys

0<|Q|e^{βA/R}(2πµ/β)^{3/2}/h_*³≤Z_rel(β)≤|Q|e^{βA/r₀}(2πµ/β)^{3/2}/h_*³<∞.

The Gaussian factor is TD M17, so p_β=Z_rel^−1 e^−βh is a normalized positive density on this exact six-dimensional relative phase, without adding center-of-mass degrees or identifying it with an N-particle phase. If β∈[β₀,β₁]⊂(0,∞), every nonnegative integer j satisfies |h|^j e^−βh≤C_j(1+|p|^{2j})e^−β₀|p|²/(2µ), since |V|≤A/r₀ and e^−βV≤e^{β₁A/r₀}. This is integrable on Q×R³ by finite |Q| and Gaussian moments; it also dominates each corresponding β derivative. TD M27 gives Z_rel′=−∫h e^−βh, Z_rel″=∫h² e^−βh, and differentiability of the normalized mean by the quotient rule. Thus ⟨h⟩=−∂βlogZ_rel and ∂β⟨h⟩=−[⟨h²⟩−⟨h⟩²]. With T_K=1/(k_Bβ), C_K=k_Bβ²Var(h)≥0 for this fixed relative Hamiltonian, reference and shell. This proof closes the exact canonical carrier used to compare the GS3 microcanonical branch; it does not rely on silently substituting a reduced-mass system into GS1's N-particle Hamiltonian. The canonical momentum tail remains an effective nonrelativistic statistical model, whereas GS3's chosen bounded-energy shell has its stated whole-ensemble slow-motion bound.

<a id="GS3b"></a>
## GS3b. Actual fixed-static-background relativistic gas and finite Fermi regulator

Choose a bounded coordinate region B with smooth positive spatial metric h_ij and smooth static lapse N(x), both uniformly nondegenerate/bounded on its closure, 0<N₀≤N≤N₁. Metric g=−N²(dx⁰)²+h_ij dx^i dx^j is prescribed; ξ=∂₀,−ξ²=N²,unit observer u=N^−1ξ. In cotangent coordinates the conserved one-particle Killing energy is H_K=N√(m²c⁴+c²h^{ij}p_i p_j). Choosing an orthonormal momentum p_hat has dp_coord=√det h dp_hat, so canonical Liouville dx dp_coord=dV_h dp_hat. This follows from the frame determinant and its inverse transformation, not an invented invariant measure.

For β_K>0 define Z₁=∫_B∫e^−β_K N(x)E(p_hat)dV_h dp_hat/h_*³, E=√(m²c⁴+c²|p_hat|²). It is finite and positive: E≥c|p_hat|, the lapse lower bound gives an integrable e^−β_KN₀c|p| majorant, and finite positive proper volume gives normalization. All polynomial moments/parameter derivatives are dominated on compact β,N bounds by polynomial times a slower radial exponential. For N_particles fixed, Z_N=Z₁^N/N! by positive product integration, giving an actual finite canonical gas on the prescribed geometry. A classical grand fugacityz>0 has Ξ=∑z^NZ₁^N/N!=exp(zZ₁), hence Poisson particle count and local density f(x,p)=z e^−β_KN E/h_*³. This is an adopted ideal-gas preparation with reflecting/confining boundaries; no interacting quantum curved-space trace or Einstein backreaction is implied.

Its local momentum distribution is Maxwell–Jüttner with β_local=β_KN; T_local=T_K/N, T_K=1/(k_Bβ_K). If z=e^{β_Kµ_K}, its local chemical parameter is µ_local=µ_K/N. These parameter identifications match the equilibrium peer's Tolman/Klein statements under its additional physical equilibrium assumptions. Define n=∫f dp, ε=∫E f dp,P=(1/3)∫p·∂_pE f dp. Integrate ∂_{p_i}[p_i e^−β_local E] over R³; exponential tails kill every boundary, giving P=n/β_local=nk_BT_local. Direct differentiation in x gives ∂_iP=−(ε+P)∂_ilogN. Thus this actually normalized gas has the exact hydrostatic conservation identity in its fixed static background. Geometry is still input, not a self-consistently solved Einstein equation. If N approaches0 without the bounds, the normalization/domination theorem no longer applies.

An exact finite quantum regulator uses M explicitly supplied one-particle modes with energies E_j=N_j√(m²c⁴+c²|p_j|²),N_j>0. On finite antisymmetric occupation Hilbert space |n₁,…,n_M⟩,n_j0/1, H=∑E_jn_j and numberN=∑n_j are bounded self-adjoint matrices. The actually read QS M0 construction gives Ξ=∏[1+e^−β_K(E_j−µ_K)],normalized diagonal density and occupations [e^{β_K(E_j−µ_K)}+1]^−1. Writing local parameters β_j=β_KN_j,µ_j=µ_K/N_j is an exact finite identity. This is a supplied spectral cutoff model, not proof that arbitrary curved-space Dirac modes have that spectrum, nor a self-gravitating quantum star/thermodynamic limit. Quantum exclusion/preparation are separate physical assumptions; free-mode statistics alone do not establish gravitational stability.

<a id="GS4"></a>
## GS4. Complete static spherical Einstein/fluid reduction to TOV

On r∈J⊂(0,∞), φ,b smooth with b>0, choose g=−e^{2φ}(dx⁰)²+b^−1dr²+r²γ and isotropic rest stress T^a_b=diag(−ε,p,p,p), ε,p smooth. Let A=e^φ. The exhaustive Christoffel types apart from lower symmetry are Γ⁰_0r=A′/A,Γ^r_00=bAA′,Γ^r_rr=−b′/(2b),Γ^r_θθ=−rb,Γ^r_φφ=−rb sin²θ,Γ^θ_rθ=Γ^φ_rφ=1/r,Γ^θ_φφ=−sinθcosθ,Γ^φ_θφ=cotθ. They follow immediately by the diagonal metric derivatives and the actual GR signed formula.

Substitute in Ric_ab=∂_cΓ^c_ab−∂_bΓ^c_ac+Γ^c_cdΓ^d_ab−Γ^c_bdΓ^d_ac and contract. The only mixed Einstein entries are

G⁰_0=−(1−b)/r²+b′/r,

G^r_r=−(1−b)/r²+2bφ′/r,

G^θ_θ=G^φ_φ=b(φ″+φ′²+φ′/r)+(b′/2)(φ′+1/r).

`check-tov.py` independently computes every connection/Ricci/Einstein component for g=diag(−A²,1/b,r²/(1−y²),r²(1−y²)), y=cosθ, using exact rational functions of r,y,A,A′,A″,b,b′,b″ with a formally defined derivative on those jets. It verifies all16 mixed Einstein entries against these expressions and all off-diagonal zeros; the actually run receipt and script hash are `tov-check.json`. This is a finite complete tensor algebra derivation, not a cited named metric, numerical sample or independent acceptance.

Set b=1−2GM(r)/(c²r), with M smooth and b>0. Einstein G^a_b=(8πG/c⁴)T^a_b gives from its00/rr components

M′=4πr²ε/c²,

φ′=[GM/c²+4πG r³p/c⁴]/[r²b].

Directly compute ∇_aT^a_r=p′+(ε+p)φ′: radial/angle connection terms with p cancel and only Γ⁰_0r times ε+p remains; the other conservation components vanish by static diagonal structure. Thus the hydrostatic/TOV equation is

p′=−G(ε+p)[M+4πr³p/c²]/[c²r²(1−2GM/(c²r))].

Conversely these three equations give every Einstein component. Indeed the residual D=G−(8πG/c⁴)T has only equal angular diagonal entries after00/rr vanish. GR G3's actual contracted Bianchi and the just-proved stress conservation imply ∇_aD^a_r=−2D^θ_θ/r=0; r>0 forces the angular residual0. This uses the stated smoothness; no arbitrary weak Einstein system follows. The perfect-fluid isotropy, static geometry and EOS are model assumptions in physical consumers. TOV is not the equilibrium equation of every rotating, anisotropic or dynamical system.

<a id="GS5"></a>
## GS5. Regular-center TOV ODE existence and continuous dependence

Let ε=ε(p)>0 be smooth on an open pressure interval containing p_c>0; fix φ_c real. Write geometric mass GM/c²=r³v(r) and K=4πG/c⁴. Choose δ<p_c with the closed pressure ball p_c±δ inside that interval; let ε_max and L_ε bound ε and its derivative there, V_max=Kε_max/3. For a continuous pressure curve define

v[p](r)=K∫₀¹s²ε(p(rs))ds,

(𝒯p)(r)=p_c−∫₀^r t[ε(p(t))+p(t)][v[p](t)+Kp(t)]/[1−2t²v[p](t)]dt.

Pick R>0 with2R²V_max≤1/2. The denominators are uniformly≥1/2. The displayed integrand divided by t is bounded and Lipschitz in p and v on the compact pressure/mass range; this follows from bounded smooth numerator derivatives and the explicit reciprocal denominator bound. Also ‖v[p]−v[q]‖∞≤KL_ε‖p−q‖∞/3. Hence ‖𝒯p−p_c‖∞≤CR²/2 and ‖𝒯p−𝒯q‖∞≤C′R²‖p−q‖∞/2. Shrink R so the first is≤δ and the second contraction constantL<1.

The continuous closed pressure ball is complete: a sup-norm Cauchy sequence has pointwise real limits, uniform convergence and continuous limit within the ball. Iterating from p≡p_c gives successive errors≤L^n times the first error; their geometric sum converges uniformly to a fixed point, and the Lipschitz bound permits passage through 𝒯. Any two fixed points have norm difference≤L times itself and coincide. Thus this is a full regular-center construction, not applying a nonsingular ODE theorem directly at r0.

The fixed curve has p′=−rF(p,v,r), so p is C¹ with p′0=0. Differentiating the compact integral for v gives v′=K∫₀¹s³ε′(p(rs))p′(rs)ds, hence v′0=0. Repeated compact-integral/FTC differentiation bootstraps p,v to every finite derivative order. Extend the equations to [−R,R]; iteration preserves even p,v since the integrand is t times an even function. Their unique limits are even, and all odd center derivatives vanish. Define φ=φ_c+∫₀^r t[v(t)+Kp(t)]/[1−2t²v(t)]dt; it is likewise smooth even and φ′0=0. The identity r³v=K∫₀^r t²ε(p(t))dt proves M′ exactly, and the other two TOV equations are the defining integrals.

The metric has a regular Cartesian center at least C²: its spatial coefficients are δij+[2v(r)/(1−2r²v(r))]x_ix_j, and g00=−e^{2φ(r)}. For any even C⁴ radial coefficient f, f′(r)/r→f″0 and f″−f′/r=O(r²), so differentiating f(|x|) explicitly gives continuous first/second derivatives at0. Applied to these even coefficients this proves C² metric extension with b0=1 and lapse positive. The smooth field equations off0 extend to0 by continuity of the curvature/stress tensors. No smoothness beyond this proved center class is needed for that conclusion; away from0 all fields are smooth.

On a compact central-data range the same R,L can be used. Subtracting fixed-point equations gives ‖p[p_c]−p[q_c]‖∞≤|p_c−q_c|/(1−L), with the corresponding v/φ bounds by their integral formulas. This is actual local continuous dependence of static solutions, not dynamical star stability. At r>0 the displayed TOV vector field is smooth where b>0 and p remains in the EOS interval; the actual NR E2 contraction/compact continuation argument extends the solution while its data stay in a compact subset of that domain. No theorem that every EOS reaches p0 at finite radius, avoids a horizon or has a globally stable branch is inferred.

<a id="GS6"></a>
## GS6. Fully verified constant-density star and the exact scope of its bound

Choose constant ε₀=ρ₀c²>0 and radius R>0. Put M_R=4πρ₀R³/3, u=2GM_R/(c²R),0<u<8/9, a=√(1−u), B(r)=√(1−u r²/R²). On0≤r≤R define

M(r)=M_R r³/R³,

p(r)=ε₀[B(r)−a]/[3a−B(r)],

e^{φ(r)}=[3a−B(r)]/2, b(r)=B(r)².

All denominators/lapse are positive because3a>1≥B; p≥0,p(R)=0 and center pressure p_c=ε₀(1−a)/(3a−1) is finite. The mass equation is direct. With x=r/R and w=p/ε₀, B_x=−ux/B, one obtains φ_x=ux/[B(3a−B)],w_x=−2aux/[B(3a−B)²], hence w_x=−(1+w)φ_x. Also φ_x=(ux/2)(1+3w)/B² by simplifying its numerator. These are exactly GS4's lapse/TOV equations. The independent rational script checks both identities before using the finite-star interpretation. Therefore every Einstein component is verified, and the algebraic r² coefficients are smooth at the center.

For r≥R set M=M_R,b=1−2GM_R/(c²r), lapse√b, ε=p=0. Directly Mprime0 and φprime=bprime/(2b)=GM_R/(c²r²b), so GS4 verifies every vacuum component; this is the explicit Schwarzschild exterior, with b>0 because r≥R>2GM_R/c². AtR induced metric and φ′ match since p(R)=0; r and lapse have matching first derivatives in the Gaussian radial coordinate ℓ defined by dℓ=dr/√b. In that coordinate g_ℓℓ=1, angular metricr(ℓ)² and g00 have continuous first derivatives and piecewise smooth second derivatives. Thus the matched metric is C¹ piecewise C², whose distributional second derivatives have no delta layer; curvature equations hold with the step density and no distributional surface stress. This is the specifically proved matching statement, not an unproved general junction theorem.

As u↑8/9, p_c diverges and the center lapse tends0; this family loses the finite-pressure positive-lapse regular-center hypotheses. The inequality u<8/9 is proved for this constant-density branch, not asserted as a general Buchdahl theorem without its required isotropy/monotonicity hypotheses. Even within the branch the stronger rest pressure bound p≤ε₀ holds only for u≤3/4, because p_c/ε₀=(1−a)/(3a−1)≤1 iff a≥1/2, and pressure decreases outward. Moreover the incompressible EOS has dε/dp0, so it is not a finite-sound-speed causal transport model; its static Einstein solution does not establish a realistic fluid EOS or nonlinear radial stability.

<a id="GS7"></a>
## GS7. A complete first-variation entropy/TOV connection, not an automatic maximum

Fix R>0 and smooth profiles ε(r),n(r)>0 with b=1−2GM(r)/(c²r) uniformly positive, M(r)=4πc^−2∫₀^r ε(t)t²dt. Let a local C² entropy function s(ε,n) satisfy s_ε=1/T>0,s_n=−µ/T and the Euler identity ε+p=Ts+µn; T,µ,p are its defined smooth state functions on the compact profile range. Define

S=4π∫₀^R s r²b^−1/2dr, N_b=4π∫₀^R n r²b^−1/2dr, E=c²M(R)=4π∫₀^R ε r²dr.

These are explicit functionals on the open positive-b state-profile domain; S,N_b use proper volume, E the Einstein mass integral. That gravitational constraint is an input. Entropy alone is not being used to derive every Einstein equation or choose a quantum-gravity theory.

Consider compactly supported variations of independent ε,n in(0,R). Their integral derivatives pass through by uniform bounds on b and the compact state range. Since δb^−1/2=(4πG/c⁴r)b^−3/2∫₀^r t²δε(t)dt, Fubini on the finite bounded region gives the variation of L=S+αN_b−β_S E as

δL=4π∫₀^R r²{b^−1/2(α−µ/T)δn+[b^−1/2/T+K∫_r^R t(s+αn)b^−3/2dt−β_S]δε}dr,

where K=4πG/c⁴, α has J/K and β_S K^−1. Compact same-sign test bumps show stationarity iff both bracket coefficients vanish throughout(0,R). The first gives µ/T=α constant. Then s+αn=(ε+p)/T by Euler. Differentiate the second coefficient to obtain

−b T′/T−b′/2=K r(ε+p).

Using b′=−2Krε+2GM/(c²r²) gives T′/T=−[GM/c²+Kr³p]/(r²b). The local first law and Euler imply dp=s dT+n dµ by differentiation; µ/T constant therefore gives p′=(ε+p)T′/T, exactly GS4 TOV. Integrating the lapse equation defines N_lapse=e^φ and T N_lapse constant. Choose the explicit boundary clock normalization e^{φ(R)}=√b(R); this is a lapse normalization at the fixed boundary, not an assertion of vacuum matching when p(R) may be nonzero. An exterior vacuum interpretation needs independently supplied p(R)=0/interface or wall stresses, as in GS6. The stationarity integral atR gives β_S=1/[T(R)√b(R)]=1/T_K, and µ_K=N_lapseµ is constant. Thus the variation recovers scoped hydrostatic/Tolman/Klein relations while retaining the Einstein mass constraint and lapse reconstruction assumptions.

Conversely, under the same EOS identities, TOV plus T′/T=−φ′ and constantµ/T, with that boundary normalization, makes the differentiated bracket0 and its boundary value0; integrating back gives stationarity. This is a first-order critical-point equivalence, not proof the critical point is a maximum.

Constrained critical points admit these multipliers here without an unstated infinite-dimensional theorem. The derivative map(δE,δN_b) on compact variations is surjective: a positive δn bump changes N_b but notE; an ε bump changesE and an adjusted multiple of the first bump removes its N_b change. Select those two variations. For any tangent variation with δE=δN_b=0, a small path plus two scalar correcting coefficients keeps E,N_b exactly fixed by the ordinary finite-dimensional implicit theorem, since that2×2 derivative is invertible: apply the inspected smooth Euclidean inverse theorem to the three-variable map(correction₁,correction₂,pathparameter)↦(E-change,N_b-change,pathparameter), whose block Jacobian is invertible. The correcting functions have zero first derivative for a tangent variation. The actual published Euclidean inverse/implicit proof is an exact supplier; alternatively its Newton contraction applies to this finite correction map. Differentiating a constrained critical entropy along those paths makes δS vanish on the derivative kernel. Decompose any variation into its kernel part plus the two chosen directions: finite linear algebra gives α,β_S with δL0. No Hahn–Banach or generic variational compactness is hidden. No second-variation sign, existence of an entropy-maximizing profile, or dynamical Einstein/fluid stability follows from this algebra.

<a id="GS8"></a>
## GS8. Actual limited stability of energy exchange with a finite bath

Let S_1(E_1),S_2(E_2) be C² entropies on open energy intervals, S_i′=1/T_i,T_i>0, finite nonzero heat capacities C_i=dE_i/dT_i. At fixed total E_tot, S_tot(x)=S_1(x)+S_2(E_tot−x). A stationary point has T_1=T_2=T and

S_tot″=−T^−2(1/C_1+1/C_2).

This follows by differentiating1/T with respect toE; signs matter for a negative C. A strict negative second derivative yields a strict local entropy maximum by continuity/Taylor, while a strictly positive one yields a minimum. A negative-capacity subsystem with a positive finite bath can therefore be locally stabilized under this *energy-exchange preparation* when C_2<|C_1|; the infinite-capacity-bath limit instead has positive S_tot″ and is unstable in this restricted entropy direction.

This is nonvacuous: choose the GS3 negative branch at someE_1 and its T_G; choose S_2(E)=C_b log[(E−E_0)/(C_bT_ref)]+constant, E>E_0,C_b>0 J/K,T_ref>0 K. Then T_2=(E−E_0)/C_b and C_2=C_b. Pick E_2=E_0+C_bT_G and C_b<|C_G(E_1)|. The displayed derivative is strictly negative for the actual combined entropy. No bath has been fabricated as empirical data; it is an explicitly selected model.

For a separately adopted effective dynamics x′=L S_tot′(x), L>0 in J K/s, the entropy obeys dS_tot/dt=L(S_tot′)²≥0. Near a strict maximum choose S_tot″≤−a<0; the mean-value integral gives (x−x_*)S_tot′(x)≤−a(x−x_*)². Consequently d|x−x_*|²/dt≤−2La|x−x_*|², so |x−x_*|≤e^−Lat|x(0)−x_*|. The vector field points inward at the small interval endpoints; the exact NR E2 contraction/compact continuation proof supplies its actual all-forward local-basin solution. This proves asymptotic stability for this specified one-dimensional exchange model. It is not a causal constitutive transport law, an Einstein evolution theorem or generic self-gravitating stability.
