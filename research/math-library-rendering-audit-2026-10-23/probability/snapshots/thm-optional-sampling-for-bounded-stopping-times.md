---
id: thm-optional-sampling-for-bounded-stopping-times
kind: theorem
title: Optional sampling for bounded stopping times
status: published
origin: pipeline
deps: [def-sigma-algebra-at-a-stopping-time, lem-stopped-random-variable-is-measurable-at-the-stopping-time, thm-bounded-predictable-transforms-preserve-martingales, cor-nonnegative-predictable-transforms-preserve-submartingale-gains, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 2.42 and proof, pp. 21–22", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. If $M$ is a martingale and $\sigma\le\tau$ are stopping times bounded by a deterministic $N$, then
$$\mathbb E[M_\tau\mid\mathcal F_\sigma]=M_\sigma\quad\text{a.s.},$$
so $\mathbb EM_\tau=\mathbb EM_\sigma$. For a submartingale $X$ the conditional and expectation inequalities point upward; for a supermartingale they point downward.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-sigma-algebra-at-a-stopping-time]] gives the events usable in conditional testing.

[F2] [[lem-stopped-random-variable-is-measurable-at-the-stopping-time]] gives the required measurability of stopped values.

[F3] [[thm-bounded-predictable-transforms-preserve-martingales]] gives zero expected martingale transforms. [[cor-nonnegative-predictable-transforms-preserve-submartingale-gains]] gives the upward sign for submartingales and nonnegative holdings; applying it to $-X$ gives the downward sign for supermartingales.

[F4] [[def-conditional-expectation-as-an-ae-class]] identifies a conditional expectation from all event integrals.

[F5] [[def-axiom-of-choice]] supplies conditional-expectation representatives.

## Proof

1.1 Put $H_k=1_{\{\sigma<k\le\tau\}}$ for $1\le k\le N$. Both $\{\sigma<k\}=\{\sigma\le k-1\}$ and $\{\tau\ge k\}$ lie in $\mathcal F_{k-1}$, so $H$ is nonnegative, bounded, and predictable. On the probability-one event $\{\sigma\le\tau\le N\}$, the finite pathwise telescope is $$X_\tau-X_\sigma=\sum_{k=1}^NH_k(X_k-X_{k-1}).$$ The integral identities below use this almost-sure equality; no equality is asserted on a null outcome with $\tau>N$. [F1]

2.1 Fix $A\in\mathcal F_\sigma$. On $\{\sigma\ge k\}$, $H_k=0$; hence $$1_AH_k=1_{A\cap\{\sigma\le k-1\}}H_k,$$ and the first factor on the right is $\mathcal F_{k-1}$-measurable by F1. Thus $1_AH$ is another bounded nonnegative predictable process. [F1, step 1.1]

3.1 Apply F3's one-step conditional calculation and sum: for a submartingale, $$\int_A(X_\tau-X_\sigma)\,dP\ge0;$$ for a martingale equality holds, and for a supermartingale the inequality reverses. Almost-sure boundedness identifies every stopped value almost surely with a finite sum of integrable variables, while F2 gives $\mathcal F_\sigma$-measurability of $X_\sigma$. F4 therefore identifies the stated conditional relation. Taking $A=\Omega$ gives the expectation relation. AC has exactly the role in F5. [F2, F3, F4, F5, step 1.1, step 2.1] ∎
