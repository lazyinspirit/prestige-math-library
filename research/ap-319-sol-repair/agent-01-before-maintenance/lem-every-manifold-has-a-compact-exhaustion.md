---
id: lem-every-manifold-has-a-compact-exhaustion
kind: lemma
title: "Every manifold has a compact exhaustion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compact-exhaustion-of-a-manifold, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]
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

Every smooth manifold admits a compact exhaustion.

## Facts & Assumptions

**Given:** A smooth manifold $M$.

[L1] The manifold has a countable cover by relatively compact coordinate balls $U_1,U_2,\dots$ ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[A1] A compact subset of a space covered by open sets has a finite subcover.

## Proof

**Proof technique:** direct.

1.1 Start from the countable cover $U_1,U_2,\dots$ of [L1]. Recursively choose integers $1\le m_1<m_2<\cdots$ such that $\overline{U_1}\subseteq \bigcup_{i\le m_1}U_i$ and, for each $k\ge 1$, the compact set $\bigcup_{i\le m_k}\overline{U_i}$ is contained in $\bigcup_{i\le m_{k+1}}U_i$; this is possible by [A1]. [L1, A1, choose]

2.1 Put $K_k:=\bigcup_{i\le m_k}\overline{U_i}$. Each $K_k$ is compact, step 1.1 gives $K_k\subseteq \operatorname{int}(K_{k+1})$, and every point of $M$ lies in some $K_k$ because the $U_i$ cover $M$. [step 1.1]

3.1 Therefore $(K_k)$ is a compact exhaustion in the sense of [[def-compact-exhaustion-of-a-manifold]]. [step 2.1] ∎
