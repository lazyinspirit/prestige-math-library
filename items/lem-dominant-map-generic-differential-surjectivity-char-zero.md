---
id: lem-dominant-map-generic-differential-surjectivity-char-zero
kind: lemma
title: "A dominant map has a surjective differential on a dense source open"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-change-of-rings-for-extension-of-scalars
  - cor-every-spanning-set-contains-a-basis
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-principal-localisation-spectrum-is-distinguished-open
  - cor-transcendence-degree-tower-additivity
  - def-axiom-of-choice
  - def-classical-affine-coordinate-ring
  - def-classical-dominant-morphism-and-rational-map
  - def-dimension
  - def-dimension-classical-variety
  - def-field-of-fractions
  - def-finitely-generated-field-extension
  - def-localisation-of-a-module
  - def-morphism-affine-schemes-from-ring-map
  - def-singular-and-regular-loci-variety
  - def-zariski-tangent-space-point
  - lem-ag-differentials-localization-base-change
  - lem-ag-differentials-transitivity
  - lem-ag-polynomial-quotient-differentials
  - lem-classical-variety-noetherian-components
  - lem-general-variety-function-field-charts
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-sheaf-differentials-affine-compatibility
  - lem-spectrum-map-stalk-homomorphisms-local
  - lem-tangent-space-functoriality-classical
  - thm-ag-field-differentials-separable-rank
  - thm-ag-separating-transcendence-basis-perfect-field
  - thm-classical-affine-morphisms-coordinate-ring-antiequivalence
  - thm-classical-affine-variety-prime-coordinate-ring
  - thm-classical-varieties-equivalent-integral-separated-finite-type-schemes
  - thm-cotangent-space-maximal-ideal-quotient
  - thm-dimension-equals-transcendence-degree
  - thm-localisation-of-modules-is-tensor-product
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
  - thm-rank-nullity
  - thm-right-exactness-of-tensor-products
  - thm-stalk-structure-sheaf-prime-localization
  - thm-transpose-kernel-range-and-rank
  - thm-universal-property-of-a-polynomial-ring-on-a-family
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, MATH 216 (2005-06), Classes 51-52, §3.1, Proposition 3.1 (generic smoothness in the source) and its proof"
      url: https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be an algebraically
closed field of characteristic $0$, let $X$ and $Y$ be irreducible classical
varieties over $k$, and let $f\colon X\to Y$ be a dominant morphism
([[def-classical-dominant-morphism-and-rational-map]]). Regard $X$ and $Y$ as
integral finite-type $k$-schemes under
[[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]],
and let $X_{\mathrm{reg}}$, $Y_{\mathrm{reg}}$ be their regular loci
([[def-singular-and-regular-loci-variety]]). Then there exist nonempty open
subsets $U\subseteq X_{\mathrm{reg}}$ and $V\subseteq Y_{\mathrm{reg}}$ with
$f(U)\subseteq V$ such that for every closed point $x\in U$, with $y=f(x)$, the
differential
$$d_xf\colon T_xX\longrightarrow T_yY$$
of [[lem-tangent-space-functoriality-classical]] is surjective. In the
construction $V$ is taken to be $Y_{\mathrm{reg}}$, and $U$ is of the form
$$U=X_{\mathrm{reg}}\cap f^{-1}(Y_{\mathrm{reg}})\cap D(H)$$
for a nonempty affine chart $\operatorname{Spec}S\subseteq X$ lying inside an
affine chart $\operatorname{Spec}R\subseteq Y$ and a nonzero element
$H\in S$; thus $U$ is a nonempty open subset of $X_{\mathrm{reg}}$, dense in
$X$. No smoothness of $X$ or of $Y$ is assumed on the complements of the two
regular loci.

## Facts & Assumptions
**Given:** An algebraically closed field $k$ of characteristic $0$, irreducible classical varieties $X,Y$ over $k$, a dominant morphism $f\colon X\to Y$, and the Axiom of Choice.

[F1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function.

[F2] [[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]]: over the algebraically closed field $k$, under AC the closed-point construction and its inverse give an equivalence between irreducible classical $k$-varieties and integral finite-type $k$-schemes satisfying the affine-overlap separation condition, each original point being identified with its singleton, so classical points correspond to closed points.

[F3] [[def-classical-dominant-morphism-and-rational-map]]: a morphism $\phi\colon U\to Y$ from a nonempty open subset of an affine variety to an affine variety is dominant when the closure of $\phi(U)$ is $Y$; for morphisms of varieties this is density of the image.

[F4] [[lem-classical-variety-noetherian-components]]: every classical variety is Noetherian and has finitely many irreducible components; every open or closed subvariety has a finite affine cover.

[F5] [[def-classical-affine-coordinate-ring]]: for an affine algebraic set $W\subseteq k^n$ the coordinate ring is $k[W]=k[x_1,\dots,x_n]/I(W)$, it is reduced, and the finitely many coordinate classes generate it as a $k$-algebra.

[F6] [[thm-classical-affine-variety-prime-coordinate-ring]]: under AC an affine algebraic set $W$ is a classical affine variety if and only if $k[W]$ is a nonzero integral domain.

[F7] [[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]]: under AC, pullback gives a natural bijection $\operatorname{Mor}_k(W,W')\cong\operatorname{Hom}_{k\text{-alg}}(k[W'],k[W])$ for affine algebraic sets, reversing composition and preserving identities.

[F8] [[lem-irreducibility-criteria-and-open-subspaces]]: a space is irreducible if and only if it is nonempty and every two nonempty open subsets meet, if and only if it is nonempty and every nonempty open subset is dense; a nonempty open subspace of an irreducible space is irreducible.

[F9] [[lem-general-variety-function-field-charts]]: under AC, for irreducible classical $X$ the fraction fields of all nonempty affine charts identify canonically with $k(X)$, and a dominant morphism $f\colon X\to Y$ between irreducible classical varieties induces an injection $f^*\colon k(Y)\hookrightarrow k(X)$.

[F10] [[def-finitely-generated-field-extension]]: $L/K$ is finitely generated when $L=K(a_1,\dots,a_r)$ for a finite list.

[F11] [[thm-dimension-equals-transcendence-degree]]: under AC, if $X$ is an irreducible classical variety then $\dim X=\operatorname{trdeg}_kk(X)<\infty$.

[F12] [[cor-transcendence-degree-tower-additivity]]: for a tower $k\subseteq K\subseteq L$ with finite transcendence degrees, $\operatorname{trdeg}_kL=\operatorname{trdeg}_kK+\operatorname{trdeg}_KL$.

[F13] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]: every field of characteristic zero is perfect.

[F14] [[thm-ag-separating-transcendence-basis-perfect-field]]: a finitely generated field extension of a perfect field has a separating transcendence basis.

[F15] [[thm-ag-field-differentials-separable-rank]]: if $K\subseteq L$ is a finitely generated field extension separably generated over $K$ by $t_1,\dots,t_r$, then $\mathrm{d}t_1,\dots,\mathrm{d}t_r$ are an $L$-basis of $\Omega_{L/K}$.

[F16] [[lem-ag-differentials-localization-base-change]]: for a ring map $A\to B$: base change gives $B'\otimes_B\Omega_{B/A}\cong\Omega_{B'/A'}$; localization gives $U^{-1}\Omega_{B/A}\cong\Omega_{U^{-1}B/V^{-1}A}$; and a ring map $B\to C$ carries a canonical $C$-linear functoriality map $C\otimes_B\Omega_{B/A}\to\Omega_{C/A}$, $c\otimes\mathrm{d}b\mapsto c\,\mathrm{d}(\text{image of }b)$.

[F17] [[thm-localisation-of-modules-is-tensor-product]]: for a multiplicative subset $S\subseteq R$ the map $S^{-1}R\otimes_RM\to S^{-1}M$, $(a/s)\otimes m\mapsto am/s$, is an isomorphism.

[F18] [[def-localisation-of-a-module]]: elements of $S^{-1}M$ are fractions $m/s$, and $m/1=0$ exactly when $um=0$ for some $u\in S$.

[F19] [[def-field-of-fractions]]: for an integral domain $D$, its field of fractions is $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$, with elements $a/b$, $b\ne0$.

[F20] [[lem-ag-polynomial-quotient-differentials]]: for $P=A[x_1,\dots,x_n]$ and $B=P/I$, the module $\Omega_{P/A}$ is free with basis $\mathrm{d}x_1,\dots,\mathrm{d}x_n$, and the sequence $I/I^2\to B\otimes_P\Omega_{P/A}\to\Omega_{B/A}\to0$ is exact.

[F21] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: a ring map $R\to S$ and elements $s_i\in S$ extend uniquely to a ring map $R[x_i]\to S$ with $x_i\mapsto s_i$.

[F22] [[thm-right-exactness-of-tensor-products]]: tensoring a right-exact sequence $A\to B\to C\to0$ by any module preserves right exactness.

[F23] [[cor-every-spanning-set-contains-a-basis]]: under AC, every subset of a vector space that spans it contains a basis.

[F24] [[def-dimension]]: for a finite-dimensional vector space $V$ over a field, $\dim_FV$ is the number of elements of a basis.

[F25] [[cor-change-of-rings-for-extension-of-scalars]]: for $R\to S$, a right $S$-module $N$ and a left $R$-module $M$, there is a natural isomorphism $N\otimes_RM\cong N\otimes_S(S\otimes_RM)$.

[F26] [[thm-cotangent-space-maximal-ideal-quotient]]: at a $k$-rational point $x$ of a $k$-scheme, the map $\mathfrak m/\mathfrak m^2\to\Omega_{X/k}\otimes_{\mathcal O_{X,x}}\kappa(x)$, $[a]\mapsto\mathrm{d}a\otimes1$, is an isomorphism.

[F27] [[lem-tangent-space-functoriality-classical]]: at $k$-rational points the local map induces $\bar f_x^\sharp\colon C_yY\to C_xX$, whose dual is $d_xf=(\bar f_x^\sharp)^*\colon T_xX\to T_yY$.

[F28] [[lem-ag-differentials-transitivity]]: for ring maps $A\to B\to C$ the sequence $C\otimes_B\Omega_{B/A}\to\Omega_{C/A}\to\Omega_{C/B}\to0$ is exact.

[F29] [[def-morphism-affine-schemes-from-ring-map]]: a ring map $\varphi\colon A\to B$ gives the contraction map $\operatorname{Spec}B\to\operatorname{Spec}A$, $\mathfrak q\mapsto \varphi^{-1}\mathfrak q$, whose sheaf map on $D(f)$ is the localization map $A_f\to B_{\varphi(f)}$.

[F30] [[lem-spectrum-map-stalk-homomorphisms-local]]: the induced stalk homomorphism $A_{\mathfrak p}\to B_{\mathfrak q}$ at $\mathfrak p=\varphi^{-1}\mathfrak q$ is local.

[F31] [[thm-stalk-structure-sheaf-prime-localization]]: for $\mathfrak p\in\operatorname{Spec}A$ there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

[F32] [[lem-sheaf-differentials-affine-compatibility]]: for $\operatorname{Spec}B\to\operatorname{Spec}A$ one has $\Gamma(\operatorname{Spec}B,\Omega)=\Omega_{B/A}$ and $\Omega(D(g))\cong\Omega_{B_g/A}$, compatibly with the universal derivations and localization.

[F33] [[thm-transpose-kernel-range-and-rank]]: under AC, for a linear map $T\colon V\to W$ of finite-dimensional spaces, $\operatorname{rank}T^*=\operatorname{rank}T$.

[F34] [[thm-rank-nullity]]: for a linear map $T$ with $V$ finite-dimensional, $\dim_FV=\operatorname{nullity}T+\operatorname{rank}T$.

[F35] [[def-singular-and-regular-loci-variety]]: the regular locus is the set of points with regular local ring; under AC, for a reduced classical finite-type space over an algebraically closed field and a closed point $x$, $x\in X_{\mathrm{reg}}$ if and only if $\dim_{\kappa(x)}T_xX=\dim_xX$.

[F36] [[thm-nonempty-regular-locus-reduced-variety-perfect-field]]: under AC, for a perfect field $k$ and a reduced finite-type $k$-scheme $X$, the regular locus is open, meets every irreducible component in a dense open subset of it, and is nonempty when $X\ne\varnothing$.

[F37] [[def-dimension-classical-variety]]: for a classical variety with irreducible components $X_i$ and a closed point $x$, $\dim_xX=\max_{x\in X_i}\dim X_i$, and $\dim X$ is the chain dimension.

[F38] [[cor-principal-localisation-spectrum-is-distinguished-open]]: the localization map $R\to R_f$ induces a homeomorphism from $\operatorname{Spec}R_f$ onto the distinguished open subset $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$.

[F39] [[def-zariski-tangent-space-point]]: for a locally finite-type $k$-scheme the intrinsic tangent space at any point is finite-dimensional over the residue field, and at a $k$-rational point the intrinsic and relative tangent spaces agree.



## Proof

**Proof technique:** direct.

1.1 The variety $Y$ is nonempty and irreducible, so it has a nonempty affine chart $Y_0=\operatorname{Spec}R$ [F4], and by dominance [F3] the open subset $f^{-1}(Y_0)\subseteq X$ is nonempty; it therefore contains a nonempty affine chart $X_0=\operatorname{Spec}S\subseteq X$ [F4]. The rings $R=k[Y_0]$ and $S=k[X_0]$ are finitely generated $k$-algebras given by finitely many coordinate classes [F5], and because $Y_0$ and $X_0$ are nonempty open subsets of irreducible spaces they are themselves irreducible [F8], so $R$ and $S$ are nonzero integral domains [F6]. The restriction $f|_{X_0}\colon X_0\to Y_0$ is a morphism of affine varieties, so its pullback is a $k$-algebra homomorphism $\varphi\colon R\to S$ [F7]. The fraction fields of the charts identify canonically with $k(Y)$ and $k(X)$, and dominance makes $f^*\colon k(Y)\hookrightarrow k(X)$ injective [F9]; carrying the affine pullback through these identifications exhibits the map $\operatorname{Frac}R\to\operatorname{Frac}S$ induced by $\varphi$ as $f^*$, so $\varphi$ is injective. Write $K:=\operatorname{Frac}R=k(Y)$ and $L:=\operatorname{Frac}S=k(X)$. [F2, F3, F4, F5, F6, F7, F8, F9, given, algebra]

2.1 Write the coordinate generators of $S$ as $s_1,\dots,s_m$, so that $S=k[s_1,\dots,s_m]$ and $L=k(s_1,\dots,s_m)$ is finitely generated over $k$ [F5, F10]; in the same way $K=k(r_1,\dots,r_n)$ for the coordinate generators of $R$ [F5, F10]. Since $\varphi$ is injective, $K\subseteq L$, so $L/K$ is finitely generated [F10]. By [F11], $\dim Y=\operatorname{trdeg}_kK$ and $\dim X=\operatorname{trdeg}_kL$ are finite, so the tower $k\subseteq K\subseteq L$ has, by [F12], $$r:=\operatorname{trdeg}_KL=\operatorname{trdeg}_kL-\operatorname{trdeg}_kK =\dim X-\dim Y\ge0.$$ Moreover, since $k\subseteq R$ and the $s_i$ generate $S$ as a $k$-algebra, they generate $S$ as an $R$-algebra: the $R$-subalgebra they generate is a $k$-subalgebra containing every $s_i$, hence equals $S$ [F5]. [F5, F10, F11, F12, step 1.1, given, algebra]

3.1 The field $K$ contains $k$ and so has characteristic $0$, hence is perfect [F13]. By [F14] the finitely generated extension $L/K$ has a separating transcendence basis $t_1,\dots,t_r$; a separating transcendence basis is in particular a transcendence basis, so its length is $\operatorname{trdeg}_KL=r$ as computed in step 2.1. By [F15] the differentials $\mathrm{d}t_1,\dots,\mathrm{d}t_r$ form an $L$-basis of $\Omega_{L/K}$. In particular $\dim_L\Omega_{L/K}=r$; for $r=0$ the empty list is the basis and $\Omega_{L/K}=0$. [F13, F14, F15, step 2.1, given, algebra]

3.2 By step 2.1 the elements $s_1,\dots,s_m$ generate $S$ as an $R$-algebra, so by the universal property [F21] there is a surjective $R$-algebra map $R[x_1,\dots,x_m]\to S$ with $x_i\mapsto s_i$, whose kernel we call $I$. By [F20], $\Omega_{R[x_1,\dots,x_m]/R}$ is free with basis $\mathrm{d}x_1,\dots,\mathrm{d}x_m$, and the sequence $I/I^2\to S\otimes_{R[x_1,\dots,x_m]}\Omega_{R[x_1,\dots,x_m]/R} \to\Omega_{S/R}\to0$ is exact. Therefore $\Omega_{S/R}$ is a quotient of the free $S$-module with basis $\mathrm{d}x_1,\dots,\mathrm{d}x_m$, and in particular it is generated as an $S$-module by the $m$ elements $g_1,\dots,g_m$, where $g_i$ is the image of $\mathrm{d}x_i$. [F20, F21, step 2.1, given, algebra]

4.1 Apply the localization clause of [F16] to the injective ring map $\varphi\colon R\to S$ with $U=S\setminus\{0\}$ and $V=R\setminus\{0\}$: the image of $V$ in $S$ is contained in $U$ because $\varphi$ is injective, and $V^{-1}R=K$, $U^{-1}S=L$ are the fraction fields [F19]. This gives an isomorphism $U^{-1}\Omega_{S/R}\cong\Omega_{L/K}$, and [F17] identifies $U^{-1}\Omega_{S/R}$ with $L\otimes_S\Omega_{S/R}$. Hence $$\Omega_{S/R}\otimes_SL\cong\Omega_{L/K}$$ and, by step 3.1, the $L$-vector space $\Omega_{S/R}\otimes_SL$ has dimension $r$. [F16, F17, F19, step 3.1, given, algebra]

5.1 For each $i$, the element $\mathrm{d}t_i$ of $\Omega_{S/R}\otimes_SL=U^{-1}\Omega_{S/R}$ from step 4.1 has the form $\omega_i/h_i$ with $\omega_i\in\Omega_{S/R}$ and $0\ne h_i\in S$ [F18]. If $\lambda\colon\Omega_{S/R}\to\Omega_{S/R}\otimes_SL$ is the localization map, then $\lambda(\omega_i)=h_i\,\mathrm{d}t_i$, which is nonzero because $h_i\ne0$ in the field $L$ and $\mathrm{d}t_i$ is part of an $L$-basis (step 3.1). The two $L$-spans agree, $$\operatorname{span}_L(\lambda(\omega_1),\dots,\lambda(\omega_r)) =\operatorname{span}_L(\mathrm{d}t_1,\dots,\mathrm{d}t_r) =\Omega_{S/R}\otimes_SL,$$ since each $\lambda(\omega_i)=h_i\mathrm{d}t_i$ lies in the span of the $\mathrm{d}t_i$ and each $\mathrm{d}t_i=h_i^{-1}\lambda(\omega_i)$ lies in the span of the $\lambda(\omega_i)$. [F18, step 3.1, step 4.1, given, algebra]

6.1 Each generator $g_j$ of step 3.2 satisfies $\lambda(g_j)\in\operatorname{span}_L(\lambda(\omega_1),\dots, \lambda(\omega_r))$ by step 5.1, say $\lambda(g_j)=\sum_{i=1}^rc_{ji}\lambda(\omega_i)$ with $c_{ji}\in L$. Since $L=\operatorname{Frac}S=(S\setminus\{0\})^{-1}S$ [F19], the finitely many coefficients have a common denominator: $c_{ji}=a_{ji}/h$ with $a_{ji}\in S$ and $0\ne h\in S$. Then $\lambda\bigl(hg_j-\sum_ia_{ji}\omega_i\bigr)=0$, so by the kernel criterion for localizations [F18] there is $0\ne u_j\in S$ with $u_j\bigl(hg_j-\sum_ia_{ji}\omega_i\bigr)=0$ in $\Omega_{S/R}$. Put $H:=h\prod_{j=1}^mu_j\ne0$. In the localization $\Omega_{S/R}[1/H]$ the element $u_jh$ is invertible, and the relations rewrite as $g_j=\sum_i\bigl(u_ja_{ji}/(u_jh)\bigr)\omega_i$ with coefficients in $S_H$. Hence $\Omega_{S/R}[1/H]$ is generated over $S_H$ by $\omega_1,\dots,\omega_r$. (For $r=0$, step 5.1 gives $\lambda(g_j)\in\operatorname{span}_L\varnothing=0$, so $u_jg_j=0$ for suitable $0\ne u_j\in S$ and $\Omega_{S/R}[1/H]=0$ with $H:=\prod_ju_j$, generated by the empty family.) [F18, F19, step 3.2, step 5.1, given, algebra]

7.1 Let $\mathfrak p\in\operatorname{Spec}S$ satisfy $H\notin\mathfrak p$. Applying [F25] with $R\to S$ the localization $S\to S_H$, $N=\kappa(\mathfrak p)$ and $M=\Omega_{S/R}$, and identifying $S_H\otimes_S\Omega_{S/R}$ with $\Omega_{S/R}[1/H]$ via [F17], shows $$\Omega_{S/R}\otimes_S\kappa(\mathfrak p) \cong\kappa(\mathfrak p)\otimes_{S_H}\Omega_{S/R}[1/H].$$ The right-hand side is generated as a $\kappa(\mathfrak p)$-vector space by the images of $\omega_1,\dots,\omega_r$, because $\Omega_{S/R}[1/H]$ is generated over $S_H$ by these $r$ elements (step 6.1) and $\kappa(\mathfrak p) \otimes_{S_H}-$ is right exact [F22]. A vector space spanned by $r$ elements contains a basis inside that spanning set [F23] and therefore has dimension at most $r$ [F24]. Thus $$\dim_{\kappa(\mathfrak p)}\bigl(\Omega_{S/R}\otimes_S\kappa(\mathfrak p) \bigr)\le r.$$ [F22, F23, F24, F25, step 6.1, given, algebra]

7.2 Let $X_{\mathrm{reg}}$ and $Y_{\mathrm{reg}}$ be the regular loci of the schemes $X$ and $Y$ [F35]. The field $k$ is perfect [F13], and $X$, $Y$ are reduced finite-type $k$-schemes via [F2]; hence by [F36] the two regular loci are open, and each meets every irreducible component of its scheme in a dense open subset. Since $X$ and $Y$ are irreducible, $X_{\mathrm{reg}}$ and $Y_{\mathrm{reg}}$ are nonempty dense open subsets of $X$ and $Y$. The preimage $f^{-1}(Y_{\mathrm{reg}})\subseteq X$ is nonempty, because the dense image $f(X)$ meets the nonempty open set $Y_{\mathrm{reg}}$ [F3, F8], and it is open. The principal open $D(H)=\{\mathfrak p\in\operatorname{Spec}S:H\notin \mathfrak p\}$ is an open subset of the chart $X_0$ [F38] and it is nonempty because $H\ne0$ (step 6.1), so $D(H)$ is a nonempty open subset of $X$. Define $$U:=D(H)\cap X_{\mathrm{reg}}\cap f^{-1}(Y_{\mathrm{reg}})\subseteq X, \qquad V:=Y_{\mathrm{reg}}\subseteq Y.$$ The three sets displayed are nonempty open subsets of the irreducible space $X$ [F8], so $U$ is a nonempty open subset of $X$ with $U\subseteq X_{\mathrm{reg}}$ and $f(U)\subseteq V$. [F2, F3, F8, F13, F36, F38, step 6.1, given, algebra]

8.1 Fix a closed point $x\in U$ and put $y=f(x)\in V=Y_{\mathrm{reg}}$; both are $k$-rational points of the respective schemes [F2]. Let $\mathfrak m_x\subseteq S$ and $\mathfrak m_y\subseteq R$ be the corresponding maximal ideals. The local rings are $\mathcal O_{Y,y}=R_{\mathfrak m_y}$ and $\mathcal O_{X,x}=S_{\mathfrak m_x}$ [F31], and the induced map of local rings is the localization of $\varphi$ at these primes, which sends $a$ to $\varphi(a)$ [F29] and is local [F30]; hence the cotangent map $\bar f_x^\sharp\colon C_yY\to C_xX$ of [F27] sends the class of $a\in\mathfrak m_y$ to the class of $\varphi(a)$. The cotangent isomorphism [F26] at the $k$-rational points, applied on the charts $\operatorname{Spec}R$ and $\operatorname{Spec}S$ and combined with [F32], gives identifications $$\theta_y\colon C_yY\cong\Omega_{R/k}\otimes_R\kappa(y),\qquad \theta_x\colon C_xX\cong\Omega_{S/k}\otimes_S\kappa(x),$$ both sending $[a]\mapsto\mathrm{d}a\otimes1$. Let $\alpha\colon S\otimes_R\Omega_{R/k}\to\Omega_{S/k}$ be the functoriality map of [F16](3), $b\otimes\mathrm{d}a\mapsto b\,\mathrm{d}\varphi(a)$; it is the first map of the exact sequence $S\otimes_R\Omega_{R/k}\xrightarrow{\alpha}\Omega_{S/k}\to\Omega_{S/R}\to0$ of [F28]. Base changing this sequence along $S\to\kappa(x)$ and using the identification $(S\otimes_R\Omega_{R/k})\otimes_S\kappa(x) \cong\Omega_{R/k}\otimes_R\kappa(x)$ of [F25], together with the fact that $R\to\kappa(x)$ is evaluation at $y$, yields the exact sequence $$\Omega_{R/k}\otimes_R\kappa(y)\xrightarrow{\alpha_x} \Omega_{S/k}\otimes_S\kappa(x)\to\Omega_{S/R}\otimes_S\kappa(x)\to0$$ [F22]. For $a\in\mathfrak m_y$ one computes $\alpha_x(\theta_y([a]))=\alpha_x(\mathrm{d}a\otimes1) =\mathrm{d}\varphi(a)\otimes1=\theta_x([\varphi(a)]) =\theta_x(\bar f_x^\sharp([a]))$, so under the identifications $\theta_y$, $\theta_x$ the map $\alpha_x$ is precisely the cotangent map $\bar f_x^\sharp$; in particular $\operatorname{rank}\alpha_x=\operatorname{rank}\bar f_x^\sharp$. [F2, F16, F22, F25, F26, F27, F28, F29, F30, F31, F32, step 7.2, given, algebra]

9.1 By [F27], $d_xf$ is the transpose of $\bar f_x^\sharp$, so by [F33] its rank equals $\operatorname{rank}\bar f_x^\sharp$; all tangent and cotangent spaces here are finite-dimensional [F39, F26]. Hence $\operatorname{rank}d_xf=\operatorname{rank}\alpha_x$. Since $\Omega_{R/k}\otimes_R\kappa(y)\to\Omega_{S/k}\otimes_S\kappa(x) \to\Omega_{S/R}\otimes_S\kappa(x)\to0$ is exact (step 8.1), the rank-nullity theorem [F34] applied to $\alpha_x$ gives $$\operatorname{rank}d_xf =\dim_k\bigl(\Omega_{S/k}\otimes_S\kappa(x)\bigr) -\dim_{\kappa(x)}\bigl(\Omega_{S/R}\otimes_S\kappa(x)\bigr) =\dim_kT_xX-\dim_{\kappa(x)}\bigl(\Omega_{S/R}\otimes_S\kappa(x)\bigr),$$ the last equality because $\theta_x$ identifies $\Omega_{S/k}\otimes_S\kappa(x)$ with $C_xX$ [F26] and $C_xX$ is the dual of the finite-dimensional space $T_xX$ [F39]. [F26, F33, F34, F39, step 8.1, given, algebra]

10.1 Since $x\in X_{\mathrm{reg}}$, the classical dimension test [F35] gives $\dim_kT_xX=\dim_xX$, and since $X$ is irreducible its only irreducible component is $X$ itself, so $\dim_xX=\dim X$ by [F37]. Likewise $y\in Y_{\mathrm{reg}}$ gives $\dim_kT_yY=\dim_yY=\dim Y$ by [F35, F37]. The point $x$ lies in $D(H)$, so $H\notin\mathfrak m_x$ and step 7.1 bounds $\dim_{\kappa(x)}(\Omega_{S/R}\otimes_S\kappa(x))\le r$. Therefore step 9.1 and $r=\dim X-\dim Y$ (step 2.1) give $$\operatorname{rank}(d_xf)=\dim X -\dim_{\kappa(x)}\bigl(\Omega_{S/R}\otimes_S\kappa(x)\bigr) \ge\dim X-r=\dim Y=\dim_kT_yY.$$ A linear map has rank at most the dimension of its target, so $\operatorname{rank}(d_xf)=\dim_kT_yY$ and $d_xf\colon T_xX\to T_yY$ is surjective. This holds at every closed point $x$ of the nonempty open set $U$, and $f(U)\subseteq V\subseteq Y_{\mathrm{reg}}$, which is the assertion. [F35, F37, step 2.1, step 7.1, step 9.1, given, algebra]

11.1 Boundary and scope dispositions. Empty: $X$ and $Y$ are nonempty because irreducible means nonempty [F8], so the charts and the open $U$ of step 7.2 are nonempty, and no empty-case convention is needed; the sets $X_{\mathrm{reg}}$, $Y_{\mathrm{reg}}$ are nonempty by [F36], and if $Y$ is a point then $r=\dim X$, and the separating basis in step 3.1 is empty exactly when $\dim X=0$. Zero: the case $r=\dim X-\dim Y=0$ is covered by the empty-list convention of steps 3.1 and 6.1: then $\Omega_{L/K}=0$, $\Omega_{S/R}[1/H]=0$, so step 7.1 gives $\dim_{\kappa(x)}(\Omega_{S/R}\otimes_S\kappa(x))=0$, and step 10.1 concludes $\operatorname{rank}(d_xf)=\dim X=\dim Y$ with no modification; likewise $\dim Y=0$ forces $Y$ to be a single point in the present irreducible setting, $T_yY=0$, and surjectivity is the equality $\operatorname{rank}=0$ already obtained. One: nothing in the argument divides by a natural number or assumes a generator count $\ge1$; the lists $s_1,\dots,s_m$, $r_1,\dots,r_n$, $g_1,\dots,g_m$ and $t_1,\dots,t_r$ may have length one or zero, and the length-one case $r=1$ has $\dim X-\dim Y=1$; generically finite maps instead have $r=0$, and both cases are covered by the same argument. Degenerate: the proof does not require $\varphi$ to be surjective or the charts to be smooth, and it does not require $f$ to be finite or flat; the degenerate dominant case $X\to Y=\operatorname{Spec}k$ (so $K=k$, $r=\dim X$, $H$ and the nonempty open $U$ are obtained as in steps 6.1 and 7.2) is covered by steps 6.1-10.1, and characteristic $0$ is essential, the Frobenius example $k[u]\to k[t]$, $u\mapsto t^p$ showing failure in characteristic $p$ and lying outside the hypothesis of characteristic $0$. Endpoints: the two inequalities used in step 10.1 are the endpoint bounds $\dim_{\kappa(x)}(\Omega_{S/R}\otimes_S\kappa(x))\le r$ of step 7.1 and $\operatorname{rank}(d_xf)\le\dim_kT_yY$; at $r=0$ the first is tight and at $r=\dim X$ the second is tight, in both cases producing the stated equality rather than a strict inequality. Nonempty-choice: AC is declared in [F1] and is used in this proof only through the AC-assuming suppliers [F36] (regular loci), [F33] (transpose rank), [F23] (bases inside spanning sets), [F2] (the classical-scheme dictionary), [F7] (affine antiequivalence), [F6] (domain criterion), [F9] (function fields of charts) and [F11] (dimension equals transcendence degree), each cited at the step that uses it; the field-theoretic steps 3.1, 3.2-6.1 and the linear algebra of steps 8.1-10.1 make no further choice. Biconditional directions: no biconditional is asserted by this lemma; the only implications are the chain of equalities and the single inequality of step 10.1, whose forward reading gives surjectivity, and no converse is claimed. [F1, F2, F6, F7, F8, F9, F11, F23, F33, F36, step 3.1, step 6.1, step 7.1, step 7.2, step 10.1, given, algebra] ∎



## Source qualification

The classical statement proved here is the source-open form of generic smoothness in characteristic $0$. Vakil proves at §3.1, Proposition 3.1, for a dominant morphism of integral finite-type $k$-schemes that there is a nonempty open set $U\subseteq X$ on which the morphism is smooth; his proof defines the relative dimension $n=\dim X-\dim Y$, notes that the relative differential module has rank $n$ at the generic point and rank at least $n$ everywhere, and uses upper semicontinuity of fibre rank and constant rank to conclude local freeness and flatness on a dense open set. The present item records only the source-side differentiability conclusion and is proved without local freeness, flatness or the smoothness of the structure morphisms: the spreading-out step 6.1 produces a nonempty principal open on which the fibre of the relative differential module is generated by the $r$ lifted elements, and the final comparison step 10.1 uses the tangent-space criterion through [[lem-tangent-space-functoriality-classical]]. The smoothness conclusion that Vakil draws from that criterion is taken up by the consumer [[cor-generic-smoothness-on-source-characteristic-zero]] through [[lem-smooth-map-tangent-surjectivity-criterion]], not asserted here. The characteristic-$0$ hypothesis enters only through perfectness of $K$ and the separating transcendence basis of [F14]; positive characteristic is genuinely different, as recorded on the counterexample page. The source works with schemes; the translation to irreducible classical varieties is the equivalence of [F2], and the affine charts, their coordinate rings and the canonical function fields are those of [F5] and [F9].
