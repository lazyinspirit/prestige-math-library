---
id: lem-homogeneous-free-presentations-prove-the-graded-comparison
kind: lemma
title: Homogeneous free presentations prove the graded comparison is an isomorphism
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action, lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent, lem-graded-degreewise-direct-sums-and-homogeneous-free-covers, lem-internal-shift-endofunctors-and-tensor-compatibility, lem-coherent-shift-functors-and-transformations-form-hom-categories, def-coherently-shift-compatible-functor-and-natural-transformation, def-graded-balanced-tensor-product-and-homogeneous-hom, lem-graded-balanced-tensor-and-shift-isomorphisms, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise, thm-universal-property-of-module-tensor-products, prop-functoriality-of-module-tensor-products, thm-bimodule-actions-induced-on-tensor-products, def-exact-and-short-exact-sequences-of-modules, def-module-homomorphism-kernel-image-and-cokernel, thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms, def-left-exact-and-right-exact-functor, def-natural-transformation, def-natural-isomorphism, lem-canonical-free-presentation-controls-eilenberg-watts-comparison]
justified_by: []
aliases: []
dependency_level: 5
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

Let $k$ be a field, $A,B$ graded $k$-algebras,
$F:\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$ $k$-linear, right exact, coproduct
preserving and coherently shift-compatible with comparisons $\theta$
([[def-coherently-shift-compatible-functor-and-natural-transformation]]), and let $M:=F(A)$ carry
the graded $(B,A)$-bimodule structure of
[[lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action]].

1. For every graded left $A$-module $X$ there is a unique degree-zero $B$-linear map
$$\tau_X:M\otimes_AX\longrightarrow F(X),\qquad \tau_X(m\otimes x)=F(\ell_x)\,\theta^{-1}_{A,d}(m),$$
for $m\in M$ and homogeneous $x\in X_d$ ($\ell_x$ as in
[[lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]]); it has total degree $g+d$ on
$M_g\otimes X_d$ and is natural in $X$.

2. $\tau$ is compatible with the shift comparisons,
$$\theta^F_{X,r}\,\tau_{X\{r\}}=(\tau_X\{r\})\,\theta^M_{X,r},$$
so $\tau:T_M\Rightarrow F$ is a morphism of coherently shift-compatible functors
([[lem-coherent-shift-functors-and-transformations-form-hom-categories]]), with comparison matrix
$$T_M(X\{r\})\xrightarrow{\ \theta^M_{X,r}\ }(T_MX)\{r\}\xrightarrow{\ \tau_X\{r\}\ }F(X)\{r\}$$
equal to $T_M(X\{r\})\xrightarrow{\ \tau_{X\{r\}}\ }F(X\{r\})\xrightarrow{\ \theta^F_{X,r}\ }F(X)\{r\}$.

3. $\tau$ is an isomorphism: $\tau_{A\{d\}}$ becomes $\theta^{-1}_{A,d}$ under the tensor-unit and
shift isomorphisms and is therefore invertible; since $F$ and $T_M$ preserve coproducts,
$\tau_P$ is invertible for every coproduct $P$ of shifts of $A$; and for arbitrary $X$ the
homogeneous free presentation of
[[lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]] presents $\tau_X$ as the map
induced on cokernels whose two pre-comparisons are isomorphisms, so $\tau_X$ is invertible by
cokernel universality. Consequently every such $F$ is coherently naturally isomorphic to
$T_{F(A)}$.

## Facts & Assumptions

**Given:** A field $k$, graded $k$-algebras $A,B$, a $k$-linear right exact coproduct-preserving coherently shift-compatible functor $F$ with comparisons $\theta$, the graded $(B,A)$-bimodule $M=F(A)$ with the action of [[lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action]], a graded left $A$-module $X$ with homogeneous $x\in X_d$, an element $a\in A_i$, an element $m\in M$, and $r\in\mathbb Z$.

[L1] The reconstructed right action satisfies $m\cdot a=F(r_a)\theta^{-1}_{A,i}(m)$ with $r_a(x')=x'a$, $m\cdot1=m$, and $(m\cdot a)\cdot b=m\cdot(ab)$, and it makes $M$ a graded $(B,A)$-bimodule with the unit law and associativity ([[lem-homogeneous-right-multiplication-reconstructs-the-graded-kernel-action]]).

[L2] $T_M=M\otimes_A-$ is $k$-linear, right exact and coproduct preserving, and the canonical comparisons $\theta^M_{X,r}$ are the identity on elementary tensors ([[lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent]]).

[L3] The canonical homogeneous free cover $q_X:P_X\to X$ with $P_X=\bigoplus_{x\in H_X}A\{\deg x\}$ is an epimorphism, the degree-zero map $\ell_y:A\{e\}\to X$ with $\ell_y(1_A)=y$ is unique for $y\in X_e$, the first presentation map $d:P_{K_X}\to P_X$ has image $\ker q_X$ and need not be monic, and $u\ell_x=\ell_{u(x)}$ for degree-zero $u:X\to Y$ ([[lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]]).

[L4] The internal shift is a strict autoequivalence acting as the identity on underlying sets, so the shift of a morphism is the same underlying map ([[lem-internal-shift-endofunctors-and-tensor-compatibility]]). The supplied comparisons satisfy the cocycle $\theta^F_{X,r+s}=(\theta^F_{X,r}\{s\})\theta^F_{X\{r\},s}$ ([[def-coherently-shift-compatible-functor-and-natural-transformation]]).

[L5] Between fixed $k$-linear right exact coproduct-preserving coherent functors, coherent transformations have set codes given by their components at $A$; actual hom-categories and a strict 2-category are formed using finite words in a specified uniformly definable family. The transformation formulas remain valid for arbitrary supplied functors, including $T_M$ and $F$ ([[lem-coherent-shift-functors-and-transformations-form-hom-categories]]).

[L6] A coherent transformation between coherently shift-compatible functors satisfies $\theta^G_{X,r}\eta_{X\{r\}}=(\eta_X\{r\})\theta^F_{X,r}$ ([[def-coherently-shift-compatible-functor-and-natural-transformation]]).

[L7] The graded balanced tensor product is graded by total internal degree on homogeneous elementary tensors and every element is a finite sum of such tensors ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L8] For the graded $(B,A)$-bimodule $M$ and a graded left $A$-module $N$, the tensor-unit map $M\otimes_AA\to M$, $m\otimes a\mapsto ma$, and the shift isomorphisms $M\{r\}\otimes_AN\{s\}\cong(M\otimes_AN)\{r+s\}$ are degree-zero isomorphisms. To apply the bimodule version, give $N$ its central right $k$-action ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L9] Kernels, images and cokernels in $\operatorname{GrMod}_0(A)$ are computed degreewise, and exactness is equivalent to exactness degreewise ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L10] A balanced map out of $M\times X$ induces a unique homomorphism out of $M\otimes_AX$ ([[thm-universal-property-of-module-tensor-products]]).

[L11] Tensor products of maps satisfy $(f'\circ f)\otimes(g'\circ g)=(f'\otimes g')\circ(f\otimes g)$ and $\operatorname{id}\otimes\operatorname{id}=\operatorname{id}$ ([[prop-functoriality-of-module-tensor-products]]).

[L12] The left $B$-action on $M\otimes_AX$ is the unique one with $b(m\otimes x)=(bm)\otimes x$ ([[thm-bimodule-actions-induced-on-tensor-products]]).

[L13] A sequence is exact when image equals kernel at each meeting point ([[def-exact-and-short-exact-sequences-of-modules]]).

[L14] The cokernel of a homomorphism is the quotient by its image, and a map out of the cokernel is determined by the universal property of that quotient ([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L15] A right exact functor between abelian categories preserves epimorphisms ([[thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms]]).

[L16] A functor is right exact when it preserves every finite colimit existing in its source ([[def-left-exact-and-right-exact-functor]]).

[L17] A natural transformation has components satisfying $Gf\circ\alpha_X=\alpha_Y\circ Ff$ ([[def-natural-transformation]]).

[L18] A natural transformation is a natural isomorphism when it has a two-sided inverse, which is detected on underlying maps ([[def-natural-isomorphism]]).

[L19] For an additive right exact coproduct-preserving functor on ungraded modules with its evaluated bimodule action, the canonical Eilenberg–Watts comparison is a natural isomorphism ([[lem-canonical-free-presentation-controls-eilenberg-watts-comparison]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in X_d$ put $\beta_X(m,x)=F(\ell_x)\theta^{-1}_{A,d}(m)$; since $\ell_{x+x\prime}=\ell_x+\ell_{x\prime}$ and $\ell_0=0$, additivity of $F$ makes this additive in $x$ within each degree, and finite homogeneous decomposition extends it uniquely to all $x\in X$. It is additive in $m$ because the maps defining it are homomorphisms. For homogeneous $a\in A_i$, $\ell_{ax}=\ell_x\circ(r_a\{d\})$, both maps sending $u$ to $uax$. Naturality of $\theta$ at $r_a$ with parameter $d$ and its cocycle give $\theta^{-1}_{A,d}F(r_a)\theta^{-1}_{A,i}=F(r_a\{d\})\theta^{-1}_{A,i+d}$ on underlying maps. Thus $\beta_X(m\cdot a,x)=F(\ell_x)F(r_a\{d\})\theta^{-1}_{A,i+d}(m)=\beta_X(m,ax)$; additivity extends balancing to arbitrary $a,x$. [L1, L3, L4, L6, algebra]

2.1 By [L10] the balanced pairing $\beta_X$ induces a unique group homomorphism $\tau_X:M\otimes_AX\to F(X)$ with $\tau_X(m\otimes x)=\beta_X(m,x)$ on homogeneous $x$; it is degree-zero because for $m\in M_g$ and $x\in X_d$ the tensor $m\otimes x$ has total degree $g+d$ [L7] while $\theta^{-1}_{A,d}(m)\in F(A\{d\})_{g+d}$ and $F(\ell_x)$ is degree-zero, so $\beta_X(m,x)\in F(X)_{g+d}$; and it is $B$-linear because $\beta_X$ is $B$-linear in $m$ (both $F(\ell_x)$ and $\theta^{-1}_{A,d}$ are $B$-linear) and the $B$-action on the tensor is the unique one with $b(m\otimes x)=(bm)\otimes x$ [L12]. [step 1.1, L7, L10, L12]

3.1 Naturality in $X$: for a degree-zero $u:X\to Y$ one has $u\circ\ell_x=\ell_{u(x)}$ [L3], so $F(u)\tau_X(m\otimes x)=F(u)F(\ell_x)\theta^{-1}(m)=F(\ell_{u(x)})\theta^{-1}(m)=\tau_Y(m\otimes u(x))=\tau_Y(1\otimes u)(m\otimes x)$; elementary tensors generate $M\otimes_AX$, so $F(u)\circ\tau_X=\tau_Y\circ(1\otimes u)$ by [L11] and [L17]. [step 2.1, L3, L11, L17]

3.2 Shift compatibility: both sides of $\theta^F_{X,r}\tau_{X\{r\}}=(\tau_X\{r\})\theta^M_{X,r}$ are degree-zero $B$-linear maps $M\otimes_AX\{r\}\to F(X)\{r\}$, so it suffices to compare them on $m\otimes y$ with $y\in(X\{r\})_e=X_{e-r}$. The right-hand side gives $F(\ell^X_y)\theta^{-1}_{A,e-r}(m)$ viewed in $F(X)\{r\}$, because $\theta^M$ is the identity on elementary tensors [L2]. The left-hand side is $\theta^F_{X,r}F(\ell^{X\{r\}}_y)\theta^{-1}_{A,e}(m)$ with $\ell^{X\{r\}}_y=(\ell^X_y)\{r\}$ the shift of $\ell^X_y$ [L3, L4]; naturality of $\theta^F$ at $\ell^X_y$ with parameter $r$ gives $\theta^F_{X,r}F((\ell^X_y)\{r\})=(F(\ell^X_y)\{r\})\theta^F_{A\{e-r\},r}$ and the shift of a morphism is the same underlying map [L4], so the left-hand side equals $F(\ell^X_y)\theta^F_{A\{e-r\},r}\theta^{-1}_{A,e}(m)$; the cocycle $\theta^F_{A,e}=(\theta^F_{A,e-r}\{r\})\theta^F_{A\{e-r\},r}$ together with [L4] gives $\theta^F_{A\{e-r\},r}\theta^{-1}_{A,e}=\theta^{-1}_{A,e-r}$ on underlying maps, so the left-hand side equals the right-hand side. [step 2.1, L2, L3, L4]

3.3 At $X=A\{d\}$ the generator map $\ell_{1_A}:A\{d\}\to A\{d\}$ is the identity, so $\tau_{A\{d\}}(m\otimes1_A)=\theta^{-1}_{A,d}(m)$; under the tensor-unit and shift isomorphisms $M\otimes_AA\{d\}\cong(M\otimes_AA)\{d\}\cong M\{d\}$ of [L8] the map $\tau_{A\{d\}}$ corresponds to the degree-zero isomorphism $\theta^{-1}_{A,d}$, hence is itself an isomorphism. [step 2.1, L3, L8, L18]

4.1 Let $P=\bigoplus_iA\{d_i\}$ be a coproduct of shifts of $A$. Since $T_M$ preserves coproducts [L2] and $F$ does by hypothesis, naturality of $\tau$ at the coproduct inclusions identifies $\tau_P$ with the coproduct $\bigoplus_i\tau_{A\{d_i\}}$ of the isomorphisms of step 3.3, under the canonical decompositions $T_M(P)\cong\bigoplus_iT_M(A\{d_i\})$ and $F(P)\cong\bigoplus_iF(A\{d_i\})$; a coproduct of isomorphisms is an isomorphism, so $\tau_P$ is an isomorphism. [step 3.1, step 3.3, L2, L3]

5.1 For arbitrary $X$ the presentation $P_{K_X}\xrightarrow{d}P_X\xrightarrow{q_X}X\to0$ of [L3] is exact at $P_X$ and at $X$ [L13], with $d$ of image $\ker q_X$ and $q_X$ an epimorphism; the functors $T_M$ and $F$ preserve cokernels because they are right exact [L2, L15, L16], so applying them gives two cokernel diagrams connected by $\tau$: $\tau_{P_X}T_M(d)=F(d)\tau_{P_{K_X}}$ by naturality (step 3.1). The maps $\tau_{P_{K_X}}$ and $\tau_{P_X}$ are isomorphisms by step 4.1, so the unique map induced on the cokernels by cokernel universality [L14] is an isomorphism with inverse induced by the two inverses; this proves the graded counterpart of the ungraded comparison [L19] directly, and the first presentation map $d$ is never asserted to be monic. [step 3.1, step 4.1, L2, L3, L9, L13, L14, L15, L16, L19]

6.1 Collecting steps 3.1, 3.2 and 5.1: $\tau:T_M\Rightarrow F$ is a natural transformation that is an isomorphism in every degree and hence a natural isomorphism [L18], it satisfies the equivariance identity of step 3.2, so it is a coherent morphism between the coherent functors $T_M$ and $F$ in the sense of [L6] and [L5], and consequently every such $F$ is coherently naturally isomorphic to $T_{F(A)}$; the displays of the statement record the two composites of the comparison matrix, which are equal by step 3.2. [step 3.1, step 3.2, step 5.1, L5, L6, L17, L18] ∎
