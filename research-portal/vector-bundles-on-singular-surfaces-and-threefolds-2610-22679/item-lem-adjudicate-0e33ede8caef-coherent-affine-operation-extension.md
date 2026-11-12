---
title: Coherent extension of Chern-target operations from smooth affines
status: draft
research_item: lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension
dependency_level: 15
---

## Prerequisites

- [thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input](item-thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification)
- [lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection](item-lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds, including $\omega$ in the scheme-data universe. Let $F$ be a prime field, let $i\geq1$, and let $Y_i(T)=\Omega^\infty H(\mathbb Z(i)_{\rm mot}(T)[2i])$ on all qcqs $F$-schemes. Here $H$ is the fixed Eilenberg–Mac Lane realization, $[2i]$ is cohomological shift and $\Omega^\infty$ takes the zeroth infinite-loop space. The target is the actual coherent Nisnevich sheaf of spaces obtained from the coefficient functor; it is also a Zariski sheaf.

Every natural pointed map from the actual perfect K-space to $Y_i$ on smooth affine $F$-schemes extends to all affine $F$-schemes. Restriction is an equivalence on the spaces of such maps, including their coherent coefficient diagrams. It gives a map on all qcqs schemes after ordinary Zariski sheafification of the source and composition with its unit. On any of the small Zariski, small Nisnevich and smooth big Zariski or Nisnevich sites of a qcqs $X$, this operation factors through ordinary space-valued sheafification of the perfect K-space. The canonical affine Q/perfect comparison identifies the Q-model there. Consequently each restriction diagram is a diagram of actual maps, before any inverse limit or support fiber is taken. An optional further hypercompletion gives maps between the hypercompleted models; equality with the original coefficient values is not asserted.

The same argument extends comparisons of maps out of $\mathrm{Vect}_n$ whenever these comparisons are given on smooth affines. For a smooth algebraic stack with quasi-affine diagonal, it also transports any supplied homotopy into $Y_i$ from smooth affines to all affines. This clause includes the universal bundle projective-relation diagram. It transports given homotopies and their coherent diagrams, rather than selecting compatible representatives of unrelated equalities.

## Statement references
[thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input](item-thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input)

[lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

[lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification)

[lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection](item-lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection)

## Facts & Assumptions
[A1] The assumed Choice and compatible universes discharge the enhanced K-theory, coefficients and site constructions below; their existence is an independent size premise. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The imported coherent left Kan extension and its adjunction apply to affine K-spaces, $\mathrm{Vect}_n$ and the indicated smooth algebraic stacks. The adjunction is an equivalence of mapping spaces, natural in the target. [thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input](item-thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input)

[F2] The actual coefficients are coherent Nisnevich sheaves on all qcqs schemes over $F$. Eilenberg–Mac Lane realization and the zeroth-space right adjoint preserve limits, hence the indicated target is a Nisnevich sheaf of spaces. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization) [def-stable-spectra-interface](item-def-stable-spectra-interface)

[F3] The supplied site comparison proves affine-basis detection and the sheafification/right Kan extension formula, treating nonaffine intersections on nonseparated schemes. The full affine Q/perfect comparison includes the global source unit, its actual bundle maps and coherent pullbacks. The perfect presheaf exists on all qcqs schemes, not just smooth ones. [lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection](item-lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection) [lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification) [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

## Proof
**Given:** $F,i$, the actual coefficient functor and a pointed natural operation on smooth affine $F$-schemes, with [A1].

**Goal:** Extend a whole operation and its restriction diagrams while retaining the actual coefficient values.

1.1 Let $j$ be as in [F1] and let $P$ be the actual affine perfect K-space. Adjunction and its counit equivalence give $\operatorname{Map}(P,Y_i)\simeq\operatorname{Map}(Lj^*P,Y_i)\simeq\operatorname{Map}(j^*P,j^*Y_i)$ in functor categories. Apply the same equivalence with source the terminal one-point presheaf and take fibers over the zero map to obtain pointed mapping spaces. The terminal one-point functor is itself left Kan extended: for each $F$-algebra $A$, the category of smooth $F$-algebras mapping to $A$ has the initial object $F\to A$, so the colimit of the constant point diagram is contractible. Naturality in $Y_i$ transports whole coherent coefficient diagrams. Use the analogous counit for $\mathrm{Vect}_n$ or a supplied smooth algebraic stack to obtain the last assertion. All these steps are adjunctions of coherent functors, not choices of representatives in ordinary homotopy categories. [A1, F1, F2, F3]

2.1 Extend the affine map by right Kan extension to qcqs schemes, and precompose with the canonical unit from the actual perfect presheaf to the right Kan extension of its affine restriction. By [F2] and the affine-basis formula of [F3], the right Kan extension of $Y_i$ is $Y_i$ itself. To apply that formula on all qcqs $F$-schemes, use the same two inclusions as [F3]: affines into separated qcqs schemes, then separated qcqs schemes into all qcqs schemes. Finite affine open covers exist, and their intersections in the second inclusion are qcqs separated opens of affine schemes; thus the identical comparison hypotheses hold. Equivalently, the target is the limit of its affine-open descent diagram. This constructs a natural transformation on the entire category and gives its factorization through ordinary Zariski sheafification. Restrict this one transformation to each stated site; its target remains a sheaf because the covering families and their Cech intersections remain in the ambient qcqs category. Its sheafification adjunction therefore factors through the chosen ordinary site localization. The Q/perfect equivalence in [F3] supplies the same factorization for Q. The local source unit recovers the constructed global operation. Any further hypercompletion is applied to both source and target as a functor; it is not used to identify the target's original sections. [F1, F2, F3, step 1.1] ∎
