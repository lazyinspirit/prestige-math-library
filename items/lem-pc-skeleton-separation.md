---
id: lem-pc-skeleton-separation
kind: lemma
title: "DAG adjacency is equivalent to having no separating set"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
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
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §2.1"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Lauritzen, Graphical Models lecture notes, Lemma 2.57"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
---

## Statement

Let $G$ be a finite DAG on $V$. For distinct vertices $i,j\in V$, the pair
$\{i,j\}$ is an edge of the skeleton of $G$ if and only if there is no
$S\subseteq V\setminus\{i,j\}$ that d-separates $i$ and $j$ in $G$.

## Statement references

[Kalisch and Bühlmann, §2.1](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

[Lauritzen, Lemma 2.57](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

## Facts & Assumptions

**Given:** A finite DAG $G$ and distinct vertices $i,j\in V$.

[F1] In a finite DAG, a path is active given $S$ when each internal noncollider is outside $S$ and each collider has a descendant in $S$, with membership in $S$ counted as being its own descendant. [[def-d-separation-in-a-dag]]

## Proof

1.1 If $i$ and $j$ are adjacent, the one-edge path between them has no internal vertices, so it is active given every $S\subseteq V\setminus\{i,j\}$ by [F1]. Hence no such $S$ d-separates them. [given, F1]

1.2 Suppose $i$ and $j$ are nonadjacent. Acyclicity implies that at least one of $i,j$ is not a descendant of the other; after interchanging labels, assume $j$ is not a descendant of $i$. Since $i,j$ are nonadjacent, $j$ is a non-descendant non-parent of $i$. Put $S=\operatorname{pa}_G(i)$. Then $S$ excludes both endpoints. Consider any path $i=v_0,v_1,\ldots,v_r=j$. If its first arrow points into $i$, then $v_1\in S$ and the occurrence of $v_1$ is a noncollider, because the arrow $v_1\to i$ has its tail at $v_1$; the path is blocked. If the first arrow points out of $i$, follow arrows that point forward along the path until the first arrow that points backward. Such a reversal must occur because $j$ is not a descendant of $i$. At the reversal vertex $v_t$, both incident arrows point into $v_t$, so it is a collider and the initial segment is a directed path $i\to\cdots\to v_t$. If $v_t$ had a descendant $p\in S$, then $i\to\cdots\to v_t\to\cdots\to p\to i$ would be a directed cycle. Thus this collider has no descendant in $S$, and the path is blocked by [F1]. Every path is blocked, so $S$ d-separates $i$ and $j$. [given, F1, construct, choose]

2.1 The adjacent and nonadjacent cases prove both implications. [step 1.1, step 1.2, algebra] ∎
