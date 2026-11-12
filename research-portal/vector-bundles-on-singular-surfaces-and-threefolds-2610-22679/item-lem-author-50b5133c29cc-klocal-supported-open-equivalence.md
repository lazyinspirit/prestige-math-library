---
title: Supported perfect complexes are invariant under an open neighbourhood
status: published
research_item: lem-author-50b5133c29cc-klocal-supported-open-equivalence
dependency_level: 12
---

PDF p. 7: Zariski locality; PDF p. 15: Localization diagram

## Prerequisites

- [thm-author-50b5133c29cc-klocal-extension-by-zero-input](item-thm-author-50b5133c29cc-klocal-extension-by-zero-input)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)
- [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input)
- [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison)

## Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs, let $T\subseteq X$ be closed, and let $v:V\hookrightarrow X$ be a quasi-compact open containing $T$. Actual restriction induces an exact equivalence
$$v^*:\mathrm{Perf}_T(X)\xrightarrow{\sim}\mathrm{Perf}_T(V),$$
with inverse given in the supplied sheaf-derived model by degreewise module extension by zero $v_!$. It induces the natural equivalence $K_T(X)\simeq K_T(V)$, compatible with the support-to-global inclusions and restriction on global K spectra. No quasi-compactness of $X\setminus T$ is needed for this categorical excision lemma.

## Facts & Assumptions
[A1] Choice and the universe bounds are used to invoke the enhanced perfect-category and K-theory suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** $X,T,V,v$ as stated and the supplied sheaf-derived enhancement.

**Goal:** Construct an actual exact inverse on supported perfect categories, not merely a triangulated equivalence.

[F1] [thm-author-50b5133c29cc-klocal-extension-by-zero-input](item-thm-author-50b5133c29cc-klocal-extension-by-zero-input) gives actual degreewise exact functors $v_!,v^*$, their natural unit/counit, the stalk formula, and $v^*v_!=\mathrm{id}$.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines perfection locally and support by cohomology stalks; [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the actual infinity-localizations. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supplies K on the common-family realizations of these full categories; its global and supported restriction maps are induced by the common-family derived pullback.

[F3] A scheme is quasi-compact when its underlying space is quasi-compact, and quasi-separated when every intersection of two affine opens is quasi-compact. The abbreviation qcqs means both conditions. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[F4] Exactness of sequences of abelian sheaves can be checked on every stalk. Apply this to the underlying abelian sheaves of modules: stalks preserve kernels, images and cokernels, so $H^n(C)_x=H^n(C_x)$. Applied to the sequence $0\to\mathcal F\to\mathcal G\to0$, the same criterion detects isomorphisms. Thus a complex is acyclic, or a cochain map is a quasi-isomorphism, exactly when this holds at every stalk. [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)

[F5] An open immersion identifies its source with an open subscheme and its restricted structure sheaf. Write $R_v$ for ordinary module-sheaf restriction to $V$, so $R_v\mathcal G=v^{-1}\mathcal G=\mathcal G|_V$. Write $v^*_{\mathrm{mod}}\mathcal G=\mathcal O_V\otimes_{v^{-1}\mathcal O_X}v^{-1}\mathcal G$ for ordinary module pullback, distinguishing this formula from restriction until they are compared below. [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes) [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace) [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[F6] [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) supplies K-flat replacements and preservation of K-flat complexes and their quasi-isomorphisms by degreewise module pullback. K-flat means that total tensor with every acyclic complex is acyclic. [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) constructs the single localized family whose pullbacks come from those actual degreewise functors. Its inclusion-induced exact equivalences $I_X$ and $I_V$ identify the K-flat localizations with the supplied sheaf-derived categories, and restrict to their full perfect subcategories. The functor-category localization property in [F2] compares functors and natural transformations, not just objects of their homotopy categories.

## Proof
1.1 Let $F\in\mathrm{Perf}_T(V)$. Exactness and the stalk formula in [F1], with the cohomology-stalk identification in [F4], show that the cohomology of $v_!F$ equals that of $F$ on $V$ and is zero off $V$, so its support is contained in $T$. On the open $V$ it is perfect because $v^*v_!F=F$; on the open $X\setminus T$ it is acyclic, hence equivalent to the zero perfect object. These opens cover $X$ because $T\subseteq V$. Thus local perfection in [F2] makes $v_!F$ perfect on $X$. This is why closed ambient support, rather than preservation of arbitrary quasi-coherent sheaves by $v_!$, suffices. [F1, F2, F4]

1.2 The open subscheme $V$ is quasi-compact by hypothesis. Every affine open of $V$ is also an affine open of $X$, since $V$ is an open subscheme of $X$. For any two such affine opens their intersection is quasi-compact by quasi-separatedness of $X$ and [F3]. Hence $V$ is quasi-separated as well. Both $X$ and $V$ are therefore qcqs, as required for [F2] and [F6]. Under the identifications in [F5], $v^{-1}\mathcal O_X=\mathcal O_V$ with its ring structure. The module-pullback formula becomes $\mathcal O_V\otimes_{\mathcal O_V}R_v\mathcal G$. Multiplication $a\otimes s\mapsto as$ is a module-sheaf isomorphism to $R_v\mathcal G$, with inverse $s\mapsto1\otimes s$: the tensor relation gives $a\otimes s=1\otimes as$. These formulas commute with every module-sheaf morphism. Applied degreewise, they therefore give a natural chain isomorphism $v^*_{\mathrm{mod}}C\cong R_vC$ for every complex $C$, commuting with its differentials. [F3, F5, F6, given]

2.1 The degreewise unit identifies $v^*v_!$ with the identity. For $E\in\mathrm{Perf}_T(X)$ the actual counit $v_!v^*E\to E$ is a quasi-isomorphism: at points of $V$ it is an isomorphism on complex stalks, and outside $V$ the source is zero while the target is acyclic since those points lie outside $T$. The stalkwise criterion in [F4] therefore makes the counit a quasi-isomorphism of module-sheaf complexes. Hence this natural transformation becomes an equivalence in the supplied infinity-localization. Both functors are exact by [F1], and step 1.1 verifies their restrictions have precisely the claimed perfect/support domain. They therefore give mutually inverse exact functors of the actual enhanced full subcategories. [F1, F2, F4, step 1.1]

3.1 Let $\widehat{\mathcal D}(X)$ denote the K-flat localization in [F6], and let $\widehat v^*$ be its common-family pullback to $\widehat{\mathcal D}(V)$. Let $R_v^{\mathcal D}$ denote the exact functor on all sheaf-derived complexes induced by $R_v$, namely the restriction used in steps 1.1 and 2.1. On the ordinary category of K-flat $X$-complexes, step 1.2 gives a natural chain isomorphism between degreewise module pullback followed by inclusion among all $V$-complexes, and inclusion among all $X$-complexes followed by $R_v$. Both resulting functors invert quasi-isomorphisms: use [F6] for K-flat pullback and [F1] for exact restriction. The functor-category localization property in [F2] descends this actual natural isomorphism to a natural equivalence $I_V\widehat v^*\simeq R_v^{\mathcal D}I_X$. Thus this is an enhanced comparison, not merely an equality of derived objects. Restriction preserves the local finite locally free presentations of [F2] and has the same cohomology stalks at points of $V$ by [F1] and [F4]; consequently it carries $\mathrm{Perf}_T(X)$ to $\mathrm{Perf}_T(V)$, where $v^{-1}T=T$ because $T\subseteq V$. The same is true of $\widehat v^*$ under $I_X,I_V$. These are full support subcategories, so the natural equivalence restricts to them. It also commutes with their inclusions into the global perfect categories: each component and naturality map is the restriction of the very same comparison just constructed on all complexes. By step 2.1, $R_v^{\mathcal D}$ is an equivalence on supported perfect categories; since $I_X,I_V$ are equivalences there, so is $\widehat v^*$. Apply the K functor of [F2] to this equivalence and to its inclusion square. Its definition uses precisely $\widehat v^*$ for global and supported restriction, so the resulting $K_T(X)\simeq K_T(V)$ is the claimed restriction equivalence and is compatible with the support-to-global inclusions and global restriction. Extension by zero is used solely as an inverse on the support categories, without requiring it to preserve the common K-flat presentation or to be a global scheme pullback. [F1, F2, F4, F5, F6, step 1.1, step 2.1, step 1.2] ∎
