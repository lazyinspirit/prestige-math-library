---
id: thm-author-0cc80c1b5792-valuation-input
kind: theorem
title: External valuative dimension comparison on locally Noetherian schemes
status: published
domain: mathematics
deps:
  - def-valuative-dimension-and-boundedness
  - math:def-axiom-of-choice
dependency_roles:
  def-valuative-dimension-and-boundedness: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Elden Elmanto, Marc Hoyois, Ryomei Iwasa and Shane Kelly, Cdh descent,
        cdarc descent, and Milnor excision
      url: https://eldenelmanto.com/wp-content/uploads/2020/04/excisev3-1.pdf
      locator: Math.Ann.379 (2021),1011–1045; §2.3 definitions and Lemma2.3.1 p.9;
        Proposition2.3.2(1),(8),(9) pp.9–10
      statement: Jaffard valuative dimension of a domain is the supremum of ranks,
        equivalently Krull dimensions, of valuation overrings in its fraction
        field; for a general ring take prime quotients, and for a scheme take
        affine opens. This is local on open covers; Krull dimension≤valuative
        dimension; equality holds for locally Noetherian schemes.
      hypotheses: Arbitrary schemes for the definitions and open-local property;
        locally Noetherian for equality. Nilpotents and reducible schemes are
        included through prime quotients.
      reading_limits: Read §2.3 definitions, Lemma2.3.1 and entire Proposition2.3.2
        with proof pp.9–10, plus the rank/scheme descriptions in Corollary2.3.4.
        Jaffard’s original results cited in the proof are imported, not
        reconstructed. The definitions coincide with the completed local
        supplier, not an alternative notion requiring every valuation morphism
        to have bounded rank.
dependency_level: 6
---

## Statement
The Jaffard valuative dimension of a domain is the supremum of the Krull dimensions of valuation overrings inside its fraction field. For an arbitrary ring it is the supremum of these dimensions over prime quotients; for a scheme take the supremum over affine opens. It is local on open covers. For every locally Noetherian scheme $X$ it equals its Krull dimension.

## Source contract
**Given:** Schemes and commutative rings with identity, in fixed universes.

**Goal:** Import the precise convention and Noetherian comparison required by the source filtration theorem.

[F1] EHIK §2.3 definitions and Proposition2.3.2(1),(9) supply the convention and comparison.

## External input
Import [F1] with the exact source record and reading limits. Its “rank of a valuation ring” is its Krull dimension; the equivalent chain-of-overrings definition is given on p9. The Noetherian comparison includes reducible and nonreduced schemes. It is not the false assertion that all valuation rings in arbitrary extension fields mapping to $X$ have bounded dimension.
