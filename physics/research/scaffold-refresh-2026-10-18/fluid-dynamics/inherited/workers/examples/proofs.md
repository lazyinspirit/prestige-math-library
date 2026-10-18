# Exact flows, scaling, stability and limits

Research design, 2026-10-03; conditional arguments, not production items or independent acceptance. All A-page results below are mathematical. A physical interpretation additionally requires the corresponding adopted balance, constitutive and boundary postulates. None is an experiment or numerical simulation. X06/X07/X10 and their consumers explicitly assume countable choice ACω when using the published bounded-C¹ divergence supplier (thm-divergence-theorem-for-bounded-c-one-euclidean-domains); its actual finite boundary-chart argument was read. All derivatives and integrals below are ordinary real calculus; finite-dimensional dot products are the actual published Euclidean suppliers in supplier-reading.md. Hypotheses exclude shocks except the explicitly linearized interface in X11. IDs in inventory.json identify exact sections here.

<a id="x00"></a>

## X00 — Defined formal models

On open spatial Ω⊂R³ and time interval I, write u:I×Ω→R³, p:I×Ω→R, density ρ:I×Ω→(0,∞). Classical equations mean pointwise equality, with u C¹ in time/C² in space, p C¹ in space; impose more regularity whenever differentiated. In the constant-density model ρ₀>0, μ>0 and ν=μ/ρ₀, define N(u,p)=u_t+(u·∇)u+ρ₀⁻¹∇p−νΔu and impose div u=0. Stokes replaces the acceleration terms by zero. Stress is the formal matrix σ=−pI+μ(Du+Duᵀ), with (Du)ij=∂j ui. An exterior solution's conditions at infinity are uniform in direction. A streamline of a steady field is a C¹ curve x'(s)=u(x(s)); material loops are closed C¹ curves advected by u with mixed derivatives continuous. For compressible barotropic Euler impose ρ_t+div(ρu)=0 and u_t+u·∇u=−ρ⁻¹∇P(ρ)−∇V, P C² and V C². Rotating linear Euler is u_t+2Ω×u=−∇q, div u=0, Ω∈R³ constant. These are definitions of mathematical systems, not physical postulates.

Physical coordinates are seconds/metres/kilograms. In the intended interpretation spacetime and density/motion/balances are model primitives inherited from CM01/CM17; μ and equation of state P are constitutive input. u has m/s, ρ kg/m³, p and P Pa, μ Pa s, ν m²/s, V and q m²/s², Ω s⁻¹. Derived quantities include vorticity curl u (s⁻¹), circulation ∮u·dx (m²/s), stress from its formula (Pa), flux ∫u·n dA (m³/s), force ∫σn dA (N), Reynolds and Mach numbers (dimensionless). Sound speed is derived from a specified derivative c²=P'(ρ₀), not an unspecified empirical constant. Pressure in incompressible PDE is a multiplier determined only up to a function of time; it is not independently fixed by thermodynamic equilibrium. All physical identifications are conditional on adopted constitutive/boundary assumptions.

<a id="x01"></a>

## X01 — Scaling and the limits of Reynolds and Mach numbers

Given U,L>0, set x=Lx*, t=(L/U)t*, u=Uu*, p=p_ref+ρ₀U²p*. Substitution gives div* u*=0 and u*_{t*}+u*·∇*u*=−∇*p*+Re⁻¹Δ*u*, Re=UL/ν. Each derivative contributes its displayed inverse scale; dividing momentum by U²/L proves the formula. Specifying geometry, dimensionless initial/boundary data and forcing is necessary to infer identical dimensionless solutions, and a uniqueness theorem for the selected solution class is necessary to infer that every solution agrees. Re alone does not imply similarity with different geometry, roughness, boundary motion or forcing.

For compressible Euler with p scaled by ρ₀c², the momentum pressure coefficient is Ma⁻², Ma=U/c. This algebra does not prove an incompressible limit. For example linear acoustic modes below have relative density perturbation A independent of the chosen small bulk velocity U; reducing U does not remove acoustic initial data. Likewise the channel solutions X04 have zero convection for every value of Re: no universal turbulence threshold follows from nondimensionalization. A small or large coefficient yields no solution-error estimate without derivative bounds, compatible data and stability. X07 gives a genuine bounded-domain residual estimate; exterior Stokes has no uniform error promise from Re alone.

<a id="x02"></a>

## X02 — Linear acoustic and rotating-wave modes

For barotropic Euler linearized about ρ=ρ₀>0,u=0, assume c²=P'(ρ₀)>0. Defining r=δρ and v=δu, the linear model is r_t+ρ₀ div v=0, v_t=−(c²/ρ₀)∇r. This is a separately defined PDE; a derivative at a background defines its coefficients, but a nonlinear approximation bound is not asserted. For k≠0, real A, r=A cos(k·x−ωt) and v=(Aω/(ρ₀|k|²))k cos(k·x−ωt) satisfy the equations iff ω²=c²|k|²: differentiating cosine makes continuity ωA−ρ₀k·v_amplitude=0, and momentum ωv_amplitude=(c²A/ρ₀)k. These formulas prove the claim without completeness of modes. Density remains positive if |A|<ρ₀ when interpreted as ρ₀+r. For P'(ρ₀)<0 the corresponding Fourier coefficient obeys r̂_tt=|P'(ρ₀)||k|²r̂, with explicit growing exp(|k|sqrt(|P'|)t); positive compressibility is essential.

For rotating linear Euler choose k≠0, e=k/|k| and an orthonormal basis (a,b,e) with e×a=b. Let Π=I−eeᵀ. For w⊥e, Π(Ω×w)=(Ω·e)e×w; expansion in this basis proves it since Ω's perpendicular component crossed with w is parallel to e. Set α=2Ω·e, z(t)=a cos(αt)−b sin(αt). Then z' +2Π(Ω×z)=0. For a real speed scale W the real field v=Wz(t)cos(k·x) is divergence-free. Put β(t)=e·(2Ω×z), q=−Wβ(t)sin(k·x)/|k|. Its gradient is −Wβe cos(k·x), supplying the longitudinal component, so v_t+2Ω×v=−∇q. The frequency magnitude is |α|=2|Ω·k|/|k|≤2|Ω|. At Ω·k=0 the transverse field is stationary; no division by frequency occurs. These are exact finite-mode solutions of the stated linear PDE, not nonlinear rotating turbulence.

<a id="x03"></a>

## X03 — Finite-depth surface-gravity modes and quantified shallow approximation

Define the linear potential free-surface problem on −h<z<0, h,g>0: Δφ=0, φ_z(−h)=0, η_t=φ_z(0), φ_t(0)+gη=0. Fields are smooth, with horizontal x∈R and real η(x,t). φ has m²/s, η and h metres, g m/s². For k>0, amplitude a, let η=a cos(kx−ωt), φ=(ag/ω)[cosh(k(z+h))/cosh(kh)]sin(kx−ωt). Direct differentiation cancels φ_xx+φ_zz, gives the bottom condition, and gives φ_t(0)=−ag cos, φ_z(0)=(agk/ω)tanh(kh)sin. Thus all equations hold exactly when ω²=gk tanh(kh). The dynamic condition defines the hydrostatic/gravity restoring coefficient; no nonlinear free-boundary existence is inferred.

For s≥0, 0≤s−tanh s=∫₀ˢ tanh²r dr≤∫₀ˢr²dr=s³/3, since tanh r≤r follows from derivative sech²r≤1. Therefore for s=kh>0 the shallow-model squared frequency ω_sh²=ghk² satisfies 0≤(ω_sh²−ω²)/ω_sh²≤s²/3. Consequently 0≤1−ω/ω_sh≤s²/3, using 1−sqrt(a)≤1−a for 0≤a≤1. The deep formula ω_deep²=gk has relative squared-frequency error 1−tanh s=2/(e^{2s}+1)≤2e^{−2s}. These bounds compare two linear dispersion laws only. Small amplitude is a physical approximation condition, not a supplied nonlinear error bound; nonlinear free-surface approximation remains separately qualified.

<a id="x04"></a>

## X04 — Plane and pipe Couette–Poiseuille solutions

For Ω=R×(0,h)×R, h>0, prescribe u=(v(y),0,0), p=p₀−Gx and wall data v(0)=V₀,v(h)=V₁. Then div u=0, u·∇u=0 and N=0 is exactly μv''=−G. Twice integrating gives v=V₀+(V₁−V₀)y/h+Gy(h−y)/(2μ); difference of two solutions is affine with zero endpoints and hence zero. Flux per unit width is h(V₀+V₁)/2+Gh³/(12μ), by integrating each polynomial. Wall shear μv'(0)=μ(V₁−V₀)/h+Gh/2 and μv'(h)=μ(V₁−V₀)/h−Gh/2 fix traction sign after choosing normal. Curl u=(0,0,−v'). These are exact solutions of both Stokes and full stationary NS, regardless of their Re; uniqueness is within the ansatz, not among all flows.

For a circular pipe {(x,y,z):y²+z²<a²}, take no-slip axial u=(w(r),0,0), p=p₀−Gx and w C² on the full disk. Cartesian differentiation of r=sqrt(y²+z²) gives Δw=w''+w'/r away from zero. Thus (rw')'=−Gr/μ, so w=−Gr²/(4μ)+C log r+D. Boundedness at r=0 forces C=0, and w(a)=0 gives w=G(a²−r²)/(4μ), smooth also at zero. Polar integration gives Q=∫₀ᵃ2πr w(r)dr=πGa⁴/(8μ). A logarithmic term is allowed in an annular pipe with separately specified inner wall; regularity at the axis must not be silently dropped. Finite entrance/exit geometry is outside this infinite/fully-developed model; no entrance-length error follows from these formulas. This extends, and reuses, CM E23's actually read channel argument.

<a id="x05"></a>

## X05 — Vortex and global-potential counterexamples

On r=sqrt(x²+y²)>0 let u=(−κy/r²,κx/r²,0), κ∈R. Direct coordinate differentiation gives div u=0 and curl u=0. On a circle x=r cosθ,y=r sinθ, u·dx=κdθ, hence circulation=2πκ. If u=∇φ for a single-valued C¹ φ on the punctured plane, the integral equals φ(end)−φ(start)=0, contradiction when κ≠0. A local angle potential κθ is legitimate only in a simply connected chart. Convection is −κ²(x,y,0)/r⁴. Therefore with constant density the stationary Euler pressure p=p₀−ρ₀κ²/(2r²) satisfies −∇p/ρ₀=−κ²(x,y,0)/r⁴. The axis is excluded; there is no smooth finite-energy whole-plane vortex theorem here.

For solid rotation u=(−Ω₀y,Ω₀x,0), p=p₀+ρ₀Ω₀²r²/2, direct computation gives div u=0, Δu=0, curl u=(0,0,2Ω₀), convection=−Ω₀²(x,y,0) and the stationary Euler/NS equation. Bernoulli quantity |u|²/2+p/ρ₀=p₀/ρ₀+Ω₀²r² is constant on each circular streamline and varies between radii. This refutes a single global Bernoulli constant for arbitrary steady flows. A cylindrical rotating wall may realize the matching velocity as an ideal model boundary condition, with no experiment implied.

<a id="x06"></a>

## X06 — Exact exterior Stokes solution, traction and uniqueness

Let a,μ>0 and U∈R³; on r=|x|>a set s=U·x,

u(x)=A(r)U+B(r)sx, A=1−3a/(4r)−a³/(4r³), B=−3a/(4r³)+3a³/(4r⁵), p=p∞−(3μa/2)s/r³.

The field is smooth up to r=a from outside, zero on the sphere, and tends uniformly to U. For any radial A,B, divergence=(s/r)(A'+r²B'+4rB). The Laplacian is (A''+2A'/r+2B)U+(B''+6B'/r)sx: differentiate s x_i to get Δ(sx_i)=2U_i and radial product cross term 4B'sx_i/r. Substitution gives divergence zero, U coefficient −3a/(2r³), sx coefficient 9a/(2r⁵). The pressure gradient is −(3μa/2)(U/r³−3sx/r⁵), so μΔu=∇p exactly. This independently verifies the source's radial ansatz without relying on dimensional analysis for exhaustiveness.

At the surface let n=x/a and U_t=U−(U·n)n. There A=B=0, A'(a)=3/(2a), B'(a)=−3/(2a³). Hence ∂n u=(3/(2a))U_t and tangential derivatives of the zero trace vanish; Du=(3/(2a))U_t⊗n. Consequently μ(Du+Duᵀ)n=(3μ/(2a))U_t. Pressure there is p∞−(3μ/(2a))U·n. Thus σn=−p∞n+(3μ/(2a))U. Integration over the sphere gives force exerted by fluid on the sphere 6πμaU, since ∫n=0 by antipodal cancellation and area=4πa². Here n points from sphere into fluid; the fluid-domain outward normal at its inner boundary is −n, so no sign ambiguity remains. The speed-relative force on a moving sphere in quiescent fluid has opposite sign after changing relative U.

For uniqueness impose explicitly u−U=O(r⁻¹), ∇u=O(r⁻²), p−p∞=O(r⁻²), uniformly as r→∞, and classical C² velocity/C¹ pressure. The difference w,q of two such solutions has zero inner trace, Δw=∇q/μ, div w=0. Multiply on a<r<R and integrate componentwise by parts: μ∫|∇w|²=∫_{r=R}(μw·∂n w−q w·n), with zero inner term. The boundary integrand is O(R⁻³), area O(R²), so tends to zero. Nonnegativity and increasing-domain integrals give ∇w=0 throughout the connected exterior. w is constant and tends to zero, so w=0; ∇q=0 and its zero far-field limit gives q=0. These are exact Stokes model claims. Dropping NS convection is a formal small-Re approximation; no universal uniform finite-Re drag error or exterior NS existence statement is supplied.

<a id="x07"></a>

## X07 — Actual residual-to-solution estimate on a bounded domain

Let D be a bounded C¹ domain, w∈C²(D̄), q∈C¹(D̄), div w=0, w|∂D=0, and −μΔw+∇q=f with continuous f. Assume the explicit mathematical inequality ||w||₂≤C_D||∇w||₂ for the selected domain/class. Integration by parts and zero trace give μ||∇w||₂²=∫f·w≤||f||₂||w||₂≤C_D||f||₂||∇w||₂. Integral Cauchy–Schwarz follows by integrating |f−tw|²≥0 and minimizing its quadratic, with the zero-norm case separate. Therefore ||∇w||₂≤C_D||f||₂/μ and ||w||₂≤C_D²||f||₂/μ. For a rectangular channel with zero trace on y=0,h, w(x,y,z)=∫₀ʸw_y(x,s,z)ds, so |w|²≤y∫₀ʸ|w_y|²≤h∫₀ʰ|w_y|² and integration gives C_D=h. Periodic x,z remove end boundary terms. This proves a concrete constant without a general Poincaré citation.

In particular if u_NS is an existing smooth stationary NS solution and u_S is an existing Stokes solution with exactly the same boundary values, w=u_NS−u_S solves the displayed equation with f=−ρ₀(u_NS·∇)u_NS. Thus the bound holds if this f is bounded in L². It is an a posteriori quantitative estimate, not a theorem that Re alone bounds convection; it asserts no existence of u_NS and does not transfer C_D=h to an exterior domain.

<a id="x08"></a>

## X08 — Diffusion, wall layer and a circulation failure

On the half-space y>0, t>0 define E(s)=∫ₛ^∞e^{−r²}dr / I₀, I₀=∫₀^∞e^{−r²}dr∈(0,∞). Finiteness follows from e^{−r²}≤e^{−r} for r≥1. For U∈R, u=(U E(y/(2sqrt(νt))),0,0), p constant. The convection and divergence vanish. E' =−e^{−s²}/I₀, E''=−2sE'; with s_y=1/(2sqrt(νt)), s_t=−s/(2t) these identities give u_t=νu_yy. The velocity equals U at the wall, tends to zero at infinity, and tends to zero for fixed y>0 as t↓0. The wall/initial corner is incompatible and excluded from classical regularity; no claim of smoothness at t=y=0 is made.

For s≥0, substitute r=s+z to obtain 0≤E(s)≤e^{−s²}, since (s+z)²≥s²+z². Hence |u|≤ε|U| for y≥2sqrt(νt)sqrt(log(1/ε)), 0<ε<1. This is an exact quantitative penetration thickness for this model, not a general Prandtl boundary-layer existence theorem. The wall gradient is −U/(2I₀sqrt(νt)); viscosity times this gradient gives stress, singular as t↓0. Pointwise inviscid convergence away from the wall and failure of uniform convergence up to its prescribed nonzero trace coexist.

On the periodic torus take u=(A e^{−νk²t}sin(ky),0,0), p constant, integer k≠0. Direct differentiation gives an exact NS solution since convection is zero. Advect a rectangular material loop whose horizontal sides start at y₁,y₂ and share horizontal length L, with distinct sin(ky_i); its vertical edges become sheared curves x=x₀+∫₀ᵗv(y,s)ds. Horizontal circulation contributes L(v(y₁,t)−v(y₂,t)); the two connecting-edge integrals cancel because their x(y,t) shapes are translations by L and have opposite traversal. Thus Γ(t)=LAe^{−νk²t}(sin ky₁−sin ky₂). It is nonconstant, refuting an extension of Kelvin circulation conservation to general viscous fluid motion.

<a id="x09"></a>

## X09 — Exact Kelvin/Bernoulli scopes

For a C² barotropic Euler solution in X00 define h(ρ)=∫_{ρ_ref}^ρ P'(r)/r dr. The chain rule gives ∇h=ρ⁻¹∇P(ρ). In steady flow, dot momentum with u to obtain u·∇(|u|²/2+h+V)=0; along each streamline the derivative is zero. Expanding in coordinates proves u·∇u=∇(|u|²/2)−u×curl u. If curl u=0, then ∇(|u|²/2+h+V)=0, hence the quantity is constant on each connected open component, by integrating along polygonal paths (any open connected subset of R³ is polygonally connected: points reachable by polygonal paths form both a relatively open and relatively closed nonempty subset). Global potential existence is not required for this constant, as X05 shows.

For a material loop X(t,s), periodic s∈[0,1], X_t=u(t,X), differentiate Γ=∫u(t,X)·X_s ds. The integrand derivative is (D_tu)·X_s+u·∂s u=(D_tu+∇|u|²/2)·X_s. Under barotropic conservative-force Euler this is a gradient's loop integral and vanishes by the one-variable chain rule and equal endpoints. This recovers the actually read CM E14 argument with regularity and topology explicit. For nonbarotropic p(ρ,S), ∇p/ρ need not be a gradient; curl((1/ρ)∇p)=−ρ⁻²∇ρ×∇p by coordinate product rules, so generic baroclinic circulation production is possible. Shocks lack the differentiable material-loop argument, viscosity introduces ν∮Δu·dx, and nonconservative body forces contribute their own circulation. None is covered by the zero-derivative conclusion.

<a id="x10"></a>

## X10 — Smooth nonlinear perturbation stability at an explicit sufficient threshold

On the box periodic in x,z with height h and no-slip boundaries y=0,h, let base U_b=(Sy,0,0), pressure constant, S∈R. If u=U_b+w is a smooth solution with the same wall values, w is divergence-free and zero on both walls. Subtract the base NS equation to obtain w_t+U_b·∇w+w·∇U_b+w·∇w=−∇q/ρ₀+νΔw. Dot with w and integrate. The pressure, U_b transport and nonlinear transport terms vanish by div and periodicity/zero normal trace; integration by parts gives

(1/2)d||w||₂²/dt=−ν||∇w||₂²−S∫w_xw_y.

Pointwise 2|w_xw_y|≤w_x²+w_y²≤|w|² and the X07 bound ||w||₂²≤h²||∇w||₂² give d||w||₂²/dt≤−(2ν/h²−|S|)||w||₂². Multiplication by exp((2ν/h²−|S|)t) and integration yield ||w(t)||₂²≤exp(−(2ν/h²−|S|)t)||w(0)||₂². Hence |S|h²/ν<2 is a sufficient nonlinear energy-decay condition on the interval where the assumed smooth solution exists. It is neither the optimal threshold nor global3D existence nor a transition Reynolds number. Reversing this sufficient inequality proves no instability. With S=0 it proves decay of every such perturbation and explicitly accounts for energy dissipation into the walls/viscosity model.

<a id="x11"></a>

## X11 — Linear vortex-sheet instability, with its interface scope

Define a two-dimensional linear interface model: equal positive densities on y>0 and y<0, horizontal base velocities U₊,U₋∈R, no gravity/surface tension, perturbation harmonic potentials φ₊ and φ₋ decaying at their respective infinities. At y=0 impose (∂t+U_±∂x)η=∂yφ_± and continuity of pressure p'_±=−ρ₀(∂t+U_±∂x)φ_±. These are explicit linearized boundary equations; they are not justified as nonlinear error-controlled approximations.

For k>0 seek complex fields with common e^{ikx+λt}: η=He^{ikx+λt}, φ₊=A₊e^{−ky}e^{ikx+λt}, φ₋=A₋e^{ky}e^{ikx+λt}. Put D_±=λ+ikU_±. Kinematics gives A₊=−D₊H/k, A₋=D₋H/k. Pressure continuity gives D₊²+D₋²=0. With U_bar=(U₊+U₋)/2, ΔU=U₊−U₋ this is 2(λ+ikU_bar)²−k²ΔU²/2=0. Thus λ=−ikU_bar±k|ΔU|/2, one positive real part whenever ΔU≠0. Taking real parts gives real exact solutions of the linear interface equations. For the Sobolev corollary take horizontal x∈R/2πZ and integer k→∞; the potentials still decay as |y|→∞. Define the interface H^m norm by weighted square-summation of its periodic Fourier coefficients. Normalizing the interface amplitude by k^{-m} bounds the initial H^m norm, whereas its norm at fixed t>0 grows as e^{k|ΔU|t/2}. Thus no uniform bounded evolution map in the interface H^m norm can control these modes. On R_x the displayed plane waves give formal dispersion/exact smooth modes, without a finite-L²/H^m assertion. This is a linear ill-posedness warning for this zero-thickness zero-tension model. It is not a theorem of nonlinear turbulent transition, a viscous shear-layer spectrum, or an experiment. Regularization changes its premises and dispersion law.

<a id="x12"></a>

## X12 — Exact averaged equation and closure counterexample

Use a finite probability space with positive weights summing to one. Each realization is a smooth incompressible NS solution with the same ρ₀,ν; arithmetic averaging commutes with derivatives because the sum is finite. Write u=ū+u', mean u'=0, and R_ij=mean(u'_i u'_j). Expand mean(u_i u_j)=ū_iū_j+R_ij. Since div u=0, averaging the conservative form gives

ū_t+ū·∇ū=−ρ₀⁻¹∇p̄+νΔū−div R,

with (div R)i=∂jRij. R is symmetric positive semidefinite since aᵀRa=mean((a·u')²)≥0, and has units m²/s²; the force-density term −ρ₀div R has N/m³. Positivity is not an equation expressing R in terms of ū. To see the missing information, ensemble A is u=0; ensemble B has equal probabilities for u=±(A sin(ky)e^{−νk²t},0,0), both exact solutions from X08. Both have ū=0 and the same mean pressure, but R_A=0 and R_B,xx=A²sin²(ky)e^{−2νk²t}; their unresolved energy mean|u'|²/2 differs. The divergence happens to vanish in this simple example, so it demonstrates failure to determine stress/energy from the mean, not different mean accelerations. A deterministic function of ū alone cannot reconstruct both stresses. Eddy viscosity, mixing length, isotropy, inertial-range scaling and closure equations are additional model assumptions, not deductions of this averaging identity. No universal cascade law, anomalous dissipation, ergodicity, global regularity or measured spectrum is claimed.


<a id="x13"></a>

## X13 — Exterior potential sphere and zero ideal drag

For r>a, U∈R³ let φ=(U·x)(1+a³/(2r³)), u=∇φ and p=p∞+ρ₀(|U|²−|u|²)/2. Coordinate differentiation gives Δ(U·x)=0 and Δ((U·x)/r³)=0 (the latter is −U·∇(1/r), whose Laplacian vanishes for r>0); commuting smooth derivatives therefore gives div u=0 and curl u=0. The gradient is u=U+(a³/(2r³))[U−3(U·n)n], n=x/r. Thus u tends to U and on r=a satisfies u·n=0 and u=(3/2)[U−(U·n)n]. The steady Euler equation holds because u·∇u=∇|u|²/2 and −∇p/ρ₀ equals that gradient. This is an impermeable slip condition, not no-slip: tangent velocity usually does not vanish. On the sphere |u|²=(9/4)(|U|²−(U·n)²), so p is unchanged by n↦−n. Hence ∫sphere(−pn)dA=0 by antipodal cancellation. It is an exact zero-force prediction of this smooth inviscid potential model, while X06 predicts nonzero force in a different viscous/no-slip model. No actual measured zero drag and no equality of these two boundary models is asserted. The source's general curl-zero⇒potential statement is repaired by X05; here the potential is explicitly supplied, so there is no topology gap.
