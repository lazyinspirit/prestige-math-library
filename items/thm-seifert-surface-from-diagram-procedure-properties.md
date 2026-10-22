---
id: thm-seifert-surface-from-diagram-procedure-properties
kind: theorem
title: "Termination and finite output of the Seifert diagram procedure"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - alg-seifert-surface-from-diagram
  - def-regular-oriented-link-diagram
  - def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram
  - def-countable-choice
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §3.2, pp.24–26"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "The finite Seifert algorithm"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.3, pp.21–23"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "The finite Seifert algorithm described after Definition 4.3.1"
---

## Statement

Assume the Axiom of Countable Choice. For every finite regular oriented diagram with exactly one component, the Seifert diagram procedure terminates after one finite smoothing scan and one finite band-record scan. It returns exactly one disk record for each Seifert circle and exactly one band record for each original crossing. Termination alone asserts no embeddedness, boundary equality, or genus minimality.

## Statement references

[[alg-seifert-surface-from-diagram|The exact finite procedure and its output]]

[[def-regular-oriented-link-diagram|Finiteness of the crossing set]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a regular oriented knot diagram $D$.

[A1] The Axiom of Countable Choice is the sequence principle stated in the item. ([[def-countable-choice]])

[F1] The procedure performs one oriented smoothing at each crossing, records the Seifert circles, and then records one band for each crossing. ([[alg-seifert-surface-from-diagram]])

[F2] A regular oriented diagram has finitely many double points, all transverse, and no triple points. ([[def-regular-oriented-link-diagram]])

[F3] Smoothing every crossing produces a finite disjoint union of oriented simple closed curves. ([[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]])

## Proof

1.1 By [F2], $D$ has a finite crossing set of cardinality $c$. The first loop in [F1] visits each crossing once and performs one smoothing, so it ends after $c$ iterations. No smoothing introduces a new crossing to be processed. [given, A1, F1, F2, algebra]

2.1 By [F3], the completed smoothing has a finite set of Seifert circles of cardinality $s$. The second loop in [F1] records one disk per circle and one band per original crossing, so it also has finitely many iterations and returns exactly $(s,c)$ with the prescribed records. No topological correctness claim follows from this finite termination argument. [given, A1, step 1.1, F1, F3, algebra] ∎
