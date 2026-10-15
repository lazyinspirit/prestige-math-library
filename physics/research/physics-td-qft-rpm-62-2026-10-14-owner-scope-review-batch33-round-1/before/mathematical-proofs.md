# Smooth charged matter, conformastatic geometry and controlled limits

Research commission2026-10-03; written2026-10-04. All sections here have exclusively mathematical hypotheses. None adopts a physical law or asserts an experiment. Physical interpretations require the separate model postulates in physical-models.md. No production item, publication or independent acceptance is claimed. Use the actual inspected GR G0/G1 conventions: smooth oriented time-oriented Hausdorff second-countable four-manifold, signature −+++, Levi–Civita ∇, R^a_bcd∂a=R(∂c,∂d)∂b. Inherited bundle/GR supplier ACω is carried where that supplier is consumed. Tensor calculations themselves use finite coordinate algebra. All finite integrations use GR G4 admitted charts/chains, or explicitly written spherical/one-dimensional integrals.

<a id="ml00"></a>

## ML00 — Formal fields, observers and parameterized equations

On a smooth Lorentz domain let F be a real C² two-form, j a C¹ vector, and Tm a C¹ symmetric contravariant two-tensor. Raise/lower with g, set Q^{ab}=μ⁻¹(F^{ac}F^b_c−g^{ab}F_cdF^{cd}/4), μ>0. Formal Maxwell equations are ∇aF^{ab}=−μj^b and dF=0. The exchange equation is ∇aTm^{ab}=F^b_cj^c. The Einstein algebraic differential equation is G_ab+Λg_ab=κ(Tm_ab+Q_ab), κ>0 and constant Λ. These are definitions of mathematical systems, not physical premises. Smooth classical solution means pointwise equality on the stated domain, with metric smoothness and field differentiability sufficient for each derivative. No distributional products or point currents are defined.

For a future unit n, g(n,n)=−1, define h_n(v)=v+g(n,v)n, rest energy density T_ab n^a n^b and energy-flux vector −T^a_bn^b. A physical four-velocity U has g(U,U)=−c² for c>0. Define E_n^a=cF^a_bn^b and B_n by the usual oriented spatial two-form coefficients; in an oriented orthonormal basis (n,e_i), F_0i=−E_i/c and F_ij=εijkB_k. Thus E_n is orthogonal to n. A potential A exists only where explicitly supplied, F=dA; A→A+dλ changes no F; the gauge scalar λ has Wb=T m² in SI. A chart, a tetrad and an observer congruence are different objects as in GR G0/G2.

SI interpretation, not mathematical premise: x0=ct and all x^a metres, dimensionless g, c m/s, G_N m³/(kg s²), μ=μ0 kg m/C², ε0=(μ0c²)⁻¹, κ=8πG_N/c⁴. F components T, A T m, j A/m², Tm and Q J/m³, ∇T N/m³, rest density ρ kg/m³, rest charge density σ C/m³, q/m C/kg. Parameters g/F as external data or dynamical unknowns are declared separately; matter rest density, EOS, conductivity, G_N and charge-to-mass ratio are independent constitutive/model input. Q, its flux, curvature, force density and proper-time observables are derived by the displayed formulas. μ0 is not asserted an exact experimentally known number in modern SI.

<a id="ml01"></a>

## ML01 — Charged dust balance and advected charge ratio

Let ρ>0, σ be C¹ real fields, U C² future timelike with g(U,U)=−c², Tm^{ab}=ρU^aU^b and j^a=σU^a. By the covariant product rule,

∇aTm^{ab}=U^b∇a(ρU^a)+ρa^b, a^b=U^a∇aU^b.

Norm differentiation gives U_ba^b=0; antisymmetry gives U_bF^b_cj^c=σF_bcU^bU^c=0. Contracting the exchange equation with U_b therefore yields −c²∇a(ρU^a)=0. Subtracting its vanished longitudinal term gives ρa^b=σF^b_cU^c. Conversely continuity and this force law imply the exchange equation by substitution. Thus the stated exchange law is equivalent to mass continuity and a Lorentz-force integral-curve law on positive-density regions. At ρ=0 the division is forbidden and force/current data need separate consistency; U need not be determined there.

Set α=σ/ρ. Under mass continuity, ∇aj^a=ρU^a∂aα. Hence charge continuity is equivalent to U^a∂aα=0. Constant α is sufficient, but a spatially nonconstant ratio transported unchanged along each streamline is also admitted. Along an integral curve dz/dτ=U, the equation is DτU=αF^sharp(U), identical to the actual CS2 external-field ODE when g,F are prescribed. In a coupled system g,F,ρ,U are unknown fields; this identity does not produce their PDE existence from the test-curve ODE theorem.

<a id="ml02"></a>

## ML02 — Perfect-fluid projections and conduction heating

Let ε,p,σ be C¹, U C², g(U,U)=−c², and Tm^{ab}=(ε+p)U^aU^b/c²+pg^{ab}. Define D=U^a∇a, θ=∇aU^a, a^b=DU^b and h^b_c=δ^b_c+U^bU_c/c². Adopt only as a mathematical hypothesis ∇aTm^{ab}=f^b for f^b=F^b_cj^c. Expanding gives U^b[D(ε+p)+(ε+p)θ]/c²+(ε+p)a^b/c²+∂^bp. Contraction with U_b combines −D(ε+p)+Dp to prove

Dε+(ε+p)θ=−U_bf^b.

Applying h removes the first term and fixes a because U·a=0, proving

(ε+p)a^b/c²+h^{ba}∂ap=h^b_cf^c.

Conversely these longitudinal and perpendicular equations imply the full exchange law, since every vector splits uniquely as h(v)−U(U·v)/c². No EOS or fluid evolution existence is obtained from this decomposition.

For j=σU, f·U=0 and the rest energy equation has zero electromagnetic heating term; force becomes σF^sharp(U). For a conducting current j=σU+q with q·U=0, antisymmetry gives −U_bF^b_cq^c=(F_cbU^b)q^c=E_U·q, where E_U^a=F^a_bU^b is the rest-frame electric field (V/m). Thus an independently specified q=χE_U, χ≥0 (S/m), gives heating χ|E_U|²≥0 because the rest-space metric is positive. This Ohmic relation is a separate constitutive mathematical hypothesis in this conditional calculation, not inferred from EM covariance. Thermodynamic identification of ε,p or entropy production additionally requires the earlier local-equilibrium/EOS premises; the purely mechanical energy identity does not supply them.

<a id="ml03"></a>

## ML03 — Electromagnetic and selected matter energy conditions

For Q of ML00, tensor algebra gives symmetry and trace zero; in any observer orthonormal rest frame Q^{00}=u=(ε0|E|²+|B|²/μ)/2, Q^{0i}=(E×B)_i/(μc), with ε0=(μc²)⁻¹. These entries follow by expanding the time-index sign and the identity εikℓεjkm=δijδℓm−δimδℓj, as in the actually read EM C5 argument. Write a=E/c, b=B. The flux magnitude is |a×b|/μ≤|a||b|/μ≤(|a|²+|b|²)/(2μ)=u. The first inequality follows from |a×b|²=|a|²|b|²−(a·b)² by expanding the three cross components; the second from (|a|−|b|)²≥0. Consequently −Q^a_bn^b=(u,S/c) is future causal or zero for every future unit n, and scaling extends this to every future timelike v. This is DEC. WEC follows from u≥0, NEC from continuity as timelike vectors approach nonzero null vectors. SEC equals WEC because trace Q=0. The flux is nonzero null precisely when E·B=0 and |E|=c|B|≠0; otherwise for nonzero fields it is timelike.

Dust with ρ≥0 obeys DEC since −Tm^a_bv^b=ρ(−U·v)U^a is future timelike or zero for future timelike U,v; −U·v>0 in a rest frame. For perfect-fluid rest components diag(ε,p,p,p), the DEC current on v=(v0,vspace) is (εv0,−p vspace). It is future causal for all timelike v iff ε≥|p|: sufficiency follows from |vspace|<v0, necessity by rest v for ε≥0 and |vspace|/v0→1. For WEC directly evaluate T(v,v)=ε[(v0)²−|vspace|²]+(ε+p)|vspace|²: ε≥0 and ε+p≥0 suffice, while a rest timelike v forces ε≥0 and timelike vectors approaching the null cone force ε+p≥0. For nonzero null v, (v0)²=|vspace|²>0 gives T(v,v)=(ε+p)|vspace|², proving NEC iff ε+p≥0. The trace is −ε+3p, so the SEC effective rest tensor has energy (ε+3p)/2 and pressure (ε−p)/2; applying the just-proved WEC calculation proves SEC iff ε+3p≥0 and ε+p≥0. This locally repeats the algebra inspected in the earlier physical GR G7 section without importing its Einstein postulate or physical item as a mathematical premise.

The future causal cone is convex: in an orthonormal frame the sum of (t_i,x_i) with t_i≥|x_i| has Σt_i≥Σ|x_i|≥|Σx_i|. Therefore sums of tensors satisfying DEC satisfy DEC, and sums satisfying each quadratic WEC/NEC/SEC inequality preserve it. In particular electromagnetic plus nonnegative dust obeys all four conditions. For arbitrary perfect fluid the electromagnetic contribution does not automatically repair a violated matter inequality. A static magnetic field has anisotropic rest stresses diag(u,u,u,−u) for B along z; it is not an isotropic perfect fluid.

<a id="ml04"></a>

## ML04 — Symmetry currents and gauge-compensated charged first integral

Assume the actual curved Maxwell stress-divergence lemma lem-emg-maxwell-stress-divergence, and the exchange hypothesis of ML00. Then ∇a(Tm^{ab}+Q^{ab})=0. For a C¹ Killing field ξ, ∇aξb+∇bξa=0, J^a=(Tm^{ab}+Q^{ab})ξb has zero divergence: product differentiation leaves its contraction of a symmetric tensor with ∇aξb, which is half the zero Killing sum. On the actual finite-chart/finite-chain regions of GR G4, boundary Σ2−Σ1+B gives Qcharge(Σ2)−Qcharge(Σ1)=−flux(B). Charge equality requires zero side flux. No asymptotic ADM energy or universal global energy is thereby supplied.

Normalize the symmetry flow parameter to metres, so ξ has dimensionless length-coordinate components. A(ξ) and the symmetry compensator χ below have T m, while the electromagnetic gauge scalar λ has Wb=T m² and Lξλ has T m. The conserved C therefore has kg m/s; multiplying a properly chosen stationary time-translation C by −c gives an energy. This χ is not the potential-gauge scalar. For a prescribed g,A and massive charged curve satisfying mDτU=qF^sharp(U), let ξ be Killing and LξA=dχ on its potential domain. Define C=m g(U,ξ)+q[A(ξ)−χ]. Then Dτ(mU·ξ)=qξ^aF_abU^b, since the Killing derivative contracts U^aU^b to zero. In coordinates Cartan's one-form identity is (LξA)_b=ξ^aF_ab+∂b(A_aξ^a): expanding ξ^a∂aAb+Ab? precisely (LξA)_b=ξ^a∂aAb+Aa∂bξ^a, while the RHS expands to the same expression after −ξ^a∂bAa+∂b(Aaξ^a) cancels. Thus U·d(A(ξ)−χ)=−ξ^aF_abU^b, proving C constant. Under A→A+dλ, χ→χ+Lξλ yields A(ξ)−χ unchanged. If χ is shifted by a constant, C shifts by a constant only. This is a test-particle first integral on the declared potential domain, not a derivation of a coupled singular charge. It extends the actual H13 uncharged Killing first integral and CS1 gauge endpoint argument with the sign fixed explicitly.

<a id="ml05"></a>

## ML05 — WKB identities, polarization and an exact residual bound

For dimensional interpretation θ and ε are dimensionless, k has m⁻¹, a0/a1 have potential-component units T m, d1=∇·a1 has T and Pa1 has T/m. Thus the field difference bounds have T and the full Maxwell residual bounds T/m, with K,D,C carrying their displayed component units. On a smooth Lorentz domain let θ be a real C⁴ phase, k_a=∂aθ nowhere zero, and complex C³ one-form amplitudes a0,a1. All contractions and derivatives extend complex linearly, with a bar for conjugation. Let P a_b=□a_b−R_b^ca_c and L a=2k^c∇ca+(∇ck^c)a. The Lorenz-gauge Maxwell wave identity is ∇^a(dA)_ab=P A_b−∂b(∇^aA_a); it follows by expanding ∇^a(∇aAb−∇bAa), commuting the one-form derivatives and using the Ricci contraction with the GR G3 sign. In a normal chart the commutator on covectors is [∇a,∇b]Ac=−R^d_cab Ad, so the contraction yields the displayed −Ricci term. This proves the identity rather than assuming the wave equation implies Maxwell without gauge control.

Impose k²=0, k·a0=0, La0=0, iLa1+Pa0=0 and i k·a1+∇·a0=0 pointwise. These are explicit amplitude hypotheses, not a claim they have global solutions across caustics. For 0<ε≤1 define Aε=ε exp(iθ/ε)(a0+εa1), Fε=dAε. By twice differentiating the exponential,

P(exp(iθ/ε)a)=exp(iθ/ε)[−ε⁻²k²a+iε⁻¹La+Pa].

Consequently PAε=ε²exp(iθ/ε)Pa1 and ∇·Aε=ε²exp(iθ/ε)d1, d1=∇·a1. The exact sourced-Maxwell residual is therefore

∇^aFε_ab=exp(iθ/ε)[−iε k_b d1+ε²(Pa1_b−∂bd1)].

Bianchi holds exactly because Fε=dAε. On a specified compact chart with any fixed positive Euclidean component norm, if |k|≤K, |d1|≤D and |Pa1−dd1|≤C, the residual magnitude is ≤εKD+ε²C. Also Fε=exp(iθ/ε)[i k∧a0+ε(da0+i k∧a1)+ε²da1], so if the latter two coefficient norms are bounded by B0,B1, its difference from the leading field is ≤εB0+ε²B1. Taking real parts preserves these bounds and gives actual real fields. This is a quantitative residual and leading-field difference bound; no exact-solution approximation bound follows without an initial/boundary match and a Maxwell evolution estimate. In particular a small wave-equation residual alone would overlook the gauge-gradient O(ε) term.

From k=dθ, Hessian symmetry gives k^a∇ak_b=k^a∇bk_a=(1/2)∂bk²=0, so k's integral curves are affine null geodesics on the phase domain. Along a ray choose a nonzero scalar A0 satisfying k·∇A0=−(∇·k)A0/2; integration gives A0(λ)=A0(λ0)exp(−(1/2)∫λ0^λ∇·k ds) while coefficients remain smooth. Then e=a0/A0 obeys k·∇e=0 and k·e=0. Its physically distinct polarization is the class in k⊥/span{k}; a0→a0+βk leaves k∧a0 unchanged. Choose auxiliary null ℓ with k·ℓ=−1 in a pointwise Lorentz basis; the complement to span{k,ℓ} is a positive Euclidean two-plane. Projecting a0 there gives the quotient's two complex components; no four-dimensional trace subtraction is a polarization projection. Compatibility implies ∇a[(a0·bar a0)k^a]=0 using La0=0 and its conjugate. Amplitudes proportional to k have zero leading F and cannot be advertised as a nonzero leading wave. These conclusions are exact consequences of the stated finite-order ansatz constraints, not a globally convergent WKB series.

In Minkowski with θ=κ(x0−z), κ>0, a0 constant transverse and a1=0, every amplitude constraint holds, residual is identically zero and the constructed field is an exact source-free Maxwell wave for every ε. For a nonconstant curved phase, constants K,D,C,B0,B1 must remain bounded on the chosen compact region; caustics or rapid amplitude derivatives invalidate the stated estimate.

<a id="ml06"></a>

## ML06 — Test-field scaling and backreaction obstruction

On a fixed g, if F0,j0 solve the smooth Maxwell equations, then Fδ=δF0,jδ=δj0 also solve them for every real δ by linearity, while Q[Fδ]=δ²Q[F0] exactly by its quadratic definition. For the source-free fixed vacuum subclaim, use the actual canonical prop-emg-test-field-residual-order (complete-local-arguments.md#C4), whose quadratic-stress argument was read. For a vacuum metric background with G+Λg=0 and nonzero F0, the Einstein residual of (g,Fδ) is −κδ²Q[F0]. It is bounded on a compact region by κδ²sup|Q0|, but does not vanish for δ≠0 wherever Q0≠0. This is an exact consistency calculation, not a theorem that a nearby coupled solution exists or differs by O(δ²). If g is Minkowski and Λ=0, Einstein requires Q=0; ML03 gives Q00=(|E|²/c²+|B|²)/(2μ), so Q=0 forces F=0. A nonzero flat-space Maxwell wave is therefore an exact test-field solution and not a source-free fully coupled Einstein–Maxwell solution with an unchanged Minkowski metric.

For dust scale (ρ,σ)→δ(ρ,σ) with U fixed and δ>0: Tm and j scale δ, while the ratio α and the Lorentz-curve equation remain unchanged if the prescribed F remains fixed. The background Maxwell source changes unless its separately prescribed current changes consistently; the Einstein source changes. The unchanged curve calculation thus gives no backreaction theorem. A fixed-charge point limit is more severe: the Coulomb exterior energy is obtained directly by ∫ℓ^∞(ε0/2)[q/(4πε0r²)]²4πr²dr=q²/(8πε0ℓ), as in the inspected CS6 calculation, and diverges as ℓ↓0 at fixed q≠0, so no finite-stress smooth point limit or self-field evaluation is supplied here.

<a id="ml07"></a>

## ML07 — Complete arbitrary-H conformastatic curvature calculation

Let H>0 be C³ on an open D⊂R³, independent of x0, and g=−H⁻²(dx0)²+H²δij dxi dxj on R×D. Define Hi=∂iH, Hij=∂i∂jH, q=ΣHi² and ΔH=ΣHii. The metric is nondegenerate Lorentzian with w=sqrt(|det g|)=H² and inverse g00=−H²,gij=H⁻²δij. The Christoffel formula gives the following exhaustive nonzero types:

Γ0_0i=Γ0_i0=−Hi/H, Γi_00=−Hi/H⁵, Γi_jk=(δijHk+δikHj−δjkHi)/H.

All time derivatives and Γ0_ij,Γi_0j,Γ0_00 vanish. Contracting gives Γa_ai=2Hi/H. For R00, the derivative ∂iΓi00 equals −ΔH/H⁵+5q/H⁶; Γi00Γa_ai=−2q/H⁶; the two products Γ0_0iΓi_00 in the Ricci subtraction contribute −2q/H⁶. Hence R00=q/H⁶−ΔH/H⁵. Every mixed term in R0i has a vanished time derivative or connection type, so R0i=0.

For Rij use R_ij=∂kΓk_ij−∂jΓa_ai+Γk_ijΓa_ak−Γa_ibΓb_ja. Direct differentiation gives ∂kΓk_ij=2Hij/H−2HiHj/H²−δijΔH/H+δijq/H² and −∂jΓa_ai=−2Hij/H+2HiHj/H². The third term is (4HiHj−2δijq)/H². For the last term the time contribution is HiHj/H². The spatial contribution is (5HiHj−2δijq)/H²: multiply (δakHb+δabHi−δibHa)(δbjHa+δbaHj−δjaHb) with free i,j and sum a,b; the nine terms are HiHj, HiHj, −δijq, HiHj, 3HiHj, −HiHj, −δijq, −HiHj, HiHj, giving respectively5 and−2 as the combined coefficients (renaming the dummy letters to match Γa_ib is harmless; each Kronecker contraction is finite). Consequently

Rij=−δijΔH/H+(δijq−2HiHj)/H².

Trace with the displayed inverse: g00R00=−q/H⁴+ΔH/H³ and gijRij=q/H⁴−3ΔH/H³, so scalar R=−2ΔH/H³. In the orthonormal tetrad n=H∂0,e_i=H⁻¹∂i the Einstein components are

Ghat00=(q−2HΔH)/H⁴, Ghat0i=0, Ghatij=(δijq−2HiHj)/H⁴.

These are complete purely geometric identities for arbitrary positive H, not only harmonic H. For smooth H they extend smoothly across any coordinate point where H stays positive and finite; a pole/singular excluded center is not repaired by this calculation. This canonical lemma is shared with the harmonic electrovacuum MP solutions worker.

<a id="ml08"></a>

## ML08 — Exact smooth counterpoised charged-dust family

Take c,G_N,μ>0, ε0=(μc²)⁻¹, κ=8πG_N/c⁴, Qs=sqrt(4πε0G_N)>0 (C/kg), sign s∈{−1,1}, smooth H>0 with ΔH≤0, and the metric of ML07. Define

A=s(c/Qs)H⁻¹ dx0, F=dA, U=cH∂0, ρ=−c²ΔH/(4πG_N H³), σ=sQsρ, j=σU, Tm=ρU⊗U.

Then g(U,U)=−c², ρ≥0 and all fields are smooth. The only F components are Fi0=−s(c/Qs)Hi/H² and F0i=+s(c/Qs)Hi/H². Raising gives Fi0 upper=+s(c/Qs)Hi/H². Therefore ∇aF^{a0}=H⁻²∂i(H²Fi0)=s(c/Qs)ΔH/H²=−μσcH; the equality follows from Qs²=4πG_N/(μc²). The spatial sourced equations are zero because all fields are static and j^i=0. Bianchi follows from F=dA. Also ∇a(ρU^a)=H⁻²∂0(H²ρcH)=0 and the same holds for j. The acceleration is a^i=Γi00c²H²=−c²Hi/H³,a0=0. Force per mass is (σ/ρ)F^i_bU^b=sQsH⁻²[−s(c/Qs)Hi/H²]cH=−c²Hi/H³. On ρ>0 it matches; without division both sides equal after multiplication by ρ everywhere. Thus the dust exchange equation holds, including zero-density regions, by ML01's product identity.

The observer n=H∂0 measures E_i=−s(c²/Qs)Hi/H² and B=0. EM stress has κQhat00=q/H⁴, κQhatij=(δijq−2HiHj)/H⁴ and zero mixed components, by ML03/component expansion and κ ε0 c⁴/(2Qs²)=1. Dust has κTmhat00=κρc²=−2ΔH/H³ and no spatial stress. Adding gives exactly ML07's Einstein tensor, so G=κ(Tm+Q) with Λ=0. Every Maxwell, dust and Einstein component has now been checked; no coupled-matter well-posedness theorem was substituted. The smooth family is an exact stationary solution of this explicitly chosen model, not a proof of equilibrium stability, formation or realism of its finely fixed charge-to-mass ratio. The potential may be shifted by constant −s(c/Qs)dx0 to make A0→0 if H→1 at infinity; F and all verified equations are unchanged.

<a id="ml09"></a>

## ML09 — Regular spherical example, finite mass/charge and quantitative dilute limit

Let a,b>0 and on all R³ set H=1+a/(r²+b²)^{1/2}, r²=x²+y²+z². Differentiating Hi=−axi/(r²+b²)^{3/2} gives ΔH=−3ab²/(r²+b²)^{5/2}. Thus ML08 gives an everywhere smooth positive dust solution with ρ=3c²ab²/[4πG_N H³(r²+b²)^{5/2}]; there is no point/source center and no horizon claim. H≥1 and H≤1+a/b. Its proper spatial mass is Mproper=∫ρH³d³x. Spherical integration gives

Mproper=(3c²ab²/G_N)∫₀^∞r²(r²+b²)^{-5/2}dr=c²a/G_N.

The last integral equals1/(3b²): substitute r=b tanθ, dr=b sec²θdθ, obtaining b⁻²∫₀^{π/2}sin²θ cosθdθ=b⁻²/3. The proper charge on a stationary slice is Qtotal=∫σH³d³x=sQsMproper by the pointwise ratio. These are actual finite integrals, not an unproved ADM identification; one may separately define an asymptotic mass from the 1/r metric coefficient, which is also c²a/G_N here. Matter has infinite extent and decays like r⁻⁵; finite mass does not mean compact support. ML03 proves total DEC/WEC/NEC/SEC. The Einstein trace R=−2ΔH/H³>0 exhibits an actual gravitational curvature effect of smooth matter/field.

For a=δb, 0<δ≤1, put h=b/(r²+b²)^{1/2}, so H=1+δh and 0<h≤1. The Newtonian potential defined from first-order g00 is Φ=−δc²h, and −∇Φ=δc²∇h. The exact coordinate components of static dust four-acceleration (the required electromagnetic support) are −c²∇H/H³, with its electromagnetic support, not a freely falling dust Newtonian limit. Algebra gives |H⁻²−(1−2δh)|≤3δ²: Taylor's integral remainder on f(z)=(1+z)⁻² with f''≤6 gives ≤3z². Likewise H²=1+2δh+δ²h², with remainder≤δ². The rescaled shape derivatives satisfy |∇h|≤1/b, |D²h|≤4/b² by direct differentiation; higher displayed metric derivative errors can be bounded by the product/chain rules. Proper density differs from its dilute linear profile ρlin=3c²δb³/[4πG_N(r²+b²)^{5/2}] by relative factor H⁻³: 0≤1−ρ/ρlin≤3δ, by the derivative bound |d(1+z)⁻³/dz|≤3. These are explicit metric/density comparison bounds for an actual exact coupled family, not a general singular-limit theorem or a claim that the static charged matter freely falls.

<a id="ml10"></a>

## ML10 — Weak/slow charged test trajectories with finite-time error

Use the actual completed GR Q4 stationary metric family on a compact length-scale L region: g00=−(1+2εφ)+O_C²(ε²), gij=(1−2εφ)δij+O_C²(ε²), g0i=O_C²(ε^{3/2}), uniform inverse/derivative bounds, 0<ε≤ε0, and physical coordinate velocity w with |w|≤C sqrt(ε)c. Let α=q/m≠0 be fixed, and prescribe smooth stationary coordinate field components F0i=−Ei/c,Fij=εijkBk with

αE=(εc²/L)e(X), αB=(sqrt(ε)c/L)b(X), X=x/L,

where e,b and first derivatives are uniformly bounded. These are prescribed-background hypotheses; requiring Maxwell consistency imposes dF=0 and the associated smooth current, and requiring Einstein additionally imposes its stress hierarchy. The theorem does not construct such a fully coupled family. The large-magnetic-field scaling can violate Q4's small spatial-stress hierarchy unless additional matter/coupling scales make it compatible; it is therefore primarily a controlled test-motion limit.

For K=(c,w), proper-time conversion is dτ/dt=λ=sqrt(−g(K,K))/c=1+O(ε), with uniform positive lower bound for small ε. Dividing the covariant Lorentz equation by (dt/dτ)² and eliminating its temporal reparameterization term gives exactly

dw^i/dt=−Γi_abK^aK^b+(w^i/c)Γ0_abK^aK^b+αλ[F^i_bK^b−(w^i/c)F^0_bK^b].

To compute the first two terms independently of physical GR Q4, the exact inverse identity (I+H)⁻¹=I−H+H²(I+H)⁻¹ gives the uniform inverse expansion and its differentiated remainder bounds. Substitution in Γa_bc=g^{ad}(∂bgdc+∂cgdb−∂dgbc)/2 then gives Γi00=ε∂iφ+O(ε²/L), Γi0j=O(ε^{3/2}/L), Γijk=O(ε/L), Γ000=O(ε^{5/2}/L), Γ00j=O(ε/L), Γ0jk=O(ε^{3/2}/L); stationary time derivatives vanish. Multiplying these six types by K=(c,w), |w|≤C sqrt(ε)c, bounds every correction by O(ε²c²/L) and yields the neutral term −∇Φ+O(ε²c²/L), Φ=εc²φ. This repeats the actual inspected Q4 mathematical calculation without consuming its physical Einstein postulate or its Poisson conclusion. For the force, inverse-metric expansion and the stated g0i bound give αF^i_bK^b=α(E+w×B)+O(ε²c²/L): diagonal inverse corrections are O(ε) times the leading electric/magnetic force O(εc²/L), and off-diagonal g^{i0}=O(ε^{3/2}) times αF0j wj is still smaller, while g^{ij}Fj0c accounts for the electric term. The temporal contraction obeys αF^0_bK^b=α(E·w/c)+O(ε²c²/L), including g^{0i} magnetic/current contractions; its multiplication by w/c is O(ε²c²/L). Multiplication by λ=1+O(ε) retains the same bound. Therefore

dw/dt=−∇Φ+α(E+w×B)+Rε, |Rε|≤Cε²c²/L.

The constant depends on the actual compact-region metric/field derivative and speed bounds, not ε. In scaled variables S=sqrt(ε)ct/L,W=w/(sqrt(ε)c), this is X'=W,W'=−∇ψ+e(X)+W×b(X)+rε, |rε|≤Cε, ψ(X)=φ(LX). On a fixed finite scaled interval [0,S*], assume both this trajectory and the Newton–Lorentz comparison remain in a common compact position/velocity set. Its vector field is Lipschitz there with some K from the bounded derivatives. Subtract integral equations: D(S)≤D(0)+CεS+K∫₀ˢD(r)dr, for the sum of position/velocity errors. Iterating gives D(S)≤[D(0)+CεS*]exp(KS*). This is an actual finite-time trajectory estimate under explicit existence/containment hypotheses, reusing Q4/CS2 rather than inferring backreaction or infinite-time validity. α=0 is the separately supplied Q4 neutral geodesic case; no division by q is then used.
