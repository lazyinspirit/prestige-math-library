---
id: thm-pointwise-compactness-criterion-for-function-families
kind: theorem
title: "Under Choice, pointwise closure is compact exactly when every coordinate set has compact closure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness, def-topology-of-pointwise-convergence, thm-tychonoff, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-compactness-under-continuous-maps, thm-metric-hausdorff-separation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Lemma 47.4"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice.** Let $X$ be a set, let $Y$ be a metric space, let $\mathcal F\subseteq Y^X$, and let $H$ be the closure of $\mathcal F$ in the topology of pointwise convergence. Then $H$ is compact if and only if $\overline{\mathcal F(x)}$ is compact in $Y$ for every $x\in X$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a set $X$, a metric space $Y$, and $\mathcal F\subseteq Y^X$ with pointwise closure $H$.

[L1] Pointwise convergence is the product topology on $Y^X$, and the coordinate maps $\pi_x(f)=f(x)$ are continuous ([[def-topology-of-pointwise-convergence]]).

[L2] Under Choice, a product of compact topological spaces is compact ([[thm-tychonoff]]).

[L3] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L4] A compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[L5] A continuous image of a compact space is compact ([[thm-compactness-under-continuous-maps]]).

[L6] Pointwise relative compactness means that every coordinate set has compact closure ([[def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]]).

[L7] Every metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $H$ is compact and fix $x\in X$. By [L1] and [L5], $\pi_x[H]$ is compact, and by [L4] and [L7] it is closed. [L1, L4, L5, L7]

1.2 Conversely suppose $K_x:=\overline{\mathcal F(x)}$ is compact for every $x$. By [L2], $P:=\prod_{x\in X}K_x$ is compact, including when $X=\varnothing$, when it is a singleton. [L2]

1.3 Each $K_x$ is closed in the metric space $Y$ by [L4] and [L7], so $P=\bigcap_{x\in X}\pi_x^{-1}[K_x]$ is closed in $Y^X$. Since $\mathcal F\subseteq P$, its closure $H$ is a closed subset of $P$. [L1, L4, L7]

2.1 Since $\mathcal F(x)\subseteq\pi_x[H]$, its closure is contained in $\pi_x[H]$; conversely continuity gives $\pi_x[H]\subseteq\overline{\mathcal F(x)}$. Hence $\overline{\mathcal F(x)}=\pi_x[H]$ is compact. [step 1.1, L6]

3.1 By [L3], $H$ is compact. Together with steps 1.1--1.2 this proves both directions. [L3, step 1.2, step 1.3] ∎
