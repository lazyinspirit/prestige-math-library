# Restricted mathematical prerequisites for thermodynamics

Research arguments, 2026-10-03. These are proposed mathematical suppliers, not published items or independent proof acceptance. Every dependency below is mathematical. Symbols naming energy or entropy in a later interpretation impose no physical premise on these results. Published calculus interfaces and what was actually read are listed in mathematics-audit.md. No general entropy-representation or thermodynamic-limit theorem is claimed here.

## M0. Scalar algebra of total derivatives and convex inversion

For differentiable scalar f,g on an open Euclidean set, their first-order increments Δf=Df h+o(‖h‖), Δg=Dg h+o(‖h‖) imply Δ(fg)=gΔf+fΔg+ΔfΔg. The last term is O(‖h‖²), yielding D(fg)=gDf+fDg. If g≠0, continuity makes it bounded away from zero locally and the identity 1/(g+Δg)−1/g=−Δg/(g(g+Δg)) gives D(1/g)=−Dg/g². Iterating the formulas gives the expected C² regularity wherever denominators remain nonzero. Finite sums use the reviewed algebra-of-total-derivatives interface; compositions use the reviewed chain rule.

The energy function g obtained by inverting a concave f(u,y) strictly increasing in u is convex on any convex image domain where the global inverse exists. For two image points (s_i,y_i), let u_i=g(s_i,y_i). Concavity gives f((1-t)u_1+tu_2,(1-t)y_1+ty_2)≥(1-t)s_1+ts_2. Monotonicity in u therefore gives g((1-t)s_1+ts_2,(1-t)y_1+ty_2)≤(1-t)u_1+tu_2. Existence of the indicated inverse value and convexity of its domain are hypotheses; local coordinate inversion alone supplies no global convex domain. This explicitly justifies the convex-energy restriction used in M5.

## M1. Products, order, constraints, and scaling

A state set is a set X. A binary relation R on X is a subset of X×X; xRy abbreviates (x,y)∈R. A preorder is reflexive and transitive. Define x~y iff xRy and yRx. Reflexivity and transitivity of R make ~ reflexive and transitive, while its definition makes it symmetric, so ~ is an equivalence relation. R induces a partial order on X/~: define [x]≤[y] iff xRy. If x~x′ and y~y′, transitivity gives x′RxRyRy′, so this is representative-independent; antisymmetry follows from the definition of ~. This does not give an embedding into the real line: incomparable classes may exist.

For finitely many sets X_i their product consists of tuples (x_1,…,x_m) with x_i∈X_i. A constraint set is a specified subset C⊂∏X_i, usually C={x:A(x)=b} for a map A and fixed b. Nonemptiness and attainment are separate hypotheses. A scaling family consists of sets X^(λ), λ>0, and specified bijections s_λ:X→X^(λ), coherent under composition of scalings. A positive cone C⊂R^d is closed under positive scalar multiplication; a function f:C→R is degree-one homogeneous iff f(λx)=λf(x). These definitions do not assert a physical scaling operation exists.

## M2. Concavity, tangent bounds, and constrained maxima

A set C⊂R^d is convex if (1-t)x+ty∈C whenever x,y∈C and t∈[0,1]. A real-valued f on C is concave iff f((1-t)x+ty)≥(1-t)f(x)+tf(y); equivalently -f is convex. It is strictly concave if the inequality is strict for x≠y and 0<t<1. For differentiable f on open convex C, concavity implies

f(y)≤f(x)+Df(x)(y-x).

Indeed set g(t)=f(x+t(y-x)). Concavity gives g(t)≥(1-t)g(0)+tg(1) for 0<t≤1, hence g(1)-g(0)≤(g(t)-g(0))/t. Taking t↓0 and using the chain rule gives the assertion. Conversely, if the displayed bound holds for all x,y, take z=(1-t)x+ty; multiply the bounds from z to x and y by 1-t and t and add. Their linear terms cancel, giving concavity. For C² f the published Hessian criterion applied to -f gives equivalently vᵀH_f(x)v≤0 for every v. Domain convexity and C² regularity are essential.

If feasible points are x∈C with Ax=b for a fixed linear map A, and x_* is interior in C with Df(x_*) vanishing on ker A, the tangent bound makes x_* a global feasible maximizer: A(y-x_*)=0 implies Df(x_*)(y-x_*)=0. Conversely a feasible local maximum at an interior point has directional derivative zero in each direction v∈ker A, because small displacements of both signs are feasible and differentiability bounds their difference quotients. Strict concavity gives at most one maximizer: two distinct maximizing feasible points would have a strictly greater midpoint value. Existence follows from continuity on a nonempty compact feasible set by the published extreme-value theorem, and is otherwise not supplied. Semidefinite Hessians alone do not supply strictness or existence.

For two systems with differentiable functions f_i(u_i,v_i,n_i), constrained sum f_1+f_2 and fixed u_1+u_2, v_1+v_2, n_1+n_2, differentiating each independent exchange at an interior maximum gives equality of the corresponding first partials. Each constraint that is retained removes the associated exchange direction; there is no conclusion of equal partials for an exchange forbidden by C. This is purely calculus, subsequently interpreted physically only after an entropy-maximum postulate.

## M3. Scalar-coordinate inversion without arbitrary Choice

Let f(u,y) be C¹ on an open set in R×R^m, at (u_0,y_0), with f_u(u_0,y_0)>0. Continuity yields a closed box [u_0-r,u_0+r]×B̄(y_0,ρ) in the domain and a>0 such that f_u≥a there. After shrinking the y-neighborhood, continuity at the two endpoints implies f(u_0-r,y)<s_0-ε and f(u_0+r,y)>s_0+ε for s_0=f(u_0,y_0) and some ε>0. The mean-value theorem makes u↦f(u,y) strictly increasing on this interval; the intermediate-value theorem gives exactly one u=g(s,y) for |s-s_0|<ε and y near y_0.

On a smaller closed box the y-partials are bounded by B, since they are continuous and the box compact. Applying the mean-value theorem along y-segments, and then along u, gives

a|g(s,y)-g(s′,y′)|≤|s-s′|+B‖y-y′‖

with B increased to a norm bound on the y-gradient. Thus g is continuous and locally Lipschitz. For increments (h,k), set δ=g(s+h,y+k)-g(s,y); the bound gives δ=O(‖(h,k)‖). Expand f at (g(s,y),y): h=f_uδ+f_y k+o(‖(δ,k)‖), so δ=(h-f_y k)/f_u+o(‖(h,k)‖). Therefore g_s=1/f_u and g_y=-f_y/f_u, with right sides evaluated at (g(s,y),y). These are continuous, so g is C¹. If f is C², their derivatives exist continuously by the chain, product, and reciprocal rules, so g is C². The argument only gives a local inverse; no global invertibility follows unless monotonicity and image coverage are supplied throughout the domain. The analogous negative-f_u case applies to -f. This avoids the published Banach inverse theorem's stated AC assumption.

## M4. Degree-one identities

Let C be an open positive cone, f:C→R be C¹ and degree-one homogeneous. Differentiating f(λx)=λf(x) in λ at λ=1 gives Euler's identity f(x)=Df(x)x. For C² f differentiating this identity in x gives Df(x)h=H_f(x)[h,x]+Df(x)h, hence H_f(x)x=0. Consequently a degree-one C² function cannot have a definite Hessian in all extensive coordinates: the scaling direction is a null direction. Positive response or strict concavity assertions must specify a constrained slice.

Writing x=(s,v,n_1,…,n_r) and f_s=t, f_v=-p, f_nj=m_j, Euler gives f=ts-pv+Σm_jn_j. Differentiating and comparing with df=t ds-p dv+Σm_jdn_j cancels terms and gives s dt-v dp+Σn_jdm_j=0. This is a mathematical identity under homogeneity and regularity, not a universal physical law for nonadditive or surface-sensitive systems.

## M5. Smooth partial Legendre transforms and mixed partials

Let f(s,z) be C² and f_ss>0 near a point. Apply M3 to t=f_s(s,z) to obtain s=σ(t,z), a C¹ local function, and define a(t,z)=f(σ(t,z),z)-tσ(t,z). The chain rule yields a_t=-σ and a_z=f_z(σ,z), because the coefficients of dσ cancel. These first derivatives are C¹, hence a is C². In particular a_tt=-1/f_ss<0 and a_tz=-σ_z=f_sz/f_ss. Differentiating a_z=f_z(σ,z) once more gives the scalar-block Schur formula H_(a,zz)=H_(f,zz)−f_zs f_sz/f_ss, evaluated at the inverse point, because σ_z=−f_sz/f_ss. Omitting this cross correction falsely differentiates while retaining the old variable s rather than holding t fixed. The local coordinate chart fails when f_ss=0; a global minimum formula needs additional domain/attainment hypotheses.

For differentiable convex f(s,z) on an open convex domain, if an interior σ satisfies f_s=t, its supporting tangent bound proves f(s,z)-ts≥f(σ,z)-tσ for all s in that slice. Thus the smooth transform equals inf_s(f(s,z)-ts) whenever such σ exists. Boundary optima and absent minimizers require separate treatment. A general nonsmooth Fenchel theorem is not proved here.

For any C² a(t,v,n), the directly reviewed rectangular-difference Clairaut lemma gives a_tv=a_vt. If definitions a_t=-s and a_v=-p are subsequently assigned, then s_v=p_t. For C² f(s,v,n), f_s=t and f_v=-p give t_v=-p_s. If h(s,p,n)=f+pv in a valid chart, h_s=t,h_p=v gives t_p=v_s. If g(t,p,n)=f-ts+pv in a valid chart, g_t=-s,g_p=v gives s_p=-v_t. Each derivative holds the remaining natural coordinates fixed; no identity is asserted across a nondifferentiable boundary or invalid chart.

## M6. Exact increments versus process functionals

For a C¹ scalar f on open X⊂R^d and a piecewise-C¹ path γ:[a,b]→X, the published gradient theorem gives ∫Df(γ(t))γ′(t)dt=f(γ(b))-f(γ(a)). A continuous coefficient vector w defines a process functional W[γ]=∫w(γ(t))·γ′(t)dt, but its being a line integral does not make it an endpoint increment. Explicit witness on R²: w(x,y)=(0,x). The path (0,0)→(1,0)→(1,1) has W=1, while (0,0)→(0,1)→(1,1) has W=0, since the only nonzero integral is ∫_0^1 1dy on the first path. Thus Q[γ]=f(γ(b))-f(γ(a))-W[γ] is likewise path-dependent. Adding W and Q still yields an exact increment. Real processes can require additional protocol variables, and need not be curves through equilibrium states; the example proves only the mathematical distinction.

## M7. Finite probability, canonical calculation, and limits of this calculation

Fix a finite nonempty set Ω, energies e_i∈R, inverse parameter β>0, Z(β)=Σexp(-βe_i)>0 and p_i=exp(-βe_i)/Z. These weights define a finite probability space. Put E=Σp_i e_i. Finite differentiation gives Z′=-Σe_i exp(-βe_i), E=-d log Z/dβ and

-dE/dβ=Σp_i e_i²-E²=Σp_i(e_i-E)²≥0.

The last equality is finite-sum algebra and Σp_i=1. With entropy H=-Σp_i log p_i, substitution log p_i=-βe_i-log Z gives H=βE+log Z. The formula assumes fixed e_i as β varies. If the energies depend on a mechanical parameter, include its derivative terms. Since finite sums of exponentials are smooth and Z>0, these functions are smooth at every finite β. They do not produce a singular finite-state phase transition.

For probability vectors p and q with all q_i>0, let D(p‖q)=Σ_{p_i>0}p_i log(p_i/q_i). The inequality log x≤x-1 follows from derivative 1/x-1 changing sign at 1 (or MVT on each side). Applying it to x=q_i/p_i gives D≥Σ_{p_i>0}(p_i-q_i)≥0. Equality forces every p_i=q_i, including vanishing p_i. Choosing canonical q and fixed mean Σp_i e_i=E_q yields D=H(q)-H(p), so q uniquely maximizes H under the normalized fixed-mean constraint. A maximum-entropy principle is a further modeling choice when used to assign physical probabilities.

For independent additive finite systems Ω_A×Ω_B with e_(i,j)=e_i+e_j, Z_AB=Z_A Z_B and p_(i,j)=p_i p_j; substituting the logarithm of this product makes H_AB=H_A+H_B. Interactions or statistical correlation invalidate this factorization. No law of large numbers, measure-theoretic partition function, quantum spectral limit, ensemble-equivalence theorem, or fluctuation theorem is proved by this finite calculation.

## Explicit OPEN major proof contracts

O1. Order-to-entropy: from a family of scaled state sets, composition, A1–A6 and comparison on each relevant product, construct an additive extensive real representation, prove finite/attained defining suprema and uniqueness; separately prove simple-system and thermal-contact assumptions imply the necessary comparison hypotheses. Full Lieb–Yngvason argument is source-reviewed; no exact published repository supplier or complete local replacement is yet provided. Do not use a bare preorder or this dossier's M1 to establish entropy existence.

O2. Nonsmooth convex duality and phase geometry: specify proper upper-semicontinuous concave fundamental functions, relative domains, supergradients, biconjugation and supporting-hyperplane hypotheses; prove duality, attainments/coexistence statements and possible ensemble inequivalence. M2/M5 close only smooth interior consequences.

O3. Thermodynamic limit: define a sequence of microscopic models, stability, range/tempering, volume boundary sequence and density; prove existence of the chosen entropy/free-energy limit and justify each limiting derivative and any concentration/ensemble equivalence. Macroscopic homogeneity is adopted independently until this is met.

O4. Infinite/continuous ensembles: establish measurable phase spaces or quantum trace-class Gibbs states, finiteness of partition functions, interchange of limits/integration/differentiation, and entropy domains. Finite M7 cannot be silently extended.

O5. Fluctuation theorems and nonequilibrium evolution: define path probability space, driving protocol, initial ensemble, microscopic reversibility and work convention; prove the precise expectation identity and any inequality with integrability hypotheses. No universal pathwise entropy monotonicity follows from a mean inequality.

O6. General Pfaffian integrating factors/Carathéodory: define differential forms, regularity and distribution/integrability conditions; prove the local theorem and distinguish it from global entropy or accessibility. This is a later comparison branch, not a prerequisite for the adopted entropy formulation.

## M8. Response relation on a smooth two-coordinate slice

Let f(t,v) be C² on an open region, put s=−f_t, p=−f_v, and suppose v>0,t>0 and p_v<0. By M3, v=v(t,p) locally, with v_t|p=−p_t|v/p_v|t. By equality of mixed partials, s_v|t=p_t|v. Let c_v=t s_t|v, c_p=t s_t|p, α=v_t|p/v, κ=−v_p|t/v=−1/(vp_v|t)>0. The chain rule gives

c_p−c_v=t(s_v|t)(v_t|p)=−t(p_t|v)²/(p_v|t)=tvα²/κ≥0.

If f came from an energy representation with its standard differential, c_v equals u_t|v and c_p equals h_t|p by the chain rule and cancellations. The calculation needs only C² f and valid charts; it does not establish p_v<0 or positivity of individual heat capacities without added curvature hypotheses. No third derivative is needed for this identity.

## M9. Smooth coexistence-curve and reaction derivative calculations

Let g_a,g_b be C² functions on an open region of (t,p), and let d=g_b−g_a with d(t_0,p_0)=0 and d_p(t_0,p_0)≠0. M3 (including its negative-derivative variant) gives a local C² curve p=p(t) with d(t,p(t))=0. Differentiating gives p′=−d_t/d_p. If s_i=−g_i,t and v_i=g_i,p, this is p′=(s_b−s_a)/(v_b−v_a). This proves only the local implicit curve; interpreting equality g_a=g_b as coexistence requires the physical equilibrium model. A zero denominator gives no conclusion.

For C¹ u(s,v,n) and fixed matrix ν, along n=n^0+νξ the chain rule gives derivative in direction ξ_α equal to Σ_j u_njν_jα. Vanishing at an interior constrained optimum follows from the two-sided directional argument in M2. Boundary inequalities require a specified tangent cone and are not included as interior equalities. Rank counts for phase rules remain an additional finite-dimensional constraint-rank proof contract until explicitly supplied.

### M6 definition addendum

A piecewise-C¹ curve γ:[a,b]→R^d is continuous and has a finite partition a=t_0<…<t_m=b such that on each open piece (t_i,t_(i+1)) it is C¹ and its derivative extends continuously to the closed piece; γ is continuous at every join. Those extensions are the v_i in the published line-integral definition. The constant single-point interval is admitted separately with integral zero. Refined partitions split ordinary Riemann integrals and leave the sum unchanged by additivity; a common finite refinement proves independence of any two such admissible partitions. This local proof supplies the partition-independence interface used in M6 without asserting an unreviewed full arc-length theorem.


### Restricted low-temperature counterexample

For c,t_0>0 set C(t)=c(t/t_0)^(1/2) for 0<t≤t_0. The directly reviewed positive-real-power derivative gives d[2c(t/t_0)^(1/2)]/dt=C(t)/t. Newton–Leibniz on [ε,t] therefore gives ∫_ε^t C(u)/u du=2c[(t/t_0)^(1/2)−(ε/t_0)^(1/2)]. Taking the explicit limit ε↓0 gives 2c(t/t_0)^(1/2), finite. Thus integrability of C(t)/t near zero does not require exponent≥1. This is a mathematical counterexample, not a measured heat capacity or a universal material model.

## M10. Finite-reservoir tangent direction

Let s be differentiable and concave on an interval, with u_f=u_i−q in the interval. The tangent inequality M2 at u_i gives s(u_f)−s(u_i)≤−q s′(u_i). Applying it at u_f to u_i gives s(u_f)−s(u_i)≥−q s′(u_f). If s′=1/t>0, then −q/t_f≤Δs≤−q/t_i. This holds for either sign of q; no assumption of a constant temperature is used.

For two differentiable concave functions s_h,s_c with shifts q_h>0,q_c<0, assume the mathematical inequality Δs_h+Δs_c≥0. Define η=(q_h+q_c)/q_h. Then 0≤Δs_h+Δs_c≤−q_h/t_(h,i)−q_c/t_(c,i), so q_h/t_(h,i)+q_c/t_(c,i)≤0. Algebra gives η≤1−t_(c,i)/t_(h,i). The analogous final-temperature expression does not follow from the lower tangent bounds.

A numerical mathematical witness: take s(t)=log t, u=t on positive numbers. Choose t_(h,i)=400,t_(c,i)=300,t_(h,f)=350,t_(c,f)=2400/7. Products initially/finally both equal120000, so Δs_h+Δs_c=0. Then q_h=50, q_c=−300/7, η=1/7, but 1−t_(c,f)/t_(h,f)=1/49. Thus the final-temperature upper bound fails even with positive final temperatures ordered hot>cold and exact entropy/energy balance. Interpreting these as constant-capacity reservoirs requires that model and reversible accessibility as physical premises; these numbers are hypothetical, not empirical measurements. Joule/kelvin units can be restored with common capacity C>0 and s_SI=C log(t/t_ref). Full model existence is not deduced from the numerical arithmetic alone.

A second, symbolic witness has equal final temperatures. Fix c>0 and t_h>t_c>0, take u_i(t)=ct+reference_i and s_i(t)=c log(t/t_ref)+constant_i. Assume both function arguments end at a common t_f>0 and impose Δs_h+Δs_c=0. This equation gives log(t_f²/(t_h t_c))=0, hence t_f=√(t_h t_c)>0. Define w=c(t_h+t_c−2√(t_h t_c))=c(√t_h−√t_c)²>0. Heat extracted from the hot body is q_h=c(t_h−t_f)>0 and η=w/q_h=1−√(t_c/t_h)>0, whereas a final-temperature Carnot upper bound would be 1−t_f/t_f=0. A physical application assumes a quasistatic reversible-engine protocol, entropy-conserving transfer and ideal cyclic work extraction; these are separate physical premises, not dependencies of the mathematical identities, not inferred from algebra, and not reported as experiments. The calculation supplies a conditional counterexample to the asserted final-temperature bound, and a corrected finite-reservoir topic is retained rather than discarded.
