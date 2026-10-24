---
id: cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover
kind: corollary
title: "Smooth partitions subordinate to a countable coordinate cover"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, thm-smooth-partitions-of-unity-exist-on-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Every countable cover of a smooth manifold by coordinate balls admits a smooth partition of unity subordinate to that cover.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a countable coordinate-ball cover of a smooth manifold.

[L1] Under $\mathrm{AC}_\omega$, every open cover of a smooth manifold admits a subordinate smooth partition of unity ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 A countable coordinate-ball cover is an open cover. [given]

2.1 Apply [L1] to that open cover. [L1, step 1.1]

3.1 The resulting partition is subordinate to the given countable coordinate-ball cover. [step 2.1] ∎
