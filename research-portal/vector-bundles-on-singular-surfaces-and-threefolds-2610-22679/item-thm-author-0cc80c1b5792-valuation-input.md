---
title: External valuative dimension comparison on locally Noetherian schemes
status: draft
research_item: thm-author-0cc80c1b5792-valuation-input
dependency_level: 6
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
The Jaffard valuative dimension of a domain is the supremum of the Krull dimensions of valuation overrings inside its fraction field. For an arbitrary ring it is the supremum of these dimensions over prime quotients; for a scheme take the supremum over affine opens. It is local on open covers. For every locally Noetherian scheme $X$ it equals its Krull dimension.

## Source contract
**Given:** Schemes and commutative rings with identity, in fixed universes.

**Goal:** Import the precise convention and Noetherian comparison required by the source filtration theorem.

[F1] EHIK §2.3 definitions and Proposition2.3.2(1),(9) supply the convention and comparison.

## External input
Import [F1] with the exact source record and reading limits. Its “rank of a valuation ring” is its Krull dimension; the equivalent chain-of-overrings definition is given on p9. The Noetherian comparison includes reducible and nonreduced schemes. It is not the false assertion that all valuation rings in arbitrary extension fields mapping to $X$ have bounded dimension.
