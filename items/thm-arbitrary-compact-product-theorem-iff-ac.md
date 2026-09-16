---
id: thm-arbitrary-compact-product-theorem-iff-ac
kind: theorem
title: "The arbitrary compact product theorem is equivalent to AC"
status: draft
origin: pipeline
deps: [thm-compact-t1-product-theorem-iff-ac, def-axiom-of-choice, def-product-topology, def-compact-space, thm-tychonoff, def-t0-and-t1-spaces]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Kyriakos Keremedis and Eleftherios Tachtsis, Wallman Compactifications and Tychonoff's Compactness Theorem in ZF"
      url: "https://topology.nipissingu.ca/tp/reprints/v42/tp42021.pdf"
      locator: "Definitions, Proposition 2.11 and Proposition 2.13, journal pp. 279-283"
---

## Statement

Over $\mathrm{ZF}$, AC ([[def-axiom-of-choice]]) is equivalent to the assertion
that every product of arbitrary compact spaces
([[def-compact-space]], [[def-product-topology]]) is compact. The empty product
is a one-point space and is included.

## Facts & Assumptions

**Given:** AC and, in the reverse direction, the hypothesis that every product of compact spaces is compact.

[F1] Under AC, Tychonoff's theorem gives compactness of every product of compact spaces, the empty product being the one-point space ([[thm-tychonoff]], [[def-product-topology]]).

[F2] Over ZF, AC is equivalent to compactness of every product of compact $T_1$ spaces ([[thm-compact-t1-product-theorem-iff-ac]], [[def-t0-and-t1-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Under AC every product of compact spaces is compact by [F1], and the empty product is the one-point space; this is one direction. [assume-hyp, F1]

2.1 Conversely, if every product of compact spaces is compact then in particular every product of compact $T_1$ spaces is compact, since compact $T_1$ spaces are compact spaces; by [F2] this gives AC. [step 1.1, F2]

3.1 The two directions give the displayed equivalence; in particular the compact-Hausdorff case is a different statement, whose strength is BPI and which is not identified with the arbitrary compact case here. [step 1.1, step 2.1, F2] ∎

## Remarks

- **Why the two strengths differ.** Products of compact $T_1$ spaces and products of compact Hausdorff spaces are not the same assertion: the first is equivalent to AC and the second to BPI, as recorded by the two equivalences of this page. The empty product is compact in both cases and therefore separates nothing.
