---
id: lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it
kind: lemma
title: "Every open cover of a manifold has a countable relatively compact coordinate-ball subcover"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-manifold, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, thm-second-countable-implies-lindelof]
justified_by: []
aliases: []
landmark: false
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

Every open cover of a smooth manifold has a countable cover by coordinate balls with compact closures, each closure contained in one member of the original cover.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and an open cover $\mathcal U$ of $M$.

[L1] Coordinate balls form a basis of the underlying topological manifold ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L2] Second-countable spaces are Lindelof ([[thm-second-countable-implies-lindelof]]).

[A1] By the library convention in [[def-smooth-manifold]], every smooth manifold is second countable.

## Proof

**Proof technique:** direct.

1.1 For each $p\in M$, choose $U_p\in \mathcal U$ containing $p$, then choose a coordinate ball $B_p$ with $p\in B_p\subseteq \overline{B_p}\subseteq U_p$ by [L1]. [L1, given, choose]

2.1 The family $(B_p)_{p\in M}$ is an open cover of $M$, so [A1] and [L2] give a countable subcover $B_1,B_2,\dots$. Each $\overline{B_n}$ is compact and lies in some member of $\mathcal U$ by step 1.1. [A1, L2, step 1.1]

3.1 Thus the original cover has a countable subordinate cover by relatively compact coordinate balls. [step 2.1] ∎
