---
id: thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis
kind: theorem
title: "Relative-position incidence strata give a faithful geometric PBW basis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 29
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
particular the dots and the elementary crossings generate $\mathfrak A$. Only relative-position
incidence strata are paved; nothing is asserted about arbitrary stable-flag fibers of
$\pi_\nu$.

## Facts & Assumptions

**Given:** the Axiom of Choice; a characteristic-zero field $k$; a finite loopless quiver
$\Gamma$, a dimension vector $\beta$ and a word $\nu$ with $m=\sum_i\beta_i$ as in
[[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]; the incidence
varieties $X_\nu,F_\nu,Z_{\eta,\nu}$, the objects $L_\nu=\pi_{\nu!}k[d_\nu]$, the algebra
$\mathfrak A$ with its opposite-composition product and corner degrees, and the module
$P=\bigoplus_\nu H_G^\bullet(X_\nu;k)[d_\nu]$.

[F1] Assume AC. [[def-equivariant-borel-moore-homology-and-correspondence-convolution]]
supplies the convolution product $a*b=h_*\Delta_{X_j}^{!}(a\boxtimes b)$ with the refined
oriented middle-diagonal operation on arbitrary closed supports, the corner degree
$d_i+d_j-p$, the normalized diagonal classes and the identification of the corner with
$\operatorname{Ext}_G(L_\eta,L_\nu)$ through the degree dictionary $d_\eta+d_\nu-n$; no
transversality of the fiber products is assumed.

[F2] Assume AC. [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]
supplies in $D^b_{G,c}$ the adjunctions $f^*\dashv Rf_*$ and $Rf_!\dashv f^!$, support
localization, the projection formula and trace, proper base change, the normalized dualizing
object with $\omega_X^G|_X=\omega_X$ and $\omega_X^G\simeq k_X[2d]$ for smooth complex
$d$-dimensional $X$, and proper $f$ with $Rf_!=Rf_*$.

[F3] Assume AC. [[lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus]]
supplies that $X_\nu\to F_\nu$ is a complex algebraic vector bundle with smooth total space,
that $\pi_\nu:X_\nu\to E$ is projective, that every middle-forgetting projection is proper,
and that the oriented refined operations exist in every corner, with
$d_\nu=\dim_{\mathbb C}X_\nu$; $B_\nu=F_\nu=\prod_i\operatorname{Flag}(V_i)$ is a product of
smooth projective flag varieties.

[F4] Assume AC. [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]]
realizes the refined operation as cap product with the positive middle-diagonal Thom class,
lowers Borel–Moore degree by the complex dimension, is compatible with ordered iterated
diagonals, and for a complex vector bundle expresses zero-section self-intersection as cap
product with its oriented Euler class.

[F5] [[thm-leray-hirsch-module-isomorphism]]: for a Serre fibration $F\to E\xrightarrow pB$
over a path-connected CW complex and finitely many homogeneous classes restricting to an
$R$-basis on every fiber, $\Phi:\bigoplus_iH^{*-|e_i|}(B;R)\to H^*(E;R)$,
$(a_i)\mapsto\sum_ip^*a_i\smile e_i$, is an $H^*(B;R)$-module isomorphism, for every
commutative unital ring $R$.

[F6] [[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]]:
for a numerable complex rank-$n$ bundle $E\to B$ with $n\ge2$ over a paracompact Hausdorff CW
complex, the tautological Euler class restricts to a generator of $H^2$ of each projective
fiber and $1,x,\dots,x^{n-1}$ is an integral cohomology basis of the fiber, with reductions a
basis over every $\mathbb F_p$.

[F7] [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]: the Schubert strata give
a finite CW structure on each finite Grassmannian $\operatorname{Gr}_n(\mathbb F^N)$, the
standard inclusions are cellular, and every finite-dimensional subcomplex is contained in a
finite stage.

[F8] [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]: for complex line bundles
over a path-connected CW base, $c_1(\operatorname{Hom}(L,M))=c_1(M)-c_1(L)$ and
$c_1(L^*)=-c_1(L)$; in the split-flag model this gives each arrow entry
$\operatorname{Hom}(D_a,D_b)$ the weight $\chi_b-\chi_a$.

[F9] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]: for a numerable
complex rank-$n$ bundle over a path-connected CW complex, $c_n(E)=e(E_{\mathbb R})$ in
$H^{2n}(B;\mathbb Z)$ with the complex orientation.

[A1] The Axiom of Choice is consumed exactly through [F1]–[F4], which declare it for their
injective-resolution, duality and equivariant-descent constructions; the finite symmetric-group,
Bruhat-order, row-echelon and Euler-product computations below are choice-free
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Composition of morphisms $L_\eta\to L_\nu[n]\to\omega_E^G[m]$, read as $f[n]\circ a$, makes $P=\bigoplus_\nu\operatorname{Ext}_G(L_\nu,\omega_E^G)$ a left module over $\mathfrak A$ with the product of [F1]: $e_\nu$ acts as the identity of the summand, the dots act by cup product, and the action is associative because it is composition. The adjunction $\pi_{\nu!}\dashv\pi_\nu^!$ and dualizing transitivity of [F2] identify $\operatorname{Ext}_G^n(L_\nu,\omega_E^G)\cong H^{\mathrm{BM},G}_{d_\nu-n}(X_\nu;k)$, which on the smooth pure $d_\nu$-dimensional $X_\nu$ with the orientation $\omega_{X_\nu}^G\simeq k[2d_\nu]$ of [F2] is $H_G^{d_\nu+n}(X_\nu;k)$; this is the shifted summand $P_\nu=H_G^\bullet(X_\nu;k)[d_\nu]$ with unit in degree $-d_\nu$. The bundle projection of [F3] retracts $X_\nu$ onto $F_\nu$, so $H_G^\bullet(X_\nu;k)=H_G^\bullet(F_\nu;k)$; the flag bundle $F_\nu$ is a tower of projective bundles over a point, and applying [F5] at each stage to the finite CW approximations of [F7] with the fiber basis of [F6] identifies $H_G^\bullet(F_\nu;k)=H_G^\bullet(\mathrm{pt};k)[x_1,\dots,x_m]$ with the classes $x_r=c_1^G(F^r/F^{r-1})$ as polynomial generators, while $H_G^\bullet(\mathrm{pt};k)$ is the polynomial ring in the Chern classes of the tautological bundles of the groups $\mathrm{GL}(V_i)$. Consequently $H_G^\bullet(X_\nu;k)=k[x_1,\dots,x_m]$ and each $P_\nu$ is a free $k[x_1,\dots,x_m]$-module of rank one, generated by its unit. [F1, F2, F3, F5, F6, F7, given]

1.2 Fix $\nu$ and $w\in S_m$, and let $Z^\circ_{w,\nu}\subset Z_{w\nu,\nu}$ be the locus of pairs of flags in relative position exactly $w$, with the second flag of color word $\nu$; it is a single $G$-orbit bundle: over a split flag pair the stabilizer is $P=B\cap wB'w^{-1}$, which has a maximal torus and a contractible unipotent radical, the projection to the first flag is an affine Schubert-cell fibration, and the incidence condition cuts out the associated bundle with fiber the affine space $U_F\cap U_{F'}$ of common stable arrows. Hence $H_G^\bullet(Z^\circ_{w,\nu};k)=H_P^\bullet(\mathrm{pt};k)=k[x_1,\dots,x_m]$ is concentrated in even degrees, and its equivariant Borel–Moore module is a shift of $k[x_1,\dots,x_m]$ by $2\dim_{\mathbb C}Z^\circ_{w,\nu}$, hence is concentrated in even Borel–Moore degrees. The strata for varying $w$ exhaust $Z_{\eta,\nu}$ whenever $w\nu=\eta$ and are empty otherwise, and the split-flag computation matches the arrow weights $\chi_b-\chi_a$ of [F8]; this is the internal Gaussian-elimination and row-echelon argument, and the published finite-field relative-position theorem is not used. [F1, F3, F8, given]

2.1 Order the relative positions by a linear extension of Bruhat order; then the successive unions of closures $Z_{\le w,\nu}$ are closed and $G$-stable, and each successor is obtained by adjoining one stratum. The support-localization triangle of [F2] gives, for a closed $G$-stable subvariety with open complement, the long exact Borel–Moore sequence in the equivariant category; by step 1.2 all its terms are concentrated in even degrees, so the sequence degenerates into short exact sequences in each even degree and induces an injection of the preceding closed union. The fundamental class of the closure of each stratum restricts on that stratum to its fundamental class and generates its rank-one polynomial module, and multiplication by the first-coordinate polynomial classes $x_1,\dots,x_m$ provides lifts; induction on the finite linear extension therefore exhibits the closure classes as a free $k[x_1,\dots,x_m]$-basis of the Borel–Moore module of $Z_{\le w,\nu}$, one basis element for each stratum, with the module structure induced by [F1]. In particular each corner $\mathfrak A_{\eta\nu}$ is free over $k[x_1,\dots,x_m]$ with basis the classes $[C_{w\nu,\nu}]$ for the finitely many $w$ with $w\nu=\eta$. [F1, F2, F4, step 1.2]

2.2 Refine the orbit decomposition by the torus-stable Schubert cells of the first flag: the cells are affine spaces with one fixed point each, the orbits and arrow bundles are equivariantly trivial over them, and every tangent weight is a nonzero difference of distinct line characters, because the quiver is loopless and consequently no arrow weight $\chi_b-\chi_a$ with $a\ne b$ vanishes ([F8]); the same holds for the flag tangent directions. Each incidence piece is therefore a $T$-stable affine cell with one fixed point, and the closed/open sequences of [F2] together with the Thom and Euler self-intersection calculus of [F4] show that $H_T^{\mathrm{BM}}(Z_{\eta\nu};k)$ and $H_T^{\mathrm{BM}}(X_\nu;k)$ are free over the torus polynomial ring $S_T$, and that inverting the finitely many nonzero weights makes the fixed-point pushforward an isomorphism cell by cell. In that localization the classes supported at fixed pairs multiply as matrix units $[p,q]*[q,t]=\mathrm{eu}(T_qX_\nu)\,[p,t]$, because the product is supported on the intersection of the supports, distinct fixed points support disjoint classes, and the middle self-intersection is cap product with the Euler class of the tangent space at $q$, which is a unit in $S_T$ after inversion. [F1, F2, F4, F8, F9, step 1.2]

3.1 Let $a\in\mathfrak A$ act as zero on $P$. Localizing at the nonzero weights is exact and injective on the free $S$-modules $\mathfrak A$ and $P$, so $a$ acts as zero on the localized module; expanding $a$ in the localized basis of fixed-pair classes from step 2.2 and evaluating on the fixed-point basis $[q]$ of the localized $\bigoplus_\nu H_T^{\mathrm{BM}}(X_\nu;k)$ gives, for every $q$, $\sum_pc_{pq}\,\mathrm{eu}(T_qX_\nu)[p]=0$ with the Euler classes units, so every $c_{pq}=0$ and $a$ becomes zero after localization, hence $a=0$ by injectivity. This proves faithfulness of the $T$-equivariant action, and freeness descends it to the unlocalized action. Finally the restriction map $H_G^{\mathrm{BM}}\to H_T^{\mathrm{BM}}$ is injective: the flag bundle $F_\nu$ has an even Schubert-cell filtration by [F7], its Leray–Hirsch freeness over $H_G^\bullet(\mathrm{pt};k)$ is [F5] applied at each stage of the projective-bundle tower on the finite CW approximations, with the tautological fiber generator of [F6], and the unit summand gives the injection. Hence the $G$-equivariant action of $\mathfrak A$ on $P=\bigoplus_\nu H_G^\bullet(X_\nu;k)[d_\nu]$ is faithful. [F2, F4, F5, F6, F7, step 2.1, step 2.2]

3.2 For a reduced word $w=s_{r_1}\cdots s_{r_l}$ the convolution of the standard elementary classes is supported in relative positions $\le w$, because a chain of intermediate flags with adjacent positions in the closures of the elementary strata has endpoint position bounded by the product in Bruhat order. Its restriction to the open position-$w$ stratum is a standard fundamental class whose coefficient is computed at a $T$-fixed split flag pair: for a length-additive factorization $uv$ the inversion sets satisfy $\operatorname{Inv}(uv)=\operatorname{Inv}(u)\sqcup u\operatorname{Inv}(v)$, so the same-color flag tangent weights occur once on each side of $\mathrm{eu}(C_u)\mathrm{eu}(C_v)=\mathrm{eu}(C_{uv})\mathrm{eu}(X_{\mathrm{middle}})$; for the arrow part, allowedness in a common stable-arrow space is the indicator that a weight's source follows its target in both orders (step 1.2), and the same length-additive identity shows that the multiset of arrow weights in $(U_1\cap U_3)\oplus U_2$ equals that in $(U_1\cap U_2)\oplus(U_2\cap U_3)$, with every weight repeated its full multiplicity $h_{ij}$. Taking Euler products of the dualized weight multisets gives $\mathrm{eu}(C_u)\mathrm{eu}(C_v)=\mathrm{eu}(C_{uv})\mathrm{eu}(X_{\mathrm{middle}})$, so the fixed-point coefficient of the top stratum of the reduced product is $1$ up to the explicitly normalized generator signs $\sigma,\tau$, which are units $\pm1$. Hence the top coefficient is always a unit of $\mathbb Z$. [F4, F8, step 2.2]

4.1 By step 3.2 the expansion of the normalized product $\tau_we_\nu$ in the closure-class basis of step 2.1 is supported on positions $\le w$ with coefficient $\pm1$ at $w$; the change-of-basis matrix from the closure classes to the $\tau_we_\nu$ is therefore triangular with unit diagonal after ordering by a linear extension of Bruhat order. Induction on that finite order inverts the matrix and shows that the $\tau_we_\nu$ form a basis of $\mathfrak A$ over $k[x_1,\dots,x_m]$; multiplying by the dot monomials and using the dot-slide, mixed and square relations gives the equivalent $k$-basis $\{x_1^{c_1}\cdots x_m^{c_m}\tau_we_\nu:c_r\ge0\}$, since distinct triples $(c,w,\nu)$ give distinct basis elements. Consequently the dots and the elementary crossings generate $\mathfrak A$. Only relative-position incidence strata entered steps 1.2–3.2, so nothing is asserted about arbitrary stable-flag fibers of $\pi_\nu$, and the Axiom of Choice entered only through [A1]. [A1, step 2.1, step 3.2] ∎
