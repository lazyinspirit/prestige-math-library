---
id: cor-smooth-functions-separate-points-from-closed-sets
kind: corollary
title: "Smooth functions separate points from closed sets"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]
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

Let $A$ be a closed subset of a smooth manifold $M$ and let $p\in M\setminus A$. Then there exists a smooth function $f:M\to [0,1]$ such that $f(p)=1$ and $f|_A=0$.

## Facts & Assumptions

**Given:** A closed set $A\subseteq M$ and a point $p\in M\setminus A$.

[L1] A closed set inside an open set admits a smooth cutoff equal to $1$ near the closed set and supported in the open set ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

## Proof

**Proof technique:** direct.

1.1 The singleton $\{p\}$ is closed and lies in the open set $M\setminus A$. [given]

2.1 Apply [L1] to the closed set $\{p\}\subseteq M\setminus A$; the resulting function is $1$ at $p$ and vanishes on $A$ because its support lies in $M\setminus A$. [L1, step 1.1]

3.1 This is the required separating smooth function. [step 2.1] ∎
