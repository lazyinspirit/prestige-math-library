---
id: lem-independent-copy-symmetrization-tail-bounds
title: "Tail comparisons under independent-copy symmetrization"
kind: lemma
status: published
origin: pipeline
deps: ["lem-symmetrization-for-independent-random-series", "thm-continuity-from-below-for-measures"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Appendix A, Lemma 4.18 and proof, pp. 9\u201310; symmetric-interval variant"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf
proof_strategy: "Triangle inequality gives the upper bound. The independent event {|X|>t+M, |X-prime|<=M} gives the lower bound. Continuity from below on [-M,M] supplies M. This symmetric interval variant of the median estimate avoids adding median machinery."
---

## Statement

Let $X'$ be an independent copy of a real random variable $X$. For every $t>0$,
$$\mathbb P(|X-X'|>t)\le2\mathbb P(|X|>t/2).$$
There exists a finite $M\ge0$ with $\mathbb P(|X|\le M)\ge1/2$; for every such $M$,
$$\mathbb P(|X-X'|>t)\ge\tfrac12\mathbb P(|X|>t+M).$$

## Facts & Assumptions

[F1] [[lem-symmetrization-for-independent-random-series]]: Given an independent sequence $(X_n)_{n\ge1}$ on $(\Omega,\mathcal F,\mathbb P)$, form the product probability space $(\Omega^2,\mathcal F\otimes\mathcal F,\mathbb P\otimes\mathbb P)$. Write $U_n(\omega,\omega')=X_n(\omega)$, $V_n(\omega,\omega')=X_n(\omega')$, and $Z_n=U_n-V_n$. Then $(U_n)$ and $(V_n)$ are independent copies of the whole sequence, and the $Z_n$ are independent symmetric real random variables. Almost-sure convergence of $\sum_nX_n$ implies almost-sure convergence of $\sum_nZ_n$. If $|X_n|\le A$ almost surely for every $n$, with $0\le A<\infty$, then $|Z_n|\le2A$ almost surely, $\mathbb EZ_n=0$, and $\operatorname{Var}(Z_n)=2\operatorname{Var}(X_n)$.

[F2] [[thm-continuity-from-below-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then $\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$ No finiteness hypothesis is required.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 The triangle inequality gives $\{|X-X\prime|>t\}\subseteq\{|X|>t/2\}\cup\{|X\prime|>t/2\}$. The union bound and equality of the two marginal laws give the upper estimate. Independent copies can be realized on the two-factor product described by symmetrization. [F1, given, algebra]

2.1 The intervals $[-m,m]$ increase to $\mathbb R$ as positive integers $m$ increase. Continuity from below gives $\mathbb P(|X|\le m)\to1$, so there is a suitable finite $M$. For any such $M$, the event $\{|X|>t+M,\ |X\prime|\le M\}$ implies $|X-X\prime|>t$. Independence makes its probability $\mathbb P(|X|>t+M)\mathbb P(|X|\le M)$, giving the lower bound. This includes $M=0$ when allowed by the law. [F2, step 1.1, algebra] ∎
