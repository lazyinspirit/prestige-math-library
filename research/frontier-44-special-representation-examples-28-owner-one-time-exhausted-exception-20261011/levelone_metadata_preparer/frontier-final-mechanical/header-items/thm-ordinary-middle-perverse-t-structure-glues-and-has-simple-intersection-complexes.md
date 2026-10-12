---
id: thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
kind: theorem
title: Ordinary middle perverse t structure, recollement and intersection complexes
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-axiom-of-choice, def-canonical-t-structure-on-a-derived-category, def-derived-category-of-an-abelian-category, def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf, def-extension-by-zero-abelian-sheaf, def-inverse-image-presheaf-and-sheaf, def-locally-constant-sheaf-of-finite-rank, def-sheaf-on-topological-space, lem-analytic-constructible-sheaves-admit-coherent-six-operations, lem-complex-algebraic-stratifications-have-finite-conical-cochain-models, lem-cone-triangles-satisfy-the-octahedral-axiom, prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf]
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
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Astérisque 100 (1982); §1.4 recollement t-structures and §2.1 perverse sheaves on stratified spaces"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
    - title: "J. Bernstein, V. Lunts, Equivariant Sheaves and Functors, Part I §1.4.5 (open localization triangles) and §1.9 with App. A"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
---

## Statement

Assume AC ([[def-axiom-of-choice]]) and let $k$ be any field. On $D_c^b(X;k)$ for a separated finite-type complex variety $X$, middle perversity is given on smooth complex strata $S$ by the two inequalities $H^q(i_S^*A)=0$ for $q>-\dim_{\mathbb C}S$ and $H^q(i_S^!A)=0$ for $q<-\dim_{\mathbb C}S$. These inequalities define a bounded t structure ([[def-canonical-t-structure-on-a-derived-category]]) on $D_c^b(X;k)$, independent of compatible refinement and gluing across algebraic open/closed decompositions. Verdier duality exchanges its two aisles. The heart is abelian and of finite length, and its simple objects are the intersection complexes $j_{!*}L[\dim_{\mathbb C}Z]$ of simple finite-rank local systems $L$ ([[def-locally-constant-sheaf-of-finite-rank]]) on dense smooth opens of irreducible supports $Z$. Open restriction is perverse exact. Heart objects have no negative Hom, and the endomorphism ring of a simple object is a division $k$-algebra. This is the ORDINARY category: no equivariant category, no normalization, no semisimplicity and no noncharacteristic theorem is used or asserted.

## Facts & Assumptions

**Given:** AC; a separated finite-type complex variety $X$ with its analytic topology and the compatible finite smooth algebraic stratifications supplied by the finite conical models; a coefficient field $k$; the bounded constructible category $D_c^b(X;k)$ with its ordinary six operations; the conventions of [[def-derived-category-of-an-abelian-category]] and [[def-derived-hom-in-the-bounded-setting]].

[F1] The six operations on $D_c^b$: the three adjunctions $f^*\dashv Rf_*$, $Rf_!\dashv f^!$ and tensor–Hom, coherent composition, support localization (both localization triangles for an open inclusion $j$ with closed complement $i$), ordinary and extraordinary proper base change, projection and trace; proper equality; involutive Verdier duality exchanging the adjoints; and coefficient-extension compatibility ([[lem-analytic-constructible-sheaves-admit-coherent-six-operations]]).

[F2] A t-structure on a triangulated category is a pair $(T^{\leq0},T^{\geq0})$ satisfying shift-closure, vanishing of $\operatorname{Hom}(T^{\leq0},T^{\geq1})$ and existence of truncation triangles; its heart is $T^{\leq0}\cap T^{\geq0}$ ([[def-canonical-t-structure-on-a-derived-category]], [[def-derived-category-of-an-abelian-category]]).

[F3] Cone triangles satisfy the octahedral axiom, and octahedral completion relates the cones of composable maps and produces the standard truncation triangles used in gluing t-structures ([[lem-cone-triangles-satisfy-the-octahedral-axiom]], [[prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf]]).

[F4] On the smooth strata the finite conical models give the local dimension computations and the bounded constructibility of the operations, per finite compatible stratifications ([[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]]).

[F5] A sheaf is locally constant of finite rank when it is locally isomorphic to a finite power of the constant sheaf, and on a connected, locally path-connected and simply connected space such a sheaf is constant ([[def-locally-constant-sheaf-of-finite-rank]]); extension by zero, inverse and direct image have their usual exactness and stalk behaviour ([[def-extension-by-zero-abelian-sheaf]], [[def-inverse-image-presheaf-and-sheaf]], [[def-direct-image-sheaf]], [[def-sheaf-on-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 The recollement and the glued t-structure. Let $U\xrightarrow{j}X\xleftarrow{i}Z$ be an algebraic open/closed decomposition. By [F1] the six-operation supplier gives $j_!\dashv j^*\dashv Rj_*$ and $i^*\dashv i_*\dashv i^!$, full faithfulness of $i_*$ and $j_!$, the vanishing $j^*i_*=0$ and the two localization triangles $j_!j^*K\to K\to i_*i^*K\to j_!j^*K[1]$ and $i_*i^!K\to K\to Rj_*j^*K\to i_*i^!K[1]$. Given t-structures on the bounded constructible categories of $U$ and $Z$, define $T^{\leq0}$ by $j^*K\in D^{\leq0}$ and $i^*K\in D^{\leq0}$, and $T^{\geq0}$ by $j^*K\in D^{\geq0}$ and $i^!K\in D^{\geq0}$. Orthogonality $\operatorname{Hom}(T^{\leq0},T^{\geq1})=0$ follows from the first localization triangle: the two endpoint Hom groups into $B\in T^{\geq1}$ vanish by adjunction and the two existing t-structures. For truncation, form $Y\to K\to Rj_*\tau^{\geq1}(j^*K)$ and then $A\to Y\to i_*\tau^{\geq1}(i^*Y)$; octahedral completion [F3] produces $A\to K\to B$ with a triangle $i_*\tau^{\geq1}(i^*Y)\to B\to Rj_*\tau^{\geq1}(j^*K)$. Applying $j^*$ shows $j^*A=\tau^{\leq0}j^*K$ and $j^*B=\tau^{\geq1}j^*K$; applying $i^*$ to $A\to Y$ gives $i^*A=\tau^{\leq0}i^*Y$, and applying $i^!$ to the $B$-triangle and using $i^!Rj_*=0$ gives $i^!B=\tau^{\geq1}i^*Y$. Thus $A\in T^{\leq0}$, $B\in T^{\geq1}$ and shift-closure is immediate, so $(T^{\leq0},T^{\geq0})$ is a t-structure in the sense of [F2]. Induction on the finite number of strata, starting from the ordinary t-structure shifted by $\dim_{\mathbb C}S$ on each smooth stratum, proves the inequalities define such a t-structure and that it stays inside $D_c^b$, because the six operations preserve constructibility and boundedness by [F1] and the local dimension data are those of [F4]. [given, F1, F2, F3, F4]

2.1 Independence of compatible refinement and gluing. Let $T\subset S$ be a refinement of smooth complex strata of codimension $c$ along the same algebraic variety. Ordinary pullback preserves the upper bound $-\dim_{\mathbb C}S\le-\dim_{\mathbb C}T$, and on locally constant cohomology extraordinary pullback is ordinary pullback shifted by $-2c$, so its lower bound becomes $-\dim_{\mathbb C}S+2c\ge-\dim_{\mathbb C}T$; hence both old halves lie in the refined halves, and uniqueness of truncation proves equality on the old category. Taking common refinements gives independence of the chosen compatible stratification, and the same argument applied over each member of an algebraic open/closed decomposition shows the glued structure is independent of the decomposition. This uses the local conical and orientation suppliers of [F4] rather than presupposing stratification independence. [given, F1, F4, step 1.1]

2.2 Duality exchanges the aisles. Let $S$ be a smooth complex stratum with $e=\dim_{\mathbb C}S$. The exchange identities of [F1] give $i_S^!D_XA\cong D_Si_S^*A$ and $i_S^*D_XA\cong D_Si_S^!A$, and on bounded complexes with finite-rank locally constant cohomology on $S$, complex orientation and exact finite-dimensional duality give $H^j(D_SK)\cong(H^{-j-2e}K)^\vee$. Thus $H^t(i_S^*A)=0$ for $t>-e$ implies $H^j(i_S^!D_XA)=0$ for $j<-e$, and $H^t(i_S^!A)=0$ for $t<-e$ implies $H^j(i_S^*D_XA)=0$ for $j>-e$: the two opposite middle-perverse inequalities. Exact finite-dimensional duality holds over every field, and $2e$ is an integer cochain shift rather than a scalar being inverted. Applying the same argument to $D_XA$ and using the involutivity of [F1] gives equality of the exchanged aisles. [given, F1, F5, step 1.1]

3.1 The heart: abelian, intersection complexes, simplicity and finite length. The heart is abelian by the general t-structure argument: the kernel and cokernel of a heart map $u:A\to B$ are the perverse cohomology objects in degrees $-1$ and $0$ of its cone, and the truncation triangles give image and coimage equality [F2]. Define $j_{!*}L$ as the image of ${}^pH^0j_!L\to{}^pH^0Rj_*L$ for a finite-rank local system $L$ on a dense smooth open of an irreducible support. Its supported subobjects and quotients are removed by the intermediate-image construction using the localization triangles, and conversely any extension without a nonzero boundary subobject or quotient is this image by adjunction. A subobject of $j_{!*}L$ restricts to a subobject of $L$, so for simple $L$ the intersection complex is simple; conversely a simple heart object has a nonzero restriction to a suitable open stratum which must be simple, or a proper sub-local-system would generate a proper intermediate-image subobject, and the no-boundary characterization identifies the object with its intermediate extension. On a fixed finite compatible stratification, finite-dimensional local systems have finite length, and induction through the two localization sequences proves finite length of the heart; every object and ascending or descending chain remains constructible for that stratification, and simple supports are closures of connected smooth strata, irreducible in the algebraic stratification used. Open restriction of a heart object is a heart object by the exactness of $j^*$ on the glued t-structure, so it is perverse exact. [given, F1, F2, F5, step 1.1, step 2.1]

4.1 Negative Hom and division endomorphism algebras over every field. For $m<0$ the shift $B[m]$ lies in $T^{\geq-m}\subseteq T^{\geq1}$ and $A$ lies in $T^{\leq0}$, so orthogonality gives $\operatorname{Hom}(A,B[m])=0$: heart objects have no negative Hom. If $u:T\to T$ is nonzero with $T$ simple, its kernel and image are subobjects with kernel zero and image $T$, so $u$ is invertible and the endomorphism ring of $T$ is a division $k$-algebra. Finite-rank local systems have finite length by the dimension of their underlying vector spaces, and the recollement and kernel/image arguments use only exactness and that finite length, so the ordinary perverse construction uses no characteristic-zero input and no equivariant, normalization, semisimplicity or noncharacteristic theorem. [given, F1, F2, F5, step 3.1] ∎
