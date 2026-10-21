---
id: lem-disconnected-projection-components-separated-by-jordan-curve
kind: lemma
title: "Disconnected projection components admit a separating Jordan curve"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-regular-oriented-link-diagram,
       lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Finite regular-neighborhood construction and planar separation are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §5.2 and Exercise 5.14, printed pp. 42–43"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    - title: "William W. Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), §2, pp. 38–41"
      url: "https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2"
---

## Statement

Let $P\subset S^2$ be the nonempty finite projection graph of a regular link diagram. If $P$ is disconnected, there is a simple closed curve $\gamma\subset S^2\setminus P$ such that $P$ has points on both sides of $\gamma$.

## Statement references

[Calegari, *Introduction to Knot Theory*, §5.2 and Exercise 5.14](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Menasco, *Closed incompressible surfaces in alternating knot and link complements* (1984), §2](https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2)

## Facts & Assumptions

**Given:** A nonempty finite disconnected projection graph $P\subset S^2$.

[F1] A regular projection is a finite graph with finitely many transverse double points and no triple points; crossingless link components are embedded circles ([[def-regular-oriented-link-diagram]]).

[F2] A smooth Jordan curve on $S^2$ separates the sphere into two sides. To obtain the spherical form of the choice-free smooth Jordan-disk result, choose a point off the curve, apply a stereographic chart, and use the two disk sides supplied by [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]].

## Proof
1.1 Choose one connected component $P_0$ of $P$. Around each of its finitely many vertices take a small closed disk, and around each edge take a narrow closed strip joining the incident vertex disks; for a crossingless circle take an annular neighborhood. Round the finitely many corners. Because the graph is finite and its distinct components are disjoint compact sets, the disks and strips can be chosen so that their union $N$ is a compact connected subsurface of $S^2$ with smooth finite boundary, contains $P_0$ in its interior, and misses every other component of $P$. [given, F1, construct]

2.1 Choose points $p_0\in P_0$ and $p_1$ in another component of $P$. Choose a piecewise-smooth path from $p_0$ to $p_1$ transverse to the finite smooth boundary $\partial N$. Its endpoints lie respectively in the interior of $N$ and outside $N$, so it crosses $\partial N$ an odd number of times. The boundary has finitely many disjoint simple closed components; at least one, call it $\gamma$, is met an odd number of times. The curve $\gamma$ lies in $S^2\setminus P$, since $N$ contains $P_0$ in its interior and misses every other component. By [F2], every transverse crossing of $\gamma$ switches sides, so $p_0$ and $p_1$ lie on opposite sides of $\gamma$. [given, F1, F2, step 1.1, construct]

3.1 The construction uses finitely many neighborhoods and applies also when $P_0$ is a crossingless circle; therefore it proves the asserted separation for every nonempty disconnected regular projection. Its chosen separating curve is a smooth boundary component of $N$. [given, step 1.1, step 2.1, cases] ∎
