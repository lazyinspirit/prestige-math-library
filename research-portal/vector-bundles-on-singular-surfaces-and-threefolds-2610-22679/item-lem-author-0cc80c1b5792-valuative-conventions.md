---
title: The local valuative convention matches the source convention
status: published
research_item: lem-author-0cc80c1b5792-valuative-conventions
dependency_level: 7
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [thm-author-0cc80c1b5792-valuation-input](item-thm-author-0cc80c1b5792-valuation-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible universe bounds of the supplied valuative-dimension constructions. The completed local valuative dimension agrees, on every domain, commutative ring and scheme, with the valuation-input supplier's local completion of the source formulas. Both supplied conventions assign $-1$ to the zero ring and to the empty scheme; these explicit empty-case values are local conventions, not values explicitly specified by the cited paper. A finite-dimensional locally Noetherian scheme has finite valuative dimension equal to its Krull dimension, using the valuation-input supplier's affine-open Krull convention, which assigns $-1$ to the empty scheme.

## Facts & Assumptions
**Given:** The local definition using valuation overrings, prime quotients and affine opens, with the stated foundations and size bounds.

**Goal:** Match the actual current conventions before applying an external boundedness assertion.

[A1] Retain the Axiom of Choice and compatible universe bounds assumed in [F1] and [F2]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) supplies the local convention, including value $-1$ on the zero ring and empty scheme.

[F2] [thm-author-0cc80c1b5792-valuation-input](item-thm-author-0cc80c1b5792-valuation-input) supplies its local completion of the source formulas and the locally Noetherian comparison with its affine-open Krull dimension. Its explicit $-1$ values for the zero ring and empty scheme are local conventions, as recorded in its External input section and reference 0; they are not attributed to the cited paper.

## Proof
1.1 Under [A1], for a domain $A$, both [F1] and [F2] take the supremum of the dimensions of valuation rings $A\subseteq V\subseteq\operatorname{Frac}(A)$. Thus the domain values agree. For a nonzero ring, both take the supremum over the same prime quotients, so the ring values agree. For the zero ring both supplied conventions explicitly set the value to $-1$; this is their local completion, not an inference about an unstated source empty supremum. [A1, F1, F2]

2.1 For a nonempty scheme, both take the supremum of that ring invariant over the nonempty affine opens, so the scheme values agree by step 1.1; adding the empty affine open with local value $-1$ does not change that supremum. For the empty scheme both supplied conventions explicitly set the value to $-1$. For a nonempty locally Noetherian scheme, the comparison imported in [F2] identifies this invariant with its affine-open Krull dimension; for the empty scheme the equality follows directly from the two local $-1$ conventions. Therefore finite Krull dimension gives finite valuative dimension under these supplied conventions, without any finite-type-over-a-field assumption. [F1, F2, step 1.1] ∎
