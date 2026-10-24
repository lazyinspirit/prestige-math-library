---
id: thm-reduced-alternating-diagram-minimizes-crossings
kind: theorem
title: Reduced alternating diagrams minimize crossing number
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-crossing-number-of-link
  - def-reduced-alternating-link-diagram
  - lem-disconnected-link-diagram-represents-a-split-link
  - lem-connected-alternating-link-is-nonsplit
  - lem-connected-diagram-bracket-span-bound-and-alternating-equality
  - thm-normalized-bracket-is-an-oriented-link-invariant
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: ACω is required for the crossing-number domain and normalized-bracket
  invariance. The connectedness, state-span and nonsplitting comparisons are
  choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Danny Calegari, Introduction to Knot Theory, §5.2, printed pp. 42–45
      url: https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf
    - title: Louis H. Kauffman, New Invariants in the Theory of Knots, Astérisque
        163–164 (1988), §III, printed pp. 164–168
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

Assume $\mathrm{AC}_\omega$. Every connected reduced alternating diagram $D$ of an oriented link $L$ realizes the crossing number of its underlying unoriented link: $c(D)=c(L)$.

## Statement references

[Calegari, *Introduction to Knot Theory*, §5.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Kauffman, *New Invariants in the Theory of Knots*, §III](https://www.numdam.org/item/AST_1988__163-164__137_0.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an oriented link $L$, and a connected reduced alternating diagram $D$ representing it.

[A1] $\mathrm{AC}_\omega$ selects from every countable family of nonempty sets ([[def-countable-choice]]).

[F1] The crossing number is the least crossing count among regular diagrams of the underlying unoriented link ([[def-crossing-number-of-link]]).

[F2] A nonempty disconnected projection represents a split link ([[lem-disconnected-link-diagram-represents-a-split-link]]).

[F3] A connected alternating diagram represents a nonsplit link ([[lem-connected-alternating-link-is-nonsplit]]).

[F4] Every nonempty connected reduced alternating diagram has bracket span $4c(D)$, and every nonempty connected diagram $E$ has bracket span at most $4c(E)$ ([[lem-connected-diagram-bracket-span-bound-and-alternating-equality]]).

[F5] The normalized bracket is an invariant of nonempty oriented links under $\mathrm{AC}_\omega$; it multiplies the raw bracket by a Laurent monomial ([[thm-normalized-bracket-is-an-oriented-link-invariant]]).

[F6] A reduced alternating diagram is connected and alternating by definition ([[def-reduced-alternating-link-diagram]]).

## Proof

1.1 If $D$ is empty, it has zero crossings. It is a regular diagram of $L$, so [F1] gives $0\le c(L)\le c(D)=0$, proving the claim in this case without evaluating a bracket. Henceforth $D$ and the represented link $L$ are nonempty. [given, F1, cases]

2.1 Let $E$ be any regular diagram representing the same underlying unoriented link type as $L$. Since $L$ is nonempty, so is $E$. If its projection were disconnected, [F2] would make $L$ split, contradicting [F3] applied to $D$ and [F6]. Hence every competing diagram $E$ is connected. Orient each component of $E$ so an ambient isotopy to $L$ preserves its orientation. [given, F2, F3, F6, step 1.1, choose, contradiction]

3.1 By [F4], $\operatorname{span}_A\langle D\rangle=4c(D)$ and $\operatorname{span}_A\langle E\rangle\le4c(E)$. The normalized bracket multiplies each raw bracket by a monomial, which shifts all exponents equally and preserves span. By [A1] and [F5], the normalized bracket values for the nonempty oriented diagrams $D$ and $E$ agree. Therefore $4c(D)\le4c(E)$ and $c(D)\le c(E)$. [A1, F4, F5, step 2.1, algebra]

4.1 The diagram $D$ is one of the regular diagrams in the nonempty crossing-count set of [F1], so $c(L)\le c(D)$. Step 3.1 shows that $c(D)$ is no larger than any member of that set, and therefore $c(D)\le c(L)$. Combining the inequalities proves $c(D)=c(L)$. [F1, step 3.1, choose] ∎
