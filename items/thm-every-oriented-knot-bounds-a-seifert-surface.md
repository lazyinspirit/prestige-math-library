---
id: thm-every-oriented-knot-bounds-a-seifert-surface
kind: theorem
title: "Every smooth oriented knot in $S^3$ bounds a Seifert surface"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-seifert-bands-embedded-orientable-boundary-correct
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-every-oriented-link-admits-a-regular-projection
  - def-countable-choice
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
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
    - title: "Danny Calegari, Introduction to Knot Theory, §§3.1–3.2, pp.21–26"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "The genus definition followed by the constructive Seifert algorithm"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.3, pp.21–23"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Every knot bounds an embedded surface and the Seifert algorithm proof route"
---

## Statement

Assume the Axiom of Countable Choice. Every smooth oriented knot $K\subset S^3$ bounds a connected compact smooth oriented embedded surface $F\subset S^3$ whose oriented boundary is $K$.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy|The smooth oriented knot model in the standard three-sphere]]

[[lem-every-oriented-link-admits-a-regular-projection|Existence of regular projections under countable choice]]

[[lem-seifert-bands-embedded-orientable-boundary-correct|The disk-and-band correctness lemma]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth oriented knot $K\subset S^3$.

[F1] A link in the standard $S^3$ may be moved by an orientation-preserving ambient isotopy to lie in $\mathbb R^3\subset S^3$. ([[def-oriented-link-in-s-three-and-ambient-isotopy]])

[F2] Under $\mathrm{AC}_\omega$, every oriented link contained in $\mathbb R^3$ has a dense set of regular projection directions. ([[lem-every-oriented-link-admits-a-regular-projection]])

[F3] A regular oriented diagram of one knot component has a connected compact smooth oriented embedded disk-and-band realization with that oriented boundary. ([[lem-seifert-bands-embedded-orientable-boundary-correct]])

[A1] The Axiom of Countable Choice is the sequence principle stated in the item. ([[def-countable-choice]])

## Proof

1.1 By [F1], move $K$ by an orientation-preserving ambient isotopy into $\mathbb R^3$. Apply [F2] and [A1] to choose a regular projection direction. The resulting decorated projection is a finite regular oriented diagram $D$ of a single knot. [given, F1, F2, A1, choose]

2.1 Apply [F3] to $D$ to obtain a connected compact smooth oriented embedded surface with oriented boundary $D$. Pull the surface back by the inverse ambient isotopy from step 1.1; the inverse diffeomorphism preserves embeddedness, compactness, connectedness, orientation, and the boundary orientation, giving the required $F$ for the original $K$. [step 1.1, F3, construct] ∎
