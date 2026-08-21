---
id: lem-compact-local-homeomorphism-surjective-with-finite-fibres
kind: lemma
title: "A local homeomorphism from a nonempty compact space to a connected Hausdorff space is surjective with finite fibres"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-local-homeomorphism, def-compact-space, def-connected-space,
       def-hausdorff-space, thm-compactness-under-continuous-maps,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Problem 4"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $f:X\to Y$ be a local homeomorphism. If $X$ is nonempty and compact and $Y$ is connected and Hausdorff, then $f$ is surjective and every fibre $f^{-1}(y)$ is a nonempty finite discrete subspace of $X$.

## Facts & Assumptions

**Given:** A local homeomorphism $f:X\to Y$ with $X$ nonempty compact and $Y$ connected Hausdorff.

[F1] Every point of the domain of a local homeomorphism has an open neighbourhood mapped homeomorphically onto an open subset of the target ([[def-local-homeomorphism]]).

[F2] A continuous image of a compact space is compact ([[thm-compactness-under-continuous-maps]]).

[F3] Every compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F4] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F5] A space is compact when every open cover has a finite subcover ([[def-compact-space]]).

[F6] A connected space has no partition into two nonempty clopen subsets ([[def-connected-space]]).

[F7] Every singleton in a Hausdorff space is closed ([[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 For every $x\in X$, [F1] gives an open neighbourhood whose image is open. The union of these images is $f[X]$, so $f[X]$ is open in $Y$; it is nonempty because $X$ is nonempty. [F1, given]

1.2 By [F2], $f[X]$ is compact, and by [F3] it is closed in the Hausdorff space $Y$. [F2, F3]

1.3 Fix $y\in Y$. The fibre $K=f^{-1}(y)$ is closed because $f$ is continuous and $\{y\}$ is closed by [F7]. It is discrete: for each $x\in K$, a local-homeomorphism chart $U_x$ is injective, hence $U_x\cap K=\{x\}$, so every singleton is open in the subspace $K$. [F1, F7]

2.1 The nonempty subset $f[X]$ is both open and closed. By connectedness in [F6], it must equal $Y$, so $f$ is surjective. [step 1.1, step 1.2, F6]

2.2 By [F4], the closed subspace $K$ of compact $X$ is compact. [step 1.3, F4]

3.1 The open singleton family $\{\{x\}:x\in K\}$ covers the discrete space $K$. Compactness and [F5] give a finite subcover, so $K$ is finite. It is nonempty by surjectivity from step 2.1. [step 2.1, step 1.3, step 2.2, F5] ∎

