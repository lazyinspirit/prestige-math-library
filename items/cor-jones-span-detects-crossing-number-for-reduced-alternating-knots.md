---
id: cor-jones-span-detects-crossing-number-for-reduced-alternating-knots
kind: corollary
title: Jones span detects crossing number for reduced alternating knots
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-crossing-number-of-link
  - def-reduced-alternating-link-diagram
  - lem-alternating-state-adequacy-and-jones-span
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Full AC is used by the Jones specialization and implies the
  countable-choice hypothesis needed to define crossing number; the span
  comparison itself is choice-free once these objects exist.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Danny Calegari, Introduction to Knot Theory, §5.2, printed pp. 44–45
      url: https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf
    - title: Louis H. Kauffman, New Invariants in the Theory of Knots, Astérisque
        163–164 (1988), §III, pp. 164–168
      url: https://www.numdam.org/item/AST_1988__163-164__137_0.pdf
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. If $D$ is a connected reduced alternating diagram of a knot $K$, then the library Jones polynomial has $t$-span exactly $c(K)=c(D)$, in the convention $t=A^{-4}$. The span of a nonzero Laurent polynomial is its largest exponent minus its smallest exponent.

## Statement references

[Calegari, *Introduction to Knot Theory*, §5.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Kauffman, *New Invariants in the Theory of Knots*, §III](https://www.numdam.org/item/AST_1988__163-164__137_0.pdf)

## Facts & Assumptions

**Given:** Full AC, a connected reduced alternating knot diagram $D$, and the crossing number of its underlying knot type.

[F1] Full AC implies countable choice ([[def-countable-choice]]).

[F2] The crossing number is the least crossing count among regular diagrams of the same underlying unoriented link type ([[def-crossing-number-of-link]]).

[F3] Under full AC, a reduced alternating knot diagram with $c(D)$ crossings has Jones span $c(D)$, while every competing $c'$-crossing knot diagram has Jones span at most $c'$ ([[lem-alternating-state-adequacy-and-jones-span]]).

[F4] A reduced alternating diagram is connected and alternating by definition ([[def-reduced-alternating-link-diagram]]).

[A1] Full AC, the choice-function principle for arbitrary families of nonempty sets ([[def-axiom-of-choice]]).

## Proof
1.1 By [A1] and [F1], the crossing-number definition [F2] applies. Since $D$ is a connected reduced alternating diagram by [F4], [F3] gives $\operatorname{span}_tV_K(t)=c(D)$. [A1, F1, F2, F3, F4, given]

2.1 For every regular diagram $E$ of the same underlying knot type, choose its single-component orientation to match $K$. By [F3], $c(D)\le c(E)$ because the common Jones span is $c(D)$ and is at most $c(E)$. The diagram $D$ itself is one of the competitors in [F2], so $c(K)\le c(D)$; the preceding inequality for every $E$ gives $c(D)\le c(K)$. Thus $c(K)=c(D)$, and step 1.1 gives the asserted Jones span. [F2, F3, step 1.1, choose, algebra] ∎
