---
id: lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade
title: "E overlap quotients terminate at a pure blockade"
kind: lemma
status: published
origin: pipeline
deps: ["def-e-overlap-blockade-and-iterated-mixed-quotients", "lem-quotient-blocks-preserve-connectedness-and-anticonnectedness", "thm-well-ordering-principle"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "Finite adjacency analysis and structural deduction"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Lemma 6.5, termination"
      url: https://arxiv.org/html/2606.06258v2
---

## Statement

For nonempty overlap support, put $n=|\mathcal L^1|$. Every stage $\mathcal L^s$ partitions the same support into nonempty anticonnected blocks and coarsens $\mathcal L^1$. There is a least $q\geq1$ for which $\mathcal L^q$ is pure, with $q\leq n$. At most $n-1$ strict transitions occur, and all stages from $q$ onward are identical.

## Facts & Assumptions

[F1] [[def-e-overlap-blockade-and-iterated-mixed-quotients]] supplies the following definition: Fix a comb block $B_i$ with nonempty $E$ overlap support $X_i$. By lem-e-overlap-classes-form-an-anticonnected-partition, its overlap classes are nonempty anticonnected sets partitioning $X_i$. Fix an enumeration of the finite set $B_i$, and order the classes by their least enumerated vertex to obtain $\mathcal L^1$. Define recursively $\mathcal L^{s+1}=\mathcal L^s/\mathcal M$ for $s\geq1$, using def-quotient-blockade-by-mixed-block-reachability and its least-member ordering. Thus one replaces each mixed-reachability class of blocks by its union. This construction is used only when $X_i\ne\varnothing$.

[F2] [[lem-quotient-blocks-preserve-connectedness-and-anticonnectedness]] supplies the following statement: Let $\mathcal L$ be a blockade and let $D$ be a block of the quotient blockade $\mathcal L/\mathcal M$. 1. If every block of $\mathcal L$ contained in $D$ induces a connected subgraph, then $G[D]$ is connected. 2. If every block of $\mathcal L$ contained in $D$ induces an anticonnected subgraph, then $G[D]$ is anticonnected.

[F3] [[thm-well-ordering-principle]] supplies the following statement: Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 The initial classes have the asserted properties by the construction. Every quotient is a partition of the same union into unions of old blocks, so coarsening and nonemptiness persist at every stage. The anticonnected clause of the quotient preservation lemma, applied successively, preserves anticonnectedness. [F1, F2]

1.2 If a stage has a mixed pair, those two blocks belong to the same reachability class, so the next stage has strictly fewer blocks. If it has no mixed pair, every reachability class is a singleton, so the next ordered blockade is identical. Conversely an identical stage cannot have a mixed pair. [F1]

2.1 The positive integer block count begins at $n$; after $n-1$ strict decreases it is at most one, when no mixed pair exists. Thus a pure stage exists among $1,\ldots,n$. The well-ordering principle gives a least such $q$, and the preceding fixed-stage argument makes all later stages equal. This also covers $n=1,q=1$ and zero strict transitions. [F3, F1] ∎
