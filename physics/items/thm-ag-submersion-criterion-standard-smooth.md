---
id: "thm-ag-submersion-criterion-standard-smooth"
kind: "theorem"
title: "Submersion criterion for locally standard smooth morphisms"
status: published
origin: "pipeline"
deps: ["def-ag-standard-smooth-algebra", "def-ag-geometrically-regular-algebra-and-fibre", "def-locally-finite-type-and-finite-type-morphism", "def-residue-field-scheme-point", "def-scheme-theoretic-fibre", "def-base-change-morphism-schemes", "def-axiom-of-choice", "lem-ag-standard-smooth-flatness", "lem-ag-standard-smooth-regular-geometric-fibres", "lem-ag-separable-residue-cotangent-sequence", "lem-ag-differentials-transitivity", "lem-ag-differentials-localization-base-change", "lem-ag-polynomial-quotient-differentials", "lem-regular-system-of-parameters-equivalent-basis", "thm-regular-local-rings-are-domains-and-cohen-macaulay", "lem-regular-local-regular-quotient-ideal-is-parameter-generated", "lem-ag-local-flatness-regular-parameters", "thm-ag-standard-smooth-geometric-regularity", "thm-ag-standard-smooth-base-change-composition", "cor-affine-domain-maximal-ideal-height-equals-dimension", "cor-dimension-of-a-finite-polynomial-ring-over-a-field", "cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented", "cor-finite-type-algebra-over-noetherian-ring-is-noetherian", "thm-noetherian-ring-quotients-and-localisations", "prop-transitivity-of-flatness-under-change-of-rings", "thm-localisations-are-flat", "thm-localisation-of-modules-is-tensor-product", "cor-localisation-commutes-with-kernels-images-and-cokernels", "thm-right-exactness-of-tensor-products", "thm-prime-spectrum-of-a-localisation-bijection", "prop-iterated-localisation", "thm-coproduct-property-of-tensor-products-of-commutative-algebras", "thm-fibre-products-of-schemes-exist"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vakil §26.2.F and the proof of §26.2.4, pp.690–693"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "Stacks Algebra 10.140.5 (tag 00TV), 10.137.16 (tag 00TF) and 10.137.5–6 (tags 00T6, 00T7)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ and $Y$ be $k$-schemes that are locally standard smooth over $k$ at the
points considered below ([[def-ag-standard-smooth-algebra]]), and let
$f\colon X\to Y$ be a morphism of $k$-schemes of finite type
([[def-locally-finite-type-and-finite-type-morphism]]). Let $x\in X$ be a
$k$-rational point and put $y=f(x)$, assumed $k$-rational as well, so that
$\kappa(x)=\kappa(y)=k$ ([[def-residue-field-scheme-point]]). Write
$A=\mathcal O_{Y,y}$, $S=\mathcal O_{X,x}$, with maximal ideals
$\mathfrak m_y\subseteq A$, $\mathfrak m_x\subseteq S$, and let
$f^{*}\colon A\to S$ be the induced local homomorphism. Let
$X_y=X\times_Y\operatorname{Spec}\kappa(y)$ be the scheme-theoretic fibre
([[def-scheme-theoretic-fibre]]), whose local ring at $x$ is
$S/\mathfrak m_yS$. Then:

1. **Submersion criterion.** $f$ is locally standard smooth at $x$ — that is,
   there are affine opens $\operatorname{Spec}C\subseteq X$ and
   $\operatorname{Spec}D\subseteq Y$ with $x\in\operatorname{Spec}C$,
   $f(\operatorname{Spec}C)\subseteq\operatorname{Spec}D$ and $D\to C$ standard
   smooth at the prime of $C$ corresponding to $x$ — if and only if the
   $k$-linear map
   $f^{*}\colon\mathfrak m_y/\mathfrak m_y^{2}\to\mathfrak m_x/\mathfrak m_x^{2}$
   induced by $f^{*}$ is injective.
2. **Flatness and fibres.** If the equivalent conditions of clause 1 hold and
   $m=\dim S$, $n=\dim A$, then $S$ is flat over $A$, that is $f$ is flat at
   $x$, and $S/\mathfrak m_yS$ is a regular local ring of dimension $m-n$; in
   other words the fibre $X_y$ is regular at $x$ of dimension $m-n$. Any
   standard smooth chart of $f$ at $x$ has relative dimension $m-n$.

The two schemes are only required to be locally standard smooth at $x$ and $y$,
not globally; $f$ is of finite type as assumed above, and no hypothesis is
imposed on the base field. The Axiom of Choice is used
through the local-flatness, regular-parameter and geometric-regularity
suppliers cited below.

## Facts & Assumptions

**Given:** A field $k$, $k$-schemes $X,Y$ locally standard smooth over $k$ at a $k$-rational point $x$ and at its image $y=f(x)$, a finite-type morphism of $k$-schemes $f\colon X\to Y$, the local rings $A=\mathcal O_{Y,y}$, $S=\mathcal O_{X,x}$ with maximal ideals $\mathfrak m_y,\mathfrak m_x$ and residue fields $k$, the induced local homomorphism $f^{*}\colon A\to S$, and the Axiom of Choice.

[F1] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation of an $R$-algebra $S$ consists of $n\ge c\ge0$, $f_1,\dots,f_c\in R[x_1,\dots,x_n]$ and $g$ with $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ such that some $c\times c$ Jacobian minor has image a unit of $S$; $n-c$ is the relative dimension, the invertible minor may be assumed leading, and a further principal localisation may be absorbed. For a finitely presented $R$-algebra map $R\to S$ and a prime $\mathfrak q\in\operatorname{Spec}S$, standard smooth at $\mathfrak q$ means that $S_h$ has a standard smooth presentation over $R$ for some $h\notin\mathfrak q$; locally standard smooth means this holds at every prime.

[F2] [[lem-ag-standard-smooth-flatness]]: under the Axiom of Choice, a standard smooth $R$-algebra is a finitely presented $R$-algebra and is flat over $R$, for every commutative ring $R$.

[F3] [[lem-ag-standard-smooth-regular-geometric-fibres]]: under the Axiom of Choice, for a standard smooth $R$-algebra $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ with leading minor a unit, a prime $\mathfrak p\in\operatorname{Spec}R$ and a field extension $K/\kappa(\mathfrak p)$, every local ring $(F_K)_Q$ of $F_K=(S\otimes_R\kappa(\mathfrak p))\otimes_{\kappa(\mathfrak p)}K$ is regular local of dimension $\operatorname{ht}(Q')-c$, where $Q'\subseteq K[x_1,\dots,x_n]$ corresponds to $Q$, and every irreducible component of $\operatorname{Spec}F_K$ has dimension $n-c$; for $c=0$ this says that a localisation of a polynomial ring over a field is regular local of dimension $\operatorname{ht}(Q')$.

[F4] [[lem-ag-separable-residue-cotangent-sequence]]: let $R$ be a Noetherian local $k$-algebra with maximal ideal $\mathfrak m$ and residue field $\kappa$, finitely generated and separably generated over $k$. Then $0\to\mathfrak m/\mathfrak m^{2}\to\Omega_{R/k}\otimes_R\kappa\to\Omega_{\kappa/k}\to0$ is short exact, the first map sending the class of $x$ to $\mathrm dx\otimes1$; if $\kappa/k$ is finite separable then $\Omega_{\kappa/k}=0$ and that map is an isomorphism $\mathfrak m/\mathfrak m^{2}\cong\Omega_{R/k}\otimes_R\kappa$.

[F5] [[lem-ag-differentials-transitivity]]: for homomorphisms $A\to B\to C$ of commutative rings the sequence $C\otimes_B\Omega_{B/A}\to\Omega_{C/A}\to\Omega_{C/B}\to0$ of $C$-modules is exact, the first map being the extension of scalars of $\mathrm d_{B/A}$.

[F6] [[lem-ag-differentials-localization-base-change]]: for ring maps $A\to A'$ there is a natural isomorphism $A'\otimes_A\Omega_{B/A}\cong\Omega_{B\otimes_AA'/A'}$, and for multiplicative sets $U\subseteq B$, $V\subseteq A$ with the image of $V$ in $B$ contained in $U$ there is a $U^{-1}B$-module isomorphism $U^{-1}\Omega_{B/A}\cong\Omega_{U^{-1}B/V^{-1}A}$.

[F7] [[lem-ag-polynomial-quotient-differentials]]: for $P=A[x_1,\dots,x_n]$, $\Omega_{P/A}$ is free on $\mathrm dx_1,\dots,\mathrm dx_n$; if $B=P/I$ then $I/I^{2}\to B\otimes_P\Omega_{P/A}\to\Omega_{B/A}\to0$ is exact; and if $I=(f_1,\dots,f_c)$ then $\Omega_{B/A}\cong B^{n}/\sum_jB\cdot(\partial_if_j)_i$ is the cokernel of the Jacobian matrix, so that with an invertible $c\times c$ minor $\Omega_{B/A}$ is free of rank $n-c$.

[F8] [[lem-regular-system-of-parameters-equivalent-basis]]: under the Axiom of Choice, for a nonzero Noetherian local ring $(R,\mathfrak m,k)$ of dimension $d$ and $\mathbf x=(x_1,\dots,x_d)\in\mathfrak m^{d}$, the tuple is a regular system of parameters if and only if its classes form a $k$-basis of $\mathfrak m/\mathfrak m^{2}$; in particular every lift of a cotangent basis generates $\mathfrak m$ and is a system of parameters.

[F9] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: under the Axiom of Choice, a regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay, and for every regular system of parameters $(x_1,\dots,x_d)$ the tuple is $R$-regular and $R/(x_1,\dots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

[F10] [[lem-regular-local-regular-quotient-ideal-is-parameter-generated]]: under the Axiom of Choice, for a regular local ring $(R,\mathfrak m,k)$ of dimension $d$ and an ideal $I\subseteq\mathfrak m$, the quotient $R/I$ is regular if and only if $\dim_k((I+\mathfrak m^{2})/\mathfrak m^{2})=d-\dim(R/I)$, equivalently if and only if $I$ is generated by an initial part of a regular system of parameters.

[F11] [[lem-ag-local-flatness-regular-parameters]]: under the Axiom of Choice, for a local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of Noetherian local rings and a finite $S$-module $M$ with $\operatorname{Tor}_1^{R}(R/\mathfrak m,M)=0$, the module $M$ is flat over $R$ ($M$ need not be finite over $R$); consequently, if $R$ and $S$ are regular local and the images in $S$ of a regular system of parameters of $R$ extend to a regular system of parameters of $S$, then $S$ is flat over $R$.

[F12] [[thm-ag-standard-smooth-geometric-regularity]]: under the Axiom of Choice, for a ring map $R\to S$ of finite presentation and $\mathfrak q\in\operatorname{Spec}S$ with $\mathfrak p=\mathfrak q\cap R$, the map is standard smooth at $\mathfrak q$ if and only if $R_{\mathfrak p}\to S_{\mathfrak q}$ is flat and the fibre $S\otimes_R\kappa(\mathfrak p)$ is geometrically regular at $\mathfrak q$; and for a finite-type $k$-algebra $A$ that is locally standard smooth over $k$, the relative dimension of a standard smooth chart at a $k$-rational prime $\mathfrak q$ equals $\dim A_{\mathfrak q}$.

[F13] [[thm-ag-standard-smooth-base-change-composition]]: base change of a standard smooth presentation along any ring map $R\to R'$ yields a standard smooth $R'$-presentation with the same parameters and relative dimension, standard smoothness at a prime is stable under such base change, and composing standard smooth presentations over $R\to S\to T$ yields a standard smooth $R$-presentation of $T$ with relative dimension the sum of the two relative dimensions; composition is likewise standard smooth at a prime.

[F14] [[cor-affine-domain-maximal-ideal-height-equals-dimension]], [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]: for a field $k$, $\dim k[x_1,\dots,x_n]=n$ and every maximal ideal of a finite-type $k$-domain has height equal to the dimension of that domain; in particular a maximal ideal $Q'\subseteq k[x_1,\dots,x_n]$ satisfies $\operatorname{ht}(Q')=n$.

[F15] [[def-ag-geometrically-regular-algebra-and-fibre]]: for a finitely presented $R$-algebra $S$, $\mathfrak q\in\operatorname{Spec}S$ with $\mathfrak p=\mathfrak q\cap R$, the fibre $S\otimes_R\kappa(\mathfrak p)$ is geometrically regular at $\mathfrak q$ when for every field extension $K/\kappa(\mathfrak p)$ and every prime of $(S\otimes_R\kappa(\mathfrak p))\otimes_{\kappa(\mathfrak p)}K$ lying over the image of $\mathfrak q$ the local ring there is regular.

[F16] [[def-scheme-theoretic-fibre]], [[def-base-change-morphism-schemes]], [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]], [[thm-fibre-products-of-schemes-exist]], [[thm-prime-spectrum-of-a-localisation-bijection]], [[prop-iterated-localisation]], [[cor-localisation-commutes-with-kernels-images-and-cokernels]]: the fibre $X_y$ is $X\times_Y\operatorname{Spec}\kappa(y)$; over affine charts $\operatorname{Spec}C$, $\operatorname{Spec}D$ it is computed by the coproduct $C\otimes_D\kappa(\mathfrak p)$ with $\mathfrak p=\mathfrak q\cap D$, so that its local ring at the point induced by $\mathfrak q$ is $C_{\mathfrak q}\otimes_{D_{\mathfrak p}}\kappa(\mathfrak p)=S/\mathfrak m_yS$; primes of a localisation $A_g$ are the primes of $A$ not containing $g$, localisation commutes with quotients and cokernels, and iterated localisation is localisation at the product of the inverted elements.

[F17] [[prop-transitivity-of-flatness-under-change-of-rings]], [[thm-localisations-are-flat]]: a localisation is flat, a composite of flat ring homomorphisms is flat, and a base change along a flat map is flat.

[F18] [[thm-right-exactness-of-tensor-products]], [[thm-localisation-of-modules-is-tensor-product]]: tensoring an exact sequence preserves right exactness, so a right-exact sequence stays right exact after tensoring with a module; for an ideal $I\subseteq B$ one has $(B/I)\otimes_BC\cong C/IC$.

[F19] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[thm-noetherian-ring-quotients-and-localisations]], [[cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented]]: a finite-type algebra over the field $k$ is Noetherian, as are its quotients and localisations; and a finite-type algebra over a Noetherian ring is finitely presented.

[F20] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; it is assumed in the statement and used through [F3], [F8], [F9], [F10], [F11] and [F12].



## Proof

1.1 Setup. Since $f$ is of finite type, the point $x$ has an affine open neighbourhood $\operatorname{Spec}C\subseteq X$ and $y$ has an affine open neighbourhood $\operatorname{Spec}D\subseteq Y$ with $f(\operatorname{Spec}C)\subseteq\operatorname{Spec}D$ and $D\to C$ of finite type; shrinking $C$ we may suppose that $k\to C$ has a standard smooth presentation $C\cong(k[x_1,\dots,x_N]/(f_1,\dots,f_c))_g$ with leading $c\times c$ minor a unit [F1], and shrinking $D$ that $k\to D$ has a standard smooth presentation $D\cong(k[y_1,\dots,y_M]/(G_1,\dots,G_b))_H$ with leading $b\times b$ minor a unit. Let $\mathfrak q\subseteq C$ be the prime corresponding to $x$ and $\mathfrak p=\mathfrak q\cap D$ the prime corresponding to $y$; both are maximal with $C/\mathfrak q=D/\mathfrak p=k$, since $x$ and $y$ are $k$-rational points and the $k$-algebra maps $k[x]/Q'\to\kappa(x)=k$ and $k[y]/P'\to\kappa(y)=k$ have finite-type domains, hence are isomorphisms. Put $A:=D_{\mathfrak p}$ and $S:=C_{\mathfrak q}$, so that $A\to S$ is a local homomorphism of Noetherian local rings with residue field $k$ [F19], and put $F:=S/\mathfrak m_yS$. [F1, F19, given, construct, F20]

2.1 Converse direction: extending regular parameters. By [F3] applied over $k$ to the two charts of step 1.1, $A$ and $S$ are regular local rings; write $n=\dim A$ and $m=\dim S$. Assume now that the map $\mathfrak m_y/\mathfrak m_y^{2}\to\mathfrak m_x/\mathfrak m_x^{2}$ induced by $f^{*}$ is injective. Choose a $k$-basis of $\mathfrak m_y/\mathfrak m_y^{2}$ and lift it to $y_1,\dots,y_n\in\mathfrak m_y$; by [F8] the tuple $(y_1,\dots,y_n)$ is a regular system of parameters of $A$. Its images form an independent tuple of $n$ elements of the $k$-vector space $\mathfrak m_x/\mathfrak m_x^{2}$ of dimension $m$, which therefore extends to a $k$-basis; lifting that basis so that the first $n$ lifts are $y_1,\dots,y_n$ and the remaining $m-n$ lifts are new elements gives $(x_1,\dots,x_m)\in\mathfrak m_x^{m}$ with $x_i=y_i$ for $i\le n$, and [F8] again makes it a regular system of parameters of $S$. [F3, F8, step 1.1, given, choose, construct]

2.2 The local rings and the cotangent identifications. Applying [F3] to the two standard smooth presentations of step 1.1 over the base field $k$ with $\mathfrak p=(0)$ and $K=k$, where the corresponding primes $Q'\subseteq k[x_1,\dots,x_N]$ and $P'\subseteq k[y_1,\dots,y_M]$ are maximal and hence of heights $N$ and $M$ by [F14], shows that $S$ is a regular local ring of dimension $N-c$ and that $A$ is a regular local ring of dimension $M-b$; by [F12] these integers are $m=\dim S$ and $n=\dim A$, so $N-c=m$ and $M-b=n$. Since the residue fields of $A$ and $S$ are the field $k$, a finite separable extension of $k$, [F4] gives isomorphisms $\mathfrak m_y/\mathfrak m_y^{2}\cong\Omega_{A/k}\otimes_Ak$ and $\mathfrak m_x/\mathfrak m_x^{2}\cong\Omega_{S/k}\otimes_Sk$ carrying the class of an element of the maximal ideal to $\mathrm d\square\otimes1$. [F3, F4, F12, F14, step 1.1]

2.3 Forward direction: charts give freeness, flatness and the fibre dimension. Assume $f$ is locally standard smooth at $x$; after shrinking the charts of step 1.1 we may suppose that $C$ carries a standard smooth presentation over $D$ of relative dimension $d:=N'-c'$, say $C\cong(D[x_1,\dots,x_{N'}]/(f'_1,\dots,f'_{c'}))_{g'}$ with an invertible $c'\times c'$ Jacobian minor [F1]. By [F7] the $S$-module $\Omega_{S/A}\cong S\otimes_C\Omega_{C/D}$ [F6] is the cokernel of the Jacobian matrix $S^{c'}\to S^{N'}$, hence is free of rank $d$ because the minor is a unit of $S$. Base changing this presentation along $D\to A$ exhibits $S$ as a localisation of the standard smooth $A$-algebra $(A[x_1,\dots,x_{N'}]/(f'_1,\dots,f'_{c'}))_{g'}$ [F13], which is flat over $A$ by [F2]; localisation is flat and flatness is transitive [F17], so $S$ is flat over $A$. Finally, $F=S/\mathfrak m_yS$ is the local ring of the fibre algebra $(k[x_1,\dots,x_{N'}]/(\bar f'_1,\dots,\bar f'_{c'}))_{\bar g'}$ at the prime $\mathfrak Q'$ corresponding to $x$, which is maximal because its residue field is $\kappa(x)=k$; so [F3] and [F14] give $\dim F=\operatorname{ht}(\mathfrak Q')-c'=N'-c'=d$. [F1, F2, F3, F6, F7, F13, F14, F17, step 1.1]

3.1 Converse direction: flatness and a regular local fibre. The images in $S$ of the regular system of parameters $y_1,\dots,y_n$ of $A$ are the initial segment of the regular system of parameters $(x_1,\dots,x_m)$ of $S$ from step 2.1, so the second assertion of [F11] shows that $S$ is flat over $A$. By [F9] the tuple $(x_1,\dots,x_n)$ is $S$-regular and $S/(x_1,\dots,x_n)$ is a regular local ring of dimension $m-n$; since $(x_1,\dots,x_n)=(y_1,\dots,y_n)S=\mathfrak m_yS$, this quotient is $F=S/\mathfrak m_yS$, the local ring of the fibre $X_y$ at $x$ [F16]. [F9, F11, F16, step 2.1]

3.2 Forward direction: relative dimension $m-n$ and injectivity of the cotangent map. Composing the standard smooth presentation of $C$ over $D$ from step 2.3 with the standard smooth presentation of $D$ over $k$ from step 1.1 presents the finite-type $k$-algebra $C$ as standard smooth over $k$ with relative dimension $n+d$ [F13]; its localisation at the $k$-rational prime $\mathfrak q$ is $S$, so [F12] identifies that relative dimension with $\dim S=m$, whence $d=m-n$ and, by step 2.3, $\dim F=m-n$. The transitivity sequence $\Omega_{A/k}\otimes_AS\to\Omega_{S/k}\to\Omega_{S/A}\to0$ of [F5] is right exact, and tensoring it with $S\to k$ yields, using [F4] and [F18], the exact sequence $\mathfrak m_y/\mathfrak m_y^{2}\to\mathfrak m_x/\mathfrak m_x^{2}\to\Omega_{S/A}\otimes_Sk\to0$, in which the first arrow is the map induced by $f^{*}$; since $\Omega_{S/A}\cong S^{d}$ the last term is a $k$-vector space of dimension $d$, so the image has dimension $m-d=n$, which equals $\dim_k(\mathfrak m_y/\mathfrak m_y^{2})=n$ by step 2.2 and forces the map to be injective. [F3, F4, F5, F12, F13, F18, step 2.2, step 2.3, algebra]

4.1 Converse direction: the fibre is geometrically regular. Write $Q'\subseteq k[x_1,\dots,x_N]$ for the maximal ideal corresponding to $x$ in the presentation of step 1.1, and put $R':=k[x_1,\dots,x_N]_{Q'}$. The parameters $y_1,\dots,y_n\in A=D_{\mathfrak p}$ generate $\mathfrak pD_{\mathfrak p}$. Since $D$ is Noetherian, after shrinking $\operatorname{Spec}D$ around $y$ and its inverse-image chart around $x$, we may represent every $y_i$ by an element of $D$ and arrange that $\mathfrak pD=(y_1,\dots,y_n)D$ on these charts: first clear their denominators outside $\mathfrak p$, then invert an element outside $\mathfrak p$ annihilating the finite module $\mathfrak pD/(y_1,\dots,y_n)D$. Absorb the corresponding principal localisations into the polynomial chart of $C$. Write each image of $y_i$ in $C$ as $P_i/g^{e_i}$ with $P_i\in k[x_1,\dots,x_N]$ and $e_i\ge0$. Since $g$ is a unit of $C$, the images of the numerators $P_i$ generate the same ideal as those of the $y_i$, and each $P_i$ vanishes at $x$. The finite-type fibre algebra $B:=C\otimes_D k=C/\mathfrak pC$ is then presented on this chart by $B\cong(k[x_1,\dots,x_N]/(f_1,\dots,f_c,P_1,\dots,P_n))_g$, and its local ring at $x$ is $F\cong R'/I$ for $I:=(f_1,\dots,f_c,P_1,\dots,P_n)R'$ [F16]. The ring $R'$ is regular local of dimension $N$ by [F3] with $c=0$ and [F14], and $\dim F=m-n$ by step 3.1, so [F10] gives $\dim_k((I+Q'^{2})/Q'^{2})=N-\dim F=N-m+n=c+n$. The classes of the $c+n$ generators $f_1,\dots,f_c,P_1,\dots,P_n$ span that space, hence form a basis. By [F4] and [F7], their classes in $Q'/Q'^{2}$ are the $c+n$ rows of the Jacobian matrix evaluated at $Q'$, so some $(c+n)\times(c+n)$ minor $h$ does not lie in $Q'$. Localising the **finite-type algebra** $B$ at the image of $h$ gives a standard smooth $k$-presentation with the displayed $c+n$ equations [F1]; this open chart contains $x$. By [F3], after every field extension $K/k$ every local ring of $(B_h)\otimes_kK$ is regular. Every prime of the extended fibre lying over $x$ belongs to this chart because $h\notin Q'$, so the fibre $C\otimes_D k$ is geometrically regular at $x$ in the sense of [F15]. [F1, F3, F4, F7, F10, F14, F15, F16, step 3.1, algebra]

5.1 Converse direction: concluding local standard smoothness. The $k$-algebra map $D\to C$ of step 1.1 is of finite type, hence finitely presented because $D$ is a localisation of a finite-type $k$-algebra and therefore Noetherian [F19]. Its localisation $A\to S$ is flat by step 3.1, and step 4.1 proves that the finite-type fibre $C\otimes_D\kappa(\mathfrak p)$ is geometrically regular at the point induced by $\mathfrak q$ (its local ring there is $F=S/\mathfrak m_yS$), so clause 1 of [F12] shows that $D\to C$ is standard smooth at $\mathfrak q$; that is exactly the assertion that $f$ is locally standard smooth at $x$. Together with step 3.2 this proves the equivalence of clause 1, step 2.3 and step 3.1 give flatness and the regularity and dimension $m-n$ of the fibre local ring in both directions, and steps 3.2 and 2.3 show that a witnessing chart has relative dimension $m-n$. [F12, F19, step 2.3, step 3.2, step 3.1, step 4.1] ∎
