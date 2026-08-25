---
id: lem-homogeneous-number-is-monotone-under-induced-subgraphs
kind: lemma
title: "$\\operatorname{hom}(G[W])\\le\\operatorname{hom}(G)$ for every vertex subset $W$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homogeneous-set-and-homogeneous-number, def-clique-stable-set-and-numbers, def-subgraph-induced-subgraph-and-spanning-subgraph]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture: A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph and $W\subseteq V(G)$. Then
$\omega(G[W])\le\omega(G)$, $\alpha(G[W])\le\alpha(G)$, and consequently
$\operatorname{hom}(G[W])\le\operatorname{hom}(G)$.

## Facts & Assumptions

**Given:** A finite simple graph $G$ and a set $W\subseteq V(G)$.

[F1] A set $X\subseteq V(G)$ is a clique when every two distinct vertices of $X$ are adjacent and a stable set when no two distinct vertices of $X$ are adjacent; $\omega(G)$ and $\alpha(G)$ are the largest cardinalities of a clique and of a stable set ([[def-clique-stable-set-and-numbers]]).

[F2] $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$ ([[def-homogeneous-set-and-homogeneous-number]]).

[F3] $G[W]=(W,\,E(G)\cap[W]^2)$, so two vertices of $W$ are adjacent in $G[W]$ exactly when they are adjacent in $G$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Proof

**Proof technique:** direct.

1.1 Let $X\subseteq W$ be a clique of $G[W]$. Every two distinct vertices of $X$ are adjacent in $G[W]$, hence adjacent in $G$, so $X$ is a clique of $G$. [F1, F3]

1.2 Let $X\subseteq W$ be a stable set of $G[W]$. No two distinct vertices of $X$ are adjacent in $G[W]$, hence none are adjacent in $G$, so $X$ is a stable set of $G$. [F1, F3]

2.1 Every clique of $G[W]$ is therefore a clique of $G$, so the largest cardinality of a clique of $G[W]$ is at most that of a clique of $G$: $\omega(G[W])\le\omega(G)$. The same argument with step 1.2 gives $\alpha(G[W])\le\alpha(G)$. [step 1.1, step 1.2, F1]

3.1 Taking the larger of the two numbers on each side, $\operatorname{hom}(G[W])=\max\{\omega(G[W]),\alpha(G[W])\}\le\max\{\omega(G),\alpha(G)\}=\operatorname{hom}(G)$. [step 2.1, F2, algebra] ∎
