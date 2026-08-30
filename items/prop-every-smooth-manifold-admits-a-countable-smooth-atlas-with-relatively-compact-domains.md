---
id: prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains
kind: proposition
title: "Every smooth manifold admits a countable smooth atlas with relatively compact domains"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, def-smooth-atlas]
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

Every smooth manifold admits a countable smooth atlas whose chart domains have compact closures.

## Facts & Assumptions

**Given:** A smooth manifold $M$.

[L1] The trivial open cover $\{M\}$ has a countable subordinate cover by relatively compact coordinate balls ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[F1] A smooth atlas is a cover by pairwise smoothly compatible smooth charts ([[def-smooth-atlas]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there are countably many coordinate balls $B_1,B_2,\dots$ covering $M$, each with compact closure. [L1, given]

2.1 Each $B_n$ carries its inherited smooth chart, and these charts are pairwise compatible because they come from the smooth structure of $M$. Thus they form a countable smooth atlas by [F1]. [F1, step 1.1]

3.1 This is the required countable smooth atlas. [step 2.1] ∎
