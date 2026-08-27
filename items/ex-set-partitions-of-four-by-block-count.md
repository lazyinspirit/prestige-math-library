---
id: ex-set-partitions-of-four-by-block-count
kind: example
title: "The set partitions of $[4]$ grouped by their number of blocks"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [def-stirling-second-kind-and-bell-number]
aliases: []
landmark: false
verification:
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

The partitions of $[4]$ are:

- one block: $\{\{1,2,3,4\}\}$;
- two blocks:
  $\{\{1\},\{2,3,4\}\}$,
  $\{\{2\},\{1,3,4\}\}$,
  $\{\{3\},\{1,2,4\}\}$,
  $\{\{4\},\{1,2,3\}\}$,
  $\{\{1,2\},\{3,4\}\}$,
  $\{\{1,3\},\{2,4\}\}$,
  $\{\{1,4\},\{2,3\}\}$;
- three blocks:
  $\{\{1\},\{2\},\{3,4\}\}$,
  $\{\{1\},\{3\},\{2,4\}\}$,
  $\{\{1\},\{4\},\{2,3\}\}$,
  $\{\{2\},\{3\},\{1,4\}\}$,
  $\{\{2\},\{4\},\{1,3\}\}$,
  $\{\{3\},\{4\},\{1,2\}\}$;
- four blocks: $\{\{1\},\{2\},\{3\},\{4\}\}$.

So

$$S(4,1)=1,\qquad S(4,2)=7,\qquad S(4,3)=6,\qquad S(4,4)=1,$$

and therefore $B_4=1+7+6+1=15$.
