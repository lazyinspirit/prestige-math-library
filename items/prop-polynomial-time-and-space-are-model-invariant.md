---
id: prop-polynomial-time-and-space-are-model-invariant
kind: proposition
title: "Polynomial-time and polynomial-space computation are invariant across standard machine models"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-multitape-to-single-tape-time-simulation, thm-multitape-to-single-tape-space-simulation]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 7. Time Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/time"
---

## Statement

For deterministic single-tape and fixed-multitape Turing-machine models, the
notions of polynomial-time computation and polynomial-space computation define
the same language classes.

## Facts & Assumptions

**Given:** A language decided on one of the two standard deterministic Turing-machine models named in the statement.

[L1] Multitape time-$T$ computations have single-tape simulations in $O((n+T(n))^2)$ time, by [[thm-multitape-to-single-tape-time-simulation]].

[L2] Multitape space-$S$ computations have single-tape simulations in $O(n+S(n))$ space, by [[thm-multitape-to-single-tape-space-simulation]].

## Proof

**Proof technique:** direct.

1.1 Suppose a language is decided by a deterministic multitape machine in time bounded by a polynomial $p(n)$. By [L1], there is a single-tape decider running in time $O((n+p(n))^2)$, and $(n+p(n))^2$ is still a polynomial. Thus polynomial time on multitape machines implies polynomial time on one tape. [L1, given]

1.2 Conversely, every one-tape machine is already a special case of a multitape machine, so any one-tape polynomial-time algorithm is automatically a multitape polynomial-time algorithm. [given]

1.3 For space, [L2] shows that a multitape polynomial-space decider has a single-tape decider using $O(n+s(n))$ space, which is still polynomial whenever $s$ is polynomial. The reverse implication is immediate because one tape is a special multitape case. [L2, given]

2.1 Steps 1.1 and 1.2 prove model invariance for polynomial time, and step 1.3 proves it for polynomial space. Therefore the two standard models define the same polynomial-time and polynomial-space language classes. [step 1.1, step 1.2, step 1.3] ∎
