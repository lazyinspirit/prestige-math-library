---
id: lem-overlapping-proper-modules-of-a-connected-anticonnected-graph
kind: lemma
title: "In a connected and anticonnected graph, the union of two proper modules that meet is again a proper module"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-module-of-a-graph, lem-union-of-two-meeting-modules-is-a-module, lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour, lem-modules-are-complement-invariant, lem-module-criteria, def-connected-graph-and-connected-component, def-anticonnected-graph-and-anticonnected-component, def-edges-between-sets-and-pure-mixed-pairs, def-graph-isomorphism-and-complement]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.3"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph that is both connected and anticonnected, and
let $M,N$ be proper modules of $G$ with $M\cap N\ne\varnothing$. Then $M\cup N$
is a proper module of $G$.

## Facts & Assumptions

**Given:** A connected and anticonnected finite simple graph $G$, and proper modules $M,N$ of $G$ with $M\cap N\ne\varnothing$.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$, and $M$ is proper when $M\ne V(G)$ ([[def-module-of-a-graph]]).

[L1] The union of two modules with a common vertex is a module ([[lem-union-of-two-meeting-modules-is-a-module]]).

[L2] In a connected graph, if $M$ is a module with $\varnothing\ne M\ne V(G)$, then some vertex outside $M$ is complete to $M$ ([[lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour]]).

[L3] A vertex set is a module of $G$ if and only if it is a module of $\overline G$ ([[lem-modules-are-complement-invariant]]).

[L4] For a module $N$ of $G$: for all $p,q\in N$ and all $x\in V(G)\setminus N$, $xp\in E(G)$ if and only if $xq\in E(G)$ ([[lem-module-criteria]]).

[F2] $G$ is anticonnected when $\overline G$ is connected, and $\overline G$ has the same vertex set as $G$ ([[def-anticonnected-graph-and-anticonnected-component]], [[def-connected-graph-and-connected-component]], [[def-graph-isomorphism-and-complement]]).

[F3] A disjoint pair is complete when every cross pair is an edge and anticomplete when no cross pair is an edge; distinct vertices are adjacent in $\overline G$ exactly when they are not adjacent in $G$ ([[def-edges-between-sets-and-pure-mixed-pairs]], [[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** contradiction.

1.1 The set $M\cup N$ is a module of $G$ by [L1], since $M\cap N\ne\varnothing$. Suppose for contradiction that $M\cup N=V(G)$. [L1, assume-contra, given]

1.2 The set $M$ is nonempty, since it contains a vertex of $M\cap N$, and $M\ne V(G)$ because $M$ is proper. [F1, given]

2.1 If $M\setminus N$ were empty then $M\subseteq N$, so $N=M\cup N=V(G)$ by step 1.1, which is false because $N$ is proper; hence $M\setminus N\ne\varnothing$, and $V(G)\setminus M=N\setminus M$, again by step 1.1. [step 1.1, F1]

2.2 Since $G$ is connected and $M$ is a module with $\varnothing\ne M\ne V(G)$, some vertex $v\in V(G)\setminus M$ is complete to $M$. [step 1.2, L2, given]

2.3 The set $M$ is a module of $\overline G$ as well, and $\overline G$ is connected with the same vertex set as $G$, so some vertex $v'\in V(G)\setminus M$ is complete to $M$ in $\overline G$; that is, $v'$ is adjacent in $G$ to no vertex of $M$. [step 1.2, L2, L3, F2, F3]

3.1 Choose $x\in M\setminus N$. Then $x\notin N$, while $v$ and $v'$ both lie in $V(G)\setminus M=N\setminus M\subseteq N$, so [L4] applied to the module $N$ gives that $xv\in E(G)$ if and only if $xv'\in E(G)$. [step 2.1, step 2.2, step 2.3, L4, choose]

4.1 But $v$ is complete to $M$ and $x\in M$, so $xv\in E(G)$, while $v'$ is adjacent to no vertex of $M$, so $xv'\notin E(G)$; this contradicts step 3.1. Hence $M\cup N\ne V(G)$, and being a module it is a proper module. [step 1.1, step 3.1, F3, discharge-contradiction] ∎
