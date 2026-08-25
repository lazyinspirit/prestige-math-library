---
id: lem-a-pattern-inside-an-extension-set-produces-the-substitution
kind: lemma
title: "An induced copy of $H_2$ inside the extension set of an induced embedding of $H_1-v$ yields an induced copy of $H_1$ with $H_2$ substituted for $v$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-substitution-of-a-graph-for-a-vertex, lem-induced-copies-counted-by-extending-a-deleted-vertex, def-induced-embedding-and-induced-copy, def-h-free-and-family-free-graph, def-injection-surjection-bijection, def-subgraph-induced-subgraph-and-spanning-subgraph]
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
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture: A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Statement

Let $H_1$ be a finite simple graph, $v\in V(H_1)$, and let $H_2$ be a finite
simple graph for which $H:=H_1[v\to H_2]$ is defined. Let $G$ be a finite simple
graph, let $\varphi$ be an induced embedding of $H_1-v$ into $G$ with extension
set $X_\varphi$ ([[lem-induced-copies-counted-by-extending-a-deleted-vertex]]),
and let $\psi$ be an induced embedding of $H_2$ into $G$ whose image is
contained in $X_\varphi$. Then the map $\theta:V(H)\to V(G)$ that agrees with
$\varphi$ on $V(H_1)\setminus\{v\}$ and with $\psi$ on $V(H_2)$ is an induced
embedding of $H$ into $G$. In particular $G$ is not $H$-free.

## Facts & Assumptions

**Given:** Graphs $H_1$, $H_2$, $G$ as in the Statement, with $U=V(H_1)\setminus\{v\}$, the substitution $H=H_1[v\to H_2]$, the induced embedding $\varphi$ of $H_1-v$ into $G$, and the induced embedding $\psi$ of $H_2$ into $G$ with $\psi[V(H_2)]\subseteq X_\varphi$.

[F1] The vertex set of $H_1[v\to H_2]$ is $U\cup V(H_2)$, a disjoint union; two vertices of $U$ are adjacent there exactly when they are adjacent in $H_1$, two vertices of $V(H_2)$ exactly when they are adjacent in $H_2$, and $x\in U$ is adjacent to $y\in V(H_2)$ exactly when $x$ is adjacent to $v$ in $H_1$ ([[def-substitution-of-a-graph-for-a-vertex]]).

[F2] An induced embedding of $J$ in $G$ is an injection $\theta:V(J)\to V(G)$ such that, for all distinct $x,y\in V(J)$, $xy\in E(J)$ if and only if $\theta(x)\theta(y)\in E(G)$ ([[def-induced-embedding-and-induced-copy]]). A graph is $J$-free exactly when it has no induced copy of $J$ ([[def-h-free-and-family-free-graph]]).

[L1] The extension set $X_\varphi$ consists of the vertices $u\in V(G)\setminus\varphi[U]$ for which the map extending $\varphi$ by $v\mapsto u$ is an induced embedding of $H_1$ into $G$ ([[lem-induced-copies-counted-by-extending-a-deleted-vertex]]).

[F3] $H_1-v=H_1[U]$, so two vertices of $U$ are adjacent in $H_1-v$ exactly when they are adjacent in $H_1$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F4] A map is injective when equal values force equal arguments ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** cases.

1.1 The vertex set of $H$ is the disjoint union $U\cup V(H_2)$, so $\theta$ is a well-defined map on $V(H)$. It is injective: $\varphi$ and $\psi$ are injective, and their images are disjoint, because $\psi[V(H_2)]\subseteq X_\varphi$ and every member of $X_\varphi$ lies outside $\varphi[U]$. [F1, F2, F4, L1, given]

1.2 First case: distinct $x,y\in U$. Then $xy\in E(H)$ exactly when $xy\in E(H_1)$, which is exactly when $xy\in E(H_1-v)$, which because $\varphi$ is an induced embedding of $H_1-v$ is exactly when $\varphi(x)\varphi(y)\in E(G)$. [assume-case host, F1, F2, F3]

1.3 Second case: distinct $x,y\in V(H_2)$. Then $xy\in E(H)$ exactly when $xy\in E(H_2)$, which because $\psi$ is an induced embedding of $H_2$ is exactly when $\psi(x)\psi(y)\in E(G)$. [assume-case inserted, F1, F2]

1.4 Third case: $x\in U$ and $y\in V(H_2)$. The vertex $\psi(y)$ lies in $X_\varphi$, so extending $\varphi$ by $v\mapsto\psi(y)$ is an induced embedding of $H_1$; applied to the pair $x,v$ of $H_1$ this gives that $xv\in E(H_1)$ exactly when $\varphi(x)\psi(y)\in E(G)$. And $xy\in E(H)$ exactly when $xv\in E(H_1)$. [assume-case cross, F1, F2, L1, given]

2.1 Every pair of distinct vertices of $H$ falls under exactly one of the three cases, because $U$ and $V(H_2)$ are disjoint and cover $V(H)$; so in every case $xy\in E(H)$ holds exactly when $\theta(x)\theta(y)\in E(G)$. [step 1.2, step 1.3, step 1.4, F1, cases-exhaustive]

3.1 With the injectivity of step 1.1, the map $\theta$ is therefore an induced embedding of $H$ into $G$, so $G$ has an induced copy of $H$ and is not $H$-free. [step 1.1, step 2.1, F2] ∎
