---
id: fs-the-piecewise-function-exp-minus-one-over-t-is-analytic-at-zero
kind: false-statement
title: "The piecewise exponential flat function is not analytic at zero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-standard-flat-function, thm-the-standard-flat-function-is-smooth-and-flat-at-zero]
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

**False claim:** the standard flat function is analytic at $0$.

## Facts & Assumptions

**Given:** The standard flat function $\beta$.

[F1] For $t>0$, one has $\beta(t)=\exp(-1/t)>0$, while $\beta(t)=0$ for $t\le 0$ ([[def-the-standard-flat-function]]).

[L1] Every derivative of $\beta$ at $0$ is equal to $0$ ([[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the Taylor series of $\beta$ at $0$ is the zero series. [L1]

1.2 By [F1], the function $\beta$ is positive on every punctured right neighbourhood of $0$, so it is not equal near $0$ to its zero Taylor series. [F1]

2.1 Therefore $\beta$ is not analytic at $0$. [step 1.1, step 1.2] ∎
