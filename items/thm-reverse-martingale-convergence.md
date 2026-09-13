---
id: thm-reverse-martingale-convergence
kind: theorem
title: Reverse martingale convergence
status: draft
origin: pipeline
deps: [def-reverse-filtration-and-reverse-martingale, lem-doob-upcrossing-inequality, thm-uniform-integrability-of-conditional-expectations-of-one-variable, thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence, thm-almost-sure-convergence-implies-convergence-in-probability, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 2.30 and Exercise 2.31, pp. 17–18", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. If $(X_n,\mathcal G_n)$ is a reverse martingale, then
$$X_n\longrightarrow\mathbb E[X_0\mid\mathcal G_\infty]$$
almost surely and in $L^1$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-reverse-filtration-and-reverse-martingale]] gives $X_n=\mathbb E[X_0\mid\mathcal G_n]$.

[F2] [[thm-uniform-integrability-of-conditional-expectations-of-one-variable]] makes $(X_n)$ uniformly integrable.

[F3] [[lem-doob-upcrossing-inequality]] bounds crossings of each finite reversed martingale segment.

[F4] [[thm-almost-sure-convergence-implies-convergence-in-probability]] and [[thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]] upgrade the limit to $L^1$.

[F5] [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]] gives measurability of the pointwise limit, and [[def-conditional-expectation-as-an-ae-class]] identifies it by event integrals.

[F6] [[def-axiom-of-choice]] has exactly the inherited conditional-expectation/version use in F1, F2, F3, F4, F5.

## Proof

1.1 Fix $N$. Read $X_N,X_{N-1},\ldots,X_0$ in that order with filtration $\mathcal G_N\subseteq\cdots\subseteq\mathcal G_0$; F1 makes this a finite ordinary martingale. An upcrossing of $X_0,\ldots,X_N$ becomes a downcrossing of the reversed list, hence an upcrossing of its negative through $[-b,-a]$. F3 bounds its expectation by endpoint positive parts, uniformly in $N$, because F2 gives uniform $L^1$ bounds. The same argument directly bounds downcrossings. [F1, F2, F3]

2.1 For every rational $a<b$, the total upcrossing and downcrossing counts are finite almost surely. Intersecting these countably many full-measure events, the usual rational-interval argument gives a finite or extended-real limit. Uniform integrability bounds the positive and negative tails uniformly, so Fatou excludes both infinite values. Denote the finite almost-sure limit by $X_\infty$. [F2, F3, step 1.1]

3.1 The almost-sure convergence from step 2.1 gives convergence in probability by F4. Using the uniformly integrable family from F2, F4 then upgrades it to $X_n\to X_\infty$ in $L^1$. [F2, F4, step 2.1]

4.1 Fix $r$. For all $n\ge r$, $X_n$ is $\mathcal G_n$-measurable and $\mathcal G_n\subseteq\mathcal G_r$, so F5 makes $X_\infty$ measurable for $\mathcal G_r$. This holds for every $r$, hence $X_\infty$ is $\mathcal G_\infty$-measurable. If $A\in\mathcal G_\infty$, then $A\in\mathcal G_n$ for every $n$ and F1 gives $$\int_A X_n\,dP=\int_A X_0\,dP.$$ The $L^1$ limit passes through the left integral, so F5 identifies $X_\infty=\mathbb E[X_0\mid\mathcal G_\infty]$. AC is used exactly as recorded in F6. [F1, F5, F6, step 3.1] ∎
