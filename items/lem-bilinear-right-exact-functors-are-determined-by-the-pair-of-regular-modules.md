---
id: lem-bilinear-right-exact-functors-are-determined-by-the-pair-of-regular-modules
kind: lemma
title: "Bilinear right exact functors are determined by their value on the regular modules"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-axiom-of-choice, cor-every-module-is-a-quotient-of-a-free-module, def-abelian-category, def-algebra-over-a-commutative-ring, def-biproduct, def-deligne-product-of-finite-linear-categories, def-dimension, def-exact-and-short-exact-sequences-of-modules, def-generated-cyclic-finitely-generated-and-free-modules, def-k-linear-category-and-k-linear-functor, def-kernels-and-cokernels-as-equalizers-and-coequalizers, def-left-and-right-modules, def-left-exact-and-right-exact-functor, def-module-homomorphism-kernel-image-and-cokernel, def-natural-isomorphism, def-natural-transformation, def-product-category, prop-functoriality-of-module-tensor-products, thm-an-additive-functor-preserves-finite-biproducts, thm-bimodule-actions-induced-on-tensor-products, thm-modules-over-a-ring-form-an-abelian-category, thm-morphisms-between-finite-biproducts-correspond-to-matrices, thm-tensor-product-of-algebras-over-a-commutative-ring, thm-universal-property-of-module-tensor-products]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, author final version, §1.11 (Definition 1.11.1 and Proposition 1.11.2 with its coalgebra-realization sketch), printed pp.15–16"
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 and (2.1)), §2.3 ((2.6)–(2.9)), §2.4 (Proposition 2.8, Corollary 2.9 and (2.18)–(2.31)), §§3.1–3.2 (Definition 3.1, Theorem 3.2, Lemma 3.3, Proposition 3.4 and Corollaries 3.5–3.7), §3.5 (Definition 3.14, Lemmas 3.15–3.16 and (3.56)–(3.58))"
      url: https://arxiv.org/pdf/1612.04561v3
dependency_level: 2
---

## Statement

Let $k$ be a field, let $R$ and $S$ be finite-dimensional unital $k$-algebras ([[def-algebra-over-a-commutative-ring]], [[def-dimension]]) with $R\text{-}\mathrm{mod}$ and $S\text{-}\mathrm{mod}$ the categories of finite-dimensional left modules ([[def-left-and-right-modules]]), let $\mathcal E$ be a $k$-linear abelian category ([[def-abelian-category]], [[def-k-linear-category-and-k-linear-functor]]), and let $H:R\text{-}\mathrm{mod}\times S\text{-}\mathrm{mod}\to\mathcal E$ be $k$-linear and right exact in each variable ([[def-product-category]], [[def-left-exact-and-right-exact-functor]]). Put $T=R\otimes_kS$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]) and $W=H(R,S)$. Right multiplications in the two variables make $W$ a right $R$-module and a right $S$-module by endomorphisms, with commuting actions, hence a right $T$-module, and this structure is functorial in $H$. Then (i) the finite free presentations of $T\text{-}\mathrm{mod}$ construct a functor $\bar H:T\text{-}\mathrm{mod}\to\mathcal E$ from that right $T$-module structure, and a canonical natural isomorphism ([[def-natural-isomorphism]]) $\bar H(X\otimes_kY)\cong H(X,Y)$, natural in $X\in R\text{-}\mathrm{mod}$ and $Y\in S\text{-}\mathrm{mod}$, where $X\otimes_kY$ carries the commuting $R$- and $S$-actions; and (ii) every natural transformation ([[def-natural-transformation]]) $\eta:H\Rightarrow H'$ between two such bifunctors is determined by its component $\eta_{R,S}$, and $\eta\mapsto\eta_{R,S}$ is a bijection onto the compatible maps of right $T$-modules. The lemma asserts no existence of a Deligne product (existence is established on this page); it identifies how every such bifunctor is computed from its value on $(R,S)$, The simultaneous selection of presentations and cokernels uses the Axiom of Choice ([[def-axiom-of-choice]]); morphisms and comparison isomorphisms are independent of those selections.

Module and functor categories are formed on chosen small module representatives. A right $T$-module object $W$ in $\mathcal E$ means a $k$-linear anti-homomorphism $T\to\operatorname{End}_{\mathcal E}(W)$; no underlying set of elements of $W$ is assumed.

## Facts & Assumptions

**Given:** A field $k$, finite-dimensional unital $k$-algebras $R,S$, the $k$-algebra $T=R\otimes_kS$ ([[def-algebra-over-a-commutative-ring]]), a $k$-linear abelian category $\mathcal E$, and a bifunctor $H:R\text{-}\mathrm{mod}\times S\text{-}\mathrm{mod}\to\mathcal E$ that is $k$-linear and right exact in each variable ([[def-k-linear-category-and-k-linear-functor]], [[def-left-exact-and-right-exact-functor]]), where $R\text{-}\mathrm{mod}$ and $S\text{-}\mathrm{mod}$ are the categories of finite-dimensional left modules ([[def-dimension]]); write $W=H(R,S)$. Assume the Axiom of Choice ([[def-axiom-of-choice]]). A second such bifunctor $H'$ with $W'=H'(R,S)$ is used in part (ii).

[F1] For a finite-dimensional $k$-algebra $A$ and a finite-dimensional left $A$-module $M$: $M$ is finitely generated, and every quotient of a free module gives a surjection from a free module ([[def-generated-cyclic-finitely-generated-and-free-modules]], [[cor-every-module-is-a-quotient-of-a-free-module]]); a finite $k$-basis generates $M$ over $A$, its kernel in $A^n$ is a submodule of a finite-dimensional module and hence is again finitely generated, so $M$ has a finite free presentation $A^m\to A^n\to M\to0$, and in any such presentation the image of the first map is the kernel of the second.

[F2] A right $A$-module carries an action satisfying the right-handed axioms, and $T=R\otimes_kS$ is the $k$-algebra with multiplication $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$, so a right action of $T$ is given by a formula on elementary tensors that is well defined and multiplicative ([[def-left-and-right-modules]], [[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[F3] A $k$-linear functor between $k$-linear categories is additive on hom-groups, and an additive functor between additive categories preserves finite biproducts; the categories involved here are additive ([[thm-an-additive-functor-preserves-finite-biproducts]], [[def-abelian-category]]).

[F4] Morphisms between finite biproducts are given by matrices and compose by matrix multiplication ([[thm-morphisms-between-finite-biproducts-correspond-to-matrices]], [[def-biproduct]]).

[F5] In a category with zero morphisms the cokernel $q:B\to\operatorname{coker}(f)$ of $f:A\to B$ satisfies $qf=0$ and is universal with this property, and in a module category the cokernel is the quotient by the image ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]], [[def-module-homomorphism-kernel-image-and-cokernel]]).

[F6] The tensor product of a right module and a left module carries the induced outer action and is functorial in both arguments, with the universal property that balanced bilinear maps factor uniquely through it ([[thm-bimodule-actions-induced-on-tensor-products]], [[prop-functoriality-of-module-tensor-products]], [[thm-universal-property-of-module-tensor-products]]).

[F7] A natural transformation between functors has components satisfying the naturality equation for every morphism, and a natural isomorphism is a natural transformation with a two-sided inverse ([[def-natural-transformation]], [[def-natural-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Put $\rho(a)=H(r_a,1_S)$ and $\sigma(c)=H(1_R,r_c)$, where $r_a(x)=xa$ and $r_c(y)=yc$. These are $k$-linear in $a,c$, unital, and satisfy $\rho(ab)=\rho(b)\rho(a)$ and $\sigma(cc')=\sigma(c')\sigma(c)$. The two families commute by functoriality on the product category, so the bilinear map $(a,c)\mapsto\sigma(c)\rho(a)$ descends through $R\otimes_kS$ to a unital anti-homomorphism $\tau:T\to\operatorname{End}(W)$. This is the right $T$-action on $W$. Naturality shows that $\eta_{R,S}$ commutes with $\tau(t)$ for every $t$. [given, F2, F3, F7]

2.1 On finite free left $T$-modules put $K(T^n)=W^n$. A left-linear map $\varphi:T^m\to T^n$ is determined by $\varphi(e_j)=\sum_i p_{ij}e_i$, hence $\varphi(x)_i=\sum_j x_jp_{ij}$. Define $K(\varphi)$ to have $(i,j)$-entry $\tau(p_{ij})$. If $\psi$ has entries $q_{\ell i}$, then $\psi\varphi$ has entries $\sum_i p_{ij}q_{\ell i}$, and $\tau(p_{ij}q_{\ell i})=\tau(q_{\ell i})\tau(p_{ij})$, proving $K(\psi\varphi)=K(\psi)K(\varphi)$. Identities are preserved, so this is a $k$-linear functor on free modules. [step 1.1, F3, F4]

3.1 For a presentation $P=(T^m\xrightarrow{\delta}T^n\xrightarrow{\pi}Z\to0)$ put $K(P)=\operatorname{coker}K(\delta)$, with projection $q_P$. A map $u:Z\to Z'$ lifts to $g:T^n\to T^{n'}$ by lifting its finitely many generator images through $\pi'$. The map $g\delta$ lands in $\operatorname{im}\delta'$, so lifting the finitely many generator images again gives $g\delta=\delta'v$. Thus $q_{P'}K(g)K(\delta)=0$, and $K(g)$ descends to a map $K(P)\to K(P')$. Two lifts differ by $\delta'v'$ for the same reason, so their descended maps agree. Identity lifts and composites of lifts give identities and composition. [step 2.1, F1, F5]

4.1 Applying step 3.1 to the identity of $Z$ gives canonical mutually inverse comparisons between $K(P)$ and $K(P')$ for any two presentations. On the small module source, choose one presentation per object and one cokernel per resulting map, and put $\bar H(Z)=K(P_Z)$. These simultaneous choices use [[def-axiom-of-choice]], not merely the finite choice used for each lift. For a class-sized definable target, collection first bounds a set of witnesses for this set-indexed family and AC selects them. The lift-independent maps of step 3.1 define a $k$-linear functor; other choices give a canonical natural isomorphism. Fix these presentation and cokernel data for the construction. [step 3.1, F1, F5, given]

5.1 Choose presentations $R^s\xrightarrow d R^r\to X\to0$ and $S^{s'}\xrightarrow{d'}S^{r'}\to Y\to0$. Then $X\otimes_kY$ has the presentation $T^{sr'}\oplus T^{rs'}\xrightarrow{(d\otimes1,1\otimes d')}T^{rr'}\longrightarrow X\otimes_kY\longrightarrow0.$ Indeed its last term is the quotient of $R^r\otimes_kS^{r'}$ by the two images: sending $(\bar x,\bar y)$ to the class of $x\otimes y$ is well defined and bilinear, and the tensor universal property gives an inverse to the induced quotient map. The identifications $R^a\otimes_kS^b\cong T^{ab}$ preserve the left $T$-actions. [step 4.1, F1, F6, given]

6.1 Right exactness and additivity in each variable identify $H(R^a,S^b)$ with $W^{ab}$ and compute $H(X,Y)$ as the successive cokernel of the maps induced by $d'$ and $d$. Their entries are precisely the action endomorphisms in step 1.1. These successive cokernels are the cokernel of the pair of maps in step 5.1 after applying $K$: a map out of $W^{rr'}$ factors through either description exactly when it kills both maps. The universal property [F5] therefore gives $\bar H(X\otimes_kY)\cong H(X,Y)$. Lifting maps between the presentations shows that both sides use the same matrices; step 3.1 removes dependence on the lifts. The comparison is consequently natural in both variables. [step 2.1, step 3.1, step 4.1, step 5.1, F3, F4, F5]

7.1 Naturality against biproduct injections and projections determines $\eta_{R^a,S^b}$ from $\eta_{R,S}$. Naturality against the presentation surjections, which $H,H'$ send to epimorphisms, then determines $\eta_{X,Y}$, proving injectivity. Conversely a morphism $f:W\to W'$ commuting with the right $T$-actions gives componentwise maps $W^{ab}\to W'^{ab}$ commuting with all free-pair matrices. They descend through the successive cokernels of step 6.1. Lifts as in step 3.1 show these components are independent of presentations and natural in $X,Y$, and the component at $(R,S)$ is $f$. Thus evaluation is a bijection onto compatible morphisms of right $T$-module objects. [step 1.1, step 3.1, step 6.1, F3, F4, F5, F7]

8.1 Steps 4.1 and 6.1 prove (i), and step 7.1 proves (ii). The construction uses AC for its set-indexed object data; all lift choices are finite and induce unique maps on cokernels. No commutativity of $R$ or $S$ is used. [step 4.1, step 6.1, step 7.1, given] ∎
