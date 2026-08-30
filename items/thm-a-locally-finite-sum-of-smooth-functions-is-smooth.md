---
id: thm-a-locally-finite-sum-of-smooth-functions-is-smooth
kind: theorem
title: "A locally finite sum of smooth functions is smooth"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-manifold, prop-smoothness-is-local-on-the-source, lem-locally-finite-families-of-supports-have-locally-finite-cozero-families]
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

Let $M$ be a smooth manifold and let $(f_i)_{i\in I}$ be smooth functions $f_i:M\to\mathbb R$ whose supports form a locally finite family. Then the pointwise sum $f:=\sum_{i\in I} f_i$ is well defined and smooth.

## Facts & Assumptions

**Given:** A family $(f_i)_{i\in I}$ of smooth real-valued functions on $M$ whose supports are locally finite.

[L1] If the supports are locally finite, then the cozero sets are locally finite ([[lem-locally-finite-families-of-supports-have-locally-finite-cozero-families]]).

[L2] Smoothness is local on the source ([[prop-smoothness-is-local-on-the-source]]).

[A1] A finite sum of smooth real-valued functions on a smooth manifold is smooth.

## Proof

**Proof technique:** direct.

1.1 Fix $p\in M$; by [L1], there is an open neighbourhood $U$ of $p$ meeting only finitely many cozero sets, say those with indices $i_1,\dots,i_m$. [L1, given, choose]

2.1 On $U$, the pointwise sum equals the finite sum $f_{i_1}+\cdots+f_{i_m}$, so it is well defined and smooth by [A1]. [A1, step 1.1]

3.1 Because every point has such a neighbourhood, [L2] implies that $f$ is smooth on all of $M$. [L2, step 2.1] ∎
