---
id: thm-integrability-is-necessary-for-an-iid-finite-mean-strong-law
kind: theorem
title: Integrability is necessary for an iid finite mean strong law
deps: ["def-identically-distributed-and-iid-random-variables", "cor-second-borel-cantelli-lemma-under-pairwise-independence", "lem-tail-sum-integrability-equivalence", "thm-kolmogorov-iid-l1-strong-law"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, Theorem 2.3.8 and §2.4
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

If IID real $(X_n)$ have $S_n/n$ converging almost surely to a finite, possibly random, limit $L$, then $\mathbb E|X_1|<\infty$ and $L=\mathbb EX_1$ almost surely.

## Facts & Assumptions

[F1] [[cor-second-borel-cantelli-lemma-under-pairwise-independence]]: Let $(A_n)_{n\in\mathbb N}$ be pairwise independent events with
$$\sum_{n=0}^\infty \mathbb P(A_n)=+\infty.$$
Then
$$\mathbb P(A_n\ \mathrm{i.o.})=1.$$

[F2] [[lem-tail-sum-integrability-equivalence]]: For a measurable $X:\Omega\to[0,\infty]$ on a probability space, $\sum_{n\ge1}\mathbb P(X>n)\le\mathbb EX\le1+\sum_{n\ge1}\mathbb P(X>n)$. Thus $\mathbb EX<\infty$ if and only if the tail series is finite.

[F3] [[thm-kolmogorov-iid-l1-strong-law]]: For IID real $(X_n)_{n\ge1}$ with $\mathbb E|X_1|<\infty$, $S_n/n\to\mu=\mathbb EX_1$ almost surely.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 On the given conull convergence event, for $n\ge2$ one has $X_n/n=S_n/n-((n-1)/n)(S_{n-1}/(n-1))\to L-L=0$. Therefore the events $A_n=\{|X_n|>n\}$ occur only finitely often almost surely. [given, algebra]

2.1 The events $A_n$ are independent because each belongs to the $\sigma$-algebra of its own coordinate. If $\sum_n\mathbb P(A_n)$ were infinite, F1 would make their limsup conull, contradicting step 1.1. The series is therefore finite, and identical laws turn it into $\sum_n\mathbb P(|X_1|>n)$. [F1, step 1.1]

3.1 F2 applied to step 2.1 gives $\mathbb E|X_1|<\infty$. Now F3 gives $S_n/n\to\mathbb EX_1$ almost surely. Uniqueness of a finite real limit on the intersection of the two conull events identifies L as claimed. [F2, F3, step 2.1] ∎
