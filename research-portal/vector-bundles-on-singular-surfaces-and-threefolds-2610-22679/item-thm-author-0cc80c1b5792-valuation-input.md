---
title: External valuative dimension comparison on locally Noetherian schemes
status: published
research_item: thm-author-0cc80c1b5792-valuation-input
dependency_level: 6
sources:
  references:
    - title: Elden Elmanto, Marc Hoyois, Ryomei Iwasa and Shane Kelly, Cdh descent,
        cdarc descent, and Milnor excision
      url: https://eldenelmanto.com/wp-content/uploads/2020/04/excisev3-1.pdf
      locator: §2.3, definitions and Lemma 2.3.1, printed p. 9; Proposition 2.3.2(1),
        (8), (9) and its proof, printed pp. 9–10; Corollary 2.3.4, printed p. 10
        (PDF pages 9–10)
      statement: For domains, valuative dimension uses valuation overrings in the
        fraction field; for rings it uses prime quotients, and for schemes
        affine opens. It is local on open covers, dominates Krull dimension, and
        equals Krull dimension on locally Noetherian schemes.
      hypotheses: Commutative unital rings and arbitrary schemes for the definitions,
        locality and inequality; locally Noetherian schemes for equality. No
        finite-dimensional, quasi-compact, integral or reduced hypothesis is
        imposed. The local use retains AC. The zero-ring and empty-scheme value
        -1 is a local convention, not an asserted source convention.
      reading_limits: Freshly read the primary PDF text of section 2.3 through
        Corollary 2.3.4, including Lemma 2.3.1 and Proposition 2.3.2 with proof.
        Jaffard, pp. 55–67, cited there, was not read or reconstructed. Both
        PDF-page screenshot requests failed; no visual inspection is claimed.
        The local chain-dimension helper supplies the prime-chain
        interpretation; the separate compatibility lemma supplies agreement on
        domains of the prime-quotient extension.
external_input: true
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility](item-lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-adjudicate-ec5e8f9ed7c3-valuation-chain-dimension](item-lem-adjudicate-ec5e8f9ed7c3-valuation-chain-dimension)
- [` Elden Elmanto, Marc Hoyois, Ryomei Iwasa and Shane Kelly, Cdh descent, cdarc descent, and Milnor excision · §2.3, definitions and Lemma 2.3.1, printed p. 9; Proposition 2.3.2(1), (8), (9) and its proof, printed pp. 9–10; Corollary 2.3.4, printed p. 10 (PDF pages 9–10) `](https://eldenelmanto.com/wp-content/uploads/2020/04/excisev3-1.pdf)


## Statement
Assume the Axiom of Choice. The Jaffard valuative dimension of a domain is the supremum of the Krull dimensions of valuation overrings inside its fraction field. For an arbitrary ring it is the supremum of these dimensions over prime quotients; for a scheme take the supremum over affine opens. The zero ring and the empty scheme have valuative dimension $-1$.

For any scheme $X$, write $A_U=\Gamma(U,\mathcal O_X|_U)$ for the coordinate ring of an affine open subscheme $U$. Its **Krull dimension** here means $\dim X=\sup_{U\subseteq X\text{ affine open}}\dim A_U$, using ring Krull dimension and allowing the value infinity; set $\dim\varnothing=-1$. A scheme is **locally Noetherian** if it has an affine open cover by spectra of Noetherian rings.

Valuative dimension is local on arbitrary open covers: $\dim_vX=\sup_i\dim_vU_i$ whenever $X=\bigcup_iU_i$. Moreover, $\dim X\leq\dim_vX$ for every scheme, and $\dim_vX=\dim X$ for every locally Noetherian scheme, including those of infinite dimension. The supremum of an empty family in these formulas is $-1$.

## Facts & Assumptions
**Given:** Schemes and commutative rings with identity, in fixed universes, under the Axiom of Choice.

**Goal:** Import the precise convention, open-local property and locally Noetherian comparison required by the source filtration theorem.

[F1] [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) supplies domains, fraction fields, valuation overrings, prime quotients, ring Krull dimension and the affine-open scheme convention. Use the actual coordinate rings $A_U$ in the Statement; affine opens form a set, so the displayed supremum is well-defined in $\{-1,0,1,\ldots,\infty\}$. The ring dimension is invariant under isomorphism because an isomorphism bijects prime ideals and preserves the lengths of their strict chains. Hence the definition is independent of affine presentations.

[F2] [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) supplies exactly the locally Noetherian hypothesis in the Statement. Quasi-compactness is not part of that hypothesis.

[F3] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Its identified use is the classical valuation-dimension characterization imported in [lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility](item-lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility), which supplies agreement of the domain and prime-quotient formulas used in [F1]. The EHIK comparison in [F4] is retained in this classical setting; no choice-free reconstruction of its Jaffard inputs is claimed. Forming the suprema does not require choosing a valuation witness for each prime or affine open.

[F4] Reference 0, EHIK §2.3, Lemma 2.3.1 and Proposition 2.3.2(1), (8), (9), supplies the imported convention, open-cover formula, inequality and locally Noetherian equality. Its hypotheses are applied exactly as stated: arbitrary schemes for locality and inequality, locally Noetherian schemes for equality.

[F5] [lem-adjudicate-ec5e8f9ed7c3-valuation-chain-dimension](item-lem-adjudicate-ec5e8f9ed7c3-valuation-chain-dimension) explicitly supplies the equality between the supremum of Krull dimensions of valuation overrings and the supremum of lengths of finite strict valuation-overring chains in the fraction field, with or without requiring the final ring to be that field. It applies to every nonzero domain, without finite-dimensional or Noetherian assumptions, and requires no Choice premise. This is the translation used to apply [F4] to the convention in [F1].

## External input
Import [F4] with the exact locator, hypotheses and reading limits in reference 0. The source gives finite strict chains of valuation overrings and their equivalent rank formulation. The prime-chain interpretation is the stated conclusion of [F5]; [F3] separately supplies compatibility of the domain and prime-quotient formulas in [F1]. The zero-ring and empty-scheme values are local conventions from [F1] and the Statement, rather than attributed to an unstated source convention; with both dimensions equal to $-1$, the empty-scheme comparison is immediate.

The Noetherian comparison includes reducible and nonreduced schemes. It concerns valuation overrings of prime quotients in their own fraction fields, not a bound on the dimensions of all valuation rings in arbitrary extension fields mapping to $X$. The imported result is not proved here; the deeper Jaffard comparisons in the source proof remain external inputs.
