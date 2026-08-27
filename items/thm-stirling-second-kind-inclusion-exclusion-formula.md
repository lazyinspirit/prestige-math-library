---
id: thm-stirling-second-kind-inclusion-exclusion-formula
kind: theorem
title: "The Stirling numbers of the second kind are given by $S(n,k)=\\frac{1}{k!}\\sum_{i=0}^k(-1)^i\\binom{k}{i}(k-i)^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-stirling-second-kind-and-bell-number, def-factorial-and-falling-factorial, thm-the-number-of-surjections]
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
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.6"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

For all $n,k\in\mathbb{N}$,

$$S(n,k)=\frac{1}{k!}\sum_{i=0}^{k}(-1)^i\binom{k}{i}(k-i)^n.$$

## Facts & Assumptions

**Given:** The surjection-counting formula of [[thm-the-number-of-surjections]]
and the second-kind definition of [[def-stirling-second-kind-and-bell-number]].

## Proof

**Proof technique:** direct.

1.1 A partition of $[n]$ into exactly $k$ blocks becomes a surjection $[n]\to[k]$ once the $k$ blocks are labelled by the $k$ elements of $[k]$. Conversely, the fibres of a surjection $[n]\to[k]$ form a partition of $[n]$ into exactly $k$ nonempty blocks. Thus the number of surjections $[n]\to[k]$ is $k!\,S(n,k)$. [given]

1.2 By [[thm-the-number-of-surjections]], that same number equals $\sum_{i=0}^{k}(-1)^i\binom{k}{i}(k-i)^n$. Therefore $$k!\,S(n,k)=\sum_{i=0}^{k}(-1)^i\binom{k}{i}(k-i)^n.$$ [given]

2.1 Dividing by the nonzero factorial $k!$ from [[def-factorial-and-falling-factorial]] gives the displayed formula. [step 1.1, step 1.2] ∎
