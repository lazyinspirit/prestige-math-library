---
id: lem-pseudocompact-euclidean-subset-is-closed
kind: lemma
title: "A pseudocompact subset of $\\mathbb{R}^n$ is closed"
status: published
origin: session
deps: [def-pseudocompact-space, thm-closure-characterisation-top, def-metric-topology, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-metrics-on-rn]
aliases: []
landmark: false
proof_strategy: contradiction
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

Let $n\ge1$. Every pseudocompact subset $A\subseteq\mathbb{R}^n$ is closed in the Euclidean topology.

## Facts & Assumptions

**Given:** A pseudocompact subset $A\subseteq\mathbb{R}^n$, with Euclidean metric $d_2$ and norm $\lVert\cdot\rVert_2$.

[L1] A set is closed if and only if it equals its closure; and $p\in\overline A$ means every open neighbourhood of $p$ meets $A$ ([[thm-closure-characterisation-top]]).

[L2] Euclidean open sets are the sets that contain a Euclidean ball about each of their points ([[def-metric-topology]], [[lem-metrics-on-rn]]).

[L3] The reverse triangle inequality gives $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$, and the Euclidean norm is continuous ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L4] Pseudocompactness requires every continuous real-valued function on $A$ to have bounded image ([[def-pseudocompact-space]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $A$ is not closed. By [L1], fix $p\in\overline A\setminus A$. [assume-contra, L1, choose]

2.1 Define $f:A\to\mathbb{R}$ by $f(x):=1/\lVert x-p\rVert_2$. This is defined because $p\notin A$, so every denominator is positive. [step 1.1, construct]

2.2 For every real $M>0$, [L1] and [L2] give $x\in A$ with $\lVert x-p\rVert_2<1/M$; then $f(x)>M$. Hence $f[A]$ is unbounded. [step 1.1, L1, L2]

3.1 The function $f$ is continuous on $A$: at $a\in A$ put $d:=\lVert a-p\rVert_2>0$. If $\lVert x-a\rVert_2<d/2$, then [L3] gives $\lVert x-p\rVert_2>d/2$, and $$ |f(x)-f(a)| \le \frac{2}{d^2}\lVert x-a\rVert_2. $$ Thus a sufficiently small Euclidean ball about $a$ maps into any prescribed real neighbourhood of $f(a)$. [step 2.1, L2, L3]

4.1 Steps 3.1 and 2.2 contradict pseudocompactness through [L4]. Therefore $A$ is closed. [step 3.1, step 2.2, L4, discharge-contradiction] ∎
