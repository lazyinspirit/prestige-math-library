---
title: Rational splitting of the motivic tower
status: published
research_item: prop-rational-weight-splitting-input
dependency_level: 12
sources:
  references:
    - title: Motivic cohomology of equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: September 2023 PDF v1, Theorems 4.12(1)–(3) and 4.27(1)–(3), printed
        pp. 22 and 29; Section 2.2, pp. 11–12; proof of Lemma 7.1, p. 49
      statement: For a qcqs Q-scheme, respectively qcqs F_p-scheme, of finite
        valuative dimension, the motivic filtration on K is bounded and
        naturally rationally equivalent, as a filtered spectrum, to the direct
        sum of its nonnegative weight-graded pieces; its spectral sequence
        degenerates rationally.
      hypotheses: X is quasi-compact and quasi-separated, is a scheme over Q or over
        F_p for a prime p, and has finite valuative dimension.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Current repair read the primary PDF text at Section 2.2, Theorems
        4.12 and 4.27 with their boundedness paragraphs, and the opening proof
        of Lemma 7.1. Import the tower and qualitative boundedness and splitting
        only; no numerical homological bound or introductory comparison is used.
        The deep splitting proof was not reconstructed. Formal consequences
        below are local applications of the declared suppliers. No new visual
        inspection or acceptance is claimed. Current maintenance read the
        assigned body and current supplier interfaces; no fresh primary-source
        or page-image reading, independent review or acceptance is claimed."
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber)
- [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting)
- [lem-author-9f61e4df2141-split-tower-boundaries](item-lem-author-9f61e4df2141-split-tower-boundaries)
- [lem-author-9f61e4df2141-split-couple-degeneration](item-lem-author-9f61e4df2141-split-couple-degeneration)
- [lem-author-9f61e4df2141-split-image-filtration](item-lem-author-9f61e4df2141-split-image-filtration)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field)
- [math:thm-z-mod-p-is-a-field](https://alphabetamath.cc/item/thm-z-mod-p-is-a-field)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-adjudicate-7eb670bebc1b-spectral-rationalization](item-lem-adjudicate-7eb670bebc1b-spectral-rationalization)
- [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface)
- [math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple)
- [` Motivic cohomology of equicharacteristic schemes · September 2023 PDF v1, Theorems 4.12(1)–(3) and 4.27(1)–(3), printed pp. 22 and 29; Section 2.2, pp. 11–12; proof of Lemma 7.1, p. 49 `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice and use the universes of the supplied perfect-complex $K$-theory interface. Let $X$ be a quasi-compact quasi-separated scheme over $\mathbb Q$ or over $\mathbb F_p$ for a prime $p$, of finite valuative dimension in the supplied convention. Let $F^\bullet_{\mathrm{mot}}K(X)$ be the Elmanto–Morrow motivic filtration on that nonconnective $K$-theory spectrum. Rationalization means applying $E\mapsto E_{\mathbb Q}=E\wedge\mathbb S_{\mathbb Q}$ to every stage and the augmentation, where $\mathbb S_{\mathbb Q}=\operatorname*{colim}(\mathbb S\xrightarrow{2}\mathbb S\xrightarrow{3}\mathbb S\xrightarrow{4}\cdots)$ is the rational sphere. This is exact and naturally induces $\pi_i(E_{\mathbb Q})\cong\pi_i(E)\otimes_{\mathbb Z}\mathbb Q$ for every integer $i$. There is a natural equivalence of augmented filtered spectra from this rationalized tower to the tail tower

$$q\longmapsto\bigoplus_{j\geq q}\mathbb Q(j)^{\mathrm{mot}}(X)[2j] \quad(q\geq0),$$

extended constantly for $q\leq0$. Here $\mathbb Q(j)^{\mathrm{mot}}(X)$ denotes the rationalization of Elmanto–Morrow's weight-$j$ motivic cohomology spectrum, and $[2j]$ is its $2j$-fold suspension. In particular, the associated motivic spectral sequence has zero differentials after rationalization. The induced image filtration has successive quotients given by the homotopy groups of the corresponding rational weight pieces.

## Statement references

[def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field)

[math:thm-z-mod-p-is-a-field](https://alphabetamath.cc/item/thm-z-mod-p-is-a-field)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[lem-adjudicate-7eb670bebc1b-spectral-rationalization](item-lem-adjudicate-7eb670bebc1b-spectral-rationalization)

[prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface)

[math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple)

## External input
The existence, boundedness and natural rational filtered splitting of the Elmanto–Morrow tower are imported from the cited theorems. Their construction and proof are not reconstructed here. The numbered argument locally applies this imported splitting and the supplied formal lemmas; it does not claim a local proof of the splitting input. In characteristic zero the cited theorem additionally asserts multiplicativity of its equivalence; no multiplicativity of the splitting is asserted here in positive characteristic. The splitting by itself is not a terminal-edge isomorphism: a particular edge comparison also requires the appropriate graded identification and high-filtration vanishing.

## Facts & Assumptions
**Given:** Choice, the fixed universes, $X$ as in the statement and the cited Elmanto–Morrow motivic filtration.

**Goal:** Obtain the stated splitting and its formal spectral-sequence and image-filtration consequences.

[F0] [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) supplies a scheme over a base, here $\operatorname{Spec}\mathbb Q$ or $\operatorname{Spec}\mathbb F_p$. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) supplies the qcqs hypotheses, [math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field) supplies the rational field and [math:thm-z-mod-p-is-a-field](https://alphabetamath.cc/item/thm-z-mod-p-is-a-field) supplies $\mathbb F_p=\mathbb Z/p\mathbb Z$ for prime $p$. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supplies $K(X)$, its universes and homotopy indexing; [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) supplies the valuative-dimension convention. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies smash, suspension and small coproducts, and [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies coherent augmented towers, graded cofibers and image filtrations.

[A1] Choice is inherited from the specified perfect-category and nonconnective $K$-theory interface and is used when invoking that model of $K(X)$. Choice is also retained in the supplied stable and rationalization foundations. The formal consequences of a supplied split tower introduce no additional selection step. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The external input in Elmanto–Morrow, Theorems 4.12 and 4.27, supplies the natural rational filtered splitting under the stated respective hypotheses. The decreasing-filtration convention is Section 2.2; the proof of Lemma 7.1 explicitly writes the split stage $q$ as the sum over weights $j\geq q$ (there for affine schemes). This is the stagewise meaning of the filtered splitting in the two theorems, not an affine restriction on those theorems.

[F2] [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber) and [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting) identify the graded pieces and zero connecting maps of the tail tower.

[F3] [lem-author-9f61e4df2141-split-tower-boundaries](item-lem-author-9f61e4df2141-split-tower-boundaries) transports those zero boundaries across a tower equivalence, and [lem-author-9f61e4df2141-split-couple-degeneration](item-lem-author-9f61e4df2141-split-couple-degeneration) gives zero differentials in its tower spectral sequence.

[F4] [lem-author-9f61e4df2141-split-image-filtration](item-lem-author-9f61e4df2141-split-image-filtration) identifies the successive image-filtration quotients for such a splitting.

[F5] [lem-adjudicate-7eb670bebc1b-spectral-rationalization](item-lem-adjudicate-7eb670bebc1b-spectral-rationalization) supplies the stated rational sphere, exact stagewise rationalization, its natural homotopy-group comparison and exactness of group rationalization. [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) constructs the associated tower spectral sequence, with $E_2^{a,b}=\pi_{-a-b}\operatorname{gr}^{-b}$ and cohomological page index starting at 2. [math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple) specifies the successive image and kernel/quotient constructions of its derived couples.

## Proof
1.1 If $X$ is a $\mathbb Q$-scheme, apply Theorem 4.12; if it is an $\mathbb F_p$-scheme, apply Theorem 4.27. In either case the qcqs and finite-valuative-dimension hypotheses are exactly those in [F1]. The imported equivalence gives the displayed natural augmented tail splitting, with graded pieces as in [F2]. The constructions and hypotheses use the interfaces in [F0], and its stagewise rationalization is that of [F5]. [A1, F0, F1, F2, F5, given]

2.1 Apply [F3] to the rationalized tower and the equivalence from step 1.1: all differentials in its tower spectral sequence vanish. This is the associated spectral sequence constructed in [F5]. Exact rationalization preserves its stage cofiber sequences, and the natural homotopy comparison in [F5] identifies the resulting initial exact couple with the original one tensored with $\mathbb Q$, including all three maps. Group rationalization preserves kernels, images and quotients, so the derived-couple formulas in [F5] inductively identify every page and differential with its tensor product with $\mathbb Q$. Thus the original motivic differentials vanish after tensoring. Apply [F4] to the same augmented equivalence to obtain the stated successive image-filtration quotients for the rationalized tower. These are formal consequences of the imported splitting and do not reconstruct it or supply a separate edge comparison. [F3, F4, F5, step 1.1] ∎
