---
id: lem-euclidean-polygonal-paths-are-continuous
kind: lemma
title: "A finite concatenation of straight segments in $\\mathbb{R}^n$ is a continuous path"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polygonal-path-and-polygonal-connectedness, lem-continuity-is-local-and-pastes, thm-componentwise-limits-and-continuity, def-subspace-topology-top]
aliases: []
landmark: false
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
    - title: "Path-connected space"
      url: "https://en.wikipedia.org/wiki/Path-connected_space"
    - title: "Pasting lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pasting_lemma"
    - title: "Polygonal chain"
      url: "https://en.wikipedia.org/wiki/Polygonal_chain"
pipeline_run: null
---

## Statement

Let $v_0,\ldots,v_m\in\mathbb{R}^n$ and $0=t_0<\cdots<t_m=1$. The affine pieces joining $v_{i-1}$ to $v_i$ define a continuous map $[0,1]\to\mathbb{R}^n$. If every piece lies in a subset $A$, the map is a polygonal path ([[def-polygonal-path-and-polygonal-connectedness]]) in $A$ from $v_0$ to $v_m$.

## Facts & Assumptions

**Given:** Vertices $v_0,\ldots,v_m\in\mathbb{R}^n$ and a partition $0=t_0<\cdots<t_m=1$.

[L1] A finite family of closed sets covering a space pastes continuous restrictions to a continuous map ([[lem-continuity-is-local-and-pastes]], claim 3).

[L2] A map whose values lie in a subspace is continuous into that subspace exactly when its composite with the inclusion into the ambient space is continuous ([[def-subspace-topology-top]]).

[L3] A map into $\mathbb{R}^n$ is continuous if and only if all of its coordinate functions are continuous ([[thm-componentwise-limits-and-continuity]], clause 1).

## Proof

**Proof technique:** constructive.

1.1 On $[t_{i-1},t_i]$ define $\gamma_i(t):=((t_i-t)/(t_i-t_{i-1}))v_{i-1}+((t-t_{i-1})/(t_i-t_{i-1}))v_i$. Each coordinate is an affine real function of $t$, hence continuous. [L3, construct]

2.1 At every shared endpoint $t_i$, the adjacent formulas both give $v_i$, so the pieces define one function $\gamma:[0,1]\to\mathbb{R}^n$. [step 1.1, construct]

3.1 Each interval $[t_{i-1},t_i]$ is closed in $[0,1]$, the finitely many intervals cover it, and each restriction of $\gamma$ is continuous by step 1.1. Thus $\gamma$ is continuous by [L1]. [L1, step 1.1, step 2.1]

4.1 If the pieces lie in $A$, then $\gamma$ takes values in $A$. Its composite with the inclusion $A\hookrightarrow\mathbb R^n$ is the continuous map of step 3.1, so [L2] makes it continuous into the subspace $A$. Its endpoints are $v_0,v_m$, hence it is a path in $A$. [step 3.1, L2, discharge-construct] ∎
