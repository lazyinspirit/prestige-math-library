---
id: thm-five-colour-theorem
kind: theorem
title: "Five colour theorem: every planar graph has chromatic number at most five"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-planar-graph-has-low-degree-vertex, def-kempe-chain, lem-kempe-component-colour-swap, lem-alternating-kempe-paths-cannot-both-occur, def-proper-vertex-colouring-and-chromatic-number, def-graph-deletion-contraction-minor-and-subdivision, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
short: "Five colour theorem"
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 5.1.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf"
    - title: "R. Grassl and O. Levin, Exploring Combinatorial Mathematics, Activity 307"
      url: "https://openmathbooks.org/ecm/ecm.html"
pipeline_run: null
---

## Statement

Every planar graph has chromatic number at most five in the sense of [[def-proper-vertex-colouring-and-chromatic-number]]. The induction uses vertex deletion from [[def-graph-deletion-contraction-minor-and-subdivision]], Kempe chains from [[def-kempe-chain]], and [[thm-induction-principle]].

## Facts & Assumptions

**Given:** A finite simple planar graph $G$ with a fixed plane embedding.

[L1] Every nonnull simple planar graph has a vertex of degree at most five ([[cor-planar-graph-has-low-degree-vertex]]).

[L2] Swapping the two colours on one Kempe component preserves a proper colouring ([[lem-kempe-component-colour-swap]]).

[L3] Alternating Kempe paths between the first and third and between the second and fourth cyclic neighbours cannot both occur ([[lem-alternating-kempe-paths-cannot-both-occur]]).



## Proof

**Proof technique:** induction.

1.1 The null graph is five-colourable. For a nonnull graph choose by [L1] a vertex $v$ of degree at most five; by the induction hypothesis, $G-v$ has a proper colouring with colours $1,\ldots,5$. [base, ih, L1]

2.1 If fewer than five colours occur on the neighbours of $v$, give $v$ a missing colour. Otherwise $v$ has degree exactly five, its five neighbours are distinct and use all five colours; list them $v_1,\ldots,v_5$ in their cyclic plane order and relabel so $v_i$ has colour $i$. [step 1.1]

3.1 By [L3], either $v_1,v_3$ lie in different $1$-$3$ Kempe components or $v_2,v_4$ lie in different $2$-$4$ components. [step 2.1, L3]

4.1 In the first case, swap colours $1$ and $3$ on the component containing $v_1$; in the second, swap $2$ and $4$ on the component containing $v_2$. By [L2] the colouring remains proper, and respectively colour $1$ or colour $2$ is now absent from the neighbours of $v$. [step 3.1, L2, L3]

5.1 Give $v$ the freed colour. Together with the immediate case in step 2.1 this extends a five-colouring at every induction stage, proving the theorem. [step 1.1, step 4.1, discharge-induction] ∎
