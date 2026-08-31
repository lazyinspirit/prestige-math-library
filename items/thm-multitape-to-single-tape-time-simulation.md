---
id: thm-multitape-to-single-tape-time-simulation
kind: theorem
title: "Every multitape time-T computation has a single-tape simulation in O((n+T(n))^2) time"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-asymptotic-resource-comparison, def-dtime-ntime-dspace-and-nspace, thm-multitape-machines-have-one-tape-simulations, lem-multitape-simulation-has-quadratic-time-overhead]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 7. Time Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/time"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $M$ be a fixed deterministic multitape Turing machine. If
$$ \operatorname{Time}_M(n)=O(T(n)), $$
then there exists a deterministic one-tape Turing machine $S_M$ deciding the
same language and satisfying
$$ \operatorname{Time}_{S_M}(n)=O((n+T(n))^2). $$

## Facts & Assumptions

**Given:** A fixed deterministic multitape machine $M$ with $\operatorname{Time}_M(n)=O(T(n))$.

[L1] Every fixed multitape machine has an equivalent deterministic one-tape simulator, by [[thm-multitape-machines-have-one-tape-simulations]].

[L2] On an input $w$, if the fixed multitape machine runs for $t$ steps, the
standard simulator runs for at most $c_M(|w|+t+1)^2$ steps, by
[[lem-multitape-simulation-has-quadratic-time-overhead]].

[L3] Big-$O$ compares functions up to eventual constant factors, by [[def-asymptotic-resource-comparison]].

[L4] The class notation DTIME records deterministic decision procedures within an asymptotic time bound, by [[def-dtime-ntime-dspace-and-nspace]].

## Proof

**Proof technique:** direct.

1.1 By [L1], choose the one-tape simulator $S_M$ that reproduces the accept, reject, and divergence behavior of $M$ on every input. [L1, given, construct]

2.1 For an input $w$ of length $n$, let $t=\operatorname{time}_M(w)$. The quadratic-overhead lemma [L2] gives $\operatorname{time}_{S_M}(w)\le c_M(|w|+t+1)^2$ for a constant $c_M$ depending only on $M$. Because $t\le \operatorname{Time}_M(n)$ and $|w|=n$, the hypothesis and [L3] imply $\operatorname{time}_{S_M}(w)=O((n+T(n))^2)$. Taking the maximum over all $w$ of length $n$ yields $\operatorname{Time}_{S_M}(n)=O((n+T(n))^2)$. [L2, L3, step 1.1]

3.1 The simulator from step 1.1 decides the same language as $M$, and step 2.1 gives the quantitative bound. Therefore the language decided by $M$ also lies in the one-tape deterministic time class described by [L4]. [L4, step 1.1, step 2.1] ∎
