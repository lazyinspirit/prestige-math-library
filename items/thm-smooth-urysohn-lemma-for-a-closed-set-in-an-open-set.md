---
id: thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set
kind: theorem
title: "A smooth Urysohn lemma for a closed set in an open set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-smooth-partitions-of-unity-exist-on-manifolds, def-smooth-partition-of-unity-subordinate-to-an-open-cover]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
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

Let $A$ be a closed subset of a smooth manifold $M$, and let $U\subseteq M$ be open with $A\subseteq U$. Then there exists a smooth function $f:M\to [0,1]$ such that $f=1$ on an open neighbourhood of $A$ and $\operatorname{supp}(f)\subseteq U$.

## Facts & Assumptions

**Given:** A closed set $A\subseteq M$ and an open set $U\subseteq M$ with $A\subseteq U$.

[L1] Every open cover of a smooth manifold admits a subordinate smooth partition of unity ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F1] In a partition of unity subordinate to an open cover, each support lies in its assigned open set and the functions sum to $1$ pointwise ([[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

## Proof

**Proof technique:** direct.

1.1 The two open sets $U$ and $M\setminus A$ cover $M$, so [L1] gives smooth functions $\phi_U,\phi_A:M\to [0,1]$ subordinate to this cover with $\phi_U+\phi_A=1$. [L1, given, choose]

2.1 Because $\operatorname{supp}(\phi_A)\subseteq M\setminus A$, the function $\phi_A$ vanishes on an open neighbourhood of $A$; hence $\phi_U=1$ there, and $\operatorname{supp}(\phi_U)\subseteq U$ by [F1]. [F1, step 1.1]

3.1 Taking $f:=\phi_U$ yields the required smooth function. [step 2.1] ∎
