---
id: lem-bounded-discounted-return-converges
kind: lemma
title: "Absolute convergence and tail bound for bounded discounted rewards"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - thm-geometric-series
  - thm-direct-comparison-test
  - def-series
  - lem-series-tail-invariance
  - lem-series-linearity
  - thm-nonnegative-series-bounded-partial-sums
  - lem-finite-sum-laws
  - lem-of-abs-value
  - lem-limit-preserves-order
  - lem-geometric-sequence-null
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§3.7, discounted return and state-value definition; the bounded-reward tail estimate is proved locally here."
---

## Statement

Let $M\ge0$, $0\le\gamma<1$, and let $(\rho_j)_{j\ge1}$ be any real sequence with $|\rho_j|\le M$. Then the series

$$ \sum_{j=0}^{\infty}\gamma^j\rho_{j+1} $$

converges absolutely; write $G$ for its sum. Every partial sum and the limit satisfy

$$ \left|\sum_{j=0}^{N-1}\gamma^j\rho_{j+1}\right|\le\frac{M}{1-\gamma}, \qquad |G|\le\frac{M}{1-\gamma}. $$

For every integer $N\ge0$,

$$ \left|G-\sum_{j=0}^{N-1}\gamma^j\rho_{j+1}\right|\le\frac{M\gamma^N}{1-\gamma}, $$

where the partial sum at $N=0$ is empty and $\gamma^0=1$, including when $\gamma=0$.

## Statement references

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

## Facts & Assumptions

**Given:** $M\ge0$, $0\le\gamma<1$, and a real sequence $(\rho_j)_{j\ge1}$ with $|\rho_j|\le M$.

[F1] [[thm-geometric-series]]: for $0\le\gamma<1$, $\sum_{j=0}^{\infty}\gamma^j=1/(1-\gamma)$, with the series beginning at $j=0$.

[F2] [[thm-direct-comparison-test]]: if $0\le a_j\le b_j$ and $\sum b_j$ converges, then $\sum a_j$ converges.

[F3] [[lem-series-linearity]] and [[lem-series-tail-invariance]]: a convergent geometric series can be scaled and shifted; its tail beginning at $N$ has sum $\gamma^N/(1-\gamma)$.

[F4] [[lem-of-abs-value]] and [[lem-finite-sum-laws]]: the absolute value of a finite sum is at most the sum of the absolute values, and finite sums preserve termwise upper bounds.

[F5] [[lem-geometric-sequence-null]]: $\gamma^N\to0$ for $0\le\gamma<1$.

[F6] [[lem-limit-preserves-order]]: if two real sequences converge and one is eventually at most the other, their limits satisfy the same non-strict inequality.

[F7] [[thm-nonnegative-series-bounded-partial-sums]]: for a convergent series of nonnegative terms, every finite partial sum is at most its sum.

## Proof

1.1 For every $j\ge0$, $0\le\gamma^j|\rho_{j+1}|\le M\gamma^j$. By [F1] and the scaling part of [F3], the majorant series $\sum_{j\ge0}M\gamma^j$ converges (and when $M=0$ it is the zero series); [F2] gives convergence of $\sum_{j\ge0}\gamma^j|\rho_{j+1}|$. Thus the stated series converges absolutely by definition of absolute convergence. [given, F1, F2, F3]

1.2 Every finite partial sum satisfies $\left|\sum_{j=0}^{N-1}\gamma^j\rho_{j+1}\right|\le M\sum_{j=0}^{N-1}\gamma^j\le M\sum_{j=0}^{\infty}\gamma^j=M/(1-\gamma)$. The second inequality is [F7] applied to the nonnegative geometric series in [F1]. At $N=0$ the sum is empty and the inequality holds as well. [given, F1, F4, F7, algebra]

2.1 For $K\ge N$, [F4] gives $\left|\sum_{j=N}^{K-1}\gamma^j\rho_{j+1}\right|\le M\sum_{j=N}^{K-1}\gamma^j\le M\sum_{j=N}^{\infty}\gamma^j=M\gamma^N/(1-\gamma)$, where [F7] applies to the shifted geometric series and [F3] evaluates its sum. The finite tail sums converge to $G-\sum_{j<N}\gamma^j\rho_{j+1}$ by step 1.1, and each lies between the negatives and positives of the displayed bound; [F6] passes both inequalities to the limit. Therefore the required tail estimate holds. [step 1.1, F3, F4, F6, F7]

3.1 Taking $N=0$ in step 2.1 gives $|G|\le M/(1-\gamma)$. The right side of the tail bound tends to zero by [F5], so the partial sums converge to $G$ with the stated uniform remainder control. [step 2.1, F5] ∎

