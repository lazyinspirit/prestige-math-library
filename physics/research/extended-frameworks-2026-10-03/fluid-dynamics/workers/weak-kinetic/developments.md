# Weak, entropy and kinetic foundations — completed research arguments

2026-10-03. Research carriers, not production items or independent acceptance. All mathematical statements below use mathematical hypotheses only. Physical readings of their parameters are separate conditional wrappers. No empirical measurements are asserted. Read root/physics instructions and content model. Explicit anchors are the proof-module interfaces for inventory.json.

<a id="W0"></a>
## W0. Spaces, distributions, dimensions and suppliers

Work on the physical periodic cell Ω=(R/LZ)^d, d≥2, L>0, normalized measure L^(−d) dx, with Fourier wavevectors κ_k=2πk/L. Vectors are real d-vectors; conjugate Fourier symmetry is imposed. H^s is the weighted coefficient space Σ(1+|κ_k|²)^s|û_k|²<∞, using a fixed length unit to make the 1 dimensionless; H=L² divergence-free fields, V=H¹∩H. Leray P has P_0=Id and P_k=Id−κ_kκ_kᵀ/|κ_k|² for k≠0; Π_N cuts |k|∞≤N. They are orthogonal contractions, commute with derivatives, and preserve reality. Their ranges of finite modes are finite real Euclidean spaces. Negative H^−r is the dual weighted coefficient space. L^p(0,T;X) means strongly measurable X-valued maps modulo time-null equality with integrable p-th norm (essentially bounded for p=∞); C_w([0,T];H) means every H-pairing is continuous. Weighted sequence measurability follows by finite truncations and their pointwise norm limits.

Distributional equations are tested against smooth compactly time-supported, spatially periodic fields; on R^d against C_c^∞. A locally integrable field defines ⟨f,φ⟩=∫fφ; ∂_j has pairing −∫f∂_jφ. This uses the actual published def-regular-distribution-from-a-locally-integrable-function and def-distributional-derivative, read fully. Fourier completeness/isometry uses published thm-fourier-basis-and-parseval-on-the-n-torus, read entire statement and proof, rescaled from period1; Countable Choice is carried. All subsequent countable diagonal selections also use Countable Choice. Scalar flux/entropy definitions and RH/Riemann items are planned at research/plan-pde-track.md PDE-26; they are permission/status references, not proof substitutes. NR E23 supplies the actual Burgers examples; NR E30 supplies P, Fourier tails, finite-dimensional polynomial ODE construction and local smooth NS. Their full arguments were read. Root Gronwall statement/proof was read; below the needed measurable constant-coefficient version is proved directly.

For physical d=3: x in m, t in s, u in m/s, ν in m²/s, fixed density ρ_0 in kg/m³, μ=ρ_0ν in Pa s; mathematical pressure π=p/ρ_0 has m²/s², p in Pa. Norms use normalized cell measure; total kinetic energy is ρ_0|Ω|‖u‖²/2 in J. Analytic coordinate rescaling is explicit; the general d mathematics does not assert literal three-dimensional SI density units in every dimension.

<a id="W1"></a>
## W1. Finite-mode compactness and the nonlinear limit

Lemma. Suppose z_N:[0,T]→H are continuous coefficient curves, ‖z_N(t)‖₂≤A, ∫₀ᵀΣ|κ_k|²|ẑ_N,k|²≤B, and each coefficient has a uniform time-Lipschitz bound C_k. There is a subsequence converging uniformly in each Fourier coefficient on [0,T], strongly in L²((0,T)×Ω), to a curve z∈C_w H∩L² H¹ with the same bounds.

Proof. For one coefficient, choose convergent subsequences at rational times by boundedness in finite-dimensional Euclidean space; a finite rational time grid and the common Lipschitz modulus turn pointwise rational convergence into uniform Cauchy convergence. Diagonalize over the countable coefficients. Finite sums give Σ_{|k|≤K}|ẑ_k(t)|²≤A² for every t; completeness of the Fourier map defines z(t)∈H with norm≤A. Pairing with a finite polynomial is continuous, and approximation of any h∈H has uniform error ≤2A‖h−Π_Kh‖₂, establishing C_w. Finite gradient sums integrated in time pass to the limit and are≤B; their increasing limit gives ∫‖∇z‖²≤B. Tails with |k|∞>K obey ∫Σ|ẑ_N,k|²≤B L²/(4π² K²), likewise for z. Finite-mode uniform convergence plus these tails gives strong L² spacetime convergence. Products converge in L¹ because

‖z_N⊗z_N−z⊗z‖_{L¹}≤(‖z_N‖_{L²}+‖z‖_{L²})‖z_N−z‖_{L²}.

There is a further subsequence converging strongly in H for almost every time: select n_j with ∑‖z_{n_j}−z‖²_{L²_tH}<∞. The fully read published thm-tonelli-theorem-for-sigma-finite-product-spaces makes ∑‖z_{n_j}(t)−z(t)‖²_H finite for almost every t. This proves the claim and the exact restart-time input to W2. ∎

A useful negative-space bound needs no L^p singular-integral theorem: for r>d/2+1,

‖P div(a⊗a)‖_{H^−r}≤C_r‖a‖²₂.

Indeed |widehat(a_i a_j)(k)|≤‖a_i‖₂‖a_j‖₂ by Cauchy–Schwarz; multiply by |κ_k| and sum Σ(1+|κ_k|²)^−r|κ_k|²<∞ using lattice shells O(n^(d−1)). Fourier convolution for L² factors is justified first by polynomials and then L¹ convergence. The viscosity term is bounded in H^−r for r≥2 by Cν‖a‖₂. Thus energy-bounded approximations have a uniform time-Lipschitz bound in H^−r. This supplies every nonlinear distributional use without importing an unproved Aubin–Lions theorem.

<a id="W2"></a>
## W2. Global unforced periodic Leray–Hopf branch

Theorem. For d≥2, ν>0 and u_0∈H, there exists u∈C_w([0,∞);H)∩L^∞(0,∞;H)∩L²_loc([0,∞);V) with u(0)=u_0, strong H convergence at t↓0, and, for each smooth divergence-free periodic test φ compactly supported in [0,∞),

∫₀∞[(u,∂_tφ)+(u⊗u,∇φ)−ν(∇u,∇φ)]dt+(u_0,φ(0))=0.

For all t≥0 the initial energy inequality holds:

‖u(t)‖²₂+2ν∫₀ᵗ‖∇u‖²₂≤‖u_0‖²₂.

There is a full-measure set S⊂(0,∞), together with 0, such that for every s∈S∪{0} and every t≥s,

‖u(t)‖²₂+2ν∫_sᵗ‖∇u‖²₂≤‖u(s)‖²₂.

Proof. Solve u_N'+Π_NP div(u_N⊗u_N)=νΔu_N, u_N(0)=Π_Nu_0, by finite-dimensional polynomial ODE existence. The NR E2/E30 ODE construction is the actual earlier proof supplier: contraction of the integral equation on a bounded coefficient ball and iteration extends until the ball bound fails. Orthogonality removes projections in the inner product with u_N; div u_N=0 gives ∫u_N·(u_N·∇u_N)=∫div(u_N|u_N|²/2)=0 by periodic coordinate FTC. Fourier integration by parts gives

‖u_N(t)‖²₂+2ν∫_sᵗ‖∇u_N‖²₂=‖u_N(s)‖²₂.

For fixed N the coefficient norm is bounded forever, and its polynomial field and derivative are bounded on that compact ball. A finite endpoint limit exists by bounded derivative; restarting the ODE extends it. Hence all u_N are global. W1 applies on each integer horizon. Indeed each nonlinear Fourier coefficient is bounded by C|κ_k|‖u_N‖²₂ and its viscosity coefficient by ν|κ_k|²‖u_N‖₂, uniformly in N; the energy controls B. Diagonalize over horizons to get one global limit.

Pass to the integral identity first for finite-mode tests: linear terms pass through coefficient convergence, nonlinear terms through W1's strong product convergence. For general smooth tests, Π_Nφ→φ and ∇Π_Nφ→∇φ uniformly because repeated periodic integration by parts gives coefficient decay faster than any power, uniformly on its compact time support. The nonlinear L¹ bound controls the resulting error. The gradient term can equivalently be written ν(u_N,Δφ), which passes in strong L²; finite gradient sums show that its limit is the H¹ gradient of u. Initial terms converge in H. This proves the weak equation and does not assign meaning to arbitrary products of distributions.

For each fixed t, finite coefficient convergence and increasing sums give ‖u(t)‖²≤liminf‖u_N(t)‖². Finite gradient sums on [s,t], followed by monotone convergence, give the same liminf bound for the gradient integral. With s=0 and Π_Nu_0→u_0, the energy equality passes to the initial inequality for every t. With s in W1's full-measure set of strong H convergence, its right side converges to ‖u(s)‖²; this proves the restart inequality for every t≥s. At zero, coefficient convergence gives u(t)⇀u_0 as t↓0; the norm limsup≤‖u_0‖ from energy and the identity ‖u(t)−u_0‖²=‖u(t)‖²+‖u_0‖²−2(u(t),u_0) prove strong convergence. ∎

Pressure can be recovered as a spacetime distribution: set π̂_0=0 and π̂_k=−∑_{ij}κ_iκ_j|κ_k|^−2 widehat(u_i u_j)(k). The tensor coefficients are bounded locally uniformly in time by ‖u‖²₂, so pairing with rapidly decaying test coefficients is absolutely summable. Fourier algebra gives ∇π=−(I−P)div(u⊗u) and hence the full equation. A zero-gradient periodic distribution has only its k=0 coefficient; mean-zero normalization makes pressure unique. No pointwise pressure regularity is asserted.

This branch has no forcing, walls, variable density or temperature. ν=0 is excluded from the compactness proof since its integrated gradient bound disappears. Global weak existence does not mean global smoothness or uniqueness in three dimensions.

<a id="W3"></a>
## W3. Weak–smooth uniqueness and model wrapper

If v is a smooth periodic solution of W2 on [0,T] with the same data and ν, then u=v there. More generally D(t)=‖u(t)−v(t)‖²₂ obeys D(t)≤D(0)+2∫₀ᵗ‖∇v‖∞D.

Proof. Testing the weak equation by a smooth cutoff times v and approximating time indicators gives, using continuity of (u,v),

(u(t),v(t))−(u_0,v_0)=∫₀ᵗ[(u,v_t)+(u⊗u,∇v)−ν(∇u,∇v)].

Insert v_t=−P div(v⊗v)+νΔv; periodic integration by parts and divu=divv=0 reduce this to the cross identity. Add the weak energy inequality for u and smooth energy equality for v, subtract twice this cross identity and cancel transport terms; the result is

D(t)+2ν∫₀ᵗ‖∇(u−v)‖²≤D(0)−2∫₀ᵗ∫(u−v)_i(u−v)_j∂_jv_i.

All integrals exist because v and its derivatives are bounded and u∈L∞H∩L²V. The stated bound follows. For the measurable integral version of Gronwall, additionally assume Dependent Choice, as required by the published absolute-continuity FTC supplier. The fully read published cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous makes the indefinite integral AC; thm-first-fundamental-theorem-of-calculus-for-l-one gives its a.e. derivative; lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous makes its product with the C¹ integrating factor AC; thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions integrates that product derivative. Ordinary product differentiation applies wherever both derivatives exist. With these exact hypotheses, let g(t)=D(0)+∫₀ᵗa(s)D(s)ds with a=2‖∇v‖∞ continuous. Then g is absolutely continuous, D≤g, g'≤ag a.e.; multiply by exp(−∫a), integrate its a.e. derivative, and obtain D≤D(0)exp(∫a). D(0)=0 proves equality. ∎

Physical wrapper: adopt nonrelativistic constant positive density, incompressibility, local momentum balance, Newtonian stress σ=−pI+μ(∇u+∇uᵀ), μ>0 constant, zero body force and periodic ideal boundary data. These are model assumptions, separate from the above theorem hypotheses. NR E13's balances yield W2 after division by ρ_0 and μ=ρ_0ν. The weak theorem provides an admissible dissipating mathematical continuation of that model; empirical validity, universal turbulence and smooth continuation are not inferred. Dissipation equals μ|Ω|∫|∇u|² for this periodic divergence-free model. Thermodynamics M22/M34 give an independent heat/entropy branch; coupling dissipated kinetic energy to a temperature equation requires an additional thermal model.

<a id="S1"></a>
## S1. Vector conservation laws, shocks and entropy fluxes

Let O⊂R^m open, U∈L∞_loc(I×R^d;O), F_j:O→R^m C¹, and F_j(U)∈L¹_loc. Weak conservation is ∫∫[U·φ_t+∑F_j(U)·φ_{x_j}]=0 for vector test φ. With initial data U_0 add ∫U_0·φ(0). An entropy pair is η:O→R convex C² and q_j C¹ satisfying Dq_j=Dη DF_j. Smooth solutions satisfy ∂_tη(U)+∑∂_jq_j(U)=0 by the chain rule. Require η(U) and each q_j(U) in L¹_loc before defining their distributions; bounded U alone need not imply this if its range approaches a singular boundary of O. Weak entropy solutions require this distribution≤0, i.e. ∫∫[η(U)ψ_t+∑q_j(U)ψ_j]≥0 for all ψ≥0, with the appropriate initial term. A convex mathematical entropy is usually minus a positive multiple of physical entropy; its sign must be declared.

A planar piecewise constant jump across x·n=st, |n|=1, has distributional residual ([F]·n−s[U])δ_{x·n−st}; here [a]=a_R−a_L and δ pairs by spatial surface integration at fixed t. Proof: for H(x·n−st), ∂_tH=−sδ and ∂_jH=n_jδ, verified by integrating a compact test in the normal coordinate and the one-dimensional FTC. Thus RH is s[U]=∑n_j[F_j(U)], a vector equation without division by a vector. Entropy admissibility is ∑n_j[q_j]−s[η]≤0. Smooth curved-interface RH follows in a C¹ graph chart from the same change of variables, with spacetime normal (n_t,n_x): n_t[U]+∑n_{x_j}[F_j]=0. No trace theorem for arbitrary L∞ solutions is asserted; genuine one-sided traces are part of this piecewise-smooth scope.

For one-dimensional systems, strict hyperbolicity at U means DF(U) has m distinct real eigenvalues λ_1<…<λ_m. A k-Lax shock is an RH jump with λ_k(U_R)<s<λ_k(U_L), and, when present, λ_{k−1}(U_L)<s<λ_{k+1}(U_R); these inequalities define the incoming-characteristic pattern, not a general systems existence or uniqueness theorem. Scalar strict convexity gives its corresponding pattern by S2. Physical Euler RH uses U=(ρ,ρu,E), F=(ρu,ρu²+p,u(E+p)), E=ρe+ρu²/2, with specified constitutive equation of state and ρ>0. Units are respectively kg/m³, kg/(m²s), J/m³ and their times-velocity flux units; this is an idealized planar three-dimensional fluid varying in one coordinate. An entropy inequality alone is not a proof of general compressible well-posedness.

<a id="S2"></a>
## S2. Convex scalar Riemann construction and entropy selection

Let F∈C²(R), F''>0 on the compact interval containing constants a,b. Define u_0=a on x<0, b on x>0. For a>b put s=(F(a)−F(b))/(a−b) and u=a for x<st, b for x>st. RH follows by substitution. For convex η C², q'=η'F', its jump production is

[q]−s[η]=−∫_b^a η'(z)(F'(z)−s)dz=∫_b^a η''(z)(F(z)−C(z))dz≤0,

where C(z)=F(b)+s(z−b) is the endpoint chord and F≤C by convexity; endpoint terms vanish. For Kruzhkov η_k=|z−k|, q_k=sgn(z−k)(F(z)−F(k)), the production is zero for k outside [b,a] and 2(F(k)−C(k))≤0 inside, directly by expansion. Strict monotonicity of F' and the average formula for s give F'(b)<s<F'(a), the scalar Lax inequalities.

For a<b put u=a for x/t≤F'(a), u=(F')^−1(x/t) in the fan, u=b for x/t≥F'(b), t>0. The inverse exists C¹ on this interval because F''>0 and compactness gives positive lower bound. In the fan u_t+F'(u)u_x=0 by differentiating its inverse formula. The solution is continuous across edges; piecewise integration by parts therefore leaves no edge distribution. The weak initial trace is strong L¹_loc, since the nonconstant region has width O(t) and bounded amplitude. The same argument for Lipschitz η_k, split once more at the ray x=tF'(k), gives no jump terms and zero entropy production. This constructs entropy solutions for these exact Riemann data, without asserting the general Kruzhkov theorem. General L¹ contraction/existence at PDE-26 remain separately planned, not a dependency of these constructions. ∎

For a<b the expansion jump still satisfies RH but the entropy production for k∈(a,b) is 2(C(k)−F(k))>0. It and the fan are two weak solutions with the same initial trace; conservation without entropy does not select a unique weak solution. For Burgers F(z)=z²/2, NR E23 gives s=(a+b)/2 and the production for a>b is (k−a)(k−b)≤0. Changes of values on the shock curve change no almost-everywhere class. Burgers u has m/s and F has m²/s² if interpreted as velocity transport; η_k has m/s and q_k m²/s². General mathematical entropy units are chosen normalization, not automatically J/(m³K).

Viscous selection is conditional: for C¹_t C²_x u^ε satisfying u_t+divF(u)=εΔu with ε>0, direct product/chain differentiation gives η_t+divq=εΔη−εη''|∇u|². If u^ε are uniformly bounded, converge strongly L¹_loc to u, have compatible strong initial traces, and ε∫η(u^ε)Δψ→0 for every compact test (automatic under that boundedness), their inequalities pass to u by Lipschitz continuity on the common range. This proves passage, not compactness/existence of such a family. The latter needs actual translation estimates and remains the distinct PDE-26 supplier chain.

<a id="K0"></a>
## K0. Kinetic state, collision model and hydrodynamic observables

For d=3, x∈Ω periodic cell in m, v∈R³ in m/s, t∈I in s. Let f:I×Ω×R³→[0,∞) be measurable, with f dx dv a number count. Units f=m^−3(m/s)^−3. Adopt a fixed single-species mass m>0 in kg and fixed k_B>0 in J/K. f is primitive in this kinetic formulation; number density n=∫f dv, mass density ρ=mn, velocity u=n^−1∫vf dv where n>0, and temperature T=m/(3k_Bn)∫|v−u|²f dv are derived moments. n is m^−3, ρ kg/m³, u m/s, T K. If n=0, u,T are not defined; conclusions using them require positive n. Internal energy density is 3nk_BT/2 in J/m³; no rotational/internal molecular modes are included. Define peculiar velocity c=v−u, stress P=m∫c⊗c f dv in Pa, heat flux q=(m/2)∫|c|²c f dv in W/m². A finite absolute third moment ensures these fluxes exist; kinetic energy E=(m/2)∫|v|²f dv. Positivity implies P is symmetric positive semidefinite by aᵀPa=m∫(a·c)²f≥0. Trace(P)=3nk_BT. No isotropy assumption is hidden in this definition.

Use thermodynamics L12's collision measure on elastic quadruples, fully read including the equality proof. Precisely Q_el={(v,w,v',w'):v+w=v'+w', |v|²+|w|²=|v'|²+|w'|²}, with relative Borel σ-algebra. ν is nonnegative countably additive and invariant under swapping incoming/outgoing and particles within pairs. Require the weak collision identity

∫ψ(v)Q(f)(v)dv=(1/4)∫(B−A)[ψ(v)+ψ(w)−ψ(v')−ψ(w')]dν,

A=f(v)f(w), B=f(v')f(w'), with absolute convergence for every compact smooth velocity test and every actual moment/log test below. Choose measure units so Q has f/s. For an ordinary d=3 cross-section kernel this corresponds to dv dw dω |v−w|σ(ω), σ in m²; after integrating its first velocity, Q has f/s. This symmetric identity is an adopted model hypothesis, not an inference that incoming particles in deterministic mechanics are independent. The mathematical identity, its conservation hypotheses and positivity are separated from its physical molecular-chaos interpretation.

For local differential balances assume f>0, C¹ in (t,x), C² in v; all f-weighted absolute moments through order3, their derivatives used in time/spatial differentiation, and f|log(f/f_ref)| have integrable uniform envelopes on compact time intervals. Also require the entropy flux |v|f|log(f/f_ref)| and its derivatives integrable, and collision log-test integrability. These explicit domination hypotheses license Fubini/differentiation by the exact thermodynamics M27 measure/differentiation chain and the fully read published thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces; they do not establish kinetic PDE existence. f_ref>0 is constant in the same units as f. On a nonperiodic region require actual vanishing entropy/number/energy boundary flux, not just pointwise tail decay slogans.

<a id="K1"></a>
## K1. Exact moments and conditional Boltzmann entropy

Suppose the regular state in K0 solves f_t+v·∇_xf=Q(f). For ψ=1, mv_i, m|v|²/2, the bracket in K0 is zero by collision conservation. Integrate the PDE against these functions and differentiate under the stated envelopes, giving

∂_tρ+div(ρu)=0,

∂_t(ρu)+div(ρu⊗u+P)=0,

∂_tE+div(Eu+Pu+q)=0.

The flux formulas follow by expanding v=u+c, using ∫cf=0 and E=ρ|u|²/2+tr(P)/2. For the energy flux: (m/2)∫|u+c|²(u+c)f equals Eu+Pu+q, since the remaining linear-c and odd centered terms are exactly the displayed centered moments. Periodic spatial integration conserves total mass, momentum and energy by coordinate FTC. These are moment identities; they do not close P,q in terms of ρ,u,T.

Set h=∫f log(f/f_ref)dv and J_H=∫v f log(f/f_ref)dv. Product differentiation gives h_t+divJ_H=∫(1+log(f/f_ref))Q(f)dv. The constant term is zero by number conservation. K0's log-test gives

h_t+divJ_H=−D,

D=(1/4)∫(A−B)(log A−log B)dν≥0,

since log is increasing. Periodicity gives d/dt∫h=−∫D. The physical kinetic entropy density is s_kin=−k_Bh (J/(m³K)), flux −k_BJ_H (J/(m²sK)), and production k_BD (J/(m³sK)). Reference changes add a multiple of conserved number, changing no production. Fine-grained Gibbs entropy of reversible Hamiltonian flow is distinct: thermodynamics L17 proves its conservation. Thus the model H theorem is not a theorem about every deterministic particle trajectory. ∎

<a id="K2"></a>
## K2. Collision equilibrium and Maxwellian moments

Assume additionally d≥2, log f C² and the collision measure has full support on all elastic quadruples: every nonempty relatively open subset receives positive measure. At each fixed (x,t), a continuous nonnegative production integrand which integrates to zero must vanish everywhere: a positive value would give a positive lower bound on a relatively open neighborhood of positive measure. Hence D=0 implies g(v)+g(w)=g(v')+g(w') for g=log(f/f_ref). (For equality of total production, first conclude D=0 for almost every x; continuity in x/full spatial support extends only when those additional conditions hold.)

Write v=a+z,w=a−z; outgoing pairs may rotate z at fixed |z|. Therefore g(a+z)+g(a−z) is radial in z. Its second-order Taylor term zᵀH_g(a)z is radial, so H_g(a)=λ(a)I, by testing e_i and (e_i±e_j)/√2. Mixed derivatives zero imply ∂_ig depends only on v_i: move along each other coordinate segment and integrate its zero derivative. Each diagonal second derivative thus depends on its own coordinate. Equality of two such diagonal functions for all independent coordinates, d≥2, forces each to the same constant λ. Integrate twice to get g=α+b·v+λ|v|²/2. Integrability forces λ<0: if λ=0 an affine exponential is nonintegrable in at least one infinite direction, and if λ>0 it grows quadratically. Thus

M_{n,u,T}(v)=n(m/(2πk_BT))^(d/2)exp(−m|v−u|²/(2k_BT)), n,T>0.

Conversely this Maxwellian makes A=B at every elastic quadruple by conservation of linear/quadratic terms, and Q(M)=0 in K0's weak identity. Define θ=k_BT/m in (m/s)². Gaussian normalization and moments follow from the exact completed thermodynamics M17 Gaussian chain: ∫e^(−z²/2)dz=√(2π), odd integrals zero, ∫z²e^(−z²/2)dz=∫e^(−z²/2)dz by integration by parts with Gaussian endpoint decay; product Fubini gives d dimensions. Therefore ∫M=n, ∫vM=nu, P=nk_BTI, q=0, E=mn|u|²/2+dnk_BT/2. The local Maxwellian has Q=0 but need not solve transport; varying n,u,T does not give an exact Boltzmann solution without the streaming equation. In d=1 elastic collisions merely exchange velocities, so the Maxwellian equality characterization fails. A collision measure supported only on exchanges in higher dimension likewise allows arbitrary distributions; full support matters. ∎

<a id="K3"></a>
## K3. Controlled passage to Euler under explicit convergence

Theorem (conditional limit, not convergence existence). Let f^ε be regular solutions of ε(f_t^ε+v·∇_xf^ε)=Q(f^ε) on a fixed periodic Ω×[0,T_*], ε>0 dimensionless, with K0's collision invariants and moment identities. Equivalently collision times are scaled by ε at fixed transport units. Suppose n,u,T are C¹ on this strip, n,T uniformly positive and bounded, u bounded, and

∫₀^{T_*}∫Ω∫R^d(1+|v|³)|f^ε−M_{n,u,T}|dv dx dt→0,

in fixed velocity units, with analogous initial convergence weighted by 1+|v|². Then ρ=mn, E=ρ|u|²/2+dnk_BT/2 satisfy the compressible ideal-monatomic-gas Euler conservation laws distributionally with p=nk_BT and initial trace supplied by the initial convergence. Since the limiting fields are C¹ they satisfy these laws pointwise.

Proof. K1 holds for each ε because multiplying the collision term by 1/ε does not change its invariant moments. Every moment density/flux in the weak conservation identity is a polynomial in v of degree≤3 times f^ε. Weighted L¹ convergence bounds the difference against a compact smooth test by C_test times the displayed error; initial polynomial degree≤2 is handled by the initial assumption. Hence pass directly in the unclosed moment equations. K2 evaluates the limiting density and flux exactly: mass ρu, momentum ρu⊗u+pI, energy (E+p)u. A continuous residual distribution is zero pointwise: if nonzero at a point, a small nonnegative test in a same-sign neighborhood contradicts zero pairing. ∎

This result explicitly assumes strong convergence to local equilibrium. It does not derive that convergence from the H estimate, from small Knudsen number alone, from molecular chaos, or from reversible many-body dynamics. The entropy estimate controls a scalar integral and cannot alone compactify x,t; e.g. alternating bounded scalar fields at spatial frequency N have bounded entropy and no strong L² spatial compactness. Periodic plane waves sin(Nx) have fixed L² norm and weak limit0 by integration by parts, so their squares do not converge to the square of the weak limit. Those waves are compactness counterexamples, not asserted kinetic solutions. Transport coefficients, Navier–Stokes–Fourier limits, recollision control and Lanford/Boltzmann–Grad time windows require separate complete theorem chains; they are prospective remarks, never suppliers of this theorem.

<a id="K4"></a>
## K4. An actual controlled fast-relaxation branch: homogeneous conserving BGK

For a concrete nonvacuous relaxation limit, fix nonnegative f_0(v) with finite absolute third moment, n>0, strictly positive centered second moment and finite ∫f_0|log(f_0/f_ref)|. Let M be its K2 Maxwellian with the same mass/momentum/energy, θ>0. In the *BGK model* Q_BGK(f)=(M[f]−f)/τ, τ>0 in s, use the Maxwellian defined by those three moments. In spatially homogeneous data the exact solution at accelerated collision time ετ is

f^ε(t,v)=M(v)+e^(−t/(ετ))(f_0(v)−M(v)).

Positivity follows from convex combination; its moments equal those of f_0 so M[f^ε]=M, and direct differentiation verifies the equation. It is unique among solutions with these finite conserved moments: integrate the model equation against each invariant, so their derivatives vanish, then solve the linear ODE for f with that fixed M. For t>0 it is positive but not necessarily C² in velocity if f_0 is rough; the existence claim here is a velocity-measurable time-differentiable linear evolution with finite moments. Its explicit entropy estimate does not require the regular Boltzmann class.

With ‖g‖_{1,3}=∫(1+|v|³)|g|dv,

‖f^ε(t)−M‖_{1,3}=e^(−t/(ετ))‖f_0−M‖_{1,3},

and ∫₀^{T_*}‖f^ε−M‖_{1,3}dt≤ετ‖f_0−M‖_{1,3}. This proves an actual weighted hydrodynamic/equilibrium limit away from the initial time and in spacetime L¹, with an initial layer when f_0≠M. It gives stationary constant Euler moments; it does not give evolving inhomogeneous Euler data.

For entropy, H(f)−H(M)=∫[f log(f/M)−f+M]≥0 because logM is a quadratic polynomial plus constant, ∫(f−M)log(M/f_ref)=0 by conserved moments, and z logz−z+1≥0 (its derivative logz changes sign at1). Convexity of zlog(z/f_ref), with 0log0=0, then gives

0≤H(f^ε(t))−H(M)≤e^(−t/(ετ))[H(f_0)−H(M)].

All integrals exist: logM grows at most quadratically, f has finite second moment, and convexity bounds positive entropy parts while the relative-entropy identity controls negative parts. BGK is an independently adopted relaxation model, not the binary Boltzmann equation or a many-body derivation. This branch supplies a genuine rigorous controlled limit while the general inhomogeneous Boltzmann limit remains prospective. ∎

<a id="W4"></a>
## W4. Bounded no-slip spaces, compactness and L6 estimate

This additional bounded-domain branch uses AC, hence CC/DC, explicitly because the fully read published thm-sobolev-spaces-are-banach-spaces states AC; no stronger physical assumption is attached. Let Ω⊂R³ be a nonempty bounded open set. Define D_σ={a∈C_c^∞(Ω;R³):diva=0}, H=closure of D_σ in L²(Ω;R³), V=closure of D_σ in H¹_0(Ω;R³), with ‖a‖²_V=‖a‖²₂+‖∇a‖²₂. H¹_0 is the H¹ closure of C_c^∞, with weak derivatives and a.e. quotient as in published def-wkp-zero-as-a-sobolev-closure. Every V element has zero Sobolev boundary data and distributional divergence zero by passing its approximating test identities. This definition does not assert the separate solenoidal-density theorem identifying V with *every* H¹_0 divergence-free field on every possible domain. The weak solution below belongs to H¹_0 and satisfies every compact smooth divergence-free test, independently of that identification. For boundary traces as actual pointwise/trace maps assume C¹ boundary and use the separate trace supplier; the analytic existence result itself needs only bounded openness.

The published lem-zero-extension-from-w-one-p-zero was read completely. It maps H¹_0 isometrically to H¹(R³), preserving derivative zero extensions, under CC. Completeness is the fully read published thm-sobolev-spaces-are-banach-spaces; the p2 squared norm here is equivalent to its finite derivative norm and arises from the derivative L² inner product. Thus V is Hilbert. It is separable: enclose Ω in a periodic cube with a margin; zero extension of each derivative coordinate embeds its H¹ graph isometrically in a finite product of L²(cube). Root Fourier torus isometry supplies a countable dense family there (finite rational Fourier coefficient vectors). In any subspace of a separable metric space, the ambient rational balls form a countable base; choose a point in each nonempty base intersection. These choices are countable and produce a dense set in V. Since D_σ is dense in V by definition, choose one D_σ approximant at each rational precision for this dense sequence. It is also H-dense since D_σ is H-dense. Gram–Schmidt in the H inner product, omitting zero remainders, yields H-orthonormal smooth compact solenoidal e_j whose finite spans are V-dense as well as H-dense. All finite-step denominators are positive by omission; no assumed Stokes spectral theorem is used.

Compactness V→H has a complete zero-extension proof. For w∈C_c^∞(R³), w(x−h)−w(x)=−∫₀¹h·∇w(x−sh)ds, so Cauchy–Schwarz in s and translation invariance give ‖w(·−h)−w‖₂≤|h|‖∇w‖₂; density and isometric extension give the same for E_0a, a∈V. Fix a nonnegative smooth compactly supported unit-mass mollifier η_δ(x)=δ^−3η(x/δ). Integrating this translation estimate gives ‖E_0a−η_δ*E_0a‖₂≤Cδ‖∇a‖₂. On the V-unit ball the mollified fields have a common compact support (Ω lies in a fixed box) and common sup/gradient bounds by Cauchy–Schwarz with η_δ and ∇η_δ. On that box a finite spatial grid and the uniform derivative bound reduce approximation of each such field to finitely many bounded grid values; quantizing those values gives finite sup-norm nets and therefore finite L² nets. Choose δ for the desired error, then use the mollified nets. This proves total boundedness of the V-unit ball in H; completeness of H makes its closure compact.

Consequently for the H-orthogonal projections Π_K onto span(e_1,…,e_K), there is δ_K↓0 such that ‖(I−Π_K)a‖₂≤δ_K‖a‖_V. To prove it, use a finite ε-net of the compact closure of the V-unit ball. Π_K converges strongly in H on each net point because e_j is H-complete; uniform contraction and the net triangle inequality give sup≤3ε. This is the exact integrated Galerkin-tail control used below, without presuming Π_K is V-bounded uniformly in K.

A full elementary L6 inequality closes the nonlinear test-extension gap. For compact smooth scalar h define A_i as the integral of |∂_ih| along its i-th coordinate line, so |h|≤A_i by FTC. Then ∫|h|^(3/2)≤∫(A_1A_2A_3)^(1/2). Integrate first x_1 and use Cauchy–Schwarz to replace (A_2A_3)^(1/2) by (B_2(x_3)B_3(x_2))^(1/2), where B_2=∫A_2 dx_1 and B_3=∫A_3 dx_1. Cauchy–Schwarz over (x_2,x_3) gives the bound (∫A_1)^(1/2)(∫B_2∫B_3)^(1/2)=∏‖∂_ih‖₁^(1/2). Thus ‖h‖_{3/2}≤∏‖∂_ih‖₁^(1/3). For a real smooth vector w take h=|w|⁴, a smooth polynomial; |∂_ih|≤4|w|³|∂_iw|. Hölder gives ‖w‖₆⁴≤4‖w‖₆³∏‖∂_iw‖₂^(1/3)≤C‖w‖₆³‖∇w‖₂. Divide if ‖w‖₆>0; the zero case is immediate. Extension by zero and H¹_0 density give ‖a‖₆≤C‖∇a‖₂: approximants are Cauchy in L6 by this inequality and their L² limit identifies the same a.e. function. Hölder also gives ‖a‖₄≤‖a‖₂^(1/4)‖a‖₆^(3/4), since ∫|a|⁴=∫|a|·|a|³≤(∫|a|²)^(1/2)(∫|a|⁶)^(1/2). Thus energy-bounded velocities satisfy u∈L^{8/3}(0,T;L⁴), and the nonlinear functional b(u,u,φ)=−∫u_i u_j∂_jφ_i obeys |b|≤‖u‖₄²‖∇φ‖₂, with time norm L^{4/3}(0,T;V*). ∎

<a id="W5"></a>
## W5. Global bounded-domain no-slip Leray–Hopf construction

Theorem. Assume AC, Ω⊂R³ bounded open, ν>0, u_0∈H of W4. Then there is u∈C_w([0,∞);H)∩L∞(0,∞;H)∩L²_loc([0,∞);V), strongly attaining u_0 at zero, which satisfies

∫₀∞[(u,φ_t)+(u⊗u,∇φ)−ν(∇u,∇φ)]dt+(u_0,φ(0))=0

for every smooth compactly time-supported D_σ-valued test; equivalently for compact time-supported C¹ curves into V. The initial energy inequality holds for every t≥0, and the restart inequality holds for all t≥s from a full-measure set of s, plus s=0, exactly as in W2. This is an unforced homogeneous no-slip global weak existence result, with no assertion of global 3D smoothness or uniqueness. It is not a theorem of arbitrary compressible or thermal model evolution.

Proof. For u_N=∑_{j≤N}a_j e_j solve

(u_N',e_i)+∫(u_N·∇)u_N·e_i+ν(∇u_N,∇e_i)=0, i≤N,

with u_N(0)=Π_Nu_0. Coefficients solve a finite polynomial ODE, whose exact existence/continuation supplier is NR E2. Testing by u_N gives energy equality since its smooth compact solenoidal transport term is the integral of div(u_N|u_N|²/2), zero by ordinary FTC, and integration by parts gives viscosity. The coefficient norm is bounded forever, so the same compact-ball ODE continuation proof as W2 makes u_N global.

For fixed i and N≥i, |(u_N',e_i)|≤‖∇e_i‖∞‖u_N‖²₂+ν‖∇e_i‖₂‖∇u_N‖₂. Integrated over [s,t], this gives a uniform modulus C_i|t−s|+D_i|t−s|^(1/2), on each finite horizon, by energy and Cauchy–Schwarz. Thus the rational-grid diagonal proof in W1 gives uniform convergence of each H-coefficient. The uniform H norm defines an H-valued weakly continuous limit u for every t by finite sums and finite-polynomial approximation.

Extract also a weakly convergent subsequence in L²(0,T;V). Here is the full weak compactness input rather than an unstated reflexivity step. A separable Hilbert space X has a countable orthonormal basis by Gram–Schmidt of its dense sequence. A bounded sequence x_N has convergent subsequences in each scalar coefficient; diagonalize. Finite squared sums show the limiting coefficients are square summable with norm≤liminf‖x_N‖ along a subsequence realizing the liminf. The corresponding Hilbert series defines x; approximate any fixed test vector by finite partial sums and use bounded norms to show (x_N,y)→(x,y). This proves weak subsequential convergence and norm lower semicontinuity. X=L²(0,T;V) is Hilbert: completeness follows by a subsequence with summable norm differences and pointwise summation plus L² triangle/Cauchy tails, using Tonelli; a general Cauchy sequence then has this same limit. It is separable because V is separable and finite step functions with rational time endpoints and values in its countable dense subset approximate strongly measurable finite-energy curves. Explicit approximation: truncate the norm, approximate a strongly measurable curve by countably valued simple maps, then finite valued truncations; scalar L² indicator functions on [0,T] are approximated by rational-interval step functions, using the published Fourier L² completeness on the interval's periodic identification, approximating trigonometric polynomials by step samples. This gives the required countable dense family without a hidden arbitrary-index compactness theorem. The weak V limit agrees with the coefficient limit in distribution because H-pairing with each e_i is a continuous V functional, and hence defines the same u a.e. In particular u∈L²V.

W4 tails yield ∫‖(I−Π_K)u_N‖²₂≤δ_K²∫‖u_N‖²_V, uniformly; weak convergence gives the corresponding bound for u. Together with uniform finite-coefficient convergence these tails imply u_N→u in L²_tH. The products therefore converge strongly in L¹ spacetime. Diagonalize on integer horizons as in W2. A summable-error subsequence gives strong H convergence for almost every s. Weak L²V convergence on each horizon, restricted to any [s,t], gives liminf gradient bounds. A bounded linear restriction/projection preserves weak convergence by composing test functionals; the preceding Hilbert norm argument applies to the gradient projection. At fixed t finite H sums give the pointwise norm liminf. Pass in the Galerkin energy equalities: right side converges at s=0 and for the full-measure strong times. This proves every stated energy/restart inequality. Strong initial convergence follows as in W2 from weak continuity and the norm limsup.

For each fixed finite test φ in span(e_1,…,e_K), the Galerkin identity is exact for N≥K. Coefficient and product convergence handle time/transport terms; weak L²V convergence handles viscosity. To extend to arbitrary C¹ compactly time-supported V curves, let Q_K be the V-orthogonal projection onto that same finite span, NOT Π_K. Its norm is≤1; V-density makes Q_K→I strongly in V. Compactness of the time curves φ and φ_t and a finite ε-net make this convergence uniform for both. Q_Kφ is an allowed finite test with the same time support. W4 gives a uniform L^{4/3}_tV* bound on the nonlinear terms for u_N and u, while the approximation error tends to zero in L⁴_tV; Hölder controls the transport error. Time and viscosity errors tend to zero by the L∞H/L²V bounds. Thus all tests in the theorem satisfy the identity. ∎

Pressure is intentionally absent from this solenoidal variational formulation. Reconstructing bounded-domain pressure, specifying Stokes domains, boundary tractions and elliptic regularity requires the exact de Rham/Nečas/trace supplier chain supplied by the smooth-boundary worker. No boundary pressure theorem is hidden in W5.

Physical wrapper. Adopt a constant-density positive-viscosity incompressible Newtonian continuum in a fixed bounded open vessel, zero body force, stationary impermeable no-slip wall formulated as H¹_0 boundary data, and initial velocity in the H closure above. Set ν=μ/ρ_0. W5 provides a global H¹_0 weak model velocity; its energy is nonincreasing. On a C¹ vessel, an independently supplied trace theorem identifies this H¹_0 boundary datum with a zero trace; on a rectangular vessel the boundary condition here remains the H¹_0 closure formulation without consuming an unstated trace theorem. This is distinct from the periodic idealization; boundary empirical validity is a postulate and no measurements or universal wall law are asserted.

<a id="W6"></a>
## W6. Rectangular evolving pressure, with complete test-operator chain

Specialize W5 to a finite rectangle Ω=∏_(i=1)^3(a_i,b_i). The smooth worker's complete S10 proof was read: `workers/smooth-pde/proofs.md#s10`, canonical proposed supplier `lem-fd-rectangular-test-divergence-inverse`. It constructs a continuous linear R:D_0(Ω)→D(Ω;R³), div Rh=h, with fixed-support enlargement and every output seminorm bounded by finitely many input seminorms. D_0 consists of compact smooth scalar tests of spatial integral zero; fix θ∈D(Ω) with integral1. This exact local mathematical supplier is completed research, not published/audited status.

On (0,∞)×Ω put T=−∂_tu−div(u⊗u)+νΔu, a vector spacetime distribution because u∈L²_loc and u⊗u∈L¹_loc. W5 says T annihilates every smooth compactly supported spacetime vector test ψ with div_xψ=0. For any scalar test φ put φ_0(t,x)=φ(t,x)−θ(x)∫Ωφ(t,y)dy and define

⟨π,φ⟩=−⟨T,R_xφ_0⟩.

Here R_x acts at each time. Its S10 integral formulas commute with time differentiation: all integrals are over fixed finite intervals and tests have smooth bounded derivatives, so ordinary dominated differentiation applies. The fixed spatial support bounds of R and the unchanged compact time support make R_xφ_0 a spacetime test; its seminorms through every time/spatial order are bounded by finite input seminorms. Thus the displayed functional is a spacetime distribution. For vector test ψ, ∫Ωdiv_xψ=0, and ψ−R_xdiv_xψ is a compact smooth divergence-free spacetime field. Therefore

⟨∇_xπ,ψ⟩=−⟨π,div_xψ⟩=⟨T,R_xdiv_xψ⟩=⟨T,ψ⟩.

It follows that u_t+div(u⊗u)+∇π=νΔu in spacetime distributions, together with H¹_0 no-slip and the W5 initial/energy properties. The normalization ⟨π,a(t)θ(x)⟩=0 for every compact temporal test a fixes the spatially constant ambiguity. Indeed any zero-spatial-gradient difference annihilates φ_0=div_xR_xφ_0, so acts only on ∫φdx; it is a distribution of time tensored with the spatial constant, not necessarily an ordinary time function. No pressure L² estimate, corner regularity or pointwise boundary traction is claimed. Physical p=ρ_0π has Pa units. This completes a useful bounded no-slip *velocity and pressure* branch while respecting the exact distributional regularity proved. ∎
