---
id: thm-signless-first-kind-recurrence-and-rising-factorial-expansion
kind: theorem
title: "The signless first-kind Stirling numbers satisfy their recurrence and expand the rising factorial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-signed-and-signless-stirling-first-kind, def-rising-factorial, def-permutation-support-disjoint-cycles-and-cycle-type]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.5"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

For every $n\geq1$ and every $k\geq1$,

$$c(n,k)=c(n-1,k-1)+(n-1)c(n-1,k).$$

Moreover, for every $n\in\mathbb{N}$,

$$x^{\overline{n}}=\sum_{k=0}^{n}c(n,k)x^k.$$

## Facts & Assumptions

**Given:** The cycle decomposition conventions of
[[def-permutation-support-disjoint-cycles-and-cycle-type]] and the rising
factorial of [[def-rising-factorial]].

## Proof

**Proof technique:** direct.

1.1 To build a permutation of $[n]$ with exactly $k$ cycles, start from a permutation of $[n-1]$. Either $n$ forms a new one-cycle, which contributes $c(n-1,k-1)$ possibilities, or else $n$ is inserted into one of the $n-1$ cyclic slots of a permutation with $k$ cycles, which contributes $(n-1)c(n-1,k)$. These two constructions are disjoint and exhaustive, so the recurrence follows. [given]

2.1 Let $P_n(x):=\sum_{k=0}^{n}c(n,k)x^k$. Step 1.1 gives $P_n(x)=xP_{n-1}(x)+(n-1)P_{n-1}(x)=(x+n-1)P_{n-1}(x)$, and also $P_0(x)=1$. [step 1.1, algebra]

3.1 The rising factorial satisfies the same recursion: $x^{\overline{0}}=1$ and $x^{\overline{n}}=(x+n-1)x^{\overline{n-1}}$ by [[def-rising-factorial]]. Therefore $P_n(x)=x^{\overline n}$ for all $n$ by induction on $n$. [step 2.1, given] ∎
