---
id: cor-the-modular-partition-with-a-prime-quotient-is-unique
kind: corollary
title: "In a connected and anticonnected graph, a modular partition with at least two parts whose quotient is prime consists of the maximal proper modules"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-modular-partition-and-quotient-graph, def-prime-graph, def-module-of-a-graph, lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is, lem-overlapping-proper-modules-of-a-connected-anticonnected-graph, lem-every-vertex-lies-in-a-unique-maximal-proper-module, thm-gallai-modular-decomposition]
aliases: []
landmark: false
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
    - title: "T. Harju, Lecture Notes on Combinatorial Structures in Graph Theory, secs. 3 and 4"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a connected and anticonnected finite simple graph with
$|V(G)|\ge2$, and let $\mathcal P$ be a modular partition of $G$ with at least
two parts whose quotient $G/\mathcal P$ is prime. Then every part of
$\mathcal P$ is a maximal proper module $M(v)$, and $\mathcal P$ is the
partition of $G$ into its maximal proper modules. In particular $G$ has exactly
one modular partition with at least two parts and a prime quotient, namely the
one produced by [[thm-gallai-modular-decomposition]].

## Facts & Assumptions

**Given:** A connected and anticonnected finite simple graph $G$ with $|V(G)|\ge2$, and a modular partition $\mathcal P$ of $G$ with at least two parts and $G/\mathcal P$ prime.

[F1] A modular partition of $G$ is a set of nonempty, pairwise disjoint modules of $G$ whose union is $V(G)$; the quotient has vertex set $\mathcal P$ ([[def-modular-partition-and-quotient-graph]]).

[F2] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$, and $M$ is proper when $M\ne V(G)$ ([[def-module-of-a-graph]]).

[F3] A graph is prime when every module of it is trivial, the trivial modules being the empty set, the singletons and the whole vertex set ([[def-prime-graph]]).

[L1] For a modular partition $\mathcal P$ and $\mathcal X\subseteq\mathcal P$, the set $\mathcal X$ is a module of $G/\mathcal P$ if and only if $\bigcup_{M\in\mathcal X}M$ is a module of $G$ ([[lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is]]).

[L2] In a connected and anticonnected graph, the union of two proper modules that meet is again a proper module ([[lem-overlapping-proper-modules-of-a-connected-anticonnected-graph]]).

[L3] In a connected and anticonnected graph with at least two vertices, each vertex $v$ lies in a largest proper module $M(v)$, any two of these are equal or disjoint, and they cover $V(G)$ ([[lem-every-vertex-lies-in-a-unique-maximal-proper-module]]).

[L4] The maximal proper modules of such a graph form a modular partition with at least two parts whose quotient is prime ([[thm-gallai-modular-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 Every part $N\in\mathcal P$ is a nonempty module of $G$, and $N\ne V(G)$ because $\mathcal P$ has another part, which is nonempty and disjoint from $N$; so every part is a proper module. [F1, F2, given]

2.1 Fix $M_0\in\mathcal P$ and $x\in M_0$, and let $M(x)$ be the largest proper module of $G$ containing $x$. Then $M_0\subseteq M(x)$ by step 1.1 and the maximality in [L3]. [step 1.1, L3, choose]

3.1 Let $\mathcal X=\{N\in\mathcal P:N\cap M(x)\ne\varnothing\}$ and let $N\in\mathcal X$. Both $N$ and $M(x)$ are proper modules and they meet, so $N\cup M(x)$ is a proper module by [L2]; it contains $x$, so [L3] gives $N\cup M(x)\subseteq M(x)$ and hence $N\subseteq M(x)$. [step 1.1, step 2.1, L2, L3]

4.1 Every vertex of $M(x)$ lies in a part, and that part meets $M(x)$ and so lies in $\mathcal X$; with step 3.1 this gives $M(x)=\bigcup_{N\in\mathcal X}N$. [step 3.1, F1]

5.1 By [L1] the set $\mathcal X$ is therefore a module of $G/\mathcal P$, hence trivial by [F3]. It is not empty, since $M_0\in\mathcal X$ by step 2.1; and it is not all of $\mathcal P$, since that would give $M(x)=V(G)$, contradicting properness. So $\mathcal X$ is a singleton, and by step 2.1 its unique member is $M_0$, whence $M(x)=M_0$. [step 2.1, step 4.1, L1, F1, F3]

6.1 So each part of $\mathcal P$ equals $M(x)$ for each of its vertices $x$, and conversely each $M(v)$ is the part containing $v$ by the same computation; hence $\mathcal P$ is exactly the set of maximal proper modules, which by [L4] is a modular partition with at least two parts and a prime quotient, and no other modular partition of $G$ with at least two parts has a prime quotient. [step 5.1, L3, L4] ∎
