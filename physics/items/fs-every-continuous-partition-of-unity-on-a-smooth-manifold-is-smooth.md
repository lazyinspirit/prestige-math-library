---
id: fs-every-continuous-partition-of-unity-on-a-smooth-manifold-is-smooth
kind: false-statement
title: "A continuous partition of unity need not be smooth"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-partition-of-unity-subordinate-to-an-open-cover]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

**False claim:** every continuous partition of unity on a smooth manifold is smooth.

## Facts & Assumptions

**Given:** The cover $U=(-\infty,1)$ and $V=(-1,\infty)$ of $\mathbb R$.

[F1] A partition of unity subordinate to an open cover consists of nonnegative functions summing to $1$ with supports in the assigned open sets ([[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

[A1] Define $\phi(x):=0$ for $x\le -1$, $\phi(x):=(x+1)/2$ for $-1\le x\le 1$, $\phi(x):=1$ for $x\ge 1$, and $\psi:=1-\phi$.

## Refutation

**Proof technique:** direct.

1.1 The functions from [A1] are continuous, nonnegative, and satisfy $\phi+\psi=1$; also $\operatorname{supp}(\phi)=[-1,\infty)\subseteq V$ and $\operatorname{supp}(\psi)=(-\infty,1]\subseteq U$, so they form a continuous subordinate partition in the sense of [F1]. [A1, F1]

1.2 The function $\phi$ has a corner at $-1$ and at $1$, so it is not smooth. [A1]

2.1 Hence a continuous partition of unity need not be smooth. [step 1.1, step 1.2] ∎
