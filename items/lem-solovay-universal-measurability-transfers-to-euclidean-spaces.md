---
id: lem-solovay-universal-measurability-transfers-to-euclidean-spaces
kind: lemma
title: Universal real measurability transfers to finite-dimensional Euclidean spaces
status: published
origin: pipeline
deps: [thm-every-solovay-model-set-of-reals-is-lebesgue-measurable, thm-solovay-inner-model-satisfies-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, lem-dyadic-coding-coin-measure-and-lebesgue-transfer, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: measure-preserving-coding
sources: {references: [{title: "Solovay 1970, Part III §4", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}]}
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Statement

In $M$, every subset of $\mathbb R^n$ is Lebesgue measurable for each positive finite $n$.

## Facts & Assumptions

**Given:** $1\le n<\omega$ and $E\subseteq\mathbb R^n$ in $M$.

[F1] [[thm-every-solovay-model-set-of-reals-is-lebesgue-measurable]]: every subset of $\mathbb R$ is measurable.

[F2] [[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]]: nonterminating binary codes identify interval measure with fair-coin cylinder measure.

[F3] [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]: $n$-dimensional measure completes product measure.

[F4] [[thm-solovay-inner-model-satisfies-dependent-choice]]: $M$ satisfies DC.

[F5] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, DC implies countable choice, which supplies the precise choice hypothesis of F3.

[F6] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: translations preserve Lebesgue measurability in every finite dimension.

## Proof

1.1 Let $D\subseteq[0,1)$ consist of the reals whose canonical binary code has no eventually-$1$ subsequence in any residue class modulo $n$; its complement is the finite union of Borel null sets. Split the digits of a code in $D$ by residue modulo $n$. This is a Borel bijection $T:D\to[0,1)^n$ with Borel inverse given by interleaving the canonical coordinate codes. A length-$nk$ cylinder maps to the corresponding product of $n$ dyadic intervals, each of length $2^{-k}$; both sides have measure $2^{-nk}$. The monotone-class extension and F2–F3 make $T$ measure preserving on all Borel sets and send Borel null sets both ways. F3 assumes countable choice, supplied here exactly by internal DC through F4–F5; the digit map itself makes no selections. [F2, F3, F4, F5]

2.1 For arbitrary $E\subseteq[0,1)^n$, F1 makes $T^{-1}(E)$ measurable. Completion gives Borel $B_0$ and Borel null $N_0$ with $T^{-1}(E)\mathbin\triangle B_0\subseteq N_0$. Put $B=B_0\cap D$ and $N=N_0\cap D$, so both lie in the domain of $T$. Bimeasurability and step 1.1 give $E\mathbin\triangle T(B)\subseteq T(N)$, with Borel measurable $T(B)$ and null $T(N)$; hence $E$ is measurable. [F1, F3, step 1.1]

3.1 Cover $\mathbb R^n$ by the explicitly indexed disjoint half-open cubes $k+[0,1)^n$, $k\in\mathbb Z^n$. For each $k$, the set $E_k=(E\cap(k+[0,1)^n))-k$ belongs to $M$ and is measurable by step 2.1; F6 makes its translate $E_k+k$ measurable. The defining closure of the Lebesgue sigma-algebra under the displayed countable union now gives $E=\bigcup_{k\in\mathbb Z^n}(E_k+k)$ measurable, with no selection of representatives. When $n=1$, there is one residue class, $D=[0,1)$ for canonical non-eventually-$1$ codes, and $T$ is the identity under that code, so step 2.1 is exactly F1. The case $n=0$ is outside the stated positive range. [F1, F6, step 1.1, step 2.1] ∎
