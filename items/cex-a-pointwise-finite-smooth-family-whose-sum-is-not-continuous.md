---
id: cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous
kind: counterexample
title: "A pointwise-finite smooth family whose sum is not continuous"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-a-locally-finite-sum-of-smooth-functions-is-smooth]
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

## Statement refuted

A pointwise-finite family of smooth functions always has a continuous pointwise sum.

## Facts & Assumptions

**Given:** A smooth bump $\eta:\mathbb R\to [0,1]$ supported in $[-1,1]$ with $\eta(0)=1$, and $f_n(x):=\eta(n^2(x-1/n))$ for $n\ge 1$.

[L1] Local finiteness, not mere pointwise finiteness, is the hypothesis that forces a smooth sum ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

## Counterexample

**Proof technique:** direct.

1.1 For every fixed $x$, only finitely many $f_n(x)$ are nonzero, so the family $(f_n)_{n\ge 1}$ is pointwise finite; however $f_n(0)=0$ and $f_n(1/n)=1$ for every $n\ge 1$. [given]

2.1 The sum $F(x):=\sum_n f_n(x)$ therefore satisfies $F(0)=0$ and $F(1/n)\ge 1$ for every $n$, so $F$ is not continuous at $0$. [step 1.1]

3.1 This refutes the statement and exhibits why [L1] needs local finiteness. [L1, step 2.1] ∎
