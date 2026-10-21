---
id: cex-knot-kt-04-boundary-case
kind: counterexample
title: "A genus-one spanning surface for the unknot is not minimal"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-oriented-seifert-surface
  - def-oriented-seifert-surface-and-knot-genus
  - thm-seifert-algorithm-boundary-euler-and-genus
  - def-euler-characteristic-of-a-finite-cw-complex
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-countable-choice
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §§3.1–3.2, pp.21–26"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Definition 3.1 and the warning that a chosen Seifert surface only gives an upper bound"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, §4.3, pp.21–23"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Definition 4.3.4 and the upper-bound warning following the genus formula"
---

## Statement refuted

Every Seifert surface for a fixed knot has minimum genus; equivalently, every admissible spanning surface $F$ for $K$ satisfies $g(F)=g(K)$.

## Statement references

[[def-oriented-seifert-surface|The admissible spanning surfaces]]

[[def-oriented-seifert-surface-and-knot-genus|The minimum defining knot genus]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a standard round unknot $U$ bounding a disk $D$, and the annular tube construction in Counterexample step 1.1 below.

[F1] A Seifert surface is a connected compact smooth oriented embedded surface whose oriented boundary is the given knot. ([[def-oriented-seifert-surface]])

[F2] Knot genus is the least genus of any Seifert surface for the knot. ([[def-oriented-seifert-surface-and-knot-genus]])

[F3] Under $\mathrm{AC}_\omega$, compact subsurfaces have finite cellulations, and a connected compact oriented surface with $b>0$ boundary circles has $\chi=2-2g-b$. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[F4] The Euler characteristic of a finite CW complex is the alternating sum of its cell counts. ([[def-euler-characteristic-of-a-finite-cw-complex]])

[A1] The Axiom of Countable Choice is the sequence principle stated in the item. ([[def-countable-choice]])

## Counterexample

1.1 Let $U$ be the standard round unknot and $D$ a smooth embedded spanning disk. Remove the interiors of two disjoint small disks from $\operatorname{Int}D$ to obtain a pair of pants $P$. Join the two new boundary circles by a simple arc in a small ball on one side of $D$ and disjoint from $U$; the lateral boundary of a sufficiently thin tubular neighborhood of that arc is an embedded annulus $A$ meeting $P$ only in its two attaching circles. Glue with matching orientations. Then $F=P\cup A$ is connected, compact, smooth, embedded, oriented, and has only boundary $U$. Choose finite cell structures with both attaching circles subcomplexes. Cell-count inclusion-exclusion gives $\chi(P)=\chi(D)-2\chi(D^2)+2\chi(S^1)=1-2+0=-1$; then $\chi(F)=\chi(P)+\chi(A)-2\chi(S^1)=-1+0-0=-1$. [given, F1, F3, F4, construct, algebra]

2.1 The surface $F$ has $b=1$. By [F3] and [A1], $-1=\chi(F)=2-2g(F)-1$, hence $g(F)=1$. The original disk $D$ has $b=1$ and $\chi(D)=1$, so [F3] gives $g(D)=0$. [step 1.1, F3, A1, algebra]

3.1 By [F1], both $D$ and $F$ are admissible spanning surfaces for $U$. Therefore [F2] and nonnegativity of surface genus give $g(U)=0$, while step 2.1 gives $g(F)=1$. Thus $F$ is not minimum genus and the refuted statement is false. [F1, F2, step 2.1, given, algebra] ∎

