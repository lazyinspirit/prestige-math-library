# Physical torus lift and positive phase-volume proof

Research missing-proof authoring, conditional on the revised augmented-composition estimates supplied by the owning composition author. No production edits or independent consumer audit.

Write Λ=Ω_{α,τ}⊂C*, and let the augmented limit have phase component (a(θ,ν),θ+w(θ,ν)) and original-parameter component f(ν). The correct physical torus is

P(θ,ν)=(b(f(ν))+a(θ,ν), θ+w(θ,ν)).

This follows directly from H₀(I,θ,λ)=H(b(λ)+I,θ). In the finite normal-form identity H₀(Ψⱼ,χⱼ)=eⱼ+ν·I+Pⱼ, λ is χⱼ(ν), not ν. Passing to the limit uses λ=f(ν). Translation by the fixed vector b(f(ν)) is canonical for each torus and does not affect its angular differential or reality. Thus the existing augmented invariance and Lagrangian proof transfers to the physical lift.

## Precise sufficient estimates

Let A,L be fixed constants independent of α,ε. Assume the composition lemma establishes, in supremum norm and with global Lipschitz constants on Λ,

|a|≤ArE₀, |w|≤AσE₀, ||Dθa||≤ArE₀/σ, ||Dθw||≤AE₀,

Lipν a≤LrE₀/h₀, Lipν w≤LσE₀/h₀,

|f−id|≤AB₀, Lip(f−id)≤LB₀/h₀,

where B₀=CαE₀σ^μ and r=√(ε/M₂)=αE₀σ^μ/(2M₂). Dimension factors can be absorbed into A,L. The global Lipschitz hypotheses must already incorporate the near/far-pair argument for disconnected parameter tubes.

Choose a fixed ρ>0 so that the closed 3ρ-neighbourhood of C* is contained in Ω′, b there stays inside the allowed physical tube, and its first and second derivatives have finite operator bounds M_b and M_bb. Require AB₀≤ρ and AE₀≤1/2. These are available by decreasing the final fixed smallness constant.

For δ=f−id, the frequency correction satisfies

b(f(ν))−b(ν)=∫₀¹Db(ν+tδ(ν))δ(ν)dt.

If |ν−ν′|∞<ρ, all segments used to compare these integrands stay in the 3ρ-neighbourhood of C*. The derivative bounds and the identity above give

Lip_near[b∘f−b]≤M_b Lipδ+M_bb·sup|δ|·(1+Lipδ).

For |ν−ν′|∞≥ρ, twice the sup bound gives the quotient ≤2M_b sup|δ|/ρ. Therefore the following is a valid global bound (the sum bounds both cases):

L_bcorr:=M_b LB₀/h₀+M_bb AB₀(1+LB₀/h₀)+2M_b AB₀/ρ.

The second derivative term is essential: the difference b(f(ν))−b(ν) is not controlled by M_b Lip(f−id) alone.

## Remove the large angular-frequency derivative before measuring volume

For each fixed ν, q=θ+w(θ,ν) is a bijective diffeomorphism of the angle torus. On lifts solve θ=q−w(θ,ν) by contraction with constant ≤1/2. Its inverse θ=θ(q,ν) obeys

||Dqθ||≤2, Lipν θ(q,·)≤2LσE₀/h₀.

The second estimate follows by subtracting the two fixed-point equations at the same q. For angle pairs choose shortest lifts; periodicity makes the same estimates hold for the torus supremum distance.

At fixed physical angle q the physical action is

p(q,ν)=b(ν)+R(q,ν),

R(q,ν)=b(f(ν))−b(ν)+a(θ(q,ν),ν).

The chain and difference estimates give

Lipν R≤L_R:=L_bcorr+LrE₀/h₀+2ALrE₀²/h₀,

Lipq R≤L_q:=2ArE₀/σ.

This is why an estimate requiring σE₀/h₀ itself to be small is unnecessary. That quantity may diverge as α→0; its contribution to the action derivative is multiplied by the small angular-action derivative rE₀/σ. Every h-dependent loss is retained in L_R.

## Uniform inverse bound for b on the fixed compact frequency cube

The Hessian quadratic-form hypothesis implies ||D²h||∞≤nM₂ (polarization gives each matrix entry a bound ≤M₂). For x=b(ν), y=b(ν′) with |x−y|∞<r₀, their joining segment lies in the r₀-neighbourhood of K because x∈K. Hence

|ν−ν′|∞=|Dh(x)−Dh(y)|∞≤nM₂|x−y|∞.

For |x−y|∞≥r₀ use |ν−ν′|∞≤diam∞C*≤(diam∞C*/r₀)|x−y|∞. Thus b is globally co-Lipschitz on C*, with

|b(ν)−b(ν′)|∞≥|ν−ν′|∞/L₀,

L₀=max(nM₂,diam∞C*/r₀).

Its upper Lipschitz bound follows from bounded Db on a convex neighbourhood of C*. No convexity of the physical action domain U was assumed or needed.

Require L_R≤1/(2L₀). Then at each fixed physical angle q,

|p(q,ν)−p(q,ν′)|∞≥|ν−ν′|∞/(2L₀).

Consequently the map E:Λ×Tⁿ→physical phase space, E(ν,q)=(p(q,ν),q), is injective and Lipschitz. Its inverse is Lipschitz because for two image points

|ν−ν′|∞≤2L₀[|p−p′|∞+L_q d_T(q,q′)].

Together with the unchanged q coordinate this supplies an explicit finite inverse Lipschitz constant. The original torus parametrisation P is E composed with the invertible map (ν,θ)↦(ν,θ+w(θ,ν)); that map has finite Lipschitz constants for each fixed α>0, even when its angular-frequency derivative is large. Therefore P is also bi-Lipschitz on the product, with constants allowed to depend on α.

Λ is compact and measurable, and |Λ|>0 by the resonance-slab estimate. Restrict q to any closed angular cube of side less than π, with nonzero volume, so the quotient metric is represented by Euclidean coordinates. The domain Λ×Q has positive 2n-dimensional Lebesgue measure. Its compact image is measurable. A Lipschitz map sends null sets to null sets: cover a null set by cubes of total volume arbitrarily small; the images have diameter bounded by the Lipschitz constant times each cube diameter and can be covered by cubes with volume bounded by a fixed dimensional constant times the original volume. Applying this fact to the Lipschitz inverse shows |E(Λ×Q)|>0. Thus the union of physical invariant tori has positive phase-space Lebesgue measure. This is stronger than merely having a positive-measure label set, without replacing that original conclusion.

## Uniform α²-smallness and necessary choice of h₀

Choose the initial frequency width at a fixed fraction of its divisor upper bound, for example h₀=α/(4K₀^(τ+1)), after verifying the strengthened lower endpoint fits. Then

B₀/h₀=4C E₀σ^μ K₀^(τ+1),

rE₀/h₀=(2/M₂)E₀²σ^μK₀^(τ+1).

Since K₀=O(1+|log E₀|), both tend to zero with E₀ independently of 0<α≤1. Also B₀≤C E₀σ^μ, so every term of L_R tends to zero. The condition AB₀≤ρ, angular inversion AE₀≤1/2, and L_R≤1/(2L₀) therefore follow from a single fixed sufficiently small bound E₀≤e*, attained by ε≤cα². Taking h₀ merely at its lower endpoint does not establish these conclusions; the permitted width must be chosen near the upper endpoint.

## Sharp physical action closeness from the invariance equation

The direct revised estimates alone give

|p−b(ν)|≤ArE₀+M_b AB₀,

which is only O(r), since B₀=CαE₀σ^μ=2CM₂r. The composition author supplied the following additional invariance argument that recovers the required O(rE₀) bound without a sharper iteration.

At each fixed real ν, put λ=f(ν) and p(θ)=b(λ)+a(θ,ν). The angular component of physical invariance is

Dθ[θ+w(θ,ν)]ν=Dh(p(θ))+F_p(p(θ),θ+w(θ,ν)).

Average this identity over the original periodic θ variables. The mean of Dθw is zero, and Dh(b(λ))=λ. Therefore

ν−λ=mean[Dh(b(λ)+a)−Dh(b(λ))]+mean F_p.

The coarse bound |λ−ν|≤AB₀ and |a|≤ArE₀ first ensure that every action in this identity and its joining segments lies within a fixed inner physical tube, by reducing the fixed smallness constant. On that tube the Hessian bound gives |Dh(b(λ)+a)−Dh(b(λ))|∞≤nM₂ArE₀. Cauchy's estimate on a fixed physical action margin ρ_p>0 gives |F_p|∞≤ε/ρ_p. Thus

|λ−ν|∞≤nM₂ArE₀+ε/ρ_p.

The segment from ν to λ lies in the fixed inverse-chart neighbourhood by the already established coarse bound; hence

|b(λ)−b(ν)|∞≤M_b[nM₂ArE₀+ε/ρ_p].

Since ε/(rE₀)=ασ^μ/2≤1/2 for α≤1 and σ≤1, this is ≤M_b(nM₂A+1/(2ρ_p))rE₀. Finally

|p−b(ν)|∞≤[A+M_b(nM₂A+1/(2ρ_p))]rE₀.

This preserves the original order of action closeness. Its constant depends on the fixed integrable geometry and inverse map, unlike the purely dimensional constant of the phase-composition supplier; the physical theorem must distinguish or explicitly enlarge its physical constant accordingly. No circularity arises: coarse bounds secure geometry, the already proved invariant torus supplies the averaged equation, and then that equation sharpens closeness.
