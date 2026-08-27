---
id: def-set-partition-and-block
kind: definition
title: "Set partitions and blocks"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.6"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
pipeline_run: null
---

## Definition

Let $A$ be a set. A **set partition** of $A$ is a family $\mathcal{P}$ of
nonempty subsets of $A$ such that:

1. distinct members of $\mathcal{P}$ are disjoint; and
2. $\bigcup\mathcal{P}=A$.

The members of $\mathcal{P}$ are its **blocks**.

Equivalently, a set partition is a decomposition of $A$ into nonempty pairwise
disjoint pieces. The empty set has one partition, namely the empty family.
