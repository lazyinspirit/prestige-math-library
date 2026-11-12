---
title: Nonconnective K theory of perfect complexes
status: published
research_item: def-nonconnective-k-spectrum-interface
dependency_level: 11
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products](item-lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products)
- [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness)
- [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback)
- [lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal)
- [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)


## Definition
Assume the Axiom of Choice. A **qcqs scheme** is a quasi-compact quasi-separated scheme. For such X, realize the full sheaf-derived stable idempotent-complete category Perf(X) of [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) by the full perfect fiber widehat Perf(X) in the single localized K-flat family of [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison). Each fiber is identified with the supplied Perf(X) by the actual exact inclusion-induced equivalence. The supplier has specified no prior scheme-indexed tensor/pullback diagram; here its coherent interface is, by definition, the one produced by that common family. Its tensor and pullbacks are those of [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback). By [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) these fibers are essentially small. Extend 𝕂 once to the equivalent domain of essentially small stable idempotent-complete infinity-categories, rather than selecting independent skeletons for separate maps. Let 𝕂 be the nonconnective functor of [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input), and define

$$K(X)=\mathbb K(\operatorname{Perf}(X)),\qquad K_i(X)=\pi_iK(X)\quad(i\in\mathbb Z).$$

All groups use the indexing of [def-stable-spectra-interface](item-def-stable-spectra-interface); negative i are allowed and are not set to zero by a connective truncation. In the displayed formulas Perf and its supported categories mean these common-family realizations of the supplied enhanced categories. Equivalent coherent small presentations give naturally equivalent spectra and diagrams.

For every subset T⊆X define

$$K_T(X)=\mathbb K(\operatorname{Perf}_T(X)),\qquad K_{i,T}(X)=\pi_iK_T(X)\quad(i\in\mathbb Z).$$

The supported category consists of perfect complexes whose cohomology stalks vanish off T. For closed T this is equivalently acyclicity on the open complement. Its exact inclusion in Perf(X) supplies $K_T(X)\to K(X)$. Here $K_T(X)$ is defined by that category, without presupposing a fiber identification with K(X)→K(X∖T).

For every morphism f:X→Y of qcqs schemes, exact derived pullback gives f*:K(Y)→K(X). On pairs it gives $f^*:K_T(Y)\to K_{f^{-1}T}(X)$. These are coherent contravariant operations; on affine finite-projective representatives they are derived extension of scalars. No flatness, regularity or finite Tor-dimension assumption on f is imposed.

Derived tensor and the lax symmetric monoidal 𝕂 give the coherent E∞ multiplication K(X)∧K(X)→K(X), with unit induced by $O_X$. Thus K(X) is a commutative ring spectrum. Each $K_T(X)$ is a module over K(X), and there are coherent support pairings $K_T(X)$∧$K_S(X)$→$K_{T\cap S}(X)$. They induce $K_{i,T}(X)$⊗$K_{j,S}(X)$→$K_{i+j,T\cap S}(X)$ for all integers i,j. Pullback respects the products and module actions. For proper T no distinguished ring unit on $K_T(X)$ is asserted; its specified structure is the ambient module and supported pairings.

## Facts & Assumptions
**Given:** qcqs schemes, arbitrary support subsets, morphisms as above, AC and the chosen universes.

**Goal:** Define the nonconnective spectrum and justify its domain, all-integer groups, contravariance and products.

[F0] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines quasi-compactness and quasi-separatedness: the underlying space is quasi-compact and every intersection of two affine open subschemes is quasi-compact. Use the nested universes of the common-family construction with the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), a base universe $U$ containing $\omega$ and the scheme data, and larger universes containing the fibers and categories of those categories. Their existence is a standing size assumption separate from AC. Small means $U$-small; essentially small means equivalent to a $U$-small infinity-category.

[F1] [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) constructs the single coherently localized scheme/tensor family and identifies its fibers with the supplied enhancement; [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies its essentially small stable idempotent-complete domain.

[F2] [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) and [lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal) supply the actual enhanced operations and support control.

[F3] [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) supplies nonconnective 𝕂 and its lax symmetric monoidal structure; [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies π_i for all integers.

[F4] [lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products](item-lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products) applies these inputs and establishes presentation independence and multiplicative contravariance.

[A1] Assume [AC](https://alphabetamath.cc/item/def-axiom-of-choice) in the small-model construction of [F1], the common-family construction of [F1], and the imported categorical foundations of [F3]. Choices for extending the functor along the small-domain equivalence take place in the fixed larger universes of [F0], as in [F4].

## Justification
1.1 With the qcqs and size conventions of [F0] and AC as in [A1], use the common-family model of [F1] and apply [F3] to its whole coherent diagram and to each full support subfamily. This defines the displayed spectra, inclusion maps and all-integer groups independently of equivalent small presentations, as proved in [F4]. [F0, F1, F3, F4, A1]

2.1 Apply [F3] to the exact pullbacks and coherent separately exact pairings in [F2]. The functorial, ring, module and support-product assertions are precisely those of [F4]; smash of shifted sphere maps gives the degree i+j formula. The unit belongs to the ambient Perf(X), so it does not create a unit in a proper support category. This proves the interface. [F2, F3, F4, step 1.1] ∎

## Scope of separate inputs
A degree-zero comparison with a Grothendieck group, comparison with a particular classical nonconnective model, and a scheme localization theorem identifying a support category as the fiber are separate results with their own hypotheses. No such theorem is inferred from this definition. No identification with coherent-sheaf G-theory on a singular scheme is made.
