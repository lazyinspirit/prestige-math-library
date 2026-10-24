---
id: thm-eulerian-recurrence
kind: theorem
title: "The Eulerian numbers satisfy $A(n,k)=(k+1)A(n-1,k)+(n-k)A(n-1,k-1)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-eulerian-number-and-eulerian-polynomial]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Felix Gotti, MIT 18.211 Combinatorial Analysis, Lecture 13"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/13.%20Permutatios%20III/Permutations%20III.pdf"
    - title: "Andrew Lin, MIT 18.212 Algebraic Combinatorics, Lecture 12"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/ed299749f0b9263dd8fd10caea717add_MIT18_212S19_lec12.pdf"
pipeline_run: null
---

## Statement

For $n \ge 1$ and every natural number $k$,

$$A(n,k)=(k+1)A(n-1,k)+(n-k)A(n-1,k-1),$$

where the Eulerian numbers are extended by $A(m,j)=0$ for $j<0$ or $j\ge m$,
except for the defining value $A(0,0)=1$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$.

## Proof

**Proof technique:** direct.

1.1 Take a permutation $\pi \in S_{n-1}$ and insert the new largest letter $n-1$ into one of the $n$ slots of its one-line notation. If a slot lies after a descent of $\pi$, or is the final slot, then the insertion preserves the number of descents: one old descent is replaced by one new descent, or no descent is created at the end. Every other slot creates one new descent. [given]

2.1 If $\pi$ has exactly $k$ descents, step 1.1 gives exactly $k+1$ insertion slots producing a permutation of $S_n$ with $k$ descents. If $\pi$ has exactly $k-1$ descents, the remaining $n-k$ slots produce a permutation with $k$ descents. These two cases are disjoint and exhaust the permutations of $S_n$ with $k$ descents. [step 1.1]

3.1 Counting the two cases of step 2.1 gives $A(n,k)=(k+1)A(n-1,k)+(n-k)A(n-1,k-1)$. The out-of-range convention makes the same formula correct at the boundary values of $k$. [step 2.1] ∎
