---
title: Enhanced affine perfect equivalence
status: published
research_item: lem-author-4f716d60801a-lifted-affine-equivalence
dependency_level: 5
sources:
  references:
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Section 1.1.2, suspension-loop construction, printed pp. 23–24;
        Notation 1.1.2.7 and Remark 1.1.2.8, printed p. 24 (one-based PDF pp.
        23–24)
      statement: Suspension is invertible in a stable infinity-category. Mapping out
        of a suspension naturally gives the based loop space of the original
        mapping space.
      hypotheses: A locally small stable infinity-category; mapping spaces based at zero.
      reading_limits: Read the live author-hosted PDF extraction of the
        suspension-loop construction, Notation 1.1.2.7 and complete Remark
        1.1.2.8 on 12 November 2026. Import these foundational assertions; the
        cited higher-category foundations are not reconstructed.
    - title: Jacob Lurie, Higher Topos Theory, 2009
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Example 1.1.3.3, Definition 1.1.3.4 and the following CW-approximation
        discussion, and Definition 1.1.3.6, printed pp. 16–17 (PDF pp. 34–35);
        Definition 1.2.10.1 and Remark 1.2.10.2, printed p. 43 (PDF p. 61)
      statement: Mapping homotopy types can be represented by CW spaces; weak homotopy
        equivalences become isomorphisms in their homotopy category. Full
        faithfulness is equivalence on mapping homotopy types; together with
        essential surjectivity on the homotopy category it characterizes an
        infinity-category equivalence.
      hypotheses: A functor between infinity-categories with mapping spaces in the
        chosen universes.
      reading_limits: Read the live author-hosted PDF extraction of Example 1.1.3.3,
        Definition 1.1.3.4 and the following CW-approximation discussion,
        Definition 1.1.3.6, Definition 1.2.10.1 and complete Remark 1.2.10.2 on
        12 November 2026. Import the model and equivalence criteria; Whitehead
        theory and infinity-category foundations are not reconstructed.
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input)
- [lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc)
- [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)
- [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)
- [math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence)
- [math:cor-higher-homotopy-groups-are-iterated-loop-components](https://alphabetamath.cc/item/cor-higher-homotopy-groups-are-iterated-loop-components)
- [math:thm-an-exact-functor-commutes-with-homology](https://alphabetamath.cc/item/thm-an-exact-functor-commutes-with-homology)
- [math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy)
- [` Jacob Lurie, Higher Algebra, September 18, 2017 · Section 1.1.2, suspension-loop construction, printed pp. 23–24; Notation 1.1.2.7 and Remark 1.1.2.8, printed p. 24 (one-based PDF pp. 23–24) `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Topos Theory, 2009 · Example 1.1.3.3, Definition 1.1.3.4 and the following CW-approximation discussion, and Definition 1.1.3.6, printed pp. 16–17 (PDF pp. 34–35); Definition 1.2.10.1 and Remark 1.2.10.2, printed p. 43 (PDF p. 61) `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)



## Statement

Assume the Axiom of Choice. Let $A$ be any commutative unital ring and $X=\operatorname{Spec}A$. Fix compatible Grothendieck universes containing $\omega$, $A$ and $X$, with larger universes for their module and derived categories, as in the derived-enhancement interface. Their existence is a separate size assumption. Write $\mathcal D(A)$ and $\mathcal D(X)$ for the infinity-localizations of unbounded cochain complexes of $A$-modules and of all Zariski $\mathcal O_X$-modules, respectively, at quasi-isomorphisms.

Degreewise associated sheaf induces an exact equivalence $\mathcal D(A)\simeq\mathcal D_{\mathrm{qc}}(X)$ of stable infinity-categories, where $\mathcal D_{\mathrm{qc}}(X)$ is the full subcategory of $\mathcal D(X)$ on objects with quasi-coherent cohomology sheaves in every degree, retaining their ambient mapping spaces and composition coherences. The finite limits and colimits of this target are inherited from $\mathcal D(X)$.

This actual functor restricts to an equivalence between the full subcategory represented by bounded complexes of finitely generated projective $A$-modules and the full locally perfect subcategory on $X$. Here bounded means zero outside a finite interval of cochain degrees, and locally perfect means locally equivalent to such a complex of finite locally free sheaves; finite locally free means locally isomorphic to $\mathcal O_U^r$ for a finite rank $r$, and degree bounds may vary with the neighbourhood.

## Statement references

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input)

[lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc)

[lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)

[math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)

[math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence)

[math:cor-higher-homotopy-groups-are-iterated-loop-components](https://alphabetamath.cc/item/cor-higher-homotopy-groups-are-iterated-loop-components)

[math:thm-an-exact-functor-commutes-with-homology](https://alphabetamath.cc/item/thm-an-exact-functor-commutes-with-homology)

[math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy)

## Facts & Assumptions

**Given:** $A$, $X$, Choice and the compatible universe assumptions in the Statement.

**Goal:** Prove the enhanced affine equivalence for degreewise associated sheaf and its restriction to the specified perfect objects.

[A1] Choice is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); the universe convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). These assumptions are used through the supplied unbounded enhancements and affine comparisons, not supplied by a choice-free local construction.

[F1] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) gives the ambient locally small stable infinity-categories, their ordinary derived homotopy categories, cochain shifts and cone cofibers, and the actual exact enhanced functor induced by an exact additive module-to-module-sheaf functor.

[F2] [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) explicitly supplies exactness of associated sheaf, preservation of quasi-isomorphisms, the ordinary unbounded affine equivalence for this same functor, and its local-perfection criterion.

[F3] [lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc) gives representative-independent local perfection and quasi-coherent cohomology. [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) and [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring) specify the bounded finite-projective representatives and their actual affine chain functor.

[F4] [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) supplies the affine scheme convention. [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme) specifies $M\mapsto\widetilde M$; [math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme) defines quasi-coherence and its isomorphism invariance. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) specifies finite locally free sheaves. The well-defined derived local-perfect condition is that of [F2] and [F3].

[F5] Higher Algebra, reference 0, supplies $\operatorname{Map}(M[1],N)\simeq\Omega\operatorname{Map}(M,N)$ at zero and invertibility of suspension in a stable infinity-category.

[F6] Higher Topos Theory, reference 1, supplies CW models for mapping homotopy types and detection of infinity-category equivalences by mapping-space weak equivalences and essential surjectivity, with the latter tested on the homotopy category. Use these based CW models, hence based compactly generated weak Hausdorff (CGWH) spaces, for homotopy-group calculations. [math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy) defines CGWH spaces, their kified mapping spaces and the based loop construction used in [F7].

[F7] [math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence) supplies the test by components and positive homotopy groups at every source basepoint. [math:cor-higher-homotopy-groups-are-iterated-loop-components](https://alphabetamath.cc/item/cor-higher-homotopy-groups-are-iterated-loop-components) gives the natural group identification $\pi_m(T,0)\cong\pi_0(\Omega^m T)$ for a based CGWH space and $m\ge1$, with multiplication given by concatenation of loops. Apply these to the models in [F6].

[F8] [math:thm-an-exact-functor-commutes-with-homology](https://alphabetamath.cc/item/thm-an-exact-functor-commutes-with-homology) applies to the exact associated-sheaf functor of [F2] between the module and module-sheaf abelian categories of [F1]. Reindex its chain convention by $C^\sharp_n=C^{-n}$ and $d^\sharp_n=d_C^{-n}$. It yields $H^n(\widetilde{C})\cong\widetilde{H^n(C)}$ naturally, for every integer $n$.

## External input

Import the suspension-loop input [F5] from source reference 0 and the mapping-type models and equivalence criterion [F6] from source reference 1, with their recorded hypotheses and reading limits. Both ambient categories in [F1] satisfy the required stability, local smallness and size conditions. The application below is local; no proof of these foundational inputs is claimed.

## Proof

1.1 By [F2], associated sheaf is exact and additive, so [F1] produces the actual exact functor $L:\mathcal D(A)\to\mathcal D(X)$. The cohomology comparison [F8] identifies $H^n(LM)$ with $\widetilde{H^n(M)}$, which is quasi-coherent by [F4]; thus $L$ lands in the stated full subcategory. The homotopy-category functor is the fully faithful functor of [F2]. For any $M,N$, iterating [F5] and taking loop components by [F7] gives $\pi_m\operatorname{Map}(M,N)_0\cong\operatorname{Hom}_{h\mathcal D(A)}(M[m],N)$ for $m\ge1$, and the corresponding formula in the ambient $\mathcal D(X)$. Exactness identifies shifts, so full faithfulness on homotopy categories gives bijectivity on components and isomorphisms on these groups at zero. To treat every basepoint, apply [F5] to $M[-1]$: the mapping spaces are naturally loop spaces, compatibly with $L$. Translation by a loop has homotopy inverse given by its reverse, since a loop followed by its reverse contracts by shortening the traversed segment. Translation therefore reduces all basepoints to zero, compatibly up to homotopy with the mapping-space map. By [F7] this map is a weak equivalence for every $M,N$; [F6] makes $L$ fully faithful into the ambient category. [A1, F1, F2, F4, F5, F6, F7, F8, construct]

2.1 The ordinary affine equivalence of [F2] gives essential surjectivity onto $\mathcal D_{\mathrm{qc}}(X)$: an isomorphism in the homotopy category is an equivalence of enhanced objects. Together with step 1.1 and [F6], this proves an infinity-category equivalence with the full target, without having assumed that target stable. Transport finite limits and colimits from $\mathcal D(A)$ through this equivalence. For any finite diagram in the target, lift the coherent diagram along an inverse equivalence; exactness of the ambient $L$ identifies its limit and colimit with the ambient ones in $\mathcal D(X)$. Their mapping-space universal properties restrict to the full target, so these ambient cones also compute its own finite limits and colimits. Thus the target has inherited finite limits and colimits and is stable, and the displayed equivalence is exact. Finally [F2] says that an object of $\mathcal D(A)$ is ring-perfect exactly when its associated object is locally perfect. Every locally perfect object lies in the target by [F3], and [F3] identifies precisely the stated bounded finite-projective representatives. Restricting the full equivalence therefore proves the perfect-subcategory assertion. [A1, F1, F2, F3, F6, step 1.1] ∎
