---
id: lem-every-vertex-lies-in-a-unique-maximal-proper-module
kind: lemma
title: "In a connected and anticonnected graph with at least two vertices, each vertex lies in a largest proper module, and two such modules are equal or disjoint"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-overlapping-proper-modules-of-a-connected-anticonnected-graph, def-module-of-a-graph, def-finite-cardinality, thm-subset-of-a-finite-set, thm-well-ordering-principle]
aliases: []
landmark: true
proof_strategy: direct
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

Let $G$ be a connected and anticonnected finite simple graph with
$|V(G)|\ge2$. For $v\in V(G)$ write $\mathcal M(v)$ for the set of proper
modules of $G$ containing $v$. Then $\mathcal M(v)$ has a member $M(v)$ that
contains every member of $\mathcal M(v)$; it is the largest proper module
containing $v$. Moreover, for $u,v\in V(G)$ either $M(u)=M(v)$ or
$M(u)\cap M(v)=\varnothing$; and every vertex $v$ lies in $M(v)$, so the sets
$M(v)$ cover $V(G)$.

## Facts & Assumptions

**Given:** A connected and anticonnected finite simple graph $G$ with $|V(G)|\ge2$, and a vertex $v\in V(G)$.

[F1] $M$ is a module of $G$ when the pair $(\{w\},M)$ is pure for every $w\in V(G)\setminus M$; the singletons are modules, and $M$ is proper when $M\ne V(G)$ ([[def-module-of-a-graph]]).

[L1] In a connected and anticonnected graph, the union of two proper modules that meet is again a proper module ([[lem-overlapping-proper-modules-of-a-connected-anticonnected-graph]]).

[L2] Every subset of a finite set is finite, has cardinality at most that of the set, and has that cardinality only if it is the whole set ([[thm-subset-of-a-finite-set]]).

[L3] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[F2] The cardinality $|A|$ of a finite set is a natural number ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 The singleton $\{v\}$ is a module of $G$, and $\{v\}\ne V(G)$ because $|V(G)|\ge2$, so $\{v\}\in\mathcal M(v)$ and $\mathcal M(v)$ is nonempty. [F1, given]

1.2 Every member of $\mathcal M(v)$ is a subset of the finite set $V(G)$, so its cardinality is a natural number at most $|V(G)|$. [L2, F2]

2.1 The set $\{\,|V(G)|-|M| : M\in\mathcal M(v)\,\}$ is a nonempty subset of $\mathbb N$ by steps 1.1 and 1.2, so it has a least element; a member $M^{*}\in\mathcal M(v)$ attaining it has $|M|\le|M^{*}|$ for every $M\in\mathcal M(v)$. [step 1.1, step 1.2, L3, choose]

3.1 Let $M\in\mathcal M(v)$. Both $M$ and $M^{*}$ are proper modules containing $v$, so they meet, and [L1] makes $M\cup M^{*}$ a proper module; it contains $v$, so it lies in $\mathcal M(v)$ and step 2.1 gives $|M\cup M^{*}|\le|M^{*}|$. [step 2.1, L1, F1]

4.1 Since $M^{*}\subseteq M\cup M^{*}$ and the two have equal cardinality by step 3.1 and [L2], they are equal, so $M\subseteq M^{*}$. Writing $M(v)=M^{*}$, this is a proper module containing $v$ and containing every proper module that contains $v$. [step 3.1, L2]

5.1 If $M(u)\cap M(v)\ne\varnothing$ then $M(u)\cup M(v)$ is a proper module by [L1]; it contains $u$, so step 4.1 gives $M(u)\cup M(v)\subseteq M(u)$ and hence $M(v)\subseteq M(u)$, and by symmetry $M(u)\subseteq M(v)$, so $M(u)=M(v)$. Otherwise the two are disjoint, and every vertex $v$ lies in $M(v)$. [step 4.1, L1] ∎
