---
id: lem-finite-event-conditional-expectation-formula
kind: lemma
title: "Conditional expectation on positive-probability events in finite spaces"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
  - def-conditional-expectation-given-a-sigma-algebra
  - cor-expectation-agrees-with-the-finite-weighted-sum
  - lem-finite-sum-laws
  - lem-finite-sum-reindexing-and-fubini
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, 2nd ed., Chapter 4 §4.1"
      url: "https://chance.dartmouth.edu/teaching_aids/books_articles/probability_book/Chapter4.pdf"
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, 2nd ed., Chapter 6 §6.1, Definition 6.2 and Theorem 6.5"
      url: "https://chance.dartmouth.edu/teaching_aids/books_articles/probability_book/Chapter6.pdf"
---

## Statement

Let $(\Omega,w)$ be a finite probability space and $X:\Omega\to\mathbb R$. For any event $B\subseteq\Omega$ with $\mathbb P(B)>0$, define
$$\mathbb E[X\mid B]:=\frac{1}{\mathbb P(B)}\sum_{\omega\in B}X(\omega)w(\omega).$$
If $A\subseteq\Omega$ has $0<\mathbb P(A)<1$, then the function equal to $\mathbb E[X\mid A]$ on $A$ and $\mathbb E[X\mid A^c]$ on $A^c$ is a version of $\mathbb E[X\mid\sigma(A)]$ under the integral characterization. More generally, if $A_1,\ldots,A_r$ is a finite partition of $\Omega$ into events of positive probability, then
$$\mathbb E[X]=\sum_{q=1}^r\mathbb P(A_q)\mathbb E[X\mid A_q].$$

## Facts & Assumptions

**Given:** A finite probability space $(\Omega,w)$, a real function $X$ on $\Omega$, an event $A$ with $0<\mathbb P(A)<1$, and a finite positive-probability partition $A_1,\ldots,A_r$ of $\Omega$.

[F1] [[def-finite-probability-space-and-event]]: $\Omega$ is finite, weights are nonnegative and sum to one, and event probabilities are sums of weights.

[F2] [[def-expectation-on-a-finite-probability-space]]: $\mathbb E[X]=\sum_{\omega\in\Omega}X(\omega)w(\omega)$.

[F3] [[def-conditional-expectation-given-a-sigma-algebra]]: a version given $\sigma(A)$ is measurable with respect to that sigma-algebra and has the same integral as $X$ on every event in it.

[F4] [[cor-expectation-agrees-with-the-finite-weighted-sum]]: on a finite probability space, the integral of a finite-valued function equals its finite weighted sum; applying this to $1_E X$ gives the integral of $X$ over any event $E$.

[F5] [[lem-finite-sum-laws]]: finite sums distribute over addition and real scaling.

[F6] [[lem-finite-sum-reindexing-and-fubini]]: sums over finite sets may be split over disjoint unions, and their values are invariant under bijective reindexing.

## Proof

1.1 For any event $B$ with $\mathbb P(B)>0$, the displayed definition is a finite real sum divided by a positive real. Its conditional weights $w_B(\omega)=w(\omega)/\mathbb P(B)$ on $B$ are nonnegative and sum to one, since $\sum_{\omega\in B}w_B(\omega)=\mathbb P(B)/\mathbb P(B)=1$. Thus this formula is the expectation under the probability law restricted and normalized to $B$. [F1, F2, F5, given, algebra]

2.1 Define $T(\omega)=\mathbb E[X\mid A]$ for $\omega\in A$ and $T(\omega)=\mathbb E[X\mid A^c]$ for $\omega\in A^c$. The four events in $\sigma(A)$ are $\emptyset,A,A^c,\Omega$, so $T$ is $\sigma(A)$-measurable. For either cell $B\in\{A,A^c\}$, its finite weighted integral satisfies $\int_B T\,dP=\mathbb P(B)\mathbb E[X\mid B]=\sum_{\omega\in B}X(\omega)w(\omega)=\int_B X\,dP$ by step 1.1 and [F4]. Splitting over the cells using [F6] proves the same identity for every event in $\sigma(A)$. Since $\Omega$ is finite, $X$ and $T$ have finite weighted absolute sums and are integrable. Therefore [F3] makes $T$ a conditional-expectation version. [F1, F2, F3, F4, F6, step 1.1, given]

2.2 For the partition $A_1,\ldots,A_r$, disjoint splitting [F6] gives $\mathbb E[X]=\sum_{q=1}^r\sum_{\omega\in A_q}X(\omega)w(\omega)$. By step 1.1, each inner sum is $\mathbb P(A_q)\mathbb E[X\mid A_q]$, proving the partition identity. [F2, F5, F6, step 1.1, given, algebra]

3.1 All conditional values and sums above are finite and every denominator is explicitly positive, so the proof uses no general conditional-expectation existence theorem or choice axiom. [step 1.1, step 2.1, step 2.2, given] ∎
