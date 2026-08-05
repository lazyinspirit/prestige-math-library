---
id: thm-closure-characterised-by-nets
kind: theorem
title: "A point lies in the closure of a set if and only if a net in the set converges to it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-net-convergence-and-cluster-point, thm-closure-characterisation-top, def-neighbourhood-top]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "net (nLab)"
      url: "https://ncatlab.org/nlab/show/net"
pipeline_run: null
---

## Statement

For $A\subseteq X$ and $p\in X$, one has $p\in\overline A$ if and only if there is a net in $A$ converging to $p$.

## Facts & Assumptions

**Given:** A subset $A$ of a topological space $X$ and a point $p\in X$.

[L1] $p\in\overline A$ exactly when every neighbourhood of $p$ meets $A$ ([[thm-closure-characterisation-top]]).

[L2] Finite intersections of neighbourhoods of $p$ are neighbourhoods of $p$ ([[def-neighbourhood-top]]).

[L3] A net converges exactly when it is eventually in every neighbourhood ([[def-net-convergence-and-cluster-point]]).



## Proof

**Proof technique:** constructive.

1.1 Suppose $p\in\overline A$. Let $E=\{(N,a):N\in\mathcal N(p),\ a\in N\cap A\}$, ordered by $(N,a)\preceq(M,b)$ when $M\subseteq N$, and put $x_{(N,a)}=a$. [L1, construct]

1.2 Conversely, if a net $x$ in $A$ converges to $p$, every neighbourhood $N$ of $p$ contains some eventual value $x_d\in A$, so $N\cap A\ne\varnothing$ and $p\in\overline A$. [L1, L3]

2.1 The index set is directed: for $(N,a),(M,b)$, the set $N\cap M$ is a neighbourhood and meets $A$; for $c\in(N\cap M)\cap A$, the pair $(N\cap M,c)$ is above both. [step 1.1, L1, L2]

2.2 Given a neighbourhood $N$ of $p$, choose $(N,a)\in E$. Every later pair has its second coordinate in a subset of $N$, so $x$ is eventually in $N$ and therefore converges to $p$. [step 1.1, L3]

3.1 Steps 1.1--2.1 construct the required net and step 1.2 proves the converse. [step 2.2, step 1.2, discharge-construct] ∎
