---
id: prop-compact-local-homeomorphism-is-finite-covering
kind: proposition
title: "A local homeomorphism from a nonempty compact Hausdorff space to a connected Hausdorff space is a finite-sheeted covering"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-compact-local-homeomorphism-surjective-with-finite-fibres,
       def-local-homeomorphism, def-hausdorff-space,
       thm-compactness-under-continuous-maps,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-closed-subspace-of-a-compact-space-is-compact, lem-finite-choice,
       def-covering-map-and-evenly-covered-neighbourhoods]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Problem 4"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $f:X\to Y$ be a local homeomorphism. If $X$ is nonempty, compact, and Hausdorff and $Y$ is connected and Hausdorff, then $f$ is a finite-sheeted covering map.

## Facts & Assumptions

**Given:** A local homeomorphism $f:X\to Y$ satisfying the hypotheses in the Statement, and a point $y\in Y$.

[L1] Under these hypotheses, $f$ is surjective and the fibre over every point is finite and nonempty ([[lem-compact-local-homeomorphism-surjective-with-finite-fibres]]).

[F1] Distinct points in a Hausdorff space have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[F2] A finite natural-number-indexed family of nonempty sets has a choice function ([[lem-finite-choice]]).

[F3] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F4] A continuous image of a compact subset is compact ([[thm-compactness-under-continuous-maps]]).

[F5] A compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F6] A covering map is a continuous surjection for which every target point has an open neighbourhood whose full preimage is a disjoint union of open sheets mapped homeomorphically onto that neighbourhood ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

## Proof

**Proof technique:** direct.

1.1 List the finite fibre as $f^{-1}(y)=\{x_1,\ldots,x_m\}$ with $m\ge1$ by [L1]. Using [F1] finitely many times and [F2] for the finite selections, choose pairwise disjoint open neighbourhoods $N_i$ of the $x_i$. Intersect each $N_i$ with a local-homeomorphism chart at $x_i$; its image is still an open neighbourhood of $y$. Let $W$ be the finite intersection of these images, and replace each chart by its inverse image of $W$. We obtain pairwise disjoint open sets $U_i$ with $f|_{U_i}:U_i\to W$ a homeomorphism. [L1, F1, F2]

2.1 The set $K=X\setminus\bigcup_iU_i$ is closed and therefore compact by [F3]. Its image $f[K]$ is compact by [F4] and closed in $Y$ by [F5]. No point of the fibre over $y$ lies in $K$, so $y\notin f[K]$. Hence $V:=W\setminus f[K]$ is an open neighbourhood of $y$. [step 1.1, F3, F4, F5]

3.1 Put $V_i=U_i\cap f^{-1}(V)$. Each $V_i$ is open and $f|_{V_i}:V_i\to V$ is a homeomorphism. If $x\in f^{-1}(V)$ then $x\notin K$, so $x$ lies in exactly one $U_i$ and hence in exactly one $V_i$. Thus $f^{-1}(V)$ is the disjoint union of the finitely many $V_i$. Since $y$ was arbitrary and $f$ is surjective by [L1], [F6] makes $f$ a finite-sheeted covering. [step 1.1, step 2.1, L1, F6] ∎

