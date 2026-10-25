---
id: lem-graph-reachability-is-an-equivalence-relation
kind: lemma
title: "Being joined by a walk or path is the same equivalence relation on the vertex set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-connected-graph-and-connected-component, lem-every-graph-walk-contains-a-path-between-its-endpoints, def-equivalence-relation, def-graph-walk-trail-path-and-cycle]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Paths and Cycles"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html"
pipeline_run: null
---

## Statement

On the vertex set of a graph, define $u\sim v$ when a walk joins $u$ to $v$.
Then $\sim$ is an equivalence relation ([[def-equivalence-relation]]), and
$u\sim v$ holds exactly when a path joins $u$ to $v$.

## Facts & Assumptions

**Given:** A graph $G=(V,E)$ and the relation $u\sim v$ defined by the existence of a walk from $u$ to $v$.

[F1] An equivalence relation is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

[L1] Every walk between two vertices contains a path between the same endpoints ([[lem-every-graph-walk-contains-a-path-between-its-endpoints]]).

[F2] A one-vertex list is a path of length $0$, reversing a walk gives a walk with reversed endpoints, and concatenating a $u$ to $v$ walk with a $v$ to $w$ walk gives a $u$ to $w$ walk ([[def-connected-graph-and-connected-component]], [[def-graph-walk-trail-path-and-cycle]]).

## Proof

**Proof technique:** direct.

1.1 For every $u\in V$, the length-$0$ walk $(u)$ joins $u$ to itself, so $u\sim u$. [F2]

1.2 If $u\sim v$, reversing a witnessing walk gives a walk from $v$ to $u$, so $v\sim u$. [given, F2]

1.3 If $u\sim v$ and $v\sim w$, concatenating witnessing walks gives a walk from $u$ to $w$, so $u\sim w$. [given, F2]

2.1 Steps 1.1, 1.2 and 1.3 prove reflexivity, symmetry and transitivity, hence $\sim$ is an equivalence relation by [F1]. [step 1.1, step 1.2, step 1.3, F1]

3.1 Every path is a walk, while [L1] turns every witnessing walk into a path with the same endpoints; therefore walk-reachability and path-reachability coincide. [L1, F2] ∎
