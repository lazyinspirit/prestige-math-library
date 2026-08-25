---
id: lem-the-substituted-set-is-a-module
kind: lemma
title: "In $G_1$ with $G_2$ substituted for $a$, the vertex set of $G_2$ is a module, the two factors are recovered as induced subgraphs, and substituting a one-vertex graph changes nothing"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-substitution-of-a-graph-for-a-vertex, def-module-of-a-graph, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-isomorphism-and-complement, def-induced-embedding-and-induced-copy, def-edges-between-sets-and-pure-mixed-pairs]
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
pipeline_run: null
---

## Statement

Let $G=G_1[a\to G_2]$ be a substitution ([[def-substitution-of-a-graph-for-a-vertex]]),
and write $U=V(G_1)\setminus\{a\}$. Then:

1. $V(G_2)$ is a module of $G$;
2. $G[U]=G_1[U]$ and $G[V(G_2)]=G_2$;
3. for every $w\in V(G_2)$, the map $\varphi_w:V(G_1)\to V(G)$ that fixes every
   vertex of $U$ and sends $a$ to $w$ is an induced embedding of $G_1$ into $G$;
4. if $|V(G_2)|=1$ then $G\cong G_1$.

## Facts & Assumptions

**Given:** A substitution $G=G_1[a\to G_2]$ with $U=V(G_1)\setminus\{a\}$, so that $V(G)=U\cup V(G_2)$ is a disjoint union.

[F1] For distinct vertices of $G$: two vertices of $U$ are adjacent in $G$ exactly when they are adjacent in $G_1$; two vertices of $V(G_2)$ are adjacent in $G$ exactly when they are adjacent in $G_2$; and $u\in U$ is adjacent in $G$ to $x\in V(G_2)$ exactly when $u$ is adjacent to $a$ in $G_1$ ([[def-substitution-of-a-graph-for-a-vertex]]).

[F2] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[F3] $G[W]=(W,\,E(G)\cap[W]^2)$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F4] An induced embedding of $H$ in $G$ is an injection $\varphi:V(H)\to V(G)$ such that, for all distinct $x,y\in V(H)$, $xy\in E(H)$ if and only if $\varphi(x)\varphi(y)\in E(G)$; its image induces a copy of $H$, the restricted map being an isomorphism onto it ([[def-induced-embedding-and-induced-copy]]).

[F5] A graph isomorphism is a bijection $\varphi:V\to W$ with $\{u,v\}\in E$ if and only if $\{\varphi(u),\varphi(v)\}\in F$ for all distinct $u,v$ ([[def-graph-isomorphism-and-complement]]).

[F6] A disjoint pair is complete when every cross pair is an edge, anticomplete when no cross pair is an edge, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 The vertices of $G$ outside $V(G_2)$ are exactly those of $U$, and for $u\in U$ the adjacency of $u$ to a vertex $x\in V(G_2)$ is the condition that $u$ is adjacent to $a$ in $G_1$, which does not mention $x$. [F1, given]

1.2 For $p,q\in U$ distinct, $\{p,q\}\in E(G)$ if and only if $\{p,q\}\in E(G_1)$; and for $p,q\in V(G_2)$ distinct, $\{p,q\}\in E(G)$ if and only if $\{p,q\}\in E(G_2)$. [F1]

1.3 Fix $w\in V(G_2)$ and let $\varphi_w$ fix $U$ pointwise and send $a$ to $w$. It is injective: it is the identity on $U$, and $w\notin U$ because $U$ and $V(G_2)$ are disjoint, so no vertex of $U$ is sent to $w$. [F4, given, construct]

2.1 By step 1.1, if $u$ is adjacent to $a$ in $G_1$ then $u$ is adjacent in $G$ to every vertex of $V(G_2)$, and otherwise to none, so $(\{u\},V(G_2))$ is pure for every $u\in U$; by [F2] this makes $V(G_2)$ a module of $G$, which is claim 1. [step 1.1, F2, F6]

2.2 By step 1.2 the edges of $G$ inside $U$ are the edges of $G_1$ inside $U$, so $G[U]=G_1[U]$; and the edges of $G$ inside $V(G_2)$ are the edges of $G_2$, whose vertex set is $V(G_2)$, so $G[V(G_2)]=G_2$. This is claim 2. [step 1.2, F3]

2.3 For distinct $p,q\in U$, step 1.2 gives $\{p,q\}\in E(G_1)$ if and only if $\{\varphi_w(p),\varphi_w(q)\}=\{p,q\}\in E(G)$; and for $u\in U$, step 1.1 gives $\{u,a\}\in E(G_1)$ if and only if $\{u,w\}=\{\varphi_w(u),\varphi_w(a)\}\in E(G)$. Every pair of distinct vertices of $G_1$ is of one of these two shapes, so $\varphi_w$ is an induced embedding, which is claim 3. [step 1.1, step 1.2, step 1.3, F4]

3.1 If $|V(G_2)|=1$, say $V(G_2)=\{w\}$, then the image of $\varphi_w$ is $U\cup\{w\}=V(G)$, so $\varphi_w$ is a bijection onto $V(G)$ preserving and reflecting adjacency, that is, an isomorphism $G_1\to G$; this is claim 4. [step 2.3, F4, F5] ∎
