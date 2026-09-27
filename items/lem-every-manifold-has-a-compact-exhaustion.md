---
id: lem-every-manifold-has-a-compact-exhaustion
kind: lemma
title: "Every manifold has a compact exhaustion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, def-compact-exhaustion-of-a-manifold, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-every-manifold-has-a-compact-exhaustion). No independent judge or whole-closure certification.
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

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Every smooth
manifold admits a compact exhaustion.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth manifold $M$.

[L1] Under $\mathrm{AC}_\omega$, the manifold has a countable cover by relatively compact coordinate balls $U_1,U_2,\dots$ ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]). This is the only use of countable choice; the finite indices below are chosen canonically as least eligible integers.

[A1] A compact subset of a space covered by open sets has a finite subcover.

## Proof

**Proof technique:** direct.

1.1 If $M=\varnothing$, the constant sequence $K_k=\varnothing$ is already a compact exhaustion. Otherwise take the countable cover $U_1,U_2,\dots$ of [L1], repeating a ball if the supplied cover is finite. Let $m_1$ be the least integer with $\overline{U_1}\subseteq\bigcup_{i\le m_1}U_i$. Given $m_k$, let $m_{k+1}>m_k$ be the least integer such that the compact set $\bigcup_{i\le m_k}\overline{U_i}$ lies in $\bigcup_{i\le m_{k+1}}U_i$. Such integers exist by [A1], and selecting their least values uses no further choice. [L1, A1, given, construct]

2.1 In the nonempty case put $K_k:=\bigcup_{i\le m_k}\overline{U_i}$. Each $K_k$ is compact, step 1.1 gives $K_k\subseteq\operatorname{int}(K_{k+1})$, and every point of $M$ lies in some $K_k$ because the $U_i$ cover $M$. [step 1.1]

3.1 The empty case of step 1.1 and the nonempty case of step 2.1 both give a compact exhaustion in the sense of [[def-compact-exhaustion-of-a-manifold]]. [step 1.1, step 2.1] ∎
