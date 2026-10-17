---
id: lem-compact-set-in-open-neighborhood-has-uniform-radius
kind: lemma
title: "A compact set inside an open set has a uniform neighborhood radius"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-metric-compactness
  - def-metric-topology
  - def-metric-ball
  - def-metric-space
  - def-euclidean-inner-product
  - lem-metrics-on-rn
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-compactness-is-intrinsic
  - lem-finite-set-has-max
  - def-max-min
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. R. Conn, K. Scheinberg, and L. N. Vicente, Introduction to Derivative-Free Optimization, §§2.1–2.2 and ch. 8"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/77202/1/18.pdf
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, §§3.1–3.6 and Nelder–Mead discussion"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
verification:
  precheck: pass
---

## Statement

Let $K$ be compact in Euclidean $\mathbb R^n$ and let $V\subseteq\mathbb R^n$ be open with $K\subseteq V$. There is $\delta>0$ such that for every $x\in K$, if $\|y-x\|_2<\delta$, then $y\in V$. If $K=\emptyset$, any positive $\delta$ works.

## Facts & Assumptions

**Given:** Compactness and openness in the Euclidean metric ([[def-metric-compactness]], [[def-metric-topology]], [[lem-metrics-on-rn]]); compactness is intrinsic to the subspace metric ([[lem-compactness-is-intrinsic]]).

[F1] For each $x\in V$, openness gives $r>0$ with $B(x,2r)\subseteq V$ ([[def-metric-topology]], [[def-metric-ball]]).

[F2] Every open cover of compact $K$ has a finite subcover ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]]).

## Proof

1.1 If $K=\emptyset$, take $\delta=1$. Otherwise form the family of all balls $B(x,r)$ with $x\in K$, $r>0$, and $B(x,2r)\subseteq V$. By [F1] this family covers $K$; [F2] supplies a finite subcover $B(x_i,r_i)$, $1\le i\le q$. [given, F1, F2, construct]

2.1 Let $\delta=\min_{1\le i\le q}r_i>0$. Given $x\in K$ and $\|y-x\|_2<\delta$, choose a covering ball containing $x$. Then for its index $i$, $\|y-x_i\|_2\le\|y-x\|_2+\|x-x_i\|_2<\delta+r_i\le2r_i$, so $y\in B(x_i,2r_i)\subseteq V$. The finite minimum is positive, proving the claim. [step 1.1, given, algebra] ∎

