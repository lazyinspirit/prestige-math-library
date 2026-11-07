---
id: lem-gts-real-analytic-hermitian-metric-and-dolbeault-green-control
kind: lemma
title: Real-analytic Hermitian metrics and analytic control of Dolbeault Green operators
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-complex-manifolds-and-holomorphic-vector-bundles
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-inverse-function-theorem-for-banach-spaces
- thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
- thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
- cor-sobolev-algebra-above-the-critical-index
- thm-plancherel
- thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions
dependency_roles:
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-inverse-function-theorem-for-banach-spaces: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  cor-sobolev-algebra-above-the-critical-index: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Assume full AC. Every compact complex manifold admits a real-analytic positive Hermitian metric. For the induced Dolbeault bundles and their Laplacians, there are real-analytic metric connections and, for each fixed finite range of nonnegative Sobolev orders s, a common positive radius r such that the spaces
$$\mathcal A_r^s=\{u\in C^\infty:\|u\|_{s,r}=\sum_{k\ge0}r^k\|\nabla^ku\|_{H^s}/k!<\infty\}$$
are Banach spaces of real-analytic sections. At orders above half the real dimension these spaces are algebras for tensor multiplication and contraction. Harmonic sections belong to them, and the ordinary Dolbeault Green operator has bounded maps $G:\mathcal A_r^s\to\mathcal A_r^{s+2}$ and $\bar\partial^*G:\mathcal A_r^s\to\mathcal A_r^{s+1}$ at the SAME radius r. The inclusions into the ordinary Sobolev spaces are continuous. Bounds and a common smaller spatial complexification can be chosen for each finite atlas and finite collection of bundles used in the Dolbeault complex.

## Facts & Assumptions

**Given:** Full AC, a compact complex manifold, its actual holomorphic atlas and the stated finite bundle collection.

[F1] Complex manifolds have their induced real-analytic coordinate changes and complex structures; smooth partitions of unity and the inverse-function theorem apply on compact finite atlases. [[def-complex-manifolds-and-holomorphic-vector-bundles]] [[thm-smooth-partitions-of-unity-exist-on-manifolds]] [[thm-inverse-function-theorem-for-banach-spaces]]

[F2] The compact scalar-positive elliptic and Hodge theorems give the ordinary Hilbert Sobolev spaces, smooth density, embeddings, harmonic projections and the bounded smooth Green operator at every nonnegative integer order. No analytic regularity is imported from those statements. [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[F3] The Sobolev multiplication estimate holds above half the real dimension. Plancherel supplies the local constant-coefficient weak derivative estimate. [[cor-sobolev-algebra-above-the-critical-index]] [[thm-plancherel]]

[F4] Banach-valued Cauchy integrals give norm-convergent power series and factorial coefficient bounds; iteration over finitely many variables gives the polydisc version. [[thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions]]

## Proof

1.1 Let X be a compact complex manifold. This construction produces a real-analytic Hermitian metric without assuming a real-analytic partition of unity, an analytic embedding theorem, Cartan B, or a Stein-neighborhood theorem. [F1, F2, F3, F4, construct, algebra]

2.1 Put Z=X×bar X and let D={(x,bar x)}. It is a compact real-analytic totally real submanifold of the complex manifold Z, of real dimension N=dim_C Z. In local holomorphic coordinates (z,w) on this product, the combinations (z+w)/2 and (z-w)/(2i) identify D with the real locus in C^N. Choose any smooth ambient metric and its normal tubular coordinates. The ordinary finite-chart inverse theorem gives a smooth squared normal-distance function ρ≥0 on a neighborhood of D, vanishing precisely on D, with no other critical point sufficiently near D. Along D its real Hessian is twice the squared normal projection. Its Levi form on a real vector v is a positive constant times ||π_Nv||²+||π_NJv||²; the two summands cannot both vanish for nonzero v because TD is totally real. Compactness consequently gives positive constants bounding the Hermitian matrix A=(ρ_jbark) above and below on a fixed smaller neighborhood. All derivatives of ρ needed below are uniformly bounded there. [step 1.1, F1, F2, F3, F4, construct, algebra]

3.1 For small ε>0 let Uε={ρ<ε}, s=ε-ρ, t=log(ε/s), and g=i∂∂bar t. In matrix notation, $$g=A/s+(\partial\rho)(\partial\rho)^*/s^2.$$ [step 2.1, F1, F2, F3, F4, construct, algebra]

4.1 Write q=(∂ρ)*A^-1(∂ρ). Normal coordinates and the uniform bounds for A give cρ≤q≤Cρ, |dq|≤C√ρ and |D²q|≤C. The determinant and inverse rank-one formulas give $$\det g=(\det A)s^{-(N+1)}(s+q),\qquad |\partial t|_g^2=q/(s+q)\le1.$$ [step 3.1, F1, F2, F3, F4, construct, algebra]

5.1 Since s+q is bounded above and below by positive multiples of ε, the metric is complete, with the compact cutoffs η(t/R) having gradient O(R^-1). Directly differentiate log det g. The term -(N+1)log s has Hessian (N+1)g. The Hessian of log det A is uniformly bounded in the original metric, and that of log(s+q) is bounded by C/ε times the original metric. Since g≥c/s times that metric and s≤ε, the curvature of K_Z^-1 is bounded in absolute value by Cg, with C independent of ε. [step 4.1, F1, F2, F3, F4, construct, algebra]

6.1 Choose once and for all a constant a>C+N+2 and the weight e^-at=(s/ε)^a. On K_Z^-1-valued (N,1) forms its curvature dominates g. The following weighted solution argument is local operator algebra plus Hilbert space. In a normal Kähler coframe, wedge/contraction anticommutation gives [Λ,∂bar]=-i(D')* and [Λ,D']=i∂bar*. Expanding the products gives Δ''-Δ'=[iΘ,Λ]. Compactly supported (N,1) forms therefore satisfy ||∂bar u||²+||∂bar*u||²≥||u||². The complete cutoffs just constructed and finite-chart Friedrichs mollifiers extend this to the simultaneous maximal domains: the cutoff commutators are O(R^-1), while the convolution commutator for a_j∂_j has kernels (a_j(x)-a_j(y))∂_jρδ(x-y) and ρδ(x-y)∂_ja_j(y), with uniformly bounded L² norms and cancelling smooth-input limits. Let T=∂bar in degree zero and S=∂bar in degree one. For Π the orthogonal projection onto ker S, testing against Tv shows T*Πu=T*u and ||Πu||≤||T*u||. Thus, for a closed f in weighted L², T*u↦(u,f) extends to a Hilbert functional of norm at most||f|| and is represented by v with ∂bar v=f and ||v||≤||f||. The standard identification of scalar (0,q) forms with K_Z^-1-valued (N,q) forms uses sign (-1)^{Nq} and is isometric; no holomorphic triviality of K_Z is assumed. Orthogonal projections and representation follow from the parallelogram minimizing-sequence proof in a closed Hilbert subspace. This proves the precise global solution estimate used here. [step 5.1, F1, F2, F3, F4, construct, algebra]

7.1 We next approximate finitely many smooth functions on D. In a complex chart with D=R^N, a smooth scalar function f has the finite extension $$F_L(x+iy)=\sum_{|\alpha|\le L+1}\frac{(iy)^\alpha}{\alpha!}\partial_x^\alpha f(x).$$ [step 6.1, F1, F2, F3, F4, construct, algebra]

8.1 Its ∂bar error vanishes to order L along D, with the corresponding differentiated estimates. These extensions have the same jets through order L in different real-analytic charts: the ∂bar equation recursively determines all normal jets from the tangential jets. Hence their differences vanish to order L+1. A smooth ambient partition patches them; derivatives of the partition multiply just these high-order differences, so the patched F has F|D=f and |D^j∂bar F|≤C_j dist(D,·)^{L-j} for each fixed j≤L. Only finitely many derivatives are used; there is no assertion that a general smooth f has a convergent analytic extension. [step 7.1, F1, F2, F3, F4, construct, algebra]

9.1 Set fε=∂bar F on Uε and apply the preceding weighted solution. Since g^-1≤Cs and det g≤Cεs^{-(N+1)}, $$\|f_\varepsilon\|_{g,e^{-at}}^2\le C\varepsilon^{L+1-a}\int_{U_\varepsilon}s^{a-N}\,dV\le C'\varepsilon^{L+1-N/2}.$$ [step 8.1, F1, F2, F3, F4, construct, algebra]

10.1 The last inequality uses a>N and the ordinary tubular-volume bound Vol(Uε)≤Cε^{N/2}. It follows that the solution vε has weighted norm at most Cε^{(L+1)/2-N/4}. On a ball of radius c√ε centered on D, s is comparable to ε, the weight is bounded above and below, and dV_g is comparable to ε^-N dV. Therefore its unweighted local L² norm is at most Cε^{(L+1)/2+N/4}. [step 9.1, F1, F2, F3, F4, construct, algebra]

11.1 Local constant-coefficient ∂bar estimates give the required C¹ estimate without any boundary theorem. For a compactly supported scalar w, Plancherel gives ||∇w||²=4Σ||∂bar_jw||². Cutoff, mollify a weak solution, and iterate this identity on differentiated equations; Sobolev embedding on the unit ball then bounds its C¹ norm by its L² norm and finitely many derivatives of its ∂bar data. Rescaling the preceding radius-c√ε balls gives $$\|v_\varepsilon\|_{C^1(D)}\le C_L(\varepsilon^{L/2-N/4}+\varepsilon^{L/2}).$$ [step 10.1, F1, F2, F3, F4, construct, algebra]

12.1 Indeed on the rescaled unit ball the derivative of order j of the datum R fε(x₀+R·) is bounded by R^{j+1}ε^{(L-j)/2}=ε^{(L+1)/2}, for every j through the fixed Sobolev order m, provided L≥m. Converting the C¹ estimate back costs R^-1. The solution L² term costs in addition R^-N and gives the first displayed power. Thus this norm tends to0 for L>max(m,N/2). The function hε=F-vε is holomorphic near D and approximates f in C¹(D). [step 11.1, F1, F2, F3, F4, construct, algebra]

13.1 There is an explicit finite smooth embedding f:D→R^M: take a finite coordinate cover u_i with smooth subordinate χ_i and use all components χ_i and χ_iu_i. A positive χ_i recovers the local coordinates by division, proving both injectivity and injectivity of the derivative. Approximate these finitely many components simultaneously by the holomorphic hε above, using one L and ε. A sufficiently C¹-close map remains an embedding: a finite local inverse cover gives uniform local separation and compactness separates pairs outside those local neighborhoods. Since D is real analytic and the hε are holomorphic, their restrictions give a real-analytic embedding D→C^M. [step 12.1, F1, F2, F3, F4, construct, algebra]

14.1 The pullback of the Euclidean real metric is consequently a positive real-analytic Riemannian metric on D, hence on the underlying real-analytic manifold of X. Its symmetrization (g(v,w)+g(Jv,Jw))/2 is a positive real-analytic Hermitian metric because the original complex structure J is real analytic. It induces real-analytic metrics on the holomorphic tangent bundle and all Dolbeault tensor bundles. These are the analytic metric coefficients needed for the relative Kuranishi construction; no global analytic embedding supplier is left unproved in this argument. [step 13.1, F1, F2, F3, F4, construct, algebra]

15.1  Fix an integer s above half the real dimension plus2. Use the real-analytic Levi–Civita connection on covariant tensor indices and a real-analytic unitary connection on the coefficient bundle, and write ∇ for the product connection. For r>0 put $$\|u\|_{s,r}=\sum_{k\ge0}\frac{r^k}{k!}\|\nabla^ku\|_{H^s}.$$ [step 14.1, F1, F2, F3, F4, construct, algebra]

16.1 These are Banach spaces: a Cauchy sequence converges in H^s, all its covariant derivatives converge in H^s as well, and the distributional differentiation identity identifies the limits; the summable tail estimate passes to the limit. Multiplication and tensor contraction satisfy ||uv||_{s,r}≤C_s||u||_{s,r}||v||_{s,r}. Indeed covariant differentiation has the binomial Leibniz formula, and the H^s product estimate for Hilbert tensor bundles has a constant independent of tensor rank. To obtain this uniform version apply the scalar Sobolev and Hölder estimates to the norms of successive covariant derivatives; |d|v||≤|∇v| removes any dependence on the size or connection matrix of the fibre. The binomial coefficients cancel the factorial weights exactly. Taking one derivative maps the order-s norm to the order-(s-1) norm. A fixed real-analytic coefficient tensor has finite ||·||_{s,r} for small r, by Cauchy bounds on finitely many complexified coordinate neighborhoods. [step 15.1, F1, F2, F3, F4, construct, algebra]

17.1 Here is the analytic elliptic estimate needed below, including the finite-sum argument that avoids assuming analytic regularity. For a formally symmetric analytic operator P of second order with scalar positive symbol, write it as a connection Laplacian plus an analytic first-order and an analytic zeroth-order term. For some constants C,B independent of the truncation N, finite covariant differentiation and integration by parts give $$L_N(u)\le C\bigl(\|u\|_{H^{s+2}}+F_N(Pu)\bigr)+C\frac{r+r^2}{(1-Br)^{s+4}}L_N(u),$$ [step 16.1, F1, F2, F3, F4, construct, algebra]

18.1 where L_N(u)=Σ_{k=0}^N r^k||∇^ku||_{H^{s+2}}/k! and F_N(f)=Σ_{k=0}^N r^k||∇^kf||_{H^s}/k!. To detail the estimate, commuting the connection Laplacian past k covariant derivatives gives curvature derivatives times at most k derivatives of u; there are at most (k+1)² placements. The connection curvature on the k-fold covariant tensor bundle is the sum of its actions on the k factors. Commuting the analytic first-order term gives (∇^jB)∇^{k-j+1}u, j≥1, and commuting the zeroth-order term gives (∇^jC)∇^{k-j}u. Their coefficients have bounds C₀B^j j!, including the fixed s additional derivatives in the Sobolev norm, after increasing B. The base second-order estimate on ∇^ku follows by one integration by parts for its rough Laplacian; its extra bundle-curvature term is bounded by C(k+1)² times the lower derivative norms. All these terms are of derivative order at most k+1, never k+2. [step 17.1, F1, F2, F3, F4, construct, algebra]

19.1 Multiply by r^k/k! and sum before estimating the remainder. The identities k/k!=1/(k-1)! and k(k-1)/k!=1/(k-2)! turn a placement factor accompanying one or two lower derivatives into a factor r or r² multiplying L_N. The convolution of differentiated analytic coefficients contributes Σ_j(Br)^j; the finitely many extra s derivatives contribute at most a fixed polynomial in j, whose sum is bounded by C_s(1-Br)^-(s+4). The terms with an index below0 are bounded by the explicitly retained ||u||_{H^{s+2}}. This proves the displayed finite inequality. No derivative beyond those in L_N is used on the right. Taking r small makes its last coefficient at most1/2, so it is absorbed with constants independent of N. [step 18.1, F1, F2, F3, F4, construct, algebra]

20.1 Apply this to the completed smooth Green operator G of P=Δ_bar. Its ordinary H^s→H^{s+2} bound controls the unweighted term. Letting N increase gives $$\|Gf\|_{s+2,r}\le C'\|f\|_{s,r}.$$ [step 19.1, F1, F2, F3, F4, construct, algebra]

21.1 For a smooth harmonic h the same finite estimate, with Ph=0, gives ||h||_{s+2,r}≤C'||h||_{H^{s+2}}. Thus harmonic sections are analytic as a conclusion of this estimate. The first-order analytic operator d* has the corresponding norm bound, so Q=d*G maps the order-(s-1) analytic norm boundedly to the order-s analytic norm. These statements apply at the same sufficiently small positive r, without successively shrinking a spatial radius at every fixed-point iteration. [step 20.1, F1, F2, F3, F4, construct, algebra]

22.1 For completeness, a finite ||u||_{s,r} implies real analyticity: Sobolev embedding bounds ||∇^ku||_∞ by C k!r^-k||u||_{s,r}; the analytic coordinate connection changes this to coordinate-derivative bounds C₁C₂^k k!. Taylor's integral remainder tends to0 on a uniform smaller coordinate ball. This also proves bounded holomorphic extension to a common complexification of each of finitely many real coordinate charts. [step 21.1, F1, F2, F3, F4, construct, algebra] ∎
