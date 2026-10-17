---
id: lem-pde-box-control-set-basic-properties
kind: lemma
title: A pointwise L2 box is nonempty, bounded, closed, and convex
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-pde-box-control-set
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–5: distributed box controls and admissible cell averages."
---

## Statement

Let $E$ be as in [[def-pde-box-control-set]], and let $q_a,q_b\in L^2(E;\mathbb R)$ satisfy $q_a\le q_b$ almost everywhere. Then $Q_{ad}(q_a,q_b)$ is nonempty, convex, norm closed, and bounded in $L^2(E)$.

## Facts & Assumptions

**Given:** The finite-measure control domain $E$, bounds $q_a,q_b\in L^2(E)$ with $q_a\le q_b$ almost everywhere, and the definition of $Q_{ad}$.

[A1] $Q_{ad}=\{q\in L^2(E):q_a\le q\le q_b\text{ a.e.}\}$ ([[def-pde-box-control-set]]).

## Proof

1.1 The control $q_a$ belongs to $Q_{ad}$ because $q_a\le q_a\le q_b$ almost everywhere, so $Q_{ad}$ is nonempty. If $q,r\in Q_{ad}$ and $0\le t\le1$, then $q_a\le tq+(1-t)r\le q_b$ almost everywhere; hence the convex combination is in $Q_{ad}$. The pointwise inequality also gives $|q|\le |q_a|+|q_b|$ almost everywhere for each $q\in Q_{ad}$, so $\|q\|_{L^2}\le\|q_a\|_{L^2}+\|q_b\|_{L^2}$ and the box is bounded. [A1, given, algebra]

2.1 Suppose $q_n\in Q_{ad}$ and $q_n\to q$ in $L^2(E)$. For almost every $x$, $q_n(x)\ge q_a(x)$, so $(q_a-q)^+\le |q_n-q|$ almost everywhere, where $s^+=\max\{s,0\}$. Therefore $\|(q_a-q)^+\|_2\le\|q_n-q\|_2\to0$ and $q\ge q_a$ almost everywhere. Similarly $(q-q_b)^+\le|q-q_n|$ gives $q\le q_b$ almost everywhere. Thus $q\in Q_{ad}$ and the box is norm closed. [A1, given, algebra] ∎
