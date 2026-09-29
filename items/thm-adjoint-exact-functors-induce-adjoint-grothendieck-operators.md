---
id: thm-adjoint-exact-functors-induce-adjoint-grothendieck-operators
kind: theorem
title: "Exact adjoints induce adjoint operators on Grothendieck groups"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-grothendieck-group-universal-properties-and-functoriality
  - thm-projective-hom-pairing-is-additive-and-graded-sesquilinear
  - thm-the-adjunction-hom-set-bijection-under-local-smallness
  - def-k-linear-category-and-k-linear-functor
  - def-small-locally-small-and-large-category
  - def-abelian-category
  - def-exact-functor-between-abelian-categories
  - def-additive-category
  - thm-modules-over-a-ring-form-an-abelian-category
  - lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise
  - def-projective-module
  - def-finitely-generated-graded-projective-module
  - def-graded-ring-module-bimodule-and-internal-shift
  - def-graded-balanced-tensor-product-and-homogeneous-hom
  - cor-dimensions-of-matrix-and-linear-map-spaces
  - cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension
  - thm-graded-bimodule-tensor-hom-adjunction
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, §2.2 (graded pairing convention only)"
      url: "https://arxiv.org/pdf/0909.4844"
pipeline_run: frontier-36-complete
---

## Statement

Let $k$ be a field and let $A,B$ be finite-dimensional unital associative
$k$-algebras. Write $A\text{-}\mathrm{mod}_{\mathrm{fd}}$ and
$B\text{-}\mathrm{mod}_{\mathrm{fd}}$ for their categories of finite-dimensional
left modules. Let
$F:A\text{-}\mathrm{mod}_{\mathrm{fd}}\to B\text{-}\mathrm{mod}_{\mathrm{fd}}$
and
$G:B\text{-}\mathrm{mod}_{\mathrm{fd}}\to A\text{-}\mathrm{mod}_{\mathrm{fd}}$
be exact $k$-linear adjoint functors $F\dashv G$, and suppose $F$ sends
finite-dimensional projective modules to finite-dimensional projective
modules. The induced maps
$F_*:K_0(A)\to K_0(B)$ and $G_*:G_0(B)\to G_0(A)$ then satisfy

$\langle F_*[P],[N]\rangle_B=\langle[P],G_*[N]\rangle_A$

for every finite-dimensional projective left $A$-module $P$ and
finite-dimensional left $B$-module $N$.

For the graded analogue, let $A,B$ be finite-dimensional unital associative
$\mathbb Z$-graded $k$-algebras, and let $F,G$ be exact $k$-linear adjoints
between their finite-dimensional graded-module categories with degree-zero
maps. Assume $F$ preserves finite graded projectives, and that there are
natural degree-zero isomorphisms
$F(M\{r\})\cong F(M)\{r\}$ and $G(N\{r\})\cong G(N)\{r\}$ for every
$r\in\mathbb Z$. The graded transposition is the one obtained from the
degree-zero adjunction after using these shift isomorphisms. Then the induced
maps
$F_*:K_0^{\mathrm{gr}}(A)\to K_0^{\mathrm{gr}}(B)$ and
$G_*:G_0^{\mathrm{gr}}(B)\to G_0^{\mathrm{gr}}(A)$ are
$\mathbb Z[v,v^{-1}]$-linear and satisfy

$$\langle F_*x,y\rangle_{B,\mathrm{gr}}=\langle x,G_*y\rangle_{A,\mathrm{gr}}$$

for all $x\in K_0^{\mathrm{gr}}(A)$ and
$y\in G_0^{\mathrm{gr}}(B)$. No axiom of choice is assumed or used.

## Facts & Assumptions

**Given:** The field $k$, finite-dimensional unital associative $k$-algebras
$A,B$, exact $k$-linear adjoint functors as in the Statement, and the stated
projective-preservation and graded-shift hypotheses. All module categories
here use left modules; graded-category morphisms preserve degree.

[F1] The ungraded pairing has value
$\dim_k\operatorname{Hom}_A(P,M)$, and the graded pairing has value
$\sum_d v^d\dim_k\operatorname{Hom}_{A,d}(P,M)$; both descend to the stated
Grothendieck groups ([[thm-projective-hom-pairing-is-additive-and-graded-sesquilinear]]).

[F2] Exact functors induce maps on $G_0$, and additive functors induce maps on
split $K_0$ ([[thm-grothendieck-group-universal-properties-and-functoriality]]).

[F3] For a locally small adjunction $F\dashv G$, transposition is a natural
bijection
$\operatorname{Hom}(F X,Y)\cong\operatorname{Hom}(X,G Y)$ with forward map
$u\mapsto G(u)\circ\eta_X$
([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

[F4] In a $k$-linear category each Hom space is a $k$-vector space and
composition is $k$-bilinear; a $k$-linear functor acts $k$-linearly on Hom
spaces ([[def-k-linear-category-and-k-linear-functor]]).

[F5] The category of left modules over a ring is abelian
([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F6] The category $\operatorname{GrMod}_0(A)$ is abelian, with kernels,
cokernels, finite biproducts, and exactness computed degreewise
([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[F7] An abelian category is additive, and an additive category is preadditive
with all finite biproducts ([[def-abelian-category]],
[[def-additive-category]]).

[F8] A category is locally small when every Hom-collection is a set
([[def-small-locally-small-and-large-category]]).

[F9] Projective modules lift maps through epimorphisms, and exact functors
between abelian categories are additive
([[def-projective-module]],
[[def-exact-functor-between-abelian-categories]]).

[F10] A finite graded projective lifts degree-zero maps through degree-zero
epimorphisms ([[def-finitely-generated-graded-projective-module]]).

[F11] The shift is $(M\{r\})_i=M_{i-r}$, and a homogeneous map of degree $d$
sends $M_i$ into $N_{i+d}$
([[def-graded-ring-module-bimodule-and-internal-shift]],
[[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[F12] For finite-dimensional vector spaces $V,W$,
$\dim_k\operatorname{Hom}_k(V,W)=(\dim_kV)(\dim_kW)$
([[cor-dimensions-of-matrix-and-linear-map-spaces]]).

[F13] Finite-dimensional vector spaces over $k$ are linearly isomorphic if and
only if they have the same dimension
([[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]]).

[F14] For a graded $(B,A)$-bimodule, the graded tensor–Hom construction gives
a natural degree-zero adjunction between tensoring and homogeneous Hom
([[thm-graded-bimodule-tensor-hom-adjunction]]).

## Proof
**Proof technique:** direct.

1.1 The finite-dimensional left-module categories are essentially small abelian categories. In the ungraded case, [F5] makes the ambient module category abelian; kernels, cokernels, and finite biproducts of finite-dimensional modules remain finite-dimensional, so the full finite-dimensional subcategory is abelian by [F7]. For graded modules, [F6] gives the same conclusion degreewise. These categories are essentially small: every ungraded $n$-dimensional module is isomorphic to one on the standard vector space $k^n$, and its possible actions form a set of functions satisfying the module identities. Every finite-dimensional graded module is similarly isomorphic to a standard graded vector space specified by a finite-support dimension vector $\mathbb Z\to\mathbb N$; the possible graded actions on it form a set. Each such model uses bases only for one finite-dimensional object at a time. Morphisms are subsets of the set of linear maps between the underlying finite vector spaces, so the categories are locally small by [F4, F8, F12]. Their full subcategories of finite-dimensional projectives are essentially small and additive: zero objects and finite direct sums remain projective by the lifting properties in [F9, F10], and finite generation is preserved by taking the union of the finite generating families. Thus the universal group maps in [F2] apply to these categories. [F4, F5, F6, F7, F8, F9, F10, F12, given, choose, construct, algebra]

1.2 For fixed $P,N$, the adjunction bijection [F3] is $\Phi(u)=G(u)\circ\eta_P$. Since $G$ is $k$-linear by [F4] and composition is $k$-bilinear, $\Phi$ preserves addition and scalar multiplication: $\Phi(u+u')=\Phi(u)+\Phi(u')$ and $\Phi(\lambda u)=\lambda\Phi(u)$. Thus the set bijection [F3] is a $k$-linear isomorphism. Both Hom spaces are finite-dimensional because they are subspaces of the finite-dimensional linear-map spaces from [F12]. Consequently [F13] gives $\dim_k\operatorname{Hom}_B(FP,N) =\dim_k\operatorname{Hom}_A(P,GN)$. [F3, F4, F12, F13, given, algebra]

2.1 Exactness gives the induced maps on the two $G_0$ groups by [F2]. The functor $F$ is additive by [F9], and its projective-preservation hypothesis restricts it to an additive functor from finite projectives over $A$ to those over $B$; [F2] therefore gives $F_*$ on split $K_0$. The same reasoning applies in the graded categories. For every $r$, the natural shift isomorphisms identify $F(M\{r\})$ with $F(M)\{r\}$ and $G(N\{r\})$ with $G(N)\{r\}$, so their induced maps commute with multiplication by $v^r$. Hence all four induced maps are $\mathbb Z[v,v^{-1}]$-linear where applicable. [F2, F9, F10, F11, step 1.1, given, construct]

2.2 For every $d\in\mathbb Z$, a degree-$d$ map $F(P)\to N$ is the same underlying map as a degree-zero map $F(P)\{d\}\to N$, by [F11]. Use the natural shift isomorphism $\alpha_{P,d}:F(P\{d\})\xrightarrow{\cong}F(P)\{d\}$ and precompose with $\alpha_{P,d}$ to obtain a degree-zero map $F(P\{d\})\to N$. Apply the degree-zero adjunction bijection to the object $P\{d\}$; its output is a degree-zero map $P\{d\}\to G(N)$, which is exactly a degree-$d$ map $P\to G(N)$ under the same shift convention [F11]. Each operation is a $k$-linear bijection, so $\operatorname{Hom}_{B,d}(F(P),N)\cong \operatorname{Hom}_{A,d}(P,G(N))$ linearly. This constructs the degree-compatible graded transposition from the ordinary adjunction rather than replacing homogeneous Hom by all ungraded maps. [F3, F4, F11, step 1.2, construct, algebra]

3.1 By [F1], the two sides of this dimension equality are respectively $\langle F_*[P],[N]\rangle_B$ and $\langle[P],G_*[N]\rangle_A$. This proves the ungraded identity on projective and module class generators. Every element of either Grothendieck group is a finite integer linear combination of such classes, so the $\mathbb Z$-bilinearity in [F1] extends the equality to all classes in the ungraded groups. [F1, step 2.1, step 1.2, construct]

3.2 Taking dimensions in step 2.2 gives equality of every coefficient in $h_{\mathrm{gr},B}(F(P),N)$ and $h_{\mathrm{gr},A}(P,G(N))$. The sums are finite by [F1]. Thus the graded pairing identity holds on projective and module class generators, and the $\mathbb Z$-bilinearity in [F1] extends it to all $x\in K_0^{\mathrm{gr}}(A)$ and $y\in G_0^{\mathrm{gr}}(B)$. Step 2.1 gives Laurent-linearity of the induced operators. [F1, step 2.1, step 2.2, construct]

4.1 In the tensor–Hom setting of [F14], the functors $F=M\otimes_A-$ and $G=\operatorname{HOM}_B(M,-)$ have the required degree-zero adjunction interface. This theorem applies to that instance only after exactness on the finite categories, finite-dimensionality of outputs, projective preservation by $F$, and the stated shift conditions have each been verified. [F14, given] ∎

## Remark

Kleshchev, §2.2, supplies graded shift and pairing conventions, not the
adjointness identity. Khovanov–Seidel, §2e.1, author PDF p. 15, computes
exact Grothendieck operators for the specific $A_m$ family and its projective
basis; it is not a proof of the general adjunction theorem here.
