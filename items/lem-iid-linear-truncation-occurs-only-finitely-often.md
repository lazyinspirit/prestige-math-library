---
id: lem-iid-linear-truncation-occurs-only-finitely-often
kind: lemma
title: Iid linear truncation occurs only finitely often
deps: ["def-truncation-at-a-fixed-level", "lem-tail-sum-integrability-equivalence", "cor-first-borel-cantelli-lemma-for-events"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For identically distributed integrable real $(X_n)$, put $Y_n=X_n\mathbf1_{\{|X_n|\le n\}}$. Almost surely $Y_n=X_n$ for all sufficiently large $n$. Consequently $n^{-1}\sum_{k=1}^n(X_k-Y_k)\to0$. Independence is unnecessary.

## Facts & Assumptions

[F1] [[lem-tail-sum-integrability-equivalence]]: For a measurable $X:\Omega\to[0,\infty]$ on a probability space, $\sum_{n\ge1}\mathbb P(X>n)\le\mathbb EX\le1+\sum_{n\ge1}\mathbb P(X>n)$. Thus $\mathbb EX<\infty$ if and only if the tail series is finite.

[F2] [[cor-first-borel-cantelli-lemma-for-events]]: Let $(A_n)_{n\in\mathbb N}$ be events in a probability space. If
$$\sum_{n=0}^\infty \mathbb P(A_n)<+\infty,$$
then
$$\mathbb P(A_n\ \mathrm{i.o.})=0.$$

No independence hypothesis is needed.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The common law gives $\mathbb P(|X_n|>n)=\mathbb P(|X_1|>n)$. By F1 their sum is at most $\mathbb E|X_1|<\infty$. [F1]

2.1 Apply F2 to these events. Outside their null limsup, a finite $N(\omega)$ bounds all exceptional indices and $X_k-Y_k=0$ for $k>N(\omega)$. Hence for $n>N(\omega)$ the numerator is the fixed finite real sum $\sum_{k\le N(\omega)}(X_k-Y_k)$, and its quotient by $n$ tends to zero. [F2] ∎
