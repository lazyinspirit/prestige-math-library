---
id: thm-author-14463ef2f4e5-noetherian-valuative-input
kind: theorem
title: Noetherian domains have equal Krull and valuative dimensions
status: draft
domain: mathematics
external_input: true
deps:
  - def-valuative-dimension-and-boundedness
dependency_roles:
  def-valuative-dimension-and-boundedness: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Parviz Sahandi, Semistar-Krull and Valuative Dimension of Integral
        Domains
      url: https://arxiv.org/pdf/0809.1305
      locator: arXiv:0809.1305v3, page 1, Section 1, introductory paragraph on
        classical valuative dimension
      statement: For a noetherian integral domain D, its Krull dimension equals the
        supremum of the Krull dimensions of its valuation overrings in Frac(D).
      hypotheses: D is a commutative noetherian integral domain with identity;
        dimension may be infinite.
      reading_limits: Read the introductory classical statement and its definitions in
        the served PDF. The introduction attributes the result to Jaffard; the
        original proof and the later semistar arguments were not checked.
dependency_level: 6
---

## Statement
For a noetherian integral domain $D$, $\dim_v D=\dim D$, allowing infinity. Noetherian means that every ideal is finitely generated; the dimensions and valuation overrings are as defined in this development.

## External input
This is the classical noetherian-domain comparison recorded in the cited introduction. It is used as an external mathematical input; no local reconstruction of its proof is claimed.
