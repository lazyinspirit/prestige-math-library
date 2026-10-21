---
id: lem-action-independent-baseline-does-not-bias-policy-gradient
kind: lemma
title: "A state-dependent action-independent baseline preserves the gradient mean"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-finite-markov-decision-process
  - def-differentiable-stochastic-policy
  - def-episodic-returns-td-errors-and-policy-support
  - lem-policy-score-has-zero-conditional-mean
  - thm-policy-gradient-theorem
  - def-axiom-of-choice
  - def-conditional-expectation-given-a-sigma-algebra
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-taking-out-what-is-known
  - thm-geometric-series
  - thm-dominated-convergence
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition draft"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf"
      locator: "§13.4, baseline identity (13.8) and REINFORCE with baseline update (13.9), printed pp. 271–272."
    - title: "Ronald J. Williams, Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning, Machine Learning 8 (1992)"
      url: "https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf"
      locator: "§4 and Appendix A.1, conditional action-independence of the baseline and its zero score contribution, printed pp. 233–234 and PDF pp. 249–250."

---

## Statement

Assume the hypotheses of the discounted episodic policy-gradient theorem at a fixed parameter $\theta_0$, including the Axiom of Choice, common support, almost-sure finite termination, dominated trajectory differentiation, and the stated integrability of discounted return-score products. Let $b:S\to\mathbb R$ be any fixed finite-valued function of the state, chosen independently of the actions in the episode. Then

$$\mathbb E_{\theta_0}\!\left[\sum_{t=0}^{T-1}\gamma^t\bigl(G_t-b(S_t)\bigr)\nabla_\theta\log\pi_{\theta_0}(A_t\mid S_t)\right]=\nabla_\theta J(\theta_0).$$

The baseline is action-independent conditional on the state and past. This identity says that subtracting it preserves the expected update; it does not say that every baseline reduces variance.

## Statement references

[Sutton and Barto, *Reinforcement Learning: An Introduction*, second-edition draft](https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf).

[Williams, *Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning*](https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf).

## Facts & Assumptions

**Given:** The hypotheses and notation of [[thm-policy-gradient-theorem]], its Axiom of Choice premise, and a fixed finite-valued state function $b$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the policy trajectory law and conditional-expectation supplier use this axiom.

[F1] [[thm-policy-gradient-theorem]]: under its stated trajectory-differentiation and integrability assumptions, $\mathbb E[\sum_{t<T}\gamma^tG_t\psi_t]=\nabla J(\theta_0)$.

[F2] [[lem-policy-score-has-zero-conditional-mean]]: for the pre-action history $\mathcal H_t$, $\mathbb E[\psi_t\mid\mathcal H_t]=0$ almost surely.

[F3] [[def-finite-markov-decision-process]] and [[def-differentiable-stochastic-policy]]: the state and action sets are finite, and at fixed $\theta_0$ every score vector on the common support is finite; hence the finitely many score vectors are bounded.

[F4] [[def-episodic-returns-td-errors-and-policy-support]]: $0\le\gamma<1$, episodes terminate almost surely, and $G_t$ is the discounted return from time $t$.

[F5] [[thm-taking-out-what-is-known]]: an integrable variable measurable with respect to $\mathcal H_t$ can be taken outside conditional expectation when its product is integrable.

[F6] [[thm-geometric-series]]: for $0\le\gamma<1$, $\sum_{t=0}^\infty\gamma^t=1/(1-\gamma)$.

[F7] [[thm-dominated-convergence]]: almost-sure convergence under a single integrable majorant permits convergence of expectations.

## Proof

**Given:** The Statement hypotheses, with $\psi_t=\nabla_\theta\log\pi_{\theta_0}(A_t\mid S_t)$ for $t<T$.

1.1 Because $S$ is finite, $b$ is bounded; because the state-action support is finite, [F3] gives $C_\psi:=\max_{s,a\in B(s)}\|\psi_{\theta_0}(s,a)\|_2<\infty$. For every episode, [F6] bounds the baseline-score sum by $\sum_{t<T}\gamma^t|b(S_t)|\|\psi_t\|_2\le \|b\|_\infty C_\psi/(1-\gamma)$. For each fixed $t$, $\mathbf1_{\{t<T\}}b(S_t)$ is $\mathcal H_t$-measurable, so [F2] and [F5] give $\mathbb E[\gamma^t\mathbf1_{\{t<T\}}b(S_t)\psi_t]=0$. [given, A1, F2, F3, F5, F6, algebra]

2.1 The partial baseline-score sums converge almost surely to the full sum because $T<\infty$ almost surely, and the bound in step 1.1 is an integrable constant majorant. By [F7], the expectation of the full baseline-score sum is the limit of its finite partial-sum expectations, each zero by step 1.1; hence $\mathbb E[\sum_{t<T}\gamma^tb(S_t)\psi_t]=0$. [step 1.1, F4, F7]

3.1 Subtracting the zero vector in step 2.1 from the policy-gradient expectation in [F1] gives the displayed identity. [F1, step 2.1, algebra] ∎
