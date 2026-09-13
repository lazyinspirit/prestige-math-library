---
id: cor-gamblers-ruin-expected-duration
kind: corollary
title: Expected duration of symmetric gambler's ruin
status: draft
origin: pipeline
deps: [cor-gamblers-ruin-hitting-probability-from-optional-stopping, thm-optional-sampling-for-bounded-stopping-times, thm-square-minus-predictable-quadratic-variation-is-a-martingale, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-axiom-of-choice]
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
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., gambler's ruin and optional stopping in §4.8", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Assume AC. In the symmetric gambler's ruin setting with $S_0=i$ and absorbing levels $0,N$, the exit time satisfies
$$\mathbb E\tau=i(N-i).$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[cor-gamblers-ruin-hitting-probability-from-optional-stopping]] gives almost-sure finiteness and $P(S_\tau=N)=i/N$.

[F2] [[thm-square-minus-predictable-quadratic-variation-is-a-martingale]] makes $S_n^2-n$ a martingale for unit-variance increments.

[F3] [[thm-optional-sampling-for-bounded-stopping-times]] applies at $\tau\wedge n$.

[F4] [[thm-dominated-convergence]] and [[thm-monotone-convergence-for-the-integral]] pass the two stopped terms separately.

[F5] [[def-axiom-of-choice]] is inherited from the martingale and optional-sampling interfaces.

## Proof

1.1 The predictable quadratic variation of the symmetric walk is $n$, since every increment has conditional square one. Thus F2 and bounded optional sampling give $$\mathbb E[S_{\tau\wedge n}^2]-\mathbb E(\tau\wedge n)=i^2.$$ [F2, F3]

1.2 The stopped position lies in $[0,N]$ and converges almost surely to $S_\tau$ by F1. DCT gives $$\mathbb E[S_{\tau\wedge n}^2]\to\mathbb ES_\tau^2 =N^2\mathbb P(S_\tau=N)=Ni.$$ Meanwhile $\tau\wedge n\uparrow\tau$, so MCT gives $\mathbb E(\tau\wedge n)\uparrow\mathbb E\tau$, initially allowing infinity. [F1, F4]

2.1 Taking limits in step 1.1 forces the latter value to be finite and gives $$Ni-\mathbb E\tau=i^2,\qquad \mathbb E\tau=i(N-i).$$ The argument does not assume integrability of $\tau$ before proving it. AC has exactly the role in F5. [F5, step 1.1, step 1.2] ∎