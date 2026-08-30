---
id: cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover
kind: corollary
title: "Smooth partitions subordinate to a countable coordinate cover"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-smooth-partitions-of-unity-exist-on-manifolds]
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

Every countable cover of a smooth manifold by coordinate balls admits a smooth partition of unity subordinate to that cover.

## Facts & Assumptions

**Given:** A countable coordinate-ball cover of a smooth manifold.

[L1] Every open cover of a smooth manifold admits a subordinate smooth partition of unity ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 A countable coordinate-ball cover is an open cover. [given]

2.1 Apply [L1] to that open cover. [L1, step 1.1]

3.1 The resulting partition is subordinate to the given countable coordinate-ball cover. [step 2.1] ∎
