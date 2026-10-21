---
id: thm-linking-number-is-invariant-and-writhe-is-not
kind: theorem
title: "Linking number is invariant and writhe changes under a kink"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       def-regular-oriented-link-diagram,
       def-oriented-reidemeister-moves,
       thm-oriented-reidemeister-equivalence-theorem,
       def-oriented-crossing-sign-writhe-and-blackboard-framing,
       lem-linking-number-even-sum-and-reidemeister-invariance,
       alg-oriented-linking-number-from-diagram,
       thm-oriented-linking-number-scan-terminates-and-is-correct,
       def-framed-knot-self-linking-and-seifert-framing,
       thm-blackboard-framing-self-linking-is-writhe,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, Proposition 3.12 and the writhe discussion on p. 29"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3, pp. 3–9"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Reidemeister invariance discussion following Definition 3.1 and the blackboard-framing discussion, pp. 3–9"
---

## Statement

Assume the Axiom of Countable Choice. For any two regular oriented diagrams
of ambient-isotopic two-component links, the algorithmic linking numbers
agree. Creating a positive type-I kink increases total writhe by $1$ and
deleting it decreases writhe by $1$; creating a negative kink decreases writhe
by $1$ and deleting it increases writhe by $1$. Types II and III leave total
writhe unchanged. For a knot
component, blackboard self-linking changes by the same amount under a type-I
move. Consequently writhe and blackboard self-linking are not invariants of
unframed ambient isotopy, although the integer linking number of two distinct
components is.

## Statement references

[[thm-oriented-reidemeister-equivalence-theorem|Oriented Reidemeister theorem]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Writhe and crossing sign]]

[[thm-blackboard-framing-self-linking-is-writhe|Blackboard self-linking calculation]]

[[def-countable-choice|Countable-choice hypothesis]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, regular oriented link diagrams, and
the indicated ambient-isotopy relations.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Under $\mathrm{AC}_\omega$, ambient-isotopic regular oriented link diagrams are connected by a finite sequence of planar isotopies and oriented Reidemeister moves ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F2] A type-I move adds or removes a self-crossing; type II adds or removes two crossings of opposite signs; type III preserves the signs of its three crossings ([[def-oriented-reidemeister-moves]]).

[F3] Writhe is the signed sum over all crossings, and self-writhe is the signed sum over one component's self-crossings ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F4] Linking number is the integer half-sum of mixed crossing signs, invariant under all three Reidemeister moves ([[lem-linking-number-even-sum-and-reidemeister-invariance]]).

[F5] For a knot, blackboard self-linking equals diagram writhe ([[thm-blackboard-framing-self-linking-is-writhe]]).

## Proof

1.1 Apply [F1] to two regular diagrams of the same oriented link. By [F4], the integer linking number is unchanged by planar isotopy and by every move in the resulting finite sequence. Hence the two diagrams have equal linking number. [A1, F1, F4, given]

1.2 A type-I move creates or deletes exactly one self-crossing and no mixed crossing by [F2]. Its contribution to the writhe in [F3] is therefore the sign $+1$ or $-1$ of that crossing. A type-II move either contributes no mixed crossings or creates a mixed pair of opposite signs; in both cases its total writhe contribution is zero. A type-III move preserves each crossing sign, so it preserves writhe. [F2, F3, algebra]

2.1 By [F5], the knot component's blackboard self-linking is equal to the writhe of its diagram before and after each move. Thus a type-I move changes that self-linking by the same $+1$ or $-1$ as writhe, while type II and III preserve it. [A1, F5, step 1.2]

3.1 Let $D_0$ be a crossing-free diagram of the unknot, so $\operatorname{wr}(D_0)=0$. Add a positive type-I kink to obtain $D_1$. By [F1], the two diagrams represent ambient-isotopic unframed knots. The calculation in step 1.2 gives $\operatorname{wr}(D_1)=1$. Hence writhe is not an invariant of unframed ambient isotopy; step 2.1 gives the same change for the blackboard self-linking. [A1, F1, F3, step 1.2, step 2.1, construct] ∎


