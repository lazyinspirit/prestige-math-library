# E30 — Local smooth periodic Euler and viscous-fluid well-posedness

2026-10-03. Pure mathematical supplier proof. The root planned Fourier/Sobolev families permit the definitions/estimates; the actual framework-specific Galerkin construction and nonlinear estimates are completed here. This closes local existence/uniqueness for an explicit important smooth nonlinear continuum branch. It does not claim general global3D viscous regularity, arbitrary rough walls, compressible shock systems or constitutive derivation.

## Definition and theorem

Let T³=(R/2πZ)^3 with normalized Lebesgue measure. For a periodic real vector field u define û(k)=(2π)⁻³∫T³u(x)e^{−ik·x}dx and ||u||H^s²=Σk∈Z³(1+|k|₂²)^s|û(k)|². For s≥0, H^s is the completion of trigonometric polynomials in this norm; equivalently it is the weighted ℓ² coefficient space with conjugation symmetry û(−k)=conj û(k), mapped into real L² fields by the inverse Fourier coefficient isometry. The defining series converges in L²; the higher-s absolute/derivative convergence actually used below is proved explicitly. Equality of representatives is in the stated Sobolev class, not arbitrary pointwise labels. On smooth fields the Fourier series/Parseval identities follow from tensor-product Fejér approximation (E24's positive-kernel argument in each coordinate) and termwise integration of polynomials; completion preserves the norm identity. Define Λ^s as Fourier multiplication by w_k^s, w_k=√(1+|k|₂²).

A field is divergence-free if k·û(k)=0 for eachk. Define the Leray projection P by P₀=Id and P_k=Id−kkᵀ/|k|₂² fork≠0; it is an orthogonal multiplier, bounded by1 in everyH^s and commuting with derivatives. Fix ν≥0 and a real smooth divergence-free u₀. There exists T>0 and a unique smooth periodic velocity u on[0,T]×T³, divergence-free, satisfying

u_t+P((u·∇)u)=νΔu, u(0)=u₀.

There is a smooth pressure p, unique after fixing mean0, giving u_t+(u·∇)u=−∇p+νΔu. T can be chosen solely from a fixed H^s bound foru₀, s integer≥4. On bounded such data sets the solutions depend continuously on initial data in C([0,T],H^{s−1}), with the same local interval. ν=0 is the incompressible Euler model;ν>0 is the incompressible constant-viscosity model. Mathematical ν has length²/time in physical coordinates. This is a **local** theorem.

## Fourier inequalities with complete proofs

Forσ>3/2, Cauchy–Schwarz gives Σk|û(k)|≤||u||H^σ(Σk w_k^{−2σ})^{1/2}<∞. The lattice sum converges because shells have O(m²) points and Σm m^{2−2σ} converges. Thus H^σ embeds into continuous bounded functions by uniform Fourier convergence. More generally forσ>j+3/2, Σ|k|^j|û(k)| is finite, so H^σ embeds in C^j with the derivative obtained by uniformly convergent series. This explicitly supplies every bounded-gradient use below.

Forσ>3/2, |fg|H^σ≤Cσ||f||H^σ||g||H^σ. Indeed w_{k+l}^σ≤Cσ(w_k^σ+w_l^σ). Weight the convolution coefficient and use Young's discrete ℓ²–ℓ¹ bound for its two terms. That bound follows from the triangle inequality in ℓ² for finite sumsΣl a(k−l)b(l), giving≤||a||₂Σ|b(l)|, then extend by Cauchy tails/completeness. The preceding ℓ¹ estimate bounds each unweighted factor. Smooth trigonometric polynomials are dense by truncating their weighted coefficient tails, so these products extend uniquely to H^σ and agree with ordinary products of continuous representatives.

The nonlinear commutator estimate is, for m≥s≥4,

||[Λ^m,u·∇]u||₂≤C_m ||u||H^m||u||H^s.

For its actual proof, the k-th coefficient isΣl(w_k^m−w_l^m)û(k−l)·il û(l). The mean-value bound for w^m and w_{l+v}≤w_l+|v| gives

|w_k^m−w_l^m|≤C_m |k−l|(w_{k−l}^{m−1}+w_l^{m−1}).

Multiplying by|l|, its first term is bounded by convolution of w^m|û| with |l||û(l)|; its second by |v||û(v)| convolved with w_l^m|û(l)|, since |l|≤w_l. Young therefore bounds the commutator by C_m||u||H^m Σk|k||û(k)|. Cauchy–Schwarz bounds the last sum byC_s||u||H^s, sinceΣ|k|²w_k^{−2s}<∞ for s>5/2. This proves the estimate, including the high-order tame dependence needed for a common smooth lifespan.

## Uniform finite-dimensional Galerkin solutions and common lifespan

Let P_N truncate Fourier modes to|k|∞≤N and retain the divergence-free condition. Solve the finite real polynomial ODE

(u_N)_t+P_NP((u_N·∇)u_N)=νΔu_N, u_N(0)=P_Nu₀.

The coefficient subspace is finite-dimensional; local existence/uniqueness follows from E2. It preserves reality and divergence-free condition because its right side lies in the same subspace. Test with Λ^{2m}u_N, equivalently take the L² inner product with Λ^m u_N. Projections can be removed in that inner product because the test field belongs to their orthogonal ranges. Since divu_N=0, periodic integration by parts gives ∫Λ^m u_N·(u_N·∇Λ^m u_N)=0. The only transport contribution is the proved commutator. Viscosity gives −ν||∇u_N||H^m² by termwise Fourier summation. Consequently

(1/2)(d/dt)||u_N||H^m²+ν||∇u_N||H^m²≤C_m||u_N||H^s||u_N||H^m².

At m=s, Y_N=||u_N||H^s satisfies Y_N'≤C_sY_N² (interpret at zero by regularizing its square root; the solution zero case is also immediate). Integrating (1/Y_N)'≥−C_s gives Y_N(t)≤2Y₀ on0≤t≤T=(2C_sY₀)⁻¹, with a harmless fixedT ifY₀=0. The finite-dimensional solution cannot cease beforeT: its coefficient norm remains bounded, and E2/M10 extend it from the compact coefficient ball. This verifies a common Galerkin lifespan, not a collection of shrinking unspecified intervals.

For every higher m≥s, the same inequality now gives ||u_N(t)||H^m≤||u₀||H^m exp(2C_mY₀T). Thus every smooth initial datum has uniform bounds in **all** higher norms on the sameT; the interval does not shrink with the derivative order. Also the equation and the proved product bound give uniform bounds for (u_N)_t in H^{m−2}; take ν=0 and one may use H^{m−1}, but the weaker bound suffices for both models.

## Compact limit, equation and smoothness

For fixedm, Fourier tails obey ||(Id−P_K)u_N||H^{m−1}≤C/K uniformly, using their H^m bound. For each finite set of Fourier coefficients the time derivative bounds give equicontinuity and boundedness. A uniformly convergent subsequence for those coefficients follows by choosing convergent subsequences at rational times and using equicontinuity plus finite time grids. Diagonalize over allK and integer derivative ordersm. Finite-mode convergence plus the uniform tails yields u_N→u in C([0,T],H^{m−1}) for everym≥s along one subsequence. No unproved weak compactness/choice upgrade is needed beyond the countable subsequence choices already authorized (ACω where this representation is used).

The product estimate withσ=m−2>3/2 shows (u_N·∇)u_N→(u·∇)u in C H^{m−2}, while Δu_N→Δu in C H^{m−3}. Fourier truncation P_N also converges strongly on these compact time curves: approximate the compact curve by a finiteε-net and use uniform projection norm≤1 plus tail convergence at each net point. Passing in the finite-time integral equation therefore gives u_t+P(u·∇u)=νΔu in C H^{m−3}. Because m is arbitrary, Fourier embedding gives every spatial derivative continuous and the right side smooth in space/time by induction from the equation. Thus u is smooth on the entire stated time strip, satisfies the initial condition and is divergence-free. The uniformH^s bound survives the limit by finite coefficient sums and monotone limits.

Pressure is explicit: for k≠0 put p̂(k)=−Σij k_i k_j/|k|²·widehat(u_i u_j)(k), and p̂(0)=0. Fourier differentiation gives Δp=−Σij∂i∂j(u_i u_j), hence ∇p=−(Id−P)((u·∇)u). The smooth coefficient decay/product bounds make p smooth and validate every differentiated equality. Two mean-zero pressures with the same gradient differ by a constant and therefore coincide. This reconstructs the full pressure equation rather than omitting the incompressibility supplier.

## Uniqueness and continuous dependence

For two smooth solutionsu,v with w=u−v, their equation is w_t+P(u·∇w+w·∇v)=νΔw. Testing withw, the first transport term vanishes by divu=0, and the second is bounded by||∇v||∞||w||₂². Thus (d/dt)||w||₂²≤2||∇v||∞||w||₂²; E2's proved Gronwall gives ||w(t)||₂≤exp(∫₀ᵗ||∇v||∞)||w(0)||₂. This proves uniqueness and L² continuous dependence on the common interval. The Fourier interpolation inequality ||w||H^{s−1}≤||w||₂^{1/s}||w||H^s^{(s−1)/s} follows by Hölder on its nonnegative weighted coefficient sum. UniformH^s bounds for data in the prescribed bounded set then give continuous dependence in C H^{s−1}. Smooth uniqueness shows the compact-limit construction cannot depend on the subsequence.

The theorem permits extension while the required norm remains finite, by restarting the same construction at any time and using uniqueness. It gives no all-time3D bound. No unproved Navier–Stokes global-regularity premise is needed for the local mechanical deductions.

## Mechanical role, assumptions and remaining future scopes

For an adopted constant-density incompressible Newtonian continuum on a periodic cell, take Cauchy stress σ=−pId forν=0 and σ=−pId+η(Du+Duᵀ) forν>0, with ρ>0,η=ρν>0. E13's separately adopted local mass/momentum balances produce exactly these equations, and this theorem supplies their local smooth model evolution. Periodic boundaries are explicit ideal boundary data, not arbitrary walls or measured boundary behavior. With scalesℓ₀,t₀,u₀=ℓ₀/t₀, viscosity has ℓ₀²/t₀, pressureρℓ₀²/t₀², stress force/area, and accelerationℓ₀/t₀². No temperature or molecular derivation ofη is assumed.

The current defined continuum results now have suppliers: smooth transport/local balance/stress(E13), linear waves/existence(E14/E24), scalar weak entropy shock/fan(E23), exact stationary viscous channel solutions(E23), local smooth periodic Euler/viscous evolution(this theorem), and a proved smooth periodic spring-chain limit(E26). General compressible-fluid entropy systems, rough-wall traces/boundaries, nonlinear constitutive PDEs, turbulence universality and all-time3D regularity remain explicit specialist future scopes, not unqualified theorems claimed by cm17-boundary-regularity. The last is a known open problem and can only be discussed as such.
