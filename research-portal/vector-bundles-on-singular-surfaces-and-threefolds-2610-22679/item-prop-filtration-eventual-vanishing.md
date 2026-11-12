---
title: Eventual homotopy vanishing of the motivic tower
status: published
research_item: prop-filtration-eventual-vanishing
dependency_level: 18
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Frozen v1 PDF, printed p. 9, Lemma 4.2, proof, both boundedness
        applications
      statement: The proof uses eventual vanishing of actual motivic-stage homotopy
        groups in degree zero and in each fixed negative degree, citing
        Elmanto–Morrow Theorems 4.12 and 4.27.
      hypotheses: A Noetherian scheme of finite dimension d over a field k; the proof
        treats degree zero and fixed negative homotopy degrees.
      reading_limits: This round read the frozen article extraction at PDF/printed p.
        9, Lemma 4.2 and its full proof. No fresh visual PDF inspection is
        claimed. The extension to every fixed integer degree, explicit
        empty-scheme convention and size-contract clarification are local
        deductions, not attributed to that passage. The generated target, all
        direct supplier bodies and its sole direct consumer were read; this is
        no independent acceptance record.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: arXiv v1 (15 September 2023; internal date 18 September 2023),
        Introduction footnote 1 p. 2; Section 2.2 pp. 11–12; Theorem 4.12(1) p.
        22 and boundedness paragraph p. 23; Theorem 4.27(1) and boundedness
        paragraph p. 29
      statement: "The actual motivic filtration is bounded: some B >= 0 bounds each
        integer stage r in cohomological degrees at most B-r."
      hypotheses: X is qcqs over Q or F_p and has finite valuative dimension. Section
        2.2 specifies the integer-indexed filtration convention.
      reading_limits: This round read primary arXiv v1 PDF text at Introduction
        footnote 1, all of Section 2.2, both theorem statements and their
        boundedness proof paragraphs at the listed locators. Use qualitative
        boundedness through the declared supplier; exclude the printed numerical
        homological estimates. Trace/descent foundations, prerequisite proofs
        and optimal constants were not reconstructed. No fresh page-image
        inspection, byte-pinned download or independent acceptance is claimed.
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [lem-adjudicate-5eb16844831b-empty-motivic-stages](item-lem-adjudicate-5eb16844831b-empty-motivic-stages)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [lem-author-0cc80c1b5792-valuative-conventions](item-lem-author-0cc80c1b5792-valuative-conventions)
- [lem-author-0cc80c1b5792-noetherian-scope](item-lem-author-0cc80c1b5792-noetherian-scope)
- [lem-author-0cc80c1b5792-actual-bound](item-lem-author-0cc80c1b5792-actual-bound)
- [lem-author-0cc80c1b5792-threshold](item-lem-author-0cc80c1b5792-threshold)
- [lem-author-0cc80c1b5792-finite-degrees](item-lem-author-0cc80c1b5792-finite-degrees)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · Frozen v1 PDF, printed p. 9, Lemma 4.2, proof, both boundedness applications `](https://arxiv.org/abs/2610.22679v1)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · arXiv v1 (15 September 2023; internal date 18 September 2023), Introduction footnote 1 p. 2; Section 2.2 pp. 11–12; Theorem 4.12(1) p. 22 and boundedness paragraph p. 23; Theorem 4.27(1) and boundedness paragraph p. 29 `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice. Fix compatible nested Grothendieck universes $\mathcal U\in\mathcal V\in\mathcal W$ with $\omega\in\mathcal U$, containing the field, ring and scheme data in $\mathcal U$. Retain simultaneously the compatible enlargements and smallness conventions of the supplied valuative-dimension, actual-filtration, integer-extension, perfect-complex and spectral constructions. These size hypotheses, including universe existence, are assumed separately from Choice. Let $X$ be a finite-dimensional Noetherian equicharacteristic scheme of Krull dimension $d$, with equicharacteristic meaning that its structure map factors through $\operatorname{Spec}\mathbb Q$ or $\operatorname{Spec}\mathbb F_p$. Here $d=\sup_{U\subseteq X}\dim\Gamma(U,\mathcal O_X|_U)$, where $U$ ranges over affine open subschemes, ring dimension is the prime-chain dimension (the zero ring has dimension $-1$), and $\dim\varnothing=-1$. Finite-dimensional means that this supremum is finite. Use the actual source motivic filtration on that prime-field category; on schemes over the standing field this is exactly the completed local filtration. Then for each fixed integer $q\leq0$ used in the article there is $\ell_0(q)$ such that
$$\pi_qF^{d+\ell}_{\mathrm{mot}}K(X)=0\qquad(\ell\geq\ell_0(q)).$$
Indeed the same eventual vanishing holds in every fixed integer homotopy degree. The threshold may depend on that degree. For nonempty $X$, the finite-valuative-dimension requirement of the source is satisfied because $\dim_vX=\dim X$ for Noetherian schemes; the empty scheme is handled directly below. This is vanishing of the actual stage groups, stronger than merely vanishing of their images in $K_q(X)$.

## Facts & Assumptions
**Given:** The Axiom of Choice; compatible nested Grothendieck universes $\mathcal U\in\mathcal V\in\mathcal W$ with $\omega\in\mathcal U$, containing the field, ring and scheme data in $\mathcal U$; the simultaneous compatible enlargements and smallness assumptions of the Statement and [F8], including their existence separately from Choice; and the stated Noetherian finite-dimensional scheme with its actual compatible source filtration.

**Goal:** Supply the exact eventual-stage assertion used in the article without narrowing the original scheme scope.

[F1] [lem-author-0cc80c1b5792-valuative-conventions](item-lem-author-0cc80c1b5792-valuative-conventions) and [lem-author-0cc80c1b5792-noetherian-scope](item-lem-author-0cc80c1b5792-noetherian-scope) match the dimension convention and check the complete source domain.

[F2] [lem-author-0cc80c1b5792-actual-bound](item-lem-author-0cc80c1b5792-actual-bound) supplies the actual stagewise bound; [lem-author-0cc80c1b5792-threshold](item-lem-author-0cc80c1b5792-threshold) produces the required thresholds.

[F3] [lem-author-0cc80c1b5792-finite-degrees](item-lem-author-0cc80c1b5792-finite-degrees) records the equivalent degreewise property and finite-degree compatibility without asserting an unqualified uniform bound.

[F4] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the inherited Choice premises of [F1]–[F3], [F7] and [def-motivic-filtration](item-def-motivic-filtration) when their selected actual source tower and perfect-complex $K$-theory realization are used. It adds no restriction to the geometric scope of $X$.

[F5] [lem-adjudicate-5eb16844831b-empty-motivic-stages](item-lem-adjudicate-5eb16844831b-empty-motivic-stages) proves zero actual stages on the empty scheme without invoking nonempty-scheme suppliers or a descent property of the stages.

[F6] [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) defines the Noetherian hypothesis: a finite affine open cover by spectra of Noetherian rings. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) supplies ring Krull dimension, including dimension $-1$ for the zero ring, and the intrinsic coordinate ring $\Gamma(U,\mathcal O_X|_U)$ of each affine open. The Statement defines scheme Krull dimension as the supremum of these ring dimensions. The set of affine opens and their intrinsic coordinate rings make this unambiguous; no affine presentation is selected. Its stipulated finite value is an integer, equal to $-1$ for the empty scheme.

[F7] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stage spectra, zero spectrum and integer homotopy groups $\pi_q(E)$ in its fixed compatible universes. Each $\pi_q$ is an abelian group; the displayed zero means the zero group. [def-motivic-filtration](item-def-motivic-filtration) supplies $K_q(X)=\pi_qK(X)$ and the image subgroups of the actual augmentation to $K(X)$.

[F8] [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specifies the universe closure conditions; it does not assert the existence of universes containing prescribed data. Assume the nested universes and data containment of the Statement and Given. Small spaces and indexing diagrams are $\mathcal U$-small, their infinity-categories are formed in $\mathcal V$, and the infinity-category of those categories in $\mathcal W$, with the compatible enlargements of [def-stable-spectra-interface](item-def-stable-spectra-interface). Here small means belonging to $\mathcal U$ up to isomorphism, and essentially small means equivalent to a $\mathcal U$-small infinity-category. Retain simultaneously the compatible size bounds and enlargements for the valuative-dimension constructions in [F1], the actual source tower and integer extension in [lem-author-0cc80c1b5792-noetherian-scope](item-lem-author-0cc80c1b5792-noetherian-scope) and [def-motivic-filtration](item-def-motivic-filtration), and the common-family perfect-complex realization with its essentially small nonconnective-functor domain. These are the size premises inherited by [lem-author-0cc80c1b5792-actual-bound](item-lem-author-0cc80c1b5792-actual-bound), [lem-author-0cc80c1b5792-threshold](item-lem-author-0cc80c1b5792-threshold), [lem-author-0cc80c1b5792-finite-degrees](item-lem-author-0cc80c1b5792-finite-degrees) and [lem-adjudicate-5eb16844831b-empty-motivic-stages](item-lem-adjudicate-5eb16844831b-empty-motivic-stages). Their simultaneous existence is assumed separately from [F4].

## External input
Reference 0 records the article's two eventual-stage uses. Reference 1 supplies boundedness through [F2]; its finite-valuative-dimension hypothesis is discharged by [F1]. Only that qualitative premise is imported. The threshold application, empty case and extension to every fixed integer degree are local deductions using the declared suppliers, not a reconstruction of the external filtration theorem.

## Proof
1.1 Under the separately assumed size premises of [F8], use the geometric convention of [F6] and spectral conventions of [F7]. If $X$ is empty, [F5] gives all stage vanishings at every integer index, so the eventual assertion holds in particular for $d=-1$, without using a source empty-dimension convention. Suppose henceforth that $X$ is nonempty. Under the inherited Choice premise in [F4] and the size premises in [F8], by [F1] the scheme is in the source’s qcqs prime-field domain and has finite source valuative dimension. The source boundedness theorem therefore gives $B(X)$ and the stagewise homotopy interpretation of [F2]. When $X$ is over the standing field, these are the same actual stage maps as the completed local definition. [F1, F2, F4, F5, F6, F7, F8, given]

2.1 For nonempty $X$, the finite dimension $d$ of [F6] is an integer. Under the Choice and size premises of [F4] and [F8], apply the threshold lemma of [F2] with anchor $t=d$. It gives the conclusion for each fixed $q$, including all the nonpositive degrees required by the article. The local degreewise statement and finite-set version are [F3]. This proves the full proposition. [F1, F2, F3, F4, F6, F7, F8, step 1.1] ∎
