---
id: ex-walds-equation-for-a-bounded-stopping-time
kind: example
title: Wald's equation for a bounded stopping time
status: published
origin: pipeline
deps: [cor-wald-first-equation-under-integrable-stopping]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., Wald's equation in §4.8", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Let $N\in\mathbb N$ with $N\ge1$, let $X_k$ be iid Bernoulli$(p)$, $0<p\le1$, and use the natural filtration $\mathcal F_n=\sigma(X_1,\ldots,X_n)$ (with $\mathcal F_0$ trivial). Set
$$\tau=\min\bigl(\inf\{k\ge1:X_k=1\},N\bigr).$$
Then
$$\mathbb E\tau=\frac{1-(1-p)^N}{p},\qquad \mathbb E\sum_{k=1}^\tau X_k=1-(1-p)^N=p\mathbb E\tau.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[cor-wald-first-equation-under-integrable-stopping]] applies because $\tau$ is a stopping time for the natural filtration and $\tau\le N$.

## Proof

1.1 For every $n$, the event $\{\tau\le n\}$ is determined by $X_1,\ldots,X_n$, so $\tau$ is a stopping time for the stated filtration; it is bounded by $N$. The event $\{\tau\ge k\}$ for $1\le k\le N$ says the first $k-1$ trials failed, so it has probability $(1-p)^{k-1}$. The tail sum therefore gives $$\mathbb E\tau=\sum_{k=1}^N(1-p)^{k-1} =\frac{1-(1-p)^N}{p},$$ including $p=1$, when the geometric sum is $1$. [F1]

2.1 The stopped sum is exactly the indicator that at least one of the first $N$ trials succeeds: after the first success the sum stops, while if all fail it is zero. Its expectation is $1-(1-p)^N$. Since $\mathbb EX_1=p$, F1 also gives it as $p\mathbb E\tau$, agreeing with step 1.1. The argument is choice-free. [F1, step 1.1] ∎
