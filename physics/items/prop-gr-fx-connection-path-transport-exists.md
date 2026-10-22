---
id: prop-gr-fx-connection-path-transport-exists
kind: proposition
title: Existence and uniqueness of transport along a piecewise-smooth path
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
dependency_roles:
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §3.3 Parallel transport"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.3, the parallel-transport equation along a curve and its initial-value formulation."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, Chapter 3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 3, the covariant derivative of vector components along a curve; the finite-dimensional ODE argument is supplied by the exact linked theorem."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $n\ge1$ and let $0=t_0<t_1<\cdots<t_m=1$ be a finite partition. For each $j$, let $A_j:[t_{j-1},t_j]\to M_n(\mathbb R)$ be continuous. There is a unique continuous function $U:[0,1]\to M_n(\mathbb R)$ that is $C^1$ on each partition interval, satisfies $U'(t)=-A_j(t)U(t)$ in its interior, and has $U(0)=I_n$. Derivatives at interval endpoints are the corresponding one-sided derivatives.

## Statement references

[[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]

## Facts & Assumptions

**Given:** A positive integer $n$, a finite partition of $[0,1]$, one continuous matrix coefficient on each closed subinterval, and the initial matrix $I_n$.

[F1] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]: a continuous matrix coefficient on a compact interval gives a unique global solution to the linear matrix initial-value problem.

## Proof

**Proof technique:** direct.

1.1 Apply [F1] on $[t_0,t_1]$ with initial matrix $I_n$ to obtain the unique $C^1$ solution on the first interval. [given, F1, construct]

2.1 For each $j=2,\ldots,m$, apply [F1] on $[t_{j-1},t_j]$ with initial value equal to the terminal value already constructed at $t_{j-1}$. Adjacent solutions agree at their shared endpoint by construction, so the finite family pastes to a continuous piecewise-$C^1$ solution on $[0,1]$. [given, F1, step 1.1, construct]

3.1 Any other such function has initial value $I_n$ on the first interval, so it agrees there by [F1]. If it agrees through $t_{j-1}$, then it has the same initial value as the constructed solution on the $j$th interval, so [F1] makes them agree there. Induction through the finite partition proves uniqueness on all of $[0,1]$. [given, F1, step 1.1, step 2.1, induction] ∎