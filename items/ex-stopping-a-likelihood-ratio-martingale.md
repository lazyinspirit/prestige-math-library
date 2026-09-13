---
id: ex-stopping-a-likelihood-ratio-martingale
kind: example
title: Stopping a likelihood-ratio martingale
status: draft
origin: pipeline
deps: [thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, lem-conditional-expectation-process-is-a-martingale, thm-optional-sampling-for-bounded-stopping-times, lem-stopped-random-variable-is-measurable-at-the-stopping-time, def-axiom-of-choice]
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
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., likelihood-ratio martingales in Chapter 4", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Assume AC. Let $N\in\mathbb N_0$, let $(\mathcal F_n)_{0\le n\le N}$ be a filtration on a probability space $(\Omega,\mathcal F_N,P)$, and let $Q$ be a probability measure on $\mathcal F_N$ with $Q\ll P$. Let
$$L_n=\mathbb E_P[dQ/dP\mid\mathcal F_n],\qquad0\le n\le N.$$
For every stopping time $\tau\le N$, $L_\tau$ is nonnegative, $\mathcal F_\tau$-measurable, and $\mathbb E_PL_\tau=1$. Moreover
$$Q(A)=\mathbb E_P[1_AL_\tau]\qquad(A\in\mathcal F_\tau).$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]] supplies the nonnegative terminal density $L_N=dQ/dP$ with mean one.

[F2] [[lem-conditional-expectation-process-is-a-martingale]] makes $L_n$ a nonnegative martingale.

[F3] [[thm-optional-sampling-for-bounded-stopping-times]] gives conditional and unconditional identities at $\tau$.

[F4] [[lem-stopped-random-variable-is-measurable-at-the-stopping-time]] gives $\mathcal F_\tau$-measurability.

[F5] [[def-axiom-of-choice]] is used exactly for Radon–Nikodym and conditional-expectation existence.

## Proof

1.1 F1 and conditional positivity make every $L_n$ nonnegative; F2 makes the process a martingale. F4 makes $L_\tau$ $\mathcal F_\tau$-measurable. Applying F3 between $\tau$ and deterministic $N$ gives $$L_\tau=\mathbb E_P[L_N\mid\mathcal F_\tau], \qquad \mathbb E_PL_\tau=\mathbb E_PL_N=Q(\Omega)=1.$$ [F1, F2, F3, F4]

2.1 For $A\in\mathcal F_\tau$, the defining conditional-expectation identity in step 1.1 gives $$\mathbb E_P[1_AL_\tau]=\mathbb E_P[1_AL_N]=Q(A),$$ where the final equality is the Radon–Nikodym identity and $A\in\mathcal F_\tau\subseteq\mathcal F_N$. AC has precisely the role in F5. [F1, F3, F5, step 1.1] ∎
