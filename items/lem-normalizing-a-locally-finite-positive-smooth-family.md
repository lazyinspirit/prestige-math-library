---
id: lem-normalizing-a-locally-finite-positive-smooth-family
kind: lemma
title: "A locally finite positive smooth family normalizes to a partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-locally-finite-sum-of-smooth-functions-is-smooth, lem-locally-finite-families-of-supports-have-locally-finite-cozero-families]
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

Let $(g_i)_{i\in I}$ be a locally finite family of smooth functions $g_i:M\to [0,\infty)$ on a smooth manifold $M$, and suppose that for every $p\in M$ at least one $g_i(p)$ is strictly positive. Put $G:=\sum_i g_i$. Then $G$ is a positive smooth function, each $\phi_i:=g_i/G$ is smooth, and $(\phi_i)_{i\in I}$ is a partition of unity subordinate to $(\operatorname{supp}(g_i))_{i\in I}$.

## Facts & Assumptions

**Given:** A locally finite family $(g_i)_{i\in I}$ of nonnegative smooth functions on $M$ that is pointwise positive.

[L1] A locally finite sum of smooth functions is smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

[L2] If the supports are locally finite, then the cozero sets are locally finite ([[lem-locally-finite-families-of-supports-have-locally-finite-cozero-families]]).

[A1] A positive smooth real-valued function has a smooth reciprocal.

## Proof

**Proof technique:** direct.

1.1 By [L1], the sum $G:=\sum_i g_i$ is smooth; because the $g_i$ are nonnegative and some $g_i(p)$ is positive at each point, one has $G(p)>0$ for all $p\in M$. [L1, given]

2.1 By [A1], the reciprocal $1/G$ is smooth, so each $\phi_i=g_i(1/G)$ is smooth and nonnegative; also $\operatorname{supp}(\phi_i)\subseteq \operatorname{supp}(g_i)$. [A1, step 1.1]

3.1 The family $(\phi_i)$ is locally finite by [L2], and $\sum_i\phi_i=(1/G)\sum_i g_i=1$ pointwise. Therefore $(\phi_i)$ is a partition of unity subordinate to $(\operatorname{supp}(g_i))$. [L2, step 1.1, step 2.1] ∎
