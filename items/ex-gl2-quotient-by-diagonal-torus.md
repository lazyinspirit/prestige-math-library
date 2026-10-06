---
id: ex-gl2-quotient-by-diagonal-torus
kind: example
title: "The quotient of GL2 by the diagonal torus is the complement of the diagonal in P1 x P1"
status: draft
origin: pipeline
dependency_level: 5
deps: [cor-base-change-finite-type-and-products, cor-dimension-affine-and-projective-space, cor-polynomial-ring-over-a-domain-is-a-domain, def-ag-standard-smooth-algebra, def-axiom-of-choice, def-locally-closed-immersion, def-morphism-and-closed-subgroup-scheme, def-projective-bundle-scheme, def-proper-morphism, def-quotient-sheaf-and-representable-quotient, def-separated-scheme-over-base, def-smooth-morphism-schemes, lem-action-map-fibres-and-stabilizer-subscheme, lem-ag-standard-smooth-flatness, lem-base-change-locally-finite-type-presentation, lem-closed-subgroup-scheme-valued-point-criterion, lem-dimension-nonempty-open-subset, lem-field-valued-points-of-schemes, lem-flat-morphisms-stable-base-change, lem-fppf-quotient-representability-criterion, lem-general-linear-group-scheme-and-its-coordinate-ring, lem-irreducibility-criteria-and-open-subspaces, lem-orbit-map-fibres-and-stabilizer-dimension, lem-orbit-map-faithfully-flat-and-orbit-locally-closed, lem-projective-line-curve-and-divisor-basics, lem-projective-space-action-from-linear-representation, lem-separated-stable-under-base-change, lem-separated-stable-under-composition, lem-separatedness-of-open-and-closed-immersions, prop-faithfully-flat-orbit-map-represents-coset-quotient, thm-affine-nullstellensatz-correspondence, thm-ag-standard-smooth-geometric-regularity, thm-homogeneous-space-for-smooth-affine-group, thm-smooth-morphisms-stable-base-change-composition]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Example 7.19 and Theorem 7.18, printed p. 143"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf
      locator: "Example 1.12 and Theorem 1.16, printed pp. 5-7"
---

## Example

Assume the Axiom of Choice inherited from the homogeneous-space and
projective-bundle suppliers. Let $k$ be a field, let $G=\mathrm{GL}_2$ with its
standard representation on $V=k^2$
([[lem-general-linear-group-scheme-and-its-coordinate-ring]]), and let
$T\subseteq G$ be the diagonal torus, the closed subgroup scheme whose
$R$-points are the invertible diagonal matrices
([[def-morphism-and-closed-subgroup-scheme]],
[[lem-closed-subgroup-scheme-valued-point-criterion]]). (a) $T$ is a closed
subgroup scheme of the smooth affine group scheme $G$, and the fppf quotient
sheaf $G/T$ ([[def-quotient-sheaf-and-representable-quotient]]) is
representable ([[thm-homogeneous-space-for-smooth-affine-group]]). (b) Let $G$
act on $Y=\mathbb P^1_k\times_k\mathbb P^1_k$ by the product of the actions
induced on each factor by the standard representation
([[lem-projective-space-action-from-linear-representation]]), and let
$o=(\langle e_1\rangle,\langle e_2\rangle)\in Y(k)$. Then the stabilizer of $o$
is $T$, the orbit $O_o$ is exactly the open subscheme
$\{(L_1,L_2)\in Y: L_1\ne L_2\}$ (complement of the diagonal), and the orbit
map induces an isomorphism $G/T\cong O_o$
([[prop-faithfully-flat-orbit-map-represents-coset-quotient]],
[[lem-orbit-map-fibres-and-stabilizer-dimension]]). (c) Consequently $G/T$ is
a smooth separated finite-type $k$-scheme whose base change to an algebraic
closure has dimension $2$ (equal to $\dim G-\dim T=4-2$, by the
orbit-stabilizer dimension identity); the morphism $G/T\to\mathbb P^1_k$,
$(L_1,L_2)\mapsto L_1$, has over every point $y\in\mathbb P^1_k$ a fibre
isomorphic to $\mathbb P^1_{\kappa(y)}$ minus the $\kappa(y)$-rational point
defined by $y$; and for every extension field $K/k$ the natural map
$G(K)/T(K)\to(G/T)(K)$ is a bijection.

## Facts & Assumptions

**Given:** AC, a field $k$, the group $G=\mathrm{GL}_2$ with its standard representation on $V=k^2$, the diagonal torus $T\subseteq G$, the surface $Y=\mathbb P^1_k\times_k\mathbb P^1_k$ with the product action, and the point $o=(\langle e_1\rangle,\langle e_2\rangle)$.

[F1] $\operatorname{GL}_n=\operatorname{Spec}k[x_{ij},d^{-1}]$ is a group scheme of finite type with $\operatorname{GL}_n(R)$ the invertible matrices, and $\operatorname{GL}_V(R)=\operatorname{Aut}_R(V_R)$ is naturally identified with it ([[lem-general-linear-group-scheme-and-its-coordinate-ring]]). Moreover $\operatorname{GL}_2$ is standard smooth of relative dimension $4$ over $k$: the polynomial ring $k[x_{11},x_{12},x_{21},x_{22}]$ is standard smooth with the empty presentation, and $\operatorname{GL}_2$ is its localization at $d$, so it is finitely presented and flat with geometrically regular fibres, hence smooth over $k$ ([[def-ag-standard-smooth-algebra]], [[lem-ag-standard-smooth-flatness]], [[thm-ag-standard-smooth-geometric-regularity]], [[def-smooth-morphism-schemes]]). The same argument applies to every principal localization of a polynomial ring, in particular to the diagonal torus $T=\operatorname{Spec}k[a,d,(ad)^{-1}]$, which is standard smooth of relative dimension $2$ with the empty presentation, hence smooth, of finite type, flat and locally of finite presentation over $k$.

[F2] A closed subscheme of a finite-type group scheme is a closed subgroup scheme exactly when its $R$-points form a subgroup for every $R$ ([[lem-closed-subgroup-scheme-valued-point-criterion]], [[def-morphism-and-closed-subgroup-scheme]]).

[F3] A rational representation induces an action on $\mathbf P_{\mathrm{lines}}(V)=\mathbb P(V^\vee)$ whose $T$-points are rank-one locally direct summand subbundles, with action $L\mapsto r(g)L$, and the scheme-theoretic stabilizer of $[L]$ has $R$-points $\{g:r(g)L_R=L_R\}$ ([[lem-projective-space-action-from-linear-representation]], [[lem-action-map-fibres-and-stabilizer-subscheme]]).

[F4] Representability criterion: if $q:U\to M$ equalizes a pre-relation $s,t:R\rightrightarrows U$, $q$ is faithfully flat and locally of finite presentation, and $(t,s):R\to U\times_MU$ is an isomorphism, then $M$ represents the fppf quotient sheaf $U/R$ ([[lem-fppf-quotient-representability-criterion]]).

[F5] For every field $k$, $\mathbb P^1_k$ is a smooth proper geometrically integral curve over $k$, hence separated and of finite type over $k$ ([[lem-projective-line-curve-and-divisor-basics]], [[def-proper-morphism]]); smoothness, separatedness and finite type are stable under base change and composition, so $Y=\mathbb P^1_k\times_k\mathbb P^1_k$ is smooth, separated and of finite type over $k$ ([[thm-smooth-morphisms-stable-base-change-composition]], [[cor-base-change-finite-type-and-products]], [[lem-separated-stable-under-base-change]], [[lem-separated-stable-under-composition]]). For every smooth finite-type $k$-scheme $Z$ and every $k$-scheme $U$ the projection $Z\times_kU\to U$ is flat and locally of finite presentation, being the base change of the flat and locally finitely presented structure morphism $Z\to\operatorname{Spec}k$ ([[def-smooth-morphism-schemes]], [[lem-flat-morphisms-stable-base-change]], [[lem-base-change-locally-finite-type-presentation]]). A nonempty open subset of an irreducible classical variety has the same dimension ([[lem-dimension-nonempty-open-subset]]).

[F6] Over an algebraically closed field, for a connected smooth group scheme with a closed point the orbit-stabilizer dimension identity $\dim G=\dim G_x+\dim O_x$ holds ([[lem-orbit-map-fibres-and-stabilizer-dimension]]).

## Verification

**Given:** AC, the field $k$, $G=\mathrm{GL}_2$ with its standard representation on $V=k^2$, the diagonal torus $T$, the product action on $Y=\mathbb P^1\times\mathbb P^1$, and $o=(\langle e_1\rangle,\langle e_2\rangle)$.

1.1 The closed subscheme of $G$ cut out by the two off-diagonal coordinates has $R$-points the invertible diagonal matrices, which form a subgroup of $\operatorname{GL}_2(R)$ for every $R$; by [F2] it is a closed subgroup scheme, and we call it $T$. As a scheme $T$ is the open subscheme $ad\ne0$ of the affine plane with coordinates $a,d$, and by [F1] both $G$ and $T$ are smooth and affine of finite type over $k$. [F1, F2, given, construct]

1.2 By [F1] the standard representation identifies $\operatorname{GL}_V$ with $G$, and by [F3] the two factors $\mathbb P(V^\vee)\cong\mathbb P^1$ carry the actions induced by it, whose product is the stated action of $G$ on $Y$; the point $o=(\langle e_1\rangle,\langle e_2\rangle)$ is a $k$-point of $Y$. A matrix $g=(a\ b;c\ d)$ preserves the line $\langle e_1\rangle$ exactly when $c=0$ and preserves $\langle e_2\rangle$ exactly when $b=0$, and the two stabilizer functors are closed; hence the scheme-theoretic stabilizer $G_o$ has $G_o(R)=T(R)$ for every $k$-algebra $R$ and equals $T$ by [F2]. [F1, F2, F3, given, algebra]

1.3 Let $\Delta\subseteq Y$ be the diagonal and define $q:G\to Y\setminus\Delta$ by $q(g)=(g\langle e_1\rangle,g\langle e_2\rangle)$; it is well defined because $g$ is invertible and $\langle e_1\rangle\ne\langle e_2\rangle$. For a field $K$, every $K$-point $(L_1,L_2)$ of $Y\setminus\Delta$ has linearly independent generators $u\in L_1$, $v\in L_2$, and the matrix with columns $u,v$ is an invertible element of $G(K)$ mapping $o$ to $(L_1,L_2)$; hence $q$ is surjective on $K$-points and its image set is $Y\setminus\Delta$. [F3, given, algebra, construct]

2.1 Put $M=Y\setminus\Delta$ and apply [F3] to its identity point, obtaining the two universal line subbundles $L_1,L_2\subseteq V_M$. On an open $U\subseteq M$ where both have frames $u,v$, the determinant $u\wedge v$ is nonzero in every residue field: two lines in a two-dimensional vector space are dependent exactly when they coincide, and the diagonal has been removed. Thus the determinant lies in no maximal ideal of any affine chart of $U$ and is a unit; the column matrix $a=(u,v)$ is invertible. It defines a section of $q$ over $U$ and proves $L_1\oplus L_2=V_U$. The isomorphism $U\times_kT\to q^{-1}(U)$, $(m,h)\mapsto a(m)h$, has inverse $g\mapsto(q(g),a(q(g))^{-1}g)$: the second component preserves the two coordinate lines and hence belongs to the diagonal torus by step 1.2. These opens cover $M$, so $q$ is locally a projection with fibre the torus $T$, flat and locally of finite presentation by [F1] and [F5]. It is surjective by step 1.3, hence faithfully flat. [F1, F3, F5, step 1.2, step 1.3, given, construct, algebra]

2.2 The morphism of the criterion $G\times_kT\to G\times_{Y\setminus\Delta}G$, $(g,h)\mapsto(g,gh)$, is an isomorphism: on $R$-points for every $k$-algebra $R$ it is a bijection onto the pairs $(g,g')\in G(R)^2$ with $q(g)=q(g')$, with inverse $(g,g')\mapsto(g,g^{-1}g')$, and $g^{-1}g'\in T(R)$ exactly when $q(g)=q(g')$ by the stabilizer computation of step 1.2. [step 1.2, given, algebra]

3.1 Applying the criterion [F4] to $U=G$, $R=G\times_kT$ with $s(g,h)=g$, $t(g,h)=gh$, $M=Y\setminus\Delta$ and $q$ from steps 2.1 and 2.2 shows that $Y\setminus\Delta$ represents the fppf quotient sheaf $G/T$ and that the quotient morphism is $q$. Since the image of $q$ is $Y\setminus\Delta$ by step 1.3, the orbit subscheme $O_o$ and $Y\setminus\Delta$ agree; so $O_o$ represents $G/T$, the quotient morphism is $\varrho_o=q$, and the conclusions of (a) and (b) follow, including the representability of $G/T$. [F4, step 1.3, step 2.1, step 2.2, given]

4.1 For (c): the quotient $G/T$ is isomorphic to $O_o$ by step 3.1; the orbit $O_o$ is smooth over $k$ and of finite type by [[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]], and it is separated over $k$ because it is a locally closed subscheme of the separated finite-type $k$-scheme $Y$ by [F5], an immersion being separated ([[lem-separatedness-of-open-and-closed-immersions]]) and separatedness being stable under composition ([[lem-separated-stable-under-composition]]). Base changing to an algebraic closure $\bar k$, the orbit-stabilizer identity [F6] applied to the connected smooth group $G_{\bar k}$ acting on $Y_{\bar k}$ and the orbit $O_{o,\bar k}$ gives $\dim O_{o,\bar k}=\dim G_{\bar k}-\dim T_{\bar k}=4-2=2$, and $(G/T)_{\bar k}\cong O_{o,\bar k}$, which is the stated dimension. Here $\operatorname{GL}_2$ is the nonempty open subset $d\ne0$ of $\mathbf A^4$, of dimension $4$ by [F5] and [[cor-dimension-affine-and-projective-space]], and $T$ is the nonempty open subset $ad\ne0$ of $\mathbf A^2$, of dimension $2$ by the same two results; $G_{\bar k}$ is connected because it is a nonempty open subscheme of the irreducible $\mathbf A^4_{\bar k}$, whose coordinate ring $\bar k[x_1,\dots,x_4]$ is a domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]), so that the zero ideal corresponds to $\mathbf A^4$ under the Nullstellensatz correspondence ([[thm-affine-nullstellensatz-correspondence]]) and nonempty open subschemes are irreducible by [[lem-irreducibility-criteria-and-open-subspaces]]. [F5, F6, step 3.1, given, algebra]

5.1 The first projection $Y\setminus\Delta\to\mathbb P^1$ is the composite of the isomorphism $G/T\cong Y\setminus\Delta$ with $\mathrm{pr}_1$; over a point $y$ put $K=\kappa(y)$ and let $L_1$ be its canonical $K$-point; the fibre is $\{L_2\in\mathbb P^1_K:L_2\ne L_1\}$, which is $\mathbb P^1_K$ with one closed point removed. Finally the natural map $G(K)/T(K)\to(G/T)(K)$ is surjective because every $K$-point of $Y\setminus\Delta$ is $q(g)$ for some $g\in G(K)$ by step 1.3, and injective because $q(g)=q(g')$ forces $g^{-1}g'\in T(K)$ by step 2.2; hence it is a bijection for every extension field $K/k$. This completes the verification of (c). [step 1.3, step 2.2, step 3.1, step 4.1, given] ∎
