---
id: ex-borel-cantelli-eventually-no-large-deviations
kind: example
title: "A summable tail bound becomes an almost-sure eventual bound"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-first-borel-cantelli-lemma-for-events]
proof_strategy: direct
sources:
  references: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

Let $(X_n)_{n\in\mathbb N}$ be real random variables and let $(a_n)_{n\in\mathbb N}$
be positive real numbers. If
$$\sum_{n=0}^\infty \mathbb P(|X_n|>a_n)<+\infty,$$
then with probability $1$ only finitely many indices $n$ satisfy $|X_n|>a_n$.
Equivalently, almost surely there is $N$ such that $|X_n|\le a_n$ for every
$n\ge N$.

## Facts & Assumptions

**Given:** Real random variables $X_n$ and positive thresholds $a_n$ with
$\sum_{n=0}^\infty \mathbb P(|X_n|>a_n)<+\infty$.

[L1] If the probabilities of events are summable, then the corresponding events
occur infinitely often with probability $0$.
([[cor-first-borel-cantelli-lemma-for-events]])

## Verification

**Proof technique:** direct.

1.1 Apply [L1] to the events $A_n:=\{|X_n|>a_n\}$. Then $$\mathbb P(|X_n|>a_n\ \mathrm{i.o.})=0.$$ [L1]

2.1 The complement of the event in step 1.1 is exactly the event that there is an index $N$ such that $|X_n|\le a_n$ for all $n\ge N$. Hence that eventual bound holds almost surely. [step 1.1, algebra] ∎
