---
id: lem-internal-shift-endofunctors-and-tensor-compatibility
kind: lemma
title: Internal shifts are autoequivalences and commute with the graded tensor product
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-graded-ring-module-bimodule-and-internal-shift, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise, lem-graded-balanced-tensor-and-shift-isomorphisms, def-graded-balanced-tensor-product-and-homogeneous-hom, def-bimodule, def-functor-and-contravariant-functor, def-k-linear-category-and-k-linear-functor, def-vector-space, def-field, lem-field-is-a-commutative-ring, lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Roozbeh Hazrat, Graded Rings and Graded Grothendieck Groups (arXiv:1405.5071), §1.2.2 shift of modules (1.16), printed p.34; §1.2.6 graded tensor product (1.21)-(1.23), printed pp.40-41; §2.3 Definitions 2.3.3-2.3.4, Theorem 2.3.7 with its proof, Theorem 2.3.8, Example 2.3.9, printed pp.118-123"
      url: "https://arxiv.org/pdf/1405.5071"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras (arXiv:0909.4844), §2.2 'Graded representation theory', printed pp.6-8"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "M. Khovanov and P. Seidel, Quivers, Floer Cohomology, and Braid Group Actions (arXiv:math/0006056), §2a-2c, author pp.8-11 (internal shift {k} and cochain shift [k] with ∂_{M[k]}=(-1)^k∂_M)"
      url: "https://arxiv.org/pdf/math/0006056"
---

## Statement

Let $k$ be a commutative ring and $A,B$ graded $k$-algebras.

1. For each $r\in\mathbb Z$ the internal shift extends to an autoequivalence
$\{r\}:\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(A)$ acting as the identity on underlying
sets: it sends $X$ to $X\{r\}$, $(X\{r\})_d=X_{d-r}$, and a degree-zero $A$-linear map $u:X\to Y$
to the same underlying map $u:X\{r\}\to Y\{r\}$. It is inverse to $\{-r\}$, and the equalities
$$\{r\}\circ\{s\}=\{r+s\},\qquad \{0\}=\mathrm{id}$$
hold as equalities of functors, not merely up to natural isomorphism. The induced map
$\operatorname{Hom}(X,Y)\to\operatorname{Hom}(X\{r\},Y\{r\})$ is the identity of the same
$k$-module, so $\{r\}$ is additive and $k$-linear on hom-groups; when $k$ is a field this is
$k$-linearity of a functor between $k$-linear categories
([[def-k-linear-category-and-k-linear-functor]]), and every field is a commutative ring
([[lem-field-is-a-commutative-ring]]), so the field case is the special case $k$ a field of the
statement here.

2. The shift preserves the degreewise coproducts of
[[lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]] and the degreewise kernels,
images and cokernels of
[[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]: the same coordinate maps and
the same underlying maps give canonical degree-zero $A$-linear isomorphisms
$$\Bigl(\bigoplus_iX_i\Bigr)\{r\}\cong\bigoplus_i(X_i\{r\}),\qquad (\ker u)\{r\}\cong\ker(u\{r\}),\qquad (\operatorname{coker}u)\{r\}\cong\operatorname{coker}(u\{r\}),$$
natural in the data.

3. For every graded $(B,A)$-bimodule $M$ and graded left $A$-module $N$ and all $r,s\in\mathbb Z$
there are natural degree-zero isomorphisms
$$M\{r\}\otimes_AN\{s\}\cong(M\otimes_AN)\{r+s\}$$
compatible with the outer actions, as in [[lem-graded-balanced-tensor-and-shift-isomorphisms]]; the
internal shift alters no sign and no differential, and is not the cochain shift $[1]$ of a complex.
No choice is used.

## Facts & Assumptions

**Given:** A commutative ring $k$, graded $k$-algebras $A,B$, integers $r,s$, graded left
$A$-modules $X,Y$ with a degree-zero $A$-linear map $u:X\to Y$, a family $(X_i)_{i\in I}$ of graded
left $A$-modules, a graded $(B,A)$-bimodule $M$ and a graded left $A$-module $N$.

[L1] The internal shift has pieces $(M\{r\})_d=M_{d-r}$, carries the same actions as $M$, is again
a graded module, satisfies $(M\{r\})\{-r\}=M$ and $M\{0\}=M$, introduces no sign, and graded
submodules have pieces $S_d=S\cap M_d$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[L2] In $\operatorname{GrMod}_0(A)$ kernels, images, cokernels and finite biproducts are computed in
each homogeneous degree, and a degree-zero map is an isomorphism exactly when it is bijective in
each degree ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L3] For all $r,s$ the identity on elementary tensors induces a degree-zero isomorphism
$M\{r\}\otimes_RN\{s\}\cong(M\otimes_RN)\{r+s\}$, natural in $M$ and $N$ and compatible with the
outer actions, and the associators and unitors of the graded balanced tensor are degree-zero natural
isomorphisms ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L4] The graded balanced tensor product is graded by total internal degree on homogeneous
elementary tensors, and the outer actions make it a graded module
([[def-graded-balanced-tensor-product-and-homogeneous-hom]]).

[L5] An $(S,R)$-bimodule is an abelian group that is a left $S$-module and a right $R$-module with
commuting actions ([[def-bimodule]]).

[L6] A functor assigns objects to objects and morphisms to morphisms with $F(1_X)=1_{FX}$ and
$F(g\circ f)=Fg\circ Ff$, and the composite functor is defined by $(GF)(X)=G(F(X))$,
$(GF)(f)=G(F(f))$ ([[def-functor-and-contravariant-functor]]).

[L7] For a field $k$, a $k$-linear category has $k$-vector spaces of morphisms with $k$-bilinear
composition, and a functor is $k$-linear when each induced map of hom-spaces is $k$-linear
([[def-k-linear-category-and-k-linear-functor]]).

[L8] A vector space over a field has an abelian group structure and a scalar action satisfying the
usual axioms, so its homomorphisms inherit pointwise addition and scalar multiplication
([[def-vector-space]]).

[L9] A field is a set with two operations, distinguished elements $0\ne1$, and the field axioms
([[def-field]]).

[L10] Every field is a commutative ring with the same operations and units
([[lem-field-is-a-commutative-ring]]).

[L11] For a family of graded modules the degreewise direct sum is the coproduct in
$\operatorname{GrMod}_0(A)$ with coordinate inclusions, and every family of degree-zero maps out of
the summands assembles uniquely ([[lem-graded-degreewise-direct-sums-and-homogeneous-free-covers]]).

## Proof

**Proof technique:** direct.

1.1 Let $\{r\}$ send an object $X$ to the graded module $X\{r\}$ and a morphism $u:X\to Y$ to the same underlying map $u$. This is well-defined: for $x\in(X\{r\})_d=X_{d-r}$ one has $u(x)\in Y_{d-r}=(Y\{r\})_d$, so $u$ is degree-zero and $A$-linear as a map $X\{r\}\to Y\{r\}$; identities and composites are inherited from $\operatorname{GrMod}_0(A)$, so $\{r\}$ is a functor [L6]. On objects and on morphisms the shift formula gives $(X\{r\})\{s\}=X\{r+s\}$ and $X\{0\}=X$ literally, because both sides have the same underlying set and the same homogeneous pieces; hence $\{r\}\circ\{s\}=\{r+s\}$ and $\{0\}=\mathrm{id}$ as equalities of functors, and $\{-r\}$ is inverse to $\{r\}$. [L1, L6, algebra]

1.2 For fixed $X,Y$ the sets $\operatorname{Hom}(X,Y)$ and $\operatorname{Hom}(X\{r\},Y\{r\})$ are equal: a function $X\to Y$ is degree-zero $A$-linear for the shifted pair exactly when $u(X_{d-r})\subseteq Y_{d-r}$ for all $d$, which is the same condition as $u(X_e)\subseteq Y_e$ for all $e$, and the addition, the $k$-scalar action and the composition law are pointwise and unchanged by the shift. Hence the induced map on hom-groups is the identity of one and the same $k$-module, so it is additive and $k$-linear; when $k$ is a field this is exactly $k$-linearity in the sense of [L7], since then the hom-modules are $k$-vector spaces [L8] and every field is a commutative ring [L9, L10]. [L1, L7, L8, L9, L10, algebra]

2.1 For each degree $d$ the identity map gives $((\bigoplus_iX_i)\{r\})_d=(\bigoplus_iX_i)_{d-r}=\bigoplus_i(X_i)_{d-r}=\bigoplus_i(X_i\{r\})_d$, and the coordinate inclusions of the two sides correspond under this identification, so the identity on the underlying module is a degree-zero $A$-linear isomorphism $(\bigoplus_iX_i)\{r\}\cong\bigoplus_i(X_i\{r\})$; it is natural because it is the identity on underlying sets and intertwines every family of maps. [step 1.1, L11, algebra]

2.2 For a degree-zero $u:X\to Y$ the same identification gives $(\ker(u\{r\}))_d=\{x\in X_{d-r}:u(x)=0\}=(\ker u)\cap X_{d-r}=((\ker u)\{r\})_d$, and likewise $(u\{r\})((X\{r\})_d)=u(X_{d-r})=(\operatorname{im}u)_{d-r}=((\operatorname{im}u)\{r\})_d$ and $(\operatorname{coker}(u\{r\}))_d=Y_{d-r}/u(X)_{d-r}=((\operatorname{coker}u)\{r\})_d$, using that kernels, images and cokernels in $\operatorname{GrMod}_0(A)$ are degreewise [L2]; the resulting degreewise equalities are equalities of graded submodules and quotients, so the identity maps are the asserted degree-zero $A$-linear isomorphisms, natural in $u$ because all constructions agree with the underlying maps. [step 1.1, L1, L2, algebra]

2.3 Part 3 of [L3] states precisely the natural degree-zero isomorphism $M\{r\}\otimes_AN\{s\}\cong(M\otimes_AN)\{r+s\}$ compatible with the outer actions, for the graded balanced tensor of [L4]; no further verification of the isomorphism is needed, and the outer-action compatibility is the one recorded there. [step 1.1, L3, L4, L5]

3.1 Collecting steps 2.1, 2.2 and 2.3: the internal shift is an autoequivalence inverting $\{-r\}$ with strict composition and unit equalities, it preserves degreewise coproducts, kernels, images and cokernels, and it commutes with the graded balanced tensor product by a natural isomorphism compatible with outer actions; since the shift leaves elements, actions, maps and differentials as they are, it inserts no sign [L1] and is a relabelling of degrees rather than the cochain shift $[1]$ of a complex, and no selection of bases, generators or lifts is made anywhere. [step 1.1, step 2.1, step 2.2, step 2.3, L1] ∎
