---
id: lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour
kind: lemma
title: "In a connected graph, some vertex outside a nonempty proper module is complete to it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-module-of-a-graph, def-connected-graph-and-connected-component, def-graph-walk-trail-path-and-cycle, def-edges-between-sets-and-pure-mixed-pairs, thm-well-ordering-principle]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
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

Let $G$ be a connected finite simple graph and let $M$ be a module of $G$ with
$\varnothing\ne M\ne V(G)$. Then some vertex $v\in V(G)\setminus M$ is complete
to $M$.

## Facts & Assumptions

**Given:** A connected finite simple graph $G$ and a module $M$ of $G$ with $\varnothing\ne M\ne V(G)$.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[F2] A graph is connected when its vertex set is nonempty and every two of its vertices are joined by a path ([[def-connected-graph-and-connected-component]]).

[F3] A walk of length $\ell$ is a vertex list $(v_0,\ldots,v_\ell)$ with $\{v_{i-1},v_i\}\in E$ for every $1\le i\le\ell$, and a path is a walk whose vertices are distinct ([[def-graph-walk-trail-path-and-cycle]]).

[F4] The pair $(A,B)$ of disjoint sets is complete when every $a\in A$ is adjacent to every $b\in B$, anticomplete when no $a\in A$ is adjacent to any $b\in B$, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[L1] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 Choose $u\in M$ and $w\in V(G)\setminus M$; both choices are possible because $M\ne\varnothing$ and $M\ne V(G)$. [given, choose]

1.2 Since $G$ is connected there is a path $(v_0,\ldots,v_\ell)$ with $v_0=u$ and $v_\ell=w$. [F2, F3, given]

2.1 The set $\{i\le\ell:v_i\notin M\}$ is a nonempty subset of $\mathbb N$, since it contains $\ell$, so it has a least element $k$; and $k\ge1$ because $v_0=u\in M$. [step 1.1, step 1.2, L1]

3.1 By minimality $v_{k-1}\in M$, and $\{v_{k-1},v_k\}$ is an edge of $G$ because consecutive vertices of a path are adjacent. [step 2.1, F3]

4.1 Put $v=v_k$. Then $v\notin M$, so $(\{v\},M)$ is pure, and it is not anticomplete because $v$ is adjacent to $v_{k-1}\in M$; hence it is complete, that is, $v$ is complete to $M$. [step 3.1, F1, F4] ∎
