---
id: lem-exponential-factorial-tail-bound
kind: lemma
title: "A geometric bound for tails of the exponential series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-exponential-function-and-e, thm-geometric-series, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "MIT Proofs in Analysis and Probability, Lecture 2 notes"
      url: "https://math.mit.edu/classes/proofsiap/notes/Lecture2.pdf"
    - title: "LSU MATH 7230, Homework 1"
      url: "https://www.math.lsu.edu/~mahlburg/teaching/handouts/2018-7230/HW1.pdf"
pipeline_run: null
---

## Statement

If $x\in\mathbb R$, $N\in\mathbb N$, and $\iota(N+2)\ge2|x|$, then
$$\sum_{k=N+1}^{\infty}\frac{|x|^k}{\iota(k!)} \le \frac{2|x|^{N+1}}{\iota((N+1)!)}.$$

## Facts & Assumptions

**Given:** $x,N$ with the stated inequality.

[L1] Factorials satisfy the recurrence; the canonical embedding preserves products and order and is strictly increasing on naturals ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] A geometric tail of ratio $1/2$ sums to $2$ ([[thm-geometric-series]]).

## Proof

**Proof technique:** direct.

1.1 For $k\ge N+1$, strict increase gives $\iota(k+1)\ge\iota(N+2)\ge2|x|$, and the factorial recurrence gives that the ratio of consecutive absolute terms is $|x|/\iota(k+1)\le1/2$.   [given, L1]

2.1 Thus the $j$-th term after $N+1$ is at most the first tail term times $2^{-j}$.  [step 1.1, induction]

3.1 Sum the geometric majorant using [L2] to obtain the displayed bound.   [step 2.1, L2, given] ∎
