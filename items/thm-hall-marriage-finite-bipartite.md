---
id: thm-hall-marriage-finite-bipartite
kind: theorem
title: "Hall's marriage theorem for a finite bipartite graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-hall-induction-reductions, def-matching-maximum-perfect-and-matching-number, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "F. Gotti, Matching and Hall's Theorem"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/30.%20Matchings%20and%20Hall%27s%20Theorem/Matching%20and%20Hall%27s%20Theorem.pdf"
pipeline_run: null
---

## Statement

For a finite bipartite graph with parts $(X,Y)$, there is a matching saturating
$X$ if and only if $|N(S)|\ge |S|$ for every $S\subseteq X$.

## Facts & Assumptions

**Given:** A finite bipartite graph with specified parts $(X,Y)$.

[L1] The strict and tight Hall subinstances in the induction have Hall's condition ([[lem-hall-induction-reductions]]).

[L2] The induction principle proves a statement for every natural number from its base case and successor step ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction on $|X|$.

1.1 For $|X|=0$ the empty matching saturates $X$; for $|X|=1$, Hall gives a neighbour and its incident edge saturates $X$. [L2, base]

1.2 Any matching that saturates $X$ assigns distinct neighbours to each $S\subseteq X$, hence has $|N(S)|\ge|S|$. [given]

1.3 In the strict case with $|X|\ge2$, choose any edge $xy$; [L1] gives Hall after deleting $x,y$, so induction supplies a matching there saturating $X\setminus\{x\}$, and adjoining $xy$ saturates $X$. [L1, ih]

1.4 In the tight case, [L1] gives Hall on the two smaller left parts $S$ and $X\setminus S$; induction gives saturating matchings in each, and their disjoint vertex sets let their union saturate $X$. [L1, ih]

2.1 The base cases and the two alternatives prove Hall's sufficient direction by [L2], and step 1.2 proves its necessary direction. [L2, step 1.2, step 1.3, step 1.4, discharge-induction] ∎

## Remarks

- This is the finite theorem only. No infinite-family or choice-principle claim is being made here.
