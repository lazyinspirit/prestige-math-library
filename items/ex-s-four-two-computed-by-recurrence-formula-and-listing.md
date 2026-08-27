---
id: ex-s-four-two-computed-by-recurrence-formula-and-listing
kind: example
title: "$S(4,2)$ computed by recurrence, inclusion-exclusion, and direct listing"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [def-stirling-second-kind-and-bell-number, thm-stirling-second-kind-recurrence, thm-stirling-second-kind-inclusion-exclusion-formula]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
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

## Example

Three standard computations agree:

1. recurrence:
   $$S(4,2)=2S(3,2)+S(3,1)=2\cdot3+1=7;$$
2. inclusion-exclusion:
   $$S(4,2)=\frac{1}{2!}\bigl(2^4-2\cdot1^4\bigr)=\frac{14}{2}=7;$$
3. direct listing:
   [[ex-set-partitions-of-four-by-block-count]] shows exactly seven two-block
   partitions of $[4]$.

Thus all three routes give the same value $S(4,2)=7$.
