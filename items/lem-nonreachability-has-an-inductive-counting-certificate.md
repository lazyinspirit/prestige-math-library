---
id: lem-nonreachability-has-an-inductive-counting-certificate
kind: lemma
title: "Nonreachability has an inductive counting certificate"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-inductive-reachable-vertex-count, lem-reachability-count-is-verifiable-in-nl]
proof_strategy: induction
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.4.2"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
    - title: "Harvard CS 221, Lecture 5, Lemma 9"
      url: "https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf"
---

## Statement

There is a nondeterministic $O(\log N)$-work-space verifier which, on
$\langle G,s,t\rangle$, accepts exactly when $t$ is not reachable from $s$.
It uses a polynomial-length, read-once certificate carrying the successive
counts $c_0,\ldots,c_{N-1}$.

## Facts & Assumptions

**Given:** an $N$-vertex digraph $G$ with source $s$ and target $t$.

[L1] $c_i=|C_i|$, $C_0=\{s\}$, and $C_{N-1}$ is the full set of vertices reachable from $s$ ([[def-inductive-reachable-vertex-count]]).

[L2] Given the true value of $|C_i|$, nonmembership of a specified vertex in $C_i$ has a nondeterministic logspace certificate that lists the complete reachable layer ([[lem-reachability-count-is-verifiable-in-nl]]).

## Proof

**Proof technique:** induction.

1.1 Start with $c_0=1=|C_0|$. [L1, base]

1.2 Assume inductively that the supplied $c_{i-1}$ equals $|C_{i-1}|$. Process every vertex $u$: either verify a positive path of length at most $i$ to $u$, or, for every $w$ with $w=u$ or $(w,u)\in E$, invoke the [L2] certificate for $w\notin C_{i-1}$. Count the vertices in the first case and require the supplied total $c_i$. [L1, L2, ih, construct]

2.1 The second case is sound: if $u\in C_i$, either $u\in C_{i-1}$ (the $w=u$ test fails) or the final edge of a length-at-most-$i$ walk has a predecessor in $C_{i-1}$, contradicting one of its [L2] certificates. Conversely, every $u\notin C_i$ is outside $C_{i-1}$ and has no in-neighbor in $C_{i-1}$, while every $u\in C_i$ has a positive bounded path. Hence an accepted layer has $c_i=|C_i|$. [L1, step 1.2, ih]

3.1 Induction from step 1.1 makes every accepted layer correct. Each nested certificate is checked by counters, vertex labels, and one bounded path at a time, so the verifier retains only $O(\log N)$ work space and reads a polynomial-size certificate once. At layer $N-1$, accept precisely when $t$ is absent from the certified list; by [L1] this is equivalent to nonreachability. [L1, step 2.1, discharge-induction] ∎
