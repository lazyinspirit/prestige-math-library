---
title: Applying nonconnective K-theory to the enhanced interface
status: published
research_item: lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products
dependency_level: 10
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness)
- [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback)
- [lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal)
- [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)


## Statement
Assume the Axiom of Choice (AC) and the fixed nested universes of the common-family construction, with a base universe containing $\omega$ and the scheme data. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme. Use the common-family realizations of the supplied perfect categories and their full supported subcategories. Applying the imported nonconnective functor $\mathbb K$ to small equivalent models gives well-defined spectra $\mathbb K(\operatorname{Perf}(X))$ and $\mathbb K(\operatorname{Perf}_T(X))$ for every subset $T\subseteq X$, independently of equivalent coherent presentations.

Here the category of pairs has objects $(X,U)$ with $X$ qcqs and $U\subseteq X$ an arbitrary subset. A morphism $f:(X,U)\to(Y,T)$ is a scheme morphism $f:X\to Y$ satisfying $f^{-1}T\subseteq U$; identities and composition are those of schemes. Exact derived pullback followed by support inclusion induces $\mathbb K(\operatorname{Perf}_T(Y))\to\mathbb K(\operatorname{Perf}_U(X))$. These maps give coherent contravariance on this pair category. The case $U=f^{-1}T$ gives inverse-image support pullback; $U=X$ and $T=Y$ give contravariance on qcqs schemes. The exact inclusion $\operatorname{Perf}_T(X)\to\operatorname{Perf}(X)$ gives the supported-to-ambient map.

Tensor makes $\mathbb K(\operatorname{Perf}(X))$ an $E_\infty$ ring spectrum, makes $\mathbb K(\operatorname{Perf}_T(X))$ a unital module over it, and gives coherent mixed pairings $\mathbb K(\operatorname{Perf}_T(X))\wedge\mathbb K(\operatorname{Perf}_S(X))\to\mathbb K(\operatorname{Perf}_{T\cap S}(X))$ for all subsets $T,S\subseteq X$. Pullbacks respect these products and actions. The supported spectra are not asserted to have a distinguished ring unit for proper $T$. These conclusions need neither a degree-zero identification nor a scheme localization theorem.

## Facts & Assumptions
**Given:** Qcqs schemes in the fixed universes, arbitrary support subsets, pair morphisms as defined above, and AC.

**Goal:** Justify exactly the K-theoretic operations needed by the definition.

[F0] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs: the underlying space is quasi-compact and intersections of two affine opens are quasi-compact. Use the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with a base universe containing $\omega$ and the scheme data and larger universes containing the common-family fibers and the categories of those categories. Their existence is a standing size assumption separate from AC. Small means small relative to the base universe; essentially small means equivalent to such a small category.

[F1] [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies small stable idempotent-complete models of the ambient and all supported perfect fibers.

[F2] [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) and [lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal) supply coherent tensor, pullbacks, modules and mixed products, exact in each variable. In particular $Lf^*$ takes $\operatorname{Perf}_T(Y)$ into $\operatorname{Perf}_{f^{-1}T}(X)$ for every morphism between qcqs schemes, with coherent composition and compatibility with products and actions.

[F3] [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) gives the nonconnective functor on $\mathrm{Cat}_{\mathrm{perf}}$, the separately exact tensor universal property, its lax symmetric monoidal structure and transport of coherent algebra/module operations. Here $\mathrm{Cat}_{\mathrm{perf}}$ consists of small stable idempotent-complete infinity-categories and exact functors. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectra, smash, sphere units and the all-integer homotopy-group convention. An $E_\infty$ ring is a coherent commutative algebra for smash; a module has coherent associative unital action.

[F4] [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) supplies the single coherent scheme/tensor family with exact fiber equivalences to the supplied perfect categories. Throughout, $\operatorname{Perf}(X)$ denotes its common-family realization; supported categories are the corresponding full subcategories. No comparison with an independently chosen pullback diagram is claimed.

[F5] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines $\operatorname{Perf}_T(X)$ as the full subcategory of perfect objects whose support is contained in $T$. Support is the union of the nonzero cohomology stalk loci. These subcategories are stable and idempotent complete, with finite limits and colimits inherited from the ambient derived category. Full means retaining the ambient mapping spaces and all their composition coherences.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed in the small-model construction of [F1], the common-family construction of [F4], and the imported categorical foundations of [F3]. Choices of domain inverse equivalences below take place in the fixed larger universes of [F0]. No choice-free version of those inputs is asserted.

## Proof
1.1 By [F1] and [F4], the common-family diagram and its full supported fibers take values in essentially small stable idempotent-complete infinity-categories. Form that domain in the larger universes of [F0], with exact functors and natural equivalences as in [F3]. The inclusion of the small domain is fully faithful, since it retains the same exact functors and their natural equivalences, and essentially surjective by the definition of essential smallness. It is therefore an equivalence. Extend $\mathbb K$ along this domain equivalence once, or equivalently compose the entire diagram with one inverse equivalence. Its inverse choices with equivalence data are naturally equivalent. Transport the symmetric monoidal structure along the same equivalence: the tensor universal property of [F3] identifies separately exact pairings before and after transport, so their coherent algebra and module operations are transported together. This retains all coherences and establishes independence of equivalent coherent enhanced presentations. No independent choice of a skeleton for each individual map is used. [F0, F1, F3, F4, A1]

2.1 The pair category is well-defined. The identity of $(X,U)$ satisfies $\operatorname{id}^{-1}U=U$. For $f:(X,U)\to(Y,T)$ and $g:(Y,T)\to(Z,V)$, one has $(g\circ f)^{-1}V=f^{-1}(g^{-1}V)\subseteq f^{-1}T\subseteq U$; associativity and identities are inherited from schemes. For any $A\subseteq B\subseteq X$, the support definition in [F5] gives a full inclusion $\operatorname{Perf}_A(X)\to\operatorname{Perf}_B(X)$. It is exact because both full stable subcategories inherit their finite limits and colimits from the same ambient category. Compose the pullback in [F2] with this inclusion for $A=f^{-1}T$, $B=U$. For composable pair maps, both resulting composites are restrictions of the same ambient coherent pullback diagram in [F4]. The ambient identity, composition and higher coherence maps restrict to the target full supported subcategory: their objects have support in $U$ by the displayed inclusions, and fullness retains all the mapping spaces. Thus this is a coherent contravariant diagram of exact functors on pairs. Apply $\mathbb K$ from step 1.1 to that entire diagram. Taking $U=f^{-1}T$ gives the supplied support pullback, and taking full supports gives the scheme diagram. The pair map $\operatorname{id}:(X,X)\to(X,T)$ yields exactly the supported-to-ambient inclusion map. [F0, F2, F3, F4, F5, step 1.1]

3.1 By the tensor universal property in [F3], each separately exact pairing of [F2] is an exact functor out of the corresponding $\mathrm{Cat}_{\mathrm{perf}}$ tensor product. Compose its image under $\mathbb K$ with the lax monoidal comparison $\mathbb K(C)\wedge\mathbb K(D)\to\mathbb K(C\otimes D)$. The coherent ambient product and unit make the ambient spectrum an $E_\infty$ ring, while the coherent module action makes the supported spectrum a unital module; the same construction gives the mixed pairings with support $T\cap S$. Coherence follows from the supplied algebra/module operations and the lax symmetric monoidal functor, not merely binary maps in homotopy categories. Pullback compatibility follows by applying the same functor to the compatible operations in [F2]; support inclusions retain these compatibilities because the subcategories are full and their products have the asserted support bounds. No unit is inserted into a proper supported category. [F2, F3, F5, step 1.1, step 2.1]

4.1 These steps only apply the invariant and its coherent products to exact functors. They do not identify $\pi_0$ with a separately defined Grothendieck group, identify negative groups by another construction, or prove that a particular scheme-support sequence is a localization sequence. Thus they establish precisely the stated interface. [step 1.1, step 2.1, step 3.1] ∎
