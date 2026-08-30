---
id: thm-smooth-partitions-of-unity-exist-on-manifolds
kind: theorem
title: "Smooth partitions of unity exist on manifolds"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, lem-manifold-bump-for-a-compact-set-inside-an-open-set, lem-normalizing-a-locally-finite-positive-smooth-family, def-smooth-partition-of-unity-subordinate-to-an-open-cover]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

Every open cover of a smooth manifold admits a smooth partition of unity subordinate to it.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and an open cover $\mathcal U$ of $M$.

[L1] The cover has a countable subordinate cover by relatively compact coordinate balls ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[L2] Such a countable cover has a countable locally finite shrinking $\overline{W_k}\subseteq V_k\subseteq U_{n(k)}$ ([[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]]).

[L3] For every compact set inside an open set there is a smooth manifold bump equal to $1$ on a neighbourhood of that compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L4] A locally finite nonnegative smooth family that is pointwise positive normalizes to a partition of unity ([[lem-normalizing-a-locally-finite-positive-smooth-family]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] and then [L2] to obtain countably many open sets $W_k$ and coordinate balls $V_k$ such that $M=\bigcup_k W_k$, the family $(V_k)$ is locally finite, and each $V_k$ lies in some member $U_{n(k)}$ of $\mathcal U$. [L1, L2, given]

2.1 For each $k$, apply [L3] to the compact set $\overline{W_k}\subseteq V_k$ to obtain a smooth function $g_k:M\to [0,1]$ that equals $1$ on a neighbourhood of $\overline{W_k}$ and is supported in $V_k$. The family $(g_k)$ is locally finite and pointwise positive because every point lies in some $W_k$. [L3, step 1.1, choose]

3.1 Normalize $(g_k)$ by [L4]; the resulting family $(\phi_k)$ is a smooth partition of unity, and $\operatorname{supp}(\phi_k)\subseteq V_k\subseteq U_{n(k)}$ for every $k$. [L4, step 2.1]

4.1 Hence $(\phi_k)$ is subordinate to $\mathcal U$ in the sense of [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]. [step 3.1] ∎
