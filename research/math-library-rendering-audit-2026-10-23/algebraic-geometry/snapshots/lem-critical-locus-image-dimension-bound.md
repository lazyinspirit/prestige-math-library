---
id: lem-critical-locus-image-dimension-bound
kind: lemma
title: "Critical loci have small images in characteristic zero"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-change-of-rings-for-extension-of-scalars
  - cor-jacobian-presentation-differentials
  - cor-localisation-commutes-with-kernels-images-and-cokernels
  - def-ag-standard-smooth-algebra
  - def-axiom-of-choice
  - def-classical-affine-coordinate-ring
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-classical-dominant-morphism-and-rational-map
  - def-dimension-classical-variety
  - def-dimension-noetherian-topological-space
  - def-interior-closure-boundary-top
  - def-singular-and-regular-loci-variety
  - def-smooth-morphism-classical
  - def-smooth-relative-dimension-via-differentials
  - def-zariski-tangent-space-point
  - lem-ag-differentials-localization-base-change
  - lem-classical-variety-noetherian-components
  - lem-dimension-finite-union-components
  - lem-dominant-map-generic-differential-surjectivity-char-zero
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-irreducible-components-of-a-topological-space
  - lem-tangent-space-functoriality-classical
  - thm-affine-scheme-ring-anti-equivalence
  - thm-classical-affine-morphisms-coordinate-ring-antiequivalence
  - thm-classical-affine-nullstellensatz-correspondence
  - thm-classical-principal-open-is-affine-variety
  - thm-classical-varieties-equivalent-integral-separated-finite-type-schemes
  - thm-cotangent-space-maximal-ideal-quotient
  - thm-local-ring-affine-variety-localization
  - thm-transpose-kernel-range-and-rank
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
    - title: "Ravi Vakil, MATH 216 (2005-06), Classes 51-52, §3.4 (Lemma on the dimension of the critical image) with proof"
      url: https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be an
algebraically closed field of characteristic $0$, let $X$ and $Y$ be smooth
classical varieties over $k$, so that their structure morphisms
$X\to\operatorname{Spec}k$ and $Y\to\operatorname{Spec}k$ are smooth in the
sense of [[def-smooth-morphism-classical]], and let $f\colon X\to Y$ be a
morphism of classical varieties. For a classical point $x$ of $X$ the residue
field is $\kappa(x)=k$, and the differential
$$d_xf\colon T_xX\longrightarrow T_{f(x)}Y$$
of [[lem-tangent-space-functoriality-classical]] is a $k$-linear map. For
$r\ge0$ define
$$C_r=\{x\in X:\operatorname{rank}d_xf\le r\},$$
the set of classical points $x$ of $X$ at which that differential has rank at
most $r$. Then:

1. $C_r$ is closed in $X$; explicitly, $C_r$ is the set of classical points of
   a closed subvariety of the smooth classical variety $X$;
2. $\dim\overline{f(C_r)}\le r$, where the closure is taken in the classical
   variety $Y$ and $\dim$ is the dimension of
   [[def-dimension-classical-variety]].

Neither irreducibility, connectedness, equidimensionality nor nonemptiness of
$X$ or of $Y$ is assumed, and the empty case is permitted. The
characteristic-$0$ hypothesis is used only for claim 2: claim 1 holds over any
algebraically closed field.

## Facts & Assumptions
**Given:** The Axiom of Choice; an algebraically closed field $k$ of
characteristic $0$; smooth classical varieties $X$ and $Y$ over $k$; a morphism
$f\colon X\to Y$; an integer $r\ge0$.

[F1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has
a choice function.

[F2] [[def-smooth-morphism-classical]]: a morphism of finite-type $k$-schemes
is smooth when every source point has affine neighbourhoods on which the
induced ring map has a standard smooth presentation at the prime of that point;
the condition is local on the source and on the target, and the definition
assumes AC.

[F3] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation of an
$R$-algebra $S$ is an isomorphism
$S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ with an invertible $c\times c$
Jacobian minor; the invertible minor may be assumed to occupy the first $c$
columns, a further principal localisation may be absorbed into the
presentation, and the relative dimension is $n-c$.

[F4] [[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]]:
under AC the closed-point construction and its inverse give an equivalence
between irreducible classical $k$-varieties and integral finite-type
$k$-schemes, each original point being identified with its singleton, so
classical points correspond to closed points.

[F5] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a
classical algebraic prevariety over $k$ is covered by affine models whose
points have residue field canonically $k$; a classical algebraic variety is a
separated prevariety; polynomial principal opens form a basis of the topology;
these definitions use no Axiom of Choice.

[F6] [[lem-classical-variety-noetherian-components]]: every classical variety
is Noetherian and has finitely many irreducible components; every open or
closed subvariety has a finite affine cover.

[F7] [[thm-classical-principal-open-is-affine-variety]]: under AC, for an affine
variety $X$ and $0\ne h\in k[X]$, the principal open $D_X(h)$ is an affine
variety with coordinate ring canonically $k[X]_h$.

[F8] [[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]] and
[[thm-affine-scheme-ring-anti-equivalence]]: pullback gives a natural bijection
between morphisms of affine algebraic sets and $k$-algebra maps of their
coordinate rings, and a ring map $A\to B$ corresponds contravariantly to a
morphism $\operatorname{Spec}B\to\operatorname{Spec}A$; an affine classical
variety is thus described by its coordinate ring and its spectrum.

[F9] [[def-classical-affine-coordinate-ring]]: for an affine algebraic set
$W\subseteq k^N$ the coordinate ring is $k[W]=k[x_1,\dots,x_N]/I(W)$; it is
reduced and generated as a $k$-algebra by the finitely many coordinate classes.

[F10] [[lem-tangent-space-functoriality-classical]]: at $k$-rational points the
differential is the dual of the induced cotangent map, it is functorial under
composition, and every $k$-open immersion induces an isomorphism on tangent
spaces at each rational point.

[F11] [[def-zariski-tangent-space-point]]: $T_xX$ is the dual of
$\mathfrak m_x/\mathfrak m_x^2$; for a $k$-scheme locally of finite type it is
finite-dimensional, and at a $k$-rational point the intrinsic and relative
tangent spaces agree.

[F12] [[thm-cotangent-space-maximal-ideal-quotient]]: at a $k$-rational point
$x$ of a $k$-scheme, the map
$\mathfrak m/\mathfrak m^2\to\Omega_{X/k}\otimes_{\mathcal O_{X,x}}\kappa(x)$,
$[a]\mapsto\mathrm da\otimes1$, is an isomorphism of $k$-vector spaces, natural
in the pair $(X,x)$.

[F13] [[cor-jacobian-presentation-differentials]]: for $P=A[x_1,\dots,x_n]$
and $B=P/I$ with $I=(f_1,\dots,f_r)$, the module $\Omega_{B/A}$ is the cokernel
of the $B$-linear map $B^r\to B^n$ whose $j$-th column is the vector of partial
derivatives $\bigl(\partial f_j/\partial x_i\bigr)$; in particular
$\Omega_{B/A}$ is generated by $\mathrm dx_1,\dots,\mathrm dx_n$.

[F14] [[def-smooth-relative-dimension-via-differentials]]: if $B$ is a
standard smooth $k$-algebra with presentation
$B\cong(k[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ whose leading $c\times c$
Jacobian minor $h=\det(\partial f_j/\partial x_i)_{1\le i,j\le c}$ maps to a
unit of $B$, then $\Omega_{B/k}$ is free of rank $n-c$, and in the computation
the localising isomorphism
$B^n\to B^{n-c}$, $(u',v')\mapsto v'-DC^{-1}u'$, restricted to the
complementary coordinates is the identity; accordingly the images
$\mathrm du_{c+1},\dots,\mathrm du_n$ of the differentials of the free
coordinates form a $B$-basis of $\Omega_{B/k}$.

[F15] [[lem-ag-differentials-localization-base-change]]: an $A$-algebra
homomorphism $B\to C$ induces a canonical $C$-linear functoriality map
$C\otimes_B\Omega_{B/A}\to\Omega_{C/A}$, $c\otimes\mathrm db\mapsto
c\,\mathrm d(\text{image of }b)$.

[F16] [[cor-change-of-rings-for-extension-of-scalars]]: for a ring homomorphism
$R\to S$, a right $S$-module $N$ and a left $R$-module $M$ there is a natural
isomorphism $N\otimes_RM\cong N\otimes_S(S\otimes_RM)$.

[F17] [[thm-transpose-kernel-range-and-rank]]: for a linear map $T\colon V\to W$
of finite-dimensional vector spaces, $\operatorname{rank}T^*=\operatorname{rank}T$.

[F18] [algebra] Field linear algebra. For a matrix over a field, its rank is at
most $r$ if and only if every $(r+1)\times(r+1)$ minor vanishes; for composable
linear maps $\operatorname{rank}(B\circ A)\le\operatorname{rank}B$, and if $B$
is injective then $\operatorname{rank}(B\circ A)=\operatorname{rank}A$; the
dual of a surjective linear map is injective; and the rank of a linear map
equals the rank of any matrix of it whose selected source vectors generate the
source and whose selected target vectors form a basis.

[F19] [algebra] Quotients of local rings. If $(R,\mathfrak m)$ is a local ring
and $I\subseteq\mathfrak m$ an ideal, then $R/I$ is local with maximal ideal
$\mathfrak m/I$ and
$(\mathfrak m/I)/(\mathfrak m/I)^2\cong\mathfrak m/(\mathfrak m^2+I)$; hence
the natural map $\mathfrak m/\mathfrak m^2\to(\mathfrak m/I)/(\mathfrak m/I)^2$
is surjective.

[F20] [[thm-local-ring-affine-variety-localization]]: under AC, for a classical
affine variety $X$ over an algebraically closed field and $x\in X$, there is a
canonical isomorphism of local rings $\mathcal O_{X,x}\cong k[X]_{\mathfrak m_x}$.

[F21] [[cor-localisation-commutes-with-kernels-images-and-cokernels]]: for an
$R$-module homomorphism $f\colon M\to N$, localisation identifies
$S^{-1}(\operatorname{coker}f)\cong\operatorname{coker}(S^{-1}f)$.

[F22] [[thm-classical-affine-nullstellensatz-correspondence]]: under AC, for
$A=R/I(X)$ the radical ideals of $A$ correspond bijectively to the closed
subsets of $X$; points correspond to maximal ideals, and a closed subvariety
$V(H)$ has coordinate ring $A/\sqrt H$.

[F23] [[def-dimension-classical-variety]]: for a classical variety $X$ with
irreducible components $X_i$ and a closed point $x$ one has
$\dim_xX=\max_{x\in X_i}\dim X_i$, while $\dim X$ is its chain dimension.

[F24] [[def-dimension-noetherian-topological-space]]: for a Noetherian
topological space, $\dim T$ is the supremum of the lengths of strict chains of
nonempty irreducible closed subsets of $T$, and $\dim\varnothing=-\infty$.

[F25] [[lem-dimension-finite-union-components]]: if a Noetherian space $T$ is a
finite union of closed subsets $T_1,\dots,T_m$, then
$\dim T=\max_i\dim T_i$, with both sides $-\infty$ for $m=0$.

[F26] [[def-interior-closure-boundary-top]]: the closure $\overline A$ is the
smallest closed superset of $A$, and $A$ is closed if and only if
$A=\overline A$.

[F27] [[def-singular-and-regular-loci-variety]]: for a reduced classical
finite-type space over an algebraically closed field $k$ and a closed point
$x$, one has $x\in X_{\mathrm{reg}}$ if and only if
$\dim_{\kappa(x)}T_xX=\dim_xX$; this classical component-dimension test assumes
AC.

[F28] [[lem-dominant-map-generic-differential-surjectivity-char-zero]]: under
AC, for $k$ algebraically closed of characteristic $0$ and a dominant morphism
of irreducible classical varieties, the set
$U=X_{\mathrm{reg}}\cap f^{-1}(Y_{\mathrm{reg}})\cap D(H)$ is a nonempty open
subset of $X$ with $f(U)\subseteq Y_{\mathrm{reg}}$ and $d_xf$ surjective at
every closed point $x\in U$.

[F29] [[def-classical-dominant-morphism-and-rational-map]]: a morphism is
dominant when the closure of its image is the target; for morphisms of
varieties this is density of the image.

[F30] [[lem-irreducibility-criteria-and-open-subspaces]]: an irreducible space
is nonempty and every nonempty open subspace of it is irreducible.

[F31] [[lem-irreducible-components-of-a-topological-space]]: under AC, the
closure of an irreducible subset is irreducible.

[F32] [topology] The continuous image of an irreducible space is irreducible:
the inverse image of a finite closed cover of the image is a finite closed
cover of the source.



## Proof

**Proof technique:** direct.

1.1 Setting. By [F2] the structure morphisms of $X$ and $Y$ are smooth, so every point of either variety has an affine neighbourhood carrying a standard smooth presentation [F3]; by [F4] the classical points of $X$ are its closed points and have residue field $k$, and by [F5] the classical varieties have the affine-model topology with residue field $k$, principal opens forming a basis. For a classical point $x$ of $X$ the differential $d_xf$ is the dual of the induced cotangent map [F10] and $T_xX$ is the finite-dimensional dual of $\mathfrak m_x/\mathfrak m_x^2$ [F11]. Define $C_r=\{x:\operatorname{rank}d_xf\le r\}$. We prove (1) that $C_r$ is closed in $X$, and (2) that $\dim\overline{f(C_r)}\le r$. [F1, F2, F3, F4, F5, F10, F11, given]

1.2 Charts at a prescribed point. Let $x_0\in X$. The structure morphism of $X$ is smooth, so [F2] provides an affine neighbourhood of $x_0$ whose coordinate ring is standard smooth after a principal shrinking; [F6] supplies finite affine covers of $X$ and of $Y$, [F5] lets us shrink to a principal open contained in any prescribed open neighbourhood, [F7] makes principal opens affine, and [F3] absorbs the principal shrinking into the presentation. Choose in this way an affine chart $V=\operatorname{Spec}C\subseteq Y$ containing $f(x_0)$, where $C=k[V]$ is standard smooth over $k$, and an affine chart $U=\operatorname{Spec}B\subseteq X$ containing $x_0$ with $f(U)\subseteq V$ and $B=k[U]$ standard smooth over $k$; write $B\cong(k[x_1,\dots,x_n]/(F_1,\dots,F_c))_g$ with leading $c\times c$ Jacobian minor mapping to a unit of $B$, and $d=n-c$. Let $y_1,\dots,y_m\in C$ be coordinate classes generating $C$ as a $k$-algebra [F9]. [F2, F3, F5, F6, F7, F9]

1.3 Free differentials on the chart. By [F13] the module $\Omega_{B/k}$ is the cokernel of the transposed Jacobian map $B^c\to B^n$ of the presentation of $B$, and since the leading $c\times c$ minor is invertible, [F14] shows that this cokernel is free with $B$-basis the images $\mathrm du_{c+1},\dots,\mathrm du_n$ of the differentials of the free coordinates $u_{c+1},\dots,u_n\in B$. For a closed point $x\in U$, [F12] identifies $C_xU=\mathfrak m_x/\mathfrak m_x^2$ with $\Omega_{B/k}\otimes_B\kappa(x)$ naturally, so that $T_xU\cong(\Omega_{B/k}\otimes_B\kappa(x))^\vee$ by [F11], and the open immersion $U\hookrightarrow X$ identifies $T_xU$ with $T_xX$ and $d_x(f|_U)$ with $d_xf$ [F10]. [F10, F11, F12, F13, F14]

1.4 The pullback matrix. Let $\psi\colon C\to B$ be the $k$-algebra map induced by $f|_U\colon U\to V$, under the correspondence of [F8]. By [F15] there is a canonical $B$-linear functoriality map $\gamma\colon B\otimes_C\Omega_{C/k}\to\Omega_{B/k}$, $b\otimes\mathrm dc\mapsto b\,\mathrm d(\psi c)$; by [F13] the differentials $\mathrm dy_1,\dots,\mathrm dy_m$ generate the $C$-module $\Omega_{C/k}$, so their images generate $B\otimes_C\Omega_{C/k}$. Since $\mathrm du_{c+1},\dots,\mathrm du_n$ is a $B$-basis of $\Omega_{B/k}$ [F14], there are unique regular functions $a_{ij}\in B$ with $$\mathrm d(\psi y_j)=\sum_{i=c+1}^{n}a_{ij}\,\mathrm du_i\qquad(c<i\le n,\ 1\le j\le m);$$ denote by $A=(a_{ij})$ the resulting $(n-c)\times m$ matrix over $B$. [F8, F13, F14, F15]

1.5 Rank identity on the chart. For every closed point $x\in U$ with $y=f(x)$ one has $\operatorname{rank}d_xf=\operatorname{rank}A(x)$, where $A(x)$ is the matrix over $\kappa(x)=k$ obtained by reducing the entries of $A$ modulo $\mathfrak m_x$; more precisely the two ranks equal the rank of the fibre $\gamma_x=\gamma\otimes_B\kappa(x)$. Indeed, the cotangent map $\bar\psi_x^\sharp\colon C_yV\to C_xU$ corresponds under the natural isomorphisms of [F12] to $\gamma_x\colon\Omega_{C/k}\otimes_C\kappa(y)\to\Omega_{B/k}\otimes_B\kappa(x)$ — the source is identified with $(B\otimes_C\Omega_{C/k})\otimes_B\kappa(x)$ by [F16] — and $d_x(f|_U)$ is the dual of $\bar\psi_x^\sharp$ by [F10], hence has the same rank as $\bar\psi_x^\sharp$ by [F17] because these spaces are finite-dimensional [F11]; moreover $\gamma_x(\mathrm dy_j\otimes1)=\mathrm d(\psi y_j)\otimes1=\sum_i a_{ij}(x)\,(\mathrm du_i\otimes1)$, the elements $\mathrm dy_j\otimes1$ generate the source over $k$ [F13], and $(\mathrm du_i\otimes1)_{i>c}$ is a $k$-basis of the target [F14], so by [F18] the rank of $\gamma_x$ is the rank of the matrix $A(x)$; finally $\operatorname{rank}d_x(f|_U)=\operatorname{rank}d_xf$ because $U\hookrightarrow X$ and $V\hookrightarrow Y$ are open immersions inducing tangent isomorphisms [F10]. [F10, F11, F12, F13, F14, F16, F17, F18]

1.6 Decomposition into components. As a closed subvariety of $X$, the set $C_r$ is Noetherian with finitely many irreducible components $Z_1,\dots,Z_s$ [F6]; each $Z_i$ is an irreducible closed subvariety of $X$, hence an irreducible classical variety. The image $f(Z_i)$ is irreducible as the continuous image of an irreducible space [F32], so its closure $W_i:=\overline{f(Z_i)}$ in $Y$ is an irreducible closed subvariety of $Y$, i.e. an irreducible classical variety [F31]; the induced morphism $f|_{Z_i}\colon Z_i\to W_i$ is dominant because $f(Z_i)$ is dense in $W_i$ [F29]. [F6, F29, F31, F32]

1.7 Generic surjectivity on a component. Fix $i$. By [F28] applied to the dominant morphism $f|_{Z_i}$ of irreducible classical varieties there is a nonempty open subset $U_i\subseteq Z_i$ with $U_i\subseteq(Z_i)_{\mathrm{reg}}\cap f^{-1}\bigl((W_i)_{\mathrm{reg}}\bigr)$ and with $d_x(f|_{Z_i})\colon T_xZ_i\to T_{f(x)}W_i$ surjective at every closed point $x\in U_i$; in particular $f(x)\in(W_i)_{\mathrm{reg}}$. Choose a point $x\in U_i$, which is possible because $U_i$ is nonempty [F30], and put $y=f(x)\in(W_i)_{\mathrm{reg}}$. [F28, F30]

1.8 Closed subvarieties have injective differentials. Let $j\colon Z'\hookrightarrow U'$ be the inclusion of a closed subvariety of an affine chart $U'$ of $X$, with vanishing ideal $I\subseteq B'=k[U']$, so that $k[Z']=B'/I$ [F9, F22], and let $z\in Z'$ be a point. Then $\mathcal O_{Z',z}\cong(B'/I)_{\mathfrak m_z}\cong B'_{\mathfrak m_z}/IB'_{\mathfrak m_z}=\mathcal O_{U',z}/I\mathcal O_{U',z}$ by [F20] and [F21], the maximal ideal of this quotient is $\mathfrak m_z/I\mathcal O_{U',z}$ with $I\subseteq\mathfrak m_z$, and $(\mathfrak m_z/I\mathcal O)/(\mathfrak m_z/I\mathcal O)^2\cong\mathfrak m_z/(\mathfrak m_z^2+I\mathcal O_{U',z})$ by [F19]; hence the natural map $\mathfrak m_z/\mathfrak m_z^2\to\mathfrak m_{Z'}/\mathfrak m_{Z'}^2$ is surjective [F19], and its dual is injective [F18]. By [F10] that dual is exactly the differential $d_zj\colon T_zZ'\to T_zU'$ of the inclusion, so $d_zj$ is injective. [F9, F10, F18, F19, F20, F21, F22]

2.1 Determinantal description and local closedness. Let $x\in U$ be a closed point. Since the entries $a_{ij}(x)\in k$ are the images of the regular functions $a_{ij}$ under $B\to B/\mathfrak m_x=k$, the $(r+1)\times(r+1)$ minors of $A(x)$ are the images of the corresponding minors of $A$; by [F18] the inequality $\operatorname{rank}A(x)\le r$ holds if and only if every one of those minors vanishes. By step 1.5 this says $\operatorname{rank}d_xf\le r$ if and only if every $(r+1)\times(r+1)$ minor of $A$ lies in $\mathfrak m_x$. Let $J_U\subseteq B$ be the ideal generated by all these minors; by [F22] the closed subvariety $V(J_U)\subseteq U$ has as its points exactly the maximal ideals of $B$ containing $J_U$, which are precisely the closed points $x\in U$ with $\operatorname{rank}d_xf\le r$. Hence $C_r\cap U=V(J_U)$ is closed in $U$. [F18, F22, F9, step 1.5]

2.2 Rank comparison. Let $U$ and $V$ be the affine charts around $x$ and $f(x)$ with $f(U)\subseteq V$ constructed in step 1.2; note $y=f(x)\in V$. The restrictions $Z_i\cap U\subseteq U$ and $W_i\cap V\subseteq V$ are closed subvarieties of these affine charts [F5] with inclusion differentials that, under the open-immersion tangent isomorphisms $Z_i\cap U\subseteq Z_i$, $U\subseteq X$, $W_i\cap V\subseteq W_i$ and $V\subseteq Y$ [F10], are the differentials $d_x\iota$ and $d_y\kappa$ of the closed inclusions $\iota\colon Z_i\hookrightarrow X$ and $\kappa\colon W_i\hookrightarrow Y$; by step 1.8 both $d_x\iota$ and $d_y\kappa$ are injective. The chain rule of [F10] applied to the identity $\kappa\circ(f|_{Z_i})=f\circ\iota$ gives $d_y\kappa\circ d_x(f|_{Z_i})=d_xf\circ d_x\iota$; since $d_y\kappa$ is injective, [F18] yields $\operatorname{rank}d_x(f|_{Z_i})=\operatorname{rank}(d_xf\circ d_x\iota)\le\operatorname{rank}d_xf$. As $x\in Z_i\subseteq C_r$ we have $\operatorname{rank}d_xf\le r$, so $\operatorname{rank}d_x(f|_{Z_i})\le r$. [F5, F10, F18, step 1.2, step 1.8]

3.1 Global closedness. The charts $U$ produced by step 1.2, as $x_0$ ranges over the classical points of $X$, cover $X$; by step 2.1 each $C_r\cap U$ is closed in $U$, hence $X\setminus C_r$ is open: a point $x\notin C_r$ lies in one of these charts $U$, and $U\setminus(C_r\cap U)$ is an open neighbourhood of $x$ contained in $X\setminus C_r$. By [F26] the set $C_r$ therefore equals its closure in $X$ and is a closed subset of the classical variety $X$; with the reduced structure induced from $X$ it is a closed subvariety of $X$ [F5], which is claim 1. [F5, F26, step 1.2, step 2.1]

3.2 Dimension of the image of each component. By step 1.7 the differential $d_x(f|_{Z_i})$ is surjective, so by [F18] $$\operatorname{rank}d_x(f|_{Z_i})=\dim_kT_yW_i.$$ Since $y\in(W_i)_{\mathrm{reg}}$ and $W_i$ is irreducible, [F27] gives $\dim_kT_yW_i=\dim_yW_i$, and [F23] gives $\dim_yW_i=\dim W_i$. Therefore $\dim W_i=\operatorname{rank}d_x(f|_{Z_i})\le r$ by step 2.2. [F18, F23, F27, step 1.7, step 2.2]

4.1 Assembling the closure. Since $C_r=Z_1\cup\cdots\cup Z_s$, one has $f(C_r)=f(Z_1)\cup\cdots\cup f(Z_s)$. The finite union $W_1\cup\cdots\cup W_s$ of the closed sets $W_i=\overline{f(Z_i)}$ is closed and contains $f(C_r)$, so $\overline{f(C_r)}\subseteq W_1\cup\cdots\cup W_s$ by [F26]; conversely each $W_i=\overline{f(Z_i)}$ is contained in $\overline{f(C_r)}$ because $f(Z_i)\subseteq f(C_r)$ and $\overline{f(C_r)}$ is closed [F26]. Hence $\overline{f(C_r)}=W_1\cup\cdots\cup W_s$, a finite union of closed subsets of the Noetherian space $Y$ [F6]; by [F25] its dimension is $\max_i\dim W_i$, which is at most $r$ by step 3.2, and for $C_r=\varnothing$, when the list $W_1,\dots,W_s$ is empty, both the maximum and $\dim\varnothing$ are $-\infty$ by [F24], which is at most $r$. This is claim 2. [F6, F23, F24, F25, F26, step 3.2]

5.1 Boundary and scope dispositions. Empty: $X$ and $Y$ may be empty or reducible, and no irreducibility is assumed; for $X=\varnothing$ the set $C_r$ is empty and closed and $\dim\overline{f(C_r)}=\dim\varnothing=-\infty\le r$ by [F24], while for $Y=\varnothing$ also $X=\varnothing$ because a morphism into the empty scheme has empty source. Zero: $r=0$ is allowed, and then $C_0$ consists of the points where the differential vanishes; the relative dimension $n-c=0$ of step 1.2 is allowed, in which case $\Omega_{B/k}=0$ by [F14], the matrix $A$ has no rows, its rank is $0$, and $C_r\cap U=U$ for every $r\ge0$ with $\dim\overline{f(U)}\le\dim V=0$ when $V$ is a point. One: nothing in the argument divides by a natural number or requires a positive relative dimension or a positive number of coordinate functions; for $m=0$, when $V$ is a single point, the matrix $A$ has no columns, $\gamma=0$ and $C_r\cap U=U$, in agreement with claim 2. Degenerate: the smoothness of $X$ in claim 1 is essential and cannot be dropped — for the singular closed subvariety $X=V(xy)\subseteq\mathbf A^2_k$, the morphism $f\colon X\to\mathbf A^1_k$, $(x,y)\mapsto x$, has $\operatorname{rank}d_{(0,b)}f=0$ for every $b\ne0$ while $\operatorname{rank}d_{(0,0)}f=1$, so the corresponding $C_0$ is the punctured $y$-axis, not closed; reducible and disconnected smooth $X$ are nevertheless allowed, and claim 2 does not use the smoothness of $Y$, the argument for it needing only the local presentation of $Y$ with coordinate functions generating its coordinate ring. Endpoints: the integer $r$ ranges over $r\ge0$ with no upper bound, and claim 2 is trivial for $r\ge\dim Y$ since $\dim\overline{f(C_r)}\le\dim Y$; the marginal case $r=0$ with $C_0=\varnothing$ is covered by the empty-list convention $-\infty\le0$ of step 4.1, while the case in which $U_i$ is a single point is covered because the surjectivity conclusion of [F28] persists at every closed point of $U_i$. Nonempty-choice: AC is declared as [F1] and is used exactly through the AC-assuming suppliers [F4] (classical-scheme dictionary), [F6] (finite component decompositions), [F7] (principal opens), [F20] (local rings), [F22] (Nullstellensatz correspondence), [F27] (regular-point tangent criterion), [F28] (generic differential surjectivity) and [F31] (closures of irreducible sets), cited at steps 1.1, 1.2, 1.6, 1.7, 1.8 and 4.1; the chart, matrix, determinantal and rank-comparison computations of steps 1.3, 1.4, 1.5, 2.1, 2.2 and the local-ring duality of step 1.8 are choice-free, and no family of nonempty sets is selected anywhere. Biconditional directions: the statement asserts no equivalence, so the forward and reverse directions of a biconditional are not applicable; the only equivalence used inside the proof is the determinantal criterion of [F18], applied in step 2.1 in the direction "all $(r+1)$-minors vanish implies rank at most $r$" and conversely, and the cotangent isomorphisms of [F12] are used only through their naturality. [F1, F4, F6, F7, F14, F18, F19, F20, F22, F24, F27, F28, F31, step 1.2, step 4.1] ∎




## Source qualification

Vakil, Classes 51-52, §3.4 proves the corresponding statement for morphisms of
finite-type $k$-schemes over an algebraically closed (or at least perfect) field
of characteristic $0$: the locus $X_r$ where the rank of the tangent map is at
most $r$ is a closed subset, and the dimension of the image of $X_r$ is at most
$r$; the proof replaces the source by an irreducible component of $X_r$ and the
target by the closure of the image of that component, and then applies generic
smoothness on the source together with the linear-algebra observation that
restricting a linear map to subspaces cannot increase its rank. The present
lemma keeps the smoothness of $X$ and $Y$ from the section's standing
hypotheses: the source's assertion that the critical locus is cut out by
determinantal equations is not available for an arbitrary singular source —
the degenerate case recorded in step 5.1 shows this — so claim 1 is proved here
from the standard smooth charts of $X$, on which the differential is described
by regular functions, and the rank comparison of step 1.8 supplies the
subspace step of the source's reduction directly. The argument uses the
smoothness of $Y$ only to choose a local presentation with coordinate functions
generating its coordinate ring, so the same proof covers an arbitrary classical
$Y$. Characteristic $0$ enters only through
[[lem-dominant-map-generic-differential-surjectivity-char-zero]] in step 1.7;
claim 1 is characteristic-free. The determinantal closedness of step 2.1 is the
classical Jacobian-minor computation (Milne, Algebraic Geometry, §4d,
Definition 4.22, in the equation-row convention) applied on the charts, and the
local-ring duality of step 1.8 replaces the
source's implicit identification of the tangent space of a closed subvariety
with a subspace of the tangent space of the ambient variety.
