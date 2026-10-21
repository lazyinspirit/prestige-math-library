---
id: def-cpdag-markov-equivalence-class
kind: definition
title: "DAG Markov equivalence, patterns, and CPDAGs"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-d-separation-in-a-dag
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §1.1"
      url: "https://arxiv.org/pdf/1302.4972"
    - title: "Lauritzen, Graphical Models lecture notes, §2.6"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Fix a finite vertex set $V$. For a DAG $G$ on $V$, its **skeleton** is the
undirected graph with edge $\{i,j\}$ exactly when $G$ contains $i\to j$ or
$j\to i$. An **unshielded triple** is a triple of distinct vertices $i,k,j$
with edges $i-k$ and $k-j$ in the skeleton and no edge between $i$ and $j$.
It is an **unshielded collider** (also called a v-structure) when its arrows are
$i\to k\leftarrow j$. Two DAGs on $V$ are **Markov equivalent** when they
induce the same d-separation relations: for every pairwise disjoint
$A,B,S\subseteq V$, $A$ and $B$ are d-separated by $S$ in one DAG exactly
when they are d-separated by $S$ in the other. The equivalence class of $G$ is
denoted $[G]$.

A **partially directed acyclic graph** (PDAG) on $V$ is a simple mixed graph
whose directed edges contain no directed cycle. A **consistent DAG extension**
of a PDAG preserves every directed edge, orients every undirected edge, is
acyclic, and creates no unshielded collider absent from the PDAG. For an
equivalence class with a common skeleton, its **completed pattern** directs an
edge exactly when that orientation occurs in every DAG of the class and leaves
the edge undirected when both orientations occur. A **completed partially
directed acyclic graph** (CPDAG) for $[G]$ is this unique completed pattern
when its consistent DAG extensions are exactly $[G]$. Thus its directed edges
are compelled, while each undirected edge occurs in both directions among its
consistent extensions.

## Definition references

[[def-d-separation-in-a-dag]]
