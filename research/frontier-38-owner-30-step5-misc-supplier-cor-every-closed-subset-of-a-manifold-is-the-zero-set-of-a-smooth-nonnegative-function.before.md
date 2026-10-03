---
id: cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function
kind: corollary
title: "Every closed subset of a manifold is the zero set of a smooth nonnegative function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-a-locally-finite-sum-of-smooth-functions-is-smooth]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function). No independent judge or whole-closure certification.
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

Assume countable choice $\mathrm{AC}_\omega$. Every closed subset $A$ of a smooth manifold $M$ is the zero set of some smooth nonnegative function $g:M\to [0,\infty)$.

## Facts & Assumptions

**Given:** Countable choice and a closed subset $A$ of a smooth manifold $M$.

[L1] Every open cover of a manifold has a countable cover by relatively compact coordinate balls subordinate to it ([[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]]).

[L2] A countable cover by coordinate balls with compact closures has a countable locally finite shrinking $W_k\Subset V_k$ ([[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]]).

[L3] For every compact set inside an open set there is a smooth manifold bump equal to $1$ near that compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L4] A locally finite sum of smooth functions is smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

## Proof

**Proof technique:** direct.

1.1 If $M\setminus A=\varnothing$, take $g=0$ and the claim follows. Otherwise apply [L1], under the stated $\mathrm{AC}_\omega$, to the one-set open cover $\{M\setminus A\}$ of the open manifold $M\setminus A$. It gives a finite or countable cover by coordinate balls with compact closures there; if finite, repeat one ball to index it by positive integers for [L2]. Apply [L2] to obtain an at-most-countable locally finite shrinking $(W_k,V_k)_{k\in I}$, where $I\subseteq\mathbb N$ after an enumeration. For each $k\in I$, [L3] supplies a bump $b_k:M\to[0,1]$ equal to $1$ near $\overline{W_k}$ and supported in $V_k\subseteq M\setminus A$. Use $\mathrm{AC}_\omega$ a further time to select these countably many bumps simultaneously; if $I$ is finite, finite choice suffices. [L1, L2, L3, given, choose]

2.1 The family $(b_k)_{k\in I}$ is locally finite because $\operatorname{supp}b_k\subseteq V_k$, so $g:=\sum_{k\in I}2^{-k}b_k$ is smooth and nonnegative by [L4]. The sum is finite in a neighbourhood of each point, and the empty-index convention gives $g=0$. Every $b_k$ vanishes on $A$, whereas each point of $M\setminus A$ lies in some $W_k$ where $b_k=1$. Hence $g^{-1}(0)=A$. [L4, step 1.1]

3.1 This establishes the required zero-set representation, including $A=M$. [step 1.1, step 2.1] ∎
