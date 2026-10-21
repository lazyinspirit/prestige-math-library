---
id: thm-seifert-algorithm-boundary-euler-and-genus
kind: theorem
title: "Euler characteristic and genus of a Seifert disk-and-band surface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - alg-seifert-surface-from-diagram
  - lem-seifert-bands-embedded-orientable-boundary-correct
  - def-oriented-seifert-surface
  - def-oriented-seifert-surface-and-knot-genus
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-euler-characteristic-of-a-finite-cw-complex
  - def-countable-choice
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §3.2, pp.25–26"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Disk and band count, Euler characteristic, and the genus upper bound"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.3, pp.21–23"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Disk-band Euler-characteristic count and genus upper bound"
---

## Statement

Assume the Axiom of Countable Choice. If a connected compact oriented disk-and-band surface $F$ is built from $s$ disjoint disks by attaching $c$ rectangular bands along boundary intervals and has one boundary component, then $\chi(F)=s-c$ and $g(F)=(1-s+c)/2$. In particular, if the Seifert algorithm on an oriented knot diagram $D$ has $s$ Seifert circles and $c$ crossings, its output surface has genus $(1-s+c)/2$ and the knot genus satisfies $g(K)\le (1-s+c)/2$. This is an upper bound from one spanning surface, not a minimality assertion.

## Statement references

[[def-euler-characteristic-of-a-finite-cw-complex|Euler characteristic as an alternating finite cell count]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups|The compact oriented surface Euler formula under countable choice]]

[[lem-seifert-bands-embedded-orientable-boundary-correct|The algorithm output is an admissible surface for a knot]]

[[def-oriented-seifert-surface-and-knot-genus|Knot genus is the minimum over all Seifert surfaces]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a connected disk-and-band surface made from $s$ disks and $c$ bands with one boundary component; for the final clause, $F$ is the output for an oriented knot diagram $D$ representing $K$.

[F1] The finite-cell Euler characteristic is the alternating sum of the numbers of cells. ([[def-euler-characteristic-of-a-finite-cw-complex]])

[F2] Under $\mathrm{AC}_\omega$, a connected compact oriented surface with $b>0$ boundary circles has $\chi=2-2g-b$. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[F3] A connected compact oriented embedded surface with boundary $K$ is admissible in the set defining $g(K)$. ([[def-oriented-seifert-surface-and-knot-genus]])

[F4] For a one-component regular diagram with $s$ smoothed circles and $c$ crossings, the algorithm uses $s$ disk records and one band record per crossing. ([[alg-seifert-surface-from-diagram]])

[F5] For such a knot diagram, the realized disk-and-band surface is connected, oriented, embedded, and has boundary the represented knot. ([[lem-seifert-bands-embedded-orientable-boundary-correct]])

[A1] The Axiom of Countable Choice is the sequence principle stated in the item. ([[def-countable-choice]])

## Proof

1.1 Subdivide the disk boundaries so all band-attachment intervals are subcomplexes. Start with $s$ disjoint disks, each with Euler characteristic $1$. Relative to the two attaching intervals, a rectangular band has two free long sides and one square $2$-cell; collapsing the square across one free long side leaves one relative $1$-cell joining the intervals. Thus the band changes the alternating cell count by $-1$. By [F1], after $c$ bands $\chi(F)=s-c$. [given, F1, construct, algebra]

2.1 The single boundary component gives $b=1$. By [F2] and [A1], $s-c=\chi(F)=2-2g(F)-1=1-2g(F)$, so $g(F)=(1-s+c)/2$. [step 1.1, F2, A1, algebra]

3.1 For the algorithm output on $D$, [F4] identifies the counts with its $s$ circles and $c$ crossings, and [F5] makes the output an admissible Seifert surface. By [F3], the minimum defining knot genus is at most this surface's genus, yielding $g(K)\le (1-s+c)/2$. [F3, F4, F5, step 2.1, given, algebra] ∎
