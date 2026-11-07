---
id: def-short-interval-mean-square-average
kind: definition
title: "Mean-square average over interval starting points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-short-interval-sum-of-an-arithmetic-function
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-measure
  - def-measure-space
  - def-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-nonnegative-lebesgue-integral
  - def-nonnegative-simple-measurable-function
  - def-extended-real-valued-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - lem-well-definedness-of-the-simple-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals"
      url: "https://arxiv.org/pdf/2607.15574v1"
---

## Definition

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$). Let $\lambda$ be one-dimensional Lebesgue measure, namely Lebesgue outer measure restricted to its Carathéodory-measurable sets. Let $f:\mathbb Z_{>0}\to\mathbb C$ satisfy $|f(n)|\le1$ for every $n\ge1$. For real $X\ge1$ and $h>0$, define the mean-square average over starting points by

$$ \mathcal M_2(f;X,h):=\frac1X\int_X^{2X}\left|\frac{S_f(x,h)}h\right|^2\,dx. $$

Here $dx$ denotes integration with respect to $\lambda$. The interval $[X,2X]$ is equipped with the restricted measure space whose measurable sets are $E\cap[X,2X]$ for Lebesgue-measurable $E\subseteq\mathbb R$, and whose measure assigns $\lambda(E\cap[X,2X])$ to each such set; $\int_X^{2X}$ is the nonnegative Lebesgue integral on this space. This integral is well-defined and finite: only the finitely many integers $n$ with $X\le n\le2X+h$ can occur. The corresponding finitely many endpoints $n-h$ and $n$ partition $[X,2X]$ into finitely many open subintervals and singleton sets, on each of which $S_f(x,h)$ and its squared modulus are constant. These cells are measurable and have finite measure, so the integrand is measurable and finite-range. Also $|S_f(x,h)|\le h+1$, so the integrand is bounded by $(1+1/h)^2$.

## Definition references

[[def-short-interval-sum-of-an-arithmetic-function|closed short-interval sum]]

[[def-countable-choice|Countable Choice assumption used by the Lebesgue-measure construction]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra|standard Lebesgue measure on the real line]]

[[def-sigma-algebra|sigma-algebra for the restricted measure space]]

[[def-measure|measure axioms for the integral]]

[[def-measure-space|measure-space convention for integration]]

[[thm-lebesgue-measure-is-a-complete-measure|countable-choice construction of the Lebesgue measure space]]

[[thm-lebesgue-measure-of-a-box-of-every-kind|bounded intervals are measurable and have finite length measure]]

[[def-extended-real-valued-measurable-function|measurability through measurable superlevel sets]]

[[def-nonnegative-simple-measurable-function|nonnegative simple measurable function]]

[[def-nonnegative-lebesgue-integral|nonnegative Lebesgue integral]]

[[def-integral-of-a-nonnegative-simple-function|finite-sum formula for a simple integral]]

[[lem-well-definedness-of-the-simple-integral|independence of the simple representation]]

[[prop-the-nonnegative-integral-agrees-with-the-simple-integral|agreement with the nonnegative Lebesgue integral]]

[Menon, Theorems 1.1–1.4 and §1.2, PDF pp. 2–4](https://arxiv.org/pdf/2607.15574v1)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a function $f:\mathbb Z_{>0}\to\mathbb C$ with $|f(n)|\le1$, and real parameters $X\ge1$, $h>0$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]])

[F1] $S_f(x,h)$ is the finite sum of $f(n)$ over positive integers $n$ with $x\le n\le x+h$. ([[def-short-interval-sum-of-an-arithmetic-function]])

[F2] On the real line, Lebesgue measure is Lebesgue outer measure restricted to the Carathéodory-measurable sets. ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]])

[F3] Under $\mathrm{AC}_\omega$, the Lebesgue measurable sets form a sigma-algebra and the restricted Lebesgue outer measure is a measure. ([[thm-lebesgue-measure-is-a-complete-measure]])

[F4] Under $\mathrm{AC}_\omega$, every bounded closed, open, or mixed-face interval in $\mathbb R$ is Lebesgue measurable and has measure equal to its length, including measure $0$ for a singleton. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F5] A sigma-algebra is closed under finite unions. ([[def-sigma-algebra]])

[F6] A nonnegative extended-real-valued function is measurable when its strict superlevel sets are measurable. ([[def-extended-real-valued-measurable-function]])

[F7] A measurable function into $[0,+\infty)$ is nonnegative simple when it has finite range. ([[def-nonnegative-simple-measurable-function]])

[F8] For a nonnegative simple function represented on finitely many disjoint measurable sets, its simple integral is the sum of each value times the measure of its level set. ([[def-integral-of-a-nonnegative-simple-function]])

[F9] A measure is countably additive on pairwise disjoint measurable sets. ([[def-measure]])

[F10] For every nonnegative simple measurable function, the nonnegative Lebesgue integral equals its simple integral. ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

[F11] A measure space consists of a set, a sigma-algebra on it, and a measure on that sigma-algebra. ([[def-measure-space]])

## Proof

**Proof technique:** direct.

1.1 By [F1], whenever $x\in[X,2X]$, every integer in $S_f(x,h)$ lies in the finite set $\mathbb Z_{>0}\cap[X,2X+h]$. The membership of each such $n$ is determined by $n-h\le x\le n$, so the finitely many points $n-h,n$ give a finite partition of $[X,2X]$ into open intervals and singleton cells on which the sum is constant. [given, F1, algebra]

1.2 By [A1], [F2], and [F3], the Lebesgue-measurable sets form a sigma-algebra and $\lambda$ is a measure; by [A1] and [F4] every cell in the partition is measurable with finite measure. Intersecting the sigma-algebra with $[X,2X]$ gives a sigma-algebra on the interval, and restricting $\lambda$ gives a measure there by [F3] and [F9]; this is a measure space by [F11]. [given, A1, F2, F3, F4, F9, F11]

2.1 The function $x\mapsto |S_f(x,h)/h|^2$ is constant on each of the finitely many cells from step 1.1, so it has finite range. Each strict superlevel set is a finite union of cells and is measurable by step 1.2 and [F5]; hence [F6] makes the function measurable, and [F7] makes it nonnegative simple. [given, F5, F6, F7, step 1.1, step 1.2]

2.2 At most $\lfloor h\rfloor+1\le h+1$ positive integers lie in any closed interval of length $h$, so $|S_f(x,h)|\le h+1$ and $0\le |S_f(x,h)/h|^2\le(1+1/h)^2$. Each level set is a finite union of finite-measure cells from step 1.2; pad each finite disjoint union with empty sets and use countable additivity [F9] to see every level-set measure is finite. The finite-sum formula [F8] then makes the simple integral finite. [given, F4, F8, F9, step 1.2, algebra]

3.1 By [F10], the nonnegative Lebesgue integral equals this finite simple integral. Since the interval measure space in step 1.2 has total measure $\lambda([X,2X])=X$ by [F4] and $X\ge1$, division by $X$ is defined and $\mathcal M_2(f;X,h)$ is a finite nonnegative real. [given, F4, F10, step 1.2, step 2.2, algebra] ∎

