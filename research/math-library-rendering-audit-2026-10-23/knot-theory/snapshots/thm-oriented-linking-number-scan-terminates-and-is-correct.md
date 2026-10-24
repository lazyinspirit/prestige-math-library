---
id: thm-oriented-linking-number-scan-terminates-and-is-correct
kind: theorem
title: "The diagram linking-number scan terminates and returns the stated integer"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps: [alg-oriented-linking-number-from-diagram,
       def-regular-oriented-link-diagram,
       lem-linking-number-even-sum-and-reidemeister-invariance,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, Definition 3.11, pp. 26–27"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3, pp. 3–9"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Definition 3.1 and the explicit half-sum convention, pp. 3–4"
---

## Statement

Assume the Axiom of Countable Choice. On every finite regular oriented diagram
with exactly two components, the crossing-scan algorithm halts after one
iteration per crossing and returns the integer half-sum of the mixed crossing
signs. On an input with any other number of components it returns
`invalid-input` after the finite component-count check.

## Statement references

[[alg-oriented-linking-number-from-diagram|The one-pass crossing-scan algorithm]]

[[lem-linking-number-even-sum-and-reidemeister-invariance|Integrality of the half-sum]]

[[def-countable-choice|Countable-choice hypothesis]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a finite regular oriented diagram
$D$ with its declared component set.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] A regular oriented diagram has finitely many transverse double points and finitely many link components ([[def-regular-oriented-link-diagram]]).

[F2] On the two-component input the procedure scans each crossing once, adds its sign exactly when its branches lie on distinct components, and returns half the resulting sum ([[alg-oriented-linking-number-from-diagram]]).

[F3] For every regular two-component diagram, the mixed crossing sum is even and its half is the integer linking number ([[lem-linking-number-even-sum-and-reidemeister-invariance]]).

## Proof

1.1 The component-count check terminates because the input declares a finite component set. It returns `invalid-input` when that cardinality is not two. Otherwise the finite crossing list has some length $N\in\mathbb N_0$ by [F1], and the algorithm performs exactly one update for each of those $N$ crossings with no recursive call or unbounded search. Hence the scan halts after exactly $N$ iterations. [A1, F1, F2, given, algebra]

2.1 In the accepted case, the update in [F2] adds precisely each summand of $S(D)$ and no self-crossing. Thus the returned value is $S(D)/2$; [F3] shows this is an integer and is the linking number specified in the lemma. All arithmetic is a finite integer sum. [A1, F2, F3, step 1.1] ∎


