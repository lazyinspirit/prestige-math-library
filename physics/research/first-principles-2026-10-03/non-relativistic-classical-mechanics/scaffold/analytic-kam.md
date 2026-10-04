# E28 — Analytic nondegenerate KAM supplier and mechanical use

2026-10-03. Pure mathematical development followed by an explicitly conditional two-rotor model. Source actually retrieved/read: Jürgen Pöschel, *A Lecture on the Classical KAM Theorem*, version1.3,2009, arXiv0908.2234, §§1–5 and AppendicesA/B, PDF pp1–31; complete33-page source retained under sources-advanced/. The source's sharper homological bound on p18 is stated but its local proof supplies the weaker exponentτ+n. The proof here consistently uses the proved conservative lossμ=τ+n+1. With a fixed analytic strip this changes constants, not the classical existence/positive-measure persistence claim. No unexplained sharp estimate, degree-theory inversion or Whitney extension is a load-bearing premise here.

## 1. Objects and precise theorem

Let n≥2, T^n=(R/2πZ)^n, and actions I∈D⊂R^n, where D is an open bounded action region. Use ω_can=Σdθᵢ∧dIᵢ and Hamilton equations θ'=H_I,I'=−H_θ. Let h(I) and f(I,θ) be real analytic with bounded holomorphic extensions on a uniform complex neighborhood of a compact action region and the angular strip |Imθ|∞<s₀>0. Real analytic here means represented by locally convergent real power series, equivalently restrictions of these specified holomorphic extensions. Assume Dh:D→Ω is a diffeomorphism on the chosen region; locally this follows from detD²h≠0 and IFT. Work on compact subregions with bounded inverse derivative and positive domain margins.

Fix τ>n−1 and α>0. A frequency ν is Diophantine if |k·ν|≥α|k|₁^{−τ} for every nonzero k∈Z^n. Let Ω_α be a closed bounded set of such frequencies a positive distance from ∂Ω; no assumption that it has interior is made. For the mechanical conclusion choose Ω containing a compact cube and α small enough that the Diophantine subset in its interior has positive measure, proved below.

For H=h+f and sufficiently small holomorphic norm ε=|f| (ε≤cα² with c>0 depending on the fixed analytic domains, Hessian/inverse bounds,n,τ), there is a Lipschitz family of real analytic embeddings Ψ_ν:T^n→D×T^n, ν∈Ω_α, with Lagrangian images, satisfying X_H∘Ψ_ν=DΨ_ν·ν. On each torus the motion is exactly conjugate to θ(t)=θ₀+νt. The embeddings are close to the unperturbed tori, and on sufficiently small regular action patches their full frequency/angle parametrization is bi-Lipschitz onto its image. Thus positive-measure frequency sets yield positive-phase-measure invariant torus families. This is neither all-torus persistence nor a general theorem at a separatrix, degenerate Hessian, merely smooth perturbation, or arbitrarily large perturbation.

The proof first establishes the parameter version H=e(ν)+ν·I+P(I,θ,ν), then eliminates the parameter using the actual inverse frequency map. Every analytic norm is a supremum on its declared complex domain, and every Lipschitz bound uses a fixed scaled Euclidean/sup norm.

## 2. Analytic estimates and homological equation

Cauchy's coordinate-circle formula gives |∂ⱼg|_{s−σ}≤|g|_s/σ on a strip with marginσ, and corresponding action/parameter estimates with their domain margins. For a2π-periodic holomorphic g, shift its Fourier integral in each angular coordinate by −i(s−η)sign k_j and letη↓0. Contractible rectangular contour integrals vanish by the one-variable Cauchy theorem, giving |g_k|≤|g|_s exp(−s|k|₁). Absolute convergence on a smaller strip follows by grouping lattice points with |k|₁=m: their number is at mostC_n m^{n−1}. Therefore

Σk≠0 |k|₁^τ exp(−σ|k|₁)≤C_{n,τ} σ^{−(τ+n)}, 0<σ≤1.

To verify this bound, compare each m^{τ+n−1}e^{−σm} with the integral over[m−1,m] of C(x+1)^{τ+n−1}e^{−σx}; substitute y=σx and bound the finite gamma-type integral, whose convergence follows from eventual exponential dominance of every polynomial. These are actual estimates, not an invocation of uncontrolled small divisors.

For zero-mean v and a Diophantine ν, u=Σk≠0 v_k/(ik·ν)e^{ik·θ} solves ν·∂θu=v, has zero mean, and obeys |u|_{s−σ}≤C|v|_s/(ασ^{τ+n}). Derivative series converge absolutely on every still smaller strip, so the differential identity is genuine; uniqueness follows by comparing Fourier coefficients. For a finite Fourier cutoff|k|₁≤K, the same estimate holds uniformly in a complex parameter neighborhood O_h={dist∞(ν,Ω_α)<h} when h≤α/(2K^{τ+1}): |k·ν|≥α/(2|k|₁^τ) follows by subtracting |k|₁h from the real-set bound. Fourier truncation has |g−T_Kg|_{s−σ}≤C K^n e^{−Kσ}|g|_s forKσ≥1; sum C m^{n−1}e^{−σm} overm>K and use1/σ≤K. Set μ=τ+n+1 so the generator's differentiated estimates below use exactly the preceding proved loss.

## 3. One completed KAM step

Consider N=e(ν)+ν·I and P bounded byε on |I|∞<r,|Imθ|∞<s,ν∈O_h. Choose0<η<1/8,0<σ<s/5,Kσ≥1, h≤α/(2K^{τ+1}), and smallness

ε≤cαηrσ^μ, ε≤chr,

where c is small enough for the finite Cauchy/flow estimates below. Let Q=P(0,θ,ν)+P_I(0,θ,ν)·I and R=T_KQ. Taylor's integral remainder and action Cauchy estimates give |P−Q|_{2ηr,s}≤Cη²ε and |Q|_{r,s}≤Cε; the Fourier estimate gives |Q−R|_{r,s−σ}≤CK^n e^{−Kσ}ε. Define the affine-in-I generator F by dividing each nonzero Fourier coefficient of R by ik·ν, and define Nhat=[R], its angular mean. The exact equation {F,N}+Nhat=R holds. The proved homological and Cauchy estimates give

r⁻¹|F_θ|+σ⁻¹|F_I|≤Cε/(αrσ^μ)

on|I|<r/2,strip s−3σ. The θ equation of its vector field is independent of I; the I equation is affine in I. Its analytic time-one flow Φ therefore retains that affine/angle-only form and is canonical. The stated smallness bounds F_θ byηr and F_I byσ, so integration and first exit place the time-one map from|I|<ηr,strip s−5σ into|I|<2ηr,strip s−4σ, inside the original domain. E2's integral flow estimate and Cauchy on the extra margins give, with W=diag(r⁻¹Id,σ⁻¹Id),

|W(Φ−Id)|+|W(DΦ−Id)W⁻¹|≤Cε/(αrσ^μ).

The transformed Hamiltonian is obtained by differentiating along the actual flow and integrating Taylor's remainder, not by assuming a convergent Lie series:

(N+P)∘Φ=N+Nhat+∫₀¹{(1−t)Nhat+tR,F}∘φ_F^t dt+(P−R)∘Φ.

The cancellation is exactly {N,F}+R=Nhat. On the retained domain the individual bounds are |R_I|≤Cε/r, |R_θ|≤Cε/σ, |F_θ|≤Cε/(ασ^μ), and |F_I|≤Cε/(αrσ^{μ−1}). They follow by differentiating the affine Taylor/Fourier polynomial and its homological solution on the spare r/2 and σ margins. Since {R,F}=R_θ·F_I−R_I·F_θ, finite-component summation gives

|{R,F}|≤n[(Cε/σ)(Cε/(αrσ^{μ−1}))+(Cε/r)(Cε/(ασ^μ))]≤C'ε²/(αrσ^μ).

Nhat has no angular dependence and |Nhat_I|≤Cε/r, so |{Nhat,F}|=|Nhat_I·F_θ|≤n(Cε/r)(Cε/(ασ^μ))≤C'ε²/(αrσ^μ). Every intermediate flow image lies in this retained domain, hence the integral remainder is bounded by ∫₀¹[(1−t)|{Nhat,F}|+t|{R,F}|]dt≤C'ε²/(αrσ^μ). The other term is explicitly |(P−R)∘Φ|≤|P−Q|_{2ηr,s−4σ}+|Q−R|_{2ηr,s−4σ}≤C(η²+K^n e^{−Kσ})ε. Adding these two bounds yields, rather than assumes, the new perturbation inequality

ε_+≤C[ε/(αrσ^μ)+η²+K^n e^{−Kσ}]ε.

The affine mean Nhat=a(ν)+v(ν)·I changes the frequency toν+v(ν). The mean coefficient v=[P_I(0)] obeys |v|_{O_h}≤B=C_vε/r by action Cauchy; take the step constant c small enough that B≤h/(16n). For a targetν₊∈O_{h/4}, solve ν=ν₊−v(ν) on the closed complex ball |ν−ν₊|∞≤2B. Its points have distance< h/4+2B≤3h/8 from Ω_α, so lie in O_{h/2}. The map's displacement from its centre is≤B, hence it preserves the ball. Coordinate Cauchy on the remaining h/2 margin and the row-sum operator norm give |Dv|≤2nB/h≤1/8. Thus it is a strict contraction, giving one rootϕ(ν₊) and the sharper |ϕ−Id|≤B. Iteration is holomorphic locally in the target and converges uniformly, soϕ is analytic; uniqueness on the root ball makes local branches agree. The derivative equation is Dϕ=(Id+Dv∘ϕ)⁻¹. The geometric inverse series gives |Dϕ−Id|≤(2nB/h)/(1−2nB/h)≤(16n/7)B/h, hence h|Dϕ−Id|≤Cε/r. This proves all inversion and domain bounds. Compose Φ with this parameter inverse; N becomes e₊(ν₊)+ν₊·I and the same perturbation bound remains valid. This completes every step of the normal-form improvement with actual estimates.

## 4. Explicit iteration and convergence

Fixσ₀=s₀/20 and choose initial normalized error E₀ small. Set

σ_j=2^{−j}σ₀, K_j=4^jK₀, h_j=4^{−μj}h₀, s_{j+1}=s_j−5σ_j,

E_{j+1}=C_*E_j^{3/2}, η_j=√E_j, r_{j+1}=η_jr_j, ε_j=αE_j r_jσ_j^μ.

Take C_* larger than the one-step constant times2^μ. Then the perturbation recurrence proves |P_j|≤ε_j by induction if K_j^n e^{−K_jσ_j}≤E_j. Choose K₀ sufficiently large and E₀ sufficiently small to make this true initially and thereafter. Here is why the simultaneous choices exist: logE_j=(3/2)^j(logE₀+2logC_*)−2logC_*; the Fourier tail's negative leading term is −K₀σ₀2^j, with only O(j+logK₀) positive terms. Thus after choosing K₀σ₀ larger than fixed multiples of |logE₀|+n log(K₀+1)+1, the negative2^j term dominates all j≥0. For fixedσ₀, first make E₀ small and take K₀ proportional to |logE₀|/σ₀ with a sufficiently large constant; then all required inequalities hold.

Set h₀=αc₀E₀σ₀^μ with c₀ sufficiently large. Making E₀ smaller again ensures h₀≤α/(2K₀^{τ+1}), since E₀|logE₀|^{τ+1}→0. At each step h_j satisfies the finite-divisor requirement because μ≥τ+1. Also ε_j/(r_jh_j)=c₀⁻¹(E_j/E₀)2^{μj}; supergeometric decay makes its sum arbitrarily small by increasing c₀ and then decreasing E₀. The flow smallness ε_j/(αr_jσ_j^μ)=E_j≤cη_j holds by the same small initial choice. Thus every one-step hypothesis is verified at every j; no later smallness is assumed without induction.

Compose the coordinate/parameter corrections F^{(j)}=F₀∘⋯∘F_{j−1}. Weighted Jacobians satisfy the product bound∏j(1+Cε_j/(r_jh_j))<∞ because the series converges; weights contract when passing from larger to smaller domains. The composed-map increment is therefore bounded by a constant timesε_j/(r_jh_j). Summing proves uniform convergence on I=0,|Imθ|<s₀/2,ν∈Ω_α; s_j→s₀/2 and r_j,h_j→0. On every slightly smaller angular strip, Cauchy gives convergence of all θ derivatives. Parameter derivatives of increments have an additionalh_j⁻¹ factor, whose sum still converges because E_j defeats every geometric sequence. For points of Ω_α closer than h_j/4 use the derivative estimate along their common parameter ball; for more distant pairs use2 times the supremum increment divided by h_j/4. This proves a genuine Lipschitz bound on the Cantor set rather than pretending all straight segments lie inside O_hj.

At I=0 the transformed perturbation's vector-field residual is bounded byCε_j/(r_jσ_j), by Cauchy. The weighted composed Jacobian bound transports it into an error tending to0 (E_j decays faster than any domain-margin reciprocal). The identity for each finite canonical transformation is then X_H∘F^{(j)}−DΦ^{(j)}·ν→0. Uniform C1-in-θ convergence gives X_H∘(Φ,ϕ)=DΦ·ν. Lagrangianity follows by taking the limit of (Φ^{(j)}|_{I=0})*ω_can=0; C1 convergence is exactly what permits that limit.

By taking the initial bound smaller relative to the fixedE₀ target, all estimates scale down linearly with its ratio, while the quadratic term only improves. Thus the angle component isθ plus a2π-periodic map with derivative norm<1/2. Its lift is injective modulo2π: equality modulo2π gives a differencew satisfying |w|≤|w|/2, hencew=0. This proves each limiting torus is an embedding, not merely a parametrized immersion. The resulting parameter displacement and Lipschitz bounds can also be made as small as required on the fixed domains. This proves the parameter theorem with a concrete positive smallness threshold determined by the preceding choices.

## 5. Eliminate parameters, measure and the classical ε≤cα² regime

Let b=(Dh)⁻¹ on the declared regular frequency patch. Its required holomorphic extension is justified locally by linearizing Dh at each base point and using the Newton contraction on a small complex ball; the inverse iterates are holomorphic and converge uniformly, so Cauchy's formula makes the inverse holomorphic. The derivative is invertible and continuous, giving a uniform ball after a finite compact cover/shrink. No mere smooth inverse is upgraded to analytic without this argument. Write actions p=b(ν)+I. Taylor's integral formula gives

h(b(ν)+I)=h(b(ν))+ν·I+P_h(I,ν), |P_h|≤M₂r²,

where M₂≥1 is a fixed holomorphic Hessian bound; no convex Legendre–Fenchel identity is needed. The perturbed term has boundε. Thus |P|≤M₂r²+ε. Choose r=√(ε/M₂). The parameter theorem needs |P|≤c₁αrσ₀^μ, which holds if ε≤c₂α²σ₀^{2μ}/M₂. For fixed strip/margins this is exactly ε≤cα². Other requirements (r within its action domain and frequency inverse neighborhood) hold by reducing c finitely. The physical torus is

Ψ_ν(θ)=(b(ϕ(ν))+Φ_I(θ,ν),Φ_θ(θ,ν)).

Translation by b at fixed parameter is canonical, so the verified parameter invariance/Lagrangian equations give the stated unparameterized H theorem. Quasiperiodic solutions exist for all time on their compact tori by continuation and the conjugacy identity.

For the Diophantine label set's measure, each resonance slab |k·ν|<α|k|₁^{−τ} inside a bounded frequency cube has measure≤Cα|k|₁^{−τ−1}: rotate one coordinate to k/|k|₂, integrate a thickness2α|k|₁^{−τ}/|k|₂ over a uniformly bounded cross-section, and use |k|₂≥|k|₁/√n. Grouping lattice shells gives sumΣm≥1 Cαm^{n−τ−2}<∞ exactly because τ>n−1. Countable subadditivity therefore bounds the excluded measure byCα. A boundary layer of a fixed cube has volumeO(α) by expanding its sidelengths. Hence for sufficiently smallα the compact interior Diophantine set has positive measure.

The actual torus family's phase image has positive measure, not just its labels. On a sufficiently small regular frequency patch, b is bi-Lipschitz (shrink until Db differs from one invertible matrix by less than half its inverse-bound). Use the fixed weighted norm |Δν|/α+|Δθ| for labels and |Δp|/α+|Δq| for phase points. The estimates above give action/frequency block perturbations O(√ε/α)+O(ε/α²), action/angle blocks O(ε/α²), and angle/frequency blocks, after the factorα from this norm, O(√ε/α); the angle/angle block is likewise O(√ε/α). These follow directly from the action generator boundε/(ασ₀^μ), angular generator boundε/(αrσ₀^{μ−1}), their h₀ parameter Cauchy bounds, and the frequency shift boundε/r, with r=√(ε/M₂) and h₀ a fixed positive constant timesα. Thus ε≤cα² makes the full weighted Lipschitz perturbation arbitrarily small by reducing c. Difference estimates against the bi-Lipschitz unperturbed map (b(ν),θ) then give a uniform lower bound on local angular lifts/frequencies in these fixed weighted norms. For each fixedα they are equivalent to ordinary Euclidean norms, which is all the positive-measure argument needs. Finitely many angular charts cover the torus; the image of a positive-measure frequency×angle box has positive measure. Indeed a Lipschitz map sends null sets to null sets: cover them by Euclidean cubes with arbitrarily small total volume, cover each image by a bounded number of cubes of sidelengthC times the original, and take the infimum. Apply this to the Lipschitz inverse to rule out a null phase image. This establishes the promised positive-measure persistence. No assertion of a measured probability or universal statistical preparation follows from it. Sharper full-phase complement estimates require the corresponding global extension/domain hypotheses; none is smuggled into this local statement.

## 6. Conditional mechanical example and limits

For two ideal fixed-axis rotors with positive inertias, dimensionless actions I₁,I₂ and2π anglesθ₁,θ₂, adopt H=(I₁²+I₂²)/2+ε cosθ₁ cosθ₂. Its kinetic metric is positive and its periodic potential is explicit; ideal support/force assumptions are model inputs. On a compact regular action patch inside(1,2)^2, Dh=Id and D²h=Id, the holomorphic strip and Hessian/inverse bounds are finite. The theorem therefore gives a positive-measure family of invariant quasiperiodic tori for sufficiently smallε and Diophantine labels. It says nothing about resonant gaps, all initial states, or chaos of every perturbed trajectory.

To restore units, choose action scaleJ₀>0, energy scaleE₀>0 and time scale t₀=J₀/E₀. Physical angular momentaΠᵢ=J₀Iᵢ, moments of inertia𝓘=J₀²/E₀ and potential E₀ε cosθ₁ cosθ₂ give H_phys=ΣΠᵢ²/(2𝓘)+E₀ε cosθ₁ cosθ₂. Angles are dimensionless radians; frequencyν/t₀ has s⁻¹, and dθ∧dΠ has action units. The conditional deductions use regular NR rigid/ideal rotor assumptions, not quantum-spin or relativistic premises. No empirical smallness, laboratory realization, sampling law or uncertainty is fabricated.
