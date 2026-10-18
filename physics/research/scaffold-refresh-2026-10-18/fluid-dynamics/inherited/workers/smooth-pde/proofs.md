# Smooth fluid PDE suppliers and conditional uses

Research design, 2026-10-03. This module owns proposed pairs FD-S01–S03. All analytical theorems below are mathematics: their parameters are numbers, not empirical claims. Physical use additionally requires the stated continuum and constitutive assumptions. No production item, import, gate or publication is changed.

<a id="s01"></a>

## S01. Fourier spaces, estimates and pressure (mathematics)

Work on T^d=(R/2πZ)^d, 1≤d≤3, normalized Lebesgue measure. Coordinates here are dimensionless; physical coordinates are X=Lx, t_phys=t_0t. For real q with n components, q̂(k)=∫q(x)e^(−ik·x)dx, w_k=(1+|k|²)^(1/2), ||q||_m²=Σw_k^(2m)|q̂(k)|². H^m is the completion of real trigonometric polynomials; reality is q̂(−k)=conj(q̂(k)). The coefficient isometry defines the L² representative. E24's full inspected Fejér argument, tensorized in d variables, proves continuous Fourier uniqueness and density; completion yields Parseval. Countable Choice is inherited for coefficient subsequence constructions. All use below is finite-dimensional algebra, countable series and their limits.

For σ>d/2, Σ|q̂|≤Cσ||q||_σ: Cauchy–Schwarz and Σw_k^(−2σ)<∞, with shells O(j^(d−1)). For σ>j+d/2 the identical estimate with |k|^j proves H^σ⊂C^j, uniform convergence of derivative series and their identification by the fundamental theorem of calculus. Discrete convolution Young follows by Minkowski on finite translates, ||Σb_l a_(k−l)||_ℓ²≤||a||_ℓ²Σ|b_l|, then completeness. Since w_(k+l)^m≤C_m(w_k^m+w_l^m), ||fg||_m≤C_m||f||_m||g||_m for m>d/2. Polynomial density extends products to H^m and uniform convergence identifies them with pointwise products.

For integers m≥s≥4 and d≤3, for each pair f,g,
||[Λ^m,f]∂_jg||_2≤C_m(||f||_m||g||_s+||f||_s||g||_m).
Indeed the coefficient is Σ_l(w_k^m−w_l^m)f̂(k−l)il_j ĝ(l). The mean-value bound is |w_(l+v)^m−w_l^m|≤C_m|v|(w_v^(m−1)+w_l^(m−1)). Its two resulting convolutions are w_v^m|f̂(v)|*|l||ĝ(l)| and |v||f̂(v)|*w_l^m|ĝ(l)|. Young and Σ|k||q̂(k)|≤C_s||q||_s prove the estimate. This is exactly the sufficient tame estimate; no endpoint Kato–Ponce/BKM theorem is invoked.

For vector u, divergence-free means k·û(k)=0. Set P_0=I, P_k=I−kkᵀ/|k|² for k≠0; P is an orthogonal contraction in each H^m and commutes with Λ and derivatives. Define π̂(0)=0 and π̂(k)=−Σ_ij(k_i k_j/|k|²)widehat(u_i u_j)(k). If div u=0, Δπ=−∂_i∂_j(u_i u_j) and ∇π=−(I−P)(u·∇u), by direct coefficient multiplication. The multiplier is bounded, so ||π||_m≤C||u||_m² for m>d/2. Smooth u yields smooth π; any other pressure with this gradient differs by a spatial constant. On multiply connected walls this torus projection formula is not a boundary pressure solver.

**Earlier difference-energy lemma.** Suppose u,v are given smooth divergence-free periodic solutions of the projected incompressible equation with the same ν≥0, without assuming any existence theorem. Set w=u−v. Subtraction gives w_t+P(u·∇w+w·∇v)=νΔw. Because w is in the range of P, testing with w removes P; periodic integration and div u=0 remove the first transport term. Thus (||w||²)'≤2||∇v||∞||w||², and multiplying by exp(−2∫||∇v||∞) gives the quantitative stability bound. For any given smooth solutions q,v of q_t+ΣA_j(q)∂_jq=0 where each A_j is a fixed real symmetric linear function of q, subtraction gives w_t+ΣA_j(q)∂_jw=−ΣA_j(w)∂_jv. Symmetric integration by parts and ||A_j(w)||≤C|w| give (||w||²)'≤C(||∇q||∞+||∇v||∞)||w||². The same integrating factor proves uniqueness. Interpolation by weighted coefficient Hölder gives C_tH^(s−1) stability when both states have a common H^s bound. These are statements about already given smooth solutions; they have no local-IVP existence prerequisite.

<a id="s02"></a>

## S02. Incompressible local smooth evolution (mathematics)

For ν≥0 and smooth divergence-free u_0 on T^d, there is T depending only on ||u_0||_s, integer s≥4, and a unique C∞ solution of u_t+P(u·∇u)=νΔu. Pressure is S01's mean-zero π; this is the full equation u_t+u·∇u=−∇π+νΔu. E30, read in full, proves this for d=3. Its proof extends literally to d≤3 because every lattice estimate improves. To make the supplier chain explicit: truncate to |k|_∞≤N and solve its real polynomial coefficient ODE by E2. Testing at order m, the divergence-free principal transport integral vanishes. S01's commutator yields (1/2)(||u_N||_m²)' +ν||∇u_N||_m²≤C_m||u_N||_s||u_N||_m². At m=s integration of Y'≤C_sY² yields Y≤2Y_0 on T≤(2C_sY_0)^−1; zero data give the zero solution. Finite coefficient balls and E2/M10 continuation keep each ODE alive on T. For every m≥s, Gronwall then yields ||u_N||_m≤||u_0||_m exp(2C_mY_0T); the same T works at every order. The equation bounds time derivatives in H^(m−2).

For each fixed Fourier cutoff K, coefficients are uniformly bounded and equicontinuous in time. Choose subsequences convergent at rational times, then uniform convergence by equicontinuity and finite time grids; diagonalize over countably many coefficients. The bound ||(I−P_K)u_N||_(m−1)≤C_m/K converts this to C_tH^(m−1) convergence, simultaneously for all m. Product convergence in C_tH^(m−2), Δ convergence in C_tH^(m−3), and uniform Fourier-tail approximation of continuous time curves permit passage in the integral equation. Hence u is spatially smooth, and time smoothness follows inductively from its equation. Initial data and divergence constraints survive coefficientwise; S01 recovers pressure. Uniqueness follows from the earlier S01 difference-energy lemma, so the subsequence has a unique limit. These steps reproduce the inspected E30 construction, rather than a generic existence citation.

**Continuation contract.** For a smooth solution on [0,T*) with T* finite, if sup_(t<T*)||u(t)||_s<∞, it extends past T*. Choose t_n↑T*. The local theorem supplies a lifespan δ depending only on that bound, uniformly for the smooth data u(t_n), even though higher derivative bounds at t_n may grow with n. One n with T*−t_n<δ gives a smooth extension by uniqueness on overlap. No limit in H^s at T* is needed. Thus a finite maximal endpoint implies limsup||u||_s=∞. This is the claimed criterion; neither an L² bound nor mere pointwise boundedness at individual times substitutes for a uniform bound.

<a id="s03"></a>

## S03. Polytropic compressible Euler local smooth IVP (mathematics)

Let κ>0, γ>1, a=(γ−1)/2, and initial ρ_0,u_0 smooth periodic with min ρ_0>0. The PDE is ρ_t+div(ρu)=0 and u_t+u·∇u+ρ^−1∇(κρ^γ)=0. Put c(ρ)=√(κγ)ρ^a and r=c/a. Then r_t+u·∇r+a r div u=0, u_t+u·∇u+a r∇r=0. This follows by r'(ρ)=c/ρ and ρ^−1p'(ρ)∇ρ=c∇r. Conversely ρ=(ar/√(κγ))^(1/a) recovers both equations wherever r>0; this smooth power map is defined only there.

For q=(r,u_1,…,u_d), the system is q_t+Σ_j A_j(q)∂_jq=0 with A_j(q)=u_j I+a r(e_0e_jᵀ+e_je_0ᵀ); e_j indexes velocity component j. Every A_j is real symmetric and linear in q. No variable symmetrizer or unexplained nonlinear composition estimate is needed.

For q_N solving q_N,t+P_NΣ A_j(q_N)∂_jq_N=0, test with Λ^(2m)q_N. The principal term is ∫Qᵀ A_j∂_jQ=−(1/2)∫Qᵀ(∂_jA_j)Q, Q=Λ^mq_N, by symmetry and periodic integration. Thus its modulus is ≤C||∇q_N||_∞||q_N||_m². The remaining commutators are componentwise S01 and yield (||q_N||_m²)'≤C_m||q_N||_s||q_N||_m². The same scalar bound and higher-order Gronwall as S02 produce a common T and all-order bounds. Time derivatives are bounded in H^(m−1). The finite-mode/tail argument of S02, using these explicitly stated bounds, gives convergence in C_tH^(m−1) at every order and passage in the polynomial first-order equation. It yields a smooth q solution. Galerkin r_N need not stay positive; its polynomial equation is defined globally, so that is harmless. The limit obeys ||r(t)−r_0||_∞≤C_s∫_0^t||q_τ||_(s−1)dτ≤C T sup||q||_s². Shrink T to make this less than min r_0/2. Then r>0, and the inverse power reconstructs a smooth positive density and the original Euler solution.

For two q solutions set w=q−v. Since A_j is linear, w_t+Σ A_j(q)∂_jw=−Σ A_j(w)∂_jv. Symmetry and integration by parts give (||w||_2²)'≤C(||∇q||_∞+||∇v||_∞)||w||_2², hence uniqueness and L² stability. Interpolation ||w||_(s−1)≤||w||_2^(1/s)||w||_s^((s−1)/s), obtained by coefficient Hölder, supplies continuous dependence on uniformly H^s-bounded positive-r data on a common interval with a common positive lower bound. Through the smooth inverse map this gives uniform continuous dependence of density and velocity; no strongest H^s dependence is asserted.

Continuation follows by the S02 restart argument if sup||q||_s is finite and inf_(t<T*,x)r>0. Thus a finite maximal endpoint requires failure of at least one of these two conditions. The theorem is smooth periodic, isentropic, strictly positive density and polytropic; it does not cover vacuum, shocks, temperature coupling, arbitrary equations of state or viscous Euler systems.

<a id="s04"></a>

## S04. Energy, stability, vorticity and inviscid limit (mathematics)

For smooth periodic incompressible solutions, multiplying by u and integrating yields (1/2)(||u||_2²)'=−ν||∇u||_2²: transport integrates to zero and pressure contributes −∫div(πu)=0. Mean velocity is constant by integrating the equation. If mean u=0, Parseval gives ||∇u||²≥||u||² (all nonzero lattice frequencies have |k|²≥1), hence ||u(t)||≤e^(−νt)||u_0||. This is an energy statement conditional on the solution lifespan, not global smooth existence.

For w=u−v at the same ν, w_t+P(u·∇w+w·∇v)=νΔw. Testing gives (||w||²)'≤2||∇v||_∞||w||². Multiplying by exp(−2∫||∇v||∞) and integrating proves ||w(t)||≤exp(∫||∇v||∞)||w(0)||. Common H^s bounds and the preceding interpolation give C_tH^(s−1) dependence. Thus this quantitative uniqueness does not invoke unproved weak-solution uniqueness.

For an Euler solution v and viscous u^ν with identical smooth initial data, their local lifespan T may be chosen uniformly for 0≤ν≤1 by S02's ν-independent bound. Set w=u^ν−v. Its forcing is νΔv. The same test yields y'≤||∇v||∞ y+ν||Δv||_2 for y=||w||_2 (regularize sqrt(y²+ε²), then ε↓0). Therefore y(t)≤ν∫_0^t exp(∫_s^t||∇v||∞) ||Δv(s)||_2ds. This O(ν) L² inviscid limit is on a fixed smooth periodic time interval. Interpolation and uniform H^s bounds give O(ν^(1/s)) in H^(s−1). It asserts no no-slip-wall limit or boundary-layer estimate.

For d=3, ω=curl u obeys ω_t+u·∇ω=ω·∇u+νΔω, obtained by component differentiation and cancellation using div u=0. For d=2 scalar ω=∂_1u_2−∂_2u_1, the stretching term is absent: ω_t+u·∇ω=νΔω. Testing proves (||ω||²)'=−2ν||∇ω||². If ν=0, the ODE flow of smooth u transports ω; uniqueness and the determinant equation J'=div u J=0 show its L^p norms and supremum are preserved. For ν>0 the maximum principle on a compact torus gives ||ω(t)||∞≤||ω_0||∞: compare ω with M+εt; at a first positive maximum its gradient is zero, Laplacian nonpositive and time derivative at least ε, contradicting the equation; apply also to −ω and ε↓0. These estimates alone are not presented as a proof of 2D global smoothness, which needs an additional high-order/logarithmic or smoothing closure.

Compressible energy: define U(ρ)=κρ^γ/(γ−1), E=ρ|u|²/2+U(ρ). From continuity, ∂_t(ρf)+div(ρuf)=ρD_tf. Hence kinetic balance is −u·∇p, internal balance is ∂_tU+div(Uu)=(U−ρU')divu=−p divu. Summation gives E_t+div((E+p)u)=0. Integrating proves conservation, conditional on smooth positive density and periodicity. U''=κγρ^(γ−2)>0 gives strict convexity, but conserved energy controls neither gradients nor shock formation.

<a id="s05"></a>

## S05. No-slip Stokes variational branch, including its missing helpers (mathematics)

Let Ω⊂R^d be a nonempty bounded open set contained in (−R,R)^d. Define H^1_0(Ω;R^d) as the completion of C_c∞ vector fields in ||v||_(H1)²=∫(|v|²+|∇v|²), using weak derivatives. Let V={v∈H^1_0: div v=0 distributionally}. Divergence is continuous into L², so V is closed. For compactly supported smooth v, extension by zero and v(x)=∫_(−R)^(x_1)∂_1v(s,x')ds imply ∫|v|²≤(2R)²∫|∂_1v|². This passes to the completion. Thus (v,w)_V=∫∇v:∇w is a complete positive definite Hilbert inner product: a gradient-Cauchy sequence is H1-Cauchy by that inequality, and its limit remains divergence-free. Density and the weak-derivative definition ensure the completion map into L² is injective.

For μ>0 and f∈L², F(v)=∫f·v is continuous on V with |F(v)|≤2R||f||_2||v||_V. There is a unique u∈V with μ∫∇u:∇v=F(v) for all v∈V; ||u||_V≤(2R/μ)||f||_2. Here is a proof without hiding Lax–Milgram: for a nonzero bounded real linear functional F on a Hilbert space, its kernel K is closed. Given x with F(x)=1, choose y_n∈K with ||x−y_n||² tending to the infimum. The parallelogram identity and (y_n+y_m)/2∈K make y_n Cauchy. Completeness yields a closest y∈K. Let z=x−y; minimizing ||z−tk||² at t=0 for each k∈K gives z⊥K, and F(z)=1. Each v−F(v)z lies in K, hence <z,v>=F(v)||z||². Set u=z/(μ||z||²). If F=0 set u=0. This proves representation, and testing the difference with itself proves uniqueness. Testing with u gives the asserted estimate. Countable Choice suffices to select the minimizing sequence.

This is the stationary **projected weak Stokes problem** with homogeneous no-slip encoded by H^1_0; the solution map f↦u is bounded L²→V. It deliberately makes no assertion of a pressure in L², smoothness up to walls, or a full −μΔu+∇p=f distributional system. Such a pressure requires a de Rham/inf-sup or right inverse of divergence theorem, absent from this proved chain; it was a separately named supplier obligation at this stage. S10 below closes pressure recovery in H^−1 on rectangles with a fully proved divergence-test inverse; a stronger L² estimate remains unasserted. S07 supplies smooth channel pressure directly. Do not silently rename this variational result a complete classical Stokes theorem.

<a id="s06"></a>

## S06. Boundary domains and conditional balances (mathematics)

For the following identities take Ω bounded C², u∈C¹_tC²_x on [0,T]×Ω̄, p∈C¹_x, ρ constant >0, η>0, D=(∇u+∇uᵀ)/2, σ=−pI+2ηD. Assume div u=0 and ρ(u_t+u·∇u)=divσ+ρb, b continuous. Direct integration and the bounded-C¹ divergence theorem of E13 give
K'=∫ρb·u+∮u·σn−∫2η|D|²−∮ρ|u|²(u·n)/2,
K=∫ρ|u|²/2. The contraction σ:∇u=2η|D|² follows from symmetric/skew orthogonality and trace∇u=0.

Stationary no-slip means u=0 on ∂Ω. Impermeable Navier slip means u·n=0 and (σn)_tan=−βu_tan, β≥0 in Pa·s/m; pressure has zero tangential component. Then K'=∫ρb·u−∫2η|D|²−∮β|u_tan|². Perfect slip is β=0. Moving walls u=g change the boundary work to ∮g·σn and require g·n=0 for a fixed impermeable region. These are independent mathematical boundary data and physical wall hypotheses. For inviscid Euler impermeability u·n=0 cancels flux and pressure work; no-slip is not a generally justified Euler boundary condition.

Smooth uniqueness under fixed homogeneous no-slip, or Navier slip with the same β, follows for w=u−v by testing its stress-form difference, yielding ρ(||w||²)'/2+2η||Dw||²+∮β|w_tan|²≤ρ||∇v||∞||w||². Advective boundary flux vanishes because u·n=0. Gronwall proves uniqueness in this smooth class. No existence or Korn-coercivity theorem is inferred.

For a smooth Euler solution on a fixed wall, dot momentum with n to obtain ∂_np=ρ(b−u·∇u)·n because u_t·n=0. Interior pressure obeys Δp=−ρ∂_iu_j∂_ju_i+ρdiv b. This is necessary Neumann data; solvability, geometric regularity and additive constants require a boundary Poisson theorem and its compatibility integral. For viscous no-slip replace the data by ∂_np=(ρb+ηΔu−ρu·∇u)·n, again a necessary identity, not a constructed pressure.

Exterior means Ω=R³\K with K compact and C² boundary. An exterior finite-energy smooth solution must specify decay or weighted Sobolev data; no torus existence theorem transfers to it. The above integrated identity remains valid when cutoff-annulus terms vanish. For example |u|≤C(1+|x|)^−2, |∇u|≤C(1+|x|)^−3, |p|≤C(1+|x|)^−2 uniformly on a compact time interval ensures annular cubic flux O(R^−3), pressure work O(R^−2) and viscous work O(R^−3); finite energy and dissipation follow. Integrate first on Ω∩B_R and let R→∞, using these bounds. This is conditional exterior energy/uniqueness, not exterior smooth existence.

Compatibility for asserted smooth wall IVPs includes div u_0=0, u_0 boundary trace equal prescribed g(0), ∫g·n=0, and every time derivative of the boundary relation implied by the PDE at t=0. Mere C∞ initial data and first-order trace are not a guarantee of C∞ up-to-time-zero solutions. For channel sine evolution below, odd smooth extension encodes all orders of the stationary no-slip compatibility.

<a id="s07"></a>

## S07. Worked exact wall and viscous branches (mathematics and conditional physics)

In Ω=T²×(0,h), with streamwise coordinates periodic, a pressure drop −Gx cannot be a single-valued periodic pressure. Use constant body acceleration b=(G/ρ,0,0) and constant pressure instead. The steady no-slip profile u=(G y(h−y)/(2η),0,0) solves momentum, div u=0 and walls; flux per unit transverse width is Gh³/(12η). This repairs the incompatible periodic-pressure version of the usual channel notation. In an infinite channel, p=p_0−Gx is valid and gives the same profile with b=0. Couette with top-wall speed V and no pressure/body force is u=(Vy/h,0,0), ω_z=−V/h, flux Vh/2. Uniqueness within each shear ansatz follows because the difference solves v''=0 with zero endpoints; full-flow uniqueness/stability is S06 under the applicable common wall data.

For arbitrary smooth F whose odd 2h-periodic extension is C∞, with η/ρ=ν>0, initial shear u_0=(F(y),0,0) has exact global solution u=(Σ_(n≥1)b_n exp(−ν(nπ/h)²t)sin(nπy/h),0,0), p constant, b_n=(2/h)∫_0^hF(y)sin(nπy/h)dy. E24 proves coefficients represent F, with all-order decay from integration by parts. Every required derivative series converges uniformly on compact time intervals including t=0 because all-order decay dominates its polynomial factors. Differentiation verifies v_t=νv_yy and zero walls. Convective term vanishes identically, so this is a global smooth nonlinear Navier–Stokes solution in the shear subspace. L² difference energy and sine Parseval give ||v(t)||≤e^(−νπ²t/h²)||F||. It is not a global theorem for arbitrary 3D perturbations.

A genuine compressible viscous example is uniform density ρ_*>0, velocity u=(V(t,y),0,0), pressure κρ_*^γ constant on T³. Continuity and div u vanish, V_t=νV_yy gives the same heat-mode solution; Newtonian stress div(2ηD0+ζ div u I)=ηΔu, with D0=D−(div u)I/3 and ζ the bulk viscosity, so all ζ terms vanish. This is an exact global solution of the compressible barotropic viscous model. It does not furnish the general strictly positive nonuniform-density IVP.

<a id="s08"></a>

## S08. Linear acoustics and scaling (mathematics and conditional physics)

Linearizing the barotropic equations at (ρ_*,0) means defining the distinct tangent model z_t+ρ_*div v=0, v_t+(c_*²/ρ_*)∇z=0, c_*²=p'(ρ_*)>0. Smooth periodic data are evolved coefficientwise by the constant skew-adjoint operator in energy ||v||²+(c_*²/ρ_*²)||z||². For k≠0 set ω=c_*|k|: ẑ(t)=ẑ_0 cosωt−iρ_*(k·v̂_0)sinωt/ω; v̂(t)=v̂_0−i(c_*²/ρ_*)k∫_0^t ẑ(s)ds. Zero modes are constant; transverse velocity is constant. Differentiating verifies the two equations, and each mode conserves that energy because the two cross terms cancel in the real inner product. Thus all Sobolev norms of the paired weighted state are preserved, its smooth series and derivatives converge, and uniqueness follows by energy. Then z_tt=c_*²Δz. The nonlinear fluid is not claimed equal to its tangent model.

With X=Lx, t_phys=(L/U)t, u_phys=Uu, density ρ_refρ, pressure ρ_refU²p, incompressible coefficient becomes Re^−1=ν/(UL), Re=ρ_refUL/η. Compressible acoustic ratio is Ma=U/c_*; writing pressure scaled by ρ_ref c_*² gives Ma^−2∇p in nondimensional momentum. These follow by chain rule, not a limiting theorem. NS invariance on R^d is u_λ(t,x)=λu(λ²t,λx), π_λ=λ²π(λ²t,λx) at the same ν. Each term scales λ³, div scales λ²; initial L² norm scales λ^(1−d/2). On a fixed torus arbitrary λ changes the period, so only appropriately transformed cells are asserted. Euler scaling u_λ(t,x)=a u(ab t,bx), π_λ=a²π(ab t,bx), a,b>0 follows because every momentum term scales a²b. These are equation symmetries, not empirical similarities without corresponding forcing, boundary and material changes.

## Explicit model units and status

In SI physical coordinates: t seconds; X,L,h metres; u,U,c,r,V m/s; ρ kg/m³; p,σ,U(ρ),E J/m³=Pa; ν m²/s; η,ζ Pa·s; b m/s²; G Pa/m; β Pa·s/m; γ,a,Re,Ma dimensionless; κ has Pa·(m³/kg)^γ; ω=curl u s^−1; volume flux per unit width m²/s. The mathematical π in S01–S04 is pressure divided by constant density, m²/s². c²=p'(ρ) has m²/s². ρ,η,ζ,κ,γ and wall laws are primitive adopted model parameters; ν=η/ρ, Re,Ma,c,r and π are derived. Incompressibility, positivity, Newtonian isotropy, polytropic isentropy, periodicity, no-slip/slip and boundary forcing are declared physical hypotheses, never conclusions from the pure mathematics.

<a id="required-and-prospective-coverage-boundaries"></a>

## Required and prospective coverage boundaries

The general nonlinear compressible viscous IVP, general classical wall/exterior incompressible IVPs, and full L² Stokes pressure/up-to-boundary regularity are established topics in mathematics but no complete chain for them is supplied here. S09 below supplies global2D periodic smooth viscous regularity, and S10 supplies full rectangular stationary Stokes distribution pressure recovery. They remain explicitly unconsumed prerequisite obligations if a canonical scaffold asserts them. Exact scopes above are fully argued and must not be silently broadened. Compressible shock formation is not continued smoothly by S03; full entropy systems belong to their separately justified branch. General incompressible low-Mach limit needs uniform estimates and prepared-data hypotheses; S08 supplies only dimensionless equations and exact acoustics. BKM, Serrin criteria, boundary inviscid limits, general weak solutions and turbulence are recorded stronger branches only. 3D global smooth incompressible Navier–Stokes regularity and unrestricted 3D Euler regularity are named open problems; no existence theorem here settles them.

<a id="ps01"></a>

## PS01. Physical interpretation of proved local branches

Assume `post-fd-continuum-balances`, `post-fd-newtonian-fourier` and `def-fd-incompressible-newtonian-model` with constant ρ>0, η>0, no force and periodic data specified in S02. By the adopted model, div u=0 and ρD_tu=−∇p+ηΔu. Divide by ρ and set ν=η/ρ, π=p/ρ. S02 supplies the unique local smooth velocity, S01 recovers p=ρπ with a chosen spatial mean, and S04 supplies its kinetic energy/stability and a torus smooth inviscid limit. In the inviscid model use η=0 and stress −pI. This is a conditional theorem for the adopted continuum, with no empirical premise and no generic wall conclusion. Primitive ρ,η and boundary periodicity carry exactly the model units stated above.

Assume `post-fd-continuum-balances`, `def-fd-barotropic-euler-model` and the additional explicitly restricted polytropic pressure p=κρ^γ, κ>0, γ>1, common to all fluid trajectories. The mass/momentum balances and this constitutive hypothesis give S03's PDE. Its sound-speed transformation is invertible at positive density, so S03 supplies a unique smooth local state and S04 its total mechanical/internal polytropic energy conservation. `post-fd-local-equilibrium` is needed only if interpreting this branch as a spatially uniform-entropy ideal-gas sector; merely materially advected but initially nonuniform entropy gives different κ labels and is not S03's barotropic theorem. No thermal equation or molecular EOS derivation is claimed.

For PS01’s two-dimensional viscous restriction, the identical adopted momentum reduction reaches S09, so it has a global smooth model solution with ν>0. This is a theorem about the adopted planar periodic model, distinct from unrestricted three-dimensional dynamics. A homogeneous polytropic state ρ=ρ*>0,u=U constant is an exact solution: all gradients/time derivatives vanish, and its energy is constant. These assertions provide an explicit physical B example under the PS01 assumptions.

<a id="ps02"></a>

## PS02. Physical boundary and acoustic deductions

Under `post-fd-continuum-balances`, `post-fd-newtonian-fourier`, `post-fd-boundary-data` and `def-fd-incompressible-newtonian-model`, assume the regularity and fixed impermeable wall hypotheses of S06. Substitute σ=−pI+2ηD into the adopted momentum equation and integrate exactly as S06. Homogeneous no-slip or Navier slip with β≥0 yields mechanical power balance and uniqueness among those smooth model evolutions. Boundary law is an adopted hypothesis; positivity of dissipation does not establish that a material actually obeys it. S07's Poiseuille and Couette profiles follow by substitution in this same model. On a streamwise periodic channel prescribe body acceleration G/ρ, because linear pressure −Gx is incompatible with periodic pressure; on an infinite channel the latter is admissible. The hypotheses do not supply full arbitrary-wall smooth evolution.

Under `def-fd-barotropic-euler-model` with p'(ρ*)>0, no force and reference (ρ*,0), the exact first derivative of the specified mass/momentum operator yields S08's linear acoustic model: substituting ρ=ρ*+εz, u=εv and differentiating at ε=0 gives z_t+ρ*div v=0 and v_t+(p'(ρ*)/ρ*)∇z=0. S08 proves global smooth Fourier evolution for this tangent model with c*=sqrt(p'(ρ*)). Therefore dispersion ω²=c*²|k|² and conserved acoustic quadratic energy are exact conditional predictions of the linear model. Finite-amplitude errors are not controlled by this differentiation alone.

<a id="s09"></a>

## S09. Global smooth two-dimensional periodic Navier–Stokes (mathematics)

For every ν>0 and smooth divergence-free u_0 on T², S02's solution extends uniquely for all t≥0. The proof does not address unrestricted 3D or inviscid Euler global smoothness.

Write ω=∂_1u_2−∂_2u_1. For each k≠0, div u gives k·û=0 and |ω̂(k)|=|k||û(k)|. Hence S04's enstrophy identity gives, on every existing interval [0,T),
||ω(t)||_2²+2ν∫_0^t||∇ω||_2²=||ω_0||_2².
Thus with B(t)=||ω(t)||_(H1), ∫_0^tB²≤t||ω_0||²+||ω_0||²/(2ν). The mean of u is fixed by S04 and does not affect gradients.

Fix integer m≥4 and Y=||u||_m. For K≥2, split S=Σ_(k≠0)|k||û(k)|=Σ|ω̂(k)|. Low modes obey Σ_(0<|k|≤K)|ω̂(k)|≤B(Σ_(0<|k|≤K)w_k^−2)^(1/2)≤CB sqrt(log(e+K)). The last lattice estimate follows by counting O(j) points in the annulus j≤|k|<j+1 and summing C/j; small modes contribute a fixed constant. High modes obey Σ_(|k|>K)|k||û(k)|≤Y(Σ_(|k|>K)|k|²w_k^−2m)^(1/2)≤C_m Y K^(2−m), by annular counting and the convergent tail Σ_(j>K)j^(3−2m). Set K=2+(e+Y)^(1/(m−2)). Then the tail is ≤C_m and log(e+K)≤C_m log(e+Y). Consequently
S≤C_m(1+B sqrt(log(e+Y))).
This is a local proved critical lattice estimate, not a citation of BKM or Calderón–Zygmund L∞ boundedness.

The actual Fourier commutator proof in S01 gives the stronger unsimplified bound ||[Λ^m,u·∇]u||_2≤C_m Y S. Repeating its energy test on the smooth solution therefore yields Y'≤C_m S Y, with square-root regularization if Y=0. Let Z=log(e+Y)≥1. Then Z'=(e+Y)^−1Y'≤C_m(1+B sqrt Z). Therefore (sqrt Z)'≤(C_m/2)(1+B), since sqrt Z≥1. Integrating and using Cauchy–Schwarz in time yields
sqrt(log(e+Y(t)))≤sqrt(log(e+Y(0)))+C_m[t+sqrt(t) (t||ω_0||²+||ω_0||²/(2ν))^(1/2)].
This finite upper bound depends on a finite proposed endpoint, ν and data, and remains uniform as that endpoint is approached. Hence the H^m norm cannot diverge at any finite maximal endpoint. S02's already proved continuation criterion with s=4 extends the smooth solution past such an endpoint, a contradiction. The local all-order construction and uniqueness ensure the continued solution stays smooth at all derivative orders. Thus there is a unique global C∞ periodic solution, with pressure mean zero recovered at each time. The proof degenerates as ν↓0 because the enstrophy dissipation coefficient does; it does not establish an Euler inviscid global bound or any analogous 3D theorem.

<a id="s10"></a>

## S10. Complete bounded rectangular no-slip Stokes velocity and pressure (mathematics)

Let Ω=∏_(i=1)^d(a_i,b_i), d≥2, finite nonempty rectangle. Adopt AC to match the exact Sobolev completeness supplier, with Countable Choice sufficient for the sequential selections used here. Let μ>0 and f∈L²(Ω;R^d). Define V as in S05. Its unique u∈V satisfies μ∫∇u:∇v=∫f·v for all v∈V and the bound ||∇u||_2≤2R||f||_2/μ when Ω⊂(−R,R)^d. There exists p∈H^−1(Ω)⊂D'(Ω), unique modulo constant distributions, such that −μΔu+∇p=f in D'(Ω;R^d). No-slip means u∈H^1_0: an H1 limit of compactly supported smooth fields. On this Lipschitz rectangle this is the zero trace condition if using the separately established trace theorem; the existence proof itself uses the completion definition and does not consume an unproved trace theorem. The map f↦(u,[p]) is bounded linear into V×(H^−1/constants), by the bounds proved below. Pressure is not claimed L² or classically smooth up to the corners.

**The divergence right inverse on tests, fully constructed.** Choose θ_i∈C_c∞((a_i,b_i)) with integral one; for example normalize exp(−1/(1−s²)) on an affinely embedded subinterval and zero elsewhere, whose smoothness follows because every derivative tends to zero at |s|=1. A test space D(Ω) consists of real compactly supported smooth scalar functions; on a fixed compact support K its seminorms are sup|∂^αh|. D_0(Ω) is the subspace of integral-zero tests. Construct a linear R:D_0(Ω)→D(Ω;R^d) satisfying div(Rh)=h by induction on d.

For d=1 and ∫h=0 set Rh(x)=∫_(a_1)^x h(s)ds. It is smooth and zero near both endpoints; its derivatives of order j≥1 are h^(j−1), and its zero-order norm is ≤(b_1−a_1)||h||∞. For d>1, set x'=(x_2,…,x_d), H(x')=∫_(a_1)^(b_1)h(s,x')ds, and let R'H be the inductive right inverse, since ∫H=0 by finite integrable Fubini. Put
(Rh)_1(x)=∫_(a_1)^(x_1)[h(s,x')−θ_1(s)H(x')]ds,
(Rh)_j(x)=θ_1(x_1)(R'H)_(j−1)(x'), j≥2.
Their divergence is h−θ_1H+θ_1H=h. The first component vanishes before the support of h and θ_1 and after their supports because its total first-coordinate integral is zero; in x' it is supported in the projection of supp h. The other components have compact support by induction. Thus Rh is genuinely compactly supported, not merely zero at the rectangle boundary. For tests supported in a fixed K, all outputs are supported in a fixed enlarged compact K_R obtained by adjoining the θ_i supports to coordinate projections. Integration over finite coordinate lengths and the displayed finite products bound every output seminorm through finitely many input seminorms. Hence R is continuous on each fixed-support test space, exactly the continuity needed below.

**Pressure construction.** Regard u∈H1 as a distribution and set T=f+μΔu, so <T,ψ>=∫f·ψ−μ∫∇u:∇ψ. Every divergence-free ψ∈D(Ω;R^d) lies in V, and therefore <T,ψ>=0 by the variational identity. Let θ(x)=∏θ_i(x_i), with integral one, and set φ_0=φ−(∫φ)θ for every φ∈D(Ω). Define
<p,φ>=−<T,Rφ_0>.
This is linear and continuous on every fixed-support test space because φ↦φ_0 and R have the seminorm/support bounds just proved, while T is a distribution. In fact p has the useful bound ||p||_(H^−1)≤C_Ω(||f||_2+μ||∇u||_2). To verify it, coordinate integration on a finite interval has L² operator norm at most its length by Cauchy–Schwarz and Fubini; marginal integration has norm at most the square root of that length. Multiplication by each fixed θ_i and its first derivatives is bounded. Differentiating the displayed R formulas once therefore proves ||Rh||_(H1)≤C_Ω||h||_(H1) by induction: tangential derivatives of the first component integrate the matching derivative of h, and first-coordinate derivatives replace the integral by h−θ_1H. The remaining components are products θ_1 R'H with exactly those bounded derivative factors. Also ||φ_0||_(H1)≤C_Ω||φ||_(H1), since |∫φ|≤|Ω|^(1/2)||φ||_2. The definition of T gives |<T,Rφ_0>|≤(||f||_2+μ||∇u||_2)||Rφ_0||_(H1), proving the bound and extending p continuously to H^1_0 by test density. Here H^−1=(H^1_0)' is precisely that dual space; this does not claim the stronger L² pressure estimate. It defines p∈D'(Ω) with <p,θ>=0, selecting one additive constant.

For vector ψ∈D(Ω;R^d), ∫divψ=0 by one-dimensional FTC and compact support. The field ψ−R(divψ) is compactly supported and divergence-free, so T annihilates it. By the definition of distribution gradient,
<∇p,ψ>=−<p,divψ>=<T,R(divψ)>=<T,ψ>.
Thus ∇p=T and −μΔu+∇p=f. If ∇(p−q)=0, then for every φ∈D_0, φ=divRφ implies <p−q,φ>=−<∇(p−q),Rφ>=0. Every test splits as φ_0+(∫φ)θ, so p−q acts as a fixed constant times ∫φ; uniqueness modulo constants follows. If two pairs solve this system in the stated class with the variational property, S05 first gives identical velocity and then this argument gives equal pressure classes. No generic inf-sup estimate is hidden in the pressure construction.

**Useful bounded unsteady branch.** As a related exact branch, S07 constructs a global smooth no-slip shear solution on a finite-width periodic channel with explicit pressure, and S06 proves the wall energy/uniqueness identities for arbitrary given smooth wall solutions. The stationary rectangular theorem here supplies genuine arbitrary L²-forcing weak velocity and distribution pressure existence; it remains distinct from the weak worker's Leray evolution and from unproved full smooth wall IVP claims.

