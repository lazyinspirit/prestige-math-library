---
id: lem-cut-along-incompressible-tori-preserves-irreducibility
kind: lemma
title: "Cutting an irreducible manifold along incompressible tori preserves irreducibility"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-torus-in-ball-is-compressible
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited through the finite-triangulation and torus-in-ball suppliers."
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
---

## Statement

Assume full AC. Let $M$ be a compact irreducible piecewise linear $3$-manifold with a finite compatible triangulation. Let $\mathcal T$ be a finite family of pairwise disjoint, two-sided, incompressible piecewise linear tori that are subcomplexes of that triangulation. Every component obtained by cutting $M$ along $\mathcal T$ is irreducible.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, §1.2](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Full AC, a compact irreducible finitely triangulated PL $3$-manifold $M$, a finite family of disjoint incompressible tori $\mathcal T$ that are triangulation subcomplexes, and a component $C$ of the cut manifold.

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] Irreducibility and incompressibility are defined by sphere bounding balls and absence of compressing disks ([[def-incompressibility-seifert-fibration-and-jsj-system]], Definition).

[F2] Every embedded torus in a $3$-ball has a compressing disk in that ball ([[lem-torus-in-ball-is-compressible]], Statement).

## Proof

1.1 Let $S\subset\operatorname{int}C$ be an embedded PL sphere. Viewed in $M$, it is disjoint from every torus of $\mathcal T$. Irreducibility of $M$ gives a $3$-ball $B$ bounded by $S$. Each connected torus of $\mathcal T$ lies entirely on one side of $S$. [F1, given]

1.2 No torus $T\in\mathcal T$ can lie inside $B$: [F2] would give a compressing disk for $T$ in $B\subset M$, contrary to incompressibility. Thus $B$ is disjoint from all cutting tori. Since a collar of $S$ lies in $C$ and $B$ is connected, the ball lies in $C$. Therefore every sphere in $C$ bounds a ball in $C$, proving that $C$ is irreducible. [A1, F1, F2, step 1.1, given, construct] ∎
