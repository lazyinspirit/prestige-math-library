---
id: lem-greedy-colouring-bound
kind: lemma
title: "The greedy colouring bound $\\chi(G)\\leq\\Delta(G)+1$ for every nonnull finite graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-proper-vertex-colouring-and-chromatic-number,
       def-graph-adjacency-incidence-neighbourhood-and-degree,
       def-finite-cardinality, lem-pigeonhole, thm-well-ordering-principle,
       thm-induction-principle, lem-nat-trichotomy]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Springer, Graph Theory Fundamentals, Theorem 1.17"
      url: "https://link.springer.com/chapter/10.1007/978-981-96-4745-3_1"
pipeline_run: null
---

## Statement

Let $G=(V,E)$ be a nonnull finite simple graph. Then

$$\chi(G)\leq\Delta(G)+1.$$

More precisely, after the vertices are put in any finite order, assigning to
each vertex the least colour not already used by an earlier neighbour produces
a proper colouring with colours in $\Delta(G)+1$.

## Facts & Assumptions

**Given:** A nonnull finite simple graph $G=(V,E)$, $n:=|V|$, and a bijective enumeration $i\mapsto v_i$ from $n$ to $V$.

[L1] A proper $k$-colouring assigns different elements of $k$ to adjacent vertices, and $\chi(G)$ is the least admissible $k$ ([[def-proper-vertex-colouring-and-chromatic-number]]).

[L2] Every vertex has at most $\Delta(G)$ neighbours ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[L3] If $m<n$ are natural numbers, there is no injection from $n$ into $m$
([[lem-pigeonhole]], claim 2).

[L4] Every nonempty subset of the natural numbers has a least element
([[thm-well-ordering-principle]]).

[L5] A subset of the natural numbers containing $0$ and closed under successor
is all of the natural numbers; and exactly one of $i<n$, $i=n$, $n<i$ holds
([[thm-induction-principle]], [[lem-nat-trichotomy]]).

## Proof

**Proof technique:** constructive.

1.1 For each $i<n$, at most $\deg_G(v_i)\leq\Delta(G)$ earlier neighbours of $v_i$ have already been considered. If all $\Delta(G)+1$ colours occurred among them, choosing for each colour its least earlier-neighbour index would inject the $\Delta(G)+1$ colours into a set of at most $\Delta(G)$ indices, contradicting [L3]. Thus at least one colour is absent. [L2, L3, L4]

1.2 Let $P(i)$ say that either $n<i$, or the first $i$ vertices have a unique colouring which uses the least available colour at every vertex. The empty colouring verifies $P(0)$. [construct]

2.1 Assume $P(i)$. If $n<i$ or $i=n$, then $n<i+1$, so $P(i+1)$. If $i<n$, step 1.1 gives a nonempty set of available colours for $v_i$, and [L4] gives its unique least element. Appending that colour to the unique preceding colouring produces the unique greedy colouring of the first $i+1$ vertices; hence $P(i+1)$. These cases are exhaustive by [L5]. [step 1.1, step 1.2, L4, L5, construct]

3.1 Induction using steps 1.2 and 2.1 gives $P(n)$. Since $n<n$ is false, this gives a greedy colouring $c$ of all $n$ vertices. [step 1.2, step 2.1, L5, construct]

4.1 If $\{v_i,v_j\}\in E$ with $i<j$, then $v_i$ is an earlier neighbour of $v_j$, so the rule in step 3.1 gives $c(v_j)\ne c(v_i)$. Thus $c$ is a proper $(\Delta(G)+1)$-colouring. [step 3.1, L1]

5.1 Since such a colouring exists, the minimality clause in [L1] gives $\chi(G)\leq\Delta(G)+1$. [step 4.1, L1, discharge-construct] ∎
