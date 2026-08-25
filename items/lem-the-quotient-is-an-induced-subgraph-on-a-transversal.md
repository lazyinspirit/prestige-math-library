---
id: lem-the-quotient-is-an-induced-subgraph-on-a-transversal
kind: lemma
title: "The quotient by a modular partition is isomorphic to the subgraph induced by any set meeting each part exactly once"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-modular-partition-and-quotient-graph, def-module-of-a-graph, lem-disjoint-modules-are-a-pure-pair, def-edges-between-sets-and-pure-mixed-pairs, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-isomorphism-and-complement, def-finite-simple-graph]
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
    - title: "T. Harju, Lecture Notes on Combinatorial Structures in Graph Theory, sec. 3"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal P$ be a modular partition of a finite simple graph $G$ and let
$T\subseteq V(G)$ meet every part of $\mathcal P$ in exactly one vertex. Then
$G[T]\cong G/\mathcal P$. Such a set $T$ exists, so the quotient is isomorphic
to an induced subgraph of $G$.

## Facts & Assumptions

**Given:** A modular partition $\mathcal P$ of a finite simple graph $G$, and a set $T\subseteq V(G)$ with $|M\cap T|=1$ for every $M\in\mathcal P$.

[F1] A modular partition of $G$ is a set of nonempty, pairwise disjoint modules of $G$ whose union is $V(G)$; the quotient $G/\mathcal P$ has vertex set $\mathcal P$, with distinct parts $M,N$ adjacent exactly when $(M,N)$ is a complete pair in $G$; and $\mathcal P$ is finite ([[def-modular-partition-and-quotient-graph]], [[def-finite-simple-graph]]).

[L1] Two disjoint nonempty modules of $G$ form a complete or an anticomplete pair, and not both ([[lem-disjoint-modules-are-a-pure-pair]]).

[F2] A disjoint pair is complete when every cross pair is an edge, anticomplete when no cross pair is an edge, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[F3] $G[T]=(T,\,E(G)\cap[T]^2)$, so two vertices of $T$ are adjacent in $G[T]$ exactly when they are adjacent in $G$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F4] A graph isomorphism is a bijection $\varphi:V\to W$ such that, for all distinct $u,v\in V$, $\{u,v\}\in E$ if and only if $\{\varphi(u),\varphi(v)\}\in F$ ([[def-graph-isomorphism-and-complement]]).

[F5] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

## Proof

**Proof technique:** direct.

1.1 Define $\varphi:\mathcal P\to T$ by letting $\varphi(M)$ be the unique vertex of $M\cap T$. This is injective, because distinct parts are disjoint and $\varphi(M)\in M$; and it is surjective, because every $t\in T$ lies in exactly one part $M$, and then $t\in M\cap T$, so $t=\varphi(M)$. [F1, given, construct]

1.2 Let $M,N\in\mathcal P$ be distinct. The pair $(M,N)$ is complete or anticomplete and not both, so if it is complete then $\varphi(M)\varphi(N)\in E(G)$, and if it is anticomplete then $\varphi(M)\varphi(N)\notin E(G)$. [L1, F2, F5, given]

2.1 By the definition of the quotient, $\{M,N\}\in E(G/\mathcal P)$ says exactly that $(M,N)$ is complete, so step 1.2 gives $\{M,N\}\in E(G/\mathcal P)$ if and only if $\{\varphi(M),\varphi(N)\}\in E(G)$; and since $\varphi(M),\varphi(N)\in T$, that is the same as $\{\varphi(M),\varphi(N)\}\in E(G[T])$. [step 1.2, F1, F3]

3.1 So $\varphi$ is a bijection from $V(G/\mathcal P)=\mathcal P$ onto $T=V(G[T])$ that preserves and reflects adjacency, hence an isomorphism $G/\mathcal P\to G[T]$. [step 1.1, step 2.1, F4]

4.1 A set $T$ as in the Statement exists: the parts are nonempty and there are finitely many of them, so selecting one vertex from each is a choice from a finite family of nonempty sets and needs no further principle. Hence the quotient is isomorphic to an induced subgraph of $G$. [step 3.1, F1, choose] ∎
