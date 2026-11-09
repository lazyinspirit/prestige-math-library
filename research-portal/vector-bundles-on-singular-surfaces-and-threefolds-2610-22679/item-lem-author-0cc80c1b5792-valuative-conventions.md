---
title: The local valuative convention matches the source convention
status: draft
research_item: lem-author-0cc80c1b5792-valuative-conventions
dependency_level: 7
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [thm-author-0cc80c1b5792-valuation-input](item-thm-author-0cc80c1b5792-valuation-input)

## Statement
The completed local valuative dimension is exactly the valuative dimension used in the source filtration bounds. The equality is used for domains, nonzero rings and nonempty schemes. The empty scheme is handled separately, without identifying unstated source conventions for an empty supremum. In particular a finite-dimensional locally Noetherian scheme has finite source valuative dimension equal to its Krull dimension.

## Facts & Assumptions
**Given:** The local definition using valuation overrings, prime quotients and affine opens.

**Goal:** Match actual conventions before applying an external boundedness assertion.

[F1] [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) is the completed local convention.

[F2] [thm-author-0cc80c1b5792-valuation-input](item-thm-author-0cc80c1b5792-valuation-input) gives EHIK’s convention and its locally Noetherian comparison.

## Proof
1.1 For a domain $A$, both [F1] and [F2] take the supremum of the dimensions of valuation rings $A\subseteq V\subseteq\operatorname{Frac}(A)$. The source equivalently describes the rank by chains of such overrings. Thus the domain numbers agree. Taking the same supremum over all prime quotients gives the same number for nonzero rings. No source convention for the empty prime spectrum is needed. [F1, F2]

2.1 For a nonempty scheme, both scheme conventions take that same invariant over nonempty affine opens, so their values agree. The open-local property and the locally Noetherian equality in [F2] therefore apply directly to the local invariant as well. This proves the stated finite-dimensional consequence without any finite-type-over-a-field assumption. [F1, F2, step 1.1] ∎
