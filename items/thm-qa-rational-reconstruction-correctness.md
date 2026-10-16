---
id: thm-qa-rational-reconstruction-correctness
kind: theorem
title: Correctness of phase-sample rational reconstruction
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - alg-qa-rational-reconstruction-from-phase-sample
  - def-qa-rational-phase-reconstruction
  - def-qa-circular-phase-distance
  - lem-qa-finite-rational-legendre-criterion
  - lem-qa-rational-reconstruction-candidate-uniqueness
justified_by: []
axiom_use: "None; the proof uses finite integer and continued-fraction arguments."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§5, PDF pp. 16–19; phase approximation and continued fractions"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; rational reconstruction"
---

## Statement

Let integers $N\ge1$, $m\ge0$, $Q=2^m$, and $1\le r\le N$ satisfy $Q>4N^2$, and let $k\in\mathbb Z$ with $0\le k<r$ and $\gcd(k,r)=1$. Let $y\in\{0,\ldots,Q-1\}$ be any nearest grid label to phase $k/r$ in circular distance, meaning $\min_{z\in\mathbb Z}|k/r-y/Q-z|\le1/(2Q)$. Then [[alg-qa-rational-reconstruction-from-phase-sample]] returns $k/r$. For every phase label $y$, there is at most one passing candidate with denominator at most $N$.

## Facts & Assumptions

**Given:** Reduced $k/r\in[0,1)$ with $r\le N$, $Q=2^m>4N^2$ for an integer $m\ge0$, and a nearest circular grid label $y$.

[F1] Circular distance is $d_{\mathbb T}(\theta,y/Q)=\min_{z\in\mathbb Z}|\theta-y/Q-z|$; for $\theta\in[0,1)$, a nearest label has distance at most $1/(2Q)$ ([[def-qa-circular-phase-distance]]).

[F2] The reconstruction routine tests the exact condition $2|yq-pQ|\le q$ on normalized finite-CF convergents with $q\le N$ ([[alg-qa-rational-reconstruction-from-phase-sample]], [[def-qa-rational-phase-reconstruction]]).

[F3] For reduced $A/D$ with $D>2q$, a reduced $p/q$ satisfying $|A/D-p/q|<1/(2q^2)$ is a convergent of the normalized finite expansion ([[lem-qa-finite-rational-legendre-criterion]]).

[F4] At most one reduced fraction of denominator at most $N$ passes the exact reconstruction window when $Q>4N^2$ ([[lem-qa-rational-reconstruction-candidate-uniqueness]]).

## Proof

1.1 If $k=0$, reducedness forces $r=1$. The only nearest circular grid label is $y=0$, so $y/Q=0$ and its normalized finite expansion is $[0]$ with terminal convergent $0/1$. This convergent has denominator $1\le N$ and passes the exact test, so [F2] and [F4] return $0/1=k/r$. [given, F2, F4, algebra]

1.2 Suppose $k>0$. The distance from $k/r$ to either endpoint $0,1$ is at least $1/r\ge1/N>1/(2Q)$, by $Q>4N^2$. Therefore a nearest circular label cannot cross an endpoint: if $y/Q$ were on the other side of $0$ or $1$, the circular distance would be at least the distance of $k/r$ from that endpoint, contradicting [F1]. Thus $|y/Q-k/r|\le1/(2Q)$. [given, F1, algebra]

2.1 Reduce $y/Q$ to $A/D$ with $D>0$. If $A/D=k/r$, its normalized finite expansion terminates at that fraction; its terminal convergent is $k/r$, whose denominator is at most $N$, and step 1.2 gives $2|yr-kQ|\le r$. Thus it passes [F2], and uniqueness [F4] makes the algorithm return it. [given, F2, F4, step 1.2, algebra]

2.2 If $A/D\ne k/r$, then $|Ar-kD|$ is a positive integer, so $|A/D-k/r|\ge1/(Dr)$. Combining with step 1.2 gives $D\ge2Q/r>8N^2/r\ge8r>2r$, because $r\le N$. Also $Q>4N^2\ge4r^2$ gives $|A/D-k/r|\le1/(2Q)<1/(8r^2)<1/(2r^2)$. Applying [F3] with $p/q=k/r$ shows it is a convergent of $A/D$. [given, F3, step 1.2, algebra]

3.1 The same linear error bound in step 1.2 gives $2|yr-kQ|\le r$. Therefore this convergent passes the exact test and denominator bound in [F2]. By [F4] it is the unique accepted candidate, so the algorithm returns $k/r$. The two cases establish correctness and candidate uniqueness. [F2, F4, step 1.2, step 2.1, step 2.2, algebra] ∎
