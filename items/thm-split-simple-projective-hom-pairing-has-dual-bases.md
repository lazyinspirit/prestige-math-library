---
id: thm-split-simple-projective-hom-pairing-has-dual-bases
kind: theorem
title: "Projective and simple classes are dual bases under splitting"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis
  - thm-finite-length-grothendieck-groups-have-simple-class-bases
  - thm-graded-projective-and-simple-classes-have-shift-orbit-bases
  - lem-finite-dimensional-graded-algebras-have-graded-projective-covers
  - thm-projective-hom-pairing-is-additive-and-graded-sesquilinear
  - thm-schurs-lemma-for-modules
  - def-simple-module
  - def-essential-epimorphism-and-projective-cover
  - def-finitely-generated-graded-projective-module
  - def-graded-ring-module-bimodule-and-internal-shift
  - def-graded-balanced-tensor-product-and-homogeneous-hom
  - lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise
  - def-algebra-over-a-commutative-ring
  - prop-linear-maps-form-a-vector-space
  - cor-dimensions-of-matrix-and-linear-map-spaces
  - def-graded-grothendieck-group-shift-module-and-cartan-map
  - thm-modules-over-a-ring-form-an-abelian-category
  - def-abelian-category
  - def-additive-category
  - def-object-of-finite-length
  - def-composition-series-and-composition-factors-of-an-object
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
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, §2.2 (shift and pairing conventions only)"
      url: "https://arxiv.org/pdf/0909.4844"
pipeline_run: frontier-36-complete
---

## Statement

Let $k$ be a field and $A$ a finite-dimensional unital associative $k$-algebra. Let $S_1,\ldots,S_t$ represent all isomorphism classes of simple left $A$-modules, and let $q_i:P_i\twoheadrightarrow S_i$ be finite-dimensional projective covers. Then $[P_1],\ldots,[P_t]$ and $[S_1],\ldots,[S_t]$ are bases of $K_0(A)$ and $G_0(A)$, respectively, and $$\langle[P_i],[S_j]\rangle_A=\begin{cases}\dim_k\operatorname{End}_A(S_i),&i=j,\\0,&i\ne j.\end{cases}$$ In particular, if $\operatorname{End}_A(S_i)=k$ for every $i$, these bases are dual.

For a finite-dimensional unital associative $\mathbb Z$-graded $k$-algebra, let $S_1,\ldots,S_t$ represent the graded-simple shift orbits and let $p_i:P_i\twoheadrightarrow S_i$ be finite graded projective covers. Here graded-simple means nonzero with no proper nonzero graded submodule. Then $[P_i]$ and $[S_i]$ are $R=\mathbb Z[v,v^{-1}]$-bases of $K_0^{\mathrm{gr}}(A)$ and $G_0^{\mathrm{gr}}(A)$, respectively, and $$\langle[P_i],[S_j]\rangle_{A,\mathrm{gr}}=\begin{cases}\dim_k\operatorname{End}_{A,0}(S_i),&i=j,\\0,&i\ne j.\end{cases}$$ If $\operatorname{End}_{A,0}(S_i)=k$ for every representative, these Laurent bases are dual. Neither pairing statement asserts unimodularity of the projective-to-module Cartan map or of a projective/projective Cartan matrix. No axiom of choice is assumed or used.

## Facts & Assumptions

**Given:** A field $k$, a finite-dimensional unital associative $k$-algebra, and its finite-dimensional left modules. For the graded assertions, the algebra and modules carry the stated $\mathbb Z$-gradings and morphisms preserve degree. Projective covers and the selected finite families are as in the Statement. No axiom of choice is assumed or used.

[F1] The classes of projective covers of representatives of all simple-module classes form a $\mathbb Z$-basis of split $K_0$ ([[thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis]]).

[F2] In an essentially small abelian category in which every object has finite length, the classes of simple objects form a $\mathbb Z$-basis of $G_0$ ([[thm-finite-length-grothendieck-groups-have-simple-class-bases]]).

[F3] For a finite-dimensional graded algebra, covers of representatives of the graded-simple shift orbits give Laurent bases of graded $K_0$ and $G_0$; graded-simple means nonzero with no proper nonzero graded submodule ([[thm-graded-projective-and-simple-classes-have-shift-orbit-bases]]).

[F4] The finite-dimensional ungraded group is defined by $G_0(A)=G_0(\mathcal M_{\mathrm{fd}}(A))$ ([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F5] The category of left modules over a ring is abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F6] An abelian category is additive, has kernels and cokernels, and its coimage-to-image comparison is an isomorphism ([[def-abelian-category]]); an additive category is preadditive with finite biproducts ([[def-additive-category]]).

[F7] An object has finite length when it admits a finite composition series, whose factors are simple ([[def-object-of-finite-length]], [[def-composition-series-and-composition-factors-of-an-object]]).

[F8] An ordinary projective cover has superfluous kernel: if $N+\ker q=P$, then $N=P$ ([[def-essential-epimorphism-and-projective-cover]]).

[F9] A finite graded projective cover has kernel superfluous among graded submodules ([[lem-finite-dimensional-graded-algebras-have-graded-projective-covers]]).

[F10] A nonzero homomorphism between simple modules is an isomorphism, and the endomorphism ring of a simple module is a division ring ([[thm-schurs-lemma-for-modules]]).

[F11] A simple module is nonzero and has no proper nonzero submodule ([[def-simple-module]]).

[F12] The internal shift is $(M\{r\})_d=M_{d-r}$ and is invertible with inverse shift $\{-r\}$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[F13] A degree-$d$ homogeneous map $f:P\to M$ sends $P_i$ into $M_{i+d}$ ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[F14] Kernels and images of degree-zero maps of graded modules are graded submodules and are computed degreewise ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[F15] Scalars act centrally on a $k$-algebra, so its module homomorphisms are $k$-linear ([[def-algebra-over-a-commutative-ring]]).

[F16] The space of $k$-linear maps between vector spaces is closed under pointwise addition and scalar multiplication ([[prop-linear-maps-form-a-vector-space]]).

[F17] The space of linear maps between finite-dimensional $k$-vector spaces is finite-dimensional ([[cor-dimensions-of-matrix-and-linear-map-spaces]]).

[F18] The ungraded pairing value is $\dim_k\operatorname{Hom}_A(P,M)$; the graded pairing value is $\sum_d v^d\dim_k\operatorname{Hom}_{A,d}(P,M)$, and the pairings are well-defined on the stated Grothendieck groups ([[thm-projective-hom-pairing-is-additive-and-graded-sesquilinear]]).

[F19] A finite graded projective is projective in $\operatorname{GrMod}_0(A)$ and is generated by finitely many homogeneous elements ([[def-finitely-generated-graded-projective-module]]).

## Proof

**Proof technique:** direct.

1.1 The category $\mathcal M_{\mathrm{fd}}(A)$ is abelian: it is the full subcategory of the abelian category of left $A$-modules [F5], and its finite-dimensional objects are closed under kernels, cokernels, and finite biproducts; the ambient coimage-to-image isomorphisms remain in the full subcategory, so [F6] applies. To verify essential smallness without choosing a skeleton, form the full subcategory whose objects are all module actions of $A$ on $k^n$ for $n\in\mathbb N$. This is a small category: for each $n$ its possible actions are a subset of the set of functions $A\times k^n\to k^n$, and all morphisms between these coordinate models form sets. Every finite-dimensional module is isomorphic to one such model by choosing a finite basis for that individual module, so the inclusion is fully faithful and essentially surjective. Thus $\mathcal M_{\mathrm{fd}}(A)$ is essentially small and the group in [F4] is defined. Every object has finite length by induction on its $k$-dimension: for nonzero $M$, choose a proper submodule $N$ of maximal dimension among the finite set of possible dimensions; then $M/N$ is simple, and an induction series for $N$ extends by this quotient to one for $M$. This uses one submodule at a time and no global choice; [F7] records the length convention. Therefore [F2] applies to $\mathcal M_{\mathrm{fd}}(A)$. [F2, F4, F5, F6, F7, given, induction, choose, construct, algebra]

1.2 Every $A$-linear map between the finite modules is $k$-linear by [F15], and the Hom spaces are $k$-subspaces of the corresponding spaces of linear maps by [F16]; they are finite-dimensional by [F17]. Fix $i,j$ and let $f:P_i\to S_j$. If $f\ne0$, simplicity [F11] makes it surjective, so $\ker f$ is maximal. The cover kernel $K_i=\ker q_i$ lies in every maximal submodule: otherwise $K_i+\ker f=P_i$, contradicting [F8]. Thus $K_i\subseteq\ker f$, and $f$ factors uniquely through $q_i$ as a map $S_i\to S_j$. Conversely every map $S_i\to S_j$ composes with $q_i$, so $\operatorname{Hom}_A(P_i,S_j)\cong\operatorname{Hom}_A(S_i,S_j)$. By [F10], this is zero for $i\ne j$ and is $\operatorname{End}_A(S_i)$ for $i=j$. [F8, F10, F11, F15, F16, F17, given, construct, algebra]

1.3 For every $d\in\mathbb Z$, the shift convention [F12] identifies a degree-$d$ map $P_i\to S_j$ with a degree-zero map $P_i\{d\}\to S_j$, by [F13]. The shifted cover $p_i\{d\}:P_i\{d\}\twoheadrightarrow S_i\{d\}$ is again a finite graded projective cover: shifting is an exact equivalence with inverse $\{-d\}$ by [F12, F14], so it preserves projectivity, and a finite homogeneous generating family remains finite after reindexing by [F19]. Shifting back also takes graded submodules and the cover-kernel condition in [F9] to those for $p_i$. For a degree-zero map $g:P_i\{d\}\to S_j$, if $g\ne0$ then it is epic, and its graded kernel is maximal by graded simplicity [F3] and [F14]. Superfluity of $\ker(p_i\{d\})$ forces that kernel into $\ker g$, so $g$ factors uniquely through $S_i\{d\}$. A nonzero map between graded-simple modules is an isomorphism, since its kernel and image are graded submodules. [F3, F9, F12, F13, F14, F19, given, construct, algebra]

2.1 By [F18], the ungraded pairing matrix has entry $\dim_k\operatorname{End}_A(S_i)$ on the diagonal and zero off the diagonal. Under the splitting hypothesis each diagonal entry is $1$. The bases in [F1] and [F2] are therefore dual in the split case; without splitting the displayed diagonal dimensions remain the exact pairing values. [F1, F2, F18, step 1.2, construct]

2.2 If $S_i\{d\}\cong S_j$, the choice of one representative per shift orbit forces $i=j$. A finite-dimensional nonzero graded module has finite nonempty support, and an isomorphism $S_i\{d\}\cong S_i$ would make that support invariant under translation by $d$; its maximum then gives $d=0$. Therefore $\operatorname{Hom}_{A,d}(P_i,S_j)=0$ unless $i=j$ and $d=0$, while $\operatorname{Hom}_{A,0}(P_i,S_i)\cong\operatorname{End}_{A,0}(S_i)$ by step 1.3. [F3, F12, step 1.3, construct, algebra, cases]

3.1 Taking the graded pairing coefficients in [F18] gives diagonal value $\dim_k\operatorname{End}_{A,0}(S_i)$ and zero off the diagonal, by steps 1.3 and 2.2. Under the splitting hypothesis the diagonal is $1$, and [F3] makes these bases dual over $R$. For nonsplit endomorphism rings the diagonal dimension remains as stated; neither this calculation nor the ungraded one determines the projective-to-module Cartan map or a projective/projective Cartan matrix. The chosen representative families are finite by [F1] and [F3], so these arguments use only finite choices and no axiom of choice. [F1, F3, F18, step 1.3, step 2.2, construct] ∎

## Remark

Kleshchev, §2.2, author PDF p. 6 / printed p. 7, gives the same shift and graded Hom/pairing conventions. The argument above proves the dual-basis assertion locally. Kleshchev's §2.1 assumes an algebraically closed field; that stronger hypothesis is not imported. The general projective/simple cover correspondence is established by the preceding local basis results and cover arguments here; no published correspondence theorem is used.
