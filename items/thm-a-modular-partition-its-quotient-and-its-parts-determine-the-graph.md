---
id: thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph
kind: theorem
title: "A graph is recovered from any modular partition by the induced subgraphs on the parts together with the quotient graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-modular-partition-and-quotient-graph, def-module-of-a-graph, lem-disjoint-modules-are-a-pure-pair, def-substitution-of-a-graph-for-a-vertex, lem-module-criteria, def-subgraph-induced-subgraph-and-spanning-subgraph, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "T. Harju, Lecture Notes on Combinatorial Structures in Graph Theory, sec. 3"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal P$ be a modular partition of a finite simple graph $G$, and let
$x,y$ be distinct vertices of $G$, lying in the parts $M,N\in\mathcal P$
respectively. Then

* if $M\ne N$: $\{x,y\}\in E(G)$ if and only if $\{M,N\}\in E(G/\mathcal P)$;
* if $M=N$: $\{x,y\}\in E(G)$ if and only if $\{x,y\}\in E(G[M])$.

Consequently $E(G)$ is determined by $G/\mathcal P$ together with the induced
subgraphs $G[M]$ for $M\in\mathcal P$. In particular, if
$\mathcal P=\{M_1,M_2\}$ has exactly the two parts $M_1,M_2$ and $t\in M_2$,
then $G=G[M_1\cup\{t\}]\,[t\to G[M_2]]$.

## Facts & Assumptions

**Given:** A modular partition $\mathcal P$ of a finite simple graph $G$, and distinct vertices $x\in M$ and $y\in N$ with $M,N\in\mathcal P$.

[F1] A modular partition of $G$ is a set of nonempty, pairwise disjoint modules of $G$ whose union is $V(G)$; the quotient $G/\mathcal P$ has vertex set $\mathcal P$, with distinct parts $M,N$ adjacent exactly when $(M,N)$ is a complete pair in $G$ ([[def-modular-partition-and-quotient-graph]]).

[L1] Two disjoint nonempty modules of $G$ form a complete or an anticomplete pair, and not both ([[lem-disjoint-modules-are-a-pure-pair]]).

[F2] A disjoint pair is complete when every cross pair is an edge, anticomplete when no cross pair is an edge, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[F3] $G[W]=(W,\,E(G)\cap[W]^2)$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F4] The vertex set of $G_1[a\to G_2]$ is $(V(G_1)\setminus\{a\})\cup V(G_2)$, a disjoint union; two vertices of $V(G_1)\setminus\{a\}$ are adjacent there exactly when they are adjacent in $G_1$, two vertices of $V(G_2)$ exactly when they are adjacent in $G_2$, and $u\in V(G_1)\setminus\{a\}$ is adjacent to $x\in V(G_2)$ exactly when $u$ is adjacent to $a$ in $G_1$ ([[def-substitution-of-a-graph-for-a-vertex]]).

[L2] For a module $M$ of $G$: for all $x,y\in M$ and all $v\in V(G)\setminus M$, $vx\in E(G)$ if and only if $vy\in E(G)$ ([[lem-module-criteria]]).

[F5] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

## Proof

**Proof technique:** cases.

1.1 First case: $M\ne N$. The parts are disjoint nonempty modules, so $(M,N)$ is complete or anticomplete and not both; if it is complete then $\{x,y\}\in E(G)$, and if it is anticomplete then $\{x,y\}\notin E(G)$. Since $\{M,N\}\in E(G/\mathcal P)$ says exactly that $(M,N)$ is complete, the two conditions agree. [assume-case across, F1, L1, F2]

1.2 Second case: $M=N$. Then $x,y$ are distinct vertices of $M$, and the edges of $G[M]$ are the edges of $G$ with both ends in $M$, so $\{x,y\}\in E(G)$ if and only if $\{x,y\}\in E(G[M])$. [assume-case inside, F3]

1.3 Suppose now that $\mathcal P=\{M_1,M_2\}$ with $M_1\ne M_2$, fix $t\in M_2$ and put $G_1=G[M_1\cup\{t\}]$ and $G_2=G[M_2]$. Then $V(G_1)\setminus\{t\}=M_1$ is disjoint from $V(G_2)=M_2$, and $M_2\ne\varnothing$, so $G_1[t\to G_2]$ is a substitution with vertex set $M_1\cup M_2=V(G)$. [F1, F3, F4, choose]

2.1 Every pair of distinct vertices of $G$ falls into exactly one of the two cases, since each vertex lies in exactly one part, so the cases are exhaustive and steps 1.1 and 1.2 determine $E(G)$ from $G/\mathcal P$ and the graphs $G[M]$. [step 1.1, step 1.2, F1, cases-exhaustive]

2.2 In the two-part situation of step 1.3, take distinct $p,q\in V(G)$. If $p,q\in M_1$, then $\{p,q\}$ is an edge of $G_1[t\to G_2]$ exactly when it is an edge of $G_1$, hence exactly when it is an edge of $G$; if $p,q\in M_2$ the same holds through $G_2$; and if $p\in M_1$ and $q\in M_2$, then $\{p,q\}$ is an edge of $G_1[t\to G_2]$ exactly when $\{p,t\}\in E(G_1)$, that is exactly when $\{p,t\}\in E(G)$, which by [L2] applied to the module $M_2$ with $t,q\in M_2$ and $p\notin M_2$ holds exactly when $\{p,q\}\in E(G)$. [step 1.3, F3, F4, L2, F5]

3.1 So in the two-part situation the graphs $G$ and $G[M_1\cup\{t\}]\,[t\to G[M_2]]$ have the same vertex set and the same edges, and are therefore equal; with step 2.1 this proves every clause of the Statement. [step 2.1, step 2.2] ∎
