---
id: lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it
kind: lemma
title: "Every open cover of a manifold has a countable relatively compact coordinate-ball subcover"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, def-smooth-manifold, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, thm-second-countable-implies-lindelof]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it). No independent judge or whole-closure certification.
    delegated_by: owner
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

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Every open cover of a smooth manifold has a countable cover by coordinate balls with compact closures, each closure contained in one member of the original cover.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth manifold $M$, and an open cover $\mathcal U$ of $M$.

[L1] Coordinate balls form a basis of the underlying topological manifold ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L2] Under $\mathrm{AC}_\omega$, second-countable spaces are Lindelof ([[thm-second-countable-implies-lindelof]]).

[A1] By the library convention in [[def-smooth-manifold]], every smooth manifold is second countable.

## Proof

**Proof technique:** direct.

1.1 Form the set $\mathcal B$ of all coordinate balls $B$ for which $\overline B$ is compact and $\overline B\subseteq U$ for at least one $U\in\mathcal U$. No member is chosen for each point. This family covers $M$: for a given $p$, one cover member $U$ contains it, and [L1] supplies one such ball within $U$. [L1, given, construct]

2.1 The family $\mathcal B$ is an open cover, so [A1] and [L2] give a finite or countable subcover $(B_n)$. By its definition, each $B_n$ has a nonempty set of witness members $U\in\mathcal U$ with $\overline{B_n}\subseteq U$. Use $\mathrm{AC}_\omega$ once to choose a witness $U_n$ for each listed ball (finite choice suffices in the finite case). Thus $\overline{B_n}$ is compact and contained in $U_n$. [A1, L2, step 1.1, given]

3.1 Thus the original cover has a countable subordinate cover by relatively compact coordinate balls. [step 2.1] ∎
