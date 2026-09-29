---
id: ex-hom-pairing-over-a-nonsplit-field
kind: example
title: "A nonsplit simple has Hom-pairing diagonal two"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
deps:
  - thm-split-simple-projective-hom-pairing-has-dual-bases
  - thm-projective-hom-pairing-is-additive-and-graded-sesquilinear
  - def-projective-simple-hom-pairing-on-grothendieck-groups
  - thm-finite-length-grothendieck-groups-have-simple-class-bases
  - thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis
  - def-graded-grothendieck-group-shift-module-and-cartan-map
  - def-split-grothendieck-group-of-an-additive-category
  - def-grothendieck-group-of-an-essentially-small-abelian-category
  - thm-complex-numbers-form-a-field
  - cor-complex-numbers-are-a-quadratic-real-extension
  - def-field
  - def-division-ring
  - def-algebra-over-a-commutative-ring
  - def-left-and-right-modules
  - def-simple-module
  - def-submodule
  - def-quotient-module
  - def-module-homomorphism-kernel-image-and-cokernel
  - thm-modules-over-a-ring-form-an-abelian-category
  - def-abelian-category
  - def-direct-sum-of-a-family-of-modules
  - def-object-of-finite-length
  - def-composition-series-and-composition-factors-of-an-object
  - thm-rank-nullity
  - thm-dimension-of-a-linear-subspace
  - cor-dimension-of-a-direct-sum
  - def-projective-module
  - def-essential-epimorphism-and-projective-cover
  - def-vector-space-of-linear-maps
  - prop-linear-maps-form-a-vector-space
  - cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension
justified_by: []
forward_refs: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, §2.2 (pairing conventions only)"
      url: "https://arxiv.org/pdf/0909.4844"
generation:
  role: example
pipeline_run: frontier-36-complete
---

## Example

Let $k=\mathbb R$ and let $A=\mathbb C$ be the complex field regarded as a
unital associative $\mathbb R$-algebra
([[def-algebra-over-a-commutative-ring]],
[[thm-complex-numbers-form-a-field]]). Write $S=P=\mathbb C$ for the regular
left $A$-module, and call a module **indecomposable** when it is nonzero and is
not the direct sum of two nonzero submodules. Then:

1. $S$ is simple, and up to isomorphism it is the only simple left $A$-module.
2. $P$ is projective and indecomposable, and up to isomorphism it is the only
   indecomposable finite-dimensional projective left $A$-module. Moreover
   $K_0(A)=\mathbb Z[P]$ and $G_0(A)=\mathbb Z[S]$, the classes of the regular
   module being the single basis elements.
3. $\langle[P],[S]\rangle_A=\dim_{\mathbb R}\operatorname{Hom}_A(P,S)
   =\dim_{\mathbb R}\operatorname{End}_{\mathbb C}(\mathbb C)=2$.

Consequently the dual-basis conclusion of
[[thm-split-simple-projective-hom-pairing-has-dual-bases]] fails for this
input: its hypothesis $\operatorname{End}_A(S_i)=k$ for every $i$ is not
satisfied, because the endomorphism ring of the simple module $S$ is
$\operatorname{End}_{\mathbb C}(\mathbb C)\cong\mathbb C$ of
$\mathbb R$-dimension $2$. The theorem's diagonal value
$\dim_k\operatorname{End}_A(S_i)$ still computes the pairing entry $2$; only
the duality of the two bases needs the splitting hypothesis, so that
hypothesis cannot be dropped.

## Facts & Assumptions

**Given:** The field $\mathbb R$, the complex field
$\mathbb C=\mathbb R[x]/(x^2+1)$ with its embedding of $\mathbb R$, and the
unital $\mathbb R$-algebra $A=\mathbb C$ whose multiplication is complex
multiplication. All modules are unital left modules. No axiom of choice is
assumed or used: the only selections are one nonzero element, one preimage, or
one submodule of maximal dimension at a time.

[F1] $\mathbb C=\mathbb R[x]/(x^2+1)$ is a field containing the embedded copy of $\mathbb R$; every complex number is uniquely $a+bi$ with $a,b\in\mathbb R$; and each nonzero element has a two-sided inverse ([[thm-complex-numbers-form-a-field]]).

[F2] The power basis of $\mathbb C$ over $\mathbb R$ is $1,i$, and $[\mathbb C:\mathbb R]=2$ ([[cor-complex-numbers-are-a-quadratic-real-extension]]).

[F3] A field has $0\ne1$, its multiplication is commutative, and every nonzero element $x$ has a multiplicative inverse $x^{-1}$ with $x\cdot x^{-1}=1$ ([[def-field]]); a division ring is a ring with $1\ne0$ in which every nonzero element is a unit ([[def-division-ring]]).

[F4] An $R$-algebra is a unital ring $A$ with a unital structure map $R\to A$ whose image is central, and the induced scalar action $ra=\eta_A(r)a$ makes $A$ an $R$-module with biadditive multiplication ([[def-algebra-over-a-commutative-ring]]).

[F5] A left $R$-module has a scalar action satisfying $r(m+n)=rm+rn$, $(r+s)m=rm+sm$, $(rs)m=r(sm)$ and $1_Rm=m$ ([[def-left-and-right-modules]]).

[F6] A subset $N\subseteq M$ is a submodule when it is a subgroup of the additive group of $M$ and is closed under scalars ([[def-submodule]]).

[F7] A left $R$-module $M$ is simple if $M\ne0$ and its only submodules are $0$ and $M$ ([[def-simple-module]]).

[F8] A function $f:M\to N$ is an $R$-module homomorphism when $f(m+m')=f(m)+f(m')$ and $f(rm)=rf(m)$; its kernel is $\{m:f(m)=0_N\}$ and its image is $\{f(m):m\in M\}$ ([[def-module-homomorphism-kernel-image-and-cokernel]]).

[F9] For a submodule $N\le M$ the additive cosets form the quotient module $M/N$ with scalar action $r(m+N)=rm+N$ ([[def-quotient-module]]).

[F10] For every ring $R$ the category of left $R$-modules is abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]); an abelian category is additive, every morphism has a kernel and a cokernel, and the canonical coimage-to-image comparison is an isomorphism ([[def-abelian-category]]).

[F11] The direct sum $\bigoplus_{i\in I}M_i$ of a family of left $R$-modules is the submodule of the product formed by the finitely supported families, with coordinatewise operations; for $I=\varnothing$ it is the zero module ([[def-direct-sum-of-a-family-of-modules]]).

[F12] A left $R$-module $P$ is projective if every homomorphism $f:P\to M$ lifts along every surjective module homomorphism $q:E\to M$ ([[def-projective-module]]).

[F13] An essential epimorphism is a surjection whose kernel is superfluous, meaning $N+\ker\pi=P$ forces $N=P$; a projective cover is an essential epimorphism with projective source ([[def-essential-epimorphism-and-projective-cover]]).

[F14] For a finite-dimensional unital algebra over a field, one finite-dimensional projective cover per simple isomorphism class forms a free abelian basis of the split $K_0$ of finite-dimensional projectives; each selected cover is indecomposable, the selected covers are pairwise nonisomorphic, and every finite-dimensional projective is a finite direct sum of them ([[thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis]]).

[F15] The space $\mathcal L(V,W)$ of linear maps between vector spaces over a field $F$ is a vector space under pointwise addition and scalar multiplication ([[def-vector-space-of-linear-maps]], [[prop-linear-maps-form-a-vector-space]]).

[F16] Two finite-dimensional vector spaces over the same field are linearly isomorphic if and only if they have the same dimension ([[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]]).

[F17] If $T:V\to W$ is linear and $V$ is finite-dimensional, then $\dim_F V=\dim_F(\ker T)+\dim_F(\operatorname{im}T)$ ([[thm-rank-nullity]]).

[F18] For a finite-dimensional algebra $A$, $G_0(A)$ is the $G_0$ of the finite-dimensional left $A$-module category and $K_0(A)$ is the split Grothendieck group of finite-dimensional projective left $A$-modules; $G_0$ imposes $[Y]=[X]+[Z]$ for every short exact sequence $0\to X\to Y\to Z\to0$ ([[def-graded-grothendieck-group-shift-module-and-cartan-map]], [[def-split-grothendieck-group-of-an-additive-category]], [[def-grothendieck-group-of-an-essentially-small-abelian-category]]).

[F19] In an essentially small abelian category in which every object has finite length, the simple isomorphism classes form a free abelian basis of $G_0$ ([[thm-finite-length-grothendieck-groups-have-simple-class-bases]]).

[F20] For a finite-dimensional unital algebra the object-level generator value of the projective/module pairing is $h(P,M)=\dim_k\operatorname{Hom}_A(P,M)$ ([[def-projective-simple-hom-pairing-on-grothendieck-groups]]).

[F21] That generator value extends uniquely to a $\mathbb Z$-bilinear pairing $\langle-,-\rangle:K_0(A)\times G_0(A)\to\mathbb Z$ ([[thm-projective-hom-pairing-is-additive-and-graded-sesquilinear]]).

[F22] For finite-dimensional projective covers $P_i$ of representatives $S_i$ of the simple classes, the pairing matrix is $\langle[P_i],[S_j]\rangle=\delta_{ij}\dim_k\operatorname{End}_A(S_i)$, and the two bases are dual whenever $\operatorname{End}_A(S_i)=k$ for every $i$ ([[thm-split-simple-projective-hom-pairing-has-dual-bases]]).

[F23] An object of an abelian category has finite length when it admits a composition series ([[def-object-of-finite-length]]).

[F24] A composition series of an object $A$ is a finite strict chain $0=A_0<\cdots<A_n=A$ whose quotient objects $A_i/A_{i-1}$ are simple ([[def-composition-series-and-composition-factors-of-an-object]]).

[F25] If $V$ is finite-dimensional over a field with $\dim_F V=n$ and $U$ is a linear subspace, then $U$ is finite-dimensional with $\dim_F U\le n$, and $\dim_F U=n$ if and only if $U=V$ ([[thm-dimension-of-a-linear-subspace]]).

[F26] If $V=\bigoplus_{i<n}U_i$ is a direct sum of finite-dimensional subspaces, then $V$ is finite-dimensional with $\dim_F V=\sum_{i<n}\dim_F U_i$, and in particular $\dim_F(U\oplus W)=\dim_F U+\dim_F W$ ([[cor-dimension-of-a-direct-sum]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], $A=\mathbb C$ is a field containing the embedded copy of $\mathbb R$, and every element of $A$ is uniquely $a+bi$ with $a,b\in\mathbb R$. By [F3] every nonzero element of the field $A$ is a unit with two-sided inverse, so $A$ is a division ring; by [F4], with the embedding of $\mathbb R$ in the commutative field $A$, it is a unital associative $\mathbb R$-algebra whose scalar action is restriction of complex multiplication. By [F2], $1,i$ is an $\mathbb R$-basis, so $\dim_{\mathbb R}A=2$. [F1, F2, F3, F4, given, algebra]

1.2 Let $N\le S=A$ be a submodule of the regular module [F6] and suppose $0\ne x\in N$. For $y\in A$ the element $yx^{-1}$ lies in $A$, so closure under scalars [F6] gives $y=(yx^{-1})x\in N$. Hence $N=A$, and the only submodules of $S$ are $0$ and $S$. Since $S\ne0$, [F7] makes $S$ simple. [F1, F3, F5, F6, F7, given, algebra]

1.3 Let $T$ be a simple left $A$-module [F7] and choose $0\ne t\in T$. The map $\varphi:A\to T$, $\varphi(x)=xt$, is $A$-linear: $\varphi(x+y)=(x+y)t=xt+yt$ and $\varphi(ax)=(ax)t=a(xt)$ for $a,x,y\in A$, by the module axioms [F5], which is exactly the two clauses of [F8]. If $\varphi(x)=0$ with $x\ne0$, then $t=1\cdot t=(x^{-1}x)t=x^{-1}(xt)=0$ by [F5], a contradiction; hence $\ker\varphi=0$ and $\varphi$ is injective. Its image is a submodule of $T$ containing $t\ne0$, so simplicity [F7] forces $\operatorname{im}\varphi=T$. Therefore $\varphi$ is an isomorphism of $A$-modules and $T\cong A=S$: up to isomorphism, $S$ is the only simple left $A$-module. [F1, F3, F5, F7, F8, given, algebra]

1.4 The regular module $P=A$ is projective in the sense of [F12]: if $q:E\to M$ is a surjective $A$-module homomorphism and $f:A\to M$ is $A$-linear, choose $e\in E$ with $q(e)=f(1)$; then $\widetilde f(x)=xe$ defines an $A$-linear map $\widetilde f:A\to E$ by [F5], and $q(\widetilde f(x))=xq(e)=xf(1)=f(x)$ for all $x\in A$, using the $A$-linearity of $f$ [F8]. The identity map $A\to A$ is surjective with kernel $0$, which is superfluous: if $N\le A$ and $N+0=A$, then $N=A$. Hence the identity $P\to S$ is a projective cover of $S$ in the sense of [F13], with projective finite-dimensional source $P=A=S$ of $\mathbb R$-dimension $2$ by [F2]. [F2, F5, F8, F12, F13, given, choose, algebra]

1.5 Evaluation at $1$ is an $\mathbb R$-linear bijection $\operatorname{ev}:\operatorname{Hom}_A(P,S)\to A$, $\operatorname{ev}(f)=f(1)$; here $\operatorname{Hom}_A(P,S)$ is an $\mathbb R$-vector subspace of $\mathcal L_{\mathbb R}(A,A)$ by [F15], and $\operatorname{ev}$ is $\mathbb R$-linear because addition and scalar multiplication of homomorphisms are pointwise. It is injective: if $f(1)=0$, then $f(x)=xf(1)=0$ for every $x\in A$ by the second clause of [F8]. It is surjective: for $\lambda\in A$ the map $x\mapsto x\lambda$ is $A$-linear by [F5] and has value $\lambda$ at $1$. Hence $\operatorname{Hom}_A(P,S)\cong A=\mathbb C$ as $\mathbb R$-vector spaces, and [F16] with $\dim_{\mathbb R}\mathbb C=2$ from [F2] gives $\dim_{\mathbb R}\operatorname{Hom}_A(P,S)=2$. [F1, F2, F5, F8, F15, F16, given, construct, algebra]

2.1 The algebra $A$ is finite-dimensional over $k=\mathbb R$ by step 1.1, and by step 1.3 the single module $S=A$ represents all simple left $A$-modules; step 1.4 supplies a finite-dimensional projective cover $\mathrm{id}:P\to S$ of that representative. Applying [F14] to this data: the split Grothendieck group $K_0(A)$ of finite-dimensional projective left $A$-modules [F18] is the free abelian group with basis $[P]$, the cover $P$ is indecomposable, and every finite-dimensional projective left $A$-module is a finite direct sum of copies of $P$ [F11]. If a nonzero finite-dimensional projective $X$ is isomorphic to $\bigoplus_{i=1}^{m}P$ with $m\ge0$, then $m\ge1$ because $X\ne0$; if $m\ge2$, then $X=P\oplus\bigoplus_{i=2}^{m}P$ exhibits $X$ as a direct sum of two nonzero submodules, contradicting indecomposability. Hence $m=1$ and $X\cong P$: up to isomorphism, $P$ is the only indecomposable finite-dimensional projective left $A$-module. [F11, F14, F18, step 1.1, step 1.3, step 1.4, given, construct, algebra]

2.2 We verify the hypotheses of [F19] for the full subcategory $\mathcal M$ of finite-dimensional left $A$-modules [F18]. First, $\mathcal M$ is abelian: the category of all left $A$-modules is abelian [F10]; inside $\mathcal M$ the zero module and finite biproducts exist, a finite biproduct of finite-dimensional modules having finite-dimensional underlying space by [F26]; and kernels, images and cokernels of $A$-linear maps of finite-dimensional modules are again finite-dimensional — kernels and images are $\mathbb R$-linear subspaces of finite-dimensional spaces, hence finite-dimensional and of no larger dimension by [F25], while a cokernel $N/\operatorname{im}f$ is the image of the quotient map, so [F9] and [F17] give $\dim_{\mathbb R}N=\dim_{\mathbb R}(\operatorname{im}f)+\dim_{\mathbb R}(N/\operatorname{im}f)$ — so the abelian-category clauses of [F10] hold in the full subcategory. Second, $\mathcal M$ is essentially small: for each $n\ge0$ the module structures on the $\mathbb R$-vector space $\mathbb R^n$ are given by the $\mathbb R$-bilinear maps $A\times\mathbb R^n\to\mathbb R^n$ satisfying the axioms [F5], and these maps form a set; every finite-dimensional module is isomorphic to one of these models after choosing an $\mathbb R$-basis. Third, every object of $\mathcal M$ has finite length in the sense of [F23], by induction on $\dim_{\mathbb R}M$: for $M=0$ the empty chain is a composition series [F24]; for $M\ne0$ choose a proper submodule $N\le M$ of maximal $\mathbb R$-dimension [F6] among the finite set of dimensions of proper submodules (the zero submodule is proper because $M\ne0$). If $N<N'<M$, then $N'/N\ne0$ and the quotient map $N'\to N'/N$ is $\mathbb R$-linear with kernel $N$, so [F17] gives $\dim_{\mathbb R}N'=\dim_{\mathbb R}N+\dim_{\mathbb R}(N'/N)>\dim_{\mathbb R}N$, contradicting maximality among proper submodules. If $M/N$ had a proper nonzero submodule $U$, its inverse image $N'$ under the quotient map $q:M\to M/N$ would be a submodule by [F6], [F8] and [F9]; surjectivity of $q$ and $\ker q=N$ would give $N<N'<M$, which was just excluded. Since $N<M$, the quotient $M/N$ is nonzero and therefore simple [F7]. Also $\dim_{\mathbb R}N<\dim_{\mathbb R}M$ by [F25], so by induction $N$ has a finite composition series, and appending the top object $M$, whose quotient $M/N$ is simple, gives a composition series of $M$ in the sense of [F24]. Since by step 1.3 the single module $S$ represents all simple classes, [F18] and [F19] give $G_0(A)\cong\mathbb Z[S]$, with the class $[S]$ of the regular module as the only basis element. [F6, F7, F8, F9, F10, F17, F18, F19, F23, F24, F25, F26, step 1.3, given, induction, choose, construct, algebra]

3.1 By steps 2.1 and 2.2, $[P]$ is the single basis class of $K_0(A)$ and $[S]$ the single basis class of $G_0(A)$, so the well-defined pairing of [F21] takes the value $\langle[P],[S]\rangle_A=h(P,S)=\dim_{\mathbb R}\operatorname{Hom}_A(P,S)=2$ of [F20] and step 1.5. By [F22] the pairing matrix in these bases has the single entry $\dim_k\operatorname{End}_A(S)=\dim_{\mathbb R}\operatorname{End}_{\mathbb C}(\mathbb C)$, and the evaluation argument of step 1.5 with $P=S=A$ identifies $\operatorname{End}_A(S)\cong A=\mathbb C$ as $\mathbb R$-vector spaces, of dimension $2$ by [F2]; so the entry is $2$. The bases $[P]$ and $[S]$ would be dual exactly if this single matrix entry were $1$, which it is not. In particular the hypothesis of [F22] that $\operatorname{End}_A(S_i)=k$ for every $i$ is false here: $\operatorname{End}_A(S)\cong\mathbb C$ has $\mathbb R$-dimension $2$, so it is not the scalar field $k=\mathbb R$, and the dual-basis conclusion fails for this input. Hence that hypothesis cannot be dropped from the theorem. [F1, F2, F16, F20, F21, F22, step 2.1, step 2.2, step 1.5, algebra] $\square$

## Remark

The computation follows the pairing conventions of Kleshchev, §2.2, under which
the graded Cartan pairing is evaluated on projective and simple classes; that
source assumes an algebraically closed ground field, which is not imported
here. The failure of duality is a genuine feature of the nonsplit input
$A=\mathbb C$ over $k=\mathbb R$: the simple module is its own projective cover,
yet its endomorphism ring is strictly larger than the ground field, so the
single pairing entry is $2$.
