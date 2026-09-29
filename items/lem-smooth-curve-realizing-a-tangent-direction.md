---
id: lem-smooth-curve-realizing-a-tangent-direction
kind: lemma
title: "A tangent direction is realized by a local smooth curve"
status: draft
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - def-ag-standard-smooth-algebra
  - def-axiom-of-choice
  - def-classical-affine-coordinate-ring
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-dimension
  - def-dimension-classical-variety
  - def-dual-numbers-scheme
  - def-fibre-product-schemes-universal-property
  - def-linear-subspace
  - def-polynomial-ring-over-a-commutative-ring
  - def-reduction-of-scheme
  - def-regular-local-ring-geometric-point
  - def-smooth-morphism-classical
  - def-zariski-cotangent-space-point
  - def-zariski-tangent-space-point
  - lem-ag-standard-smooth-regular-geometric-fibres
  - lem-irreducible-components-of-a-topological-space
  - lem-local-dimension-reduced-variety-components
  - lem-smooth-hyperplane-slice-at-transverse-point
  - lem-standard-basis-of-f-n
  - lem-tangent-space-functoriality-classical
  - lem-tangent-vectors-as-dual-number-points
  - thm-affine-scheme-ring-anti-equivalence
  - thm-ag-perfect-field-jacobian-regularity
  - thm-fibre-products-of-schemes-exist
  - thm-rank-nullity
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-universal-property-of-a-polynomial-ring-on-a-family
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Exercise 4-3 (printed p. 98) with its solution (printed p. 222)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let
$n\ge1$, and let $X\subseteq\mathbf A^n_k$ be a classical variety over $k$,
embedded as a closed subvariety and carrying its reduced finite-type
$k$-scheme structure. Suppose that $X$ is smooth at the classical closed point
$x\in X$ ([[def-smooth-morphism-classical]]) and put $d=\dim_xX$, assumed to
satisfy $d\ge1$. Then for **every** vector $v\in T_xX$ there is a reduced closed
subvariety $C\subseteq X$ ([[def-reduction-of-scheme]]) with $x\in C$ which is
smooth at $x$ and satisfies $\dim_xC=1$, and the differential
$d_x\iota_C$ of the closed immersion $\iota_C:C\hookrightarrow X$ maps $T_xC$
isomorphically onto the line $kv\subseteq T_xX$ when $v\ne0$; in particular
$v\in d_x\iota_C(T_xC)$ for every $v$. When $v=0$ the construction produces a
curve whose tangent space $T_xC$ is a line through the origin, so that
$0\in d_x\iota_C(T_xC)$. The curve $C$ is closed, hence locally closed, in $X$;
no characteristic, perfectness (beyond algebraic closedness), irreducibility or
separatedness hypothesis on $X$ beyond the standing conventions is used. The
dimension-zero case admits no such curve: if $d=0$, then no reduced closed
subvariety $C\subseteq X$ with $x\in C$ and $\dim_xC=1$ exists, so the
hypothesis $d\ge1$ is necessary.

## Facts & Assumptions

**Given:** AC; an algebraically closed field $k$; an integer $n\ge1$; a classical
variety $X\subseteq\mathbf A^n_k$ with closed point $x\in X$ at which $X$ is
smooth; $d=\dim_xX\ge1$; and a tangent vector $v\in T_xX$. Write
$a=(a_1,\ldots,a_n)\in k^n$ for the coordinates of the point $x$ and
$P=k[x_1,\ldots,x_n]$ for the polynomial ring. Throughout this proof, coordinate vectors and standard basis vectors are indexed by $1,\ldots,n$: the coordinate $u_i$ means the value $u(i-1)$ in the function-on-$n$ convention, and $e_i$ is the unit vector at $i-1$.

[F1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F2] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a classical algebraic variety over an algebraically closed field $k$ is a separated classical prevariety; varieties may be reducible or empty, their affine models are polynomial zero sets whose points have residue field canonically $k$, and these definitions use no Axiom of Choice.

[F3] [[def-classical-affine-coordinate-ring]]: for an affine algebraic set $X\subseteq k^n$ the coordinate ring is $k[X]=k[x_1,\ldots,x_n]/I(X)$; it is reduced, and the finite coordinate classes generate it as a $k$-algebra.

[F4] [[def-dimension-classical-variety]]: for a classical variety $X$ with irreducible components $X_1,\ldots,X_m$ and a closed point $x$ one has $\dim_xX=\max_{x\in X_i}\dim X_i$; the definition is made over an algebraically closed field and uses the Axiom of Choice.

[F5] [[lem-local-dimension-reduced-variety-components]]: under AC, for a reduced classical finite-type space $X$ over an algebraically closed field and a closed point $x$ one has $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i$.

[F6] [[def-smooth-morphism-classical]]: a morphism of finite-type $k$-schemes is smooth when every source point has affine neighbourhoods on which the induced ring map is standard smooth at the prime for that point; the condition is local on source and target, and the definition assumes AC.

[F7] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation of an $R$-algebra $S$ is an isomorphism $S\cong(R[x_1,\ldots,x_n]/(f_1,\ldots,f_c))_g$ with an invertible $c\times c$ Jacobian minor; the case $c=0$ is exactly a localisation of a polynomial ring, and standard smoothness at a prime holds after a principal shrinking.

[F8] [[lem-ag-standard-smooth-regular-geometric-fibres]]: under AC, if $S\cong(R[x_1,\ldots,x_n]/(f_1,\ldots,f_c))_g$ is standard smooth over the commutative ring $R$, then for every prime of $R$ and every field extension of its residue field, every local ring of the corresponding base-changed fibre is a regular local ring.

[F9] [[def-regular-local-ring-geometric-point]]: for a point $x$ of a locally Noetherian scheme, $x$ is regular exactly when $\mathcal O_{X,x}$ is a regular local ring, and then $\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}$.

[F10] [[def-zariski-cotangent-space-point]] and [[def-zariski-tangent-space-point]]: $C_xX=\mathfrak m_x/\mathfrak m_x^2$ is the cotangent space and $T_xX=\operatorname{Hom}_{\kappa(x)}(\mathfrak m_x/\mathfrak m_x^2,\kappa(x))$ the intrinsic tangent space; at a $k$-rational point these are $k$-vector spaces.

[F11] [[def-dual-numbers-scheme]] and [[lem-tangent-vectors-as-dual-number-points]]: $D_k=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$, and for a $k$-scheme $X$ and $x\in X(k)$ the intrinsic tangent space $T_xX$ is naturally isomorphic, as a $k$-vector space, to the fibre over $x$ of $\operatorname{Hom}_k(D_k,X)\to X(k)$; equivalently $T_xX\cong\operatorname{Der}_k(\mathcal O_{X,x},k)$.

[F12] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: a $k$-algebra map from $P=k[x_1,\ldots,x_n]$ to a commutative $k$-algebra is uniquely determined by arbitrary images of its $n$ variables.

[F13] [[lem-tangent-space-functoriality-classical]]: the differential $d_xf$ is the dual of the induced cotangent map, it agrees with post-composition by $f$ on based dual-number points, it satisfies the chain rule, and it is an isomorphism for isomorphisms of $k$-schemes; no choice is used.

[F14] [[def-reduction-of-scheme]]: the reduction $X_{\mathrm{red}}$ is the closed subscheme with structure sheaf $\mathcal O_X/\mathcal N_X$, where the germs of $\mathcal N_X$ are the nilpotent elements of the local rings; on $\operatorname{Spec}A$ it is $\operatorname{Spec}(A/\sqrt{(0)})$, so the stalk at $x$ is $\mathcal O_{X,x}/\operatorname{nil}(\mathcal O_{X,x})$.

[F15] [[thm-affine-scheme-ring-anti-equivalence]]: for commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ gives a natural bijection $\operatorname{Hom}_{\rm CRing}(A,B)\cong\operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A)$, a contravariant equivalence on affine schemes; hence a closed subscheme of $\mathbf A^n_k$ is $\operatorname{Spec}(P/J)$ for its ideal $J\subseteq P$ and morphisms into it are the ring maps out of $P/J$.

[F16] [[def-fibre-product-schemes-universal-property]] and [[thm-fibre-products-of-schemes-exist]]: a fibre product of $X\to S\leftarrow Y$ is a scheme $P$ with projections $p:P\to X$, $q:P\to Y$ such that $fp=gq$ and, for every test scheme $T$ and morphisms $a:T\to X$, $b:T\to Y$ with $fa=gb$, there is exactly one $h:T\to P$ with $ph=a$ and $qh=b$; every such diagram of schemes has a fibre product.

[F17] [[lem-smooth-hyperplane-slice-at-transverse-point]]: under AC, for $X\subseteq\mathbf A^n_k$ a classical variety over an algebraically closed $k$ smooth at a closed point $x$ with $d=\dim_xX\ge1$, and an affine-linear $h=\ell-c$ with nonzero linear part $\ell$, $h(x)=0$, such that $\ell$ is nonzero on $T_xX$, the scheme-theoretic intersection $Z=X\times_{\mathbf A^n_k}V(h)$ is canonically the scheme-theoretic fibre of $h|_X$ over $0$, its structure morphism is smooth at $x$, $\mathcal O_{Z,x}$ is a regular local ring of dimension $d-1$, and $T_xZ=\ker(d_x(h|_X))=\{u\in T_xX:d_x(h|_X)(u)=0\}$.

[F18] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]: every algebraically closed field is perfect.

[F19] [[thm-ag-perfect-field-jacobian-regularity]]: under AC, for a perfect field $k$, $P=k[x_1,\ldots,x_n]$, an ideal $I\subseteq P$, $A=P/I$ and $\mathfrak q\in\operatorname{Spec}A$ with $A_{\mathfrak q}$ regular, there is $t\in A\smallsetminus\mathfrak q$ such that $A_t$ is a standard smooth $k$-algebra; in particular such an $A$ is locally standard smooth over $k$ at every prime at which it is regular.

[F20] [[lem-standard-basis-of-f-n]]: the standard unit vectors $e_i$ form an ordered basis of $F^n$ with $\dim_FF^n=n$; a vector $u\in k^n$ has coordinates $u_i=u(i)$ and $\bigl(\sum_{i<n}\lambda_ie_i\bigr)(j)=\lambda_j$, so each coordinate projection $u\mapsto u_i$ is a linear functional and $k^1=k$ has dimension $1$.

[F21] [[def-linear-subspace]] and [[def-dimension]]: a linear subspace is a subset closed under the vector-space operations, and $\dim_FV$ is the cardinality of a basis of $V$ when $V$ is finite-dimensional.

[F22] [[thm-rank-nullity]]: for a linear map $T:V\to W$ with $V$ finite-dimensional, $\dim_FV=\dim_F(\ker T)+\dim_F(\operatorname{im}T)$; the theorem is choice-free.

[F23] [[lem-irreducible-components-of-a-topological-space]]: under AC, every irreducible subset of a topological space is contained in an irreducible component, and every irreducible component is closed.

[F24] [[def-polynomial-ring-over-a-commutative-ring]] and [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: $P=k[x_1,\ldots,x_n]$ is the polynomial ring in the $n$ variables over $k$, and for every commutative $k$-algebra $S$ and every family $(s_1,\ldots,s_n)$ in $S$ there is a unique $k$-algebra map $P\to S$ with $x_i\mapsto s_i$; in particular evaluation at $a=(a_1,\ldots,a_n)$ is the $k$-algebra map $x_i\mapsto a_i$, and expressions such as $x_j-\lambda x_s-\mu$ are elements of $P$.




[F25] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: under AC, every regular local ring is a domain, hence reduced.

## Proof

**Proof technique:** direct.

1.1 Setup and dimensions. By [F2] and [F3] the closed subvariety $X\subseteq\mathbf A^n_k$ is the affine model with its reduced finite-type structure, $k[X]=P/I(X)$ is reduced and generated by the finitely many classes $\bar x_1,\ldots,\bar x_n$, and the closed points of $X$ have residue field $k$; thus $x$ is a $k$-rational point with coordinates $a=(a_1,\ldots,a_n)$. Smoothness at $x$ means that the structure morphism is locally standard smooth at $x$ [F6], so some principal shrinking around $x$ has a standard smooth presentation [F7]; applying [F8] with $R=k$, $\mathfrak p=(0)$ and $K=k$ shows that $\mathcal O_{X,x}$ is a regular local ring, so $x$ is a regular point and $\dim_kT_xX=\dim\mathcal O_{X,x}$ [F9], while $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i=\dim_xX=d$ by [F5] with [F4]. A based dual-number point of $\mathbf A^n_k$ at $a$ is, by the affine anti-equivalence [F15] and the polynomial universal property [F12], a map $P\to k[\epsilon]/(\epsilon^2)$ whose reduction modulo $\epsilon$ sends $x_i$ to $a_i$. Its variable images are therefore uniquely $x_i\mapsto a_i+\epsilon w_i$ for a vector $w\in k^n$, and conversely every such vector determines a based point. Under the $k$-linear dual-number bijection [F11], the tangent space $T_a\mathbf A^n_k$ is thus $k^n$ in these coordinates, and the composite with $X\hookrightarrow\mathbf A^n_k$ sends a tangent vector of $X$ to the unique $w\in k^n$ whose map factors through $X$; write $$T=\{w\in k^n:\text{the based dual-number point }X_i\mapsto a_i+\epsilon w_i\text{ lies in }X\}\subseteq k^n.$$ Since the correspondence is $k$-linear and bijective, $T$ is a linear subspace [F21] with $\dim_kT=d$, so $T\ne0$ because $d\ge1$; let $v\in T$ denote the image of the given tangent vector $v\in T_xX$, and note that all tangent-space identifications below are made with these coordinates, so that $T=T_xX$ as subspaces of $k^n$. [F2, F3, F4, F5, F6, F7, F8, F9, F11, F12, F21, given, algebra]

1.2 Reduction does not change the tangent subspace. Let $Y\subseteq\mathbf A^n_k$ be a closed subscheme of finite type over $k$ with $x\in Y(k)$, say $Y=\operatorname{Spec}(P/J)$ for its ideal $J$ [F15], and suppose that the local ring $\mathcal O_{Y,x}$ is reduced. Then the closed immersion $Y_{\mathrm{red}}\hookrightarrow Y$ has $\mathcal O_{Y_{\mathrm{red}},x}=\mathcal O_{Y,x}/\operatorname{nil}(\mathcal O_{Y,x})=\mathcal O_{Y,x}$ [F14], so it induces an isomorphism of local rings at $x$, hence an isomorphism of cotangent spaces $\mathfrak m_x/\mathfrak m_x^2$ [F10] and, dualizing, an isomorphism $T_xY_{\mathrm{red}}\to T_xY$ [F13]; since the composite $Y_{\mathrm{red}}\to Y\to\mathbf A^n_k$ is the closed immersion $Y_{\mathrm{red}}\hookrightarrow\mathbf A^n_k$, the chain rule of [F13] shows that the identification of $T_xY_{\mathrm{red}}$ with a subspace of $T_x\mathbf A^n_k=k^n$ [F11, F12] agrees with the composite of the identifications for $Y_{\mathrm{red}}\to Y$ and $Y\to\mathbf A^n_k$, and since the first of these is an isomorphism the two subspaces of $k^n$ coincide: $T_xY_{\mathrm{red}}=T_xY$. This equality is the form in which the invariance under reduction is used below, and it also shows that a reduced closed subscheme with regular local ring at $x$ is smooth at $x$: if $\mathcal O_{Y,x}$ is regular, then $x$ is a regular point of $Y$, and $Y=\operatorname{Spec}(P/J)$ is locally standard smooth at $x$ by [F19] because $k$ is perfect [F18]; by [F6] that is smoothness of $Y$ at $x$. [F6, F10, F11, F12, F13, F14, F15, F18, F19, given, algebra]

1.3 The linear forms. Assume first that $v\ne0$; since $v\ne0$, there is a least index $s\in\{1,\ldots,n\}$ with $v_s\ne0$ in the relabelled coordinates. For every index $j\ne s$ define $$\ell_j(u)=u_j-\frac{v_j}{v_s}u_s\qquad(u\in k^n),$$ a $k$-linear functional on $k^n$ [F20, F21] satisfying $\ell_j(v)=v_j-\frac{v_j}{v_s}v_s=0$; consequently $kv\subseteq\ker\ell_j$ for every $j\ne s$, and conversely if $u\in T$ satisfies $\ell_j(u)=0$ for all $j\ne s$, then $u_j=\frac{v_j}{v_s}u_s$ for all $j\ne s$ and therefore $u=\frac{u_s}{v_s}v$, so $$T\cap\bigcap_{j\ne s}\ker\ell_j=kv.$$ For each $j\ne s$ put $h_j=x_j-\frac{v_j}{v_s}x_s-\bigl(a_j-\frac{v_j}{v_s}a_s\bigr)\in P$ [F24]; then $h_j(a)=0$ and $h_j$ is affine-linear with linear part $\ell_j$, because $h_j(a+\epsilon w)=h_j(a)+\epsilon\,\ell_j(w)$ for every $w\in k^n$, and $\ell_j\ne0$ because $\ell_j(v)=0$ and $\ell_j(e_j)=1$ for $j\ne s$. [F20, F21, F24, given, algebra]

2.1 The active indices. Recursively for $j=1,\ldots,n$, put $T^{(0)}:=T$ and $$T^{(j)}:=T^{(j-1)}\cap\ker\ell_j\ \text{ if }j\ne s\text{ and }\ell_j\ne0\text{ on }T^{(j-1)},\qquad T^{(j)}:=T^{(j-1)}\ \text{ otherwise},$$ the first case being called active at $j$; let $J$ be the finite set of active indices, listed in increasing order as $J=\{j_1<\cdots<j_m\}$. At an active index the restriction $\ell_j|_{T^{(j-1)}}$ is a nonzero linear map to $k=k^1$, so its image has dimension $1$ [F20] and rank-nullity [F22] gives $\dim_kT^{(j)}=\dim_kT^{(j-1)}-1$, while at an inactive index $T^{(j)}=T^{(j-1)}$; hence $\dim_kT^{(j)}=d-\#\{i:j_i\le j\}$ for every $j$, and $\dim_kT^{(n)}=d-m$. Moreover $T^{(n)}=kv$: on the one hand every $T^{(j)}$ contains $v$ because $v\in T$ and $\ell_{j'}(v)=0$ for all $j'\ne s$ [step 1.3], so $kv\subseteq T^{(n)}$; on the other hand if $u\in T^{(n)}$ and $j\ne s$, then either $j$ is active, in which case $T^{(n)}\subseteq T^{(j)}\subseteq\ker\ell_j$, or $j$ is inactive, in which case $\ell_j$ vanishes on $T^{(j-1)}\supseteq T^{(n)}$; so $u\in T\cap\bigcap_{j\ne s}\ker\ell_j=kv$ by step 1.3, giving $T^{(n)}\subseteq kv$. Therefore $\dim_kT^{(n)}=1$ and $m=d-1$. [F20, F22, step 1.3, given, algebra]

3.1 The induction on the active slices. Put $Y_0:=X$, and for $i=1,\ldots,m$ define $Z_i:=Y_{i-1}\times_{\mathbf A^n_k}H_i$, where $H_i=V(h_{j_i})$ is the hyperplane cut out by the affine-linear polynomial of step 1.3 for the index $j_i$, and put $Y_i:=(Z_i)_{\mathrm{red}}$ [F14, F15, F16]. Each $Z_i$ is a closed subscheme of $Y_{i-1}$ (base change of the closed immersion $H_i\hookrightarrow\mathbf A^n_k$) and each $Y_i$ is a reduced closed subvariety of $X$ containing $x$, because $x\in X=Y_0$ and each $h_{j_i}$ vanishes at $x$ [step 1.3] so the $k$-point $x$ lifts to $Z_i$ and to $Y_i$. The induction claim is: $T_xY_i=T^{(j_i)}$ as subspaces of $k^n$, $\dim_kT_xY_i=d-i$, $\mathcal O_{Y_i,x}$ is a regular local ring of dimension $d-i$, $\dim_xY_i=d-i$, and $Y_i$ is smooth at $x$. For $i=0$ this is step 1.1 together with the given smoothness. Assume the claim for $i-1$ with $1\le i\le m=d-1$; then $d-i+1\ge2\ge1$, so the slice lemma [F17] applies to the variety $Y_{i-1}$, smooth at $x$ by the induction claim, with the affine-linear form $h_{j_i}$ of linear part $\ell_{j_i}$: the index $j_i$ is active, which means $\ell_{j_i}$ is nonzero on $T^{(j_i-1)}$, and $T^{(j_i-1)}=T^{(j_{i-1})}=T_xY_{i-1}$ (for $i=1$, $T^{(j_1-1)}=T^{(0)}=T_xX$ because all indices below $j_1$ are inactive), so the transversality hypothesis holds. The slice lemma gives that $Z_i$ is smooth at $x$ over $k$ with $\mathcal O_{Z_i,x}$ a regular local ring of dimension $(d-i+1)-1=d-i$ and $$T_xZ_i=\ker(d_x(h_{j_i}|_{Y_{i-1}}))=\{u\in T_xY_{i-1}:\ell_{j_i}(u)=0\}=T^{(j_i-1)}\cap\ker\ell_{j_i}=T^{(j_i)}.$$ Since $\mathcal O_{Z_i,x}$ is regular, it is reduced by [F25], so step 1.2 applied to $Y=Z_i$ gives $T_xY_i=T_x(Z_i)_{\mathrm{red}}=T_xZ_i=T^{(j_i)}$ and $\mathcal O_{Y_i,x}=\mathcal O_{Z_i,x}$, a regular local ring of dimension $d-i$; moreover $Y_i$ is reduced, so [F5] with [F4] gives $\dim_xY_i=\dim\mathcal O_{Y_i,x}=d-i$, and $Y_i$ is smooth at $x$ by the second part of step 1.2. This proves the claim for $i$ and completes the induction. [F4, F5, F14, F15, F16, F17, F25, step 1.2, step 1.3, step 2.1, given, algebra]

4.1 The case $v=0$. If $v=0$, then $T\ne0$ by step 1.1, so choose any nonzero $u\in T$ and apply the construction of steps 1.3, 2.1 and 3.1 to $u$ in place of $v$; it yields a curve $C$ with $T_xC$ mapped isomorphically onto the line $ku$, and $v=0\in ku=d_x\iota_C(T_xC)$. [step 1.1, step 3.1, algebra]

4.2 Conclusion for nonzero $v$. Let $v\ne0$ and put $C:=Y_m=Y_{d-1}$ with the notation of step 3.1; then $C\subseteq X$ is a reduced closed subvariety with $x\in C$, smooth at $x$, and step 3.1 at $i=m=d-1$ gives $T_xC=T^{(n)}=kv$ (if $m>0$, the last active slice has $T_xC=T^{(j_m)}=T^{(n)}$; if $m=0$, no slice occurs and $T_xC=T=T^{(n)}$) [step 2.1] and $\dim_xC=1$. Under the closed immersion $C\hookrightarrow X$ the differential $d_x\iota_C$ is injective and the diagram with the two ambient identifications commutes [F13, step 1.1, step 1.2], so $d_x\iota_C$ carries $T_xC$ isomorphically onto the subspace of $T_xX$ whose ambient image is $kv$, namely onto $kv$ itself; in particular $v\in d_x\iota_C(T_xC)$. [F13, step 1.1, step 1.2, step 2.1, step 3.1, given, algebra]

5.1 Boundaries. If $d=1$ then $m=0$ [step 2.1] and $C:=Y_0=X$ works: $X$ is reduced with $x\in X$, smooth at $x$ by hypothesis with $\dim_xX=1$, and $T_xX=T$ is one-dimensional, so $T=kv$ for the nonzero $v$ [step 1.1]. If $d=0$ no such curve exists: a reduced closed subvariety $C\subseteq X$ with $x\in C$ and $\dim_xC=1$ has, by [F5] with [F4], an irreducible component of $C$ containing $x$ of dimension $1$, which is an irreducible closed subset of $X$ passing through $x$ and hence is contained in an irreducible component of $X$ containing $x$ [F23], so that $\dim_xX\ge1$ by [F4], a contradiction; this is why the hypothesis $d\ge1$ is stated. The construction divides only by $v_s\ne0$ [step 1.3], so no characteristic hypothesis is needed and the affine-linear forms $h_j$ are available in every characteristic; the ambient dimension $n\ge1$ may equal $1$, in which case $d\le1$ and the case $d=1$ above applies; $X$ may be reducible, and the curve $C$ produced is closed in $X$, hence locally closed. The Axiom of Choice enters the statement through [F1] and is used only through the suppliers that assume it, namely [F4], [F5], [F6], [F8], [F17], [F18 as used through F19] and [F23], [F25], each cited at the step that uses it; the explicit linear forms $\ell_j$, the finite recursion defining the active set, the polynomials $h_j$, the enumerations and all tangent identifications involve no selection, and [F20], [F22] and the reductions of [F14] are choice-free. [F1, F4, F5, F6, F8, F17, F19, F23, step 1.1, step 1.3, step 2.1, given, algebra] ∎


## Source qualification

Milne, *Algebraic Geometry* v6.10, Exercise 4-3 (printed p. 98) asks: "Given a smooth point on a variety and a tangent vector at the point, show that there is a smooth curve passing through the point with the given vector as its tangent vector (see mo111467)." The solution printed at p. 222 argues by choosing suitable hypersurfaces through the point with linearly independent differentials and citing the predecessor Exercise 4-2; the item above makes that argument scheme-precise: it constructs the hyperplanes $H_i$ from explicit coordinate forms $\ell_j(u)=u_j-\frac{v_j}{v_s}u_s$, replaces the intermediate intersections by their reductions so that each step can invoke [[lem-smooth-hyperplane-slice-at-transverse-point]] verbatim, and obtains the curve as a reduced closed subvariety (the exercise asks only for a locally closed curve). Milne works over an algebraically closed field with classical varieties and radical vanishing ideals; the item allows reducible $X$ and records the dimension-zero obstruction. No smoothness of the curve away from $x$ is claimed, and no characteristic hypothesis is used.
