---
id: thm-prime-graphs-are-the-graphs-that-are-not-substitutions
kind: theorem
title: "A graph with at least two vertices is prime exactly when it is not obtained by substituting one graph on at least two vertices for a vertex of another graph on at least two vertices"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-prime-graph, def-substitution-of-a-graph-for-a-vertex, def-module-of-a-graph, lem-the-substituted-set-is-a-module, lem-module-criteria, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-isomorphism-and-complement, def-finite-cardinality]
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
    - title: "T. Huang, Y. Ju and R. Zhou, Erdős–Hajnal beyond the five-vertex path, sec. 1.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture: A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph with $|V(G)|\ge2$. Then $G$ is prime
([[def-prime-graph]]) if and only if there is no substitution $G_1[a\to G_2]$
([[def-substitution-of-a-graph-for-a-vertex]]) with $|V(G_1)|\ge2$ and
$|V(G_2)|\ge2$ such that $G\cong G_1[a\to G_2]$.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with $|V(G)|\ge2$.

[F1] $G$ is prime when every module of $G$ is trivial; equivalently, when $G$ has no module $M$ with $2\le|M|$ and $|M|\le|V(G)|-1$ ([[def-prime-graph]]).

[F2] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[L1] In a substitution $G_1[a\to G_2]$ the set $V(G_2)$ is a module of $G_1[a\to G_2]$ ([[lem-the-substituted-set-is-a-module]]).

[F3] The vertex set of $G_1[a\to G_2]$ is $(V(G_1)\setminus\{a\})\cup V(G_2)$, a disjoint union; two vertices of $V(G_1)\setminus\{a\}$ are adjacent there exactly when they are adjacent in $G_1$, two vertices of $V(G_2)$ exactly when they are adjacent in $G_2$, and $u\in V(G_1)\setminus\{a\}$ is adjacent to $x\in V(G_2)$ exactly when $u$ is adjacent to $a$ in $G_1$ ([[def-substitution-of-a-graph-for-a-vertex]]).

[L2] For a module $M$ of $G$: for all $x,y\in M$ and all $v\in V(G)\setminus M$, $vx\in E(G)$ if and only if $vy\in E(G)$ ([[lem-module-criteria]]).

[F4] $G[W]=(W,\,E(G)\cap[W]^2)$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F5] A graph isomorphism is a bijection $\varphi:V\to W$ such that, for all distinct $u,v\in V$, $\{u,v\}\in E$ if and only if $\{\varphi(u),\varphi(v)\}\in F$ ([[def-graph-isomorphism-and-complement]]).

[F6] A bijection transports finiteness and cardinality: if $A$ is finite and $f:A\to B$ is a bijection then $|B|=|A|$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Let $\theta:V(H)\to V(G)$ be an isomorphism and let $M$ be a module of $H$. For $v\in V(G)\setminus\theta[M]$ the vertex $\theta^{-1}(v)$ lies outside $M$, so it is adjacent in $H$ to every vertex of $M$ or to none; since $\theta$ preserves and reflects adjacency, $v$ is adjacent in $G$ to every vertex of $\theta[M]$ or to none. Hence $\theta[M]$ is a module of $G$, and $|\theta[M]|=|M|$, $|V(G)|=|V(H)|$ and $\theta[M]=V(G)$ exactly when $M=V(H)$. [F2, F5, F6]

1.2 For the direction from a substitution to non-primality, suppose $G\cong G_1[a\to G_2]$ with $|V(G_1)|\ge2$ and $|V(G_2)|\ge2$, and write $H=G_1[a\to G_2]$ and $M=V(G_2)$. Then $M$ is a module of $H$ by [L1], $|M|\ge2$, and $V(H)\setminus M=V(G_1)\setminus\{a\}$ is nonempty because $|V(G_1)|\ge2$, so $M\ne V(H)$. [L1, F3, given]

1.3 For the converse direction, suppose $G$ is not prime, so by [F1] it has a module $M$ with $2\le|M|$ and $|M|\le|V(G)|-1$; fix $x\in M$ and put $G_2=G[M]$ and $G_1=G[(V(G)\setminus M)\cup\{x\}]$. [F1, F4, choose]

2.1 In the first direction, step 1.1 applied to an isomorphism $H\to G$ turns $M$ into a module $M'$ of $G$ with $|M'|=|M|\ge2$ and $M'\ne V(G)$, so $|M'|\le|V(G)|-1$ and $G$ is not prime by [F1]. [step 1.1, step 1.2, F1, F6]

2.2 In the converse direction, $V(G_1)\setminus\{x\}=V(G)\setminus M$ is disjoint from $V(G_2)=M$ and is nonempty because $|M|\le|V(G)|-1$, and $V(G_2)\ne\varnothing$; so $G_1[x\to G_2]$ is a substitution, its vertex set is $(V(G)\setminus M)\cup M=V(G)$, and $|V(G_2)|=|M|\ge2$ while $|V(G_1)|=|V(G)\setminus M|+1\ge2$. [step 1.3, F3, F6]

3.1 Still in the converse direction, take distinct $p,q\in V(G)$. If both lie in $V(G)\setminus M$ then $\{p,q\}$ is an edge of $G_1[x\to G_2]$ exactly when it is an edge of $G_1$, hence exactly when it is an edge of $G$; if both lie in $M$ the same holds with $G_2$ in place of $G_1$; and if $p\in V(G)\setminus M$ and $q\in M$ then $\{p,q\}$ is an edge of $G_1[x\to G_2]$ exactly when $\{p,x\}\in E(G_1)$, that is exactly when $\{p,x\}\in E(G)$, which by [L2] applied to the module $M$ with $x,q\in M$ and $p\notin M$ holds exactly when $\{p,q\}\in E(G)$. [step 1.3, step 2.2, F3, F4, L2]

4.1 So in the converse direction $G_1[x\to G_2]$ and $G$ have the same vertex set and the same edges, hence $G=G_1[x\to G_2]$ is a substitution with both factors on at least two vertices. [step 2.2, step 3.1]

5.1 Step 2.1 shows that a graph isomorphic to such a substitution is not prime, and step 4.1 shows that a graph that is not prime is such a substitution; these are the two directions of the stated equivalence. [step 2.1, step 4.1] ∎
