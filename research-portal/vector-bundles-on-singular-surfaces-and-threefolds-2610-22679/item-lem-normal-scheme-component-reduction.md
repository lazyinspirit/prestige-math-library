---
title: Normal noetherian schemes reduce to integral components
status: published
research_item: lem-normal-scheme-component-reduction
dependency_level: 1
---

PDF p. 9: Normal schemes and smooth-locus restriction

## Prerequisites

- [lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)
- [math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)
- [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)
- [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:lem-intersection-affine-opens-covered-principal-opens](https://alphabetamath.cc/item/lem-intersection-affine-opens-covered-principal-opens)
- [math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)
- [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)
- [math:ex-spectrum-product-ring-disjoint-union](https://alphabetamath.cc/item/ex-spectrum-product-ring-disjoint-union)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)
- [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)


## Statement
Assume the Axiom of Choice. A noetherian normal scheme $X$ is a finite disjoint union of open-and-closed integral normal subschemes, namely its irreducible components with their restricted structure sheaves. Every affine open $\operatorname{Spec} A\subseteq X$ has $A$ a finite product of noetherian integrally closed domains. Consequently functions, units, line bundles and finite-rank vector bundles are specified componentwise; the rank of a vector bundle is constant on each component.

Here a scheme is noetherian if it has a finite affine open cover by spectra of noetherian rings; it is normal if every local ring is an integrally closed domain. An irreducible space is a nonempty space that is not the union of two proper closed subsets; an irreducible component is a maximal irreducible subset. A scheme is integral if it is irreducible and reduced, where reduced means that its structure sheaf has no nonzero nilpotent local sections. A line bundle is a locally free sheaf of rank one; a finite-rank vector bundle is a locally free sheaf of finite rank, whose rank at a point is the rank on a trivializing neighborhood.

## Statement references

[lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)

[math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

## Facts & Assumptions

[F1] Under the Axiom of Choice, a normal noetherian ring is a finite product of noetherian integrally closed domains; the zero ring is the empty product. Here noetherian means that every ideal is finitely generated, and a domain has nonzero identity and no zero divisors ([lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)).

[F2] On an affine scheme $\operatorname{Spec} A$, the stalk at a prime $\mathfrak p$ is $A_{\mathfrak p}$ ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)). A noetherian ring is normal when all these localizations are integrally closed domains ([math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)).

[F3] Schemes are locally ringed spaces covered by affine open neighborhoods ([math:def-scheme](https://alphabetamath.cc/item/def-scheme)). An open subscheme has the restricted structure sheaf ([math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)). The points of $\operatorname{Spec} A$ are proper prime ideals, its basic opens are $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, and the zero ring has empty spectrum ([math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)).

[F4] Under AC, every affine scheme is quasi-compact ([math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)). Given affine opens $U,V$ and $x\in U\cap V$, the common-principal construction in the proof of [math:lem-intersection-affine-opens-covered-principal-opens](https://alphabetamath.cc/item/lem-intersection-affine-opens-covered-principal-opens) supplies a neighborhood of $x$ which is principal in both $U$ and $V$.

[F5] The sections on $D(f)\subseteq\operatorname{Spec} A$ are $A_f$, with the canonical localization restriction maps, including the zero ring of sections on an empty basic open ([math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)). Fractions satisfy $a/s=b/t$ exactly when some allowed denominator $u$ satisfies $u(at-bs)=0$ ([math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)).

[F6] Localizations of noetherian rings are noetherian ([math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)). Under AC, if a nonempty finite family of $D(f_j)$ covers $\operatorname{Spec} A$, then $(f_1,\ldots,f_s)=A$: apply the radical criterion to $D(1)$ and use $1^n=1$. The same applies to arbitrary positive powers of the $f_j$, since their distinguished opens are unchanged ([math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)).

[F7] The spectrum of a binary product of rings is the disjoint union of the factor spectra as locally ringed spaces ([math:ex-spectrum-product-ring-disjoint-union](https://alphabetamath.cc/item/ex-spectrum-product-ring-disjoint-union)). Ring isomorphisms induce isomorphisms of affine schemes ([math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)).

[F8] Under AC, the spectrum of a noetherian ring is a noetherian topological space, meaning that descending chains of closed sets stabilize ([math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)). A noetherian topological space has finitely many irreducible closed components, which cover it ([math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)).

[F9] Sheaves satisfy locality and unique gluing for every open cover, including the empty cover of the empty set ([math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)). A sheaf of modules has sectionwise module operations compatible with restrictions, and its morphisms are sectionwise linear sheaf maps ([math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)). For an open subspace $C$, restriction of a sheaf $\mathcal G$ means $(\mathcal G|_C)(W)=\mathcal G(W)$ for $W\subseteq C$ open. Functions on $W$ mean sections of $\mathcal O_X(W)$, and units mean those sections admitting multiplicative inverses.

[F10] A finite-rank vector bundle is a finite locally free sheaf of modules, and a line bundle has rank one. Its rank is independent of the trivializing chart and locally constant, and restriction to an open subscheme preserves local freeness ([math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)).

[A1] The Axiom of Choice is assumed ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). It supplies the choice assumptions in [F1], [F4], [F6] and [F8].

## Proof

**Given:** A noetherian normal scheme $X$ and the Axiom of Choice.

**Goal:** Prove the finite open-and-closed integral normal decomposition and its stated componentwise consequences.

1.1 Fix an affine open $U=\operatorname{Spec} A$. If $U$ is empty, [F5] applied to $D(1)$ gives $A=0$, which is noetherian and the empty product in [F1]. Otherwise take a finite noetherian affine cover $V_i=\operatorname{Spec} B_i$ of $X$. By [F4], the intersections $U\cap V_i$ have common principal neighborhoods; quasi-compactness of $U$ gives finitely many of them covering $U$, say $D_U(f_j)=D_{V_{i(j)}}(g_j)$. Their section rings satisfy $A_{f_j}\cong(B_{i(j)})_{g_j}$ by [F5], so are noetherian by [F6]. To prove $A$ noetherian, fix an ideal $I\subseteq A$. Choose finitely many generators of each $IA_{f_j}$ and represent them by fractions whose numerators belong to $I$. Let $J\subseteq I$ be the ideal generated by all these finitely many numerators. Then $JA_{f_j}=IA_{f_j}$. For any $a\in I$, clearing denominators using [F5] gives integers $m_j\ge1$ with $f_j^{m_j}a\in J$. The opens $D(f_j^{m_j})$ still cover $U$, so [F6] gives $1=\sum_j c_j f_j^{m_j}$ for some $c_j\in A$. Multiplying by $a$ gives $a\in J$. Thus $I=J$ is finitely generated, and $A$ is noetherian. Normality of $X$ and [F2] now give the hypotheses of [F1], hence $A$ is a finite product of noetherian integrally closed domains. By [F7], transporting this ring isomorphism to spectra and iterating the binary-product isomorphism yields disjoint open-and-closed factor subschemes of $U$. For a domain $B$, the zero prime belongs to every nonempty basic open of $\operatorname{Spec} B$, so every nonempty open contains that point, proving irreducibility. Its sections on every nonempty basic open are localizations at nonzero elements, which are domains by the fraction relation in [F5]; hence nilpotent sections vanish on a basic open cover and vanish by [F9]. Thus each factor is integral. Every point of $X$ therefore has an integral affine open neighborhood. [F1, F2, F3, F4, F5, F6, F7, F9, A1, given]

2.1 The finite noetherian affine cover of $X$ has noetherian underlying spaces by [F8]. A descending chain of closed subsets of $X$ stabilizes when its restrictions to these finitely many opens stabilize, so $X$ is topologically noetherian. By [F8], it is covered by finitely many irreducible closed components. If a component $C$ contains $x$, choose an integral open neighborhood $U$ of $x$ from step 1.1. The nonempty open subset $C\cap U$ is dense in $C$: otherwise it and $C\setminus\overline{C\cap U}$ would be disjoint nonempty open subsets of the irreducible space $C$. Also $\overline U$ is irreducible, since a cover of it by two closed sets restricts to such a cover of $U$, forcing $U$ and then its closure into one of them. Thus $C\subseteq\overline U$, and maximality gives $C=\overline U$. Two components containing $x$ must therefore coincide. The finitely many components are pairwise disjoint, and each is open because its complement is the finite union of the others. Give each $C_i$ its restricted structure sheaf, as in [F3]. It is irreducible, reduced by the integral neighborhoods and locality in [F9], and normal because its local rings equal those of $X$. This proves the stated decomposition. For a tuple of sheaves $\mathcal G_i$ on the components, define $\mathcal G(W)=\prod_i\mathcal G_i(W\cap C_i)$ for every open $W\subseteq X$, with coordinatewise restrictions. By [F9] this is a sheaf; restriction recovers $\mathcal G_i$, while locality and gluing identify any sheaf on $X$ with this product of its restrictions. The same formulas apply to morphisms and, using sectionwise scalar restriction, to sheaves of modules. In particular $\mathcal O_X(W)\cong\prod_i\mathcal O_{C_i}(W\cap C_i)$, with inverses of units computed componentwise. Local freeness is checked on neighborhoods within the open $C_i$, so [F10] and this construction specify line bundles and finite-rank vector bundles componentwise, including their morphisms. By [F10] the rank function is well-defined and locally constant. On an irreducible component any two nonempty trivializing open neighborhoods intersect, so their ranks agree; hence the rank is constant on that component. For $X=\varnothing$ the decomposition is the empty union and these constructions use empty products, giving the unique sheaves and the zero ring of functions. [F3, F8, F9, F10, A1, step 1.1] ∎
