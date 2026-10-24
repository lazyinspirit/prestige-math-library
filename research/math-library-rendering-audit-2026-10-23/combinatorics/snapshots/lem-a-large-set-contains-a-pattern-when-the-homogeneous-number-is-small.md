---
id: lem-a-large-set-contains-a-pattern-when-the-homogeneous-number-is-small
kind: lemma
title: "If $\\epsilon$ is an Erdős–Hajnal constant for $H$ and $W$ is a nonempty vertex set with $|W|^{\\epsilon}>\\operatorname{hom}(G)$, then $G[W]$ has an induced copy of $H$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, def-h-free-and-family-free-graph, lem-forbidden-induced-subgraph-classes-are-hereditary, lem-homogeneous-number-is-monotone-under-induced-subgraphs, def-induced-embedding-and-induced-copy, def-real-power, def-subgraph-induced-subgraph-and-spanning-subgraph]
aliases: []
landmark: true
proof_strategy: contrapositive
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
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture: A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Statement

Let $H$ be a finite simple graph and let $\epsilon>0$ be an Erdős–Hajnal
constant for the hereditary class of $H$-free graphs. Let $G$ be a finite
simple graph and let $W\subseteq V(G)$ be nonempty with
$|W|^{\epsilon}>\operatorname{hom}(G)$. Then $G[W]$ has an induced copy of $H$.

## Facts & Assumptions

**Given:** A finite simple graph $H$, an Erdős–Hajnal constant $\epsilon>0$ for the class of $H$-free graphs, a finite simple graph $G$, and a nonempty $W\subseteq V(G)$ with $|W|^{\epsilon}>\operatorname{hom}(G)$.

[F1] A real $\epsilon>0$ is an Erdős–Hajnal constant for a hereditary class $\mathcal C$ when every nonempty $J\in\mathcal C$ satisfies $\operatorname{hom}(J)\ge|V(J)|^{\epsilon}$ ([[def-erdos-hajnal-property-and-constant]], [[def-real-power]]).

[F2] $G$ is $H$-free when $G$ has no induced copy of $H$ ([[def-h-free-and-family-free-graph]], [[def-induced-embedding-and-induced-copy]]).

[L1] For every family $\mathcal F$ of finite graphs, the class of $\mathcal F$-free finite graphs is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

[L2] $\operatorname{hom}(G[W])\le\operatorname{hom}(G)$ for every $W\subseteq V(G)$ ([[lem-homogeneous-number-is-monotone-under-induced-subgraphs]]).

[F3] $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$ ([[def-homogeneous-set-and-homogeneous-number]]).

[F4] $G[W]$ has vertex set $W$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Proof

**Proof technique:** contrapositive.

1.1 It suffices to prove the contrapositive: if $G[W]$ has no induced copy of $H$, then $|W|^{\epsilon}\le\operatorname{hom}(G)$. [contrapositive-reduce]

1.2 Assume $G[W]$ has no induced copy of $H$. Then $G[W]$ is $H$-free, and the class of $H$-free graphs is hereditary, so $G[W]$ is a member of the class for which $\epsilon$ is an Erdős–Hajnal constant. [assume-hyp, F2, L1]

2.1 The graph $G[W]$ is nonempty, since $W\ne\varnothing$ and $V(G[W])=W$, so [F1] applies to it and gives $\operatorname{hom}(G[W])\ge|W|^{\epsilon}$. [step 1.2, F1, F3, F4, given]

3.1 By [L2] we have $\operatorname{hom}(G)\ge\operatorname{hom}(G[W])$, so $\operatorname{hom}(G)\ge|W|^{\epsilon}$, which is the conclusion of the contrapositive; the Statement follows. [step 2.1, L2, discharge-contrapositive] ∎
