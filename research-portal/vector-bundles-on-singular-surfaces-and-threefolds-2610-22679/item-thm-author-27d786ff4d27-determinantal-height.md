---
title: External maximal-minor height bound for the component-scope example
status: draft
research_item: thm-author-27d786ff4d27-determinantal-height
dependency_level: 0
---

PDF p. 15: Theorem6.7 second Bertini application

## Prerequisites

None.

## Statement
For a matrix $M$ of size $m\times n$ over a Noetherian ring and proper ideal $I_t(M)$ of its $t$-minors,
$$\operatorname{ht}I_t(M)\leq(m-t+1)(n-t+1).$$
In particular a proper maximal-minor ideal for a $2\times3$ matrix has a prime over it of height at most two. This input is used only to establish the precise disconnected fixed-pair counterexample.

## Source contract
**Given:** The stated Noetherian ring, matrix and proper determinantal ideal.

**Goal:** Import the exact height bound needed for that example.

[F1] Bruns–Vetter, Determinantal Rings, section2.A, Theorem(2.1), with Lemma(2.3) used in its printed proof.

## External input
Import [F1], with its exact source record. No arbitrary prime-avoidance or expected-height assertion is substituted for this bound.
