---
id: cex-pseudocompact-noncompact-particular-point-space
kind: counterexample
title: "An infinite particular-point space is pseudocompact and not compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pseudocompact-space, def-standard-topologies, def-compact-space, def-hausdorff-space, lem-real-line-is-a-metric-space, def-continuous-map-top]
aliases: []
landmark: true
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
    - title: "Particular point topology"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
    - title: "Pseudocompact space"
      url: "https://en.wikipedia.org/wiki/Pseudocompact_space"
pipeline_run: null
---

## Statement refuted

**False claim:** every pseudocompact topological space is compact.

Let $X$ be an infinite set with a distinguished point $p$, carrying the particular-point topology. Then $X$ is pseudocompact and not compact.

## Facts & Assumptions

**Given:** An infinite set $X$, a point $p\in X$, and the particular-point topology, whose nonempty open sets are exactly the subsets containing $p$.

[A1] Every pseudocompact topological space is compact.

[L1] The particular-point topology is a topology and has exactly the stated open sets ([[def-standard-topologies]]).

[L2] The usual topology on $\mathbb R$ is Hausdorff, so distinct real numbers have disjoint open neighbourhoods ([[lem-real-line-is-a-metric-space]], [[def-hausdorff-space]]).

[L3] A continuous map pulls back open sets to open sets, and compactness means that every open cover has a finite subcover ([[def-continuous-map-top]], [[def-compact-space]]).

[L4] A space is pseudocompact exactly when every continuous real-valued map has bounded image ([[def-pseudocompact-space]]).

## Counterexample

**Proof technique:** contradiction.

1.1 Let $f:X\to\mathbb R$ be continuous. If $f(x)\ne f(p)$ for some $x$, choose disjoint open neighbourhoods $U$ of $f(x)$ and $V$ of $f(p)$ by [L2]. Then $f^{-1}[U]$ is open, contains $x$, and does not contain $p$, contradicting [L1]. [L1, L2, L3, assume-contra]

1.2 The family $\mathcal U:=\{\{p,x\}:x\in X\setminus\{p\}\}$ consists of open sets and covers $X$. [L1]

2.1 Hence every continuous $f:X\to\mathbb R$ is constant, so its image is bounded. Thus $X$ is pseudocompact by [L4]. [step 1.1, L4]

2.2 No finite subfamily covers $X$, because its union contains $p$ and only finitely many other points, whereas $X\setminus\{p\}$ is infinite. Thus $X$ is not compact. [L3, step 1.2]

3.1 The pseudocompact noncompact space $X$ contradicts [A1], refuting the claim. [A1, step 2.1, step 2.2, discharge-contradiction] ∎
