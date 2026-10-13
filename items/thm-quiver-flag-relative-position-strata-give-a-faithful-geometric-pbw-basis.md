---
id: thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis
kind: theorem
title: "Relative-position incidence strata give a faithful geometric PBW basis"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 28
deps: [def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators,
       def-equivariant-borel-moore-homology-and-correspondence-convolution,
       lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports,
       lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator,
       lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus,
       prop-first-chern-class-of-tensor-dual-and-conjugate-lines,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality,
       thm-leray-hirsch-module-isomorphism,
       thm-schubert-cells-give-the-stable-grassmannian-cw-structure,
       thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle,
       lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
       thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology,
       def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Varagnolo, E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992; complete 30-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "V. Ginzburg (notes by V. Baranovsky), Geometric methods in the representation theory of Hecke algebras and quantum groups, arXiv:math/9802004; complete 57-page lecture notes retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/math/9802004"
    - title: "R. Rouquier, Quiver Hecke algebras and 2-Lie algebras, arXiv:1112.3619; complete 48-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/1112.3619"
---

## Statement

Assume the Axiom of Choice as inherited. In the setting of
[[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]], the convolution
algebra $\mathfrak A=\bigoplus_{\eta,\nu}\operatorname{Ext}_G(L_\eta,L_\nu)$ acts by
correspondence composition on the direct sum $P=\bigoplus_\nu P_\nu$ of shifted polynomial
summands $P_\nu=H_G^\bullet(X_\nu;k)[d_\nu]$, where the unit of $P_\nu$ has degree $-d_\nu$
and every $x_r$ has degree $2$, and this action is faithful; here
$H_G^\bullet(X_\nu;k)=k[x_1,\dots,x_m]$ with $m=\sum_i\beta_i$, the variables being the
classes $x_r=c_1^G(F^r/F^{r-1})$ of the preceding definition. Fix one reduced expression of
every $w\in S_m$ and let $\tau_we_\nu$ be the corresponding product of elementary crossings of
[[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]. Then the elements
$x_1^{c_1}\cdots x_m^{c_m}\tau_we_\nu$ with $c_r\ge0$ form a $k$-basis of $\mathfrak A$;
equivalently, the $\tau_we_\nu$ form a free basis of $\mathfrak A$ over the first-coordinate
polynomial corners $k[x_1,\dots,x_m]$, the polynomials acting by left multiplication. In
particular the word idempotents, the dots and the elementary crossings generate $\mathfrak A$. Only relative-position
incidence strata are paved; nothing is asserted about arbitrary stable-flag fibers of
$\pi_\nu$.

## Facts & Assumptions

**Given:** the Axiom of Choice; a characteristic-zero field $k$; a finite loopless quiver $\Gamma$, a dimension vector $\beta$ and a word $\nu$ with $m=\sum_i\beta_i$ as in [[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]; the incidence varieties $X_\nu,F_\nu,Z_{\eta,\nu}$, the objects $L_\nu=\pi_{\nu!}k[d_\nu]$, the algebra $\mathfrak A$ with its opposite-composition product and corner degrees, and the module $P=\bigoplus_\nu H_G^\bullet(X_\nu;k)[d_\nu]$.

[F1] Assume AC. [[def-equivariant-borel-moore-homology-and-correspondence-convolution]] supplies the convolution product $a*b=h_*\Delta_{X_j}^{!}(a\boxtimes b)$ with the refined oriented middle-diagonal operation on arbitrary closed supports, the corner degree $d_i+d_j-p$, and the normalized diagonal classes; no transversality of the fiber products is assumed.

[F2] Assume AC. [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] supplies in $D^b_{G,c}$ the adjunctions $f^*\dashv Rf_*$ and $Rf_!\dashv f^!$, support localization, the projection formula and trace, proper base change, the normalized dualizing object with $\omega_X^G|_X=\omega_X$ and $\omega_X^G\simeq k_X[2d]$ for smooth complex $d$-dimensional $X$, and proper $f$ with $Rf_!=Rf_*$.

[F3] Assume AC. [[lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus]] supplies that $X_\nu\to F_\nu$ is a complex algebraic vector bundle with smooth total space, that $\pi_\nu:X_\nu\to E$ is projective, that every middle-forgetting projection is proper, and that the oriented refined operations exist in every corner, with $d_\nu=\dim_{\mathbb C}X_\nu$; $B_\nu=F_\nu=\prod_i\operatorname{Flag}(V_i)$ is a product of smooth projective flag varieties. Its Statement also supplies that the preceding Ext and product theorems apply to the normalized $L_\nu$ in every corner; this supplies the Ext/BM identification used here.

[F4] Assume AC. [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] realizes the refined operation as cap product with the positive middle-diagonal Thom class, lowers Borel–Moore degree by twice the complex dimension, is compatible with ordered iterated diagonals, and for a complex vector bundle expresses zero-section self-intersection as cap product with its oriented Euler class.

[F5] [[thm-leray-hirsch-module-isomorphism]]: for a Serre fibration $F\to E\xrightarrow pB$ over a path-connected CW complex and finitely many homogeneous classes restricting to an $R$-basis on every fiber, $\Phi:\bigoplus_iH^{*-|e_i|}(B;R)\to H^*(E;R)$, $(a_i)\mapsto\sum_ip^*a_i\smile e_i$, is an $H^*(B;R)$-module isomorphism, for every commutative unital ring $R$.

[F6] [[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]]: for a numerable complex rank-$n$ bundle $E\to B$ with $n\ge2$ over a paracompact Hausdorff CW complex, the tautological Euler class restricts to a generator of $H^2$ of each projective fiber and $1,x,\dots,x^{n-1}$ is an integral cohomology basis of the fiber, with reductions a basis over every $\mathbb F_p$.

[F7] [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]: the Schubert strata give a finite CW structure on each finite Grassmannian $\operatorname{Gr}_n(\mathbb F^N)$, the standard inclusions are cellular, and every finite-dimensional subcomplex is contained in a finite stage.

[F8] [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]: for complex line bundles over a path-connected CW base, $c_1(\operatorname{Hom}(L,M))=c_1(M)-c_1(L)$ and $c_1(L^*)=-c_1(L)$; in the split-flag model this gives each arrow entry $\operatorname{Hom}(D_a,D_b)$ the weight $\chi_b-\chi_a$.

[F9] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]: for a numerable complex rank-$n$ bundle over a path-connected CW complex, $c_n(E)=e(E_{\mathbb R})$ in $H^{2n}(B;\mathbb Z)$ with the complex orientation.

[F10] [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]] supplies finite general linear Stiefel resolutions and their bounded Hom comparisons. For a product of $\mathrm{GL}_1$, these are products of nonzero vector spaces with quotients products of projective spaces. [[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]] supplies finite CW-type models for the quasi-projective approximation spaces and supports.

[A1] The Axiom of Choice is consumed exactly through [F1]–[F4], which declare it for their injective-resolution, duality and equivariant-descent constructions; the finite symmetric-group, Bruhat-order, row-echelon and Euler-product computations below are choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For $a:L_\eta\to L_\nu[n]$ and $f:L_\nu\to\omega_E^G[m]$, set $a\cdot f=f[n]\circ a$. Associativity of composition makes $\bigoplus_\nu\operatorname{Ext}_G(L_\nu,\omega_E^G)$ a left module for the opposite-composition product. Adjunction and dualizing transitivity [F2] give $\operatorname{Ext}_G^n(L_\nu,\omega_E^G)=H_{d_\nu-n}^{\mathrm{BM},G}(X_\nu;k)=H_G^{d_\nu+n}(X_\nu;k)$, giving the stated shift; the diagonal and Chern cap classes act by identity and cup product. Fiber scaling contracts the vector bundle $X_\nu$ equivariantly onto $F_\nu=G/B_\nu$. Here $B_\nu$ is the product of triangular stabilizers, and $B_\nu/T$ is its unitriangular group, homeomorphic to a complex affine space through its matrix entries. The Borel maps $EG/T\to EG/B_\nu$ have that contractible fiber, so pullback identifies $H_G(F_\nu;k)$ with $H_T(\mathrm{pt};k)$. This comparison can be made on the finite resolutions [F10], whose fiber cohomology is $k$ in degree zero: the pullback is an isomorphism by the stalkwise fiber computation and [F2]. For $T=(\mathbb C^*)^m$, the rank-one resolutions in [F10] have bases $(\mathbb{CP}^{N-1})^m$. Repeated [F5] and [F6] give the basis of products of tautological powers with each exponent less than $N$; all degrees stabilize as $N$ increases [F7, F10]. Thus the stable ring is $k[x_1,\ldots,x_m]$, with the flag quotient lines corresponding to the individual torus characters. This proves the polynomial model without asserting a polynomial extension of $H_G(\mathrm{pt};k)$. [F1, F2, F3, F5, F6, F7, F10, given]

2.1 Relative positions can be computed by simultaneous echelon reduction: for two full flags the integers $\dim(F^a\cap F'^b)$ determine a permutation matrix, its entry at $(a,b)$ being the second difference of these integers. Splitting the intersections successively chooses one line for each nonzero entry. Grading requires each such line to have the same color in both flags, exactly the condition $w\nu=\eta$. Adapted bases then show that all flag pairs with that matrix form one $G$-orbit. Their stabilizer $P$ consists of matrices triangular in both orders: its diagonal is $T$, and its permitted off-diagonal entries form a contractible unipotent radical; $P/T$ is an affine space. Over this orbit the stable-arrow condition is the associated vector bundle with fiber $U_F\cap U_{F'}$, since stability is a set of linear zero-entry conditions in each adapted basis. The projection of the orbit to the first flag has the affine echelon cell given by the off-diagonal entries allowed by the second order modulo those allowed by both. Thus the stratum is smooth, its equivariant cohomology is $H_P(\mathrm{pt};k)=H_T(\mathrm{pt};k)=k[x_1,\ldots,x_m]$ by the contractible-fiber argument of step 1.1, and its equivariant BM module is that ring shifted by twice the stratum's complex dimension. Its generator is its positive fundamental class, and the first flag's quotient Chern classes give the displayed generators. Each arrow entry has weight $\chi_b-\chi_a$ [F8], with its full multiplicity. [F1, F2, F3, F8, F10, step 1.1, construct]

3.1 The conditions $\dim(F^a\cap F'^b)\ge q$ are closed rank conditions on the flag pair (vanishing of minors of $F^a\to V/F'^b$). They give the Bruhat lower unions of the echelon permutation strata; pulling them back to the incidence space gives closed unions of its strata. Choose a linear extension of that finite order. The localization sequence [F2] for each successive closed union has even-degree quotient by step 2.1. Starting with the empty union, induction shows that odd groups vanish and each even-degree sequence is short exact. The closure class of the newly adjoined stratum restricts to its fundamental class. First-coordinate Chern multiplication lifts every polynomial multiple of that generator; these lifts split the sequence as modules over the first-coordinate ring. Consequently the closure classes form a free polynomial basis in each corner. Closure classes here are indexed by the relative position $w$ as well as the corner, even if several permutations have $w\nu=\eta$. [F1, F2, F4, step 2.1]

3.2 Fix a diagonal torus and refine each orbit by echelon cells of the first flag. A cell has a unique fixed coordinate flag and a section given by an ordered product of elementary unipotent matrices. Acting by that section trivializes the orbit's affine echelon fiber and the common stable-arrow vector bundle. Torus conjugation scales each echelon coordinate by a root character, and each arrow coordinate by $\chi_b-\chi_a$. All are nonzero: flag coordinates involve distinct lines of one color, and looplessness makes arrow coordinates join lines of distinct colors. This gives affine representation cells with one fixed point. Ordering first by the closed relative-position filtration and then by the closed echelon filtration of the first flag gives a closed filtration by these cells; the same construction applies to $X_\nu$. On each cell the equivariant BM group is a shift of $S_T=H_T(\mathrm{pt};k)$, and point pushforward multiplies its generator by the product of its nonzero weights, by [F4, F9]. Induction through the closed/open sequences therefore proves freeness over $S_T$, and proves that inverting all these weights makes fixed-point pushforward an isomorphism. The fixed locus has zero arrow coordinates and all coordinate flag pairs. Refined middle self-intersection gives $[p,q]*[q,t]=\mathrm{eu}(T_qX_{\mathrm{middle}})[p,t]$; other middle fixed points give disjoint supports. Every displayed Euler class is invertible in this localization. [F1, F2, F4, F8, F9, step 2.1, construct]

4.1 We first justify passage from $G$ to $T$. Put $R=H_G(\mathrm{pt};k)$ and $S_T=H_T(\mathrm{pt};k)$. For $Y=X_\nu$ or $Z_{\eta,\nu}$, the approximation of $EG\times_{B_\nu}Y\to EG\times_GY$ is a proper flag bundle with fiber $G/B_\nu$; replacing $B_\nu$ by $T$ does not change cohomology by its contractible quotient. On its projective-bundle tower the monomials in quotient Chern classes with successive exponents $0\le c_j<\beta_i-j+1$ form a fiber basis by [F5, F6]. Include the unit monomial. The maps defined by these global classes $\bigoplus_j k[-|e_j|]\to Rp_*k$ are isomorphisms on every stalk by proper base change, hence are isomorphisms. Applying the projection formula to the normalized dualizing complex proves the same decomposition for BM groups, not only constant-coefficient cohomology. Applying it also to $Y=\mathrm{pt}$ shows that $S_T$ is free over $R$ on this basis, and gives $H_T^{\mathrm{BM}}(Y)=S_T\otimes_R H_G^{\mathrm{BM}}(Y)$ with the normalized dimension shifts. These comparisons commute with convolution and its module action by [F2, F4]; in particular restriction is injective and the $T$ module is generated over $S_T$ by the $G$ module. Thus if $a\in\mathfrak A$ kills $P$, its restriction kills the entire $T$ module. After weight localization, expand it in the fixed-pair basis of step 3.2 and apply it to each fixed-point basis vector $[q]$. The result is $\sum_p c_{pq}\,\mathrm{eu}(T_qX_{\mathrm{middle}})[p]=0$, so all coefficients vanish. Freeness over $S_T$ makes localization injective, and injectivity of restriction then gives $a=0$. Finite CW-type models and stabilization for all these comparisons are [F10]. [F2, F4, F5, F6, F10, step 3.1, step 3.2]

4.2 Consider a reduced adjacent-transposition word for $w$. In ordinary full-flag coordinates, its elementary flag chains are a tower of projective-line bundles: at a step only the intermediate subspace between two fixed successive subspaces can vary. The open echelon chart has one parameter for each inversion of $w$; successive pivot elimination recovers those parameters uniquely from an endpoint pair in position $w$. This follows inductively when appending a length-increasing swap, which introduces a previously uncrossed pair of pivot lines. The chart is dense in the irreducible tower, so its proper endpoint image is the closure of the position-$w$ orbit. Consequently every chain, including the graded chains in our elementary supports, has endpoint position $\le w$, and an endpoint pair in position $w$ has a unique chain of this fixed reduced type. For a graded endpoint pair the recovered intermediate flags remain graded, since each pivot elimination only combines lines of the same color. To compute the top coefficient, use a split endpoint pair in this open stratum. Along a reduced chain each labeled pair crosses at most once: word length equals the number of inverted pairs, since an adjacent swap changes that number by one, and adjacent sorting realizes that lower bound. Thus, for any fixed arrow entry, its allowedness indicators $A,B,C\in\{0,1\}$ at three length-additive stages are monotone. They satisfy $\min(A,C)+B=\min(A,B)+\min(B,C)$, proving the equality of arrow-weight multisets in $(U_1\cap U_3)\oplus U_2$ and $(U_1\cap U_2)\oplus(U_2\cap U_3)$, separately for each of the $h_{ij}$ copies. For the flag coordinates, the unique-chain echelon chart cancels the intermediate flag tangent coordinates against the refined middle diagonal; its remaining coordinates are exactly those of the endpoint orbit. Taking positive tangent Euler products therefore gives $\mathrm{eu}(C_u)\mathrm{eu}(C_v)=\mathrm{eu}(C_{uv})\mathrm{eu}(X_{\mathrm{middle}})$ at the open fixed pair for length-additive stages. By the fixed-pair formula of step 3.2 the top coefficient is $1$ for standard classes. The generator normalizations multiply it only by signs, so the top coefficient of $\tau_we_\nu$ is $\pm1$. [F4, F8, step 2.1, step 3.2, construct]

5.1 The expansion of $\tau_we_\nu$ in the closure-class basis is supported in positions $\le w$ and has coefficient $\pm1$ at $w$ by step 4.2. The finite triangular matrix is invertible over the first-coordinate polynomial ring, so these products form a free polynomial basis. Expanding each polynomial coefficient in its unique dot-monomial basis gives precisely the displayed $k$-basis; no crossing relation is needed for this argument. Each basis element is a product of word idempotents, dots and elementary crossings, with $\tau_{\mathrm{id}}e_\nu=e_\nu$ for the empty crossing product, so these classes generate $\mathfrak A$. For $\beta=0$ there is one empty word, one point and one unit; the same argument has an empty list of variables and crossings. Only relative-position incidence strata were used. AC is inherited through [A1]. [A1, step 1.1, step 3.1, step 4.2] ∎
