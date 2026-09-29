---
id: lem-smooth-hyperplane-slice-at-transverse-point
kind: lemma
title: "A transverse hyperplane slice is smooth at the chosen point"
status: published
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-dimension-affine-and-projective-space
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-tensor-product-with-a-quotient-ring
  - def-ag-standard-smooth-algebra
  - def-axiom-of-choice
  - def-classical-affine-coordinate-ring
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-dimension-classical-variety
  - def-dual-numbers-scheme
  - def-embedding-dimension-and-regular-local-ring
  - def-fibre-product-schemes-universal-property
  - def-finite-type-and-module-finite-algebras
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-regular-local-ring-geometric-point
  - def-scheme-theoretic-fibre
  - def-smooth-morphism-classical
  - thm-classical-affine-local-ring-is-localization
  - lem-ag-standard-smooth-regular-geometric-fibres
  - lem-classical-variety-noetherian-components
  - lem-finite-type-local-on-source-and-target
  - lem-local-dimension-reduced-variety-components
  - lem-subscheme-intersection-fibre-product
  - lem-tangent-space-functoriality-classical
  - lem-tangent-vectors-as-dual-number-points
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-scheme-ring-anti-equivalence
  - thm-ag-standard-smooth-base-change-composition
  - thm-ag-submersion-criterion-standard-smooth
  - thm-fibre-products-of-schemes-exist
  - thm-stalk-structure-sheaf-prime-localization
  - thm-universal-property-of-a-polynomial-ring-on-a-family
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Exercise 4-2 (printed pp. 98-99) with its solution (printed p. 222)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let
$n\ge1$, and let $X\subseteq\mathbf A^n_k$ be a classical variety over $k$,
embedded as a closed subvariety and carrying its reduced finite-type
$k$-scheme structure. Suppose that $X$ is smooth at the classical closed point
$x\in X$ ([[def-smooth-morphism-classical]]) and put $d=\dim_xX$, assumed to
satisfy $d\ge1$. Let $h=\ell-c\in k[x_1,\ldots,x_n]$ be an affine-linear
polynomial whose linear part $\ell$ is nonzero and which satisfies $h(x)=0$,
and let $H=V(h)$ be the closed subscheme of $\mathbf A^n_k$ cut out by the
principal ideal $(h)$ --- the fibre of $h:\mathbf A^n_k\to\mathbf A^1_k$ over
the origin $0$, that is, the affine hyperplane through $x$. Assume that
$\ell$ is nonzero on $T_xX$: under the identification
$T_x\mathbf A^n_k=k^n$ obtained from
[[lem-tangent-vectors-as-dual-number-points]] and
[[thm-universal-property-of-a-polynomial-ring-on-a-family]], the
composite
$$T_xX\xrightarrow{\ d_x\iota\ }T_x\mathbf A^n_k=k^n\xrightarrow{\ \ell\ }k$$
is not the zero map, where $\iota:X\hookrightarrow\mathbf A^n_k$ is the
inclusion. Then the restricted morphism $h|_X:X\to\mathbf A^1_k$ is smooth at
$x$; the scheme-theoretic intersection $Z=X\times_{\mathbf A^n_k}H$ is
canonically the scheme-theoretic fibre of $h|_X$ over $0$, its structure
morphism $Z\to\operatorname{Spec}k$ is smooth at $x$, and
$\mathcal O_{Z,x}$ is a regular local ring of dimension $d-1$; and
$$T_xZ=\ker\bigl(d_x(h|_X)\bigr),$$
the kernel of the composite displayed above (so that, under that
identification, $T_xZ$ is the subspace
$\{v\in T_xX:d_x(h|_X)(v)=0\}$ of $T_xX$).

## Facts & Assumptions

**Given:** AC; an algebraically closed field $k$; $n\ge1$; a classical variety $X\subseteq\mathbf A^n_k$ with closed point $x$ at which $X$ is smooth; $d=\dim_xX\ge1$; the affine-linear polynomial $h=\ell-c$ with nonzero linear part $\ell$ and $h(x)=0$; the closed subscheme $H=V(h)$; and the transversality assumption that the composite $T_xX\to T_x\mathbf A^n_k=k^n\to k$ induced by $\ell$ is not the zero map.

[F1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F2] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a classical algebraic variety over an algebraically closed field $k$ is a separated classical prevariety; varieties may be reducible or empty, their affine models are polynomial zero sets whose points have residue field canonically $k$, and these definitions use no Axiom of Choice.

[F3] [[def-classical-affine-coordinate-ring]]: for an affine algebraic set $X\subseteq k^n$ the coordinate ring is $k[X]=k[x_1,\ldots,x_n]/I(X)$; it is reduced, and the finite coordinate classes generate it as a $k$-algebra.

[F4] [[def-dimension-classical-variety]]: for a classical variety $X$ with irreducible components $X_1,\ldots,X_m$ and a closed point $x$ one has $\dim_xX=\max_{x\in X_i}\dim X_i$, where $\dim X$ is the chain dimension.

[F5] [[lem-local-dimension-reduced-variety-components]]: under AC, for a reduced classical finite-type space $X$ over an algebraically closed field and a closed point $x$ one has $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i$.

[F6] [[def-smooth-morphism-classical]]: a morphism of finite-type $k$-schemes is smooth when every source point has affine neighbourhoods on which the induced ring map is standard smooth at the prime for that point; the condition is local on source and target, and the definition assumes AC.

[F7] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation of an $R$-algebra $S$ is an isomorphism $S\cong(R[x_1,\ldots,x_n]/(f_1,\ldots,f_c))_g$ with an invertible $c\times c$ Jacobian minor; the case $c=0$ is exactly a localisation of a polynomial ring, and standard smoothness at a prime holds after a principal shrinking.

[F8] [[lem-ag-standard-smooth-regular-geometric-fibres]]: under AC, if $S\cong(R[x_1,\ldots,x_n]/(f_1,\ldots,f_c))_g$ is standard smooth over the commutative ring $R$, then for every prime of $R$ and every field extension of its residue field, every local ring of the corresponding base-changed fibre is a regular local ring.

[F9] [[thm-stalk-structure-sheaf-prime-localization]]: for $\mathfrak p\in\operatorname{Spec}A$, the affine structure-sheaf stalk is canonically $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

[F10] [[def-regular-local-ring-geometric-point]]: for a point $x$ of a locally Noetherian scheme, $x$ is regular exactly when $\mathcal O_{X,x}$ is a regular local ring, and then the intrinsic tangent space $T_xX$ is finite-dimensional over $\kappa(x)$ with $\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}$.

[F11] [[def-dual-numbers-scheme]] and [[lem-tangent-vectors-as-dual-number-points]]: $D_k=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$ is the dual-numbers scheme, and for a $k$-scheme $X$ with $x\in X(k)$ the intrinsic tangent space $T_xX$ is naturally isomorphic, as a $k$-vector space, to the fibre over $x$ of $\operatorname{Hom}_k(D_k,X)\to X(k)$; equivalently $T_xX\cong\operatorname{Der}_k(\mathcal O_{X,x},k)$.

[F12] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: a $k$-algebra map from $k[X_1,\ldots,X_n]$ to a commutative $k$-algebra is uniquely determined by arbitrary images of its $n$ variables.

[F13] [[lem-tangent-space-functoriality-classical]]: the differential $d_xf$ is the dual of the induced cotangent map, it agrees with post-composition by $f$ on based dual-number points, it satisfies the chain rule, and it is an isomorphism for isomorphisms of $k$-schemes; no choice is used.

[F14] [[def-scheme-theoretic-fibre]]: for a morphism $f:X\to S$ and a point $s\in S$, the scheme-theoretic fibre is $X_s=X\times_S\operatorname{Spec}\kappa(s)$.

[F15] [[lem-subscheme-intersection-fibre-product]]: the scheme-theoretic intersection of finitely many closed subschemes of a scheme is their iterated fibre product over it, cut out by the sum of their ideal sheaves.

[F16] [[def-fibre-product-schemes-universal-property]] and [[thm-fibre-products-of-schemes-exist]]: a fibre product of $X\to S\leftarrow Y$ is a scheme $P$ with projections $p:P\to X$, $q:P\to Y$ such that $fp=gq$ and, for every test scheme $T$ and morphisms $a:T\to X$, $b:T\to Y$ with $fa=gb$, there is exactly one $h:T\to P$ with $ph=a$ and $qh=b$; every such diagram of schemes has a fibre product.

[F17] [[thm-affine-fibre-product-tensor-ring]]: the fibre product of affine schemes over an affine base is $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_AC)$, with projections corresponding to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$.

[F18] [[cor-tensor-product-with-a-quotient-ring]]: for a commutative ring $R$, an ideal $I\subseteq R$ and an $R$-module $M$ there is a natural isomorphism $M\otimes_R(R/I)\cong M/IM$, $m\otimes(r+I)\mapsto rm+IM$; it is $R/I$-linear, for $I=0$ it is the tensor-unit isomorphism, and for $I=R$ both sides are zero.

[F19] [[thm-ag-standard-smooth-base-change-composition]]: base change of a standard smooth presentation along an arbitrary ring map is standard smooth with the same parameters, so locally standard smooth maps are stable under base change of the base ring.

[F20] [[thm-ag-submersion-criterion-standard-smooth]]: under AC, let $X,Y$ be $k$-schemes locally standard smooth over $k$ at $k$-rational points $x\in X$ and $y=f(x)$, and let $f$ be of finite type; then $f$ is locally standard smooth at $x$ if and only if the induced map $\mathfrak m_y/\mathfrak m_y^2\to\mathfrak m_x/\mathfrak m_x^2$ is injective; if so, and $m=\dim\mathcal O_{X,x}$, $n=\dim\mathcal O_{Y,y}$, then the local ring $S/\mathfrak m_yS$ of the scheme-theoretic fibre $X_y$ at $x$ is a regular local ring of dimension $m-n$.

[F21] [[def-embedding-dimension-and-regular-local-ring]]: for a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$ one has $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$, and $R$ is regular local exactly when $\operatorname{edim}R=\dim R$.

[F22] [[def-locally-finite-type-and-finite-type-morphism]] and [[def-finite-type-and-module-finite-algebras]]: a morphism is of finite type when it is locally of finite type and quasi-compact, and an $R$-algebra is of finite type over $R$ when it is generated as an $R$-algebra by finitely many elements, equivalently a quotient of a polynomial ring in finitely many variables.

[F23] [[lem-classical-variety-noetherian-components]]: every classical variety is Noetherian with finitely many irreducible components, and every open or closed subvariety has a finite affine cover.

[F24] The affine line $\mathbf A^1_k$ has coordinate ring $k[t]$ by [[def-classical-affine-coordinate-ring]], and its local ring at a closed point $a$ is $k[t]_{(t-a)}$ with residue field $k$ by [[thm-classical-affine-local-ring-is-localization]].

[F25] [[thm-affine-scheme-ring-anti-equivalence]]: for commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ gives a natural bijection $\operatorname{Hom}_{\rm CRing}(A,B)\cong\operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A)$, a contravariant equivalence on affine schemes.

[F26] [[lem-finite-type-local-on-source-and-target]]: being locally of finite type is affine-local on source and target, and a quasi-compact morphism locally of finite type is of finite type; equivalently, over each affine target open this may be tested on a finite affine source cover.

[F27] [[cor-dimension-affine-and-projective-space]]: for every integer $n\ge0$, $\dim\mathbf A^n_k=\dim\mathbf P^n_k=n$.

[F28] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]: a commutative algebra of finite type over a Noetherian commutative ring is a Noetherian ring.

[F29] [[def-locally-noetherian-and-noetherian-scheme]]: a scheme is locally Noetherian if it has an affine open cover by spectra of Noetherian rings.



## Proof

**Proof technique:** direct.

1.1 Setup. The closed subvariety $X\subseteq\mathbf A^n_k$ is an affine model with its reduced finite-type structure and function sheaf [F2], and its coordinate ring $k[X]=k[x_1,\ldots,x_n]/I(X)$ is reduced and generated as a $k$-algebra by the finitely many classes $\bar x_1,\ldots,\bar x_n$ [F3]. Its points have residue field $k$ [F2], so $x$ is a $k$-rational point. The variety $X$ is Noetherian with finitely many irreducible components [F23], and [F5] with [F4] gives $$\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i=\dim_xX=d,$$ the maximum being over the components containing $x$, a nonempty finite family. Smoothness of $X$ at $x$ means that the structure morphism $X\to\operatorname{Spec}k$ is locally standard smooth at $x$ [F6]; fix an affine chart $\operatorname{Spec}A$ containing $x$ on which $k\to A$ is standard smooth [F7], and write $\mathfrak m$ for the prime of $x$ in $A$, so that $\mathcal O_{X,x}\cong A_{\mathfrak m}$ [F9]. The subscheme $H=V(h)$ is cut out by the principal ideal $(h)\subseteq k[x_1,\ldots,x_n]$, and its defining equation vanishes at $x$: $h(x)=0$. [F2, F3, F4, F5, F6, F7, F9, F23, given]

1.2 The differential of $h|_X$. Write $f=h|_X$. Every $v\in T_xX$ is represented by a based dual-number point $\gamma:D_k\to X$ at $x$ [F11]. Its composite $\gamma'=\iota\circ\gamma:D_k\to\mathbf A^n_k$ corresponds to a $k$-algebra map $k[X_1,\ldots,X_n]\to k[\epsilon]/(\epsilon^2)$ [F25]. By [F12] this map is uniquely determined by the images of the $X_i$. Since reduction modulo $\epsilon$ gives the point $x=(x_1,\ldots,x_n)$, these images have the unique form $X_i\mapsto x_i+\epsilon w_i$ for $w=(w_1,\ldots,w_n)\in k^n$. Conversely every $w\in k^n$ gives such a based point by [F12], and the $k$-linear dual-number correspondence [F11] identifies $T_x\mathbf A^n_k$ with $k^n$ in these coordinates. Call $w$ the image of $v$ under $d_x\iota$. By [F13] the differential $d_xf(v)$ is represented by the composite $f\circ\gamma$, and substituting $\gamma'$ in the affine-linear form $h=\ell-c$ gives $$h(x+\epsilon w)=h(x)+\epsilon\,\ell(w)=\epsilon\,\ell(w),$$ because $h(x)=0$ and $\ell$ is $k$-linear. Hence $d_xf(v)=\ell(w)$, that is, $d_xf=\ell\circ d_x\iota$ and $dh_x=\ell$; the transversality hypothesis is therefore exactly the condition $d_xf\ne0$. Taking $n=1$ in the same calculation gives $T_0\mathbf A^1_k=k$, which is one-dimensional, and $T_xX$ is finite-dimensional [F10]. Thus a nonzero $d_xf$ is surjective, and by [F13] the induced cotangent map $\mathfrak m_0/\mathfrak m_0^2\to\mathfrak m_x/\mathfrak m_x^2$ is its dual, hence injective. [F10, F11, F12, F13, F25, given, algebra]

1.3 The morphism $f$ is of finite type. The affine model $X$ has coordinate ring $k[X]=k[x_1,\ldots,x_n]/I(X)$, generated as a $k$-algebra by the finitely many classes $\bar x_1,\ldots,\bar x_n$ [F3], and the affine line $\mathbf A^1_k$ has coordinate ring $k[t]$ [F24]; by [F25] the $k$-morphism $f=h|_X$ from the affine chart $X$ to $\mathbf A^1_k$ corresponds to the $k$-algebra map $k[t]\to k[X]$ sending $t$ to the class $\bar h$ of $h$, the pullback of the coordinate function. This ring map is of finite type: the same finite family generates $k[X]$ over $k$ [F3], hence over $k[t]$ [F22]. By [F26] finiteness of type may be tested over each affine target open on a finite affine source cover; the target $\operatorname{Spec}k[t]=\mathbf A^1_k$ is affine and the single chart $X$ is such a cover, so $f$ is of finite type. [F3, F22, F24, F25, F26, given, algebra]

2.1 Regularity of $X$ at $x$ and of the affine line at the origin. The coordinate ring $A$ of the chart of step 1.1 is a finitely generated $k$-algebra [F3], hence a Noetherian ring by [F28] because $k$ is a field and therefore Noetherian; so $\operatorname{Spec}A$ is locally Noetherian [F29]. Applying clause 1 of [F8] to the standard smooth presentation of step 1.1 with $R=k$, $\mathfrak p=(0)$ and $K=k$ shows that every local ring of that chart, in particular $\mathcal O_{X,x}=A_{\mathfrak m}$, is a regular local ring; by [F10] therefore $\dim_kT_xX=\dim\mathcal O_{X,x}=d$, so $T_xX\ne0$ because $d\ge1$. The affine line has coordinate ring $k[t]$ and local ring $k[t]_{(t)}$ at the origin with residue field $k$ [F24], and $k\to k[t]$ is standard smooth with one variable and no equation [F7]; hence $\mathbf A^1_k\to\operatorname{Spec}k$ is locally standard smooth at $0$ [F6] and $\mathcal O_{\mathbf A^1_k,0}$ is a regular local ring [F8]. The affine line is irreducible with $\dim\mathbf A^1_k=1$ [F27], so [F5] with [F4] gives $\dim\mathcal O_{\mathbf A^1_k,0}=\dim_0\mathbf A^1_k=1$. [F3, F4, F5, F6, F7, F8, F10, F24, F27, F28, F29, step 1.1, given, algebra]
2.2 The slice is the fibre. First, $H=V(h)$ is the fibre of $h$ over the origin: the fibre product of $h:\mathbf A^n_k\to\mathbf A^1_k$ and the point $0:\operatorname{Spec}k\to\mathbf A^1_k$ is $\operatorname{Spec}(k[x_1,\ldots,x_n]\otimes_{k[t]}k)$ with the projections of [F17], and [F18] identifies $k[x_1,\ldots,x_n]\otimes_{k[t]}k\cong k[x_1,\ldots,x_n]/(h)$, where $k[x_1,\ldots,x_n]$ is a $k[t]$-algebra through $t\mapsto h$, the ideal $IM$ is generated by $h$ for $I=(t)$ and $M=k[x_1,\ldots,x_n]$, and the isomorphism is one of $k$-algebras; hence $H=\operatorname{Spec}(k[x_1,\ldots,x_n]/(h))$ is this fibre, with projections $\pi:H\to\mathbf A^n_k$ and $\rho:H\to\operatorname{Spec}k$ satisfying $h\circ\pi=(0)\circ\rho$ [F16]. Second, $Z=X\times_{\mathbf A^n_k}H$ is the scheme-theoretic intersection of the closed subschemes $X$ and $H$ of affine space, with projections $\pi_X:Z\to X$, $\pi_H:Z\to H$ satisfying $\iota\circ\pi_X=\pi\circ\pi_H$ [F15]. Third, the fibre $X_0=X\times_{\mathbf A^1_k}\operatorname{Spec}k$ of $f$ over $0$ has projections $p:X_0\to X$, $q:X_0\to\operatorname{Spec}k$ satisfying $f\circ p=(0)\circ q$ [F14]. All three fibre products exist, and a morphism into any of them is determined by its projections [F16]. The morphisms $\iota\circ p$ and $q$ have equal composites to $\mathbf A^1_k$, namely $h\circ\iota\circ p=f\circ p=(0)\circ q$, so the universal property of $H$ gives a unique $\theta_H:X_0\to H$ with $\pi\circ\theta_H=\iota\circ p$ and $\rho\circ\theta_H=q$; since $\iota\circ p=\pi\circ\theta_H$, the pair $(p,\theta_H)$ induces a unique $\theta:X_0\to Z$ with $\pi_X\circ\theta=p$ and $\pi_H\circ\theta=\theta_H$. Conversely the morphisms $\pi_X$ and $\rho\circ\pi_H$ have equal composites to $\mathbf A^1_k$, namely $f\circ\pi_X=h\circ\iota\circ\pi_X=h\circ\pi\circ\pi_H=(0)\circ\rho\circ\pi_H$, so the universal property of $X_0$ gives a unique $\psi:Z\to X_0$ with $p\circ\psi=\pi_X$ and $q\circ\psi=\rho\circ\pi_H$. By the uniqueness clauses $\psi\circ\theta=\operatorname{id}_{X_0}$ and $\theta\circ\psi=\operatorname{id}_Z$: both composites induce the same projections, and a morphism into $H$ is determined by its composites with $\pi$ and $\rho$. Hence $\theta$ is a canonical isomorphism $X_0\to Z$ over $X$ and over $\operatorname{Spec}k$. The $k$-point $x:\operatorname{Spec}k\to X$ satisfies $f\circ x=(0)\circ(\text{structure map})$ because $h(x)=0$, so it induces a $k$-point of $X_0$, carried by $\theta$ to a $k$-point of $Z$ mapping to $x$; this is the point at which all local statements are taken. Finally the tangent space. A $k$-morphism $D_k\to X_0$ is by the universal property a pair $(\gamma,\delta)$ with $\gamma:D_k\to X$ and $\delta:D_k\to\operatorname{Spec}k$ such that $f\circ\gamma=(0)\circ\delta$ [F16]; the morphism $\delta$ is unique, and being based at $x$ means that $\gamma$ is based at $x$ and $\delta$ is the structure morphism. Hence based dual-number points of $X_0$ at $x$ correspond bijectively to based dual-number points $\gamma:D_k\to X$ of $X$ at $x$ whose composite $f\circ\gamma$ is the constant point at $0$. Under the identifications of [F11] this correspondence is $k$-linear and identifies $T_xX_0$ with $\ker(d_xf)$: by [F13], $d_xf(v)$ is represented by $f\circ\gamma$, and the constant point at $0$ represents the zero vector of $T_0\mathbf A^1_k$ [F12]. Since $\theta$ is an isomorphism, its differential at $x$ is an isomorphism [F13], so $$T_xZ=\ker(d_xf).$$ [F11, F12, F13, F14, F15, F16, F17, F18, step 1.2, given, algebra]

3.1 The submersion criterion. Take $Y=\mathbf A^1_k$ and $y=0=f(x)$: the point $y$ has residue field $k$ [F24], and both $x$ and $y$ are $k$-rational [step 1.1]. The schemes $X$ and $Y$ are locally standard smooth over $k$ at $x$ and $y$ [step 1.1, step 2.1], the morphism $f$ is of finite type [step 1.3], and the cotangent map $\mathfrak m_y/\mathfrak m_y^2\to\mathfrak m_x/\mathfrak m_x^2$ of [F20] is injective by [step 1.2]. Clause 1 of [F20] therefore makes $f$ locally standard smooth at $x$, that is, smooth at $x$ in the sense of [F6]. [F6, F20, F24, step 1.1, step 2.1, step 1.2, step 1.3, given, algebra]
4.1 Dimension of the slice. By step 3.1, clause 2 of [F20] applies at $x$ with $S=\mathcal O_{X,x}$, $A=\mathcal O_{\mathbf A^1_k,0}$, $m=\dim S=\dim\mathcal O_{X,x}=d$ [step 1.1] and $n=\dim A=\dim\mathcal O_{\mathbf A^1_k,0}=1$ [step 2.1]; it makes the local ring $S/\mathfrak m_yS=\mathcal O_{X_0,x}$ of the fibre at $x$ a regular local ring of dimension $m-n=d-1$. By step 2.2, $\mathcal O_{Z,x}\cong\mathcal O_{X_0,x}$, so $\mathcal O_{Z,x}$ is a regular local ring of dimension $d-1$ in the sense of [F21]. Consistently, rank-nullity for the surjective differential [step 1.2] gives $\dim_k\ker(d_xf)=\dim_kT_xX-1=d-1$ [step 2.1], and $\dim_kT_xZ=\dim_k\ker(d_xf)$ by step 2.2, so the tangent dimension of the slice agrees with the local dimension. [F20, F21, step 2.1, step 1.2, step 3.1, step 2.2, given, algebra]
5.1 Smoothness of the slice and conclusion. Since $f$ is smooth at $x$ [step 3.1] and $Z\cong X_0$ is the base change of $f$ along the point $0:\operatorname{Spec}k\to\mathbf A^1_k$ [step 2.2], clause 1 of [F19] makes $Z\to\operatorname{Spec}k$ locally standard smooth at $x$, so the slice is smooth at $x$ [F6]. Together with steps 3.1, 2.2 and 4.1 this proves the assertions of the statement, including $T_xZ=\ker(d_x(h|_X))$ and its description as the set of $v\in T_xX$ with $d_x(h|_X)(v)=0$. Boundaries. The hypothesis $d\ge1$ guards against vacuity: if $d=0$ then $\dim_kT_xX=d=0$ [step 2.1], so $T_xX$ carries no nonzero linear functional and the transversality hypothesis fails. For $d=1$ the conclusion gives $\dim\mathcal O_{Z,x}=0$ [step 4.1], so the slice is isolated at $x$ in the local sense. The ambient endpoint $n=1$ forces $d\le1$, hence $d=1$ and the same zero-dimensional conclusion. For $X=\mathbf A^n_k$ the inclusion is the identity, the slice $Z\cong H$ is the hyperplane itself (the projection $Z\to H$ is an isomorphism by the universal property [F16] applied to $\operatorname{id}_{\mathbf A^n_k}$), the transversality condition is exactly $\ell\ne0$, and step 2.2 gives $T_xZ=\ker(\ell)$. No characteristic hypothesis is used: the argument never divides by an integer, so all characteristics are covered. The variety $X$ may be reducible, and nothing is asserted in the nontransverse case where $\ell$ vanishes on $T_xX$. AC enters the statement through [F1] and is used only through the suppliers that assume it, namely [F5], [F6], [F8], [F20], [F23] and [F24], each cited at the step that uses it; the affine chart, its presentation, the polynomial $h$ and the point $x$ are single given objects, so no further selection is made and [F13], [F15], [F16] and [F18] are choice-free. [F1, F5, F6, F8, F15, F16, F19, F20, F23, F24, step 2.1, step 3.1, step 2.2, step 4.1, given, algebra] ∎






## Source qualification
Milne, *Algebraic Geometry* v6.10, Exercise 4-2 (printed pp. 98-99; PDF pages 98-99) assumes $V$ irreducible and $P$ nonsingular on $V$, and asks only that $P$ be nonsingular on each irreducible component of $V\cap H$ on which it lies, adding "you may assume" that each component has codimension one in $V$; the official solution (printed p. 222) argues from $T_a(V\cap H)\subset T_a(V)\cap T_a(H)$ and the dimension inequality. The item above instead treats the scheme-theoretic intersection of an arbitrary closed subvariety with the hyperplane cut out by an affine-linear equation, allows a reducible $X$, and proves the tangent identity by the fibre-product universal property and dual-number points. Regularity and the local dimension $d-1$ are taken from the locally standard smooth submersion criterion [[thm-ag-submersion-criterion-standard-smooth]], whose pointwise hypotheses suffice; the earlier scaffold planned to route them through [[lem-smooth-map-tangent-surjectivity-criterion]], which assumes globally smooth varieties. The converse questions of the exercise -- an example with $H\supset T_P(V)$ and $P$ singular on $V\cap H$, and whether $P$ must be singular in that case -- are not asserted here; the affine-linear form, the characteristic and the ambient dimension are unrestricted.
