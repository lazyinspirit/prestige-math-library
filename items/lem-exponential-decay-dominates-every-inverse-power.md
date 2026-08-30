---
id: lem-exponential-decay-dominates-every-inverse-power
kind: lemma
title: "Exponential decay dominates every inverse power near zero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-standard-flat-function, thm-exponential-beats-every-polynomial]
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

For every $m\in\mathbb N$, one has $\beta(t)/t^m\to 0$ as $t\to 0^+$, where $\beta$ is the standard flat function.

## Facts & Assumptions

**Given:** $m\in\mathbb N$.

[F1] For $t>0$, the standard flat function satisfies $\beta(t)=\exp(-1/t)$ ([[def-the-standard-flat-function]]).

[L1] For every $m\in\mathbb N$ and every $a>0$, $x^m/\exp(ax)\to 0$ as $x\to +\infty$ ([[thm-exponential-beats-every-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 For $t>0$, put $x:=1/t$; then $x\to +\infty$ as $t\to 0^+$ and $\beta(t)/t^m=x^m/\exp(x)$ by [F1]. [F1, given, construct]

2.1 The expression $x^m/\exp(x)$ tends to $0$ by [L1] with $a=1$. [L1, step 1.1]

3.1 Therefore $\beta(t)/t^m\to 0$ as $t\to 0^+$. [step 2.1] ∎
