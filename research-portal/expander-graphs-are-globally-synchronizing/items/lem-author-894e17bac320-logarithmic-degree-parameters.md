---
id: lem-author-894e17bac320-logarithmic-degree-parameters
title: Explicit parameters for the small-gamma logarithmic density
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - math:lem-ceiling-and-least-positive-integer-threshold
  - math:def-natural-logarithm
  - math:def-real-exponential-function-and-e
  - math:thm-exponential-is-strictly-increasing
dependency_roles:
  math:lem-ceiling-and-least-positive-integer-threshold: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $n$ be an even integer, $L=\log n\ge1000$, $\gamma=10^{-6}$, $p=\gamma L/n$, $M=n/2$, and $k=\lceil L/1000\rceil$ (the least integer at least $L/1000$). Then
$$0<p<1/2,\qquad L/1000\le k\le L/500\le M,\qquad Mp/k\ge1/4000.$$
Moreover, $\log4000<9$ and $9/500+10^{-6}<1/50$.

## Facts & Assumptions

[F1] The ceiling of a real $x$ is the least integer at least $x$, and belongs to $[x,x+1)$ ([[math:lem-ceiling-and-least-positive-integer-threshold]]).

[F2] The logarithm is inverse to the exponential ([[math:def-natural-logarithm]]).

[F3] The exponential is the everywhere convergent series $\exp(x)=\sum_{j\ge0}x^j/j!$ ([[math:def-real-exponential-function-and-e]]).

[F4] The exponential is strictly increasing ([[math:thm-exponential-is-strictly-increasing]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove the asserted conclusions.

1.1 Since $L\ge1000$, [F1] gives $L/1000\le k<L/1000+1\le L/500$. The series in [F3] has nonnegative terms at $L>0$, so $n=\exp(L)\ge1+L>L$ by [F2]. Thus $p<\gamma<1/2$ and $L/500<n/2=M$. Also $Mp/k=\gamma L/(2k)\ge250\gamma=1/4000$. [F1, F2, F3, given, algebra]

2.1 The partial sum of the series for $\exp(9)$ through degree 9 is $10661993/2240>4000$; all further terms are positive. By [F2] and [F4], this proves $\log4000<9$. Finally $9/500+10^{-6}=18001/1000000<20000/1000000=1/50$. [F2, F3, F4, algebra] ∎
