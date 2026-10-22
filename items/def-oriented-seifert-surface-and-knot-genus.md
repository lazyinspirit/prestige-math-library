---
id: def-oriented-seifert-surface-and-knot-genus
kind: definition
title: "Seifert surfaces and smooth knot genus"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-oriented-seifert-surface
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - thm-well-ordering-principle
  - def-countable-choice
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §3.1, pp.21–22"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Definition 3.1 and the note that existence is established by Seifert's algorithm"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.3, pp.21–23"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Definition 4.3.4, genus as the least genus of a Seifert surface"
---

## Definition

Assume the Axiom of Countable Choice. For an oriented smooth knot $K\subset S^3$, define

$$\mathcal G(K):=\{n\in\mathbb N_0: \text{there is a Seifert surface }F\text{ for }K\text{ with }g(F)=n\}.$$

Every element of $\mathcal G(K)$ is the genus of a connected compact oriented surface. The existence theorem makes $\mathcal G(K)$ nonempty, and the well-ordering of $\mathbb N_0$ gives its least element. The **smooth knot genus** is $g(K):=\min\mathcal G(K)$. This genus is the minimum over embedded spanning surfaces; it is not the number of Seifert circles or the genus of every surface produced from a diagram.

## Definition references

[[def-oriented-seifert-surface|The definition and genus of an individual Seifert surface]]

[[thm-every-oriented-knot-bounds-a-seifert-surface|Nonemptiness of the set of admissible surfaces under countable choice]]

[[thm-well-ordering-principle|A nonempty subset of the nonnegative integers has a least element]]

[[def-countable-choice|The Axiom of Countable Choice]]
