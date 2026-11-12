---
title: General equicharacteristic scope and the standing filtration restriction
status: published
research_item: lem-author-0cc80c1b5792-noetherian-scope
dependency_level: 14
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: arXiv:2309.08463v1 (15 September 2023; internal date 18 September
        2023), Introduction, footnote 1, printed/PDF page 2
      statement: Equal characteristic means that the structure morphism to Spec Z
        factors through Spec Q or Spec F_p for one prime p.
      hypotheses: This is terminology for a scheme X; it requires a global prime-field
        factorization. It is not merely a condition separately on residue-field
        characteristics.
      reading_limits: For this repair, read the primary v1 PDF text at printed page 2,
        Introduction footnote 1 and its surrounding scope paragraph, through the
        web PDF text extractor. Only the terminology is imported here. No
        page-image inspection or reconstruction of the filtration or
        valuation-dimension theorems is claimed; those results are used through
        the declared current suppliers.
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-filtration](item-def-motivic-filtration)
- [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input)
- [lem-author-0cc80c1b5792-valuative-conventions](item-lem-author-0cc80c1b5792-valuative-conventions)
- [thm-author-0cc80c1b5792-valuation-input](item-thm-author-0cc80c1b5792-valuation-input)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · arXiv:2309.08463v1 (15 September 2023; internal date 18 September 2023), Introduction, footnote 1, printed/PDF page 2 `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice. Fix compatible nested Grothendieck universes $\mathcal U\in\mathcal V\in\mathcal W$, with $\omega\in\mathcal U$ and the field, scheme and ring data in $\mathcal U$. Retain the compatible enlargements and smallness conventions of the supplied valuative-dimension, spectral and perfect-complex constructions. These size premises are additional to Choice. Here equicharacteristic in Elmanto–Morrow's sense means that the structure map $X\to\operatorname{Spec}\mathbb Z$ factors through $\operatorname{Spec}F$ for $F=\mathbb Q$ or $F=\mathbb F_p$ for some prime $p$. Every nonempty finite-dimensional Noetherian equicharacteristic scheme lies in the source filtration's finite-valuative-dimension domain: it is quasi-compact and quasi-separated (qcqs), and its source valuative dimension equals its finite Krull dimension. Write $G^\bullet(X)$ for the actual $\mathbb N$-indexed source prime-field filtered algebra, with $G^0(X)\simeq K(X)$. On schemes over the standing field, its restriction agrees with the nonnegative part of the local motivic filtration, including transitions, products and actual stage maps to $K$. On the full prime-field scope define $F^j_{\mathrm{mot}}K(X)=G^{\max(j,0)}(X)$ for $j\in\mathbb Z$, using the canonical multiplicative extension. After the supplied zeroth-stage identification, negative stages are $K(X)$, transitions among nonpositive stages and their maps to $K(X)$ are identities. On schemes over the standing field this extended diagram is exactly the completed local filtration.

## Facts & Assumptions
**Given:** The Axiom of Choice, the nested universes, compatible enlargements and smallness assumptions of the Statement, and a nonempty finite-dimensional Noetherian scheme $X$ with the stated global prime-field factorization, or its standing-field specialization.

**Goal:** Preserve the full equicharacteristic domain instead of silently restricting the theorem to one fixed base field.

[F1] [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input) supplies the actual nonnegative source filtered algebra for every prime field, including its zeroth-stage equivalence to $K$. [def-motivic-filtration](item-def-motivic-filtration) defines the nonnegative part of its standing-field version by actual restriction from that source, and then uses the integer extension in [F8].

[F2] [lem-author-0cc80c1b5792-valuative-conventions](item-lem-author-0cc80c1b5792-valuative-conventions) and [thm-author-0cc80c1b5792-valuation-input](item-thm-author-0cc80c1b5792-valuation-input) give the source convention, Krull dimension and equality for locally Noetherian schemes.

[F3] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the Choice premises of the selected filtration in [F1], the valuation comparison in [F2] and the topological results in [F5]. In [F1] it licenses the common-family perfect-complex realization and essentially small nonconnective-functor domain specified in [def-motivic-filtration](item-def-motivic-filtration). The proof of the open-subset result in [F5] uses Choice for recursive selections; its hypothesis is retained here.

[F4] [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) gives a finite affine open cover by spectra of Noetherian rings, as well as the locally Noetherian property. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines quasi-compactness and quasi-separatedness; the latter requires every intersection of two affine opens to be quasi-compact.

[F5] Under Choice, [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) makes the spectrum of each Noetherian ring a Noetherian topological space, and [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) makes every open subset of such a space quasi-compact, including the empty open subset.

[F6] Reference 0, Introduction footnote 1, supplies precisely the global prime-field meaning of equicharacteristic used in the Statement and Given clause.

[F7] [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specifies the universe closure conditions, without asserting existence of universes containing prescribed data. Assume the nested universes and compatible size bounds of the Statement. Use them simultaneously in [lem-author-0cc80c1b5792-valuative-conventions](item-lem-author-0cc80c1b5792-valuative-conventions), [thm-author-0cc80c1b5792-valuation-input](item-thm-author-0cc80c1b5792-valuation-input) and [def-motivic-filtration](item-def-motivic-filtration): scheme and ring data are in $\mathcal U$, indexing diagrams and objects obey the supplied smallness conventions, and larger categories and the common-family perfect-complex realization use the compatible larger universes and enlargements. Their existence is a size assumption separate from the Choice premise in [F3].

[F8] [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension) supplies the canonical coherent multiplicative integer extension $F^j=G^{\max(j,0)}$ of a nonnegative tower $G$, after identifying its zeroth stage with $K$ by the supplied natural equivalence. It preserves the nonnegative stages, transitions, products and augmentation; nonpositive stages form the constant $K$ diagram with identity maps to $K$. Its Choice and compatible nested-universe premises are retained in [F3] and [F7]. [def-motivic-filtration](item-def-motivic-filtration) uses exactly this construction after prime-field restriction.

## External input
Only the terminology in [F6] is imported directly from reference 0, with the locator, hypotheses and reading limits recorded there. The geometric domain check and the application of the declared filtration and dimension suppliers are the local proof below.

## Proof
1.1 Under the compatible universe bounds in [F7], by [F4] write $X=\bigcup_{i=1}^n U_i$ with $U_i=\operatorname{Spec}A_i$ and each $A_i$ Noetherian. Under the assumed Choice premise in [F3], [F5] makes each $U_i$ Noetherian as a topological space. For any open subset $W\subseteq X$, each $W\cap U_i$ is open in $U_i$, hence quasi-compact by [F5]. An open cover of $W$ restricts to a cover of every $W\cap U_i$; a finite subcover on each of the finitely many pieces gives a finite subcover of $W$. Thus every open $W$ is quasi-compact. Taking $W=X$ and then $W=U\cap V$ for any two affine opens proves that $X$ is qcqs by [F4]. The assumed global factorization, with the terminology in [F6], therefore places $X$ in the prime-field domain of [F1]. Since $X$ is locally Noetherian, [F2] gives $\dim_vX=\dim X<\infty$. [F1, F2, F3, F4, F5, F6, F7, given]

2.1 Under the assumed Choice premise in [F3] and compatible universe bounds in [F7], evaluate the actual nonnegative prime-field filtered algebra of [F1] on $X$, denoting it by $G^\bullet(X)$ and identifying its zeroth stage with $K(X)$ through the supplied natural equivalence. Its stage maps to $K(X)$ are the transitions to stage zero followed by that equivalence. Apply [F8] to define $F^j_{\mathrm{mot}}K(X)=G^{\max(j,0)}(X)$ with the supplied coherent products and augmentation. Nonnegative stages and all their structure maps are unchanged; nonpositive stages form the constant $K(X)$ diagram with identity maps to $K(X)$. If $X$ carries a structure over the standing field, [F1] identifies the restriction of $G^\bullet$ with the nonnegative part of the local filtration. Applying the same [F8] construction to that restriction gives the entire local integer-indexed diagram, so stages, transitions, multiplication and augmentation agree after extension. There is no independently selected filtration to compare, and no finite-type or fixed-field condition was inserted into step 1.1. [F1, F3, F7, F8, step 1.1] ∎
