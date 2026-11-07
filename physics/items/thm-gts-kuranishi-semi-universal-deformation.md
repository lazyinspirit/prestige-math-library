---
id: thm-gts-kuranishi-semi-universal-deformation
kind: theorem
title: Kuranishi semi-universal deformation
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
axiom_strength: ZF + full AC, through the elliptic and Banach analytic suppliers.
deps:
- def-gts-kodairaspencer-deformation-problem
- thm-inverse-function-theorem-for-banach-spaces
- thm-banach-fixed-point
- thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
- thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
- cor-sobolev-algebra-above-the-critical-index
- def-axiom-of-choice
- lem-gts-real-analytic-hermitian-metric-and-dolbeault-green-control
- lem-gts-analytic-kuranishi-fixed-point-and-residual-equivalence
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions
- thm-dolbeault-lemma-polydisc
- thm-smooth-function-module-sheaves-are-acyclic
- thm-acyclic-resolution-theorem-for-right-derived-functors
dependency_roles:
  def-gts-kodairaspencer-deformation-problem: mathematical-premise
  thm-inverse-function-theorem-for-banach-spaces: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  cor-sobolev-algebra-above-the-critical-index: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-gts-real-analytic-hermitian-metric-and-dolbeault-green-control: mathematical-premise
  lem-gts-analytic-kuranishi-fixed-point-and-residual-equivalence: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties,
      Harvard CMSA revision
    url: https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf
    locator: '§0.2 and §1.1, printed pp. 4–8: analytic and formal deformations, Kuranishi
      unobstructedness context, and the deformation/Hodge comparison.'
  - title: Adrien Douady, Le problème des modules pour les variétés analytiques complexes,
      exposé277
    url: https://www.numdam.org/item/SB_1964-1966__9__7_0/
    locator: Full exposition read, §§2–7, printed7–13; real-analytic relative Frobenius
      and analytic mapping-space route. The analytic-metric and bounded-ideal-division
      inputs are reconstructed locally here.
verification:
  precheck: pending
---

## Statement

Let $X$ be a compact complex manifold. There is a finite-dimensional complex analytic germ $(K,0)$ and a marked proper holomorphic deformation $\mathcal X\to K$ with central fibre $X$ that is semi-universal: every sufficiently small marked analytic deformation is induced by a map of germs to $(K,0)$, and the induced tangent map is an isomorphism. The tangent space is $T_0K\cong H^1(X,T_X^{1,0})$; the local analytic base is the zero locus of a holomorphic Kuranishi map $\kappa:H^1(X,T_X^{1,0})\to H^2(X,T_X^{1,0})$ with $\kappa(0)=0$ and $D\kappa(0)=0$. Automorphisms are retained in the deformation groupoid; the assertion is not a global fine-moduli statement.

## Statement references

[[lem-gts-real-analytic-hermitian-metric-and-dolbeault-green-control]]

[[lem-gts-analytic-kuranishi-fixed-point-and-residual-equivalence]]

[[def-gts-kodairaspencer-deformation-problem]]

## Facts & Assumptions

**Given:** Full AC, the original compact complex manifold, its actual marked analytic deformation groupoid, and no smoothness or reducedness assumption on a test analytic base.

[F1] The Kodaira–Spencer complex and its bracket obey the stated Maurer–Cartan and graded Jacobi identities. The graph convention is the one in the actual definition. [[def-gts-kodairaspencer-deformation-problem]]

[F2] The compact elliptic/Hodge and Sobolev algebra suppliers give the precise ordinary Green and multiplication estimates. The completed fixed-point lemma gives the small coclosed Maurer–Cartan slice, holomorphic harmonic-parameter dependence, and the exact residual identity $R=\kappa+Q[R,\xi]$. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] [[cor-sobolev-algebra-above-the-critical-index]] [[lem-gts-analytic-kuranishi-fixed-point-and-residual-equivalence]]

[F3] A real-analytic Hermitian metric exists and its Q=∂bar*G has the bounded SAME-radius analytic-norm maps in the preceding lemma. This is a proved metric/estimate input, not a parameter-dependent Newlander–Nirenberg assumption. [[lem-gts-real-analytic-hermitian-metric-and-dolbeault-green-control]]

[F4] The inverse-function and contraction theorems apply on the named Banach spaces below, and Cauchy formulas prove holomorphy of the uniform limits. Smooth partitions are used only in the fixed central variable. [[thm-inverse-function-theorem-for-banach-spaces]] [[thm-banach-fixed-point]] [[thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions]] [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[F5] Local holomorphic Dolbeault exactness, the acyclicity of smooth module sheaves and the acyclic-resolution theorem identify Dolbeault harmonic cohomology with $H^q(X,T_X^{1,0})$. [[thm-dolbeault-lemma-polydisc]] [[thm-smooth-function-module-sheaves-are-acyclic]] [[thm-acyclic-resolution-theorem-for-right-derived-functors]]

## Proof

1.1 Choose the real-analytic metric from [F3]. Fix an integer s>n+2 and a common analytic radius for the finite degree range needed in the bracket and Q estimates. All harmonic spaces are finite dimensional by [F2] and identify with the asserted sheaf cohomology by [F5]. No integrability or effectivity assertion about a parameter space is assumed. [F1, F2, F3, F4, F5, construct, algebra]

2.1 The bracket is a sum of a coefficient times one derivative, with fixed analytic tensor contractions. Therefore ||[u,v]||_{s-1,r}≤C||u||_{s,r}||v||_{s,r}. Together with the just proved Q estimate, the completed fixed-point contraction applies in this analytic Banach space. Its harmonic parameter is finite dimensional and analytic by the preceding harmonic estimate. Shrink only the harmonic parameter neighborhood once. Uniform holomorphic Picard iteration gives a solution ξ_an(t) holomorphic in that analytic norm. Its inclusion in H^s is a solution of the SAME equation as the completed smooth fixed point, so uniqueness identifies the two. In particular ξ(t) is jointly real analytic in x and holomorphic in t on common complexified spatial and parameter neighborhoods. [step 1.1, F1, F2, F3, F4, F5, construct, algebra]

3.1 The full residual R(t)=dξ+[ξ,ξ]/2 has the same coefficient regularity. In the order-(s-1) analytic norm, the map r↦Q[r,ξ] has norm less than1/2 after the same finite parameter shrinking, since s-2 is still above half the real dimension. Choose a harmonic basis h_j of degree2 and write κ=Σκ_j h_j. The completed identity R=κ+Q[R,ξ] now gives the explicit analytic factorization R=Σκ_j r_j, where r_j=(I-Q[-,ξ])^-1h_j is its norm-convergent Neumann series in the analytic space. Thus R belongs to the ORIGINAL ideal I=(κ) with analytic spatial coefficient quotients. No radical replacement or pointwise-only vanishing is used. [step 2.1, F1, F2, F3, F4, F5, construct, algebra]

4.1  This construction retains the ideal, not merely its zero set, and therefore applies to nonreduced germs. Let I be an ideal of C{t_1,...,t_m}. The following construction gives one sufficiently small weighted polydisc on which division by a finite standard basis is bounded for absolutely convergent power series with coefficients in ANY complex Banach space B. The division operators are scalar coefficient operators and commute with every bounded linear map between coefficient spaces. [step 3.1, F1, F2, F3, F4, F5, construct, algebra]

5.1 Order exponents first by total degree and then lexicographically, using the least exponent as initial exponent. The initial exponents of nonzero elements of I form an upward-closed subset of N^m. This subset has finitely many minimal generators: for m=1 this is the least integer, and induction on m splits according to the finitely many new minima in the last coordinate; equivalently any sequence of distinct proposed minimal elements has a coordinatewise nondecreasing subsequence, by successive extraction in each integer coordinate. Such a subsequence cannot consist of incomparable minima. Choose f_1,...,f_N in I with these initial exponents α_j, normalizing the initial coefficients to1. Partition the union of α_j+N^m into disjoint subsets D_j⊂α_j+N^m by assigning an exponent to its first applicable j. Let D_0 be the complement. [step 4.1, F1, F2, F3, F4, F5, construct, algebra]

6.1 Choose positive weights w_i sufficiently close to1, with successively smaller lexicographic perturbations, so that in each of the finitely many f_j its initial monomial has strictly smaller w-weight than every other monomial of bounded total degree. This can be done for all relevant bounded-degree monomials at once. Terms of larger total degree also have strictly larger weight if the perturbations are small enough: only degrees up to one more than the maximum initial degree need a separate finite check; thereafter the minimum weight times the degree is larger than all initial weights. For r_i=ε^{w_i}, absolute convergence of f_j implies $$\varepsilon_j:=\frac{\|f_j-t^{\alpha_j}\|_r}{r^{\alpha_j}}\longrightarrow0\quad(\varepsilon\longrightarrow0),\qquad \|g\|_r=\sum_\alpha\|g_\alpha\|_B r^\alpha.$$ [step 5.1, F1, F2, F3, F4, F5, construct, algebra]

7.1 The contribution from each fixed noninitial monomial tends to zero after division by r^{α_j}; the remaining tail is dominated by an absolutely convergent series at a fixed larger polydisc. Choose ε so that max ε_j<1/2. [step 6.1, F1, F2, F3, F4, F5, construct, algebra]

8.1 Let Z_B be the Banach direct sum of quotient series q_j supported on D_j-α_j and a remainder series h supported on D_0, with norm Σ_j r^{α_j}||q_j||_r+||h||_r. Monomial assembly T_0(q,h)=Σt^{α_j}q_j+h is an isometric isomorphism onto the weighted l¹ series space. Its inverse D is the coefficient partition just described. Let E(q,h)=Σ(f_j-t^{α_j})q_j. Then ||DE||<1/2. Hence $$ (q,h)=(I+DE)^{-1}Dg=\sum_{k\ge0}(-DE)^kDg $$ [step 7.1, F1, F2, F3, F4, F5, construct, algebra]

9.1 converges in Z_B, gives g=Σf_jq_j+h, and has norm at most2||g||_r. This is an explicit geometric-series construction. It uses no privileged-neighborhood theorem. An initially B-valued holomorphic germ belongs to this l¹ space after shrinking radii, by its Cauchy coefficient bounds. [step 8.1, F1, F2, F3, F4, F5, construct, algebra]

10.1 The result is also unique as a formal series with the prescribed supports. Each substitution replaces a monomial by strictly larger initial-order monomials. At any fixed total degree there are only finitely many exponents, so recursively all coefficients are determined. In particular the formal result is independent of a further reduction of ε. For a scalar g∈I, the analytic remainder h=g-Σf_jq_j lies in I. If h were nonzero its initial exponent would belong to the initial-exponent set of I, while its support is D_0; this is impossible. Thus scalar ideal elements have zero remainder. Applying bounded scalar functionals shows the same for any B-valued g already written as Σf_jb_j with B-valued holomorphic b_j. [step 9.1, F1, F2, F3, F4, F5, construct, algebra]

11.1 This proves an important regularity compatibility. Suppose a germ g belongs both to B-valued holomorphic series and to C-valued holomorphic series under an injective bounded inclusion B→C. If g has zero remainder in C, its B-valued remainder also vanishes because the division operators commute with the inclusion. The B-valued quotients therefore express g in I using the stronger coefficient regularity. In particular, when C consists of smooth functions of spatial variables and B consists of holomorphic functions on a fixed complex spatial polydisc, an analytic spatial function known to lie in I with smooth spatial coefficients actually admits analytic spatial coefficients after shrinking. The same argument works with an auxiliary analytic parameter u, which can simply be included in the coefficient Banach space. [step 10.1, F1, F2, F3, F4, F5, construct, algebra]

12.1 For a given finite set of generators κ of I rather than the chosen f_j, write each f_j as a finite analytic combination of κ. Shrinking the polydisc bounds these finitely many coefficient functions, so the preceding quotients give bounded division into κ as well. Conversely each κ has zero remainder by membership in I. The construction consequently concerns the original analytic scheme structure, including nilpotents and syzygies, and not a radical replacement. [step 11.1, F1, F2, F3, F4, F5, construct, algebra]

13.1 Finally, any analytic identity modulo I can be tested and lifted using these same division operators in each of the coefficient Banach spaces used in an elliptic construction. No selection of representatives depending discontinuously on the parameter is required. This is the finite-dimensional analytic-ideal ingredient needed for a relative Frobenius construction and for analytic implicit equations over an arbitrary analytic base germ. [step 12.1, F1, F2, F3, F4, F5, construct, algebra]

14.1  Set O_K=C{t}/I. On a central holomorphic chart of X, complexify its real coordinates, writing z and w as independent complex variables and restricting w=bar z only at the end. The graph fields are $$L_j=\partial_{w_j}+\sum_k\xi_j^k(z,w,t)\partial_{z_k}.$$ [step 13.1, F1, F2, F3, F4, F5, construct, algebra]

15.1 They have convergent holomorphic coefficients, and [L_j,L_l]=0 modulo I by the residual calculation. Their w components are the constant coordinate basis. The analytic ODE construction works over O_K and retains nilpotents. An explicit way to define it is to take the convergent-coefficient functions on a sufficiently small closed parameter polydisc with the weighted absolutely convergent coefficient norm of the division construction, divide by its closed ideal, and iterate the usual integral Picard equation on a smaller complex spatial polydisc. Uniform Cauchy bounds make the contraction constant less than1/2. Each iterate is an analytic expression over the same quotient; the limit and its spatial derivatives converge in norm. Changing a representative by I changes every iterate and its limit by I, so this is a construction over O_K, not just at its closed points. [step 14.1, F1, F2, F3, F4, F5, construct, algebra]

16.1 Starting at the transverse section w=0, compose the flows successively for complex times w_1,...,w_n. The flows preserve t. Their commutation follows by differentiating one pushed-forward vector field along the other flow: the derivative is the zero bracket modulo I, and uniqueness of the ODE gives equality. The resulting map (a,w,t)↦(z,w,t) has derivative the identity in a at the central point, hence has a convergent inverse over O_K by the same contraction argument. Let a=a(z,w,t) be its first n components. Then L_ja=0 and a(z,0,t)=z. Restrict w=bar z. These are actual local relative holomorphic coordinates for the graph structure, holomorphic in t with the full O_K coefficients. Their spatial Jacobian is close to the identity. [step 15.1, F1, F2, F3, F4, F5, construct, algebra]

17.1 If two such coordinate systems are compared, both are annihilated by the same L_j. In the invertible coordinates (a,w,t) those fields are ∂_{w_j}. The transition is therefore independent of w, since its convergent power series has zero w derivatives. It is consequently a holomorphic function of (a,t) over O_K. This proves the transition assertion even for nonreduced K; equality of closed-point values was never used. [step 16.1, F1, F2, F3, F4, F5, construct, algebra]

18.1 Glue the finite chart family by these transitions. The cocycle equalities hold as analytic identities modulo I because they already hold for coordinate changes on the common graph algebra. Locally the resulting space is a product of K and a fibre polydisc, so its map to K is a smooth holomorphic deformation. The central marking is the identity. After shrinking the base once, the coordinate maps depend continuously on (x,t), have uniform local inverses on a finite central cover, and identify the underlying total space with X×|K|. Compactness of X then proves properness. Nilpotents do not change this properness calculation. Thus this is the required actual marked proper holomorphic family over the full analytic obstruction germ. [step 17.1, F1, F2, F3, F4, F5, construct, algebra]

19.1 It remains to construct the holomorphic classifying map for any already given analytic deformation; the following named-space normalization does this, including nonreduced bases. [step 18.1, F1, F2, F3, F4, F5, construct, algebra]

20.1  This construction uses the completed Hodge fixed point and its exact residual equivalence, rather than redoing them. Unlike a real diffeomorphism gauge on an arbitrary Beltrami input, the gauge below is complex analytic because its TARGET is an actual holomorphic family. It applies to a nonreduced analytic base with its full defining ideal. [step 19.1, F1, F2, F3, F4, F5, construct, algebra]

21.1 Let π:Y→(S,0) be a marked smooth proper holomorphic deformation of the compact complex manifold X. Present S as an analytic germ in C^m with ideal I, retaining this ideal. Smoothness means that near every point of the central fibre there are actual relative coordinates (s,y_i) identifying Y locally with S×an open polydisc; the transitions are holomorphic in (s,y_i) modulo I. Choose finitely many such charts covering X and smooth functions χ_i(x) with supports compactly inside their central chart domains and Σχ_i=1. These weights depend only on the fixed central point x, never on a moving image point or on s. [step 20.1, F1, F2, F3, F4, F5, construct, algebra]

22.1 For y in Y_s near x define, using the central differentials to take values in T_x^{1,0}X, $$A(x,y,s)=\sum_i\chi_i(x)\,(d_xy_i(x,0))^{-1}\bigl(y_i(y,s)-y_i(x,0)\bigr).$$ [step 21.1, F1, F2, F3, F4, F5, construct, algebra]

23.1 Only charts whose central support contains x occur, and all those expressions are defined on a common neighborhood of the central diagonal after shrinking. At s=0,y=x one has A=0 and D_yA=Σχ_i I=I. The ordinary finite-dimensional holomorphic implicit-function construction gives a unique y=Exp(x,v,s) solving A=v. Its coefficients are smooth in the external variable x and holomorphic in (v,s). One way to see this without an unstated parameter theorem is to subtract the identity derivative and iterate the resulting contraction on a common small coordinate ball; compactness gives one contraction radius, all iterates are holomorphic in (v,s), and their smooth x derivatives converge by the differentiated equation. On overlaps uniqueness patches the local answers. The same construction modulo I follows by lifting the local analytic expressions to an ambient parameter polydisc, applying the contraction there, and reducing; changing lifts changes the answer by I. The bounded ideal division just proved gives bounded compatible lifts whenever Banach-valued expressions are used below. [step 22.1, F1, F2, F3, F4, F5, construct, algebra]

24.1 For s=0 the derivative in v is the identity and Exp(x,0,0)=x. Fix an integer k>n+2. A small section v∈H^{k+1}(T_X^{1,0}) defines f_{v,s}(x)=Exp(x,v(x),s). In a relative target chart its coordinate expression F_i(x,v,s) is an H^{k+1} function, holomorphic as a Banach-valued function of (v,s). Indeed compactness supplies a common holomorphic radius in the finite-dimensional v coordinate; Cauchy bounds hold for its x derivatives through order k+1. The power series then converges in the H^{k+1} Banach algebra. This is a fixed smooth coefficient Nemytskii construction, not composition of an arbitrary Sobolev tensor with an arbitrary Sobolev map. [step 23.1, F1, F2, F3, F4, F5, construct, algebra]

25.1 The relative map f is a diffeomorphism on the reduced nearby fibres after shrinking, since its x-Jacobian is close to the identity; compactness prevents distant collisions. Its pulled-back (0,1) graph has the coordinate expression $$p(v,s)=-(\partial_zF_i)^{-1}\bar\partial_xF_i.$$ [step 24.1, F1, F2, F3, F4, F5, construct, algebra]

26.1 The target transitions are HOLomorphic in their fibre coordinates, so this expression patches and is holomorphic H^k-valued in (v,s). There is no bar-F or conjugate-v in this expression. Its Maurer–Cartan equation holds identically over O_S: the graph vector fields annihilate F_i, their bracket has only a central (1,0) component, and ∂_zF_i is invertible, so that component is zero. This argument concerns identities modulo I, not merely pointwise integrability on S_red. [step 25.1, F1, F2, F3, F4, F5, construct, algebra]

27.1 Let C=H^{k+1}(T_X^{1,0})∩(H⁰)⊥ and Z=H^{k-1}(T_X^{1,0})∩(H⁰)⊥, both complex Banach spaces. Define B(v,s)=d*p(v,s)∈Z. This is holomorphic: one derivative is used to form p and one by d*. At (0,0), D_vp=-d and $$D_vB(0,0)=-d^*d:C\longrightarrow Z,$$ [step 26.1, F1, F2, F3, F4, F5, construct, algebra]

28.1 which is a bounded isomorphism with inverse -G₀ by the completed Hodge supplier. After composing with this inverse, the equation is v=Q(v,s) with D_vQ(0,0)=0. A small closed complex Banach ball has contraction constant less than1/2 uniformly on a small parameter polydisc. Iteration gives a holomorphic solution v(s), by norm convergence of holomorphic iterates. For a nonreduced S, apply this to a Banach-valued analytic lift of B on an ambient parameter polydisc, then reduce. The solution class is independent of the lift: the difference of two equations is in I, and the invertible linearized contraction equation expresses the difference of solutions in I. More explicitly, the inverse implicit solution is analytic in an additional target variable q; its difference between q and0 is the integral of its derivative along τq, and therefore factors by the same finite generators of I whenever q does. This proves the implicit assertion over O_S, including nilpotents. [step 27.1, F1, F2, F3, F4, F5, construct, algebra]

29.1 Set μ(s)=p(v(s),s). It is a small coclosed Maurer–Cartan element over O_S. Put t(s)=H_1μ(s); this is a HOLomorphic map into the finite-dimensional harmonic parameter space. The completed fixed-point/residual supplier gives μ(s)=ξ(t(s)) and κ(t(s))=0 as analytic identities over O_S. For the nonreduced assertion, substitute into the analytic fixed-point equation: its solution is unique by the same contraction modulo I, and the exact residual identity holds coefficientwise. Thus t factors through the full analytic germ K defined by the ideal of κ, not just its reduced zero set. [step 28.1, F1, F2, F3, F4, F5, construct, algebra]

30.1 At the central point v(0)=0, f_0 is the marking, and t(0)=0. Differentiating to first order gives t'(0)=H_1μ'(0). The Čech/Dolbeault sign convention identifies this with the Kodaira–Spencer class up to its common fixed sign, since a gauge derivative is d-exact and H_1d=0. Use that same convention in identifying the tangent of the universal slice with H¹. Its tangent classifying map is then the identity; no choice of the sign changes invertibility or the zero first derivative of κ. [step 29.1, F1, F2, F3, F4, F5, construct, algebra]

31.1 For the relative holomorphic family associated to ξ over K just constructed, the maps f_{v(s),s} give the required marked isomorphism with its pullback. To verify holomorphy of that isomorphism, use the actual relative coordinates on the constructed family: a coordinate function is d_ξ-closed and holomorphic in the base. The equality μ=ξ(t(s)) and the holomorphic parameter dependence of f make its target-coordinate pullbacks such functions. The relative Jacobian is invertible at the central fibre, so the holomorphic inverse construction over O_S gives the inverse, including on nilpotent directions. Properness is inherited by base change. Uniqueness of the chosen complement normalizer is not a fine-moduli assertion; H⁰ automorphism directions have only been excluded from this one gauge choice and remain as arrows in the deformation groupoid. [step 30.1, F1, F2, F3, F4, F5, construct, algebra]

32.1 This completes holomorphic normalization and the classifying-map construction for every already-given marked analytic deformation, The universal relative analytic family has already been constructed above; a smooth real gauge is not substituted for this holomorphic normalization. [step 31.1, F1, F2, F3, F4, F5, construct, algebra]

33.1  The family just constructed over the zero germ of κ is marked, smooth and proper, and every given marked analytic deformation is its pullback by the holomorphic classifying map. The derivative of the fixed point at zero is the harmonic inclusion and Dκ(0)=0 by [F2], so the Zariski tangent of the full analytic germ is H¹(X,T_X^{1,0}); the classifying tangent is the Kodaira–Spencer isomorphism with the same fixed Čech convention on both sides. κ(0)=0 as well. The complement used for one normalizing map does not quotient away automorphism arrows. These are precisely all clauses of the unchanged public Statement. [step 32.1, F1, F2, F3, F4, F5, construct, algebra] ∎

## Remarks

The analytic obstruction ideal, including nilpotents, is retained throughout the bounded division, relative Frobenius and holomorphic normalization constructions. No algebraization, global fine moduli, or elimination of automorphisms is asserted.
