---
id: lem-hall-induction-reductions
kind: lemma
title: "Hall's condition passes to the strict and tight induction subinstances"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-bipartite-neighbourhood-hall-condition-and-sdr, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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

Let $(X,Y)$ satisfy Hall's condition. If $|X|\ge2$, then exactly one of the
following usable reductions holds.

1. **Strict case:** if $|N(S)|>|S|$ for every nonempty proper $S\subset X$,
   then for every edge $xy$ the graph obtained by deleting $x$ and $y$ satisfies
   Hall's condition on $X\setminus\{x\}$.
2. **Tight case:** if some nonempty proper $S\subset X$ has $|N(S)|=|S|$, then
   both the subgraph on $S\cup N(S)$ and the subgraph on
   $(X\setminus S)\cup(Y\setminus N(S))$ satisfy Hall's condition on their
   respective left parts.

## Facts & Assumptions

**Given:** A finite bipartite graph with parts $(X,Y)$ satisfying Hall's condition.

[F1] Hall's condition says $|N(T)|\ge |T|$ for every left subset $T\subseteq X$ ([[def-bipartite-neighbourhood-hall-condition-and-sdr]]).

## Proof

**Proof technique:** direct.

1.1 In the strict case, let $xy$ be an edge and $T\subseteq X\setminus\{x\}$; if $T$ is nonempty then $T$ is proper in $X$, so $|N(T)|>|T|$ and deleting $y$ leaves at least $|T|$ neighbours. [F1]

1.2 Thus the graph with $x,y$ deleted satisfies Hall's condition on $X\setminus\{x\}$, including $T=\varnothing$. [F1]

2.1 In the tight case, $T\subseteq S$ has $|N(T)\cap N(S)|=|N(T)|\ge|T|$, while $T\subseteq X\setminus S$ with fewer than $|T|$ neighbours outside $N(S)$ would make $|N(T\cup S)|<|T\cup S|$; both induced subinstances therefore satisfy Hall. [step 1.2]

3.1 Steps 1.1--2.1 establish the strict and tight reductions. [step 1.2, step 2.1] ∎

## Remarks

- The two alternatives are exhaustive by whether a nonempty proper left subset is tight; the one-vertex case is kept in Hall's theorem rather than forced into this reduction.
