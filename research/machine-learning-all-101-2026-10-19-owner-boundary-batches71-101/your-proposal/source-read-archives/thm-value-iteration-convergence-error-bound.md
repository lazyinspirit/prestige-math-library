---
id: thm-value-iteration-convergence-error-bound
kind: theorem
title: "Value iteration converges at the Bellman contraction rate"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - alg-value-iteration
  - thm-bellman-contraction-and-unique-fixed-point
  - def-integer-power
  - thm-induction-principle
justified_by: []
aliases: []
forward_refs: []
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§4.4, value-iteration recurrence and convergence discussion, equations (4.10) and following text; the error estimate is proved locally here."
---

## Statement

Let $V^*$ be the unique fixed point of $T^*$ for a finite MDP with $0\le\gamma<1$. For every initial $V_0\in\mathbb R^S$ and every $m\in\mathbb N$, the exact value-iteration iterates $V_{m+1}=T^*V_m$ satisfy

$$ \|V_m-V^*\|_\infty\le\gamma^m\|V_0-V^*\|_\infty, $$

with $\gamma^0=1$.

## Statement references

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

## Facts & Assumptions

**Given:** A finite MDP, $0\le\gamma<1$, an initial function $V_0\in\mathbb R^S$, and $m\in\mathbb N$.

[F1] [[alg-value-iteration]]: the exact iterates satisfy $V_{j+1}=T^*V_j$.

[F2] [[thm-bellman-contraction-and-unique-fixed-point]]: $T^*$ has a unique fixed point $V^*$ and $\|T^*U-T^*W\|_\infty\le\gamma\|U-W\|_\infty$.

[L1] [[def-integer-power]]: $\gamma^0=1$ and $\gamma^{j+1}=\gamma\gamma^j$ for every $j\in\mathbb N$.

[L2] [[thm-induction-principle]]: a claim true at $0$ and preserved from $j$ to $j+1$ holds for every natural $j$.

## Proof

1.1 At $m=0$, $V_m=V_0$ and $\gamma^0=1$ by [L1], so the asserted inequality is equality. [given, F1, L1, algebra, base]

1.2 Induction hypothesis: assume $\|V_m-V^*\|_\infty\le\gamma^m\|V_0-V^*\|_\infty$ for an arbitrary $m\in\mathbb N$. [ih]

2.1 By [F1], [F2], and $T^*V^*=V^*$, $$ \|V_{m+1}-V^*\|_\infty =\|T^*V_m-T^*V^*\|_\infty \le\gamma\|V_m-V^*\|_\infty \le\gamma^{m+1}\|V_0-V^*\|_\infty, $$ where the last equality of factors uses [L1]. [step 1.2, F1, F2, L1, algebra]

3.1 Step 1.1 is the base case and step 2.1 is the induction step, so [L2] gives the inequality for every $m\in\mathbb N$. [step 1.1, step 2.1, L2, induction, discharge-induction: step 2.1] ∎
