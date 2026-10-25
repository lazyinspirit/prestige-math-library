---
id: lem-cut-along-incompressible-tori-preserves-irreducibility
kind: lemma
title: "Cutting an irreducible manifold along incompressible tori preserves irreducibility"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-two-sided-pl-tori-in-a-parametrized-pl-ball-have-pl-compressions
  - lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained. The repaired finite PL argument uses the choice-free explicit PL-ball compression supplier; it does not invoke a smooth triangulation theorem or an unqualified topological-torus supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, irreducibility after cutting along incompressible surfaces, printed pp.10–11"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, incompressible tori and irreducible cut pieces, PDF pp.2–4"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. Let $M$ be a compact irreducible piecewise linear $3$-manifold with a finite compatible triangulation. Let $\mathcal T$ be a finite family of pairwise disjoint, two-sided, incompressible piecewise linear tori that are subcomplexes of that triangulation. Every component obtained by cutting $M$ along $\mathcal T$ is irreducible.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, §1.2](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Full AC, the compact irreducible finite PL manifold, disjoint two-sided incompressible PL torus family and cut component of the Statement.

[A1] The original full AC assumption is [[def-axiom-of-choice]]. No essential use of it occurs in the finite argument below.

[F1] Here irreducibility and incompressibility are in the PL category specified in the Statement: an interior PL sphere bounds a PL ball, and a PL compressing disk has essential boundary on its surface and otherwise misses it. These are the geometric conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]], interpreted in that explicit category.

[F2] A two-sided PL torus in a parametrized finite PL ball has a PL compression contained in the ball's interior; its local PL flatness and compatible bicollar are supplied by the full link-disk and cut-collar proof. [[lem-two-sided-pl-tori-in-a-parametrized-pl-ball-have-pl-compressions]]

[F3] A compact PL ball and the finite PL torus polyhedra inside it have common compatible finite subcomplex subdivisions. [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]

## Proof

1.1 Let $S$ be a PL sphere in the interior of the selected cut component. Its image in $M$ is a PL sphere missing every cutting torus, so bounds a parametrized PL ball $B$ by [F1]. Each connected cutting torus lies wholly inside or wholly outside that sphere. If a torus lies inside $B$, its existing two-sided neighborhood can be shrunk into $\operatorname{Int}B$, by compactness and a common smaller product width. It remains a PL embedded torus there. [F3] supplies the compatible finite subdivisions needed for [F2], even if the original triangulation of $B$ was different from the one containing the torus. [F1, F3, given, construct]

2.1 Such an inside torus would have the PL compressing disk of [F2] entirely in $B\subset M$, contradicting its original incompressibility. Thus $B$ misses every cutting torus. The connected ball interior lies in the same complement component as its collar along $S$, so $B$ lifts to a PL ball in the specified cut component with boundary $S$. Every interior PL sphere there therefore bounds a PL ball. This is precisely PL irreducibility; no smooth-ball or arbitrary-topological-marking claim entered. [A1, F1, F2, step 1.1, construct] ∎
