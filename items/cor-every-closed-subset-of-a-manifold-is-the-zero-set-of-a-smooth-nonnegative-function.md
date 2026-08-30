---
id: cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function
kind: corollary
title: "Every closed subset of a manifold is the zero set of a smooth nonnegative function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-a-locally-finite-sum-of-smooth-functions-is-smooth]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
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

Every closed subset $A$ of a smooth manifold $M$ is the zero set of some smooth nonnegative function $g:M\to [0,\infty)$.

## Facts & Assumptions

**Given:** A closed subset $A$ of a smooth manifold $M$.

[L1] Every open cover of a manifold has a countable cover by relatively compact coordinate balls subordinate to it ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[L2] A countable cover by coordinate balls with compact closures has a countable locally finite shrinking $W_k\Subset V_k$ ([[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]]).

[L3] For every compact set inside an open set there is a smooth manifold bump equal to $1$ near that compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L4] A locally finite sum of smooth functions is smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the one-set open cover $\{M\setminus A\}$ of the open manifold $M\setminus A$ to obtain a countable cover by coordinate balls with compact closures contained in $M\setminus A$. Then apply [L2] to obtain a countable locally finite shrinking $W_k\Subset V_k$ of that cover. For each $k$, apply [L3] to $\overline{W_k}\subseteq V_k$ to obtain a smooth function $b_k:M\to [0,1]$ that is positive on $W_k$ and supported in $M\setminus A$. [L1, L2, L3, given, choose]

2.1 The family $(b_k)$ is locally finite, so $$g:=\sum_{k\ge 1}2^{-k}b_k$$ is smooth and nonnegative by [L4]. One has $g=0$ on $A$ because every $b_k$ vanishes there, and $g>0$ on $M\setminus A$ because each point there lies in some $W_k$. [L4, step 1.1]

3.1 Therefore $A=g^{-1}(0)$. [step 2.1] ∎
