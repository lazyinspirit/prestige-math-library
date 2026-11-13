---
title: An independent symmetric-Gaussian norm moment input
status: draft
research_item: thm-expander-prereq-gaussian-wigner-moment-input
dependency_level: 5
sources:
  references:
    - title: Afonso S. Bandeira and Ramon van Handel, Sharp nonasymptotic bounds on
        the norm of random matrices with independent entries
      url: https://arxiv.org/pdf/1408.6185
      locator: Lemma 2.2, printed/PDF pp. 6–7; Gaussian concentration display at top
        of p. 7; triangular matrix convention in Proposition 2.1 and Lemma 2.2
        on p. 6
      statement: For a real symmetric r by r matrix with independent N(0,1) entries on
        and below the diagonal, write lambda_plus=sup_{||v||=1}v^TYv and
        lambda_minus=-inf_{||v||=1}v^TYv. For every integer p>=2, E
        max(|lambda_plus-E lambda_plus|^{2p},|lambda_minus-E lambda_minus|^{2p})
        <= p! 4^{p+1} <= (2 sqrt(2p))^{2p}.
      hypotheses: Integer r>=1; real symmetric matrix; independent standard real
        Gaussian entries on one triangular half INCLUDING the diagonal;
        reflected entries identical; integer p>=2. Both extreme-value means are
        taken under this same matrix law.
      reading_limits: Read the entire statement and proof of Lemma 2.2 on PDF/printed
        pp. 6–7, the adjacent Proposition 2.1 matrix convention, and the
        following trace application on p. 7; inspected rendered page images for
        formulas. The Ledoux–Talagrand Gaussian-concentration theorems cited
        there were not read or reconstructed. Only the displayed specialized
        fluctuation estimate is imported; the local five-helper chain supplies
        the coordinate setup, integrability, comparison mean and trace transfer.
---

## Prerequisites

- [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)
- [prop-expander-prereq-gaussian-entry-moments](item-prop-expander-prereq-gaussian-entry-moments)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-b9de37ca32a7-expected-extreme-eigenvalues](item-lem-author-b9de37ca32a7-expected-extreme-eigenvalues)
- [lem-author-b9de37ca32a7-centered-extreme-reduction](item-lem-author-b9de37ca32a7-centered-extreme-reduction)
- [math:thm-minkowski-inequality-for-integrals](https://alphabetamath.cc/item/thm-minkowski-inequality-for-integrals)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [lem-author-b9de37ca32a7-even-trace-transfer](item-lem-author-b9de37ca32a7-even-trace-transfer)
- [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)
- [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)
- [` Afonso S. Bandeira and Ramon van Handel, Sharp nonasymptotic bounds on the norm of random matrices with independent entries · Lemma 2.2, printed/PDF pp. 6–7; Gaussian concentration display at top of p. 7; triangular matrix convention in Proposition 2.1 and Lemma 2.2 on p. 6 `](https://arxiv.org/pdf/1408.6185)


## Statement

Assume the Axiom of Choice. Let $Y$ be a real symmetric $r\times r$ matrix, $r\ge1$, whose entries on one triangular half including the diagonal are independent $N(0,1)$ variables. Mirrored entries coincide and the diagonal variance is one. With the vertex Hilbert-space operator norm, for every integer $\ell\ge2$,

$$(\mathbb E\|Y\|^{2\ell})^{1/(2\ell)}\le2\sqrt r+2\sqrt{2\ell}.$$

Moreover,

$$(\mathbb E\operatorname{Tr}(Y^{2\ell}))^{1/(2\ell)}\le r^{1/(2\ell)}(2\sqrt r+2\sqrt{2\ell}).$$

## Facts & Assumptions

[F1] The triangular realization has finite moments, the extreme values have common mean $0\le m\le2\sqrt r$, and the centered reduction gives $\|Y\|\le m+W$, where $W=\max(|\lambda_+-m|,|\lambda_--m|)$. [lem-author-b9de37ca32a7-triangular-norm-moments](item-lem-author-b9de37ca32a7-triangular-norm-moments), [lem-author-b9de37ca32a7-expected-extreme-eigenvalues](item-lem-author-b9de37ca32a7-expected-extreme-eigenvalues), [lem-author-b9de37ca32a7-centered-extreme-reduction](item-lem-author-b9de37ca32a7-centered-extreme-reduction).

[F2] Minkowski on a probability space gives the triangle inequality for the norm $\|X\|_{2\ell}=(\mathbb E|X|^{2\ell})^{1/(2\ell)}$; the nonnegative integral is monotone. [math:thm-minkowski-inequality-for-integrals](https://alphabetamath.cc/item/thm-minkowski-inequality-for-integrals), [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral).

[F3] The even trace moment is bounded by the corresponding operator-norm moment times $r^{1/(2\ell)}$. [lem-author-b9de37ca32a7-even-trace-transfer](item-lem-author-b9de37ca32a7-even-trace-transfer).

[F4] The specialized Gaussian concentration estimate in External input gives $\mathbb E W^{2\ell}\le\ell!4^{\ell+1}\le(2\sqrt{2\ell})^{2\ell}$ for this same triangular Gaussian matrix and every integer $\ell\ge2$.

## External input

For this same real symmetric variance-one triangular Gaussian matrix, set $S=\{v\in\mathbb R^r:\|v\|_2=1\}$. With $\lambda_+=\sup_{v\in S}v^TYv$ and $\lambda_-=-\inf_{v\in S}v^TYv$, Bandeira and van Handel prove the following Gaussian-concentration estimate in the proof of Lemma 2.2 (printed/PDF p. 7): for every integer $p\ge2$, $\mathbb E\max(|\lambda_+-\mathbb E\lambda_+|^{2p},|\lambda_--\mathbb E\lambda_-|^{2p})\le p!4^{p+1}\le(2\sqrt{2p})^{2p}$. This specialized estimate is imported. No local proof of Gaussian concentration is asserted.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish all the stated estimates.

1.1 The upper-triangular formulation is the same law as the source lower-triangular formulation: reflection merely relabels independent coordinates and leaves the diagonal standard normal. The five local preparatory lemmas fix this realization, the quadratic-process increment comparison and mean, the centered maximum reduction, and the trace transfer. By [F1], the two extreme means both equal $m$. Consequently the imported estimate in External input applies with $p=\ell$ to precisely $W$, and gives $\|W\|_{2\ell}\le2\sqrt{2\ell}$. [F1, F4, given]

2.1 The pointwise bound $0\le\|Y\|\le m+W$, monotonicity, and Minkowski in [F2] give $(\mathbb E\|Y\|^{2\ell})^{1/(2\ell)}\le\|m+W\|_{2\ell}\le m+\|W\|_{2\ell}\le2\sqrt r+2\sqrt{2\ell}$. All moments used are finite by [F1]. Applying [F3] gives the stated trace bound with the factor $r^{1/(2\ell)}$. [F1, F2, F3, step 1.1, algebra] ∎

## Source notes

The five intermediate items are local proofs, preceding this remaining external import. Their mean comparison follows the method of Lemma 2.2, using the already authored finite-net supplier; the concentration display is explicitly retained as an external premise. Read Lemma 2.2 and its complete two-page proof, checked its variance-one diagonal convention and the following trace use, and inspected the corresponding PDF images. The cited general concentration theorems were not read. No claim of a wholly local concentration proof or independent review is made.
