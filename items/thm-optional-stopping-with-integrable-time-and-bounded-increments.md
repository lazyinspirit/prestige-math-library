---
id: thm-optional-stopping-with-integrable-time-and-bounded-increments
kind: theorem
title: Optional stopping with integrable time and bounded increments
status: draft
origin: pipeline
deps: [thm-optional-sampling-for-bounded-stopping-times, thm-dominated-convergence, def-expectation-of-a-nonnegative-or-integrable-random-variable, cor-markov-inequality-for-random-variables, def-axiom-of-choice]
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
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., optional stopping criteria in §4.8", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Assume AC. Let $M$ be a martingale with $|M_n-M_{n-1}|\le C$ almost surely for every $n\ge1$, for deterministic $C<\infty$. If $\tau$ is a stopping time with $\mathbb E\tau<\infty$, define $M_\tau=0$ on the null event $\{\tau=\infty\}$. Then $M_\tau\in L^1$ and $\mathbb EM_\tau=\mathbb EM_0$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-optional-sampling-for-bounded-stopping-times]] gives $\mathbb EM_{\tau\wedge n}=\mathbb EM_0$.

[F2] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] defines $\mathbb E\tau$ as an extended nonnegative integral; [[cor-markov-inequality-for-random-variables]] bounds $\mathbb P(\tau\ge m)$ by $\mathbb E\tau/m$ for each $m>0$.

[F3] [[thm-dominated-convergence]] passes the stopped values in $L^1$.

[F4] [[def-axiom-of-choice]] is inherited from the martingale and bounded optional-sampling theorem.

## Proof

1.1 For every positive integer $m$, F2 gives $\mathbb P(\tau=\infty)\le\mathbb P(\tau\ge m)\le\mathbb E\tau/m$. Since $\mathbb E\tau<\infty$, letting $m\to\infty$ shows $\tau<\infty$ almost surely. On that event, $$|M_{\tau\wedge n}-M_\tau| \le C(\tau-n)^+\le C\tau,$$ because the difference telescopes over at most $(\tau-n)^+$ increments. It tends pointwise to zero and has the integrable dominator $C\tau$. [F2]

2.1 F3 gives $M_{\tau\wedge n}\to M_\tau$ in $L^1$; in particular $M_\tau$ is integrable. F1 gives $\mathbb EM_{\tau\wedge n}=\mathbb EM_0$ for every $n$, so taking the $L^1$ limit proves the equality. Bounded increments and integrability of $\tau$ are used exactly in step 1.1. AC has only the role in F4. [F1, F3, F4, step 1.1] ∎
