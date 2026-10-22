---
id: def-reduced-alternating-link-diagram
kind: definition
title: "Reduced alternating link diagram"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-regular-oriented-link-diagram]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the properties are finite local or graph-theoretic conditions on the supplied diagram."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, Definition 5.17, printed pp. 43–44"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, §2.1, arXiv:2008.06490v3"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Definition

A regular link diagram is **connected** when its underlying projection graph is connected. It is **alternating** when successive crossing visits along each component switch between overpasses and underpasses. It is **reduced** when no complementary region of the projection sphere has a crossing more than once on its boundary. A connected alternating diagram that is reduced is a **reduced alternating link diagram**.

## Definition references

[Calegari, *Introduction to Knot Theory*, Definition 5.17](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Kindred, *A geometric proof of the flyping theorem*, §2.1](https://arxiv.org/pdf/2008.06490v3)

## Facts & Assumptions

**Given:** A regular link diagram $D$ with its finite projection graph and over-under data.

[F1] A regular oriented link diagram has finitely many transverse double points, no triple points, and an over-under datum at each crossing ([[def-regular-oriented-link-diagram]]).

## Proof
1.1 The projection graph, its complementary regions, and the cyclic order of crossing visits along each component are finite data by [F1]. Thus connectedness, alternation, and the stated repeated-region condition are properties determined by the given diagram. [given, F1, construct]

2.1 Forgetting all strand orientations preserves the projection graph and the over-under data, so each condition is unchanged by reversing component orientations. The definition therefore applies consistently to the underlying unoriented diagram. [given, F1, step 1.1, construct] ∎
