---
id: lem-second-moment-limsup-positive-measure
kind: lemma
title: "A second-moment bound gives positive measure to a limsup"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-probability-measure
  - cor-cauchy-schwarz-for-random-variables
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, §2"
      url: "https://arxiv.org/pdf/0811.0809v3"
---

## Statement

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, let $\mathcal I$ be a countable index set, and let $E_a\in\mathcal F$ for each $a\in\mathcal I$. Let $F_1\subseteq F_2\subseteq\cdots$ be finite subsets whose union is $\mathcal I$. For integers $1\le M<N$, put

$$S_{M,N}:=\sum_{a\in F_N\setminus F_M}\mathbb P(E_a),\qquad D_{M,N}:=\sum_{a,b\in F_N\setminus F_M}\mathbb P(E_a\cap E_b).$$

If $S_{M,N}\to\infty$ as $N\to\infty$ for every fixed $M$, and there is a constant $C>0$ such that $D_{M,N}\le C(S_{M,N}^2+S_{M,N})$ for every $M<N$, then

$$\mathbb P\!\left(\bigcap_{M=1}^\infty\bigcup_{a\in\mathcal I\setminus F_M}E_a\right)\ge\frac1{2C},$$

where the event is the limsup along the exhaustion $(F_M)$.

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, §2](https://arxiv.org/pdf/0811.0809v3)

## Facts & Assumptions

**Given:** A probability space, a countable measurable-event family, an exhausting sequence of finite index sets, divergence on each tail, and the stated second-moment bound.

[F1] Cauchy–Schwarz holds for square-integrable random variables. ([[cor-cauchy-schwarz-for-random-variables]])

[F2] A probability measure is countably additive and finite, hence continuous from above on decreasing measurable event sequences. ([[def-probability-measure]])

## Proof




1.1 Fix $M<N$ and define $Z_{M,N}:=\sum_{a\in F_N\setminus F_M}\mathbf1_{E_a}$. Then $\mathbb E Z_{M,N}=S_{M,N}$ and $\mathbb E Z_{M,N}^2=D_{M,N}$ by finite expansion. Applying [F1] to $Z_{M,N}$ and the indicator of $\{Z_{M,N}>0\}$ gives $\displaystyle S_{M,N}^2\le\mathbb P\!\left(\bigcup_{a\in F_N\setminus F_M}E_a\right)D_{M,N}.$ [given, F1, algebra]

2.1 For each $M$, the tail divergence lets us choose $N>M$ with $S_{M,N}\ge1$. The hypothesis and step 1.1 yield $\displaystyle \mathbb P\!\left(\bigcup_{a\in F_N\setminus F_M}E_a\right)\ge\frac{S_{M,N}^2}{C(S_{M,N}^2+S_{M,N})}\ge\frac1{2C}.$ This finite union is contained in $\bigcup_{a\in\mathcal I\setminus F_M}E_a$, so the latter event has measure at least $1/(2C)$ for every $M$. [given, step 1.1, algebra, choose]

3.1 The events $\bigcup_{a\in\mathcal I\setminus F_M}E_a$ decrease as $M$ increases. Their intersection is the limsup along the exhaustion, so continuity from above in [F2] gives the asserted lower bound. [F2, step 2.1, algebra] ∎
