---
id: lem-policy-score-has-zero-conditional-mean
kind: lemma
title: "A policy score has zero conditional mean before the action"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - def-differentiable-stochastic-policy
  - lem-finite-mdp-policy-action-state-reward-path-law
  - def-axiom-of-choice
  - def-conditional-expectation-given-a-sigma-algebra
  - def-sum-over-a-finite-index-set
  - thm-algebra-of-total-derivatives
  - thm-induction-principle
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition draft"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf"
      locator: "§13.4, the state-dependent baseline term vanishes because action probabilities sum to one; printed pp. 271–272."
    - title: "Ronald J. Williams, Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning, Machine Learning 8 (1992)"
      url: "https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf"
      locator: "Appendix A.1, Facts 1–2 and Lemma 1: differentiating the normalized action-output distribution cancels an action-independent baseline; PDF pp. 249–250."

---

## Statement

Assume the Axiom of Choice. Let $S$ be a nonempty finite state set, let each $A(s)$ be a finite nonempty action set, and let $p(s',r\mid s,a)$ be a fixed normalized joint law for the next state and reward. Fix an initial state and a terminal set $S_\dagger\subseteq S$. Under a differentiable stationary policy family with a support that is fixed and strictly positive on that support throughout its open parameter domain, assume the induced episode terminates almost surely. For $t\ge0$, let $\mathcal H_t=\sigma(S_0,A_0,R_1,\ldots,A_{t-1},R_t,S_t)$ be the information available just before the time-$t$ action, and let $\psi_t=\nabla_\theta\log\pi_\theta(A_t\mid S_t)$ when $t<T$, where $T$ is the first terminal time. Define $\psi_t=0$ when $t\ge T$. Then, coordinate by coordinate,

$$\mathbb E_\theta[\psi_t\mid\mathcal H_t]=0\quad\text{almost surely for every }t\ge0.$$

## Statement references

[Sutton and Barto, *Reinforcement Learning: An Introduction*, second-edition draft](https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf).

[Williams, *Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning*](https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf).

## Facts & Assumptions

**Given:** The stated finite MDP, initial state, terminal set, differentiable policy family, Axiom of Choice, and its action-state-reward path law.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the path-law construction below is the use of this axiom.

[F1] [[def-finite-markov-decision-process]]: the state, reward, and state-dependent action sets are finite; for each admissible $(s,a)$ the joint masses $p(s',r\mid s,a)$ are nonnegative and sum to one; a stationary policy is a normalized action distribution.

[F2] [[def-differentiable-stochastic-policy]]: the policy probabilities are totally differentiable in the open parameter domain, and each state has a fixed support on which every probability is positive; on that support $\psi_\theta(s,a)=\nabla_\theta\log\pi_\theta(a\mid s)$.

[F3] [[lem-finite-mdp-policy-action-state-reward-path-law]]: under Choice, each feasible finite trajectory prefix has probability equal to the product of its action probabilities and joint transition-reward masses.

[F4] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is integrable, measurable with respect to the conditioning sigma-algebra, and has the same integral as the original variable on every event in that sigma-algebra.

[F5] [[thm-algebra-of-total-derivatives]]: the sum of two totally differentiable maps is totally differentiable with the sum of their derivatives.

[F6] [[def-sum-over-a-finite-index-set]]: a finite sum is independent of the enumeration used to compute it.

[F7] [[thm-induction-principle]]: a property proved at zero and preserved from each natural number to its successor holds for every natural number.

## Proof

**Given:** The hypotheses and conventions in the Statement.

1.1 Fix $t$ and a positive-probability atom $h$ of $\mathcal H_t$ contained in $\{T>t\}$, and let $s$ be its current state. By [F3], adjoining action $a$ and next outcome $(s',r)$ multiplies the mass of $h$ by $\pi_\theta(a\mid s)p(s',r\mid s,a)$. Summing over the finite next-state and reward sets and using [F1] gives $\Pr(A_t=a\mid h)=\pi_\theta(a\mid s)$. On atoms contained in $\{T\le t\}$, $\psi_t=0$ by definition; on zero-probability atoms no conditional value is prescribed. [given, A1, F1, F3, algebra]

2.1 Enumerate the finite support as $B(s)=\{a_0,\ldots,a_{m-1}\}$. By induction on the number of terms, [F5] gives the derivative of this finite sum as the sum of the derivatives: the empty sum has derivative zero, and adjoining one term uses the binary sum rule. For each positive-probability history $h\subseteq\{T>t\}$ ending at $s$, the conditional score mean is $\sum_{a\in B(s)}\pi_\theta(a\mid s)\nabla_\theta\log\pi_\theta(a\mid s)=\sum_{a\in B(s)}\nabla_\theta\pi_\theta(a\mid s)=\nabla_\theta 1=0$. The first equality uses positivity on the support and the derivative of the logarithm; the second uses [F5], [F6], and the normalization in [F2]. [F2, F5, F6, F7, step 1.1, algebra]

3.1 To verify that this mean is a conditional-expectation version, note that $\mathcal H_t$ has finitely many atoms because its state, action, and reward alphabets are finite. The score coordinates are bounded at fixed $\theta$, since there are finitely many state-action pairs. On each positive-probability atom $h$ of $\mathcal H_t$, define $Y_t$ to have the constant value $\mathbb P_\theta(h)^{-1}\int_h\psi_t\,d\mathbb P_\theta$; set $Y_t=0$ on every null atom. If $h\subseteq\{T>t\}$, step 1.1 and the displayed calculation show that this value is zero; if $h\subseteq\{T\le t\}$, $\psi_t=0$ on $h$ by definition, so the value is again zero. Thus $Y_t$ is the zero, integrable, $\mathcal H_t$-measurable vector. Every event in $\mathcal H_t$ is a union of finitely many atoms, and summing the atom integral identities gives $\int_EY_t\,d\mathbb P_\theta=\int_E\psi_t\,d\mathbb P_\theta$ for every $E\in\mathcal H_t$, including null atoms. This verifies [F4], so $Y_t$ is a version of $\mathbb E_\theta[\psi_t\mid\mathcal H_t]$ and is zero almost surely. [F1, F2, F4, step 1.1, step 2.1, algebra] ∎
