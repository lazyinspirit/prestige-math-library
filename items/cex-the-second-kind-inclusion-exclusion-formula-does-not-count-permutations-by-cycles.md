---
id: cex-the-second-kind-inclusion-exclusion-formula-does-not-count-permutations-by-cycles
kind: counterexample
title: "The second-kind inclusion-exclusion formula does not count permutations by cycles"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-signed-and-signless-stirling-first-kind, thm-stirling-second-kind-inclusion-exclusion-formula]
aliases: []
landmark: false
proof_strategy: direct
verification:
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

## Statement refuted

**Refuted claim:** the inclusion-exclusion formula for $S(n,k)$ also counts
permutations of $[n]$ with exactly $k$ cycles.

## Facts & Assumptions

**Given:** The case $n=3$, $k=1$.

## Proof

**Proof technique:** direct.

1.1 The second-kind formula gives $S(3,1)=1$. [given]

2.1 But the permutations of $[3]$ with exactly one cycle are the two $3$-cycles $(123)$ and $(132)$, so $c(3,1)=2$. Therefore the second-kind formula does not count permutations by cycles. [step 1.1, given]

3.1 Hence the claim is false. [step 2.1] ∎
