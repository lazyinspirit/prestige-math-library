---
id: lem-pc-separating-set-collider
kind: lemma
title: "A separating set identifies an unshielded collider"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-cpdag-markov-equivalence-class
  - def-d-separation-in-a-dag
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §2.3"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §2.1"
      url: "https://arxiv.org/pdf/1302.4972"
---

## Statement

Let $i-k-j$ be an unshielded triple in a finite DAG and let
$S\subseteq V\setminus\{i,j\}$ d-separate $i$ and $j$. Then the triple is a
v-structure $i\to k\leftarrow j$ if and only if $k\notin S$.

## Statement references

[Kalisch and Bühlmann, §2.3](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

[Meek, §2.1](https://arxiv.org/pdf/1302.4972)

## Facts & Assumptions

**Given:** A finite DAG, an unshielded triple $i-k-j$, and a separating set $S$ for its endpoints.

[F1] A path is active given $S$ when its internal noncolliders are outside $S$ and each collider has a descendant in $S$. [[def-d-separation-in-a-dag]]

[F2] An unshielded triple and a v-structure have the meanings stated in the CPDAG interface. [[def-cpdag-markov-equivalence-class]]

## Proof

1.1 If $i\to k\leftarrow j$, then $k$ is a collider on the length-two path from $i$ to $j$. If $k\in S$, it is its own conditioned descendant, so this path is active by [F1], contradicting that $S$ separates the endpoints. Therefore $k\notin S$. [given, F1, F2]

1.2 If the unshielded triple is not a v-structure, then $k$ is a noncollider on its length-two path. If $k\notin S$, that path has no conditioned internal noncollider and no collider, so it is active by [F1], again contradicting separation. Hence a noncollider requires $k\in S$. [given, F1, F2]

2.1 The two implications prove the equivalence. [step 1.1, step 1.2, algebra] ∎
