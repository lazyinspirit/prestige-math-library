---
id: thm-euclidean-semicontinuity-level-set-characterisations
kind: theorem
title: 'Semicontinuity on $\mathbb R^n$ is characterized by strict open level sets and weak closed level sets'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semicontinuity-on-euclidean-subsets, def-metric-topology, def-subspace-topology-top, def-metric-ball]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lectures 2 and 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $A\subseteq\mathbb R^n$, and let $f:A\to\mathbb R$.

- Upper semicontinuity is equivalent to relative openness of every strict sublevel set $\{f<\alpha\}$ and to relative closedness of every weak superlevel set $\{f\ge\alpha\}$.
- Lower semicontinuity is equivalent to relative openness of every strict superlevel set and to relative closedness of every weak sublevel set.

Relative openness and closedness refer to the subspace topology on $A$ ([[def-subspace-topology-top]], [[def-metric-topology]]).

## Facts & Assumptions

**Given:** The subset and function in the Statement, with Euclidean balls as in [[def-metric-ball]].

[F1] The function $f$ is upper semicontinuous at $a$ when for every $\varepsilon>0$ there is $\delta>0$ such that $f(x)<f(a)+\varepsilon$ for every $x\in A\cap B_2(a,\delta)$; the lower clause is its one-sided dual ([[def-semicontinuity-on-euclidean-subsets]]).

## Proof

**Proof technique:** direct.

1.1 For the upper-semicontinuous forward direction, if $f(c)<\alpha$, apply [F1] with $\varepsilon=\alpha-f(c)$ to obtain a relative ball inside $\{f<\alpha\}$. Conversely, if all strict sublevels are relatively open, the sublevel $\{f<f(c)+\varepsilon\}$ supplies the ball required by [F1]. [F1, algebra]

2.1 Taking complements in $A$ converts the relatively open strict sublevels of step 1.1 into relatively closed weak superlevels and conversely. Thus both upper-semicontinuity characterisations hold in both directions. [step 1.1, F1]

3.1 Apply steps 1.1 and 2.1 to $-f$. The lower clause for $f$ is the upper clause for $-f$, strict superlevels of $f$ are strict sublevels of $-f$, and weak sublevels of $f$ are weak superlevels of $-f$. This gives both lower-semicontinuity equivalences in both directions. [step 1.1, step 2.1, F1, algebra] ∎
