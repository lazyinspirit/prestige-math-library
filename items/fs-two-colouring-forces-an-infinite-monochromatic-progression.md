---
id: fs-two-colouring-forces-an-infinite-monochromatic-progression
kind: false-statement
title: "FALSE: every two-colouring of $\\mathbb N$ contains an infinite monochromatic arithmetic progression"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-van-der-waerden-with-monochromatic-difference, def-natural-numbers, def-nat-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, remark after Corollary 7"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

Every two-colouring of $\mathbb N$ contains an infinite monochromatic arithmetic progression $a,a+d,a+2d,\ldots$ with $d>0$.

## Facts & Assumptions

**Given:** Natural numbers and their order as in [[def-natural-numbers]] and [[def-nat-order]].

[L1] Every finite colouring of a sufficiently long initial interval has a monochromatic arithmetic progression whose common difference has the same colour ([[thm-van-der-waerden-with-monochromatic-difference]]).

## Refutation

**Proof technique:** constructive.

1.1 Colour $0$ red. For $n\ge1$, colour $n$ red when the unique $m$ with $2^m\le n<2^{m+1}$ is even, and blue when $m$ is odd. Thus consecutive dyadic blocks alternate colours, with every power of two assigned to the block beginning there. [construct]

2.1 Fix $a\in\mathbb N$ and $d>0$. For every sufficiently large $m$, let $q_m$ be the least $q$ with $a+q d\ge2^m$. Minimality gives $a+q_m d<2^m+d<2^{m+1}$, so the progression meets the $m$th dyadic block. It therefore meets infinitely many blocks of each parity and contains both colours. [step 1.1, algebra]

3.1 No infinite arithmetic progression is monochromatic in this colouring. This does not contradict [L1], which guarantees arbitrarily long finite progressions only. The displayed universal statement is false. [step 2.1, L1, discharge-construct] ∎

