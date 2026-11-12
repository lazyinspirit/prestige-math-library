---
title: Exact natural regular motivic-to-cdh comparison
status: published
research_item: thm-author-149a02132c3b-em-regular-input
dependency_level: 9
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Section 2.1, printed p. 11; Section 3.3, equation (3.5), p. 14;
        Construction 4.36, p. 32; Section 6, equation (6.1) and Theorem 6.1(2),
        p. 44; proof of Theorem 6.1(2), p. 48.
      statement: The source supplies its specific cdh-local motivic presheaf, the
        natural comparison (6.1) from motivic complexes to it, and equivalence
        on regular Noetherian schemes. Section 2.1 fixes the enhanced derived
        target.
      hypotheses: F is Q or F_p for a prime p; weight r is nonnegative; schemes are
        qcqs over F. The equivalence requires regularity and Noetherianness,
        with no finite-type-over-F assumption.
      reading_limits: Freshly read the versioned PDF extraction at all listed
        statements and the complete final proof of Theorem 6.1(2). Also read
        Construction 4.34, Corollary 6.4 and footnote 12 for scope separation.
        Import the comparison theorem; its Gersten-injectivity and other
        upstream arguments are not reconstructed. The geometric application
        below is locally authored.
    - title: Kerodon, Natural Isomorphisms, Theorem 4.4.4.4 (tag 01DK)
      url: https://kerodon.net/tag/01DK
      locator: Subsection 4.4.4, Definition 4.4.4.1 and Remark 4.4.4.2; Theorem
        4.4.4.4 (tag 01DK), complete statement and its one-line proof.
      statement: A coherent natural transformation is a morphism in the functor
        infinity-category, equivalently a map from Delta^1 times the indexing
        simplicial set with specified endpoints. It is an equivalence exactly
        when each vertex component is an equivalence.
      hypotheses: An infinity-category, a simplicial indexing set, two diagrams and an
        already supplied natural transformation. Apply to the enhanced derived
        category and the nerve of an open-restriction indexing category.
      reading_limits: Read Definition 4.4.4.1 and Remark 4.4.4.2 at
        https://kerodon.net/tag/01DF, and the complete theorem and its proof
        citing Proposition 4.4.4.9 at S=Delta^0. Import the criterion; the cited
        proposition and upstream horn-filling arguments were not reconstructed.
        This criterion does not construct naturality from pointwise maps.
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:thm-regular-equals-smooth-over-perfect-field](https://alphabetamath.cc/item/thm-regular-equals-smooth-over-perfect-field)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-subspaces-and-compact-opens](https://alphabetamath.cc/item/lem-noetherian-subspaces-and-compact-opens)
- [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point)
- [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)
- [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 · Section 2.1, printed p. 11; Section 3.3, equation (3.5), p. 14; Construction 4.36, p. 32; Section 6, equation (6.1) and Theorem 6.1(2), p. 44; proof of Theorem 6.1(2), p. 48. `](https://arxiv.org/pdf/2309.08463v1)
- [` Kerodon, Natural Isomorphisms, Theorem 4.4.4.4 (tag 01DK) · Subsection 4.4.4, Definition 4.4.4.1 and Remark 4.4.4.2; Theorem 4.4.4.4 (tag 01DK), complete statement and its one-line proof. `](https://kerodon.net/tag/01DK)


## Statement
Assume the Axiom of Choice and the fixed universe bounds of the motivic-complex construction. Let $F=\mathbb Q$ or $\mathbb F_p$ for a prime $p$, and let $r\geq0$. Use its category $\mathcal C_F$ of size-bounded qcqs $F$-schemes and stable derived enhancement $\mathcal D_\infty(\mathbb Z)$, whose homotopy category is $D(\mathbb Z)$. Write $M_{r,F}=\mathbb Z(r)_{\mathrm{mot},F}$ for the supplied motivic presheaf. Write $C_{r,F}=\mathbb Z(r)_{\mathrm{cdh},F}$ for the particular cdh-local motivic presheaf, including its restriction maps, imported in External input. Both are contravariant coherent functors on $\mathcal C_F$. The actual source comparison $\eta_r:M_{r,F}\to C_{r,F}$ is a natural transformation on all these schemes and is an equivalence on every regular Noetherian $F$-scheme.

Consequently, on smooth finite-type schemes over any perfect field $k\supset F$ and their open subschemes, this comparison gives equivalences of open-restriction diagrams before applying cohomology or taking fibers, even if the schemes are not finite type over $F$. In particular, for an open immersion $V\hookrightarrow X$ with $X$ smooth finite type over $k$, it identifies the actual arrow $M_{r,F}(X)\to M_{r,F}(V)$ with $C_{r,F}(X)\to C_{r,F}(V)$. Equivalence here is in the enhanced derived diagram category, hence also in its homotopy category.

## Statement references
[def-motivic-cohomology](item-def-motivic-cohomology)

[lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

## External input
Reference 0 imports the specific presheaf $C_{r,F}$ of Section 3.3, equation (3.5), together with its functorial maps, the actual natural transformation (6.1), and Theorem 6.1(2). The comparison is imported as a map of coherent presheaves with the derived target of Section 2.1. Its substantial proof is imported, not reconstructed here. Naming this source object does not identify it with a separately constructed localization or site model. Reference 1 imports the pointwise criterion for an already supplied coherent natural transformation to be an equivalence of diagrams. The argument below is the local geometric verification and restriction application of these premises. The classical cycle comparison is a separate input, not a consequence asserted here.

## Facts & Assumptions
**Given:** The prime field, weight, Choice and size assumptions in the statement; for the application, a perfect field $k\supset F$, a smooth finite-type $k$-scheme $X$, and an open subscheme $V\subseteq X$.

**Goal:** Verify the regular Noetherian qcqs hypotheses for $X,V$ and restrict the imported comparison to the actual open diagrams.

[A1] The assumed Axiom of Choice is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). It is used through the regularity and Noetherian-topology suppliers below and the inherited derived enhancement, not for an additional choice of comparison maps. The fixed nested universes and their separate existence assumption are those of [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes), using [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). That supplier gives $\mathcal C_F$, $M_{r,F}$ and the enhanced derived target; [def-motivic-cohomology](item-def-motivic-cohomology) identifies the motivic-complex notation after restriction to field-schemes.

[F1] Reference 0 supplies $C_{r,F}$ and $\eta_r$ on all of $\mathcal C_F$, with equivalence on regular Noetherian objects. No finite-type-over-$F$ hypothesis occurs in this assertion.

[F2] Perfectness means every nonconstant irreducible polynomial is separable, as in [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field). Under [A1], [math:thm-regular-equals-smooth-over-perfect-field](https://alphabetamath.cc/item/thm-regular-equals-smooth-over-perfect-field) applies to finite-type $k$-schemes with its local-standard-smooth convention. It implies that smooth $X$ is regular: $X$ is locally Noetherian and every $\mathcal O_{X,x}$ is regular local. The finite-type condition in [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) includes quasi-compactness of the structure morphism. By [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism), inverse images of quasi-compact target opens are quasi-compact. The space $\operatorname{Spec}k$ has one point and is quasi-compact, so its inverse image $X$ is quasi-compact. By [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme), locally Noetherian plus quasi-compact means Noetherian and provides a finite affine cover by Noetherian spectra.

[F3] Under [A1], [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) gives Noetherian topological spaces for the chart spectra. The criterion in [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space) is stabilization of ascending chains of opens. Under [A1], [math:lem-noetherian-subspaces-and-compact-opens](https://alphabetamath.cc/item/lem-noetherian-subspaces-and-compact-opens) makes every open subset of a Noetherian topological space quasi-compact; its compactness conclusion means that every open cover has a finite subcover, with no Hausdorff requirement.

[F4] An open subscheme has restricted structure sheaf by [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). Every point of an open in an affine chart has a principal neighbourhood inside it by [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point). Such a neighbourhood is the scheme $\operatorname{Spec}(A_f)$ by [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion), and $A_f$ is Noetherian when $A$ is by [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations). By [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf), a stalk consists of germs represented by pairs $(N,s)$ of an open neighbourhood and a section, with two pairs equivalent when their sections agree on a smaller neighbourhood. The ring operations on structure-sheaf germs are induced by the sheaf's ring operations on a common neighbourhood.

[F5] By [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme), qcqs means quasi-compact with quasi-compact intersections of affine opens. Regularity and Noetherianness here are properties of the underlying scheme, not of its chosen structure morphism to a field.

[F6] In the enhanced target, a natural transformation between diagrams $P,Q:K\to\mathcal D_\infty(\mathbb Z)$ is a morphism in their functor infinity-category, equivalently a map $\Delta^1\times K\to\mathcal D_\infty(\mathbb Z)$ with endpoint restrictions $P,Q$, as specified by reference 1. The homotopy-category shadow of naturality has the component and commuting-square meaning of [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation). The coherent transformation itself is supplied by [F1]; no coherence is constructed from its shadow. Reference 1 detects equivalences of enhanced diagrams pointwise once that transformation exists.

## Proof
1.1 By [F2], $X$ is regular and Noetherian, with a finite affine cover $X=\bigcup_{i=1}^m\operatorname{Spec}(A_i)$ by Noetherian rings. By [F3], its underlying space is Noetherian: an ascending chain of opens stabilizes on each of these finitely many charts, hence stabilizes globally after the maximum of their stabilization indices. Every open of $X$ is therefore quasi-compact. By [F4], principal neighbourhoods inside $V$ give a cover by Noetherian affine schemes, so $V$ is locally Noetherian; its quasi-compactness makes it Noetherian by [F2]. For $x\in V$, send a germ represented by $(N,s)$ in $\mathcal O_{X,x}$ to its restriction on $N\cap V$. Conversely, a section on an open neighbourhood in $V$ is already a section on that open in $X$. The germ equivalence relation of [F4] makes both maps well-defined and mutually inverse, and restriction preserves the ring operations. Thus $\mathcal O_{V,x}\cong\mathcal O_{X,x}$, so these local rings are regular local. Intersections of affine opens in $X$ or $V$ are opens of $X$ and hence quasi-compact. Thus both $X$ and $V$ are qcqs by [F5]. This also covers the empty scheme, for which the local conditions are vacuous and the empty cover is finite. [A1, F2, F3, F4, F5, given]

2.1 Apply [F1] to obtain the actual source comparison and its regular equivalence. Forgetting from $k$ to $F$ composes each structure map with $\operatorname{Spec}k\to\operatorname{Spec}F$ and leaves the underlying scheme and arrows unchanged; it respects identities and compositions. Thus step 1.1 verifies all hypotheses of [F1] for the underlying $F$-schemes $X,V$. Precompose the supplied coherent transformation with this forgetful functor and then with any open-restriction diagram on such objects. This retains its actual restriction arrows and coherence, and every component is an equivalence. By the imported pointwise criterion of [F6], the resulting natural transformation is an equivalence of diagrams; for the single open arrow it is the stated arrow comparison. Regularity and Noetherianness do not change on forgetting the field structure, so no finite-type-over-$F$ condition is needed. This proves the locally authored application without reconstructing the imported regular comparison proof. [A1, F1, F5, F6, step 1.1] ∎
