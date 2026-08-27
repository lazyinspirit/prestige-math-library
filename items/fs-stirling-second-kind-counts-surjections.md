---
id: fs-stirling-second-kind-counts-surjections
kind: false-statement
title: "FALSE: $S(n,k)$ counts surjections $[n]\\to[k]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-stirling-second-kind-inclusion-exclusion-formula, thm-the-number-of-surjections]
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
pipeline_run: null
---

## Statement

**False claim:** for all $n,k$, the number $S(n,k)$ is the number of surjections
$[n]\to[k]$.

## Facts & Assumptions

**Given:** The surjection formula and the second-kind inclusion-exclusion formula.

## Proof

**Proof technique:** direct.

1.1 For $n=3$ and $k=2$, [[thm-stirling-second-kind-inclusion-exclusion-formula]] gives $S(3,2)=\frac{1}{2}(2^3-2)=3$. [given]

2.1 But [[thm-the-number-of-surjections]] gives the surjection count $2^3-2=6$. Since $3\neq6$, $S(3,2)$ does not count surjections themselves; it counts them only after dividing by $2!$. [step 1.1, given]

3.1 Therefore the claim is false. [step 2.1] ∎
