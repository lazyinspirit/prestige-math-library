---
id: def-permutation-index-of-a-transitive-group-element
kind: definition
title: "Permutation index in a transitive action"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-symmetric-group
  - def-permutation-support-disjoint-cycles-and-cycle-type
  - def-finite-cardinality
  - def-group-action
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. Klüners, A counter example to Malle's conjecture on the asymptotics of discriminants, §1"
      url: "https://arxiv.org/pdf/math/0411486v1"
    - title: "Akhtari, Park, Pieropan, Sankar, Classifying stacks and Malle's conjecture, §4.1"
      url: "https://arxiv.org/pdf/2304.10726"
verification: {}
---

## Definition

Let $n\ge1$, let $S_n$ be the symmetric group on $\{1,\ldots,n\}$, and let $G\le S_n$ act transitively. For $g\in G$, let $c(g)$ be the number of cycles, including fixed points, in its disjoint-cycle decomposition. The **permutation index** of $g$ in this action is $\operatorname{ind}(g)=n-c(g)$. For a conjugacy class $C$ of $G$, set $\operatorname{ind}(C)=\operatorname{ind}(g)$ for any $g\in C$. If $G\ne\{1}$, set $\operatorname{ind}(G)=\min_{1\ne g\in G}\operatorname{ind}(g)$ and $a(G)=1/\operatorname{ind}(G)$.

## Definition references

[Malle, *On the distribution of Galois groups*, II, §2](https://arxiv.org/pdf/math/0411486v1)

[Akhtari, Park, Pieropan, Sankar, *Classifying stacks and Malle's conjecture*, §4.1](https://arxiv.org/pdf/2304.10726)

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a transitive subgroup $G\le S_n$.

[F1] Each permutation of a finite set decomposes into pairwise disjoint cycles, with one-cycles recording fixed points ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F2] Conjugate permutations have the same cycle type ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F3] The number of cycles in a permutation of a finite set is the natural-number cardinality of its orbit partition ([[def-finite-cardinality]]).

## Verification

1.1 The action set has $n$ elements, and [F1] partitions it into the cycles of $g$. Fact [F3] makes $c(g)$ a well-defined natural number between $1$ and $n$, so $\operatorname{ind}(g)=n-c(g)$ is a well-defined nonnegative integer. [F1, F3, given, algebra]

2.1 If $h=ugu^{-1}$ with $u\in G$, the bijection $x\mapsto u(x)$ maps each $g$-cycle to an $h$-cycle of the same length. By [F2] the cycle counts agree, so $\operatorname{ind}(h)=\operatorname{ind}(g)$; the class index is therefore independent of representative. If $G\ne\{1\}$, the finite set $G\setminus\{1\}$ is nonempty, so its finite set of integer indices has a minimum by well-ordering of $\mathbb N$. Every nonidentity permutation moves at least one point, so its cycle count is at most $n-1$ and $\operatorname{ind}(G)\ge1$; thus $a(G)$ is defined. [F2, step 1.1, given, algebra] ∎
