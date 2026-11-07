---
id: rem-mordell-faltings-proof-chain-and-ineffectivity
kind: remark
title: "Proof chain and qualitative scope of the Mordell–Faltings theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - thm-mordell-faltings-finiteness-for-genus-at-least-two-curves
  - lem-parshin-construction-fixed-genus-curves-ramified-at-one-rational-point
  - lem-de-franchais-finiteness-of-maps-to-hyperbolic-curve
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter V §4.5, proof of Theorem 4.10, printed pp. 196–197"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "The proof passes through fixed-genus Shafarevich finiteness and finiteness of maps from each fixed source curve."
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, proof of Theorem 5.1 and Theorem 5.2, printed pp. 146–149"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "Kodaira–Parshin construction, De Franchis finiteness, and their qualitative Mordell deduction."
verification: {}
---

## Remark

The theorem and proof route in this library assert qualitative finiteness of $C(K)$. They state no explicit numerical bound for $|C(K)|$ and provide no procedure that lists all rational points from an equation for $C$. No claim about effective methods under additional hypotheses or with additional inputs is made.

## Remark references

[[thm-mordell-faltings-finiteness-for-genus-at-least-two-curves]]

[[lem-parshin-construction-fixed-genus-curves-ramified-at-one-rational-point]]

[[lem-de-franchais-finiteness-of-maps-to-hyperbolic-curve]]

[Faltings–Wüstholz et al., proof of Theorem 4.10](https://yhzhumath.github.io/Mordell2024/RP.pdf)

[Milne, proof of Theorem 5.1 and Theorem 5.2](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** The Mordell–Faltings theorem and its Parshin–Shafarevich–De Franchis proof route.

[L1] The current main theorem carrier states only that $C(K)$ is finite, and its proof status is escalated. [[thm-mordell-faltings-finiteness-for-genus-at-least-two-curves]]

[L2] The drafted route uses bounded-genus source curves and finiteness of maps from each fixed source; the Parshin supplier remains escalated. [[lem-parshin-construction-fixed-genus-curves-ramified-at-one-rational-point]] [[lem-de-franchais-finiteness-of-maps-to-hyperbolic-curve]]

## Proof
1.1 By [L1], the asserted output is the finiteness of the set $C(K)$; it is not an output bound or an enumeration. [L1]

2.1 The specified proof route [L2] replaces each point by a cover and then uses qualitative finiteness of source-curve classes and maps. Those statements contain no numerical output or point-listing procedure. Therefore this remark records exactly the qualitative scope of the authored theorem and adds no effective conclusion. [L2, step 1.1] ∎

## Proof status

Escalated because the main theorem and its Parshin prerequisite remain escalated; this remark records scope only and confers no proof acceptance.
