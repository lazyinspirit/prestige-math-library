---
id: lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent
kind: lemma
title: Graded tensor functors are k-linear, right exact, coproduct preserving and shift-coherent
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-graded-balanced-tensor-product-and-homogeneous-hom, lem-graded-balanced-tensor-and-shift-isomorphisms, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise, thm-universal-property-of-module-tensor-products, prop-functoriality-of-module-tensor-products, thm-bimodule-actions-induced-on-tensor-products, def-bimodule, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel, def-exact-and-short-exact-sequences-of-modules, def-preservation-reflection-creation-continuity-and-cocontinuity, def-left-exact-and-right-exact-functor, def-k-linear-category-and-k-linear-functor, def-field, lem-field-is-a-commutative-ring, lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums, lem-graded-degreewise-direct-sums-and-homogeneous-free-covers, lem-internal-shift-endofunctors-and-tensor-compatibility, def-coherently-shift-compatible-functor-and-natural-transformation, lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving, lem-coherent-shift-functors-and-transformations-form-hom-categories]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roozbeh Hazrat, Graded Rings and Graded Grothendieck Groups (arXiv:1405.5071), §1.2.2 shift of modules (1.16), printed p.34; §1.2.6 graded tensor product (1.21)-(1.23), printed pp.40-41; §2.3 Definitions 2.3.3-2.3.4, Theorem 2.3.7 with its proof, Theorem 2.3.8, Example 2.3.9, printed pp.118-123"
      url: "https://arxiv.org/pdf/1405.5071"
    - title: "J. Fuchs, G. Schaumann, C. Schweigert, Eilenberg-Watts calculus for finite categories and a bimodule Radford S^4 theorem (arXiv:1612.04561v3), Introduction (classical unital-ring statement) and §2.1 Lemma 2.1"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Let $k$ be a field, $A,B,C$ graded $k$-algebras and $M$ a graded $(B,A)$-bimodule.

1. The tensor functor
$$T_M:=M\otimes_A-:\operatorname{GrMod}_0(A)\longrightarrow\operatorname{GrMod}_0(B)$$
is $k$-linear, preserves cokernels and preserves every coproduct; hence it is right exact, and by
[[lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving]] it is
cocontinuous. No flatness of $M$ is assumed: right-flatness would require preservation of all exact sequences of underlying left
$A$-modules, which is not asserted here.

2. The canonical isomorphisms
$$\theta^M_{X,r}:M\otimes_AX\{r\}\longrightarrow(M\otimes_AX)\{r\}$$
induced by the identity on elementary tensors are natural degree-zero $B$-linear isomorphisms and
satisfy $\theta^M_{X,0}=1$ and the cocycle
$\theta^M_{X,r+s}=(\theta^M_{X,r}\{s\})\circ\theta^M_{X\{r\},s}$, so $(T_M,\theta^M)$ is a
coherently shift-compatible functor
([[def-coherently-shift-compatible-functor-and-natural-transformation]]).

3. For a degree-zero map $f:M\to M'$ of graded $(B,A)$-bimodules the components $f\otimes1_X$ are
degree-zero $B$-linear and define a coherent natural transformation $f\otimes1:T_M\Rightarrow T_{M'}$,
and $f\mapsto f\otimes1$ preserves identities and composition. Consequently the assignment
$M\mapsto(T_M,\theta^M)$, $f\mapsto f\otimes1$, preserves identities and composition and takes
values in the $k$-linear right exact coproduct-preserving coherently shift-compatible functors with
coherent transformations, the metatheoretic collection
$\mathrm{CohFun}(A,B)$ of [[lem-coherent-shift-functors-and-transformations-form-hom-categories]].
In any specified uniformly definable family containing these tensor functors as generators,
the same assignment takes values in the actual word-coded category $\mathrm{CohFun}_J(A,B)$ of that lemma.
No commutativity of $A,B$ beyond $k$ and no choice is used.

## Facts & Assumptions

**Given:** A field $k$, graded $k$-algebras $A,B,C$, a graded $(B,A)$-bimodule $M$, a graded $(B,A)$-bimodule map $f:M\to M'$ of degree zero, graded left $A$-modules $X,Y$ and a degree-zero $A$-linear map $u:X\to Y$, a family $(X_i)_{i\in I}$ of graded left $A$-modules, and $r,s\in\mathbb Z$.

[L1] The graded balanced tensor product is graded by total internal degree on homogeneous elementary tensors, its outer actions make it a graded module, and every element is a finite sum of homogeneous elementary tensors ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L2] Part 3: the identity on elementary tensors induces a degree-zero isomorphism $M\{r\}\otimes_RN\{s\}\cong(M\otimes_RN)\{r+s\}$, natural in $M$ and $N$ and compatible with outer actions ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L3] In $\operatorname{GrMod}_0(A)$ kernels, images and cokernels are computed degreewise, exactness is equivalent to exactness degreewise, and a degree-zero map is an isomorphism exactly when it is bijective ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L4] A balanced map $b:M\times N\to P$ induces a unique group homomorphism $\bar b:M\otimes_AN\to P$ with $\bar b(m\otimes n)=b(m,n)$ ([[thm-universal-property-of-module-tensor-products]]).

[L5] For homomorphisms $f:M\to M'$ and $g:N\to N'$ there is a unique group homomorphism $f\otimes g$ with $(f\otimes g)(m\otimes n)=f(m)\otimes g(n)$, and $\operatorname{id}_M\otimes\operatorname{id}_N=\operatorname{id}_{M\otimes_RN}$ and $(f'\circ f)\otimes(g'\circ g)=(f'\otimes g')\circ(f\otimes g)$ ([[prop-functoriality-of-module-tensor-products]]).

[L6] Outer actions on a balanced tensor product are the unique ones with $(m\otimes n)c=m\otimes(nc)$ and $s(m\otimes n)=(sm)\otimes n$ ([[thm-bimodule-actions-induced-on-tensor-products]]).

[L7] An $(S,R)$-bimodule is an abelian group that is a left $S$-module and a right $R$-module with commuting actions ([[def-bimodule]]).

[L8] Left and right modules satisfy the module axioms, so the action of $A$ on $M$ and of $A$ on $X$ are additive in each variable and unital ([[def-left-and-right-modules]]).

[L9] A module homomorphism is additive and scalar-linear, its kernel and image are as displayed in its definition, and a bijective homomorphism is an isomorphism ([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L10] A sequence is exact when image equals kernel at every meeting point, and a sequence $X\to Y\to Z\to0$ is exact precisely when the last map is surjective with kernel the image of the preceding one ([[def-exact-and-short-exact-sequences-of-modules]]).

[L11] A functor is cocontinuous when it preserves all small colimits, and preservation means that images of colimiting cocones are colimiting ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L12] A functor is right exact when it preserves every finite colimit that exists in its source category; exactness assertions are preservation, not existence ([[def-left-exact-and-right-exact-functor]]).

[L13] For a field $k$, a functor is $k$-linear when each induced map of hom-spaces is $k$-linear ([[def-k-linear-category-and-k-linear-functor]]).

[L14] A field is a set with the field axioms, in particular a commutative multiplication ([[def-field]]).

[L15] Every field is a commutative ring with the same operations and units ([[lem-field-is-a-commutative-ring]]).

[L16] For a right $A$-module $M$ the functor $M\otimes_A-:A\text{-Mod}\to\mathbf{Ab}$ is additive, preserves cokernels (so every exact $X\to Y\to Z\to0$ induces an exact $M\otimes_AX\to M\otimes_AY\to M\otimes_AZ\to0$), and preserves arbitrary direct sums: the canonical map $\bigoplus_i(M\otimes_AX_i)\to M\otimes_A(\bigoplus_iX_i)$ is an isomorphism, including the empty index set; if $M$ is a $(B,A)$-bimodule then all these maps are $B$-linear ([[lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums]]).

[L17] For a family of graded modules the degreewise direct sum is the coproduct in $\operatorname{GrMod}_0(A)$, with degree-zero $A$-linear coordinate inclusions and a unique assembly of any family of degree-zero maps ([[lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]]).

[L18] The internal shift is a strict autoequivalence with $\{0\}=\mathrm{id}$ and $\{r\}\{s\}=\{r+s\}$, and it preserves degreewise coproducts, kernels and cokernels ([[lem-internal-shift-endofunctors-and-tensor-compatibility]]).

[L19] A functor is coherently shift-compatible when it is additive and carries natural degree-zero isomorphisms $\theta_{X,r}:F(X\{r\})\to F(X)\{r\}$ satisfying the unit $\theta_{X,0}=1$ and the cocycle, and a natural transformation is coherent when it satisfies the equivariance square ([[def-coherently-shift-compatible-functor-and-natural-transformation]]).

[L20] An additive functor between the graded module categories preserves all small colimits if and only if it preserves cokernels and all coproducts, equivalently if and only if it is right exact and coproduct preserving ([[lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving]]).

## Proof

**Proof technique:** direct.

1.1 For an object $X$ the graded balanced tensor product $M\otimes_AX$ is a graded left $B$-module by [L1], so $T_M$ is defined on objects. For a degree-zero $A$-linear $u:X\to Y$ the pairing $(m,x)\mapsto m\otimes u(x)$ is balanced [L1, L7] and additive in each variable [L8], so by [L4] it induces a unique group homomorphism $1\otimes u$ with $(1\otimes u)(m\otimes x)=m\otimes u(x)$; it is degree-zero because $m\otimes u(x)$ has degree $\deg m+\deg x$ by [L1], and it is $B$-linear because $b(m\otimes u(x))=(bm)\otimes u(x)$ by [L6]. Identities and composites of these maps are the identities and composites of $T_M$ by the functoriality identities of [L5], so $T_M$ is a functor into $\operatorname{GrMod}_0(B)$. [L1, L4, L5, L6, L7, L8, L9]

1.2 For parallel degree-zero $u,u\prime:X\to Y$ and $\lambda\in k$, one has $(1_M\otimes(u+u\prime))(m\otimes x)=m\otimes u(x)+m\otimes u\prime(x)$ and $(1_M\otimes(\lambda u))(m\otimes x)=m\otimes\lambda u(x)=\lambda(m\otimes u(x))$. The latter equality uses the common central $k$-action and balancing over $A$. Elementary tensors generate, so $u\mapsto1_M\otimes u$ is additive and $k$-linear. [L1, L4, L5, L13, L14, L15]

1.3 By part 3 of [L2] with $r=0$ and $s=r$ the identity on elementary tensors induces, for every $X$ and $r$, a natural degree-zero isomorphism $\theta^M_{X,r}:M\otimes_AX\{r\}\to(M\otimes_AX)\{r\}$ compatible with the outer actions, hence $B$-linear by [L1]; with $r=0$ the identities $M\{0\}=M$ and $X\{0\}=X$ of [L18] show that $\theta^M_{X,0}$ is the identity map. Both sides of the cocycle identity are degree-zero $B$-linear maps $M\otimes_AX\{r+s\}\to(M\otimes_AX)\{r+s\}$ that are the identity on elementary tensors, so the cocycle holds by the uniqueness in [L4]. [L1, L2, L4, L18]

2.1 Let $u:X\to Y$ be degree-zero $A$-linear with cokernel $q:Y\to C$ in $\operatorname{GrMod}_0(A)$. The underlying sequence $X\xrightarrow{u}Y\xrightarrow{q}C\to0$ of $A$-modules is exact: $q$ is surjective by [L9], and $\ker q=\operatorname{im}u$ by the degreewise description of cokernels [L3] and the definition of exactness [L10]. By [L16] the sequence $M\otimes_AX\xrightarrow{1\otimes u}M\otimes_AY\xrightarrow{1\otimes q}M\otimes_AC\to0$ of abelian groups is exact with all maps $B$-linear and, by step 1.1, degree-zero; given any degree-zero $B$-linear $g:M\otimes_AY\to P$ with $g\circ(1\otimes u)=0$, exactness gives a unique group homomorphism $\bar g:M\otimes_AC\to P$ with $\bar g\circ(1\otimes q)=g$, and $\bar g$ is degree-zero because a degree of $M\otimes_AC$ has a degree-$d$ preimage under the surjection $1\otimes q$ and $g$ is degree-zero, and $B$-linear because $g$ and $1\otimes q$ are; hence $1\otimes q$ is a cokernel of $1\otimes u$, so $T_M$ preserves cokernels. [step 1.1, L3, L9, L10, L16]

2.2 For a family $(X_i)_{i\in I}$ the maps $1\otimes\jmath_i$ assemble by [L17] to the canonical degree-zero $B$-linear map $\Phi:\bigoplus_i(M\otimes_AX_i)\to M\otimes_A(\bigoplus_iX_i)$; by [L16] the underlying map is an isomorphism, with inverse induced by the balanced pairing $(m,(x_i))\mapsto(m\otimes x_i)$, which is degree-zero and $B$-linear by [L1, L6], so $\Phi$ is an isomorphism in $\operatorname{GrMod}_0(B)$ and $T_M$ preserves the coproduct of the family, including the empty one. [step 1.1, L1, L6, L16, L17]

2.3 For a degree-zero bimodule map $f:M\to M'$ and any $X$ the map $f\otimes1_X:M\otimes_AX\to M'\otimes_AX$ is a group homomorphism by [L5], degree-zero because $\deg f(m)=\deg m$, and $B$-linear because $b(f(m)\otimes x)=(bf(m))\otimes x=f(bm)\otimes x$ by [L6] and the $B$-linearity of $f$; it is natural in $X$ by the functoriality identities of [L5]. The equivariance square holds: both $\theta^{M'}_{X,r}\circ(f\otimes1_{X\{r\}})$ and $(f\otimes1_X)\{r\}\circ\theta^M_{X,r}$ are degree-zero $B$-linear maps $M\otimes_AX\{r\}\to(M'\otimes_AX)\{r\}$ sending $m\otimes y$ to $f(m)\otimes y$, so they agree by [L4]; identities and composition are preserved by [L5]. [step 1.1, step 1.3, L4, L5, L6, L7]

3.1 By step 1.2, step 2.1 and step 2.2 the functor $T_M$ is additive, preserves cokernels and preserves every coproduct; by [L20] it is therefore cocontinuous, hence right exact [L11, L12]. No flatness or exactness of $M$ was used, since only cokernels and coproducts entered the argument. [step 1.2, step 2.1, step 2.2, L11, L12, L20]

4.1 Steps 1.2, 3.1 and 1.3 show that $(T_M,\theta^M)$ is additive, $k$-linear, right exact, coproduct preserving and coherently shift-compatible in the sense of [L19], and step 2.3 shows that $f\mapsto f\otimes1$ is a functorial assignment with values in that class and coherent morphisms; every construction used the canonical tensor product, the canonical shifts and the canonical coproducts, so no choice is made, no flatness of $M$ and no commutativity of $A,B$ beyond the central field $k$ was used, and the first presentation map is nowhere required to be monic. [step 1.2, step 1.3, step 3.1, step 2.3, L19] ∎
