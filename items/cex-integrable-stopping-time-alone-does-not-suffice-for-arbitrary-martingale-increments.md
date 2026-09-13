---
id: cex-integrable-stopping-time-alone-does-not-suffice-for-arbitrary-martingale-increments
kind: counterexample
title: Integrable stopping time alone does not suffice for arbitrary martingale increments
status: draft
origin: pipeline
deps: [def-martingale-submartingale-and-supermartingale, def-expectation-of-a-nonnegative-or-integrable-random-variable, lem-equivalent-event-tests-for-a-discrete-stopping-time, thm-monotone-convergence-for-the-integral, rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis, def-axiom-of-choice]
proof_strategy: counterexample
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, warning after Theorem 2.42, p. 22", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. There is a martingale $M$ and an integrable stopping time $\tau$ such that $M_\tau$ is integrable but $\mathbb EM_\tau\ne\mathbb EM_0$. Thus $\mathbb E\tau<\infty$ is insufficient when martingale increments are unbounded.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-martingale-submartingale-and-supermartingale]] gives the event-integral test used to verify the process locally.

[F2] [[lem-equivalent-event-tests-for-a-discrete-stopping-time]] tests $\tau$ through $\{\tau>n\}$.

[F3] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and [[thm-monotone-convergence-for-the-integral]] compute its tail expectation.

[F4] [[rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis]] identifies the missing bounded-increment/dominating mechanism.

[F5] [[def-axiom-of-choice]] is inherited from the martingale conditional-expectation interface.

## Counterexample

1.1 On $([0,1],\mathcal B,\lambda)$ put $A_n=(0,2^{-n}]$, $\mathcal F_0$ trivial, $\mathcal F_n=\sigma(A_1,\ldots,A_n)$, $M_0=1$, and $M_n=2^n1_{A_n}$ for $n\ge1$. On the atom $A_n$, $M_{n+1}$ equals $2^{n+1}$ on a half-measure subatom and zero on the other half, so its conditional average is $2^n$; off $A_n$ both variables vanish. Thus F1 proves directly that $M$ is a nonnegative martingale with $\mathbb EM_n=1$. [F1, F3]

1.2 Let $\tau=\inf\{n\ge1:M_n=0\}$. For $n\ge1$, $\{\tau>n\}=A_n\in\mathcal F_n$, so F2 makes $\tau$ a stopping time. Its tail sum is $$\mathbb E\tau=\sum_{n\ge0}P(\tau>n) =1+\sum_{n\ge1}2^{-n}=2.$$ [F2, F3]

2.1 The intersection of the $A_n$ is empty, so every path eventually leaves and $M_\tau=0$. Hence $M_\tau$ is integrable but $$\mathbb EM_\tau=0\ne1=\mathbb EM_0.$$ On $A_n\setminus A_{n+1}$ the next increment has magnitude $2^n$, so no deterministic increment bound exists; this is exactly the missing hypothesis flagged by F4. The proof reconstructs its martingale locally and does not depend on a B-page supplier. AC has only the role in F5. [F4, F5, step 1.1, step 1.2] ∎