---
id: thm-ptfa-group-rings-are-ore-domains
kind: theorem
title: "PTFA group rings embed in skew fields of fractions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-group-ring
  - def-poly-torsion-free-abelian-group
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Tim D. Cochran, Kent E. Orr, and Peter Teichner, “Knot concordance, Whitney towers and L²-signatures”"
      url: "https://arxiv.org/pdf/math/9908117"
      locator: "§2.1, Proposition 2.5; the proof cites the PTFA group-ring Ore theorem"
---

## Statement

Let G be a PTFA group and let QG be its group ring over the rational field. Then QG has no zero divisors and satisfies both the left and right Ore conditions. Consequently QG embeds in a skew field of fractions in which every nonzero element of QG is invertible.

## Statement references

[COT, §2.1, Proposition 2.5 and its cited group-ring argument](https://arxiv.org/pdf/math/9908117)

## Facts & Assumptions

**Given:** A PTFA group G with a finite subnormal series whose factors are torsion-free abelian.

[F1] PTFA means that G has such a finite subnormal series ([[def-poly-torsion-free-abelian-group]]).

[F2] QG is the ring of finite sums of rational multiples of elements of G, with multiplication induced by the group operation ([[def-group-ring]]).

## Proof

1.1 Fix the finite subnormal series in [F1]. The base case G=1 gives QG=Q, a field and hence a left and right Ore domain. [given, F1, F2, algebra]

1.2 The induction step must show that if QG_j is an Ore domain, then adjoining the torsion-free abelian quotient G_{j+1}/G_j through the possibly nonsplit group extension preserves the no-zero-divisor and Ore properties. The proof of this extension step is not supplied by the preceding base case or by formal polynomial-ring arguments. [F1, step 1.1, algebra]

## Owner escalation

COT Proposition 2.5 cites the group-ring Ore theorem (Bovdi/Lewin); a complete proof of the nonsplit extension step is not present in the inspected source or local library. The asserted theorem is therefore not proved in this draft.