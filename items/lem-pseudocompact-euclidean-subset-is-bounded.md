---
id: lem-pseudocompact-euclidean-subset-is-bounded
kind: lemma
title: "A pseudocompact subset of $\\mathbb{R}^n$ is bounded"
status: published
origin: session
deps: [def-pseudocompact-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-metric-bounded-diameter, def-bounded-set]
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Pseudocompact space"
      url: "https://en.wikipedia.org/wiki/Pseudocompact_space"
pipeline_run: null
---

## Statement

Let $n\ge1$. Every pseudocompact subset $A\subseteq\mathbb{R}^n$ is bounded for the Euclidean metric.

## Facts & Assumptions

**Given:** A pseudocompact subset $A\subseteq\mathbb{R}^n$, where $\mathbb{R}^n$ has the Euclidean metric $d_2$.

[L1] The Euclidean norm $x\mapsto\lVert x\rVert_2$ is continuous from $(\mathbb{R}^n,d_2)$ to $\mathbb{R}$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L2] A pseudocompact space has bounded image under every continuous real-valued map ([[def-pseudocompact-space]]).

[L3] A subset of a metric space is bounded when it is empty or lies in some open ball ([[def-metric-bounded-diameter]]); a bounded set of reals has an upper bound ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 The restriction $N:A\to\mathbb{R}$, $N(x)=\lVert x\rVert_2$, is continuous, because the ambient norm is continuous by [L1] and $A$ has the subspace topology. [L1]

1.2 Pseudocompactness gives that $N[A]$ is bounded. If $A\ne\varnothing$, choose an upper bound $M$ of $N[A]$; then $M\ge0$ because every norm is nonnegative. [L2, L3, choose]

2.1 If $A=\varnothing$ it is bounded. Otherwise every $x\in A$ satisfies $d_2(x,0)=\lVert x\rVert_2\le M<M+1$, so $A\subseteq B_{d_2}(0,M+1)$. [step 1.2, L3]

3.1 Thus $A$ is bounded in both cases. [step 2.1] ∎
