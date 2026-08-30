---
id: fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth
kind: false-statement
title: "A pointwise-defined sum of smooth functions need not be smooth"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
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

## Statement

**False claim:** whenever $\sum_n f_n(x)$ is pointwise defined and each $f_n$ is smooth, the sum is automatically smooth.

## Facts & Assumptions

**Given:** A smooth bump $\eta:\mathbb R\to [0,1]$ supported in $[-1,1]$ with $\eta(0)=1$, and $f_n(x):=\eta(n^2(x-1/n))$ for $n\ge 1$.

[L1] Local finiteness, not mere pointwise definability, is the hypothesis that forces a smooth sum ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

## Refutation

**Proof technique:** direct.

1.1 For each fixed $x$, only finitely many of the values $f_n(x)$ are nonzero, so $F(x):=\sum_{n\ge 1} f_n(x)$ is pointwise defined; moreover $F(0)=0$ and $F(1/n)\ge 1$ for every $n\ge 1$. [given]

2.1 The sequence $1/n\to 0$ but $F(1/n)\not\to F(0)$, so $F$ is not continuous at $0$ and therefore not smooth. [step 1.1]

3.1 This refutes the claim and shows why [L1] needs local finiteness. [L1, step 2.1] ∎
